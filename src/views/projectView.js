import View from './View';

class ProjectView extends View {
  _parentElement = document.querySelector('.content-display');

  addHandlerShowTasks = (handler) => {
    document.querySelectorAll('.nav--project').forEach((proj) =>
      proj.addEventListener('click', (e) => {
        if (!e.target.classList.contains('nav--project-title')) return;

        const { id } = e.target.closest('.nav--project').dataset;

        this._changeTitle(e.target.textContent);

        handler(id);
      }),
    );
  };

  addHandlerTasksAll = (handler) => {
    document.querySelector('.tasks-all').addEventListener('click', () => {
      handler();
      this._changeTitle('All tasks');
    });
  };

  addHandlerTasksToday = (handler) => {
    document.querySelector('.tasks-today').addEventListener('click', () => {
      handler();
      this._changeTitle('Due Today');
    });
  };

  addHandlerTasksUpcoming = (handler) => {
    document.querySelector('.tasks-upcoming').addEventListener('click', () => {
      handler();
      this._changeTitle('Upcoming');
    });
  };

  addHandlerTasksFinished = (handler) => {
    document.querySelector('.tasks-finished').addEventListener('click', () => {
      handler();
      this._changeTitle('Finished');
    });
  };

  addHandlerHighPriority = (handler) => {
    document
      .querySelector('.tasks-high-priority')
      .addEventListener('click', () => {
        handler();
        this._changeTitle('High Priority');
      });
  };

  addHandlerMediumPriority = (handler) => {
    document
      .querySelector('.tasks-medium-priority')
      .addEventListener('click', () => {
        handler();
        this._changeTitle('Medium Priority');
      });
  };

  addHandlerLowPriority = (handler) => {
    document
      .querySelector('.tasks-low-priority')
      .addEventListener('click', () => {
        handler();
        this._changeTitle('Low Priority');
      });
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
                <div class="task-details-icon" tabindex="0">
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

  _generateBackup = () =>
    `<div class="placeholder-project">You have no tasks listed under this project/category currently.</div>`;
}

export default new ProjectView();
