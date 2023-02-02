import View from './View';

class ProjectView extends View {
  _parentElement = document.querySelector('.content-display');

  addHandlerShowTasks = (handler) => {
    document.querySelectorAll('.nav-project').forEach((proj) =>
      proj.addEventListener('click', (e) => {
        const { id } = e.target.dataset;

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
}

export default new ProjectView();
