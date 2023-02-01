import View from './View';

export default class ModalView extends View {
  _parentElement = document.querySelector('.modal');
  _overlay = document.querySelector('.overlay');
  _window = document.querySelector('.modal-content-wrapper');
  _btnAdd = document.querySelector('.btn-add');

  _btnCloseModal = this._parentElement.querySelector('.btn-close-modal');
  _btnSubmit = this._parentElement.querySelector('.btn-submit');

  _modalLinks = [...this._parentElement.querySelectorAll('.modal-link')];
  _modalForms = [...this._parentElement.querySelectorAll('.modal-content')];

  addHandlerShowModal = () => {
    this._btnAdd.addEventListener('click', this._showModal);
  };

  _showModal = () => {
    this._unhideEl(this._parentElement);
    this._unhideEl(this._overlay);

    this._btnCloseModal.addEventListener('click', this._closeModal);
  };

  _closeModal = () => {
    this._hideEl(this._parentElement);
    this._hideEl(this._overlay);

    // clear forms
  };

  _showForm = (e) => {
    this._makeActiveLink(e.target);

    this._modalForms.forEach((form) => this._hideEl(form));
    this._unhideEl(this._form);
  };

  _makeActiveLink = (target) => {
    this._modalLinks.forEach((link) =>
      link.classList.remove('modal-link--active'),
    );
    target.classList.add('modal-link--active');
  };
}
