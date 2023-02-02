import View from './View';

export default class ModalView extends View {
  _parentElement = document.querySelector('.modal');
  _overlay = document.querySelector('.overlay');
  _window = document.querySelector('.modal-content-wrapper');
  _btnAdd = document.querySelector('.btn-add');

  _btnCloseModal = this._parentElement.querySelector('.btn-close-modal');
  _btnSubmit = this._parentElement.querySelector('.btn-submit');

  _modalLinks = [...this._parentElement.querySelectorAll('.modal-link')];
  _modalFormContainer = [
    ...this._parentElement.querySelectorAll('.modal-content'),
  ];

  _addHandlerShowModal = () => {
    this._btnAdd.addEventListener('click', this._showModal);
  };

  _addHandlerCloseModal = () => {
    this._btnCloseModal.addEventListener('click', this._closeModal);
  };

  _showModal = () => {
    this._unhideEl(this._parentElement);
    this._unhideEl(this._overlay);
  };

  _closeModal = () => {
    this._hideEl(this._parentElement);
    this._hideEl(this._overlay);

    this._resetForms();
    this._parentElement.removeAttribute('data-id');
  };

  _showForm = (e) => {
    this._makeActiveLink(e.target);

    this._modalFormContainer.forEach((form) => {
      this._resetForms();
      this._hideEl(form);
    });
    this._unhideEl(this._form);
  };

  _makeActiveLink = (target) => {
    this._modalLinks.forEach((link) =>
      link.classList.remove('modal-link--active'),
    );
    target.classList.add('modal-link--active');
  };

  _addHandlerTogglePriority = () => {
    this._priorityList.forEach((el) =>
      el.addEventListener('click', (e) => {
        this._priorityList.forEach((el) =>
          el.classList.remove('priority-active'),
        );

        e.target.classList.add('priority-active');
      }),
    );
  };

  _validateTask(arr) {
    const [title, date, priority] = arr;

    return !title || !date || !priority ? false : true;
  }

  _resetForms = () => {
    [...this._parentElement.querySelectorAll('form')].forEach((form) =>
      form.reset(),
    );
  };
}
