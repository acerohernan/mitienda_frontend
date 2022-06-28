import Image from 'next/image';
import TextInputWithLabel from '../../../../components/form/inputWithLabel';
import AdminSectionHeader from './sectionHeader';

const AdminConfigHome = () => {
  return (
    <section className="screen-fit p-4 xl:px-0">
      <div>
        <AdminSectionHeader title="Información del comercio" />
        <div className="md:grid md:grid-cols-[448px_auto] max-w-4xl items-start gap-10">
          <div className="max-w-md">
            <p className="font-light lg:mb-4">
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
              inputProps={{
                placeholder: 'Acero Store',
              }}
            />
            <TextInputWithLabel
              labelText="Nombre de usuario"
              bottomMessage="Tu dirección será: https://pency.app/acerostore"
              inputProps={{
                placeholder: 'acerostore',
              }}
            />
            <TextInputWithLabel
              labelText="Descripción"
              bottomMessage="Mácimo 256 caracteres"
              inputProps={{
                placeholder: 'acerostore',
              }}
            />
            <TextInputWithLabel
              labelText="Número de WhatsApp"
              bottomMessage="Código país + código de area + teléfono. Ej: 573173694572"
              inputProps={{
                placeholder: '+51999113934',
              }}
            />
            <TextInputWithLabel
              labelText="Dirección"
              bottomMessage="Muestra a tus clientes la ubicación (o ciudad) de tu negocio"
              inputProps={{
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
          <p className="font-light">
            No parece en tu sitio. Esta información ayuda a que más clientes
            puedan encontrar tu sitio
          </p>
          <TextInputWithLabel
            labelText="Rubro al que perteneces"
            bottomMessage="Solo el nombre, sin slogan"
            inputProps={{
              placeholder: 'Aberturas',
            }}
          />
          <TextInputWithLabel
            labelText="Palabras claves"
            inputProps={{
              placeholder: 'pency, tienda, online, whatsapp, pedidos',
            }}
          />
          <TextInputWithLabel
            labelText="País"
            bottomMessage="Mácimo 256 caracteres"
            inputProps={{
              placeholder: 'Perú',
            }}
          />
        </div>
        <div className="divider" />
        <h1 className="h2 mb-6 mt-10">Redes sociales</h1>
        <div className="md:grid md:grid-cols-[448px_auto] max-w-4xl items-start gap-10">
          <div className="max-w-md">
            <p className="font-light lg:mb-4">
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
                placeholder: 'Acero Store',
              }}
            />
            <TextInputWithLabel
              labelText="Usuario de Instagram"
              inputProps={{
                placeholder: 'acerostore',
              }}
            />
            <TextInputWithLabel
              labelText="Usuario de Twitter"
              bottomMessage="Mácimo 256 caracteres"
              inputProps={{
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
          <button className="button">Guardar</button>
        </div>
      </div>
    </section>
  );
};

export default AdminConfigHome;
