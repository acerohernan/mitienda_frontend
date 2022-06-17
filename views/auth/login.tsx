import Link from 'next/link';
import TextInputWithLabel from '../../components/form/fields/inputWithLabel';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <main className="bg-darkgreen900 w-full min-h-screen p-5">
      <div className="card max-w-lg bg-white mx-auto">
        <h1 className="h2 mb-4">Ingresa a tu cuenta</h1>
        <TextInputWithLabel
          labelText="Nombre de la tienda"
          inputProps={{ placeholder: 'micomercio' }}
        />
        <TextInputWithLabel
          labelText="Email"
          inputProps={{ placeholder: 'micomercio@gmail.com' }}
        />
        <TextInputWithLabel
          labelText="Password"
          inputProps={{ placeholder: '********', type: 'password' }}
        />
        {/* <button className="button">Inicia sesión</button> */}
        <Link href="/acerostore/admin">
          <a className="button block text-center">Inicia sesión</a>
        </Link>
        <Link href="/signup">
          <a className="block text-center mt-5 text-darkgreen400">
            ¿No tienes cuenta? !Creala gratis!
          </a>
        </Link>
      </div>
    </main>
  );
};
export default LoginScreen;
