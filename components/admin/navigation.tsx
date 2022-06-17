import { navItems } from '../../utils/data/admin';

interface AdminNavigationProps {
  currentPage: number;
  handlePage: (page: number) => void;
}

const AdminNavigation: React.FC<AdminNavigationProps> = ({
  handlePage,
  currentPage,
}) => {
  return (
    <nav className="bg-gray-100">
      <div className="screen-fit flex items-center overflow-scroll md:overflow-hidden">
        {navItems.map((item, i) => (
          <NavItem
            {...item}
            onPressed={() => handlePage(item.id)}
            active={currentPage === item.id}
            key={i}
          />
        ))}
      </div>
    </nav>
  );
};

interface NavItemProps {
  active?: boolean;
  label: string;
  icon: any;
  onPressed: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  active,
  label,
  icon,
  onPressed,
}) => {
  return (
    <button
      className={`flex items-center ${
        active && 'text-darkgreen400 border-darkgreen400 border-b'
      } p-3 px-4 border-b text-lg transition-all ease-in-out hover:text-darkgreen400`}
      onClick={onPressed}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
};

export default AdminNavigation;
