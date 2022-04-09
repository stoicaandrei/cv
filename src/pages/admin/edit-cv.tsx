import { GetStaticProps, NextPage } from 'next';
import { useAuthCheck } from 'hooks';
import { getCv } from 'lib';
import { CVData } from 'types';

type Props = {
  data: CVData;
};

const EditCVPage: NextPage<Props> = () => {
  useAuthCheck();

  return (
    <div className="m-5 rounded  bg-white p-5 shadow-md">
      <h1 className="text-xl font-bold">Edit CV</h1>
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

export default EditCVPage;
