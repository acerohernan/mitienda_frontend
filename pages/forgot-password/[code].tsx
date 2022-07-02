import PrimaryLayout from '../../components/layouts/primary';
import PublicRoute from '../../components/route/public';
import ChangePasswordScreen from '../../views/auth/changePassword';
import { NextPageWithLayout } from '../page';

const ChangePassword: NextPageWithLayout = () => {
  return (
    <PublicRoute>
      <ChangePasswordScreen />
    </PublicRoute>
  );
};

export default ChangePassword;

ChangePassword.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
