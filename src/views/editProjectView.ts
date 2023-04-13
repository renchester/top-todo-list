import modalView from './modalView';

class EditProjectView extends modalView {
  _parentElement = document.querySelector('.modal-details');
  _overlay = document.querySelector('.overlay');

  addHandlerEditProject = (handler) => {
    document.querySelectorAll('.edit-project-icon').forEach((btn) =>
      btn.addEventListener('click', (e) => {
        const { id } = e.target.closest('.nav--project').dataset;

        this._parentElement.setAttribute('data-id', id);

        this._unhideEl(this._parentElement);
        this._unhideEl(this._overlay);

        handler(id);

        this._btnCloseModal = document.querySelector(
          '.btn-close-modal-details',
        );
        this._addHandlerCloseModal();
      }),
    );
  };

  addHandlerSaveEdit = (handler) => {
    this._parentElement
      .querySelector('form')
      .addEventListener('submit', (e) => {
        e.preventDefault();

        const title = this._parentElement.querySelector(
          '#edit-project--title',
        ).value;

        const { id } = this._parentElement.dataset;

        const data = {
          title,
          id,
        };

        handler(data);

        this._changeTitle(title);
        this._closeModal();
      });
  };

  addHandlerDeleteProject = (handler) => {
    this._parentElement
      .querySelector('.delete--edit-project')
      .addEventListener('click', (e) => {
        const { id } = e.target.closest('.modal-details').dataset;

        handler(id);

        this._closeModal();
      });
  };

  _generateMarkup = () => `
     <span class="edit-project--header">Edit Project</span>
     <span class="btn-close-modal-details material-symbols-outlined">close</span>  
      <form action="" class="edit-project--form">
          <input
            name="edit-project--title"
            id="edit-project--title"
            class="edit-project--form-element"
            minlength="1"
            maxlength="60"
            value="${this._data.title}"
            required
         />

        <div class="edit-project--btn-container">
            <button class="btn-submit submit--edit-project" type="submit">
              Save
            </button>
            <button class="btn-delete delete--edit-project" type="button">
              Delete
            </button>
          </div>
    </form>
    `;

  _generateBackup = () => 'You have not added anything yet';
}

export default new EditProjectView();
