import View from './View';

class SidebarView extends View {
  _parentElement = document.querySelector('.nav--projects');

  addHandlerShowNavProjects = () => {
    document.querySelector('.hamburger-icon').addEventListener('click', () => {
      const projects = document.querySelector('.nav--projects');

      projects.style.opacity = projects.style.opacity === '0' ? '1' : '0';
    });
  };

  _generateMarkup = () =>
    this._data
      .map(
        (proj) =>
          `<div tabindex="0" class="nav--project" data-id="${proj.id}">
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
