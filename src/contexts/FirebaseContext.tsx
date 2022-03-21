import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { ReactNode } from 'react';
import {
  FirebaseAppProvider,
  FirestoreProvider,
  AuthProvider as FirebaseAuthProvider,
  StorageProvider,
  useFirebaseApp,
} from 'reactfire';

type Props = {
  children: ReactNode;
};

const firebaseConfig = {
  apiKey: 'AIzaSyCs7xACQWl8SlgxWvhqrtTiogUXSpxeyjU',
  authDomain: 'personal-website-5bbf1.firebaseapp.com',
  projectId: 'personal-website-5bbf1',
  storageBucket: 'personal-website-5bbf1.appspot.com',
  messagingSenderId: '1097894719781',
  appId: '1:1097894719781:web:dc7b1a4dcf7aa4b99ceacc',
  measurementId: 'G-LPTMELQR03',
};

export const FirebaseSDKProvider = ({ children }: Props) => {
  const app = useFirebaseApp();

  const firestore = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);

  return (
    <FirestoreProvider sdk={firestore}>
      <FirebaseAuthProvider sdk={auth}>
        <StorageProvider sdk={storage}>{children}</StorageProvider>
      </FirebaseAuthProvider>
    </FirestoreProvider>
  );
};

const FirebaseProvider = ({ children }: Props) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseSDKProvider>{children}</FirebaseSDKProvider>
    </FirebaseAppProvider>
  );
};

export { FirebaseProvider };
