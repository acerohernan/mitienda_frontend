import { BsTrash } from 'react-icons/bs';
import CustomLabel from '../../../../components/form/label';

const AdminConfigCustomize = () => {
  return (
    <section className="screen-fit p-4 xl:px-0 pt-10">
      <h1 className="h2">Diseño</h1>
      <p className="text-info mt-3">Personaliza tu cuenta</p>
      <div className="mt-10">
        <h2 className="font-semibold mb-3">Logo e images de cabecera</h2>
        <div>
          <button className="w-full h-28 rounded-md border border-gray-200 bg-gray-100 group relative flex justify-center items-center text-gray-500">
            <BsTrash size={20} className="opacity-0 group-hover:opacity-100" />
          </button>
          <button className="w-28 h-28 rounded-full border border-gray-200 bg-gray-100 group relative flex justify-center items-center text-gray-500 ml-10 -mt-16">
            <BsTrash size={20} className="opacity-0 group-hover:opacity-100" />
          </button>
        </div>
        <div className="mt-6">
          <CustomLabel text="Color principal" />
        </div>
      </div>
    </section>
  );
};

export default AdminConfigCustomize;
