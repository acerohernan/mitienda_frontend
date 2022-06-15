import AdminHeader from '../../components/admin/header';
import AdminNavigation from '../../components/admin/navigation';
import AdminHome from './home';

interface DashboardScreenProps {
  store: string | string[] | undefined;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({ store }) => {
  return (
    <div>
      <AdminHeader />
      <AdminNavigation />
      <AdminHome />
    </div>
  );
};

export default DashboardScreen;
