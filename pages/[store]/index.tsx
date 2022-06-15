import { useRouter } from 'next/router';
import PrimaryLayout from '../../components/layouts/primary';
import { NextPageWithLayout } from '../page';

const Home: NextPageWithLayout = () => {
  const {
    query: { store },
  } = useRouter();
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1>
        Welcome to <a href="https://nextjs.org">{store}</a>
      </h1>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
