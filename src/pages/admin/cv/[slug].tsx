import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { CVDisplay } from 'components';
import { getCv, updateCV } from 'lib';
import { CVData } from 'types';

type Props = {
  data: CVData;
  slug: string;
};

const AdminCVEditPage: NextPage<Props> = ({ data, slug }) => {
  const [short, setShort] = useState(true);
  const [state, setState] = useState(data);

  return (
    <div>
      <Head>
        <title>stoica.dev | CV</title>
      </Head>
      <div className="print:hidden">
        <input
          type="checkbox"
          checked={short}
          onChange={(e) => setShort(e.target.checked)}
        />
        Display short version
      </div>
      <CVDisplay
        data={state}
        short={short}
        editable
        onUpdate={(newData) => {
          setState(newData);
          updateCV(slug, newData);
        }}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug as string;
  const cv = await getCv(slug);

  return {
    props: {
      data: cv.data(),
      slug,
    },
  };
};

export default AdminCVEditPage;
