import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import API from '../../api';
import { ForgotPasswordFormValues } from '../../api/user/types';
import Button from '../../components/form/button';
import TextInputWithLabel from '../../components/form/inputWithLabel';
import { emailRegEx } from '../../utils/regEx';

interface ForgotPasswordScreenProps {}

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>();

  async function onSubmit(form: ForgotPasswordFormValues) {
    setLoading(true);
    setIsSubmitted(false);
    try {
      await API.user.forgotPassword(form);
      setIsSubmitted(true);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      let err = e.response?.data?.message || 'Error de servidor';
      toast.error(err);
    }
  }

  if (isSubmitted) {
    return (
      <main className="bg-darkgreen900 w-full min-h-screen p-5">
        <div className="card max-w-lg bg-white mx-auto">
          <h1 className="h2 mb-2">Restablece tu contraseña</h1>
          <p className="text-info mb-6">
            Las intrucciones has sido enviadas al correo ingresado.
          </p>
          <Link href="/login">
            <a className="button block text-center">Ir al login</a>
          </Link>
          <Link href="/signup">
            <a className="link mt-4 block text-center">
              ¿No tienes cuenta? !Crea una gratis!
            </a>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-darkgreen900 w-full min-h-screen p-5">
      <form
        className="card max-w-lg bg-white mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="h2 mb-2">Restablece tu contraseña</h1>
        <p className="text-info mb-6">
          Ingresa tu e-mail y te enviaremos intrucciones sobre cómo
          restrablecerla.
        </p>
        <TextInputWithLabel
          labelText="Email"
          inputProps={{
            ...register('email', {
              required: 'Este campo es requerido',
              pattern: {
                value: emailRegEx,
                message: 'Ingresa un email válido',
              },
            }),
            placeholder: 'micomercio@gmail.com',
            type: 'email',
          }}
          errorMsg={errors.email?.message}
        />
        <Button text="Enviar instrucciones" loading={loading} submit />
        <Link href="/login">
          <a className="link mt-4 block text-center">
            ¿Ya tienes una cuenta? !Inicia sesión!
          </a>
        </Link>
      </form>
    </main>
  );
};
export default ForgotPasswordScreen;
