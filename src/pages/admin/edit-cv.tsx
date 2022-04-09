import { NextPage } from 'next';
import { useAuthCheck } from 'hooks';

const EditCVPage: NextPage = () => {
  useAuthCheck();

  return <p>Here you edit the cv</p>;
};

export default EditCVPage;
