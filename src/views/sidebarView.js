import View from './View';

class SidebarView extends View {
  _parentElement = document.querySelector('.nav--projects');

  _generateMarkup = () =>
    this._data
      .map(
        (proj) =>
          `<div class="nav--project" data-id="${proj.id}">
            <span class="nav--project-title">${proj.title}</span>
            ${
              proj.id !== 'ID00000'
                ? '<span class="material-symbols-outlined edit-project-icon">edit</span>'
                : ''
            }   
          </div>`,
      )
      .join('');

  _generateBackup = () =>
    `<div class="nav-project" data-id="ID00000">Example Project</div>`;
}

export default new SidebarView();
