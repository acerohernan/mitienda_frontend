import { useState } from 'react';
import AdminHeader from '../../components/admin/header';
import AdminNavigation from '../../components/admin/navigation';
import { navItems } from '../../utils/data/admin';
interface DashboardScreenProps {}

const DashboardScreen: React.FC<DashboardScreenProps> = () => {
  const [page, setPage] = useState(1);
  const handlePage = (page: number) => setPage(page);

  return (
    <div>
      <AdminHeader />
      <AdminNavigation handlePage={handlePage} currentPage={page} />
      {navItems[page - 1].component}
    </div>
  );
};

export default DashboardScreen;
