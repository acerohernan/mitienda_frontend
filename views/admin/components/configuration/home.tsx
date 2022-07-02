import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import API from '../../../../api';
import { UpdateStoreInformationFormValues } from '../../../../api/store/types';
import Button from '../../../../components/form/button';
import TextInputWithLabel from '../../../../components/form/inputWithLabel';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { updateStoreInformation } from '../../../../store/store/actions';
import handleRequestError from '../../../../utils/error';
import AdminSectionHeader from './sectionHeader';

const AdminConfigHome = () => {
  const [loading, setLoading] = useState(false);

  const {
    name,
    slug,
    description,
    address,
    type,
    keywords,
    country,
    phone,
    facebook,
    twitter,
    instagram,
  } = useAppSelector((state) => state.store);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<UpdateStoreInformationFormValues>();

  const dispatch = useAppDispatch();
  const slug_value = watch('slug');

  async function onSubmit(form: UpdateStoreInformationFormValues) {
    setLoading(true);
    try {
      await API.store.updateStoreInformation(form);
      dispatch(updateStoreInformation(form));
      setLoading(false);
    } catch (e: any) {
      let err = handleRequestError(e);
      toast.error(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    setValue('name', name);
    setValue('slug', slug);
    setValue('description', description);
    setValue('address', address);
    setValue('type', type);
    setValue('keywords', keywords);
    setValue('country', country);
    setValue('phone', phone);
    setValue('facebook', facebook);
    setValue('twitter', twitter);
    setValue('instagram', instagram);
  }, []);

  return (
    <section className="screen-fit p-4 xl:px-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <AdminSectionHeader
            title="Información del comercio"
            loading={loading}
          />
          <div className="md:grid md:grid-cols-[448px_auto] max-w-4xl items-start gap-10">
            <div className="max-w-md">
              <p className="font-light md:mb-4">
                La ven tus clientes en tu sitio. Te dejamor una imagen como
                referencia
              </p>
              <div className="w-full flex justify-center my-4 md:hidden">
                <Image
                  src="/images/admin/storedetails.png"
                  width={200}
                  height={200}
                />
              </div>
              <TextInputWithLabel
                labelText="Nombre de tu negocio"
                bottomMessage="Solo el nombre, sin slogan"
                errorMsg={errors.name?.message}
                inputProps={{
                  ...register('name', {
                    required: 'Name is required',
                  }),
                  placeholder: 'Acero Store',
                }}
              />
              <TextInputWithLabel
                labelText="Nombre de usuario"
                bottomMessage={`Tu dirección será: http://localhost/${slug_value}`}
                errorMsg={errors.address?.message}
                inputProps={{
                  ...register('slug', {
                    required: 'Slug is required',
                  }),
                  placeholder: 'acerostore',
                }}
              />
              <TextInputWithLabel
                labelText="Descripción"
                bottomMessage="Mácimo 256 caracteres"
                errorMsg={errors.description?.message}
                inputProps={{
                  ...register('description', {
                    required: 'Description is required',
                  }),
                  placeholder: 'acerostore',
                }}
              />
              <TextInputWithLabel
                labelText="Número de WhatsApp"
                bottomMessage="Código país + código de area + teléfono. Ej: 573173694572"
                errorMsg={errors.phone?.message}
                inputProps={{
                  ...register('phone', {
                    required: 'Phone is required',
                  }),
                  placeholder: '+51999113934',
                }}
              />
              <TextInputWithLabel
                labelText="Dirección"
                bottomMessage="Muestra a tus clientes la ubicación (o ciudad) de tu negocio"
                errorMsg={errors.address?.message}
                inputProps={{
                  ...register('address', {
                    required: 'Address is required',
                  }),
                  placeholder: 'Av. Eduardo Madero 470',
                }}
              />
            </div>
            <div className="hidden md:flex">
              <Image
                src="/images/admin/storedetails.png"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
          <div className="divider" />
          <h1 className="h2 mb-6 mt-10">Información adicional</h1>
          <div className="max-w-md">
            <p className="font-light md:mb-4">
              No parece en tu sitio. Esta información ayuda a que más clientes
              puedan encontrar tu sitio
            </p>
            <TextInputWithLabel
              labelText="Rubro al que perteneces"
              bottomMessage="Solo el nombre, sin slogan"
              errorMsg={errors.type?.message}
              inputProps={{
                ...register('type', {
                  required: 'Type is required',
                }),
                placeholder: 'Productos de limpieza',
              }}
            />
            <TextInputWithLabel
              labelText="Palabras claves"
              errorMsg={errors.keywords?.message}
              inputProps={{
                ...register('keywords', {
                  required: 'Keywords is required',
                }),
                placeholder: 'pency, tienda, online, whatsapp, pedidos',
              }}
            />
            <TextInputWithLabel
              labelText="País"
              bottomMessage="Mácimo 256 caracteres"
              errorMsg={errors.country?.message}
              inputProps={{
                ...register('country', {
                  required: 'Country is required',
                }),
                placeholder: 'Perú',
              }}
            />
          </div>
          <div className="divider" />
          <h1 className="h2 mb-6 mt-10">Redes sociales</h1>
          <div className="md:grid md:grid-cols-[448px_auto] max-w-4xl items-start gap-10">
            <div className="max-w-md">
              <p className="font-light md:mb-4">
                Comparte las redes sociales en tu negocio fácilmente. Solo serán
                visibles los íconos de las redes que añadas.
              </p>
              <div className="w-full flex justify-center my-4 md:hidden">
                <Image
                  src="/images/admin/storedetails.png"
                  width={200}
                  height={200}
                />
              </div>
              <TextInputWithLabel
                labelText="Página de Facebook"
                bottomMessage="Solo el nombre, sin slogan"
                inputProps={{
                  ...register('facebook'),
                  placeholder: 'Acero Store',
                }}
              />
              <TextInputWithLabel
                labelText="Usuario de Instagram"
                inputProps={{
                  ...register('instagram'),
                  placeholder: 'acerostore',
                }}
              />
              <TextInputWithLabel
                labelText="Usuario de Twitter"
                bottomMessage="Máximo 256 caracteres"
                inputProps={{
                  ...register('twitter'),
                  placeholder: 'acerostore',
                }}
              />
            </div>
            <div className="hidden md:flex">
              <Image
                src="/images/admin/storedetails.png"
                className="object-contain"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="max-w-md mt-5 md:hidden">
            <Button text="Guardar" submit loading={loading} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default AdminConfigHome;
