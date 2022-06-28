import TextInputWithLabel from '../../../../components/form/inputWithLabel';
import AdminSectionHeader from './sectionHeader';

const AdminConfigAccount = () => {
  return (
    <div className="screen-fit p-4 xl:px-0">
      <form>
        <AdminSectionHeader title="Información de la cuenta" />
        <div className="max-w-md mt-6">
          <TextInputWithLabel
            labelText="Email"
            inputProps={{
              value: 'inversiones.acero.hernan@gmail.com',
              disabled: true,
            }}
          />
          <button className="button-sm px-4 mb-4">Modificar</button>
        </div>
        <div className="divider" />
        <div className="max-w-md mt-10">
          <h1 className="h2 mb-6">Deshabilitar cuenta</h1>
          <p className="text-info">
            Tu cuenta no estará visible para tus clientes. Sin embargo podrás
            continuar accediendo al Panel Administrador.
          </p>
          <button className="text-red-500">Deshabilitar cuenta</button>
        </div>
      </form>
    </div>
  );
};

export default AdminConfigAccount;
