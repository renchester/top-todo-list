import View from './view';

export default class ModalView extends View {
  _errorMessage = 'Form input invalid';

  _parentElement = document.querySelector('.add-task--content');
  _window = document.querySelector('.modal--add-task');

  _btnOpen = document.querySelector('.btn.add-task');
  _btnClose = document.querySelector('.material-icons.icon--close-modal');
  _btnSubmit = document.querySelector('.btn.submit-new');

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

  toggleWindow() {
    // this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }
}
