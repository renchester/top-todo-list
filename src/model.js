/* eslint-disable no-underscore-dangle */

export const state = {
  tasks: [],
  projects: [{ title: 'Home', id: 'ID00000' }],
  notes: [],
};

const _persistToLocalStorage = (type) => {
  localStorage.setItem(type, JSON.stringify(state[type]));
};

// Tasks

const createTask = (data) => ({
  title: data.title,
  details: data.details,
  priority: data.priority,
  id: `ID${Math.random().toString(16).slice(2)}`,
  projectName: data.projectName,
  projectID: data.projectID,
  status: data.status,
  date: data.date,
  pinned: data.pinned || false,
});

export const addTask = (data) => {
  const newTask = createTask(data);

  state.tasks.unshift(newTask);

  _persistToLocalStorage('tasks');
};

export const updateTask = (data) => {
  const target = state.tasks[getIndex(state.tasks, data.id)];

  Object.assign(target, data);

  _persistToLocalStorage('tasks');
};

export const deleteTask = (id) => {
  state.tasks.splice(getIndex(state.tasks, id), 1);

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

export const updateProject = (data) => {
  const target = state.projects[getIndex(state.projects, data.id)];

  Object.assign(target, data);

  updateProjectNames(data.id, data.title);

  Object.assign(target, data);

  _persistToLocalStorage('projects');
  _persistToLocalStorage('tasks');
};

export const deleteProject = (id) => {
  deleteTasksUnderProject(id);

  state.projects.splice(getIndex(state.projects, id), 1);

  _persistToLocalStorage('projects');
  _persistToLocalStorage('tasks');
};

const updateProjectNames = (id, newProjName) => {
  state.tasks.forEach((task) => {
    if (task.projectID === id) {
      task.projectName = newProjName;
    }
  });
};

const deleteTasksUnderProject = (id) => {
  const tasksToDelete = state.tasks.filter((el) => el.projectID === id);

  tasksToDelete.forEach((item) => {
    let itemIndex = state.tasks.findIndex(
      (task) => task.projectID === item.projectID,
    );

    state.tasks.splice(itemIndex, 1);
  });
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

export const updateNote = (data) => {
  const target = state.notes[getIndex(state.notes, data.id)];

  Object.assign(target, data);

  _persistToLocalStorage('notes');
};

export const deleteNote = (id) => {
  state.notes.splice(getIndex(state.notes, id), 1);

  _persistToLocalStorage('notes');
};

const getIndex = (array, id) => {
  return array.findIndex((item) => item.id === id);
};

const init = () => {
  const stored = (type) => {
    let result = !!localStorage.getItem(type);

    return result;
  };

  const setToState = (type) => {
    state[type] = JSON.parse(localStorage.getItem(type));
  };

  ['tasks', 'projects', 'notes'].forEach((type) => {
    if (stored(type)) setToState(type);
  });
};

init();
