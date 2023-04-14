import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';
import getFirebaseConfig from '../../firebase-config';

import type { Note, Project, Task } from '../types/types';

const Firestore = (() => {
  const firebaseConfig = getFirebaseConfig();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function getTasks(userId: string) {
    let tasks: any = [];

    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('tasks exist');

      tasks = docSnap.data()['tasks'] || [];
      console.log('tasks', tasks);
    }

    return tasks;
  }

  async function getProjects(userId: string) {
    const defaultProjects = [{ title: 'Home', id: 'ID00000' }];
    let projects: any = [];

    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('projecs exist');

      projects = docSnap.data()['projects'] || defaultProjects;
    }

    return projects;
  }

  async function getNotes(userId: string) {
    let notes: any = [];

    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('notes exist');

      notes = docSnap.data()['notes'] || [];
    }

    return notes;
  }

  async function updateTasks(tasksArr: Task[], userId: string) {
    try {
      const ref = doc(db, `users`, userId);
      await setDoc(ref, { tasks: tasksArr }, { merge: true });
    } catch (e) {
      console.error('Error updating tasks', e);
    }
  }

  async function updateProjects(projArr: Project[], userId: string) {
    try {
      const ref = doc(db, `users`, userId);
      await setDoc(ref, { projects: projArr }, { merge: true });
    } catch (e) {
      console.error('Error updating projects', e);
    }
  }

  async function updateNotes(notesArr: Note[], userId: string) {
    try {
      const ref = doc(db, `users`, userId);
      await setDoc(ref, { notes: notesArr }, { merge: true });
    } catch (e) {
      console.error('Error updating notes', e);
    }
  }

  return {
    getNotes,
    getProjects,
    getTasks,
    updateNotes,
    updateProjects,
    updateTasks,
  };
})();

export default Firestore;
