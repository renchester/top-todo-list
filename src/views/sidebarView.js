import View from './View';

class SidebarView extends View {
  _parentElement = document.querySelector('.nav--projects');

  _generateMarkup = () =>
    this._data
      .map(
        (proj) =>
          `<div class="nav-project" data-id="${proj.id}">${proj.title}</div>`,
      )
      .join('');

  _generateBackup = () =>
    `<div class="nav-project" data-id="ID00000">Example Project</div>`;
}

export default new SidebarView();
