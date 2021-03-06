import { useRouter } from 'next/router';
import { BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { ImFacebook } from 'react-icons/im';
import CategorySection from './components/categorySection';
import ProductModal from './components/productModal';

const StoreScreen = () => {
  const {
    query: { product },
    push,
  } = useRouter();

  const selected = Boolean(product);

  function handleSelect(id: number) {
    push(
      {
        pathname: `/[store]`,
        query: {
          product: id,
        },
      },
      {
        pathname: `/acerostore`,
        query: {
          product: id,
        },
      },
      { shallow: true }
    );
  }

  function handleCloseSelected() {
    push(`/[store]`, `/acerostore`, { shallow: true });
  }

  return (
    <>
      <section className="screen-fit px-4 ">
        <div className="w-full h-56 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-md" />
        <div className="pl-6 xs:grid xs:grid-cols-[160px_auto]">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-32 h-32 border-2 border-white -mt-16 xs:w-40 xs:h-40" />
          <div className="mt-2 ml-4 sm:flex sm:justify-between">
            <div>
              <h1 className="font-bold text-3xl md:text-4xl">
                URBN Catering {selected ? product : null}
              </h1>
              <span className="text-slate-600 mt-4">
                Galardonada pizza estilo New Haven en Palermo SOHO.
              </span>
              <div className="text-darkgreen400 flex mb-4 mt-2">
                <HiOutlineLocationMarker size={23} />
                <a
                  rel="noreferrer"
                  className="hover:underline"
                  href="https://www.google.com/maps/place/Av.+Eduardo+Madero+470+c1106,+C1106+CABA,+Argentina/@-34.6022568,-58.3687488,17z/data=!4m5!3m4!1s0x95a335325fa86d0f:0x7a11c3d652e84640!8m2!3d-34.6022568!4d-58.3687488"
                >
                  Av. Eduardo Madero 470, C1106 ACR, Buenos Aires...
                </a>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="text-white bg-darkgreen400 p-2 rounded-full hover:bg-darkgreen900 transition-all ease-in-out mr-2 w-10 h-10 flex items-center justify-center">
                <BsWhatsapp size={22} />
              </button>
              <button className="text-white bg-darkgreen400 p-2 rounded-full hover:bg-darkgreen900 transition-all ease-in-out mr-2 w-10 h-10 flex items-center justify-center">
                <BsInstagram size={22} />
              </button>
              <button className="text-white bg-darkgreen400 p-2 rounded-full hover:bg-darkgreen900 transition-all ease-in-out mr-2 w-10 h-10 flex items-center justify-center">
                <ImFacebook size={22} />
              </button>
              <button className="text-white bg-darkgreen400 p-2 rounded-full hover:bg-darkgreen900 transition-all ease-in-out mr-2 w-10 h-10 flex items-center justify-center">
                <BsTwitter size={22} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <span className="bg-darkgreen100 text-center text-darkgreen400 py-4 rounded-t-md">
            Enviamos de Lunes a Viernes de 19 - 24hs.
          </span>
          <div className="flex">
            <div className="bg-slate-100 p-2 w-40">
              <select
                className="bg-slate-100 text-md outline-none focus:border-none p-2"
                defaultValue="Categor??as"
              >
                <option>Categor??as</option>
                <option>Ensaladas</option>
                <option>Entradas</option>
              </select>
            </div>
            <input type="text" className="text-field" placeholder="Buscar..." />
          </div>
        </div>
        <div>
          <CategorySection
            items={[1, 2, 3, 4, 5]}
            handleSelect={handleSelect}
            handleCloseSelect={handleCloseSelected}
          />
          <CategorySection
            items={[1, 2, 3, 4, 5]}
            handleSelect={handleSelect}
            handleCloseSelect={handleCloseSelected}
          />
          <CategorySection
            items={[1, 2, 3, 4, 5]}
            handleSelect={handleSelect}
            handleCloseSelect={handleCloseSelected}
          />
        </div>
        <div className="sticky bottom-0 flex items-center justify-center pb-4 pt-10">
          <button className="button-sm mx-auto px-4 flex items-center">
            Tu pedido
            <span className="bg-darkgreen900 mx-2 p-1 px-2 text-sm rounded-md">
              9 items
            </span>
            $2750.00
          </button>
        </div>
        <span className="py-6 text-info mt-4 text-end">
          Sitio creado con{' '}
          <span className="font-semibold inline">MITIENDA</span>
        </span>
      </section>
      {selected && <ProductModal />}
    </>
  );
};

export default StoreScreen;
