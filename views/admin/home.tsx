import { AiOutlineInfoCircle, AiOutlineYoutube } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { TbBrandTelegram } from 'react-icons/tb';

import AdminButtonList from './components/home/buttonList';
import AdminMenbership from './components/home/membership';
import AdminReport from './components/home/report';
import AdminSteps from './components/home/steps';

const AdminHomeScreen = () => {
  return (
    <section className="m-2 md:grid md:grid-cols-2 md:gap-4 md:my-4 screen-fit px-2 xl:px-0">
      <div className="grid grid-cols-1 gap-2 md:gap-4">
        <AdminReport />
        <AdminSteps />
      </div>
      <div className="grid grid-cols-1 gap-2 mt-2 md:mt-0 md:gap-4">
        <AdminMenbership />
        <div className="card border-darkgreen100 border-2">
          <h1 className="h3">Publicidad</h1>
        </div>
        <AdminButtonList
          title="Comunidad MiTienda"
          items={[
            {
              label: 'Conoce todas las novedades en Telegram',
              icon: <BiMessage />,
            },
            {
              label: 'Consejos para vender online en nuestro blog',
              icon: <TbBrandTelegram />,
            },
          ]}
        />
        <AdminButtonList
          title="¿Necesitas Ayuda?"
          items={[
            {
              label: 'Mira los Videotutoriales',
              icon: <AiOutlineYoutube />,
            },
            {
              label: 'Lee las Preguntas Frecuentes',
              icon: <AiOutlineInfoCircle />,
            },
            {
              label: 'Chatea con nostros',
              icon: <FaWhatsapp />,
            },
          ]}
        />
        <div className="card bg-darkblue100">
          <h1 className="h3">
            ¡Aprende a usar MiTienda y potencia tus ventas!
          </h1>
          <p className="mt-3 font-light">
            Te esperamos en nuestro próximo webinar gratuito. ¡Conoce todo sobre
            tu nuevo canal de ventas y cómo aprovecharlo al máximo!
          </p>
          <button className="button-sm px-3 mt-6">Inscribirme</button>
        </div>
      </div>
    </section>
  );
};

export default AdminHomeScreen;
