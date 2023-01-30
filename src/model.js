/* eslint-disable no-underscore-dangle */

export const state = (() => {
  const _tasks = [];
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
