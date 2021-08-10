import View from './view';

class SidebarView extends View {
  _parentElement = document.querySelector('.nav-bar');

  constructor() {
    super();
  }
}

export default new SidebarView();
