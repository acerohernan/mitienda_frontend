import PrimaryLayout from '../components/layouts/primary';
import SignUpScreen from '../views/auth/signup';
import { NextPageWithLayout } from './page';

const Signup: NextPageWithLayout = () => {
  return <SignUpScreen />;
};

export default Signup;

Signup.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
