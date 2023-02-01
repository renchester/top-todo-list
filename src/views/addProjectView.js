import ModalView from './modalView';

class AddProjectView extends ModalView {
  _navLink = document.querySelector('.modal-link--project');
  _form = document.querySelector('.modal-content.add-new--project');
  _btnSubmit = document.querySelector('.btn-submit.submit--new-project');

  constructor() {
    super();
    this._addHandlerShowForm();
  }

  _addHandlerShowForm = () => {
    this._navLink.addEventListener('click', this._showForm.bind(this));
  };

  addHandlerAddProject = (handler) => {
    this._btnSubmit.addEventListener('click', handler);
  };
}

export default new AddProjectView();
