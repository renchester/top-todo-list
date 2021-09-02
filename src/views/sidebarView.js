import View from './view';

class SidebarView extends View {
  _window = document.querySelector('.nav-bar');
  _parentElement = document.querySelector('.nav-subdiv.project--list');
  _hamburger = document.querySelector('.hamburger');
  _navHeaders = document.querySelector('.nav-headers');
  _mediaQueryPortrait = window.matchMedia('(orientation: portrait)');

  constructor() {
    super();
    this._addHandlerShowNavHeaders();
    this._addHandlerShowProjectDropDown();
    this._mediaQueryPortrait.addEventListener(
      'change',
      this._handleOrientationChange.bind(this)
    );
    this._initNavHeaders();
  }

  _generateMarkup() {
    this._clear();
    const markup = this._data.map(this._generateProjectMarkup).join('');
    return markup;
  }

  _generateProjectMarkup(project) {
    const markup = `
    <li class="nav-subdiv--content project--title">${project.title}</li>`;
    return markup;
  }

  _generatePlaceholder() {
    const markup = `
    <li class="nav-subdiv--content project--title">Example Project</li>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _handleOrientationChange(e) {
    if (e.matches) {
      this._matchPortrait();
    } else if (!e.matches) {
      this._matchLandscape();
    }
  }

  _initNavHeaders() {
    if (this._mediaQueryPortrait.matches) {
      this._matchPortrait();
    } else if (!this._mediaQueryPortrait.matches) {
      this._matchLandscape();
    }
  }

  _matchPortrait() {
    this._navHeaders.classList.add('hidden');
    this._hamburger.classList.remove('hidden');
  }

  _matchLandscape() {
    this._navHeaders.classList.remove('hidden');
    this._hamburger.classList.add('hidden');
  }

  _showNavHeadersDisplay() {
    this._navHeaders.classList.toggle('hidden');
  }

  _addHandlerShowNavHeaders() {
    this._hamburger.addEventListener(
      'click',
      this._showNavHeadersDisplay.bind(this)
    );
  }
  _addHandlerShowProjectDropDown() {
    document
      .querySelector('.nav-header.header--projects')
      .addEventListener('click', function () {
        document
          .querySelector('.nav-subdiv.project--list')
          .classList.toggle('project--list-visible');
      });
  }

  addHandlerShowProject(handler) {
    document
      .querySelectorAll('.nav-subdiv--content.project--title')
      .forEach((el) =>
        el.addEventListener('click', function (e) {
          const title = e.target.textContent;
          this._title = title;
          handler(title);
        })
      );
  }

  addHandlerShowHome(handler) {
    document
      .querySelector('.nav-header.header--home')
      .addEventListener('click', function (e) {
        handler();
        document.querySelector('.task-display--project-title').textContent =
          'Home';
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
