import PrimaryLayout from '../components/layouts/primary';
import PublicRoute from '../components/route/public';
import SignUpScreen from '../views/auth/signup';
import { NextPageWithLayout } from './page';

const Signup: NextPageWithLayout = () => {
  return (
    <PublicRoute>
      <SignUpScreen />
    </PublicRoute>
  );
};

export default Signup;

Signup.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
