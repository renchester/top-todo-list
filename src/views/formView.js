import ModalView from './modalView';

class FormView extends ModalView {
  constructor() {
    super();
    this.addHandlerModalSidebar();
  }

  toggleFormDisplay(e) {
    // Hide all forms
    this._parentElement
      .querySelectorAll('.content-form')
      .forEach((el) => el.classList.add('hidden'));

    // Establish which form to show
    const formType = [...e.target.classList][1].split('new-')[1];

    // Emphasize active label
    this._sidebarLabels.forEach((label) =>
      label.classList.remove('sidebar--label-active')
    );
    e.target.classList.add('sidebar--label-active');

    this._clearForm();

    // Show form to display
    this._parentElement
      .querySelector(`.content-form--new-${formType}`)
      .classList.remove('hidden');
  }

  addHandlerModalSidebar() {
    // Changes the form display
    this._sidebarLabels.forEach((el) =>
      el.addEventListener('click', this.toggleFormDisplay.bind(this))
    );
  }
}

export default new FormView();
