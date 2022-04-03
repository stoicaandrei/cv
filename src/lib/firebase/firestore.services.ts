import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from 'firebase/firestore';
import { firestoreApp } from './initFirebase';
import { CVData } from 'types';

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestoreApp, collectionName) as CollectionReference<T>;
};

export const cvCollection = createCollection<CVData>('cv');
