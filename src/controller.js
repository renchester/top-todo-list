import styles from '/src/style.css';

import * as model from './model';

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

import { format, isFuture, parseISO } from 'date-fns';

// Task Controllers

const ctrlShowAllTasks = () => {
  taskView.render(model.state.tasks);

  addHandlersToTasks();
};

const ctrlToggleStatus = (data) => {
  model.updateTask(data);
};

const ctrlTaskDetails = (id) => {
  const toShow = model.state.tasks.find((task) => task.id === id);

  taskDetailsView.render(toShow);

  editTaskView.addHandlerEditTaskOnModal(ctrlEditTask);
};

const ctrlAddTask = (data) => {
  model.addTask(data);

  ctrlShowTasksByProject(data.projectID);
};

const ctrlEditTask = (id) => {
  const toShow = model.state.tasks.find((task) => task.id === id);

  editTaskView.render(toShow);
  editTaskView.renderProjects(model.state.projects, toShow.projectID);

  editTaskView.addHandlerSaveEdit(ctrlUpdateTask);
  editTaskView.addHandlerDeleteTask(ctrlDeleteTask);
};

const ctrlUpdateTask = (data) => {
  model.updateTask(data);

  ctrlShowTasksByProject(data.projectID);
};

const ctrlDeleteTask = (id) => {
  model.deleteTask(id);

  ctrlShowAllTasks();
};

// Sidebar Task Controllers

const ctrlTasksToday = () => {
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

const ctrlTasksUpcoming = () => {
  const toShow = model.state.tasks.filter((task) =>
    isFuture(parseISO(task.date)),
  );

  projectView.render(toShow);

  addHandlersToTasks();
};

const ctrlTasksFinished = () => {
  const toShow = model.state.tasks.filter((task) => task.status === 'finished');

  projectView.render(toShow);

  addHandlersToTasks();
};

const ctrlHighPriority = () => {
  const toShow = model.state.tasks.filter((task) => task.priority === 'high');

  projectView.render(toShow);

  addHandlersToTasks();
};

const ctrlMediumPriority = () => {
  const toShow = model.state.tasks.filter((task) => task.priority === 'medium');

  projectView.render(toShow);

  addHandlersToTasks();
};

const ctrlLowPriority = () => {
  const toShow = model.state.tasks.filter((task) => task.priority === 'low');

  projectView.render(toShow);

  addHandlersToTasks();
};

// Sidebar Project ctrllers

const ctrlRenderProjectsOnSidebar = () => {
  sidebarView.render(model.state.projects);

  projectView.addHandlerShowTasks(ctrlShowTasksByProject);
  editProjectView.addHandlerEditProject(ctrlEditProject);
};

const ctrlShowTasksByProject = (id) => {
  const toShow = model.state.tasks.filter((task) => task.projectID === id);

  projectView.render(toShow);

  addHandlersToTasks();
};

const ctrlProjectsOnForm = () => {
  addTaskView.renderProjects(model.state.projects);
};

const ctrlAddProject = (data) => {
  model.addProject(data);

  ctrlRenderProjectsOnSidebar();
};

const ctrlEditProject = (id) => {
  const toShow = model.state.projects.find((project) => project.id === id);

  editProjectView.render(toShow);

  editProjectView.addHandlerSaveEdit(ctrlUpdateProject);
  editProjectView.addHandlerDeleteProject(ctrlDeleteProject);
};

const ctrlUpdateProject = (data) => {
  model.updateProject(data);

  ctrlRenderProjectsOnSidebar();
  ctrlShowTasksByProject(data.id);
};

const ctrlDeleteProject = (id) => {
  model.deleteProject(id);

  ctrlRenderProjectsOnSidebar();
};

// Note controllers

const ctrlShowNotes = () => {
  noteView.render(model.state.notes);

  noteView.addHandlerDeleteNotes(ctrlDeleteNote);
  noteView.addHandlerEditNotes(ctrlEditNote);
};

const ctrlAddNote = (data) => {
  model.addNote(data);

  ctrlShowNotes();
};

const ctrlEditNote = (data) => {
  model.updateNote(data);

  ctrlShowNotes();
};

const ctrlDeleteNote = (id) => {
  model.deleteNote(id);

  ctrlShowNotes();
};

const init = () => {
  // Task initializers
  ctrlShowAllTasks();

  taskView.addHandlerToggleStatus(ctrlToggleStatus);
  taskDetailsView.addHandlerShowTaskDetails(ctrlTaskDetails);
  editTaskView.addHandlerEditTask(ctrlEditTask);
  taskView.addHandlerDeleteTask(ctrlDeleteTask);

  // Project / Sidebar initializers
  ctrlRenderProjectsOnSidebar();

  projectView.addHandlerTasksAll(ctrlShowAllTasks);
  projectView.addHandlerTasksFinished(ctrlTasksFinished);
  projectView.addHandlerTasksToday(ctrlTasksToday);
  projectView.addHandlerTasksUpcoming(ctrlTasksUpcoming);
  projectView.addHandlerHighPriority(ctrlHighPriority);
  projectView.addHandlerMediumPriority(ctrlMediumPriority);
  projectView.addHandlerLowPriority(ctrlLowPriority);

  // Note initializer
  noteView.addHandlerShowNotes(ctrlShowNotes);

  // Modal initializers
  addTaskView.addHandlerAddTask(ctrlAddTask);
  addTaskView.addHandlerListProjects(ctrlProjectsOnForm);
  addNoteView.addHandlerAddNote(ctrlAddNote);
  addProjectView.addHandlerAddProject(ctrlAddProject);
};

init();

// Helpers

function addHandlersToTasks() {
  taskView.addHandlerToggleStatus(ctrlToggleStatus);
  taskDetailsView.addHandlerShowTaskDetails(ctrlTaskDetails);
  editTaskView.addHandlerEditTask(ctrlEditTask);
  taskView.addHandlerDeleteTask(ctrlDeleteTask);
}
