import { state } from '../model/state';
import TaskModel from '../model/taskModel';

import ProjectController from './projectController';

import TaskView from '../views/taskView';
import TaskDetailsView from '../views/taskDetailsView';
import EditTaskView from '../views/editTaskView';

import type { Task, TaskData } from '../types/types';

const TaskController = (() => {
  const addHandlersToTasks = () => {
    TaskView.addHandlerToggleStatus(ctrlToggleStatus);
    TaskDetailsView.addHandlerShowTaskDetails(ctrlTaskDetails);
    EditTaskView.addHandlerEditTask(ctrlEditTask);
    TaskView.addHandlerDeleteTask(ctrlDeleteTask);
  };

  const ctrlShowAllTasks = () => {
    TaskView.render(state.tasks);

    addHandlersToTasks();
  };

  const ctrlToggleStatus = (data: Task) => {
    TaskModel.updateTask(data);
  };

  const ctrlTaskDetails = (id: string) => {
    const toShow = state.tasks.find((task) => task.id === id);

    TaskDetailsView.render(toShow);

    EditTaskView.addHandlerEditTaskOnModal(ctrlEditTask);
  };

  const ctrlAddTask = (data: TaskData) => {
    TaskModel.addTask(data);

    ProjectController.ctrlShowTasksByProject(data.projectID);
  };

  const ctrlEditTask = (id: string) => {
    const toShow = state.tasks.find((task) => task.id === id) as Task;

    EditTaskView.render(toShow);
    EditTaskView.renderProjects(state.projects, toShow.projectID);

    EditTaskView.addHandlerSaveEdit(ctrlUpdateTask);
    EditTaskView.addHandlerDeleteTask(ctrlDeleteTask);
  };

  const ctrlUpdateTask = (data: Task) => {
    TaskModel.updateTask(data);

    ProjectController.ctrlShowTasksByProject(data.projectID);
  };

  const ctrlDeleteTask = (id: string) => {
    TaskModel.deleteTask(id);

    ctrlShowAllTasks();
  };

  return {
    addHandlersToTasks,
    ctrlShowAllTasks,
    ctrlToggleStatus,
    ctrlTaskDetails,
    ctrlAddTask,
    ctrlEditTask,
    ctrlUpdateTask,
    ctrlDeleteTask,
  };
})();

export default TaskController;
