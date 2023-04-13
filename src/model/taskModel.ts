import { state } from './state';

import type { TaskData, Task } from '../types/types';
import { getIndex } from '../utils/utils';

const TaskModel = (() => {
  const createTask = (data: TaskData): Task => ({
    title: data.title,
    details: data.details,
    priority: data.priority,
    id: `ID${Math.random().toString(16).slice(2)}`,
    projectName: data.projectName,
    projectID: data.projectID,
    status: data.status,
    date: data.date,
    pinned: data.pinned || false,
  });

  const addTask = (data: TaskData) => {
    const newTask = createTask(data);

    state.tasks.unshift(newTask);

    // _persistToLocalStorage('tasks');
  };

  const updateTask = (data: Task) => {
    const target = state.tasks[getIndex(state.tasks, data.id)] as Task;

    Object.assign(target, data);

    // _persistToLocalStorage('tasks');
  };

  const deleteTask = (id: string) => {
    state.tasks.splice(getIndex(state.tasks, id), 1);

    // _persistToLocalStorage('tasks');
  };

  return {
    addTask,
    updateTask,
    deleteTask,
  };
})();

export default TaskModel;
