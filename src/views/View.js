const View = (function () {
  let _data;

  function render() {}
  function update(data) {
    const newMarkup = _generateMarkup();
  }

  function _clear(el) {
    el.parentElement.innerHTML = '';
  }

  function _generateMarkup() {}

  function test() {
    console.log('view.js');
  }

  return { test };
})();

export default View;
