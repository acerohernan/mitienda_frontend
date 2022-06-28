import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import API from '../../api';
import { ForgotStoreFormValues } from '../../api/user/types';
import Button from '../../components/form/button';
import TextInputWithLabel from '../../components/form/inputWithLabel';
import { emailRegEx } from '../../utils/regEx';

interface ForgotStoreScreenProps {}

const ForgotStoreScreen: React.FC<ForgotStoreScreenProps> = () => {
  const [loading, setLoading] = useState(false);
  const [store, setStore] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotStoreFormValues>();

  async function onSubmit(form: ForgotStoreFormValues) {
    setLoading(true);
    setStore('');
    try {
      const response = await API.user.forgotStore(form);
      const data = response.data?.data;
      setStore(data.store);
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
        <h1 className="h2 mb-2">Recupera tu tienda</h1>
        <p className="text-info mb-6">
          Para recuperar el nombre de tu tienda deber usar el email con el que
          creaste la tienda.
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
        <Button text="Obtener mi tienda" loading={loading} submit />
        <Link href="/login">
          <a className="link mt-4 block text-center">
            ¿Ya tienes una cuenta? !Inicia sesión!
          </a>
        </Link>
        {store && (
          <div className="mt-4 text-field">
            {'Tu tienda es: '}
            {store}
          </div>
        )}
      </form>
    </main>
  );
};
export default ForgotStoreScreen;
