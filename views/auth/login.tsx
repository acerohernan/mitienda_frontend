import Link from 'next/link';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <main className="bg-darkgreen900 w-full min-h-screen p-5">
      <div className="card max-w-lg bg-white mx-auto">
        <h1 className="h2 mb-4">Ingresa a tu cuenta</h1>
        <CustomInputWithLabel
          labelText="Nombre de la tienda"
          inputProps={{ placeholder: 'micomercio' }}
        />
        <CustomInputWithLabel
          labelText="Email"
          inputProps={{ placeholder: 'micomercio@gmail.com' }}
        />
        <CustomInputWithLabel
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

interface CustomInputProps {
  labelText: string;
  inputProps?: any;
  bottomMessage?: string;
}

const CustomInputWithLabel: React.FC<CustomInputProps> = ({
  labelText,
  inputProps,
  bottomMessage,
}) => {
  return (
    <div className="mb-6">
      <span className="font-semibold block text-sm mb-2">
        {labelText}
        <span className="text-darkgreen400 p-1">*</span>
      </span>
      <input type="text" className="text-field" {...inputProps} />
      {bottomMessage ? (
        <span className="block text-slate-600 text-sm mt-2 font-medium">
          {bottomMessage}
        </span>
      ) : null}
    </div>
  );
};

export default LoginScreen;
