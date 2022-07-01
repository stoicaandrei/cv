import { FirebaseOptions, getApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyCs7xACQWl8SlgxWvhqrtTiogUXSpxeyjU',
  authDomain: 'personal-website-5bbf1.firebaseapp.com',
  projectId: 'personal-website-5bbf1',
  storageBucket: 'personal-website-5bbf1.appspot.com',
  messagingSenderId: '1097894719781',
  appId: '1:1097894719781:web:dc7b1a4dcf7aa4b99ceacc',
  measurementId: 'G-LPTMELQR03',
};

function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);
export const authApp = getAuth(firebaseApp);
export const firestoreApp = getFirestore(firebaseApp);
export const storageApp = getStorage(firebaseApp);
