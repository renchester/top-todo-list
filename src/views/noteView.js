import View from './View';

class NoteView extends View {
  _parentElement = document.querySelector('.content-display');
  _btnShowNotes = document.querySelector('.nav--notes');

  constructor() {
    super();
    this.addHandlerEditNotes();
    this.addHandlerDeleteNotes();
  }

  addHandlerShowNotes = (handler) => {
    this._btnShowNotes.addEventListener('click', (e) => {
      handler();
      this._changeTitle('Notes');
    });
  };

  addHandlerEditNotes = (handler) => {
    const notes = [...document.querySelectorAll('.note')];

    notes.forEach((note) =>
      note.addEventListener('focusout', (e) => {
        const noteToChange = e.target.closest('.note');
        const { id } = noteToChange.dataset;

        const title = noteToChange.querySelector('.note-title').textContent;
        const details = noteToChange.querySelector('.note-details').textContent;

        handler({ title, details, id });
      }),
    );
  };

  addHandlerDeleteNotes = (handler) => {
    const deleteBtns = [...document.querySelectorAll('.btn-delete-note')];

    deleteBtns.forEach((btn) =>
      btn.addEventListener('click', (e) => {
        const { id } = e.target.closest('.note').dataset;
        handler(id);
      }),
    );
  };

  _generateMarkup = () => {
    const even = this._data.filter((note, i) => i % 2 === 0);
    const odd = this._data.filter((note, i) => i % 2 !== 0);

    const markup = `
        <div class="notes-container">
            <div class="notes-col-1">
            ${this._generateNoteMarkup(even)}</div>
            <div class="notes-col-2">
            ${this._generateNoteMarkup(odd)}</div>
        </div>`;

    return markup;
  };

  _generateNoteMarkup = (data) => {
    const markup = data
      .map(
        (note) => `
            <div class="note" data-id="${note.id}">
              <button class="btn-delete-note">
                <span class="material-symbols-outlined">close</span>
              </button>
              <div class="note-title" contenteditable="true">
                ${note.title}
              </div>
              <div class="note-details" contenteditable="true">
                ${note.details}
              </div>
            </div>
         `,
      )
      .join('');

    return markup;
  };

  _generateBackup = () => `
            <div class="note" id="null">
              <div class="note-title" contenteditable="true">
                Sample Note
              </div>
              <div class="note-details" contenteditable="true">
                You are seeing this sample because you have not added any notes yet. Add one now!
              </div>
            </div>
         `;
}

export default new NoteView();
