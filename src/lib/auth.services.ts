import { signInWithEmailAndPassword } from 'firebase/auth';
import { authApp } from './firebase/initFirebase';

export const signin = async (email: string, password: string) => {
  return signInWithEmailAndPassword(authApp, email, password);
};
