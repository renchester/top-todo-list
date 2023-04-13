import ModalView from './modalView';

class AddTaskView extends ModalView {
  _navLink = document.querySelector('.modal-link--task');
  _form = this._parentElement.querySelector('.modal-content.add-new--task');
  _btnSubmit = this._parentElement.querySelector(
    '.btn-submit.submit--new-task',
  );
  _priorityList = [
    ...this._parentElement.querySelectorAll('.new-task--priority-label'),
  ];
  _projectSelector = this._parentElement.querySelector(
    '.new-task--task-project-wrapper',
  );

  constructor() {
    super();

    this._addHandlerShowModal();
    this._addHandlerCloseModal();
    this._addHandlerShowForm();
    this._addHandlerTogglePriority();
    this.addHandlerListProjects();
  }

  _addHandlerShowForm = () => {
    this._navLink.addEventListener('click', this._showForm.bind(this));
  };

  addHandlerAddTask = (handler) => {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = this._parentElement.querySelector('#new-task--title').value;

      const date = this._parentElement.querySelector('#new-task--date').value;

      const status =
        this._parentElement.querySelector('#new-task--status').value;

      const priority =
        this._parentElement.querySelector('.priority-active').nextElementSibling
          .value;

      const details =
        this._parentElement.querySelector('#new-task--details').value;

      const projectID =
        this._parentElement.querySelector('#new-task--project').value;

      const projectName = [
        ...this._parentElement.querySelectorAll('.project-option'),
      ].find((projEl) => projEl.value === projectID).textContent;

      if (this._validateTask([title, date, priority])) {
        const data = {
          title,
          date,
          status,
          priority,
          details,
          projectName,
          projectID,
        };

        // Stores data in model state through controller
        handler(data);

        this._changeTitle(projectName);

        this._closeModal();
      }
    });
  };

  addHandlerListProjects = (handler) => {
    this._btnAdd.addEventListener('click', handler);
  };
}

export default new AddTaskView();
