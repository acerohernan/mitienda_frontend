import { useRouter } from 'next/router';
import PrimaryLayout from '../../components/layouts/primary';
import StoreScreen from '../../views/store';
import { NextPageWithLayout } from '../page';

const Store: NextPageWithLayout = () => {
  const {
    query: { store },
  } = useRouter();

  console.log(store);
  return <StoreScreen />;
};

export default Store;

Store.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
