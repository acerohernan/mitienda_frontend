import PrimaryLayout from '../components/layouts/primary';
import ForgotStoreScreen from '../views/auth/forgotStore';
import { NextPageWithLayout } from './page';

const ForgotStore: NextPageWithLayout = () => {
  return <ForgotStoreScreen />;
};

export default ForgotStore;

ForgotStore.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
