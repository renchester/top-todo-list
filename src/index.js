'use strict';

import * as model from './model';

import addTaskView from './views/addTaskView';
import addProjectView from './views/addProjectView';
import addNoteView from './views/addNoteView';

import sidebarView from './views/sidebarView';
import taskView from './views/taskView';
import detailsView from './views/detailsView';

// Index js for the application logic (controller)

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

const controlAddTask = function (data) {
  model.addTask(data);

  taskView.render(model.state.tasks);

  addHandlersToTask();
};

const controlAddProject = function (data) {
  model.addProject(data);

  sidebarView.render(model.state.projects);
};

const controlAddNote = function (data) {
  model.addNote(data);
};

const controlShowDetails = function (id) {
  const taskToShow = model.state.tasks.find((task) => task.id === id);

  detailsView.render(taskToShow);
};

const controlShowTasks = function () {
  taskView.render(model.state.tasks);
  sidebarView.render(model.state.projects);
};

const controlDeleteTask = function (id) {
  model.deleteTask(id);

  taskView.render(model.state.tasks);

  addHandlersToTask();
};

const init = function () {
  controlShowTasks();
  addTaskView.addHandlerAddTask(controlAddTask);
  addProjectView.addHandlerAddProject(controlAddProject);
  addNoteView.addHandlerAddNote(controlAddNote);
  detailsView.addHandlerTaskDetails(controlShowDetails);
  detailsView.addHandlerDeleteTask(controlDeleteTask);
};

init();

//  HELPER FUNCTIONS

function addHandlersToTask() {
  detailsView.addHandlerTaskDetails(controlShowDetails);
  detailsView.addHandlerDeleteTask(controlDeleteTask);
}
