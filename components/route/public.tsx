import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';

interface PublicRouteProps {
  children: React.FC;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { token, store } = useAppSelector((state) => state.user);
  const { push } = useRouter();

  useEffect(() => {
    if (!!token) push(`[store]/admin`, `${store}/admin`);
  }, []);

  return <>{children}</>;
};

export default PublicRoute;
