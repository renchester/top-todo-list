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

// Index js for the application logic (controller)

// Change to show tasks in specific project
const controlShowTasks = function (project = 'Home') {
  const tasksToShow = model.state.tasks.filter(
    (task) => task.project === project
  );

  taskView.render(tasksToShow);
  // addHandlersToTask();
  // console.log('added handlers');

  sidebarView.render(model.state.projects.slice(1));

  projectView.addHandlerShowProject(controlShowProject);
};

const controlAddTask = function (data) {
  model.addTask(data);

  controlShowTasks(data.project);

  addHandlersToTask();
};

const controlAddProject = function (data) {
  model.addProject(data);

  sidebarView.render(model.state.projects.slice(1));
};

const controlAddNote = function (data) {
  model.addNote(data);
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
  model.deleteTask(id);

  const tasksToShow = getProjectBasedOnID(id);

  controlShowTasks(tasksToShow);

  addHandlersToTask();
};

const controlDeleteTaskOnModal = function (id) {
  model.deleteTask(id);

  detailsView.toggleWindow();

  const tasksToShow = getProjectBasedOnID(id);

  controlShowTasks(tasksToShow);

  addHandlersToTask();
};

const controlDeleteProjectOnModal = function (id) {
  model.deleteProject(id);

  editProjectView.toggleWindow();

  // projectView.render(id);

  const projectToShow = getProjectBasedOnID();

  controlShowTasks(projectToShow);
  addHandlersToTask();
};

const controlSaveEditTask = function (id, replacement) {
  model.updateTask(id, replacement);

  controlShowTasks(replacement.project);
  addHandlersToTask();
};

const controlSaveEditProject = function (id, replacement) {
  model.updateProject(id, replacement);

  const tasksToShow = model.state.tasks.filter(
    (el) => el.project === replacement.title
  );

  projectView.render(tasksToShow);
  // controlShowTasks(tasksToShow);

  // Update sidebar projects
  sidebarView.render(model.state.projects.slice(1));

  // Add handlers to sidebar projects
  projectView.addHandlerShowProject(controlShowProject);

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

  projectView.addHandlerShowProject(controlShowProject);
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

  projectView.render(tasksToShow);
  editProjectView.addHandlerShowEditor(controlEditProject);
  addHandlersToTask();
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
  projectView.addHandlerShowHome(controlShowHome);
  projectView.addHandlerShowAllTasks(controlShowAllTasks);
  // projectView.addHandlerShowProject(controlShowProject);
  // sidebarView.addHandlerShowProject(controlShowProject);
};

init();

//  HELPER FUNCTIONS

function addHandlersToTask() {
  detailsView.addHandlerTaskDetails(controlShowDetails);
  detailsView.addHandlerDeleteTask(controlDeleteTask);
  editTaskView.addHandlerShowEditor(controlEditTask);
  taskView.addHandlerToggleCompleted(controlToggleCompleted);
}

function getProjectBasedOnID(id) {
  const project = model.state.projects.find((project) => project.id === id);

  const tasksToShow = model.state.tasks.filter(
    (el) => el.project === project.title
  );

  return tasksToShow;
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
