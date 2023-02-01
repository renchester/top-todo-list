import styles from '/src/style.css';

import * as model from './model';

import View from './views/View';
import taskView from './views/taskView';
import taskDetailsView from './views/taskDetailsView';
import addTaskView from './views/addTaskView';
import addProjectView from './views/addProjectView';
import addNoteView from './views/addNoteView';

// Task Controllers

const controlAddTask = (data) => {
  model.addTask(data);

  // Close form & show tasks
};

const controlShowAllTasks = () => {
  taskView.render(model.state.tasks);
};

const controlTaskDetails = (id) => {
  const targetTask = model.state.tasks.find((task) => task.id === id);

  taskDetailsView.render(targetTask);
};

const controlEditTask = () => {};

// Project Controllers

const controlAddProject = (data) => {
  model.addProject(data);
};

const controlShowProjectsOnForm = () => {
  addTaskView.renderProjects(model.state.projects);
};

// Note Controllers

const controlAddNote = (data) => {
  model.addNote(data);
};

const init = () => {
  controlShowAllTasks();

  taskDetailsView.addHandlerTaskDetails(controlTaskDetails);
  addTaskView.addHandlerAddTask(controlAddTask);
  addTaskView.addHandlerListProjects(controlShowProjectsOnForm);
  addNoteView.addHandlerAddNote(controlAddNote);
  addProjectView.addHandlerAddProject(controlAddProject);
};

init();
