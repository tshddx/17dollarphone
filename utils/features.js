export const FEATURES = [
  { name: 'Display', emoji: '📱' },
  { name: 'Specs', emoji: '⿲' },
  { name: 'Camera', emoji: '📸' },
  { name: 'Battery', emoji: '🔋' },
  { name: 'Design', emoji: '🎩' },
  { name: 'Software', emoji: '📲' },
  { name: 'Marketing', emoji: '📣' },
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

export function updateSelectedFeatures(selectedFeatures, featureName, dollars) {
  return { ...selectedFeatures, [featureName]: dollars };
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
