import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

const LandingScreen = () => {
  return (
    <div className="relative">
      <header className="bg-darkgreen900 text-white">
        <div className="flex items-center justify-between screen-fit px-6 py-6">
          <Link href="/">
            <a className="logo">MITIENDA</a>
          </Link>
          <div>
            <Link href="/signup">
              <a className="text-white hover:underline">Crear cuenta</a>
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="bg-darkgreen900 text-white pt-10">
          <div className="screen-fit px-8 py-4 text-center md:grid md:grid-cols-[1fr_500px] md:text-start lg:gap-32 md:items-start hero-section">
            <div className="h-full hero-section flex flex-col items-center">
              <h1 className="font-bold text-5xl  domine-family md:text-6xl">
                Vende online, gratis y a tu manera
              </h1>
              <h2 className="text-green-200 text-lg my-6 md:text-xl">
                Coloca tus productos a un clic de tus clientes y recibe los
                pedidos en tu WhatsApp.
              </h2>
              <div className="py-4 grid-cols-2 text-center gap-3 sticky bottom-0 hidden md:grid md:w-96 self-start">
                <Link href="/login">
                  <a className="bg-green-50 text-darkgreen400 w-full py-3 rounded-md">
                    Ingresa
                  </a>
                </Link>
                <Link href="/signup">
                  <a className="button bg-white w-full">Crea tu cuenta</a>
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <Image
                src="/images/landing/hero-image.png"
                width={600}
                height={1100}
                objectFit="cover"
                className="md:hidden"
              />
            </div>
            <div className="hidden md:flex md:justify-end">
              <Image
                src="/images/landing/hero-image.png"
                width={500}
                height={900}
                objectFit="cover"
                className="md:hidden"
              />
            </div>
          </div>
          <div className="hidden md:block h-96 md:h-60 bg-white" />
          <SectionItem
            imgPath="/images/landing/items.svg"
            title="Adapta tu tienda facilmente"
            description="Úsalo como tienda online o carta digital. Habilita el envío de los
            pedidos a WhatsApp o utilizalo como catálogo"
          />
          <SectionItem
            imgPath="/images/landing/admin.svg"
            title="Administra todo facilmente"
            description="Exhibe tus productos en minutos y gestiona tu propio catálogo de forma sencilla."
            reverse
          />
          <SectionItem
            imgPath="/images/landing/buy.svg"
            title="Ofrece simplicidad a tus clientes"
            description="Ellos eligen y envían los pedidos por WhatsApp de forma simple. Sin descargas, sin intermediarios, sin complicaciones."
          />
        </div>
      </main>
      <footer className="bg-darkgreen900 text-white mt-10">
        <div className="screen-fit px-6 py-6 md:py-10 md:flex md:justify-between md:flex-row-reverse">
          <div className="grid grid-cols-4 w-60 items-center justify-start pb-4">
            <a
              className="link"
              href="https://www.instagram.com/"
              rel="norefferrer"
              target="_blank"
            >
              <AiOutlineInstagram size={33} color="white" />
            </a>
            <a
              className="link"
              href="https://www.facebook.com/"
              rel="norefferrer"
              target="_blank"
            >
              <AiOutlineFacebook size={33} color="white" />
            </a>
            <a
              className="link"
              href="https://www.whatsapp.com/"
              rel="norefferrer"
              target="_blank"
            >
              <AiOutlineWhatsApp size={33} color="white" />
            </a>
            <a
              className="link"
              href="https://www.twitter.com/"
              rel="norefferrer"
              target="_blank"
            >
              <AiOutlineTwitter size={33} color="white" />
            </a>
          </div>
          <div className="text-white md:mt-5">
            <span className="mb-2">
              © 2022 MiTienda. Todos los derechos reservados.
            </span>
            <div className="flex items-center">
              <a
                className="link"
                href="https://www.twitter.com/"
                rel="norefferrer"
                target="_blank"
              >
                Politica de privacidad
              </a>
              <a
                className="link ml-4"
                href="https://www.twitter.com/"
                rel="norefferrer"
                target="_blank"
              >
                Politica de Cookies
              </a>
              <a
                className="link ml-4"
                href="https://www.twitter.com/"
                rel="norefferrer"
                target="_blank"
              >
                Solicitar datos
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="px-6 py-4 grid grid-cols-2 text-center gap-3 sticky bottom-0 md:hidden">
        <a className="bg-green-50 text-darkgreen400 w-full py-3 rounded-md">
          Ingresa
        </a>
        <a className="button bg-white w-full">Crea tu cuenta</a>
      </div>
    </div>
  );
};

interface SectionItemProps {
  imgPath: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const SectionItem: React.FC<SectionItemProps> = ({
  imgPath,
  title,
  description,
  reverse,
}) => {
  if (reverse) {
    return (
      <div>
        <div className="bg-white md:pb-5 md:hidden">
          <div className="screen-fit px-8 py-16 md:grid md:grid-cols-2 md:items-center">
            <div className="flex items-center justify-center md:hidden">
              <Image src={imgPath} objectFit="cover" width={350} height={350} />
            </div>
            <div className="hidden md:flex items-center justify-center md:justify-end">
              <Image src={imgPath} objectFit="cover" width={450} height={450} />
            </div>
            <div className="text-black">
              <h1 className="font-bold text-3xl mt-8 md:text-5xl domine-family">
                {title}
              </h1>
              <span className="font-light text-lg mt-6 md:text-xl ">
                {description}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white md:pb-5 hidden md:block">
          <div className="screen-fit px-8 py-16 md:grid md:grid-cols-2 md:items-center">
            <div className="text-black">
              <h1 className="font-bold text-3xl mt-8 md:text-5xl domine-family">
                {title}
              </h1>
              <span className="font-light text-lg mt-6 md:text-xl ">
                {description}
              </span>
            </div>
            <div className="flex items-center justify-center md:hidden">
              <Image src={imgPath} objectFit="cover" width={350} height={350} />
            </div>
            <div className="hidden md:flex items-center justify-center md:justify-end">
              <Image src={imgPath} objectFit="cover" width={450} height={450} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white md:pb-10">
      <div className="screen-fit px-8 py-16 md:grid md:grid-cols-2 md:items-center">
        <div className="flex items-center justify-center md:hidden">
          <Image src={imgPath} objectFit="cover" width={350} height={350} />
        </div>
        <div className="hidden md:flex items-center justify-center md:justify-start">
          <Image src={imgPath} objectFit="cover" width={450} height={450} />
        </div>
        <div className="text-black">
          <h1 className="font-bold text-3xl mt-8 md:text-5xl domine-family">
            {title}
          </h1>
          <span className="font-light text-lg mt-6 md:text-xl ">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
