interface Item {
  label: string;
  component: JSX.Element;
}

interface AdminTabBarProps {
  currentPage: number;
  handlePage: (_page: number) => void;
  items: Item[];
}

const AdminTabBar: React.FC<AdminTabBarProps> = ({
  currentPage,
  handlePage,
  items,
}) => {
  return (
    <nav className="bg-white">
      <div className="screen-fit flex overflow-scroll lg:overflow-hidden">
        {items.map((item, i) => (
          <TabBarItem
            {...item}
            onPressed={() => handlePage(i + 1)}
            active={currentPage === i + 1}
            key={i}
          />
        ))}
      </div>
    </nav>
  );
};

interface TabBarItemProps {
  active?: boolean;
  label: string;
  onPressed: () => void;
}

const TabBarItem: React.FC<TabBarItemProps> = ({
  active,
  label,
  onPressed,
}) => {
  return (
    <button
      className={`${
        active
          ? 'text-darkgreen400 border-darkgreen400 border-b-2'
          : ' text-slate-500'
      } p-3 px-4 hover:text-darkgreen400`}
      onClick={onPressed}
    >
      {label}
    </button>
  );
};

export default AdminTabBar;
