/* eslint-disable no-underscore-dangle */

export const state = {
  tasks: [],
  projects: [{ title: 'Home', id: 'ID00000' }],
  notes: [],
};

const _persistToLocalStorage = (type) => {
  localStorage.setItem(`${type}`, JSON.stringify(state[type]));
};

// Tasks

const createTask = (data) => ({
  title: data.title,
  details: data.details,
  priority: data.priority,
  id: `ID${Math.random().toString(16).slice(2)}`,
  project: data.project,
  status: data.status,
  date: data.date,
  pinned: data.pinned || false,
});

export const addTask = (data) => {
  const newTask = createTask(data);

  state.tasks.unshift(newTask);

  _persistToLocalStorage('tasks');
};

// Projects

const createProject = (data) => ({
  title: data.title,
  id: `ID${Math.random().toString(16).slice(2)}`,
});

export const addProject = (data) => {
  const newProject = createProject(data);

  state.projects.push(newProject);

  _persistToLocalStorage('projects');
};

// Notes

const createNote = (data) => ({
  title: data.title,
  details: data.details,
  id: `ID${Math.random().toString(16).slice(2)}`,
});

export const addNote = (data) => {
  const newNote = createNote(data);

  state.notes.push(newNote);

  _persistToLocalStorage('notes');
};

const init = () => {
  const stored = (type) => {
    console.log(localStorage.getItem(type));
    localStorage.getItem(type);
  };

  const setToState = (type) => {
    state[type] = JSON.parse(stored(type));
  };

  ['tasks', 'projects', 'notes'].forEach((type) => {
    if (stored(type)) setToState(type);
  });
};
init();
