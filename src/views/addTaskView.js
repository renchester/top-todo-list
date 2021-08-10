import ModalView from './modalView';

class AddTaskView extends ModalView {
  _priorityLabels = document.querySelector('.new-task--task-priority-wrapper');
  _btnSubmit = document.querySelector('.btn--submit.submit--new-task');

  constructor() {
    super();
    this._addHandlerPriority();
    this._addHandlerShowModal();
    this._addHandlerCloseModal();
  }

  uploadData(handler, e) {
    e.preventDefault();

    console.log('Upload task');

    const taskTitle = this._parentElement.querySelector(
      '.new-task--task-title'
    ).value;

    const taskDetails = this._parentElement.querySelector(
      '.new-task--task-details'
    ).value;

    const taskDate = this._parentElement.querySelector(
      '.new-task--task-date'
    ).value;

    const taskPriority = this._parentElement.querySelector(
      '.priority-label--active'
    )?.textContent;

    const validationArr = [taskTitle, taskDetails, taskDate, taskPriority];

    if (this._validateTask(validationArr)) {
      const data = {
        title: taskTitle,
        details: taskDetails,
        date: taskDate,
        priority: taskPriority,
      };

      this._clearForm();
      this.toggleWindow();
      handler(data);
    } else {
      this._renderFormError();
    }
  }

  addHandlerAddTask(handler) {
    this._btnSubmit.addEventListener(
      'click',
      this.uploadData.bind(this, handler)
    );
  }

  _addHandlerPriority() {
    this._priorityLabels.addEventListener(
      'click',
      this._togglePriority.bind(this)
    );
  }

  _togglePriority(e) {
    if (!e.target.classList.contains('new-task--task-priority-label')) return;

    document
      .querySelectorAll('.new-task--task-priority-label')
      .forEach((el) => el.classList.remove('priority-label--active'));

    e.target.classList.add('priority-label--active');
  }

  _validateTask(arr) {
    const [title, details, date, priority] = arr;
    if (!title || !date || !priority) {
      return false;
    } else return true;
  }

  _renderFormError() {
    console.log('error');
  }
}

export default new AddTaskView();
