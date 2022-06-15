import AdminMenbership from './components/membership';
import AdminReport from './components/report';
import AdminSteps from './components/steps';

const AdminHome = () => {
  return (
    <section>
      <div>
        <AdminReport />
        <AdminSteps />
      </div>
      <div>
        <AdminMenbership />
        <div className="card border-darkgreen100 border-2 m-2">
          <h1 className="h3">Publicidad</h1>
        </div>
        <div className="card bg-darkblue100  m-2">
          <h1 className="h3 mb-2">Comunidad MiTienda</h1>
          <button className="border-t border-gray-300 w-full text-start font-light py-4">
            Conoce todas las novedades en Telegram
          </button>
          <button className="border-t border-gray-300 w-full text-start font-light py-4">
            Consejos para vender online en nuestro blog
          </button>
        </div>
        <div className="card bg-darkblue100  m-2">
          <h1 className="h3">¿Necesitas ayuda?</h1>
        </div>
        <div className="card bg-darkblue100  m-2">
          <h1 className="h3">
            ¡Aprende a usar MiTienda y potencia tus ventas!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
