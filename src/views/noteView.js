import View from './view';

class NoteView extends View {
  _parentElement = document.querySelector('.task-display');

  constructor() {
    super();
  }

  _generateMarkup() {
    this._clear();
    const evenIndices = this._data.filter((note, index) => index % 2 === 0);
    const oddIndices = this._data.filter((note, index) => index % 2 !== 0);

    let markup = `
        <div class="task-display--notes-container">
          <div class="notes-container--col-1">${evenIndices
            .map(this._generateNoteMarkup)
            .join('')}
          </div>
          <div class="notes-container--col-2">${oddIndices
            .map(this._generateNoteMarkup)
            .join('')}
          </div>
        </div>
    
    `;
    return markup;
  }

  _generateNoteMarkup(note, index) {
    return `<div class="note" data-id="${note.id}">
              <div class="note--icon-wrapper note-delete">
                <span class="material-icons icon--delete-note"> close </span>
              </div>
              <div class="note--title" contenteditable="true">${note.title}</div>
              <div class="note--details" contenteditable="true">${note.details}</div>
            </div>`;
  }

  _generatePlaceholder() {
    const markup = `
      <div class="task-display--notes-container">
          <div class="notes-container--col-1">  
            <div class="note" data-id="Sample Note">
              <div class="note--title" contenteditable="true">Example Note</div>
              <div class="note--details" contenteditable="true">You are seeing this example of a note detail because you have not added any notes yet. Add a note now by clicking on the add note button!
              </div>
            </div>
          </div>
          <div class="notes-container--col-2">
           <div class="note" data-id="Sample Note 2">
              <div class="note--title" contenteditable="true">Grocery List</div>
              <div class="note--details" contenteditable="true">Milk
Eggs
Oreos</div>
            </div>
          </div>
        </div>   
            `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  addHandlerDeleteNote(handler) {
    document.querySelectorAll('.note').forEach((el) =>
      el.addEventListener('click', function (e) {
        if (!e.target.classList.contains('icon--delete-note')) {
          return;
        }

        const id = e.target.closest('.note').dataset.id;

        handler(id);
      })
    );
  }

  addHandlerPersistNoteTitle(handler) {
    document.querySelectorAll('.note--title').forEach((el) =>
      el.addEventListener('focusout', function (e) {
        const id = e.target.closest('.note').dataset.id;
        const value = e.target.textContent;
        const date = new Date();
        const newID = `${value}--${date.getTime()}`;

        handler(id, newID, value);
      })
    );
  }

  addHandlerPersistNoteDetail(handler) {
    document.querySelectorAll('.note--details').forEach((el) =>
      el.addEventListener('focusout', function (e) {
        const id = e.target.closest('.note').dataset.id;
        const value = e.target.innerText;

        handler(id, value);
      })
    );
  }
}

export default new NoteView();
