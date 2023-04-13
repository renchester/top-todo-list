import ModalView from './modalView';
import format from 'date-fns/format';

class TaskDetailsView extends ModalView {
  _window = document.querySelector('.modal-details');
  _parentElement = document.querySelector('.modal-details');
  _overlay = document.querySelector('.overlay');

  addHandlerShowTaskDetails(handler) {
    document.querySelectorAll('.task').forEach((el) =>
      el.addEventListener('click', (e) => {
        if (!e.target.classList.contains('task-details-icon')) return;

        const { id } = e.target.closest('.task').dataset;

        this._parentElement.setAttribute('data-id', id);

        this._unhideEl(this._parentElement);
        this._unhideEl(this._overlay);

        handler(id);

        this._btnCloseModal = document.querySelector(
          '.btn-close-modal-details',
        );
        this._addHandlerCloseModal();
      }),
    );
  }

  _generateMarkup = (data) => ` 
       <span class="btn-close-modal-details material-symbols-outlined">close</span>  
        <div class="detail--task-title">${data.title}</div>
        <div class="detail--task-details">
          ${data.details}
        </div>
        <div class="detail--task-date">Date: ${format(
          new Date(data.date),
          'MMMM d, yyy',
        )}</div>
        <div class="detail--task-priority">Priority: ${this._capitalizeFirstLetter(
          data.priority,
        )}</div>
        <div class="detail--task-status">Status: ${this._capitalizeFirstLetter(
          data.status,
        )}</div>
        <div class="detail--task-project-name">Project: ${
          data.projectName
        }</div>

        <div class="detail--btn-container">
          <button class="detail--btn-edit task-edit">Edit</button>
        </div>`;

  _generateBackup = () => `
        <span class="btn-close-modal-details material-symbols-outlined">close</span> 
        <div class="detail--task-title">Sample Task</div>
        <div class="detail--task-details">
          You are seeing this sample task because you have not added a task yet. Add one now!
        </div>
        <div class="detail--task-date">Date: Jan. 1, 2000</div>
        <div class="detail--task-priority">Priority: High</div>
        <div class="detail--task-status">Status: On-going</div>
        <div class="detail--task-project-name">Project: Home</div>

        <div class="detail--btn-container hidden">
          <button class="detail--btn-edit task-edit">Edit</button>
        </div> 
  `;
}

export default new TaskDetailsView();
