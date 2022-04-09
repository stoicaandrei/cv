import { doc, getDoc } from 'firebase/firestore';
import { cvCollection } from './firebase/firestore.services';

export const cvDoc = (slug: string) => doc(cvCollection, slug);
export const getCv = async (slug: string) => {
  const ref = cvDoc(slug);

  return await getDoc(ref);
};
