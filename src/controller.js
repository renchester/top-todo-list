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
import editProjectView from './views/editProjectView';
import { format, isFuture } from 'date-fns';

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

  // controlShowAllTasks();
};

const controlTaskDetails = (id) => {
  const toShow = model.state.tasks.find((task) => task.id === id);

  taskDetailsView.render(toShow);

  editTaskView.addHandlerEditTaskOnModal(controlEditTask);
};

const controlEditTask = (id) => {
  const toShow = model.state.tasks.find((task) => task.id === id);

  editTaskView.render(toShow);
  editTaskView.renderProjects(model.state.projects, toShow.projectID);

  editTaskView.addHandlerSaveEdit(controlUpdateTask);
  editTaskView.addHandlerDeleteTask(controlDeleteTask);
};

const controlUpdateTask = (data) => {
  model.updateTask(data);

  controlShowProjectTasks(data.projectID);
};

const controlDeleteTask = (id) => {
  model.deleteTask(id);

  controlShowAllTasks();
};

const controlTasksToday = () => {
  const date = new Date();
  const [day, month, year] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ];

  const toShow = model.state.tasks.filter(
    (task) => task.date === format(new Date(year, month, day), 'yyyy-MM-dd'),
  );

  projectView.render(toShow);

  addHandlersToTasks();
};

const controlTasksUpcoming = () => {
  const toShow = model.state.tasks.filter((task) => isFuture(task.date));

  projectView.render(toShow);

  addHandlersToTasks();
};

const controlTasksFinished = () => {
  const toShow = model.state.tasks.filter((task) => task.status === 'finished');

  projectView.render(toShow);

  addHandlersToTasks();
};

const controlHighPriority = () => {
  const toShow = model.state.tasks.filter((task) => task.priority === 'high');

  projectView.render(toShow);

  addHandlersToTasks();
};

const controlMediumPriority = () => {
  const toShow = model.state.tasks.filter((task) => task.priority === 'medium');

  projectView.render(toShow);

  addHandlersToTasks();
};

const controlLowPriority = () => {
  const toShow = model.state.tasks.filter((task) => task.priority === 'low');

  projectView.render(toShow);

  addHandlersToTasks();
};

// Project Controllers

const controlShowAllProjects = () => {
  sidebarView.render(model.state.projects);

  projectView.addHandlerShowTasks(controlShowProjectTasks);
  editProjectView.addHandlerEditProject(controlEditProject);
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

const controlEditProject = (id) => {
  const toShow = model.state.projects.find((project) => project.id === id);

  editProjectView.render(toShow);

  editProjectView.addHandlerSaveEdit(controlUpdateProject);
  editProjectView.addHandlerDeleteProject(controlDeleteProject);
};

const controlUpdateProject = (data) => {
  model.updateProject(data);

  controlShowAllProjects();
  controlShowProjectTasks(data.id);
};

const controlDeleteProject = (id) => {
  model.deleteProject(id);

  controlShowAllProjects();
  controlShowAllTasks();
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
  // Task initializers
  controlShowAllTasks();

  taskView.addHandlerShowAllTasks(controlShowAllTasks);
  taskView.addHandlerDeleteTask(controlDeleteTask);
  taskView.addHandlerToggleStatus(controlToggleStatus);

  editTaskView.addHandlerEditTask(controlEditTask);

  taskDetailsView.addHandlerShowTaskDetails(controlTaskDetails);

  // Project initializers
  controlShowAllProjects();

  projectView.addHandlerTasksFinished(controlTasksFinished);
  projectView.addHandlerTasksToday(controlTasksToday);
  projectView.addHandlerTasksUpcoming(controlTasksUpcoming);
  projectView.addHandlerHighPriority(controlHighPriority);
  projectView.addHandlerMediumPriority(controlMediumPriority);
  projectView.addHandlerLowPriority(controlLowPriority);

  // Note initializer
  noteView.addHandlerShowNotes(controlShowNotes);

  // Modal initializers
  addTaskView.addHandlerAddTask(controlAddTask);
  addTaskView.addHandlerListProjects(controlProjectsOnForm);
  addNoteView.addHandlerAddNote(controlAddNote);
  addProjectView.addHandlerAddProject(controlAddProject);
};

init();

// Helpers

function addHandlersToTasks() {
  taskView.addHandlerToggleStatus(controlToggleStatus);
  taskDetailsView.addHandlerShowTaskDetails(controlTaskDetails);
  editTaskView.addHandlerEditTask(controlEditTask);
  taskView.addHandlerDeleteTask(controlDeleteTask);
}
