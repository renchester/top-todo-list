import View from './view';
import format from 'date-fns/format';

class TaskView extends View {
  _parentElement = document.querySelector('.task-display');
  _taskDetails = document.querySelector('.modal--task-details');

  constructor() {
    super();
  }

  _generateMarkup(projTitle) {
    const markup = `
    <div class="task-display--project-title">${
      projTitle ? projTitle : this._data[0] ? this._data[0].project : 'Home'
    }</div> 

    <div class="task-display--task-container">
    ${this._data.map(this._generateTaskMarkup).join('')}
    </div> 

    <div class="task-display--project-btn-edit btn ${
      projTitle ? '' : 'hidden'
    }">Edit Project</div>`;

    return markup;
  }

  _generateTaskMarkup(task) {
    const [taskYear, taskMonth, taskDay] = task.date.split('-');

    const dateNow = new Date();

    const dateToDisplay = format(
      new Date(taskYear, taskMonth - 1, taskDay),
      'LLL do'
    );

    return `
        <div class="task priority-${task.priority.toLowerCase()}" data-id="${
      task.id
    }">
          <div class="task-checkbox ${
            task.status === 'completed' ? 'task-checkbox--checked' : ''
          }"></div>
          <div class="task-title ${
            task.status === 'completed' ? 'task--completed' : ''
          }">${task.title}</div>
          <div class="task-details">Details</div>
          <div class="task-date">${dateToDisplay}
            <span class="task-date--year ${
              dateNow.getFullYear() === +taskYear ? 'hidden' : ''
            }">${taskYear}</span>
          </div>
          <div class="task-display--icon-wrapper task-edit">
            <span class="material-icons icon--edit task-display--icons"> mode_edit </span>
          </div>
          <div class="task-display--icon-wrapper task-delete">
            <span class="material-icons icon--delete task-display--icons"> delete </span>
          </div>
        </div>`;
  }

  _generatePlaceholder(projTitle) {
    const date = new Date();
    const taskYear = date.getFullYear();
    const taskMonth = date.getMonth();
    const taskDay = date.getDate();

    const dateToDisplay = format(
      new Date(taskYear, taskMonth, taskDay),
      'LLL do'
    );

    const markup = `
         <div class="task-display--project-title">${
           projTitle ? projTitle : 'Home'
         }</div>

         <div class="task priority-low" data-id="Sample Task">
            <div class="task-checkbox"></div>
            <div class="task-title">Sample Task</div>
            <div class="task-details">Details</div>
            <div class="task-date">${dateToDisplay}</div>
        </div>
        
        <div class="task-display--project-btn-edit btn ${
          projTitle ? '' : 'hidden'
        }">Edit Project</div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _toggleCompleted(handler, e) {
    if (!e.target.classList.contains('task-checkbox')) return;

    const taskToMark = e.target.closest('.task');

    e.target.classList.toggle('task-checkbox--checked');

    taskToMark.querySelector('.task-title').classList.toggle('task--completed');

    const id = taskToMark.dataset.id;

    if (!id || id === 'Sample Task') return;

    handler(id);
  }

  addHandlerToggleCompleted(handler) {
    document
      .querySelectorAll('.task')
      .forEach((el) =>
        el.addEventListener('click', this._toggleCompleted.bind(this, handler))
      );
  }
}

export default new TaskView();
