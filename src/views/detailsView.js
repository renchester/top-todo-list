import ModalView from './modalView';
import format from 'date-fns/format';

class DetailsView extends ModalView {
  _parentElement = document.querySelector('.modal--task-details');
  _window = document.querySelector('.modal--task-details');
  _overlay = document.querySelector('.overlay');
  _taskDetails = document.querySelector('.modal--task-details');

  constructor() {
    super();
  }

  _showDetails(handler, e) {
    if (!e.target.classList.contains('task-details')) return;

    const id = e.target.closest('.task').dataset.id;

    this.toggleWindow();

    handler(id);

    this._btnClose = document.querySelector('.icon--close-details-modal');
    this._addHandlerCloseModal();
  }

  addHandlerTaskDetails(handler) {
    document
      .querySelectorAll('.task')
      .forEach((el) =>
        el.addEventListener('click', this._showDetails.bind(this, handler))
      );
  }

  _allowTaskEdit(handler, e) {
    const id = e.target.closest('.modal--task-details').dataset.id;

    this._clear();

    handler(id);

    this._btnClose = document.querySelector('.icon--close-editor-modal');
    this._addHandlerCloseModal();
  }

  addHandlerEditTask(handler) {
    document
      .querySelector('.task-details--icon-wrapper.task-edit')
      .addEventListener('click', this._allowTaskEdit.bind(this, handler));
  }

  _deleteTask(handler, e) {
    const id = e.target.closest('.task').dataset.id;

    handler(id);
  }

  addHandlerDeleteTask(handler) {
    document
      .querySelectorAll('.material-icons.icon--delete.task-display--icons')
      .forEach((el) =>
        el.addEventListener('click', this._deleteTask.bind(this, handler))
      );
  }

  _deleteTaskOnModal(handler, e) {
    const id = e.target.closest('.modal--task-details').dataset.id;

    handler(id);
  }

  addHandlerDeleteTaskOnModal(handler) {
    document
      .querySelector('.task-details--icon-wrapper.task-delete')
      .addEventListener('click', this._deleteTaskOnModal.bind(this, handler));
  }

  _generateMarkup() {
    const [taskYear, taskMonth, taskDay] = this._data.date.split('-');

    const dateToDisplay = format(
      new Date(taskYear, taskMonth - 1, taskDay),
      'LLLL d, yyyy'
    );

    const markup = `
        <span class="material-icons icon--close-details-modal"> close </span>
        <div class="task-details--task-title">${this._data.title}</div>
        <div class="task-details--task-details">
          ${this._data.details}
        </div>
        <div class="task-details--task-date-wrapper">
          Due date:
          <span class="task-details--task-date">${dateToDisplay}</span>
        </div>
        <div class="task-details--task-priority-wrapper">
          Priority:
          <span
            class="task-details--task-priority task-details--task-priority-${this._data.priority.toLowerCase()}"
            >${this._data.priority}</span
          >
        </div>

        <div class="task-details--task-status-wrapper">
          Status:
          <span
            class="task-details--task-status"
            >${
              this._data.status === 'completed' ? 'Completed' : 'On-going'
            }</span
          >
        </div>

        <div class="task-details--task-project-wrapper">
          Project:
          <span class="task-details--task-project">${this._data.project}</span>
        </div>

        <div class="task-details--task-editor-wrapper">
          <div class="task-details--icon-wrapper task-edit">
            Edit
          </div>
          <div class="task-details--icon-wrapper task-delete">
            Delete
          </div>
        </div>
    `;

    this._parentElement.dataset.id = this._data.id;

    return markup;
  }
}

export default new DetailsView();
