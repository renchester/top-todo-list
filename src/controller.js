import styles from '/src/style.css';

import * as model from './model';

import View from './views/View';
import taskView from './views/taskView';
import taskDetailsView from './views/taskDetailsView';
import addTaskView from './views/addTaskView';
import addProjectView from './views/addProjectView';
import addNoteView from './views/addNoteView';
import noteView from './views/noteView';
import editTaskView from './views/editTaskView';
import sidebarView from './views/sidebarView';
import projectView from './views/projectView';

// Task Controllers

const controlShowAllTasks = () => {
  taskView.render(model.state.tasks);

  addHandlersToTasks();
};

const controlAddTask = (data) => {
  model.addTask(data);

  controlShowAllTasks();
};

const controlToggleStatus = (data) => {
  model.updateTask(data);

  controlShowAllTasks();
};

const controlTaskDetails = (id) => {
  const toShow = model.state.tasks.find((task) => task.id === id);

  taskDetailsView.render(toShow);

  editTaskView.addHandlerEditTaskOnModal(controlEditTask);
};

const controlEditTask = (id) => {
  const toShow = model.state.tasks.find((task) => task.id === id);

  editTaskView.render(toShow);
  editTaskView.renderProjects(model.state.projects);

  editTaskView.addHandlerSaveEdit(controlUpdateTask);
  editTaskView.addHandlerDeleteTask(controlDeleteTask);
};

const controlUpdateTask = (data) => {
  model.updateTask(data);

  controlShowAllTasks();
};

const controlDeleteTask = (id) => {
  model.deleteTask(id);

  controlShowAllTasks();
};

// Project Controllers

const controlShowAllProjects = () => {
  sidebarView.render(model.state.projects);

  // projectview.addhandler
};

const controlAddProject = (data) => {
  model.addProject(data);

  controlShowAllProjects();
};

const controlShowProjectTasks = (id) => {
  const toShow = model.state.tasks.filter((task) => task.projectID === id);

  projectView.render(toShow);

  addHandlersToTasks();
};

const controlProjectsOnForm = () => {
  addTaskView.renderProjects(model.state.projects);
};

// Note Controllers

const controlAddNote = (data) => {
  model.addNote(data);

  controlShowNotes();
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
  taskView.addHandlerDeleteTask(controlDeleteTask);
  taskView.addHandlerToggleStatus(controlToggleStatus);

  editTaskView.addHandlerEditTask(controlEditTask);

  taskDetailsView.addHandlerShowTaskDetails(controlTaskDetails);

  addTaskView.addHandlerAddTask(controlAddTask);
  addTaskView.addHandlerListProjects(controlProjectsOnForm);
  addNoteView.addHandlerAddNote(controlAddNote);
  addProjectView.addHandlerAddProject(controlAddProject);

  controlShowAllProjects();

  projectView.addHandlerShowTasks(controlShowProjectTasks);

  noteView.addHandlerShowNotes(controlShowNotes);
};

init();

// Helpers

function addHandlersToTasks() {
  taskView.addHandlerToggleStatus(controlToggleStatus);
  taskDetailsView.addHandlerShowTaskDetails(controlTaskDetails);
  editTaskView.addHandlerEditTask(controlEditTask);
  taskView.addHandlerDeleteTask(controlDeleteTask);
}
