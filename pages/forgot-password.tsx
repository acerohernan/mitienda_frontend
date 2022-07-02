import PrimaryLayout from '../components/layouts/primary';
import PublicRoute from '../components/route/public';
import ForgotPasswordScreen from '../views/auth/forgotPassword';
import { NextPageWithLayout } from './page';

const ForgotPassword: NextPageWithLayout = () => {
  return (
    <PublicRoute>
      <ForgotPasswordScreen />
    </PublicRoute>
  );
};

export default ForgotPassword;

ForgotPassword.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
