import View from './view';

export default class ModalView extends View {
  _errorMessage = 'Form input invalid';

  _parentElement = document.querySelector('.add-task--content');
  _window = document.querySelector('.modal--add-task');

  _btnOpen = document.querySelector('.btn.add-task');
  _btnClose = document.querySelector('.material-icons.icon--close-modal');

  constructor() {
    super();
    this._addHandlerShowModal();
    this._addHandlerCloseModal();
  }

  _addHandlerShowModal() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerCloseModal() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerAddTask(handler) {
    this._btnSubmit.addEventListener('click', this.uploadData.bind(this));
  }

  toggleWindow() {
    // this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }
}
