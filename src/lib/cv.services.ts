import { doc, getDoc } from 'firebase/firestore';
import { cvCollection } from './firebase/firestore.services';

export const getCv = async (slug: string) => {
  const ref = doc(cvCollection, slug);

  return await getDoc(ref);
};
