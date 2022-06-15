import { FiExternalLink, FiHelpCircle } from 'react-icons/fi';

const AdminHeader = () => {
  return (
    <header className="p-4 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center">
        <h1 className="logo">MITIENDA</h1>
        <a
          href="/acerostore"
          className="px-2  py-1 text-darkgreen400 bg-green-50 text-sm flex items-center ml-2"
        >
          Ver sitio
          <FiExternalLink className="ml-2" />
        </a>
      </div>
      <div className="flex items-center">
        {/* <a className="flex items-center p-2 cursor-pointer">
          <FiHelpCircle size={20} />
          <span className="pl-2 hover:underline">Ayuda</span>
        </a> */}
        <a className="flex items-center p-2 cursor-pointer">
          <FiHelpCircle size={20} />
          <span className="pl-2 hover:underline">Salir</span>
        </a>
      </div>
    </header>
  );
};

export default AdminHeader;