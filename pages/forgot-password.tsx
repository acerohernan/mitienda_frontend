import PrimaryLayout from '../components/layouts/primary';
import ForgotPasswordScreen from '../views/auth/forgotPassword';
import { NextPageWithLayout } from './page';

const ForgotPassword: NextPageWithLayout = () => {
  return <ForgotPasswordScreen />;
};

export default ForgotPassword;

ForgotPassword.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
