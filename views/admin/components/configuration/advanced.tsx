import AdminSectionHeader from './sectionHeader';

const AdminConfigAdvanced = () => {
  return (
    <section className="screen-fit p-4 xl:px-0">
      <AdminSectionHeader title="Opciones avanzadas" />
      <div className="max-w-md">
        <div>
          <h1 className="h3">Mercado pago</h1>
          <p className="text-info mt-6">
            Conecta Mercado Pago a tu cuenta. Esto permitirá que generemos un
            link de pago a tus clientes luego de que hayan hecho su pedido.
          </p>
          <p className="p-4 bg-darkgreen100 mt-6 text-darkgreen400 rounded-md">
            Esta funcionalidad está disponible solo para el Plan Comercial.
            ¡Mejora el plan de tu sitio Pency!
          </p>
          <input
            className="text-field mt-4"
            disabled
            placeholder="Conectar Mercado Pago"
          />
        </div>
        <div className="divider mt-10 mb-12" />
        <div>
          <h1 className="h3">Marketing</h1>
          <p className="text-info mt-6">
            Podras medir las ventas totales, órdenes, y estadísticas de
            productos para tomar decisiones.
          </p>
          <p className="p-4 bg-darkgreen100 mt-4 text-darkgreen400 rounded-md">
            Esta funcionalidad está disponible solo para el Plan Comercial.
            ¡Mejora el plan de tu sitio Pency!
          </p>
          <button className="button mt-6 mb-6" disabled>
            Ir al panel de Marketing
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminConfigAdvanced;
