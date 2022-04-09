import { GetStaticProps, NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { CVForm } from 'components';
import { useAuthCheck } from 'hooks';
import { getCv, updateCV } from 'lib';
import { CVData } from 'types';

type Props = {
  data: CVData;
};

const EditCVPage: NextPage<Props> = ({ data }) => {
  useAuthCheck();

  const onSubmit = (data: CVData) => {
    updateCV('test', data);
  };
  const form = useForm({ defaultValues: data });

  return (
    <div className="m-5 rounded  bg-white p-5 shadow-md">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-bold">Edit CV</h1>
        <button
          onClick={form.handleSubmit(onSubmit)}
          className="rounded bg-blue-400 px-5 py-2 font-semibold text-white"
        >
          Save
        </button>
      </div>
      <CVForm form={form} onSubmit={onSubmit} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cv = await getCv('test');

  return {
    props: {
      data: cv.data(),
    },
  };
};

export default EditCVPage;
