import { useState } from 'react';
import AdminTabBar from '../../components/admin/tabBar';
import AdminConfigAccount from './components/configuration/account';
import AdminConfigCustomize from './components/configuration/customyze';
import AdminConfigHome from './components/configuration/home';

const tabBarItems = [
  {
    label: 'Información general',
    component: <AdminConfigHome />,
  },
  {
    label: 'Cuenta',
    component: <AdminConfigAccount />,
  },
  {
    label: 'Personalización',
    component: <AdminConfigCustomize />,
  },
  {
    label: 'Opciones del Checkout',
    component: <AdminConfigHome />,
  },
  {
    label: 'Opciones avanzadas',
    component: <AdminConfigHome />,
  },
  {
    label: 'Facebook Shops',
    component: <AdminConfigHome />,
  },
];

const AdminConfiguration = () => {
  const [page, setPage] = useState(1);

  return (
    <section>
      <AdminTabBar
        currentPage={page}
        handlePage={(page) => setPage(page)}
        items={tabBarItems}
      />
      {tabBarItems[page - 1].component}
    </section>
  );
};

export default AdminConfiguration;
