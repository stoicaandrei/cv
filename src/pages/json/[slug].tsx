import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, InvisibleInput } from 'components';
import { useAuthCheck } from 'hooks';
import { getCv, updateCV } from 'lib';
import { CVData } from 'types';

type Props = {
  data: CVData;
  slug: string;
};

const EditJSONPage: NextPage<Props> = ({ data, slug }) => {
  useAuthCheck();

  const [updateState, setUpdateState] = useState('');
  const [state, setState] = useState(JSON.stringify(data));
  const onSubmit = () => {
    setUpdateState('Loading...');
    updateCV(slug, JSON.parse(state))
      .then(() => setUpdateState('Changes saved!'))
      .catch((err) => setUpdateState(err.message));
  };

  return (
    <div className="m-5 rounded  bg-white p-5 shadow-md">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-bold">Edit JSON</h1>
        <div className="flex flex-row items-center gap-2">
          {updateState}
          <button
            onClick={onSubmit}
            className="rounded bg-blue-400 px-5 py-2 font-semibold text-white"
          >
            Save
          </button>
        </div>
      </div>
      <InvisibleInput value={state} onChange={setState} multiline />
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

export default EditJSONPage;
