import { NextPage } from 'next';
import Link from 'next/link';
import { useAuthCheck } from 'hooks';

const AdminPage: NextPage = () => {
  useAuthCheck();

  return (
    <div className="p-10">
      <Link href="/admin/edit-cv">
        <a>Go to cv editing</a>
      </Link>
    </div>
  );
};

export default AdminPage;
