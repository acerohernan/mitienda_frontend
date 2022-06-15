import Link from 'next/link';
import { AiOutlineCheck } from 'react-icons/ai';

interface SignUpProps {}

const SignUpScreen: React.FC<SignUpProps> = () => {
  return (
    <main className="lg:grid-cols-[auto_512px] lg:grid min-h-screen">
      <div className="bg-darkgreen900 p-6 lg:px-10">
        <h1 className="logo text-white">MITIENDA</h1>
        <h2 className="text-white font-semibold text-lg mt-4 lg:text-4xl lg:mt-10">
          Comienza a vender online gratis y a tu manera
        </h2>
        <p className="text-green-100 font-medium text-md lg:text-2xl lg:mt-5">
          Es simple, rápido y sin comisiones.
        </p>
        <div className="hidden my-6 lg:block">
          <div className="flex items-center mb-4 text-md">
            <AiOutlineCheck className="text-white mr-3" size={25} />
            <span className="text-white">
              Publica tus productos o servicios en minutos
            </span>
          </div>
          <div className="flex items-center mb-4 text-md">
            <AiOutlineCheck className="text-white mr-3" size={25} />
            <span className="text-white">
              Comparte la URL o código de tu comercio
            </span>
          </div>
          <div className="flex items-center mb-4 text-md">
            <AiOutlineCheck className="text-white mr-3" size={25} />
            <span className="text-white">
              Recibe sin costo los pedidos en WhatsApp
            </span>
          </div>
        </div>
      </div>
      <form className="p-6 lg:max-w-lg lg:px-8">
        <h1 className="h1 mb-6">Crea tu cuenta gratis</h1>
        <CustomInputWithLabel
          labelText="E-mail"
          bottomMessage="Coloca un e-mail de uso frequente. Nos comunicaremos por esta vía"
          inputProps={{ placeholder: 'tucomercio@gmail.com' }}
        />
        <CustomInputWithLabel
          labelText="Repetir e-mail"
          inputProps={{ placeholder: 'tucomercio@gmail.com' }}
        />
        <CustomInputWithLabel
          labelText="Contraseña"
          inputProps={{ placeholder: '******', type: 'password' }}
          bottomMessage="Al menos 8 caracteres"
        />
        <CustomInputWithLabel
          labelText="Nombre de su tienda"
          inputProps={{ placeholder: 'micormercio', type: 'password' }}
          bottomMessage="Tu dirección será: http://localhost/"
        />
        <CustomInputWithLabel
          labelText="País"
          inputProps={{ placeholder: 'Selecciona un país', type: 'password' }}
          bottomMessage="Configuraremos la moneda de acuerdo al país indicado"
        />
        <CustomInputWithLabel
          labelText="Número de WhastApp"
          inputProps={{ placeholder: ' +54 | 9114444000', type: 'password' }}
          bottomMessage="Código país + código de area + teléfono. Ej: +54 | 9114444000"
        />
        <button className="button mt-4">Crear tu cuenta</button>
        <Link href="/login">
          <a className="block text-center mt-5 text-darkgreen400">
            ¿Ya tienes cuenta? Inicia sesión
          </a>
        </Link>
      </form>
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

export default SignUpScreen;