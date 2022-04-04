import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { CVDisplay } from 'components';
import { getCv } from 'lib/cv.services';
import { CVData } from 'types';

type Props = {
  data: CVData;
};

const CVPage: NextPage<Props> = (props) => {
  const [short, setShort] = useState(true);

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
      <CVDisplay data={props.data} short={short} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cv = await getCv('javascript');

  return {
    props: {
      data: cv.data(),
    },
  };
};

export default CVPage;
