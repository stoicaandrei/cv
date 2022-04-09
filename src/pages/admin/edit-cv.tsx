import { GetStaticProps, NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useAuthCheck } from 'hooks';
import { getCv, updateCV } from 'lib';
import { CVData } from 'types';

type Props = {
  data: CVData;
};

const EditCVPage: NextPage<Props> = ({ data }) => {
  useAuthCheck();

  const formData = {
    name: data.name,
    title: data.title,
    photoUrl: data.photoUrl,
  };

  const onSubmit = (data: typeof formData) => {
    updateCV('test', data);
  };

  const { register, handleSubmit } = useForm({ defaultValues: formData });

  return (
    <div className="m-5 rounded  bg-white p-5 shadow-md">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-bold">Edit CV</h1>
        <button
          onClick={handleSubmit(onSubmit)}
          className="rounded bg-blue-400 px-5 py-2 font-semibold text-white"
        >
          Save
        </button>
      </div>
      <form>
        <div className="flex flex-col gap-3 pt-6">
          <input {...register('name')} type="text" />
          <input {...register('title')} type="text" />
        </div>
      </form>
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
