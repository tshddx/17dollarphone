// From https://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript

export default function cartesianProduct(a, b, ...c) {
  const f = (a, b) => [].concat(...a.map((a) => b.map((b) => [].concat(a, b))));
  return b ? cartesianProduct(f(a, b), ...c) : a;
}
