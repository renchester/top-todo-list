import '/src/style.css';

import TaskController from './controllers/taskController';
import ProjectController from './controllers/projectController';
import SidebarController from './controllers/sidebarController';
import NoteController from './controllers/noteController';

import TaskView from './views/taskView';
import TaskDetailsView from './views/taskDetailsView';
import EditTaskView from './views/editTaskView';
import SidebarView from './views/sidebarView';
import ProjectView from './views/projectView';
import NoteView from './views/noteView';
import AddTaskView from './views/addTaskView';
import AddProjectView from './views/addProjectView';
import AddNoteView from './views/addNoteView';

const init = () => {
  // Task initializers
  TaskController.ctrlShowAllTasks();

  TaskView.addHandlerToggleStatus(TaskController.ctrlToggleStatus);
  TaskDetailsView.addHandlerShowTaskDetails(TaskController.ctrlTaskDetails);
  EditTaskView.addHandlerEditTask(TaskController.ctrlEditTask);
  TaskView.addHandlerDeleteTask(TaskController.ctrlDeleteTask);

  // Project / Sidebar initializers
  ProjectController.ctrlRenderProjectsOnSidebar();

  SidebarView.addHandlerShowNavProjects();

  ProjectView.addHandlerTasksAll(TaskController.ctrlShowAllTasks);
  ProjectView.addHandlerTasksFinished(SidebarController.ctrlTasksFinished);
  ProjectView.addHandlerTasksToday(SidebarController.ctrlTasksToday);
  ProjectView.addHandlerTasksUpcoming(SidebarController.ctrlTasksUpcoming);
  ProjectView.addHandlerHighPriority(SidebarController.ctrlHighPriority);
  ProjectView.addHandlerMediumPriority(SidebarController.ctrlMediumPriority);
  ProjectView.addHandlerLowPriority(SidebarController.ctrlLowPriority);

  // Note initializer
  NoteView.addHandlerShowNotes(NoteController.ctrlShowNotes);

  // Modal initializers
  AddTaskView.addHandlerAddTask(TaskController.ctrlAddTask);
  AddTaskView.addHandlerListProjects(ProjectController.ctrlProjectsOnForm);
  AddNoteView.addHandlerAddNote(NoteController.ctrlAddNote);
  AddProjectView.addHandlerAddProject(ProjectController.ctrlAddProject);
};

init();
