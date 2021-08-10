'use strict';

export const state = {
  tasks: [],
  notes: [],
  projects: [],
  currTask: {},
  currNote: {},
};

const createTask = function (data) {
  return {
    title: data.title,
    date: data.date,
    priority: data.priority,
    ...(data.project && { project: data.project }),
    ...(data.description && { description: data.description }),
  };
};

const createProject = function (data) {
  return {
    title: data.title,
  };
};

const createNote = function (data) {
  return {
    title: data.title,
    ...(data.description && { description: data.description }),
  };
};

const persistTasks = function () {
  localStorage.setItem('tasks', JSON.stringify(state.tasks));
};

const persistProjects = function () {
  localStorage.setItem('projects', JSON.stringify(state.projects));
};

const persistNotes = function () {
  localStorage.setItem('notes', JSON.stringify(state.notes));
};

export const addTask = function (task) {
  // Add task to app state
  state.tasks.unshift(task);

  // Set to local storage
  persistTasks();
};

export const addProject = function (project) {
  // Add project to app state
  state.projects.push(project);

  // Set to local storage
  persistProjects();
};

export const addNote = function (note) {
  // Add note to app state
  state.notes.push(note);

  // Set to local storage
  persistNotes();
};

/*
export const deleteTask = function (id) {
  const index = state.tasks.findIndex((el) => el.id === id);
  state.tasks.splice(index, 1);

  persistTasks();
};
*/
