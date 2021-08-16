import View from './view';
import detailsView from './detailsView';

class ProjectView extends View {
  _window = document.querySelector('.nav-subdiv.project--header');
  _parentElement = document.querySelector('.task-display');
  _title = '';

  constructor() {
    super();
  }

  _generateMarkup() {
    console.log(this._data);
    const markup = `<div class="task-display--project-title">${
      this._data[0] ? this._data[0].project : this._title
    }</div> 
      ${this._data.map(this._generateTaskMarkup).join('')} 
       <div class="task-display--project-btn-edit btn">Edit Project</div>`;
    return markup;
  }

  _generateTaskMarkup(task) {
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
          <div class="task-date">${task.date}</div>
          <div class="task-display--icon-wrapper task-edit">
            <span class="material-icons icon--edit task-display--icons"> mode_edit </span>
          </div>
          <div class="task-display--icon-wrapper task-delete">
            <span class="material-icons icon--delete task-display--icons"> delete </span>
          </div>
        </div>`;
  }

  addHandlerShowProject(handler) {
    document
      .querySelectorAll('.nav-subdiv--content.project--title')
      .forEach((el) =>
        el.addEventListener('click', this.showProject.bind(this, handler))
      );
  }

  showProject(handler, e) {
    const title = e.target.textContent;
    this._title = title;
    handler(title);
  }
}

export default new ProjectView();
