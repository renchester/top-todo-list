import ModalView from './modalView';
import AddTaskView from './addTaskView';

class AddNoteView extends ModalView {
  _btnSubmit = document.querySelector('.btn--submit.submit--new-note');

  constructor() {
    super();
  }

  uploadData(handler, e) {
    e.preventDefault();

    const noteTitle = this._parentElement.querySelector(
      '.new-note--note-title'
    ).value;
    const noteDetails = this._parentElement.querySelector(
      '.new-note--note-details'
    ).value;

    const validationArr = [noteTitle, noteDetails];

    if (this._validateTask(validationArr)) {
      const date = new Date();
      const data = {
        title: noteTitle,
        details: noteDetails,
        id: `${noteTitle}--${date.getTime()}`,
      };

      this._clearForm();
      this.toggleWindow();
      handler(data);
    } else {
      this._renderFormError();
    }
  }

  addHandlerAddNote(handler) {
    this._btnSubmit.addEventListener(
      'click',
      this.uploadData.bind(this, handler)
    );
  }

  _renderFormError() {
    console.log('error');
  }

  _validateTask(arr) {
    const [title, details] = arr;
    if (!title) {
      return false;
    } else return true;
  }
}

export default new AddNoteView();
