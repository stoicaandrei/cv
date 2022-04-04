import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>stoica.dev | Coming soon</title>
      </Head>

      <Image
        src="/desk.jpeg"
        layout="fill"
        alt="desk"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="flex h-full w-full flex-col items-center justify-center gap-32 backdrop-blur-md">
        <div className="text-6xl">
          <p>New website</p>
          <p>coming soon.</p>
        </div>
        <div className="flex flex-row gap-32">
          <div className="text-center">
            <p className="pb-10">Contacts</p>
            <a
              className="text-2xl"
              target="_blank"
              href="mailto:andrei@stoica.dev"
              rel="noreferrer"
            >
              andrei@stoica.dev
            </a>
            <br />
            <a
              className="text-2xl"
              target="_blank"
              href="tel:+40763682222"
              rel="noreferrer"
            >
              (+40) 763 862 222
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
