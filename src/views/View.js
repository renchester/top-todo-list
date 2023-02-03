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

  renderProjects = (data, chosenProjID) => {
    let markup;

    if (!chosenProjID) {
      markup = data
        .map(
          (proj) =>
            `<option value="${proj.id}" class="project-option">${proj.title}</option>`,
        )
        .join('');
    } else if (chosenProjID) {
      const firstChoice = data.find((proj) => proj.id === chosenProjID);
      const others = data
        .filter((proj) => proj.id !== chosenProjID)
        .map(
          (proj) =>
            `<option value="${proj.id}" class="project-option">${proj.title}</option>`,
        )
        .join('');

      markup = `<option value="${firstChoice.id}" class="project-option">${firstChoice.title}</option>
      ${others}`;
    }

    const projSelection = this._parentElement.querySelector('.select-project');

    projSelection.innerHTML = '';
    projSelection.insertAdjacentHTML('afterbegin', markup);
  };

  _changeTitle = (text) => {
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
