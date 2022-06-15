import { useState } from 'react';
import { BiCube } from 'react-icons/bi';
import { FiHome } from 'react-icons/fi';
import { HiOutlineShare } from 'react-icons/hi';
import { VscSettingsGear } from 'react-icons/vsc';

const navItems = [
  {
    id: 1,
    label: 'Inicio',
    icon: <FiHome size={23} />,
  },
  {
    id: 2,
    label: 'Productos',
    icon: <BiCube size={23} />,
  },
  {
    id: 3,
    label: 'Configuración',
    icon: <VscSettingsGear size={23} />,
  },
  {
    id: 4,
    label: 'Promocionar',
    icon: <HiOutlineShare size={23} />,
  },
];

const AdminNavigation = () => {
  const [section, setSection] = useState(1);

  return (
    <div className="bg-gray-100 flex items-center overflow-scroll md:overflow-hidden">
      {navItems.map((item, i) => (
        <NavItem
          {...item}
          onPressed={() => setSection(item.id)}
          active={section === item.id}
          key={i}
        />
      ))}
    </div>
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
