import { NextPage } from 'next';
import { useAuthCheck } from 'hooks';

const EditCVPage: NextPage = () => {
  useAuthCheck();

  return (
    <div className="m-5 rounded  bg-white p-5 shadow-md">
      <h1 className="text-xl font-bold">Edit CV</h1>
    </div>
  );
};

export default EditCVPage;
