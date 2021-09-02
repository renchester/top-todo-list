'use strict';

export default class View {
  _data;

  render(data, other) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this._generatePlaceholder(other);

    this._data = data;
    const markup = this._generateMarkup(other);

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
    <p>${message}</p>
    </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
