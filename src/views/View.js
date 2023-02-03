export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this._renderBackup();

    this._data = data;
    const markup = this._generateMarkup(data);

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderProjects = (data) => {
    const markup = data
      .map(
        (proj) =>
          `<option value="${proj.id}" class="project-option">${proj.title}</option>`,
      )
      .join('');

    const projSelection = this._parentElement.querySelector('.select-project');

    projSelection.innerHTML = '';
    projSelection.insertAdjacentHTML('afterbegin', markup);
  };

  changeTitle = (text) => {
    document.querySelector('.content-title').textContent = text;
  };

  _renderBackup() {
    const markup = this._generateBackup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  _unhideEl(el) {
    el.classList.remove('hidden');
  }

  _hideEl(el) {
    el.classList.add('hidden');
  }

  _toggleEl(el) {
    el.classList.toggle('hidden');
  }
}
