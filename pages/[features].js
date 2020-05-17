import Home from '../components/Home';
import {
  FEATURES,
  OPTIONS,
  makePath,
  selectedFeaturesStats,
} from '../utils/features';
import cartesianProduct from '../utils/cartesianProduct';
import eachSlice from '../utils/eachSlice';

const FeaturesPage = () => {
  return <Home />;
};

export default FeaturesPage;

export async function getStaticProps(_context) {
  // This function needs to be defined for next.js to work. In our case, all the
  // "data" the page component needs comes from the route path.
  return { props: {} };
}

export async function getStaticPaths() {
  const paths = [];
  const featureNames = FEATURES.map((feature) => feature.name);
  const dollars = OPTIONS.map((option) => option.dollars);
  const allFeatureDollarCombinations = featureNames.map((featureName) =>
    cartesianProduct([featureName], [null, ...dollars])
  );
  const allSelectedFeaturesCombinations = cartesianProduct(
    ...allFeatureDollarCombinations
  );
  console.log(
    'allSelectedFeaturesCombinations:',
    allSelectedFeaturesCombinations.length
  );
  allSelectedFeaturesCombinations.forEach((combination) => {
    const entries = eachSlice(combination, 2);
    const selectedFeatures = Object.fromEntries(entries);
    const stats = selectedFeaturesStats(selectedFeatures);
    if (stats.totalDollars === 0 || stats.remainingDollars < 0) {
      if (stats.totalDollars === 0) {
        console.log('zero', selectedFeatures);
      }
      return;
    }
    const path = makePath(selectedFeatures);
    paths.push({ params: { features: path } });
  });
  console.log('paths:', paths.length);
  return {
    paths,
    fallback: true,
  };
}
