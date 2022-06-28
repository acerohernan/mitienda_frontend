import PrimaryLayout from '../../components/layouts/primary';
import ChangePasswordScreen from '../../views/auth/changePassword';
import { NextPageWithLayout } from '../page';

const ChangePassword: NextPageWithLayout = () => {
  return <ChangePasswordScreen />;
};

export default ChangePassword;

ChangePassword.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
