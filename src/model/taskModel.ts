import { state } from './state';

import Firestore from './firestore';

import type { TaskData, Task } from '../types/types';
import { getIndex } from '../utils/utils';

const TaskModel = (() => {
  let userId: string;

  const createTask = (data: TaskData): Task => ({
    title: data.title,
    details: data.details,
    priority: data.priority,
    id: `ID${Math.random().toString(16).slice(2)}`,
    projectName: data.projectName,
    projectID: data.projectID,
    status: data.status,
    date: data.date,
  });

  const addTask = (data: TaskData) => {
    const newTask = createTask(data);

    console.log(newTask);

    state.tasks = [newTask, ...state.tasks];

    Firestore.updateTasks(state.tasks, userId);
  };

  const updateTask = (data: { id: string; status: string }) => {
    const target = state.tasks[getIndex(state.tasks, data.id)];

    target && Object.assign(target, data);

    Firestore.updateTasks(state.tasks, userId);
  };

  const deleteTask = (id: string) => {
    state.tasks = state.tasks.filter((task) => task.id !== id);

    Firestore.updateTasks(state.tasks, userId);
  };

  const initializeModel = async (currentUserId: string) => {
    userId = currentUserId;
    state.tasks = await Firestore.getTasks(userId);
  };

  return {
    addTask,
    updateTask,
    deleteTask,
    initializeModel,
  };
})();

export default TaskModel;
