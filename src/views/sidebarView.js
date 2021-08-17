import View from './view';

class SidebarView extends View {
  _window = document.querySelector('.nav-bar');
  _parentElement = document.querySelector('.nav-subdiv.project--header');

  constructor() {
    super();
  }

  _generateMarkup() {
    this._clear();
    const markup = this._data.map(this._generateProjectMarkup).join('');
    return markup;
  }

  _generateProjectMarkup(project) {
    const markup = `
    <p class="nav-subdiv--content project--title">${project.title}</p>`;
    return markup;
  }

  addHandlerShowProject(handler) {
    document
      .querySelectorAll('.nav-subdiv--content.project--title')
      .forEach((el) =>
        el.addEventListener('click', this.showProject.bind(this, handler))
      );
  }

  showProject(handler, e) {
    const title = e.target.textContent;
    this._title = title;
    handler(title);
  }

  addHandlerShowHome(handler) {
    document
      .querySelector('.nav-header.header--home')
      .addEventListener('click', function (e) {
        handler();
      });
  }

  addHandlerShowAllTasks(handler) {
    document
      .querySelector('.nav-header.header--all')
      .addEventListener('click', function (e) {
        handler();
        document.querySelector('.task-display--project-title').textContent =
          'All Tasks';
      });
  }

  addHandlerShowNotes(handler) {
    document
      .querySelector('.nav-header.header--notes')
      .addEventListener('click', function (e) {
        handler();
      });
  }
}

export default new SidebarView();
