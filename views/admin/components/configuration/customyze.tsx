import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import CustomLabel from '../../../../components/form/label';

const AdminConfigCustomize = () => {
  return (
    <section className="screen-fit p-4 xl:px-0 pt-10">
      <div className="max-w-md">
        <h1 className="h2">Diseño</h1>
        <p className="text-info mt-3">Personaliza tu cuenta</p>
        <div className="mt-10">
          <h2 className="font-semibold mb-3">Logo e images de cabecera</h2>
          <div>
            <button className="w-full h-28 rounded-md border border-gray-200 bg-gray-50 group relative flex justify-center items-center text-gray-500 hover:bg-gray-100">
              <BsTrash
                size={20}
                className="opacity-0 group-hover:opacity-100"
              />
            </button>
            <button className="w-28 h-28 rounded-full border border-gray-200 bg-gray-50 group relative flex justify-center items-center text-gray-500 ml-10 -mt-16 hover:bg-gray-100">
              <BsTrash
                size={20}
                className="opacity-0 group-hover:opacity-100"
              />
            </button>
          </div>
          <div className="my-6">
            <CustomLabel text="Color principal" className="mb-2" />
            <ColorStack />
          </div>
          <div className="divider" />
          <div className="mt-10">
            <h3 className="h2 text-info">Estructura</h3>
            <p className="text-info my-2 mb-4">
              Elige la mejor forma de mostrar tus productos
            </p>
            <StructureCards />
          </div>
          <button className="button mt-6">Guardar</button>
        </div>
      </div>
    </section>
  );
};

export default AdminConfigCustomize;

const ColorStack: React.FC = () => {
  const COLORS = [
    {
      bg: 'bg-yellow-500',
      border: 'border-yellow-200',
    },
    {
      bg: 'bg-blue-500',
      border: 'border-blue-200',
    },
    {
      bg: 'bg-cyan-500',
      border: 'border-cyan-200',
    },
    {
      bg: 'bg-orange-500',
      border: 'border-orange-200',
    },
    {
      bg: 'bg-purple-500',
      border: 'border-purple-200',
    },
    {
      bg: 'bg-red-500',
      border: 'border-red-200',
    },
    {
      bg: 'bg-pink-500',
      border: 'border-pink-200',
    },
    {
      bg: 'bg-teal-500',
      border: 'border-teal-200',
    },
    {
      bg: 'bg-green-500',
      border: 'border-green-200',
    },
  ];

  const [color, setColor] = useState(0);

  return (
    <div>
      {COLORS.map((item, i) => (
        <button
          key={i}
          className={`w-10 h-10 rounded-lg border-4 border-white ${
            color === i ? item.border : ''
          } ${item.bg} mr-3`}
          onClick={() => setColor(i)}
        />
      ))}
    </div>
  );
};

const StructureCards = () => {
  return (
    <div>
      <div>
        <CustomLabel text="Agrupación" className="mb-2" />
        <div className="grid grid-cols-2 h-40 gap-4">
          <div className="bg-gray-100"></div>
          <div className="bg-gray-100"></div>
        </div>
        <p className="text-info text-sm mt-2">
          La agrupación fluída muestra todas las categorías con sus productos,
          una debajo de otra. La colapsada sólo enseña la lista de categorías y
          es ideal si tienes más de 50 productos.
        </p>
      </div>
      <div className="mt-6">
        <CustomLabel text="Bloque" className="mb-2" />
        <div className="grid grid-cols-2 h-40 gap-4">
          <div className="bg-gray-100"></div>
          <div className="bg-gray-100"></div>
        </div>
        <p className="text-info text-sm mt-2">
          El diseño vertical está pensado para rubros donde la imagen es
          central; el horizontal para rubros con muchos productos o donde la
          descripción es importante.
        </p>
      </div>
    </div>
  );
};
