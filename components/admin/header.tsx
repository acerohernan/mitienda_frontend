import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiExternalLink } from 'react-icons/fi';
import { MdOutlineLogout } from 'react-icons/md';
import { useAppDispatch } from '../../store/hooks';
import { logout } from '../../store/user/actions';

const AdminHeader = () => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  function handleLogout() {
    dispatch(logout());
    push('/login');
  }

  return (
    <header>
      <div className="p-4 flex items-center justify-between border-b border-gray-200 screen-fit">
        <div className="flex items-center">
          <h1 className="logo">MITIENDA</h1>
          <Link href="/acerostore">
            <a className="px-2  py-1 text-darkgreen400 bg-green-50 text-sm flex items-center ml-2">
              Ver sitio
              <FiExternalLink className="ml-2" />
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <button
            className="flex items-center p-2 cursor-pointer"
            onClick={handleLogout}
          >
            <MdOutlineLogout size={20} />
            <span className="pl-2 hover:underline">Salir</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
