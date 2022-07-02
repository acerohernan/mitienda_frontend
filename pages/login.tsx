import PrimaryLayout from '../components/layouts/primary';
import PublicRoute from '../components/route/public';
import LoginScreen from '../views/auth/login';
import { NextPageWithLayout } from './page';

const Login: NextPageWithLayout = () => {
  return (
    <PublicRoute>
      <LoginScreen />
    </PublicRoute>
  );
};

export default Login;

Login.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
