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

export function makePath(selectedFeatures) {
  let strings = [];

  OPTIONS.forEach((option) => {
    if (option.name === 'Poor') {
      return;
    }
    Object.entries(selectedFeatures).forEach(([featureName, optionName]) => {
      if (optionName === option.name) {
        strings += `${option.name}${featureName}`;
      }
    });
  });

  return strings.join('');
}
