import { useRouter } from 'next/router';
import { useUserData } from './useUserData';

export const useAuthCheck = () => {
  const router = useRouter();
  const [user] = useUserData();

  if (!user) {
    router.push('/admin/signin');
  }
};
