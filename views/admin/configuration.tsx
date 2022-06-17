import { useState } from 'react';
import AdminTabBar from '../../components/admin/tabBar';
import AdminConfigHome from './components/configuration/home';

const tabBarItems = [
  {
    label: 'Información general',
    component: <AdminConfigHome />,
  },
  {
    label: 'Cuenta',
    component: <AdminConfigHome />,
  },
  {
    label: 'Personalización',
    component: <AdminConfigHome />,
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
    </section>
  );
};

export default AdminConfiguration;
