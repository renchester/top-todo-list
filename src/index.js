'use strict';

import * as model from './model';

import addTaskView from './views/addTaskView';
import taskView from './views/taskView';

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
};

// const controlAddTask = function () {};

const init = function () {
  addTaskView.addHandlerAddTask(controlAddTask);
};

init();
