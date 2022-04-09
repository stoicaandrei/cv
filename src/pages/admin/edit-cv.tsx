import { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
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

  const [updateState, setUpdateState] = useState('');
  const onSubmit = (data: CVData) => {
    setUpdateState('Loading...');
    updateCV('test', data)
      .then(() => setUpdateState('Changes saved!'))
      .catch((err) => setUpdateState(err.message));
  };
  const form = useForm({ defaultValues: data });

  return (
    <div className="m-5 rounded  bg-white p-5 shadow-md">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-bold">Edit CV</h1>
        <div className="flex flex-row items-center gap-2">
          {updateState}
          <button
            onClick={form.handleSubmit(onSubmit)}
            className="rounded bg-blue-400 px-5 py-2 font-semibold text-white"
          >
            Save
          </button>
        </div>
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
