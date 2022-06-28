import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import API from '../../api';
import { LoginFormValues } from '../../api/user/types';
import Button from '../../components/form/button';
import TextInputWithLabel from '../../components/form/inputWithLabel';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/user/actions';
import { emailRegEx } from '../../utils/regEx';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const { push } = useRouter();

  const dispatch = useAppDispatch();

  async function onSubmit(form: LoginFormValues) {
    try {
      setLoading(true);
      const response = await API.user.login(form);
      const data = response.data.data;
      dispatch(login(data));
      toast.success(`Bienvenido ${form.email}`);
      push(`[store]/admin`, `${data.store.slug}/admin`);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      let err = e.response?.data?.message || 'Error de servidor';
      toast.error(err);
    }
  }

  return (
    <main className="bg-darkgreen900 w-full min-h-screen p-5">
      <form
        className="card max-w-lg bg-white mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="h2 mb-4">Ingresa a tu cuenta</h1>
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
        <TextInputWithLabel
          labelText="Password"
          inputProps={{
            ...register('password', {
              required: 'Este campo es requerido',
            }),
            placeholder: '********',
            type: 'password',
          }}
          errorMsg={errors.password?.message}
        />
        <div className="-mt-4 mb-6 flex justify-end">
          <Link href="/forgot-password">
            <a className="link-sm">Olvidé mi contraseña</a>
          </Link>
        </div>
        <Button text="Inicia sesión" loading={loading} submit />
        <Link href="/signup">
          <a className="block text-center mt-5 link">
            ¿No tienes cuenta? !Creala gratis!
          </a>
        </Link>
      </form>
    </main>
  );
};
export default LoginScreen;
