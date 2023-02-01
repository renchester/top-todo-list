/* eslint-disable no-underscore-dangle */

export const state = {
  tasks: [
    {
      title: 'Title',
      details: 'Sample task',
      priority: 'low',
      status: 'finished',
      id: '123456',
      date: '01-11-1999',
      project: 'home',
    },
    {
      title: 'Title2',
      details: 'Sample task2',
      priority: 'medium',
      status: 'unfinished',
      id: '654321',
      date: '01-11-2011',
      project: 'home',
    },
  ],
  projects: [
    { title: 'Home', id: '12345' },
    { title: 'Europe trip 2021', id: '23456' },
    { title: 'Asia Trip 2024', id: '34567' },
    {
      title:
        'Asia Trip 2024 Really long really long really long really long really long really long really long really long really long really long really long',
      id: '45678',
    },
  ],
  notes: [],
};

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
};

const createProject = (data) => ({
  title: data.title,
  id: `ID${Math.random().toString(16).slice(2)}`,
});

export const addProject = (data) => {
  const newProject = createProject(data);

  state.projects.push(newProject);
};

const createNote = (data) => ({
  title: data.title,
  details: data.details,
  id: `ID${Math.random().toString(16).slice(2)}`,
});

export const addNote = (data) => {
  const newNote = createNote(data);

  state.notes.push(newNote);
};

/*
export const state = (() => {
  const _tasks = [
    {
      title: 'Title',
      description: 'Sample task',
      priority: 'low',
      status: 'finished',
      id: '123456',
      date: '01-11-1999',
      project: 'home',
    },
    {
      title: 'Title2',
      description: 'Sample task2',
      priority: 'medium',
      status: 'unfinished',
      id: '654321',
      date: '01-11-2011',
      project: 'home',
    },
  ];
  const _projects = [];
  const _notes = [];

  const _matchTypeToArray = function (type) {
    let arrayOfType;

    if (type === 'task') {
      arrayOfType = _tasks;
    } else if (type === 'project') {
      arrayOfType = _projects;
    } else if (type === 'note') {
      arrayOfType = _notes;
    }

    return arrayOfType;
  };

  const addItem = (item, type) => {
    const typeArray = _matchTypeToArray(type);

    typeArray.push(item);
  };

  const deleteItem = (item, type) => {
    const typeArray = _matchTypeToArray(type);

    const index = typeArray.findIndex((i) => i.id === item.id);

    typeArray.splice(index, 1);
  };

  const persistToLocalStorage = (type) => {
    localStorage.setItem(`${type}s`, JSON.stringify(_matchTypeToArray(type)));
  };

  const getTasks = () => _tasks;
  const getProjects = () => _projects;
  const getNotes = () => _notes;

  return {
    addItem,
    deleteItem,
    persistToLocalStorage,
    getNotes,
    getProjects,
    getTasks,
  };
})();

export const Task = function (data) {
  const props = {
    ...data,
    id: `ID${Math.random().toString(16).slice(2)}`,
  };

  const methods = {
    setTitle(newTitle) {
      this.title = newTitle;
    },

    setDescription(newDesc) {
      this.description = newDesc;
    },

    setDate(newDate) {
      this.date = newDate;
    },

    setPriority(newPriority) {
      this.priority = newPriority;
    },

    setProject(newProject) {
      this.project = newProject;
    },

    setStatus(newStatus) {
      this.status = newStatus;
    },
  };

  const task = Object.assign(Object.create(methods), props);

  return task;
};

export const Project = function (data) {
  const props = {
    ...data,
    id: `ID${Math.random().toString(16).slice(2)}`,
  };

  const methods = {
    setTitle(newTitle) {
      this.title = newTitle;
    },
  };

  const project = Object.assign(Object.create(methods), props);

  return project;
};

export const Note = function (data) {
  const props = {
    ...data,
    id: `ID${Math.random().toString(16).slice(2)}`,
  };

  const methods = {
    setTitle(newTitle) {
      this.title = newTitle;
    },

    setDescription(newDesc) {
      this.description = newDesc;
    },
  };

  const note = Object.assign(Object.create(methods), props);

  return note;
};
*/
