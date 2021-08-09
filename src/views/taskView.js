import View from './view';

class TaskView extends View {
  _parentElement = document.querySelector('.task-display');

  constructor() {
    super();
    this._addHandlerTaskDetails();
  }

  _generateMarkup() {
    const markup = this._data.map(this._generateTaskMarkup).join('');
    return markup;
  }

  _generateTaskMarkup(task) {
    return `
        <div class="task priority-${task.priority.toLowerCase()}">
          <div class="task-checkbox"></div>
          <div class="task-name">${task.title}</div>
          <div class="task-details">${task.details}</div>
          <div class="task-date">${task.date}</div>
          <div class="task-edit">
            <span class="material-icons icon--edit"> mode_edit </span>
          </div>
          <div class="task-delete">
            <span class="material-icons icon--delete"> delete </span>
          </div>
        </div>`;
  }

  _addHandlerTaskDetails() {
    this._parentElement.addEventListener('click', this._showDetails.bind(this));
  }

  _showDetails(e) {
    if (!e.target.classList.contains('task-details')) return;
  }
}

export default new TaskView();
