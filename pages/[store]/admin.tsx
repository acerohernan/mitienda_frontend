import { useRouter } from 'next/router';
import PrimaryLayout from '../../components/layouts/primary';
import DashboardScreen from '../../views/admin/dashboard';
import { NextPageWithLayout } from '../page';

const Admin: NextPageWithLayout = () => {
  const {
    query: { store },
  } = useRouter();
  return <DashboardScreen store={store} />;
};

export default Admin;

Admin.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
