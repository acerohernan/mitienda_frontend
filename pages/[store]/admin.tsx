import { useEffect } from 'react';
import { toast } from 'react-toastify';
import API from '../../api';
import PrimaryLayout from '../../components/layouts/primary';
import PrivateRoute from '../../components/route/private';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateStoreInformation } from '../../store/store/actions';
import handleRequestError from '../../utils/error';
import DashboardScreen from '../../views/admin/dashboard';
import { NextPageWithLayout } from '../page';

const Admin: NextPageWithLayout = () => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  async function getStore() {
    try {
      const response = await API.store.getInformation();
      const data = response.data.data;
      dispatch(updateStoreInformation(data));
    } catch (e: any) {
      let err = handleRequestError(e);
      toast.error(err);
    }
  }

  useEffect(() => {
    if (!!token) getStore();
  }, []);

  return (
    <PrivateRoute>
      <DashboardScreen />
    </PrivateRoute>
  );
};

export default Admin;

Admin.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
