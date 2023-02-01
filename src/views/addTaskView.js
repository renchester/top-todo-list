import ModalView from './modalView';

class AddTaskView extends ModalView {
  _navLink = document.querySelector('.modal-link--task');
  _form = document.querySelector('.modal-content.add-new--task');
  _btnSubmit = document.querySelector('.btn-submit.submit--new-task');

  constructor() {
    super();
    this.addHandlerShowModal();
    this._addHandlerShowForm();
  }

  _addHandlerShowForm = () => {
    this._navLink.addEventListener('click', this._showForm.bind(this));
  };

  addHandlerAddTask = (handler) => {
    this._btnSubmit.addEventListener('click', handler);
  };
}

export default new AddTaskView();
