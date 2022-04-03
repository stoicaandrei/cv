import { GetStaticProps, NextPage } from 'next';
import { CVDisplay } from 'components';
import { getCv } from 'lib/cv.services';
import { CVData } from 'types';

type Props = {
  data: CVData;
};

const CVPage: NextPage<Props> = (props) => {
  return <CVDisplay data={props.data} />;
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
