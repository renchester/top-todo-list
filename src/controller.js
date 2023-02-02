import styles from '/src/style.css';

import * as model from './model';

import View from './views/View';
import taskView from './views/taskView';
import taskDetailsView from './views/taskDetailsView';
import addTaskView from './views/addTaskView';
import addProjectView from './views/addProjectView';
import addNoteView from './views/addNoteView';
import noteView from './views/noteView';

// Task Controllers

const controlShowAllTasks = () => {
  taskView.render(model.state.tasks);
};

const controlAddTask = (data) => {
  model.addTask(data);

  controlShowAllTasks();

  addHandlersToTasks();
};

const controlToggleStatus = (data) => {
  model.updateTask(data);

  console.log(data);

  controlShowAllTasks();

  addHandlersToTasks();
};

const controlTaskDetails = () => {
  taskDetailsView.addHandlerEditTask(controlEditTask);
  taskDetailsView.addHandlerDeleteTask(controlDeleteTask);
};

const controlEditTask = () => {
  console.log('yes');
};

const controlDeleteTask = (id) => {
  model.deleteTask(id);

  controlShowAllTasks();
};

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

const controlShowNotes = () => {
  noteView.render(model.state.notes);

  noteView.addHandlerDeleteNotes(controlDeleteNote);
  noteView.addHandlerEditNotes(controlEditNote);
};

const controlDeleteNote = (id) => {
  model.deleteNote(id);

  controlShowNotes();
};

const controlEditNote = (data) => {
  model.updateNote(data);

  controlShowNotes();
};

const init = () => {
  controlShowAllTasks();

  taskView.addHandlerShowAllTasks(controlShowAllTasks);

  taskView.addHandlerToggleStatus(controlToggleStatus);
  taskDetailsView.addHandlerTaskDetails(controlTaskDetails);

  addTaskView.addHandlerAddTask(controlAddTask);
  addTaskView.addHandlerListProjects(controlShowProjectsOnForm);
  addNoteView.addHandlerAddNote(controlAddNote);
  addProjectView.addHandlerAddProject(controlAddProject);

  noteView.addHandlerShowNotes(controlShowNotes);
};

init();

// Helpers

const addHandlersToTasks = () => {
  taskView.addHandlerToggleStatus(controlToggleStatus);
  taskDetailsView.addHandlerTaskDetails(controlTaskDetails);
};
