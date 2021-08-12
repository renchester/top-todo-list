'use strict';

import * as model from './model';

import addTaskView from './views/addTaskView';
import addProjectView from './views/addProjectView';
import addNoteView from './views/addNoteView';

import sidebarView from './views/sidebarView';
import taskView from './views/taskView';
import detailsView from './views/detailsView';
import editTaskView from './views/editTaskView';
import formView from './views/formView';
import modalView from './views/modalView';

// Index js for the application logic (controller)

const controlAddTask = function (data) {
  model.addTask(data);

  taskView.render(model.state.tasks);

  addHandlersToTask();
};

const controlAddProject = function (data) {
  model.addProject(data);

  sidebarView.render(model.state.projects.slice(1));
};

const controlAddNote = function (data) {
  model.addNote(data);
};

const controlShowTasks = function () {
  taskView.render(model.state.tasks);
  sidebarView.render(model.state.projects.slice(1));
};

const controlDeleteTask = function (id) {
  model.deleteTask(id);

  taskView.render(model.state.tasks);

  addHandlersToTask();
};

const controlDeleteTaskOnModal = function (id) {
  model.deleteTask(id);

  detailsView.toggleWindow();

  taskView.render(model.state.tasks);

  addHandlersToTask();
};

const controlSaveEditTask = function (id, replacement) {
  model.updateTask(id, replacement);

  controlShowTasks();
  addHandlersToTask();
};

const controlEditTask = function (id) {
  const taskToEdit = model.state.tasks.find((task) => task.id === id);

  editTaskView.render(taskToEdit);

  editTaskView.addHandlerSaveEdit(controlSaveEditTask);
  editTaskView.addHandlerDeleteTaskOnModal(controlDeleteTaskOnModal);
  editTaskView.addHandlerPriority();
};

const controlShowDetails = function (id) {
  const taskToShow = model.state.tasks.find((task) => task.id === id);

  detailsView.render(taskToShow);

  detailsView.addHandlerDeleteTaskOnModal(controlDeleteTaskOnModal);
  detailsView.addHandlerEditTask(controlEditTask);
};

const controlToggleCompleted = function (id) {
  const taskToMark = model.state.tasks.find((task) => task.id === id);

  model.toggleTaskComplete(id);

  controlShowTasks();
  addHandlersToTask();
};

const controlShowProjectsOnForm = function () {
  console.log('show projects');
  addTaskView.renderProjectOptions(model.state.projects);
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
