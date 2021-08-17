'use strict';

import * as model from './model';

import addTaskView from './views/addTaskView';
import addProjectView from './views/addProjectView';
import addNoteView from './views/addNoteView';

import sidebarView from './views/sidebarView';
import taskView from './views/taskView';
import detailsView from './views/detailsView';
import noteView from './views/noteView';
import formView from './views/formView';

import editTaskView from './views/editTaskView';
import editProjectView from './views/editProjectView';

// Task Controllers

const controlShowTasks = function (project = 'Home', other) {
  const tasksToShow = model.state.tasks.filter(
    (task) => task.project === project
  );
  taskView.render(tasksToShow, other);

  sidebarView.render(model.state.projects.slice(1));

  sidebarView.addHandlerShowProject(controlShowProject);
};

const controlAddTask = function (data) {
  model.addTask(data);

  controlShowTasks(data.project);

  addHandlersToTask();
};

const controlShowDetails = function (id) {
  const taskToShow = model.state.tasks.find((task) => task.id === id);

  detailsView.render(taskToShow);

  detailsView.addHandlerEditTask(controlEditTask);
  detailsView.addHandlerDeleteTaskOnModal(controlDeleteTaskOnModal);
};

const controlDeleteTask = function (id) {
  const projectToShow = getProjectBasedOnID(id);

  model.deleteTask(id);

  controlShowTasks(projectToShow);

  addHandlersToTask();
};

const controlDeleteTaskOnModal = function (id) {
  controlDeleteTask();

  detailsView.toggleWindow();
};

const controlSaveEditTask = function (id, replacement) {
  model.updateTask(id, replacement);

  controlShowTasks(replacement.project);
  addHandlersToTask();
};

const controlEditTask = function (id) {
  const taskToEdit = model.state.tasks.find((task) => task.id === id);

  editTaskView.render(taskToEdit);

  editTaskView.addHandlerRenderProjectsOnForm(
    controlShowProjectsOnEditor,
    taskToEdit
  );
  editTaskView.addHandlerSaveEdit(controlSaveEditTask);
  editTaskView.addHandlerDeleteTaskOnModal(controlDeleteTaskOnModal);
  editTaskView.addHandlerPriority();
};

const controlToggleCompleted = function (id) {
  model.toggleTaskComplete(id);
};

// Project Controllers

const controlShowProject = function (title) {
  const project = model.state.projects.find(
    (project) => project.title === title
  );

  const tasksToShow = model.state.tasks.filter(
    (el) => el.project === project.title
  );

  taskView.render(tasksToShow, title);
  editProjectView.addHandlerShowEditor(controlEditProject);
  addHandlersToTask();
};

const controlAddProject = function (data) {
  model.addProject(data);

  sidebarView.render(model.state.projects.slice(1));

  sidebarView.addHandlerShowAllTasks(controlShowAllTasks);
  sidebarView.addHandlerShowProject(controlShowProject);
};

const controlShowProjectsOnForm = function () {
  addTaskView.renderProjectOptions(model.state.projects);
};

const controlShowProjectsOnEditor = function (taskToEdit) {
  editTaskView.renderProjectOptions(model.state.projects, taskToEdit);
};

const controlDeleteProjectOnModal = function (id) {
  model.deleteProject(id);

  editProjectView.toggleWindow();

  controlShowTasks();
  addHandlersToTask();
};

const controlSaveEditProject = function (id, replacement) {
  model.updateProject(id, replacement);

  controlShowTasks(replacement.title, replacement.title);

  sidebarView.render(model.state.projects.slice(1));

  sidebarView.addHandlerShowProject(controlShowProject);

  addHandlersToTask();

  editProjectView.addHandlerShowEditor(controlEditProject);
};

const controlEditProject = function (id) {
  const projectToEdit = model.state.projects.find(
    (project) => project.title === id
  );

  editProjectView.render(projectToEdit);

  editProjectView.addHandlerSaveEdit(controlSaveEditProject);
  editProjectView.addHandlerDeleteProjectOnModal(controlDeleteProjectOnModal);
};

// Note Controllers

const controlShowNotes = function () {
  noteView.render(model.state.notes);

  addHandlersToNote();
};

const controlAddNote = function (data) {
  model.addNote(data);

  controlShowNotes();
};

const controlDeleteNote = function (id) {
  model.deleteNote(id);

  controlShowNotes();
};

const controlPersistNoteTitle = function (id, newID, value) {
  model.updateNoteTitle(id, newID, value);

  controlShowNotes();
};

const controlPersistNoteDetail = function (id, value) {
  model.updateNoteDetail(id, value);

  controlShowNotes();
};

// Sidebar Controllers

const controlShowHome = function () {
  const tasksAtHome = model.state.tasks.filter(
    (task) => task.project.toLowerCase() === 'home'
  );

  taskView.render(tasksAtHome);
  addHandlersToTask();

  sidebarView.render(model.state.projects.slice(1));

  sidebarView.addHandlerShowProject(controlShowProject);
};

const controlShowAllTasks = function () {
  taskView.render(model.state.tasks);
  addHandlersToTask();
};

// Init Function

const init = function () {
  controlShowTasks();
  addTaskView.addHandlerAddTask(controlAddTask);
  addTaskView.addHandlerRenderProjectsOnForm(controlShowProjectsOnForm);
  addProjectView.addHandlerAddProject(controlAddProject);
  addNoteView.addHandlerAddNote(controlAddNote);
  detailsView.addHandlerTaskDetails(controlShowDetails);
  detailsView.addHandlerDeleteTask(controlDeleteTask);
  editTaskView.addHandlerShowEditor(controlEditTask);
  taskView.addHandlerToggleCompleted(controlToggleCompleted);
  sidebarView.addHandlerShowHome(controlShowHome);
  sidebarView.addHandlerShowAllTasks(controlShowAllTasks);
  sidebarView.addHandlerShowNotes(controlShowNotes);
};

init();

//  Helper Functions

function addHandlersToTask() {
  detailsView.addHandlerTaskDetails(controlShowDetails);
  detailsView.addHandlerDeleteTask(controlDeleteTask);
  editTaskView.addHandlerShowEditor(controlEditTask);
  taskView.addHandlerToggleCompleted(controlToggleCompleted);
}

function addHandlersToNote() {
  noteView.addHandlerDeleteNote(controlDeleteNote);
  noteView.addHandlerPersistNoteTitle(controlPersistNoteTitle);
  noteView.addHandlerPersistNoteDetail(controlPersistNoteDetail);
}

function getProjectBasedOnID(taskID) {
  console.log(taskID);
  const chosenTask = model.state.tasks.find((task) => task.id === taskID);
  console.log(model.state.tasks.find((task) => task.id === taskID));

  return chosenTask.project;
}
