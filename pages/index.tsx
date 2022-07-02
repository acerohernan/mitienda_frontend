import PrimaryLayout from '../components/layouts/primary';
import LandingScreen from '../views/landing';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return <LandingScreen />;
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
