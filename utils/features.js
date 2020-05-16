import arrayToSentence from 'array-to-sentence';

export const FEATURES = [
  {
    name: 'Display',
    emoji: '📱',
    missingSentence: `Even a pager has a display!`,
  },
  {
    name: 'Specs',
    emoji: '⿲',
    missingSentence: 'How can a phone have no tech specs?',
  },
  {
    name: 'Camera',
    emoji: '📸',
    missingSentence: `Are you sure you don't want a camera?`,
  },
  {
    name: 'Battery',
    emoji: '🔋',
    missingSentence:
      'Is your phone powered by solar panels or a supercapacitor?',
  },
  {
    name: 'Design',
    emoji: '🎩',
    missingSentence: `You'll need someone to design your phone.`,
  },
  {
    name: 'Software',
    emoji: '📲',
    missingSentence: `Are you going to install your own OS?`,
  },
  {
    name: 'Marketing',
    emoji: '📣',
    missingSentence: `With no marketing, no one will ever know about this phone.`,
  },
];

export const OPTIONS = [
  { name: 'Excellent', dollars: 5 },
  { name: 'Average', dollars: 3 },
  { name: 'Poor', dollars: 1 },
];

export function getDefaultSelectedFeatures() {
  const selectedFeatures = {};
  FEATURES.forEach(({ name }) => {
    selectedFeatures[name] = null;
  });
  return selectedFeatures;
}

export function selectedFeaturesStats(selectedFeatures) {
  const totalDollars = Object.values(selectedFeatures).reduce(
    (a, b) => a + b,
    0
  );
  return { totalDollars, remainingDollars: 17 - totalDollars };
}

export function updateSelectedFeatures(selectedFeatures, featureName, dollars) {
  const newSelectedFeatures = { ...selectedFeatures, [featureName]: dollars };
  const stats = selectedFeaturesStats(newSelectedFeatures);
  if (stats.totalDollars > 17) {
    return null;
  }
  return newSelectedFeatures;
}

export function makePath(selectedFeatures) {
  let strings = [];
  OPTIONS.forEach((option) => {
    Object.entries(selectedFeatures).forEach(([featureName, dollars]) => {
      if (dollars === option.dollars) {
        strings.push(`${option.name}${featureName}`);
      }
    });
  });
  return strings.join(',');
}

export function parsePath(path) {
  const strings = path.split(',');
  const pairs = strings.map((string) => string.match(/[A-Z][a-z]+/g));
  console.log({ pairs });
  const selectedFeatures = getDefaultSelectedFeatures();
  pairs.forEach(([optionName, featureName]) => {
    const option = OPTIONS.find((option) => option.name === optionName);
    if (!option) {
      return;
    }
    selectedFeatures[featureName] = option.dollars;
  });
  return selectedFeatures;
}

export function makeSentence(selectedFeatures) {
  let strings = [];
  OPTIONS.forEach((option) => {
    Object.entries(selectedFeatures).forEach(([featureName, dollars]) => {
      if (dollars === option.dollars) {
        strings.push(
          `${option.name.toLowerCase()} ${featureName.toLowerCase()}`
        );
      }
    });
  });
  return `My $17 dollar phone would have ${arrayToSentence(strings, {
    lastSeparator: ', and ',
  })}.`;
}
