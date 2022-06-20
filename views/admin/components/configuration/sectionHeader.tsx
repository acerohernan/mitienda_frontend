interface AdminSectionHeaderProps {
  title: string;
}

const AdminSectionHeader: React.FC<AdminSectionHeaderProps> = ({ title }) => {
  return (
    <div className="mb-6 mt-6 max-w-4xl md:flex md:items-center md:justify-between md:mb-14">
      <h1 className="h2">{title}</h1>
      <button className="hidden md:block button-sm px-5">Guardar</button>
    </div>
  );
};

export default AdminSectionHeader;
