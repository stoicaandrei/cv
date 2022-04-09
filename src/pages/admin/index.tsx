import { NextPage } from 'next';
import { useAuthCheck } from 'hooks';

const AdminPage: NextPage = () => {
  useAuthCheck();

  return <p>Admin page</p>;
};

export default AdminPage;
