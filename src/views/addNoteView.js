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
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = this._parentElement.querySelector('#new-note--title').value;

      const details =
        this._parentElement.querySelector('#new-note--details').value;

      const data = { title, details };

      handler(data);

      this._closeModal();
    });
  };
}

export default new AddNoteView();
