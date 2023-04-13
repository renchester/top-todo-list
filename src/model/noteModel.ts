import { state } from './state';

import type { Note, NoteData } from '../types/types';
import { getIndex } from '../utils/utils';

const NoteModel = (() => {
  const createNote = (data: NoteData) => ({
    title: data.title,
    details: data.details,
    id: `ID${Math.random().toString(16).slice(2)}`,
  });

  const addNote = (data: NoteData) => {
    const newNote = createNote(data);

    state.notes.push(newNote);

    // _persistToLocalStorage('notes');
  };

  const updateNote = (data: Note) => {
    const target = state.notes[getIndex(state.notes, data.id)] as Note;

    Object.assign(target, data);

    // _persistToLocalStorage('notes');
  };

  const deleteNote = (id: string) => {
    state.notes.splice(getIndex(state.notes, id), 1);

    // _persistToLocalStorage('notes');
  };

  return {
    addNote,
    updateNote,
    deleteNote,
  };
})();

export default NoteModel;
