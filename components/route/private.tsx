import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';

interface PrivateRouteProps {
  children: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { token } = useAppSelector((state) => state.user);
  const { push } = useRouter();

  useEffect(() => {
    if (!!token) push('/login');
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
