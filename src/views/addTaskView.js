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
    this.addHandlerShowModal();
    this.addHandlerCloseModal();
    this._addHandlerShowForm();
    this._addHandlerTogglePriority();
    this.addHandlerListProjects();
  }

  _addHandlerShowForm = () => {
    this._navLink.addEventListener('click', this._showForm.bind(this));
  };

  _addHandlerTogglePriority = () => {
    this._priorityList.forEach((el) =>
      el.addEventListener('click', this._togglePriority.bind(this)),
    );
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

      const project =
        this._parentElement.querySelector('#new-task--project').value;

      // Validate data

      const data = {
        title,
        date,
        status,
        priority,
        details,
        project,
      };

      // Stores data in model state through controller
      handler(data);

      this._closeModal();
    });
  };

  addHandlerListProjects = (handler) => {
    this._btnAdd.addEventListener('click', handler);
  };

  _togglePriority = (e) => {
    this._priorityList.forEach((el) => el.classList.remove('priority-active'));

    e.target.classList.add('priority-active');
  };

  renderProjects = (data) => {
    const markup = data
      .map((proj) => `<option value="${proj.id}">${proj.title}</option>`)
      .join('');

    const projSelection =
      this._parentElement.querySelector('#new-task--project');

    projSelection.innerHTML = '';
    projSelection.insertAdjacentHTML('afterbegin', markup);
  };
}

export default new AddTaskView();
