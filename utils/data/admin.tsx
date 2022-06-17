import { AiOutlineShareAlt } from 'react-icons/ai';
import { BiCube } from 'react-icons/bi';
import { FiHome, FiShoppingBag } from 'react-icons/fi';
import { HiOutlineShare } from 'react-icons/hi';
import { VscSettingsGear } from 'react-icons/vsc';
import AdminConfiguration from '../../views/admin/configuration';
import AdminHomeScreen from '../../views/admin/home';
import AdminProductsScreen from '../../views/admin/products';

export const navItems = [
  {
    id: 1,
    label: 'Inicio',
    icon: <FiHome size={23} />,
    component: <AdminHomeScreen />,
  },
  {
    id: 2,
    label: 'Productos',
    icon: <BiCube size={23} />,
    component: <AdminProductsScreen />,
  },
  {
    id: 3,
    label: 'Configuración',
    icon: <VscSettingsGear size={23} />,
    component: <AdminConfiguration />,
  },
  {
    id: 4,
    label: 'Promocionar',
    icon: <HiOutlineShare size={23} />,
    component: <AdminHomeScreen />,
  },
];

export const reportItems = [
  {
    title: 'Visitas',
    value: '0',
    percentage: '0',
  },
  {
    title: 'Cantidad de ventas',
    value: '0',
    percentage: '0',
  },
  {
    title: 'Ticket Promedio',
    value: 'S/ 0.00',
    percentage: '0',
  },
  {
    title: 'Ventas/Visitas',
    value: '0',
    percentage: '0',
  },
];

export const stepsItems = [
  {
    title: 'Completa la información de tu negocio',
    description:
      'Nombre, rubro, una descripción y el nùmero de WhatsApp de tu negocio.',
    completed: true,
  },
  {
    title: 'Personaliza tu catálogo',
    description:
      'Sube tu logo, una imagen de cabecera y elige el color y diseño para tu cuenta.',
    completed: true,
  },
  {
    title: 'Carga tus productos',
    description: 'Créalos con todas sus variantes y asignales una categoría.',
    completed: false,
    icon: <FiShoppingBag />,
  },
  {
    title: 'Promociona tu sitio',
    description:
      'Compartir el link de tu sitio en tus redes sociales te ayudará a recibir más pedidos y potenciar tu canal de ventas.',
    completed: false,
    icon: <AiOutlineShareAlt size={20} />,
  },
];
