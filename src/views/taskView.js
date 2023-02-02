import View from './View';

class TaskView extends View {
  _parentElement = document.querySelector('.content-display');
  _navShowAll = document.querySelector('.tasks-all');

  addHandlerShowAllTasks = (handler) => {
    this._navShowAll.addEventListener('click', handler);
  };

  addHandlerToggleStatus = (handler) => {
    const statusBoxes = [...document.querySelectorAll('.task-status')];

    statusBoxes.forEach((box) =>
      box.addEventListener('click', (e) => {
        const { id } = e.target.closest('.task').dataset;

        const status = e.target.checked ? 'finished' : 'on-going';

        handler({ id, status });
      }),
    );
  };

  addHandlerDeleteTask = (handler) => {
    const tasks = [...document.querySelectorAll('.task')];

    tasks.forEach((task) =>
      task.addEventListener('click', (e) => {
        if (!e.target.parentNode.classList.contains('display-icon-delete'))
          return;

        const { id } = e.target.closest('.task').dataset;

        handler(id);
      }),
    );
  };

  _generateMarkup = () => {
    const markup = this._data
      .map(
        (task) => `
         <div class="task priority-${task.priority}" data-id="${task.id}">

              <div class="task-left">
                <input
                  type="checkbox"
                  name="task-status"
                  id="task-status"
                  class="task-status"
                  ${task.status === 'finished' ? 'checked' : ''}
                />
                <span class="task-title ${
                  task.status === 'finished' ? 'task-finished' : ''
                }">${task.title}</span>
              </div>

              <div class="task-right">
                <div class="task-details-icon">
                  Details
                </div>

                <div class="task-display-icon display-icon-edit task-edit">
                  <span class="material-symbols-outlined">
                    edit
                  </span>
                </div>
                <div class="task-display-icon display-icon-delete task-delete">
                  <span class="material-symbols-outlined">
                    delete
                  </span>
                </div>
              </div>
          </div>
    `,
      )
      .join('');

    return markup;
  };

  _generateBackup = () => {
    const markup = `
          <div class="task priority-medium" data-id="null">

              <div class="task-left">
                <input
                  type="checkbox"
                  name="task-status"
                  id="task-status"
                  class="task-status"
                />
                <span class="task-title">Sample Task</span>
              </div>

              <div class="task-right">
                <div class="task-details-icon">
                  Details
                </div>

                <div class="task-display-icon task-edit">
                  <span class="material-symbols-outlined">
                    edit
                  </span>
                </div>
                <div class="task-display-icon task-delete">
                  <span class="material-symbols-outlined">
                    delete
                  </span>
                </div>
              </div>
          </div>`;

    return markup;
  };
}

export default new TaskView();
