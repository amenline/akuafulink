import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/Layout';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='p-1.5'>
        <div className=''></div>
        <div></div>
      </section>
    </Layout>
  );
};

export default Home;
