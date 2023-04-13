import { format, isFuture, parseISO } from 'date-fns';

import ProjectView from '../views/projectView';

const SidebarController = (() => {
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

    ProjectView.render(toShow);

    addHandlersToTasks();
  };

  const ctrlTasksUpcoming = () => {
    const toShow = model.state.tasks.filter((task) =>
      isFuture(parseISO(task.date)),
    );

    ProjectView.render(toShow);

    addHandlersToTasks();
  };

  const ctrlTasksFinished = () => {
    const toShow = model.state.tasks.filter(
      (task) => task.status === 'finished',
    );

    ProjectView.render(toShow);

    addHandlersToTasks();
  };

  const ctrlHighPriority = () => {
    const toShow = model.state.tasks.filter((task) => task.priority === 'high');

    ProjectView.render(toShow);

    addHandlersToTasks();
  };

  const ctrlMediumPriority = () => {
    const toShow = model.state.tasks.filter(
      (task) => task.priority === 'medium',
    );

    ProjectView.render(toShow);

    addHandlersToTasks();
  };

  const ctrlLowPriority = () => {
    const toShow = model.state.tasks.filter((task) => task.priority === 'low');

    ProjectView.render(toShow);

    addHandlersToTasks();
  };

  return {
    ctrlTasksToday,
    ctrlTasksUpcoming,
    ctrlTasksFinished,
    ctrlHighPriority,
    ctrlMediumPriority,
    ctrlLowPriority,
  };
})();

export default SidebarController;
