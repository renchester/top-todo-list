import ModalView from './modalView';

class EditTaskView extends ModalView {
  _parentElement = document.querySelector('.modal-details');

  addHandlerEditTask = (handler) => {
    const tasks = [...document.querySelectorAll('.task')];

    tasks.forEach((task) =>
      task.addEventListener('click', (e) => {
        if (!e.target.parentNode.classList.contains('display-icon-edit'))
          return;

        const { id } = e.target.closest('.task').dataset;

        this._unhideEl(this._parentElement);
        this._unhideEl(this._overlay);

        this._parentElement.setAttribute('data-id', id);

        handler(id);

        this._priorityList = [
          ...this._parentElement.querySelectorAll('.edit-task--priority-label'),
        ];
        this._addHandlerTogglePriority();

        this._btnCloseModal = document.querySelector(
          '.btn-close-modal-details',
        );
        this._addHandlerCloseModal();
      }),
    );
  };

  addHandlerEditTaskOnModal = (handler) => {
    this._parentElement
      .querySelector('.detail--btn-edit')
      .addEventListener('click', (e) => {
        const { id } = e.target.closest('.modal-details').dataset;

        handler(id);

        this._priorityList = [
          ...this._parentElement.querySelectorAll('.edit-task--priority-label'),
        ];
        this._addHandlerTogglePriority();

        this._btnCloseModal = document.querySelector(
          '.btn-close-modal-details',
        );
        this._addHandlerCloseModal();
      });
  };

  addHandlerSaveEdit = (handler) => {
    this._parentElement
      .querySelector('form')
      .addEventListener('submit', (e) => {
        e.preventDefault();

        const title =
          this._parentElement.querySelector('#edit-task--title').value;

        const date =
          this._parentElement.querySelector('#edit-task--date').value;

        const status =
          this._parentElement.querySelector('#edit-task--status').value;

        const priority =
          this._parentElement.querySelector('.priority-active')
            .nextElementSibling.value;

        const details = this._parentElement.querySelector(
          '#edit-task--details',
        ).value;

        const projectID = this._parentElement.querySelector(
          '#edit-task--project',
        ).value;

        const projectName = [
          ...this._parentElement.querySelectorAll('.project-option'),
        ].find((projEl) => projEl.value === projectID).textContent;

        const { id } = this._parentElement.dataset;

        if (this._validateTask([title, date, priority])) {
          const data = {
            title,
            date,
            status,
            priority,
            details,
            projectName,
            projectID,
            id,
          };

          this._changeTitle(projectName);

          handler(data);

          this._closeModal();
        }
      });
  };

  addHandlerDeleteTask = (handler) => {
    this._parentElement
      .querySelector('.delete--edit-task')
      .addEventListener('click', (e) => {
        const targetTask = e.target.closest('.modal-details');
        const { id } = targetTask.dataset;

        handler(id);

        this._closeModal();
      });
  };

  _generateMarkup = () => {
    const task = this._data;

    const markup = ` 
      <span class="edit-task--header">Edit Task</span>
      <span class="btn-close-modal-details material-symbols-outlined">close</span>  
      <form action="" class="edit-task--form">
          <textarea
            name="edit-task--title"
            id="edit-task--title"
            class="edit-task--form-element"
            minlength="1"
            maxlength="60"
            placeholder="Go to the doctor's office"
            required
          >${task.title}</textarea>
          <textarea
            name="edit-task--details"
            id="edit-task--details"
            class="edit-task--form-element"
            minlength="1"
            placeholder="Appointment with Dr. Chiu at Somerset Hospital, 10am"
          >${task.details}</textarea>
          <div class="edit-task--form-element edit-task--task-date-wrapper">
            <label for="edit-task--date"> Due Date: </label>
            <input
              type="date"
              class="edit-task--form-input"
              id="edit-task--date"
              name="edit-task--date"
              value="${task.date}"
              required
            />
          </div>
          <div class="edit-task--form-element edit-task--task-priority-wrapper">
            <legend class="edit-task--priority-legend">Priority:</legend>

            <fieldset class="edit-task--priority-fieldset">
              <label
                for="edit-task--priority-low"
                class="edit-task--priority-label priority-low ${
                  task.priority === 'low' ? 'priority-active' : ''
                }"
                >Low</label
              >
              <input
                type="radio"
                class="edit-task--form-input edit-task--priority-input"
                id="edit-task--priority-low"
                name="edit-task--priority-low"
                value="low"
                ${task.priority === 'low' ? 'checked' : ''}
              />
              <label
                for="edit-task--priority-medium"
                class="edit-task--priority-label priority-medium ${
                  task.priority === 'medium' ? 'priority-active' : ''
                }"
                >Medium</label
              >
              <input
                type="radio"
                class="edit-task--form-input edit-task--priority-input"
                id="edit-task--priority-medium"
                name="edit-task--priority-medium"
                value="medium"
                ${task.priority === 'medium' ? 'checked' : ''}
              />
              <label
                for="edit-task--priority-high"
                class="edit-task--priority-label priority-high ${
                  task.priority === 'high' ? 'priority-active' : ''
                }"
                >High</label
              >
              <input
                type="radio"
                class="edit-task--form-input edit-task--priority-input"
                id="edit-task--priority-high"
                name="edit-task--priority-high"
                value="high"
                ${task.priority === 'high' ? 'checked' : ''}
              />
            </fieldset>
          </div>
          <div class="edit-task--form-element edit-task--task-project-wrapper">
            <label for="edit-task--project">Project:</label>
            <select name="edit-task--project" id="edit-task--project" class="select-project">
            </select>
          </div>
          <div class="edit-task--form-element edit-task--task-status">
            <label for="edit-task--status">Status:</label
            ><select name="edit-task--status" id="edit-task--status">
              <option value="on-going">On-going</option>
              <option value="finished">Finished</option>
            </select>
          </div>
          <div class="edit-task--btn-container">
            <button class="btn-submit submit--edit-task" type="submit">
              Save
            </button>
            <button class="btn-delete delete--edit-task" type="button">
              Delete
            </button>
          </div>
        </form>
    `;

    return markup;
  };

  _generatePlaceholder = () => 'You have not added anything yet';
}

export default new EditTaskView();
