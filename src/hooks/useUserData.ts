import { useAuthState } from 'react-firebase-hooks/auth';
import { authApp } from 'lib/firebase/initFirebase';

export const useUserData = () => {
  return useAuthState(authApp);
};
