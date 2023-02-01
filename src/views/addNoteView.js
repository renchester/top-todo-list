import ModalView from './modalView';

class AddNoteView extends ModalView {
  _navLink = document.querySelector('.modal-link--note');
  _form = document.querySelector('.modal-content.add-new--note');
  _btnSubmit = document.querySelector('.btn-submit.submit--new-note');

  constructor() {
    super();
    this._addHandlerShowForm();
  }

  _addHandlerShowForm = () => {
    this._navLink.addEventListener('click', this._showForm.bind(this));
  };

  addHandlerAddNote = (handler) => {
    this._btnSubmit.addEventListener('click', handler);
  };
}

export default new AddNoteView();
