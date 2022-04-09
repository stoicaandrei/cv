import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { cvCollection } from './firebase/firestore.services';
import { CVData } from 'types';

export const cvDoc = (slug: string) => doc(cvCollection, slug);
export const getCv = async (slug: string) => {
  const ref = cvDoc(slug);

  return await getDoc(ref);
};

export const updateCV = async (slug: string, data: Partial<CVData>) => {
  const ref = cvDoc(slug);

  return await updateDoc(ref, data);
};
