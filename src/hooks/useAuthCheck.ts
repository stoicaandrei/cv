import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUserData } from './useUserData';

export const useAuthCheck = () => {
  const router = useRouter();
  const [user, isLoading] = useUserData();

  useEffect(() => {
    if (isLoading) return;
    if (!user) {
      router.push('/admin/signin');
    }
  }, [user, isLoading]);
};
