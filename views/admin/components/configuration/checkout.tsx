import AdminSectionHeader from './sectionHeader';

const AdminConfigCheckout = () => {
  return (
    <section className="screen-fit p-4 xl:px-0">
      <AdminSectionHeader title="Campos adicionales" />
      <p className="text-info mt-2">
        Solicitá a tus clientes más información al momento de realizar el
        pedido. Por ejemplo: Forma de pago
      </p>
      <div className="max-w-md">
        <div className="mt-6">
          <h2 className="h3">Nombre completo</h2>
          <p className="text-info text-sm mt-1 mb-4">
            Permite a tus clientes escribir su nombre en el pedido
          </p>
          <button className="text-darkgreen400 text-sm">
            + Agregar nota al cliente
          </button>
          <div className="flex items-center justify-end">
            <span className="mr-1 text-sm">Obligatorio</span>
            <input type="checkbox" />
          </div>
        </div>
        <div className="divider mt-4 mb-10" />
        <div className="mt-6">
          <h2 className="h3">Forma de Pago</h2>
          <p className="text-info text-sm mt-1 mb-4">
            Permite a tus clientes escribir su nombre en el pedido
          </p>
          <button className="text-darkgreen400 text-sm">
            + Agregar un item
          </button>
          <div className="flex items-center justify-end">
            <span className="mr-1 text-sm">Obligatorio</span>
            <input type="checkbox" />
          </div>
        </div>
        <div className="divider mt-4 mb-10" />
        <div className="mt-6">
          <h2 className="h3">Método de entrega</h2>
          <p className="text-info text-sm mt-1 mb-4">
            Permite a tus clientes escribir su nombre en el pedido
          </p>
          <button className="text-darkgreen400 text-sm">
            + Agregar nota al cliente
          </button>
          <div className="flex items-center justify-end">
            <span className="mr-1 text-sm">Obligatorio</span>
            <input type="checkbox" />
          </div>
        </div>
        <div className="divider mt-4 mb-10" />
        <div className="mt-6">
          <h2 className="h3">Dirección de envío</h2>
          <p className="text-info text-sm mt-1 mb-4">
            Permite a tus clientes indicar donde deseam recibir el pedido
          </p>
          <button className="text-darkgreen400 text-sm">
            + Agregar nota al cliente
          </button>
          <div className="flex items-center justify-end">
            <span className="mr-1 text-sm">Obligatorio</span>
            <input type="checkbox" />
          </div>
        </div>
        <div className="divider mt-4 mb-10" />
        <div className="mt-6">
          <h2 className="h3">Aclaraciones del pedido</h2>
          <p className="text-info text-sm mt-1 mb-4">
            Permite a tus clientes escribir alguna aclaraciòn en su pedido
          </p>
          <button className="text-darkgreen400 text-sm">
            + Agregar nota al cliente
          </button>
          <div className="flex items-center justify-end">
            <span className="mr-1 text-sm">Obligatorio</span>
            <input type="checkbox" />
          </div>
        </div>
        <button className="button mt-10 md:hidden">Guardar</button>
      </div>
    </section>
  );
};

export default AdminConfigCheckout;
