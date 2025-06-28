import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portofolio Indie</title>
        <meta name="description" content="Portofolio web pribadi indie" />
      </Head>
      <main className="min-h-screen p-4">
        <Header />
        <h1 className="text-2xl font-bold">Selamat datang di portofolioku!</h1>
      </main>
    </>
  );
}
