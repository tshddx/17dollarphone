import Home from '../components/Home';

const FeaturesPage = () => {
  return <Home />;
};

export default FeaturesPage;

export async function getServerSideProps(_context) {
  return { props: {} };
}
