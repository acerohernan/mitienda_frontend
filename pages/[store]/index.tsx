import PrimaryLayout from '../../components/layouts/primary';
import PrivateRoute from '../../components/route/private';
import StoreScreen from '../../views/store';
import { NextPageWithLayout } from '../page';

const Store: NextPageWithLayout = () => {
  return (
    <PrivateRoute>
      <StoreScreen />
    </PrivateRoute>
  );
};

export default Store;

Store.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
