import PrimaryLayout from '../components/layouts/primary';
import LoginScreen from '../views/auth/login';
import { NextPageWithLayout } from './page';

const Login: NextPageWithLayout = () => {
  return <LoginScreen />;
};

export default Login;

Login.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
