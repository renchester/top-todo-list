import { state } from './state';

import Firestore from './firestore';

import type { Note, NoteData } from '../types/types';
import { getIndex } from '../utils/utils';

const NoteModel = (() => {
  let userId: string;

  const createNote = (data: NoteData) => ({
    title: data.title,
    details: data.details,
    id: `ID${Math.random().toString(16).slice(2)}`,
  });

  const addNote = (data: NoteData) => {
    const newNote = createNote(data);

    state.notes = [...state.notes, newNote];

    Firestore.updateNotes(state.notes, userId);
  };

  const updateNote = (data: Note) => {
    const target = state.notes[getIndex(state.notes, data.id)];

    target && Object.assign(target, data);

    Firestore.updateNotes(state.notes, userId);
  };

  const deleteNote = (id: string) => {
    state.notes = state.notes.filter((n) => n.id !== id);

    Firestore.updateNotes(state.notes, userId);
  };

  const initializeModel = async (currentUserId: string) => {
    userId = currentUserId;
    state.notes = await Firestore.getNotes(userId);
  };

  return {
    addNote,
    updateNote,
    deleteNote,
    initializeModel,
  };
})();

export default NoteModel;
