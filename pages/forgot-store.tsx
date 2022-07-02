import PrimaryLayout from '../components/layouts/primary';
import PublicRoute from '../components/route/public';
import ForgotStoreScreen from '../views/auth/forgotStore';
import { NextPageWithLayout } from './page';

const ForgotStore: NextPageWithLayout = () => {
  return (
    <PublicRoute>
      <ForgotStoreScreen />
    </PublicRoute>
  );
};

export default ForgotStore;

ForgotStore.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
