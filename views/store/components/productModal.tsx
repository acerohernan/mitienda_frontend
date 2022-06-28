import Image from 'next/image';
import { useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';

const ProductModal = () => {
  const [fullImg, setFullImg] = useState(false);

  return (
    <div className="w-full min-h-screen bg-black/30  top-0 bottom-0 flex justify-end fixed">
      <section className="bg-white relative w-full max-w-lg min-h-screen opacity-100">
        <div>
          <div className="relative top-0">
            <button className="bg-white p-3 px-4 absolute z-10 shadow-md rounded-r-lg mt-5">
              <BiLeftArrowAlt size={30} />
            </button>
            <button onClick={() => setFullImg(!fullImg)} className="w-full">
              <Image
                src="/images/store/salad-gourmet.jpg"
                height={fullImg ? 400 : 230}
                width={fullImg ? 400 : 500}
                objectFit={fullImg ? 'contain' : 'cover'}
              />
            </button>
          </div>
          <div className="px-10 pt-4">
            <h2 className="h2">Ensalada Caprezanella</h2>
            <p className="text-slate-600 mt-2">
              Tomate, pepino, cebolla roja, mozzarella fresca, picatostes,
              albahaca y vinagreta de vino tinto.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span>Cantidad</span>
              <div className="grid grid-cols-3 gap-1">
                <button
                  className="bg-darkgreen400 text-white rounded-full w-6 h-6 text-xl flex items-center justify-center disabled:bg-darkgreen100"
                  disabled
                >
                  -
                </button>
                <span className="text-center">1</span>
                <button className="bg-darkgreen400 text-white rounded-full w-6 h-6 text-xl flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full py-5 px-10">
            <button className="button flex items-center justify-between px-6">
              <div className="flex items-center">
                <span className="hidden xs:block">Tu pedido</span>
                <span className="bg-darkgreen900 mx-2 p-1 px-2 text-sm rounded-md">
                  9 items
                </span>
              </div>
              $2750.00
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductModal;
