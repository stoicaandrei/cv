import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storageApp } from './firebase/initFirebase';

export const uploadFile = async (name: string, file: File) => {
  const imageRef = ref(storageApp, name);
  await uploadBytes(imageRef, file);

  const url = getDownloadURL(imageRef);
  return url;
};
