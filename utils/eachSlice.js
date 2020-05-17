// From https://gist.github.com/SauloSilva/9771598
export default function eachSlice(array, size) {
  const slices = [];
  for (var i = 0, l = array.length; i < l; i += size) {
    slices.push(array.slice(i, i + size));
  }
  return slices;
}
