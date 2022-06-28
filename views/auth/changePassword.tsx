import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import API from '../../api';
import { ChangePasswordFormValues } from '../../api/user/types';
import Button from '../../components/form/button';
import TextInputWithLabel from '../../components/form/inputWithLabel';

interface ChangePasswordScreenProps {}

const ChangePasswordScreen: React.FC<ChangePasswordScreenProps> = () => {
  const [loading, setLoading] = useState(false);
  const [invalidCode, setInvalidCode] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ChangePasswordFormValues>();
  const {
    query: { code },
  } = useRouter();

  const password_value = watch('password');

  async function onSubmit(form: ChangePasswordFormValues) {
    setLoading(true);
    setIsSubmitted(false);
    try {
      await API.user.changePassword(form);
      setIsSubmitted(true);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      let err = e.response?.data?.message || 'Error de servidor';
      toast.error(err);
    }
  }

  async function verifyCode() {
    setLoading(true);
    try {
      const response = await API.user.verifyCode({ code });
      const { email } = response.data.data;
      setValue('email', email);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      setInvalidCode(true);
    }
  }

  useEffect(() => {
    if (code) verifyCode();
  }, [code]);

  if (invalidCode) {
    return (
      <main className="bg-darkgreen900 w-full min-h-screen p-5">
        <div className="card max-w-lg bg-white mx-auto">
          <h1 className="h2 mb-2">Restablece tu contraseña</h1>
          <p className="text-info mb-6">
            El código que has ingresado no es correcto, intenta restablecer tu
            contraseña nuevamente o contacta a soporte.
            <a href="mailto:soporte@mitienda.com" className="link font-medium">
              soporte@mitienda.com
            </a>
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

  if (isSubmitted) {
    return (
      <main className="bg-darkgreen900 w-full min-h-screen p-5">
        <div className="card max-w-lg bg-white mx-auto">
          <h1 className="h2 mb-2">Restablece tu contraseña</h1>
          <p className="text-info mb-6">
            Tu contraseña ha sido restablecida correctamente. Dirigete al login
            para iniciar sesion.
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
        <p className="text-info mb-6">Ingresa tu nueva contraseña</p>
        <TextInputWithLabel
          labelText="Contraseña"
          bottomMessage="Al menos 8 caracteres"
          inputProps={{
            ...register('password', {
              required: 'Este campo es requerido',
              minLength: {
                value: 8,
                message: 'Al menos 8 caracteres',
              },
            }),
            placeholder: '********',
            type: 'password',
          }}
          errorMsg={errors.password?.message}
        />
        <TextInputWithLabel
          labelText="Repetir contraseña"
          inputProps={{
            ...register('re_password', {
              required: 'Este campo es requerido',
              validate: (value) =>
                value === password_value || 'Las contraseñas no son iguales',
            }),
            placeholder: '********',
            type: 'password',
          }}
          errorMsg={errors.re_password?.message}
        />
        <Button text="Cambiar contraseña" loading={loading} submit />
        <Link href="/login">
          <a className="link mt-4 block text-center">
            ¿Ya tienes una cuenta? !Inicia sesión!
          </a>
        </Link>
      </form>
    </main>
  );
};
export default ChangePasswordScreen;
