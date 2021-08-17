'use strict';

import * as model from './model';

import addTaskView from './views/addTaskView';
import addProjectView from './views/addProjectView';
import addNoteView from './views/addNoteView';

import sidebarView from './views/sidebarView';
import taskView from './views/taskView';
import detailsView from './views/detailsView';
import projectView from './views/projectView';
import formView from './views/formView';
import modalView from './views/modalView';

import editTaskView from './views/editTaskView';
import editProjectView from './views/editProjectView';
import noteView from './views/noteView';

// Index js for the application logic (controller)

// Change to show tasks in specific project
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

const controlAddProject = function (data) {
  model.addProject(data);

  sidebarView.render(model.state.projects.slice(1));

  sidebarView.addHandlerShowAllTasks(controlShowAllTasks);
  sidebarView.addHandlerShowProject(controlShowProject);
};

const controlAddNote = function (data) {
  model.addNote(data);

  noteView.render(model.state.notes);
};

const controlShowProjectsOnForm = function () {
  addTaskView.renderProjectOptions(model.state.projects);
};

const controlShowProjectsOnEditor = function (taskToEdit) {
  editTaskView.renderProjectOptions(model.state.projects, taskToEdit);
};

const controlShowAllTasks = function () {
  taskView.render(model.state.tasks);
  addHandlersToTask();
};

const controlDeleteTask = function (id) {
  const projectToShow = getProjectBasedOnID(id);

  model.deleteTask(id);

  controlShowTasks(projectToShow);

  addHandlersToTask();
};

const controlDeleteTaskOnModal = function (id) {
  const projectToShow = getProjectBasedOnID(id);

  model.deleteTask(id);

  detailsView.toggleWindow();

  controlShowTasks(projectToShow);

  addHandlersToTask();
};

const controlDeleteProjectOnModal = function (id) {
  model.deleteProject(id);

  editProjectView.toggleWindow();

  controlShowTasks();
  addHandlersToTask();
};

const controlSaveEditTask = function (id, replacement) {
  model.updateTask(id, replacement);

  controlShowTasks(replacement.project);
  addHandlersToTask();
};

const controlSaveEditProject = function (id, replacement) {
  model.updateProject(id, replacement);

  controlShowTasks(replacement.title, replacement.title);

  // Update sidebar projects
  sidebarView.render(model.state.projects.slice(1));

  // Add handlers to sidebar projects
  sidebarView.addHandlerShowProject(controlShowProject);

  // Add handlers to all tasks
  addHandlersToTask();

  // Add handler to project editor
  editProjectView.addHandlerShowEditor(controlEditProject);
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

const controlShowDetails = function (id) {
  const taskToShow = model.state.tasks.find((task) => task.id === id);

  detailsView.render(taskToShow);

  detailsView.addHandlerEditTask(controlEditTask);
  detailsView.addHandlerDeleteTaskOnModal(controlDeleteTaskOnModal);
};

const controlToggleCompleted = function (id) {
  model.toggleTaskComplete(id);
};

const controlShowHome = function () {
  const tasksAtHome = model.state.tasks.filter(
    (task) => task.project.toLowerCase() === 'home'
  );

  taskView.render(tasksAtHome);
  addHandlersToTask();

  sidebarView.render(model.state.projects.slice(1));

  sidebarView.addHandlerShowProject(controlShowProject);
};

// Init on edit function
const controlEditProject = function (id) {
  const projectToEdit = model.state.projects.find(
    (project) => project.title === id
  );

  console.log(projectToEdit);
  editProjectView.render(projectToEdit);

  editProjectView.addHandlerSaveEdit(controlSaveEditProject);
  editProjectView.addHandlerDeleteProjectOnModal(controlDeleteProjectOnModal);
};

// Init on show function
const controlShowProject = function (title) {
  const project = model.state.projects.find(
    (project) => project.title === title
  );

  const tasksToShow = model.state.tasks.filter(
    (el) => el.project === project.title
  );

  projectView.render(tasksToShow, title);
  editProjectView.addHandlerShowEditor(controlEditProject);
  addHandlersToTask();
};

const controlDeleteNote = function (id) {
  model.deleteNote(id);

  noteView.render(model.state.notes);

  addHandlersToNote();
};

const controlPersistNoteTitle = function (id, newID, value) {
  model.updateNoteTitle(id, newID, value);

  noteView.render(model.state.notes);
};

const controlPersistNoteDetail = function (id, value) {
  model.updateNoteDetail(id, value);

  noteView.render(model.state.notes);
};

const controlShowNotes = function () {
  noteView.render(model.state.notes);

  addHandlersToNote();
};

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

//  HELPER FUNCTIONS

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

/*

class Task {
  constructor(name, date, priority, description) {
    this.name = name;
    this.date = date;
    this.priority = priority;
    this.description = description;
  }

  get getName() {
    return this.name;
  }

  set setName(value) {
    this.name = value;
  }

  get getDate() {
    return this.date;
  }

  set setDate(value) {
    this.date = value;
  }

  get getPriority() {
    return this.priority;
  }

  set setPriority(value) {
    this.priority = value;
  }

  get getDescription() {
    return this.description;
  }

  set setDescription(value) {
    this.description = value;
  }
}

*/
