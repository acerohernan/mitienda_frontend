import Image from 'next/image';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { FiCopy } from 'react-icons/fi';

const AdminPromote = () => {
  return (
    <section className="screen-fit p-4 xl:px-0">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4 ">
        <div className="card bg-darkgreen100">
          <div className=" grid grid-cols-[50px_auto_40px]">
            <div className="flex items-center justify-center bg-white border border-darkgreen900 h-8 w-8 rounded-full text-gray-600">
              <AiOutlineShareAlt size={20} />
            </div>
            <div>
              <h2 className="h3">Link de tu sitio</h2>
              <p className="mt-2 mb-4 text-info text-sm">
                Compartir el link de tu sitio en tus redes sociales te ayudará a
                recibir más pedidos y potenciar tu canal de ventas.
              </p>
            </div>
          </div>
          <div className="ml-12 flex justify-between items-center">
            <span>https://mitienda.app/acerostore</span>
            <button className="flex p-2 items-center justify-center h-10 w-10 self-end rounded-md hover:bg-slate-200 text-gray-600">
              <FiCopy size={25} />
            </button>
          </div>
        </div>
        <div className="card border-2 border-darkgreen100">
          <h2 className="h3">Compartir en Whatsapp y Facebook</h2>
          <p className="text-info text-sm mt-2 mb-6">
            Envia el link de tu tienda a tus contactos para promocionar tu sitio
            y conseguir más ventas.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button className="button">Whatsapp</button>
            <button className="text-white w-full py-3 rounded-md bg-blue-600">
              Facebook
            </button>
          </div>
        </div>
      </div>
      <div className="card border-2 border-darkgreen100   md:grid md:grid-cols-2">
        <div>
          <h2 className="h3">Agrega tu link a tu biografía de Instagram</h2>
          <p className="text-info text-sm mt-2">
            Comparte el link de tu sitio en el Instagram de tu comercio para que
            tus seguidores puedan visitarlo y pedir.
          </p>
          <div className="flex justify-center my-6 md:hidden">
            <Image src="/images/admin/instagram.jpg" width={120} height={120} />
          </div>
          <ul className="list-disc px-4 mb-6">
            <li className="text-info text-sm">Ve a tu perfil de Instagram</li>
            <li className="text-info text-sm">
              Toca Editar Perfil en la parte superior de la pantalla
            </li>
            <li className="text-info text-sm">
              En la sección de página web, pega el link de tu cuenta
            </li>
            <li className="text-info text-sm">Guarda los cambios</li>
          </ul>
          <span>https://mitienda.app/acerostore</span>
        </div>
        <div className="justify-center hidden md:flex">
          <Image
            src="/images/admin/instagram.jpg"
            width={300}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AdminPromote;
