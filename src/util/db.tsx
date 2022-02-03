import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

export async function putMentor(mentor) {
  const db = getFirestore();
  const docRef = await addDoc(collection(db, 'mentors'), mentor);
  console.log('Document written with ID: ', docRef.id);
}

export async function getMentors(profession) {
  const db = getFirestore();
  let querySnapshot;
  if (profession) {
    querySnapshot = await getDocs(
      query(collection(db, 'mentors'), where('profession', '==', profession)),
    );
  } else {
    querySnapshot = await getDocs(collection(db, 'mentors'));
  }
  const mentors = [];
  querySnapshot.forEach(data => mentors.push({ ...data.data(), id: data.id }));
  return mentors;
}

export async function getProfessions() {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, 'professions'));
  const professions: { label: any; value: string }[] = [];
  querySnapshot.forEach(data => {
    professions.push({ label: data.data().name, value: data.id });
  });
  return professions;
}
