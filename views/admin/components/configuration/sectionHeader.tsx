import Button from '../../../../components/form/button';

interface AdminSectionHeaderProps {
  title: string;
}

const AdminSectionHeader: React.FC<AdminSectionHeaderProps> = ({ title }) => {
  return (
    <div className="py-6 pb-7 max-w-4xl md:flex md:items-center md:justify-between md:mb-14 sticky top-0 bg-white z-10">
      <h1 className="h2">{title}</h1>
      <Button text="Guardar" small className="hidden md:block w-24" />
    </div>
  );
};

export default AdminSectionHeader;
