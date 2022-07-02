import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCheck } from 'react-icons/ai';
import { toast } from 'react-toastify';
import API from '../../api';
import { SignUpFormValues } from '../../api/user/types';
import CustomBottomMessage from '../../components/form/bottomMessage';
import Button from '../../components/form/button';
import TextInputWithLabel from '../../components/form/inputWithLabel';
import CustomLabel from '../../components/form/label';
import CustomSelect from '../../components/form/select';
import CustomTextInput from '../../components/form/textInput';
import { COUNTRIES, EXTENSIONS, TCountries } from '../../constants/global';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/user/actions';
import {
  emailRegEx,
  onlyNumbersRegEx,
  storeNameRegEx,
} from '../../utils/regEx';

const SignUpScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<keyof TCountries>('AR');
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SignUpFormValues>();

  const email_value = watch('email');
  const store_value = watch('store');
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  async function onSubmit(form: SignUpFormValues) {
    const send = {
      ...form,
      phone: `${EXTENSIONS[country]}${form.phone}`,
    };

    try {
      setLoading(true);
      await API.user.signUp(send);
      toast.success('Usuario creado correctamente.');
      const response = await API.user.login({
        email: form.email,
        password: form.password,
      });
      dispatch(login(response.data.data));
      setLoading(false);
      toast.success(`Bienvenido ${form.email}`);
      push(`[store]/admin`, `${form.store}/admin`);
    } catch (e: any) {
      setLoading(false);
      let err = e.response?.data?.message || 'Error de servidor';
      toast.error(err);
    }
  }

  useEffect(() => {
    setValue('country', country);
  }, []);

  return (
    <main className="lg:grid-cols-[auto_512px] lg:grid min-h-screen max-h-screen ">
      <div className="bg-darkgreen900 p-6 lg:px-10  overflow-hidden pt-12">
        <Link href="/">
          <a className="logo text-white">MITIENDA</a>
        </Link>
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
      <form
        className="p-6 lg:max-w-lg lg:px-8 max-h-screen overflow-y-scroll pt-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="h1 mb-6">Crea tu cuenta gratis</h1>
        <TextInputWithLabel
          labelText="E-mail"
          bottomMessage="Coloca un e-mail de uso frequente. Nos comunicaremos por esta vía"
          inputProps={{
            ...register('email', {
              required: 'Este campo es requerido',
              pattern: {
                value: emailRegEx,
                message: 'Ingresa un correo válido',
              },
            }),
            placeholder: 'tucomercio@gmail.com',
            type: 'email',
          }}
          errorMsg={errors.email?.message}
        />
        <TextInputWithLabel
          labelText="Repetir e-mail"
          inputProps={{
            ...register('re_email', {
              required: 'Este campo es requerido',
              validate: (value) =>
                value === email_value || 'Los email no son iguales',
            }),
            placeholder: 'tucomercio@gmail.com',
            type: 'email',
          }}
          errorMsg={errors.re_email?.message}
        />
        <TextInputWithLabel
          labelText="Contraseña"
          inputProps={{
            ...register('password', {
              required: 'Este campo es requerido',
              minLength: {
                value: 8,
                message: 'Al menos 8 caracteres',
              },
            }),
            placeholder: '******',
            type: 'password',
          }}
          bottomMessage="Al menos 8 caracteres"
          errorMsg={errors.password?.message}
        />
        <TextInputWithLabel
          labelText="Nombre de su negocio"
          inputProps={{
            ...register('store', {
              required: 'Este campo es requerido',
              minLength: {
                value: 6,
                message: 'Al menos 6 caracteres',
              },
              setValueAs: (value) => value.toLocaleLowerCase(),
              pattern: {
                message:
                  'Solo puede contener letras minúsculas y números, guión bajo y puntos. No se aceptan tildes.',
                value: storeNameRegEx,
              },
            }),
            placeholder: 'micormercio',
          }}
          bottomMessage={`Tu dirección será: http://localhost/${store_value}`}
          errorMsg={errors.store?.message}
        />
        <div className="mb-6">
          <CustomLabel text="País" className="mb-2" />
          <CustomSelect
            options={Object.keys(COUNTRIES)}
            optionsLabel={COUNTRIES}
            value={COUNTRIES[country]}
            onChange={(value: keyof TCountries) => {
              setCountry(value);
              setValue('country', value);
            }}
          />
          <label className="label-bottom">
            Configuraremos la moneda de acuerdo al país indicado
          </label>
        </div>
        <div className="mb-6">
          <CustomLabel text="Número de WhastApp" className="mb-2" />
          <CustomTextInput
            children={
              <div className="flex items-center">
                <Image
                  src={`/images/countries/${country}.png`}
                  width={50}
                  height={50}
                  className="z-0"
                />
                <span className="ml-2">{EXTENSIONS[country]}</span>
              </div>
            }
            inputProps={{
              placeholder: '11144440000',
              ...register('phone', {
                required: 'Este campo es requerido',
                pattern: {
                  value: onlyNumbersRegEx,
                  message: 'Solo puede contener números',
                },
              }),
            }}
            error={Boolean(errors.phone?.message)}
          />
          <CustomBottomMessage
            text="Código país + código de area + teléfono. Ej: +54 | 91144440000"
            errorMsg={errors.phone?.message}
          />
        </div>
        <Button
          text="Crea tu cuenta"
          className="mt-4"
          onClick={() => {}}
          loading={loading}
          submit
        />
        <Link href="/login">
          <a className="block text-center mt-5 link">
            ¿Ya tienes cuenta? Inicia sesión
          </a>
        </Link>
      </form>
    </main>
  );
};

export default SignUpScreen;
