/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "state": () => (/* binding */ state),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addNote": () => (/* binding */ addNote),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "updateTask": () => (/* binding */ updateTask)
/* harmony export */ });


const state = {
  tasks: [],
  notes: [],
  projects: [],
  currTask: {},
  currNote: {},
};

const createTask = function (data) {
  return {
    title: data.title,
    date: data.date,
    priority: data.priority,
    ...(data.project && { project: data.project }),
    ...(data.description && { description: data.description }),
  };
};

const createProject = function (data) {
  return {
    title: data.title,
  };
};

const createNote = function (data) {
  return {
    title: data.title,
    ...(data.description && { description: data.description }),
  };
};

const persistTasks = function () {
  localStorage.setItem('tasks', JSON.stringify(state.tasks));
};

const persistProjects = function () {
  localStorage.setItem('projects', JSON.stringify(state.projects));
};

const persistNotes = function () {
  localStorage.setItem('notes', JSON.stringify(state.notes));
};

const addTask = function (task) {
  // Add task to app state
  state.tasks.unshift(task);

  // Set to local storage
  persistTasks();
};

const addProject = function (project) {
  // Add project to app state
  state.projects.push(project);

  // Set to local storage
  persistProjects();
};

const addNote = function (note) {
  // Add note to app state
  state.notes.push(note);

  // Set to local storage
  persistNotes();
};

const deleteTask = function (id) {
  const index = state.tasks.findIndex((el) => el.id === id);
  state.tasks.splice(index, 1);

  persistTasks();
};

const updateTask = function (id, replacement) {
  const index = state.tasks.findIndex((el) => el.id === id);
  state.tasks.splice(index, 1, replacement);

  persistTasks();
};

const init = function () {
  const localTasks = localStorage.getItem('tasks');
  const localProjects = localStorage.getItem('projects');
  const localNotes = localStorage.getItem('notes');

  if (localTasks) {
    state.tasks = JSON.parse(localTasks);
  }

  if (localProjects) {
    state.projects = JSON.parse(localProjects);
  }

  if (localNotes) {
    state.notes = JSON.parse(localNotes);
  }
};
init();


/***/ }),

/***/ "./src/views/addNoteView.js":
/*!**********************************!*\
  !*** ./src/views/addNoteView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalView */ "./src/views/modalView.js");
/* harmony import */ var _addTaskView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskView */ "./src/views/addTaskView.js");



class AddNoteView extends _modalView__WEBPACK_IMPORTED_MODULE_0__.default {
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
      const data = {
        title: noteTitle,
        details: noteDetails,
      };

      this._clearForm();
      this.toggleWindow();
      handler(data);
    } else {
      this._renderFormError();
    }
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

  addHandlerAddNote(handler) {
    this._btnSubmit.addEventListener(
      'click',
      this.uploadData.bind(this, handler)
    );
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AddNoteView());


/***/ }),

/***/ "./src/views/addProjectView.js":
/*!*************************************!*\
  !*** ./src/views/addProjectView.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalView */ "./src/views/modalView.js");
/* harmony import */ var _addTaskView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskView */ "./src/views/addTaskView.js");



class AddProjectView extends _modalView__WEBPACK_IMPORTED_MODULE_0__.default {
  _btnSubmit = document.querySelector('.btn--submit.submit--new-project');

  constructor() {
    super();
  }

  uploadData(handler, e) {
    e.preventDefault();

    const projectTitle = this._parentElement.querySelector(
      '.new-project--project-title'
    ).value;

    if (this._validateTask(projectTitle)) {
      const data = {
        title: projectTitle,
      };

      this._clearForm();
      this.toggleWindow();
      handler(data);
    } else {
      this._renderFormError();
    }
  }

  _renderFormError() {
    console.log('error');
  }

  _validateTask(title) {
    if (!title || title.length < 1) {
      return false;
    } else return true;
  }

  addHandlerAddProject(handler) {
    this._btnSubmit.addEventListener(
      'click',
      this.uploadData.bind(this, handler)
    );
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AddProjectView());


/***/ }),

/***/ "./src/views/addTaskView.js":
/*!**********************************!*\
  !*** ./src/views/addTaskView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalView */ "./src/views/modalView.js");


class AddTaskView extends _modalView__WEBPACK_IMPORTED_MODULE_0__.default {
  _priorityLabels = document.querySelector('.new-task--task-priority-wrapper');
  _btnSubmit = document.querySelector('.btn--submit.submit--new-task');

  constructor() {
    super();
    this._addHandlerPriority();
    this._addHandlerShowModal();
    this._addHandlerCloseModal();
  }

  uploadData(handler, e) {
    e.preventDefault();

    const taskTitle = this._parentElement.querySelector(
      '.new-task--task-title'
    ).value;

    const taskDetails = this._parentElement.querySelector(
      '.new-task--task-details'
    ).value;

    const taskDate = this._parentElement.querySelector(
      '.new-task--task-date'
    ).value;

    const taskPriority = this._parentElement.querySelector(
      '.priority-label--active'
    )?.textContent;

    const validationArr = [taskTitle, taskDetails, taskDate, taskPriority];

    if (this._validateTask(validationArr)) {
      const data = {
        title: taskTitle,
        details: taskDetails,
        date: taskDate,
        priority: taskPriority,
        id: `${taskDate}--${taskTitle}`,
      };

      this._clearForm();
      this.toggleWindow();
      handler(data);
    } else {
      this._renderFormError();
    }
  }

  addHandlerAddTask(handler) {
    this._btnSubmit.addEventListener(
      'click',
      this.uploadData.bind(this, handler)
    );
  }

  _addHandlerPriority() {
    this._priorityLabels.addEventListener(
      'click',
      this._togglePriority.bind(this)
    );
  }

  _togglePriority(e) {
    if (!e.target.classList.contains('new-task--task-priority-label')) return;

    document
      .querySelectorAll('.new-task--task-priority-label')
      .forEach((el) => el.classList.remove('priority-label--active'));

    e.target.classList.add('priority-label--active');
  }

  _validateTask(arr) {
    const [title, details, date, priority] = arr;
    if (!title || !date || !priority) {
      return false;
    } else return true;
  }

  _renderFormError() {
    console.log('error');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AddTaskView());


/***/ }),

/***/ "./src/views/detailsView.js":
/*!**********************************!*\
  !*** ./src/views/detailsView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalView */ "./src/views/modalView.js");


class DetailsView extends _modalView__WEBPACK_IMPORTED_MODULE_0__.default {
  _parentElement = document.querySelector('.modal--task-details');
  _window = document.querySelector('.modal--task-details');
  _overlay = document.querySelector('.overlay');
  _taskDetails = document.querySelector('.modal--task-details');

  constructor() {
    super();
  }

  showDetails(handler, e) {
    if (!e.target.classList.contains('task-details')) return;

    const id = e.target.closest('.task').dataset.id;

    this.toggleWindow();

    handler(id);

    this._btnClose = document.querySelector('.icon--close-details-modal');
    this._addHandlerCloseModal();
  }

  deleteTask(handler, e) {
    const id = e.target.closest('.task').dataset.id;

    handler(id);
  }

  deleteTaskOnModal(handler, e) {
    const id = e.target.closest('.modal--task-details').dataset.id;

    handler(id);
  }

  addHandlerTaskDetails(handler) {
    document
      .querySelectorAll('.task')
      .forEach((el) =>
        el.addEventListener('click', this.showDetails.bind(this, handler))
      );
  }

  addHandlerDeleteTask(handler) {
    document
      .querySelectorAll('.material-icons.icon--delete.task-display--icons')
      .forEach((el) =>
        el.addEventListener('click', this.deleteTask.bind(this, handler))
      );
  }

  addHandlerDeleteTaskOnModal(handler) {
    document
      .querySelector('.task-details--icon-wrapper.task-delete')
      .addEventListener('click', this.deleteTaskOnModal.bind(this, handler));
  }

  _generateMarkup() {
    const markup = `
        <span class="material-icons icon--close-details-modal"> close </span>
        <div class="task-details--task-title">${this._data.title}</div>
        <div class="task-details--task-details">
          ${this._data.details}
        </div>
        <div class="task-details--task-date-wrapper">
          Due date:
          <span class="task-details--task-date">${this._data.date}</span>
        </div>
        <div class="task-details--task-priority-wrapper">
          Priority:
          <span
            class="task-details--task-priority task-details--task-priority-${this._data.priority.toLowerCase()}"
            >${this._data.priority}</span
          >
        </div>
        <div class="task-details--task-editor-wrapper">
          <div class="task-details--icon-wrapper task-edit">
            <!-- <span class="material-icons icon--edit task-details--icons">
              mode_edit
            </span> -->
            Edit
          </div>
          <div class="task-details--icon-wrapper task-delete">
            <!-- <span class="material-icons icon--delete task-details--icons">
              delete
            </span> -->
            Delete
          </div>
        </div>
    `;

    this._parentElement.dataset.id = this._data.id;

    return markup;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new DetailsView());


/***/ }),

/***/ "./src/views/editTaskView.js":
/*!***********************************!*\
  !*** ./src/views/editTaskView.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/views/view.js");
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalView */ "./src/views/modalView.js");
/* harmony import */ var _addTaskView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTaskView */ "./src/views/addTaskView.js");




class EditTaskView extends _modalView__WEBPACK_IMPORTED_MODULE_1__.default {
  _parentElement = document.querySelector('.modal--task-details');
  _window = document.querySelector('.modal--task-details');

  _btnClose = document.querySelector('.icon--close-editor-modal');
  _btnSubmit = document.querySelector('.task-editor--icon-wrapper.task-save');
  _btnDelete = document.querySelector('.task-editor--icon-wrapper.task-delete');

  constructor() {
    super();
  }

  showEditorModal(handler, e) {
    const id = e.target.closest('.task').dataset.id;

    this.toggleWindow();

    handler(id);

    this._btnClose = document.querySelector('.icon--close-editor-modal');
    this._addHandlerCloseModal();
    this._addHandlerPriority();
  }

  saveEdit(handler, e) {
    const taskTitle = this._parentElement.querySelector(
      '.task-editor--task-title'
    ).value;

    const taskDetails = this._parentElement.querySelector(
      '.task-editor--task-details'
    ).value;

    const taskDate = this._parentElement.querySelector(
      '.task-editor--task-date'
    ).value;

    const taskPriority = this._parentElement.querySelector(
      '.priority-label--active'
    )?.textContent;

    const validationArr = [taskTitle, taskDetails, taskDate, taskPriority];

    if (this._validateTask(validationArr)) {
      const data = {
        title: taskTitle,
        details: taskDetails,
        date: taskDate,
        priority: taskPriority,
        id: `${taskDate}--${taskTitle}`,
      };

      this._clearForm();
      this.toggleWindow();
      handler(this._parentElement.dataset.id, data);
    } else {
      this._renderFormError();
    }
  }

  addHandlerShowEditor(handler) {
    document
      .querySelectorAll('.material-icons.icon--edit.task-display--icons')
      .forEach((el) =>
        el.addEventListener('click', this.showEditorModal.bind(this, handler))
      );
  }

  addHandlerSaveEdit(handler) {
    document
      .querySelector('.task-editor--icon-wrapper.task-save')
      .addEventListener('click', this.saveEdit.bind(this, handler));
  }

  _addHandlerPriority() {
    document
      .querySelector('.task-editor--task-priority-wrapper')
      .addEventListener('click', this._togglePriority.bind(this));
  }

  _generateMarkup() {
    // <div class="modal--task-detailsmodal--task-editor">
    const markup = `
        <span class="material-icons icon--close-editor-modal"> close </span>
        <input
          class="task-editor--form-element task-editor--task-title"
          type="text"
          placeholder="Enter title here"
          value="${this._data.title}"
          minlength="1"
          maxlength="60"
        />
        <textarea
          class="task-editor--form-element task-editor--task-details"
          type="text"
          placeholder="Enter details here"
          maxlength="240"
        >${this._data.details ? this._data.details : ''}</textarea>

        <div class="task-editor--task-date-wrapper">
          Due date:
          <input
            class="task-editor--form-element task-editor--task-date"
            type="date"
            value="${this._data.date}"
          />
        </div>

        <div class="task-editor--task-priority-wrapper">
          <p for="task-editor-priority">Priority:</p>
          <input
            type="radio"
            class="task-editor--task-priority priority-low"
            name="task-editor-priority"
            value="low"
          />
          <label
            for="task-editor-priority"
            class="task-editor--task-priority-label priority-label-low ${
              this._data.priority.toLowerCase() === 'low'
                ? 'priority-label--active'
                : ''
            }"
            >Low</label
          >
          <input
            type="radio"
            class="task-editor--task-priority priority-medium"
            name="task-editor-priority"
            value="medium"
          />
          <label
            for="task-editor-priority"
            class="task-editor--task-priority-label priority-label-medium ${
              this._data.priority.toLowerCase() === 'medium'
                ? 'priority-label--active'
                : ''
            }"
            >Medium</label
          >
          <input
            type="radio"
            class="task-editor--task-priority priority-high"
            name="task-editor-priority"
            value="high"
          />
          <label
            for="task-editor-priority"
            class="task-editor--task-priority-label priority-label-high ${
              this._data.priority.toLowerCase() === 'high'
                ? 'priority-label--active'
                : ''
            }"
            >High</label
          >
        </div>
        <div class="task-editor--task-editor-wrapper">
          <div class="task-editor--icon-wrapper task-save">Save</div>
          <div class="task-editor--icon-wrapper task-delete">Delete</div>
        </div>
    `;

    this._parentElement.classList.add('modal--task-editor');

    this._parentElement.dataset.id = this._data.id;

    return markup;
  }

  _togglePriority(e) {
    if (!e.target.classList.contains('task-editor--task-priority-label'))
      return;

    document
      .querySelectorAll('.task-editor--task-priority-label')
      .forEach((el) => el.classList.remove('priority-label--active'));

    e.target.classList.add('priority-label--active');
  }

  _validateTask(arr) {
    const [title, details, date, priority] = arr;
    if (!title || !date || !priority) {
      return false;
    } else return true;
  }

  _clearForm() {
    this._parentElement.querySelectorAll('.task-editor--form-element');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EditTaskView());


/***/ }),

/***/ "./src/views/modalView.js":
/*!********************************!*\
  !*** ./src/views/modalView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/views/view.js");


class ModalView extends _view__WEBPACK_IMPORTED_MODULE_0__.default {
  _errorMessage = 'Form input invalid';

  _parentElement = document.querySelector('.add-task--content');
  _window = document.querySelector('.modal--add-task');
  _sidebarLabels = document.querySelectorAll('.sidebar--label');
  _overlay = document.querySelector('.overlay');

  _btnOpen = document.querySelector('.btn.add-task');
  _btnClose = document.querySelector(
    '.material-icons.icon--close-add-new-modal'
  );

  constructor() {
    super();
    this._addHandlerModalSidebar();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  toggleFormDisplay(e) {
    // Hides all forms
    this._parentElement
      .querySelectorAll('.content-form')
      .forEach((el) => el.classList.add('hidden'));

    // Establishes which form to show
    const formType = Array.from(e.target.classList)[1].split('new-')[1];

    this._clearForm();

    // Show form to display
    this._parentElement
      .querySelector(`.content-form--new-${formType}`)
      .classList.remove('hidden');
  }

  _addHandlerShowModal() {
    // Shows/opens the modal
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerCloseModal() {
    // Closes the modal
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    // this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerModalSidebar() {
    // Changes the form display
    this._sidebarLabels.forEach((el) =>
      el.addEventListener('click', this.toggleFormDisplay.bind(this))
    );
  }

  _clearForm() {
    // Clear task form
    this._parentElement
      .querySelectorAll('.new-task--form-element')
      .forEach((el) => (el.value = ''));

    // Clear project form
    this._parentElement
      .querySelectorAll('.new-project--form-element')
      .forEach((el) => (el.value = ''));

    // Clear note form
    this._parentElement
      .querySelectorAll('.new-note--form-element')
      .forEach((el) => (el.value = ''));

    // Clear priority choice
    this._parentElement
      .querySelectorAll('.new-task--task-priority-label')
      .forEach((el) => el.classList.remove('priority-label--active'));

    // Clear task date
    this._parentElement.querySelector('.new-task--task-date').value = '';
  }
}


/***/ }),

/***/ "./src/views/sidebarView.js":
/*!**********************************!*\
  !*** ./src/views/sidebarView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/views/view.js");


class SidebarView extends _view__WEBPACK_IMPORTED_MODULE_0__.default {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SidebarView());


/***/ }),

/***/ "./src/views/taskView.js":
/*!*******************************!*\
  !*** ./src/views/taskView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/views/view.js");
/* harmony import */ var _detailsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailsView */ "./src/views/detailsView.js");



class TaskView extends _view__WEBPACK_IMPORTED_MODULE_0__.default {
  _parentElement = document.querySelector('.task-display');
  _taskDetails = document.querySelector('.modal--task-details');

  constructor() {
    super();
  }

  _generateMarkup() {
    const markup = this._data.map(this._generateTaskMarkup).join('');
    return markup;
  }

  _generateTaskMarkup(task) {
    return `
        <div class="task priority-${task.priority.toLowerCase()}" data-id="${
      task.id
    }">
          <div class="task-checkbox"></div>
          <div class="task-title">${task.title}</div>
          <div class="task-details">Details</div>
          <div class="task-date">${task.date}</div>
          <div class="task-display--icon-wrapper task-edit">
            <span class="material-icons icon--edit task-display--icons"> mode_edit </span>
          </div>
          <div class="task-display--icon-wrapper task-delete">
            <span class="material-icons icon--delete task-display--icons"> delete </span>
          </div>
        </div>`;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TaskView());


/***/ }),

/***/ "./src/views/view.js":
/*!***************************!*\
  !*** ./src/views/view.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });


class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(Message = this._errorMessage) {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _views_addTaskView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/addTaskView */ "./src/views/addTaskView.js");
/* harmony import */ var _views_addProjectView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/addProjectView */ "./src/views/addProjectView.js");
/* harmony import */ var _views_addNoteView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/addNoteView */ "./src/views/addNoteView.js");
/* harmony import */ var _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/sidebarView */ "./src/views/sidebarView.js");
/* harmony import */ var _views_taskView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/taskView */ "./src/views/taskView.js");
/* harmony import */ var _views_detailsView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/detailsView */ "./src/views/detailsView.js");
/* harmony import */ var _views_editTaskView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/editTaskView */ "./src/views/editTaskView.js");













// Index js for the application logic (controller)

const controlAddTask = function (data) {
  _model__WEBPACK_IMPORTED_MODULE_0__.addTask(data);

  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.tasks);

  addHandlersToTask();
};

const controlAddProject = function (data) {
  _model__WEBPACK_IMPORTED_MODULE_0__.addProject(data);

  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects);
};

const controlAddNote = function (data) {
  _model__WEBPACK_IMPORTED_MODULE_0__.addNote(data);
};

const controlShowTasks = function () {
  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.tasks);
  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects);
};

const controlDeleteTask = function (id) {
  _model__WEBPACK_IMPORTED_MODULE_0__.deleteTask(id);

  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.tasks);

  addHandlersToTask();
};

const controlDeleteTaskOnModal = function (id) {
  _model__WEBPACK_IMPORTED_MODULE_0__.deleteTask(id);

  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.toggleWindow();

  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.tasks);

  addHandlersToTask();
};

const controlSaveEditTask = function (id, replacement) {
  _model__WEBPACK_IMPORTED_MODULE_0__.updateTask(id, replacement);

  controlShowTasks();
  addHandlersToTask();
};

const controlEditTask = function (id) {
  const taskToEdit = _model__WEBPACK_IMPORTED_MODULE_0__.state.tasks.find((task) => task.id === id);

  _views_editTaskView__WEBPACK_IMPORTED_MODULE_7__.default.render(taskToEdit);

  _views_editTaskView__WEBPACK_IMPORTED_MODULE_7__.default.addHandlerSaveEdit(controlSaveEditTask);
};

const controlShowDetails = function (id) {
  const taskToShow = _model__WEBPACK_IMPORTED_MODULE_0__.state.tasks.find((task) => task.id === id);

  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.render(taskToShow);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerDeleteTaskOnModal(controlDeleteTaskOnModal);
};

const init = function () {
  controlShowTasks();
  _views_addTaskView__WEBPACK_IMPORTED_MODULE_1__.default.addHandlerAddTask(controlAddTask);
  _views_addProjectView__WEBPACK_IMPORTED_MODULE_2__.default.addHandlerAddProject(controlAddProject);
  _views_addNoteView__WEBPACK_IMPORTED_MODULE_3__.default.addHandlerAddNote(controlAddNote);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerTaskDetails(controlShowDetails);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerDeleteTask(controlDeleteTask);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_7__.default.addHandlerShowEditor(controlEditTask);
};

init();

//  HELPER FUNCTIONS

function addHandlersToTask() {
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerTaskDetails(controlShowDetails);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerDeleteTask(controlDeleteTask);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_7__.default.addHandlerShowEditor(controlEditTask);
}

/*

class Task {
  constructor(name, date, priority, description) {
    this.name = name;
    this.date = date;
    this.priority = priority;
    this.description = description;
  }

  get getName() {
    return this.name;
  }

  set setName(value) {
    this.name = value;
  }

  get getDate() {
    return this.date;
  }

  set setDate(value) {
    this.date = value;
  }

  get getPriority() {
    return this.priority;
  }

  set setPriority(value) {
    this.priority = value;
  }

  get getDescription() {
    return this.description;
  }

  set setDescription(value) {
    this.description = value;
  }
}

*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTVI7O0FBRVgsd0JBQXdCLDBDQUFJO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEYwQjs7QUFFMUIsMEJBQTBCLDBDQUFJO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QlA7QUFDYzs7QUFFeEMsdUJBQXVCLDBDQUFJO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsNEJBQTRCO0FBQ2hFO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0NBQW9DLFdBQVc7QUFDL0M7QUFDQSxtQ0FBbUMsVUFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ2pCOztBQUVFO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFFBQVE7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRW9COztBQUVhO0FBQ007QUFDTjs7QUFFQTtBQUNOO0FBQ007QUFDRTs7QUFFaEQ7O0FBRUE7QUFDQSxFQUFFLDJDQUFhOztBQUVmLEVBQUUsMkRBQWUsQ0FBQywrQ0FBaUI7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDhDQUFnQjs7QUFFbEIsRUFBRSw4REFBa0IsQ0FBQyxrREFBb0I7QUFDekM7O0FBRUE7QUFDQSxFQUFFLDJDQUFhO0FBQ2Y7O0FBRUE7QUFDQSxFQUFFLDJEQUFlLENBQUMsK0NBQWlCO0FBQ25DLEVBQUUsOERBQWtCLENBQUMsa0RBQW9CO0FBQ3pDOztBQUVBO0FBQ0EsRUFBRSw4Q0FBZ0I7O0FBRWxCLEVBQUUsMkRBQWUsQ0FBQywrQ0FBaUI7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDhDQUFnQjs7QUFFbEIsRUFBRSxvRUFBd0I7O0FBRTFCLEVBQUUsMkRBQWUsQ0FBQywrQ0FBaUI7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDhDQUFnQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLG9EQUFzQjs7QUFFM0MsRUFBRSwrREFBbUI7O0FBRXJCLEVBQUUsMkVBQStCO0FBQ2pDOztBQUVBO0FBQ0EscUJBQXFCLG9EQUFzQjs7QUFFM0MsRUFBRSw4REFBa0I7QUFDcEIsRUFBRSxtRkFBdUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLEVBQUUseUVBQTZCO0FBQy9CLEVBQUUsK0VBQW1DO0FBQ3JDLEVBQUUseUVBQTZCO0FBQy9CLEVBQUUsNkVBQWlDO0FBQ25DLEVBQUUsNEVBQWdDO0FBQ2xDLEVBQUUsNkVBQWlDO0FBQ25DOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsRUFBRSw2RUFBaUM7QUFDbkMsRUFBRSw0RUFBZ0M7QUFDbEMsRUFBRSw2RUFBaUM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2FkZE5vdGVWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvYWRkUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9hZGRUYXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2RldGFpbHNWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvZWRpdFRhc2tWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvbW9kYWxWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3Mvc2lkZWJhclZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy90YXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY29uc3Qgc3RhdGUgPSB7XG4gIHRhc2tzOiBbXSxcbiAgbm90ZXM6IFtdLFxuICBwcm9qZWN0czogW10sXG4gIGN1cnJUYXNrOiB7fSxcbiAgY3Vyck5vdGU6IHt9LFxufTtcblxuY29uc3QgY3JlYXRlVGFzayA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgZGF0ZTogZGF0YS5kYXRlLFxuICAgIHByaW9yaXR5OiBkYXRhLnByaW9yaXR5LFxuICAgIC4uLihkYXRhLnByb2plY3QgJiYgeyBwcm9qZWN0OiBkYXRhLnByb2plY3QgfSksXG4gICAgLi4uKGRhdGEuZGVzY3JpcHRpb24gJiYgeyBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbiB9KSxcbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbiAoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlTm90ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgLi4uKGRhdGEuZGVzY3JpcHRpb24gJiYgeyBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbiB9KSxcbiAgfTtcbn07XG5cbmNvbnN0IHBlcnNpc3RUYXNrcyA9IGZ1bmN0aW9uICgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RhdGUudGFza3MpKTtcbn07XG5cbmNvbnN0IHBlcnNpc3RQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoc3RhdGUucHJvamVjdHMpKTtcbn07XG5cbmNvbnN0IHBlcnNpc3ROb3RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVzJywgSlNPTi5zdHJpbmdpZnkoc3RhdGUubm90ZXMpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgLy8gQWRkIHRhc2sgdG8gYXBwIHN0YXRlXG4gIHN0YXRlLnRhc2tzLnVuc2hpZnQodGFzayk7XG5cbiAgLy8gU2V0IHRvIGxvY2FsIHN0b3JhZ2VcbiAgcGVyc2lzdFRhc2tzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIC8vIEFkZCBwcm9qZWN0IHRvIGFwcCBzdGF0ZVxuICBzdGF0ZS5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXG4gIC8vIFNldCB0byBsb2NhbCBzdG9yYWdlXG4gIHBlcnNpc3RQcm9qZWN0cygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZE5vdGUgPSBmdW5jdGlvbiAobm90ZSkge1xuICAvLyBBZGQgbm90ZSB0byBhcHAgc3RhdGVcbiAgc3RhdGUubm90ZXMucHVzaChub3RlKTtcblxuICAvLyBTZXQgdG8gbG9jYWwgc3RvcmFnZVxuICBwZXJzaXN0Tm90ZXMoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUYXNrID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUudGFza3MuZmluZEluZGV4KChlbCkgPT4gZWwuaWQgPT09IGlkKTtcbiAgc3RhdGUudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcblxuICBwZXJzaXN0VGFza3MoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUYXNrID0gZnVuY3Rpb24gKGlkLCByZXBsYWNlbWVudCkge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLnRhc2tzLmZpbmRJbmRleCgoZWwpID0+IGVsLmlkID09PSBpZCk7XG4gIHN0YXRlLnRhc2tzLnNwbGljZShpbmRleCwgMSwgcmVwbGFjZW1lbnQpO1xuXG4gIHBlcnNpc3RUYXNrcygpO1xufTtcblxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbG9jYWxUYXNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpO1xuICBjb25zdCBsb2NhbFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gIGNvbnN0IGxvY2FsTm90ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKTtcblxuICBpZiAobG9jYWxUYXNrcykge1xuICAgIHN0YXRlLnRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFRhc2tzKTtcbiAgfVxuXG4gIGlmIChsb2NhbFByb2plY3RzKSB7XG4gICAgc3RhdGUucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsUHJvamVjdHMpO1xuICB9XG5cbiAgaWYgKGxvY2FsTm90ZXMpIHtcbiAgICBzdGF0ZS5ub3RlcyA9IEpTT04ucGFyc2UobG9jYWxOb3Rlcyk7XG4gIH1cbn07XG5pbml0KCk7XG4iLCJpbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcbmltcG9ydCBBZGRUYXNrVmlldyBmcm9tICcuL2FkZFRhc2tWaWV3JztcblxuY2xhc3MgQWRkTm90ZVZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBfYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tc3VibWl0LnN1Ym1pdC0tbmV3LW5vdGUnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgdXBsb2FkRGF0YShoYW5kbGVyLCBlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3Qgbm90ZVRpdGxlID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5uZXctbm90ZS0tbm90ZS10aXRsZSdcbiAgICApLnZhbHVlO1xuICAgIGNvbnN0IG5vdGVEZXRhaWxzID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5uZXctbm90ZS0tbm90ZS1kZXRhaWxzJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uQXJyID0gW25vdGVUaXRsZSwgbm90ZURldGFpbHNdO1xuXG4gICAgaWYgKHRoaXMuX3ZhbGlkYXRlVGFzayh2YWxpZGF0aW9uQXJyKSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IG5vdGVUaXRsZSxcbiAgICAgICAgZGV0YWlsczogbm90ZURldGFpbHMsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9jbGVhckZvcm0oKTtcbiAgICAgIHRoaXMudG9nZ2xlV2luZG93KCk7XG4gICAgICBoYW5kbGVyKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJGb3JtRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyRm9ybUVycm9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICB9XG5cbiAgX3ZhbGlkYXRlVGFzayhhcnIpIHtcbiAgICBjb25zdCBbdGl0bGUsIGRldGFpbHNdID0gYXJyO1xuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhZGRIYW5kbGVyQWRkTm90ZShoYW5kbGVyKSB7XG4gICAgdGhpcy5fYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy51cGxvYWREYXRhLmJpbmQodGhpcywgaGFuZGxlcilcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBZGROb3RlVmlldygpO1xuIiwiaW1wb3J0IE1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5pbXBvcnQgQWRkVGFza1ZpZXcgZnJvbSAnLi9hZGRUYXNrVmlldyc7XG5cbmNsYXNzIEFkZFByb2plY3RWaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgX2J0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLXN1Ym1pdC5zdWJtaXQtLW5ldy1wcm9qZWN0Jyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHVwbG9hZERhdGEoaGFuZGxlciwgZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LXByb2plY3QtLXByb2plY3QtdGl0bGUnXG4gICAgKS52YWx1ZTtcblxuICAgIGlmICh0aGlzLl92YWxpZGF0ZVRhc2socHJvamVjdFRpdGxlKSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IHByb2plY3RUaXRsZSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2NsZWFyRm9ybSgpO1xuICAgICAgdGhpcy50b2dnbGVXaW5kb3coKTtcbiAgICAgIGhhbmRsZXIoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlckZvcm1FcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXJGb3JtRXJyb3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gIH1cblxuICBfdmFsaWRhdGVUYXNrKHRpdGxlKSB7XG4gICAgaWYgKCF0aXRsZSB8fCB0aXRsZS5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYWRkSGFuZGxlckFkZFByb2plY3QoaGFuZGxlcikge1xuICAgIHRoaXMuX2J0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMudXBsb2FkRGF0YS5iaW5kKHRoaXMsIGhhbmRsZXIpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWRkUHJvamVjdFZpZXcoKTtcbiIsImltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuXG5jbGFzcyBBZGRUYXNrVmlldyBleHRlbmRzIE1vZGFsVmlldyB7XG4gIF9wcmlvcml0eUxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay0tdGFzay1wcmlvcml0eS13cmFwcGVyJyk7XG4gIF9idG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1zdWJtaXQuc3VibWl0LS1uZXctdGFzaycpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fYWRkSGFuZGxlclByaW9yaXR5KCk7XG4gICAgdGhpcy5fYWRkSGFuZGxlclNob3dNb2RhbCgpO1xuICAgIHRoaXMuX2FkZEhhbmRsZXJDbG9zZU1vZGFsKCk7XG4gIH1cblxuICB1cGxvYWREYXRhKGhhbmRsZXIsIGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLm5ldy10YXNrLS10YXNrLXRpdGxlJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrRGV0YWlscyA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LXRhc2stLXRhc2stZGV0YWlscydcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdGFza0RhdGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLm5ldy10YXNrLS10YXNrLWRhdGUnXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcucHJpb3JpdHktbGFiZWwtLWFjdGl2ZSdcbiAgICApPy50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25BcnIgPSBbdGFza1RpdGxlLCB0YXNrRGV0YWlscywgdGFza0RhdGUsIHRhc2tQcmlvcml0eV07XG5cbiAgICBpZiAodGhpcy5fdmFsaWRhdGVUYXNrKHZhbGlkYXRpb25BcnIpKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogdGFza1RpdGxlLFxuICAgICAgICBkZXRhaWxzOiB0YXNrRGV0YWlscyxcbiAgICAgICAgZGF0ZTogdGFza0RhdGUsXG4gICAgICAgIHByaW9yaXR5OiB0YXNrUHJpb3JpdHksXG4gICAgICAgIGlkOiBgJHt0YXNrRGF0ZX0tLSR7dGFza1RpdGxlfWAsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9jbGVhckZvcm0oKTtcbiAgICAgIHRoaXMudG9nZ2xlV2luZG93KCk7XG4gICAgICBoYW5kbGVyKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJGb3JtRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBhZGRIYW5kbGVyQWRkVGFzayhoYW5kbGVyKSB7XG4gICAgdGhpcy5fYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy51cGxvYWREYXRhLmJpbmQodGhpcywgaGFuZGxlcilcbiAgICApO1xuICB9XG5cbiAgX2FkZEhhbmRsZXJQcmlvcml0eSgpIHtcbiAgICB0aGlzLl9wcmlvcml0eUxhYmVscy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuX3RvZ2dsZVByaW9yaXR5LmJpbmQodGhpcylcbiAgICApO1xuICB9XG5cbiAgX3RvZ2dsZVByaW9yaXR5KGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmV3LXRhc2stLXRhc2stcHJpb3JpdHktbGFiZWwnKSkgcmV0dXJuO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXRhc2stLXRhc2stcHJpb3JpdHktbGFiZWwnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJykpO1xuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwtLWFjdGl2ZScpO1xuICB9XG5cbiAgX3ZhbGlkYXRlVGFzayhhcnIpIHtcbiAgICBjb25zdCBbdGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5XSA9IGFycjtcbiAgICBpZiAoIXRpdGxlIHx8ICFkYXRlIHx8ICFwcmlvcml0eSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF9yZW5kZXJGb3JtRXJyb3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFkZFRhc2tWaWV3KCk7XG4iLCJpbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcblxuY2xhc3MgRGV0YWlsc1ZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tdGFzay1kZXRhaWxzJyk7XG4gIF93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRhc2stZGV0YWlscycpO1xuICBfb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gIF90YXNrRGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tdGFzay1kZXRhaWxzJyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHNob3dEZXRhaWxzKGhhbmRsZXIsIGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1kZXRhaWxzJykpIHJldHVybjtcblxuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5kYXRhc2V0LmlkO1xuXG4gICAgdGhpcy50b2dnbGVXaW5kb3coKTtcblxuICAgIGhhbmRsZXIoaWQpO1xuXG4gICAgdGhpcy5fYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi0tY2xvc2UtZGV0YWlscy1tb2RhbCcpO1xuICAgIHRoaXMuX2FkZEhhbmRsZXJDbG9zZU1vZGFsKCk7XG4gIH1cblxuICBkZWxldGVUYXNrKGhhbmRsZXIsIGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZGF0YXNldC5pZDtcblxuICAgIGhhbmRsZXIoaWQpO1xuICB9XG5cbiAgZGVsZXRlVGFza09uTW9kYWwoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLS10YXNrLWRldGFpbHMnKS5kYXRhc2V0LmlkO1xuXG4gICAgaGFuZGxlcihpZCk7XG4gIH1cblxuICBhZGRIYW5kbGVyVGFza0RldGFpbHMoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKVxuICAgICAgLmZvckVhY2goKGVsKSA9PlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd0RldGFpbHMuYmluZCh0aGlzLCBoYW5kbGVyKSlcbiAgICAgICk7XG4gIH1cblxuICBhZGRIYW5kbGVyRGVsZXRlVGFzayhoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubWF0ZXJpYWwtaWNvbnMuaWNvbi0tZGVsZXRlLnRhc2stZGlzcGxheS0taWNvbnMnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlVGFzay5iaW5kKHRoaXMsIGhhbmRsZXIpKVxuICAgICAgKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJEZWxldGVUYXNrT25Nb2RhbChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzLS1pY29uLXdyYXBwZXIudGFzay1kZWxldGUnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVUYXNrT25Nb2RhbC5iaW5kKHRoaXMsIGhhbmRsZXIpKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZU1hcmt1cCgpIHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tY2xvc2UtZGV0YWlscy1tb2RhbFwiPiBjbG9zZSA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stdGl0bGVcIj4ke3RoaXMuX2RhdGEudGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stZGV0YWlsc1wiPlxuICAgICAgICAgICR7dGhpcy5fZGF0YS5kZXRhaWxzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1kYXRlLXdyYXBwZXJcIj5cbiAgICAgICAgICBEdWUgZGF0ZTpcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1kYXRlXCI+JHt0aGlzLl9kYXRhLmRhdGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1wcmlvcml0eS13cmFwcGVyXCI+XG4gICAgICAgICAgUHJpb3JpdHk6XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLXByaW9yaXR5IHRhc2stZGV0YWlscy0tdGFzay1wcmlvcml0eS0ke3RoaXMuX2RhdGEucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1cIlxuICAgICAgICAgICAgPiR7dGhpcy5fZGF0YS5wcmlvcml0eX08L3NwYW5cbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLWVkaXRvci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0taWNvbi13cmFwcGVyIHRhc2stZWRpdFwiPlxuICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWVkaXQgdGFzay1kZXRhaWxzLS1pY29uc1wiPlxuICAgICAgICAgICAgICBtb2RlX2VkaXRcbiAgICAgICAgICAgIDwvc3Bhbj4gLS0+XG4gICAgICAgICAgICBFZGl0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0taWNvbi13cmFwcGVyIHRhc2stZGVsZXRlXCI+XG4gICAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tZGVsZXRlIHRhc2stZGV0YWlscy0taWNvbnNcIj5cbiAgICAgICAgICAgICAgZGVsZXRlXG4gICAgICAgICAgICA8L3NwYW4+IC0tPlxuICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQgPSB0aGlzLl9kYXRhLmlkO1xuXG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRGV0YWlsc1ZpZXcoKTtcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcbmltcG9ydCBhZGRUYXNrVmlldyBmcm9tICcuL2FkZFRhc2tWaWV3JztcblxuY2xhc3MgRWRpdFRhc2tWaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRhc2stZGV0YWlscycpO1xuICBfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcblxuICBfYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi0tY2xvc2UtZWRpdG9yLW1vZGFsJyk7XG4gIF9idG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0b3ItLWljb24td3JhcHBlci50YXNrLXNhdmUnKTtcbiAgX2J0bkRlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXRvci0taWNvbi13cmFwcGVyLnRhc2stZGVsZXRlJyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHNob3dFZGl0b3JNb2RhbChoYW5kbGVyLCBlKSB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmRhdGFzZXQuaWQ7XG5cbiAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuXG4gICAgaGFuZGxlcihpZCk7XG5cbiAgICB0aGlzLl9idG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLS1jbG9zZS1lZGl0b3ItbW9kYWwnKTtcbiAgICB0aGlzLl9hZGRIYW5kbGVyQ2xvc2VNb2RhbCgpO1xuICAgIHRoaXMuX2FkZEhhbmRsZXJQcmlvcml0eSgpO1xuICB9XG5cbiAgc2F2ZUVkaXQoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcudGFzay1lZGl0b3ItLXRhc2stdGl0bGUnXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy50YXNrLWVkaXRvci0tdGFzay1kZXRhaWxzJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrRGF0ZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcudGFzay1lZGl0b3ItLXRhc2stZGF0ZSdcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5wcmlvcml0eS1sYWJlbC0tYWN0aXZlJ1xuICAgICk/LnRleHRDb250ZW50O1xuXG4gICAgY29uc3QgdmFsaWRhdGlvbkFyciA9IFt0YXNrVGl0bGUsIHRhc2tEZXRhaWxzLCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5XTtcblxuICAgIGlmICh0aGlzLl92YWxpZGF0ZVRhc2sodmFsaWRhdGlvbkFycikpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiB0YXNrVGl0bGUsXG4gICAgICAgIGRldGFpbHM6IHRhc2tEZXRhaWxzLFxuICAgICAgICBkYXRlOiB0YXNrRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHRhc2tQcmlvcml0eSxcbiAgICAgICAgaWQ6IGAke3Rhc2tEYXRlfS0tJHt0YXNrVGl0bGV9YCxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2NsZWFyRm9ybSgpO1xuICAgICAgdGhpcy50b2dnbGVXaW5kb3coKTtcbiAgICAgIGhhbmRsZXIodGhpcy5fcGFyZW50RWxlbWVudC5kYXRhc2V0LmlkLCBkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyRm9ybUVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkSGFuZGxlclNob3dFZGl0b3IoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm1hdGVyaWFsLWljb25zLmljb24tLWVkaXQudGFzay1kaXNwbGF5LS1pY29ucycpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93RWRpdG9yTW9kYWwuYmluZCh0aGlzLCBoYW5kbGVyKSlcbiAgICAgICk7XG4gIH1cblxuICBhZGRIYW5kbGVyU2F2ZUVkaXQoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdG9yLS1pY29uLXdyYXBwZXIudGFzay1zYXZlJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2F2ZUVkaXQuYmluZCh0aGlzLCBoYW5kbGVyKSk7XG4gIH1cblxuICBfYWRkSGFuZGxlclByaW9yaXR5KCkge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5LXdyYXBwZXInKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fdG9nZ2xlUHJpb3JpdHkuYmluZCh0aGlzKSk7XG4gIH1cblxuICBfZ2VuZXJhdGVNYXJrdXAoKSB7XG4gICAgLy8gPGRpdiBjbGFzcz1cIm1vZGFsLS10YXNrLWRldGFpbHNtb2RhbC0tdGFzay1lZGl0b3JcIj5cbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tY2xvc2UtZWRpdG9yLW1vZGFsXCI+IGNsb3NlIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tZm9ybS1lbGVtZW50IHRhc2stZWRpdG9yLS10YXNrLXRpdGxlXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aXRsZSBoZXJlXCJcbiAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5fZGF0YS50aXRsZX1cIlxuICAgICAgICAgIG1pbmxlbmd0aD1cIjFcIlxuICAgICAgICAgIG1heGxlbmd0aD1cIjYwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tZm9ybS1lbGVtZW50IHRhc2stZWRpdG9yLS10YXNrLWRldGFpbHNcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGRldGFpbHMgaGVyZVwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiMjQwXCJcbiAgICAgICAgPiR7dGhpcy5fZGF0YS5kZXRhaWxzID8gdGhpcy5fZGF0YS5kZXRhaWxzIDogJyd9PC90ZXh0YXJlYT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stZGF0ZS13cmFwcGVyXCI+XG4gICAgICAgICAgRHVlIGRhdGU6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS1mb3JtLWVsZW1lbnQgdGFzay1lZGl0b3ItLXRhc2stZGF0ZVwiXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5fZGF0YS5kYXRlfVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5LXdyYXBwZXJcIj5cbiAgICAgICAgICA8cCBmb3I9XCJ0YXNrLWVkaXRvci1wcmlvcml0eVwiPlByaW9yaXR5OjwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5IHByaW9yaXR5LWxvd1wiXG4gICAgICAgICAgICBuYW1lPVwidGFzay1lZGl0b3ItcHJpb3JpdHlcIlxuICAgICAgICAgICAgdmFsdWU9XCJsb3dcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBmb3I9XCJ0YXNrLWVkaXRvci1wcmlvcml0eVwiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5LWxhYmVsIHByaW9yaXR5LWxhYmVsLWxvdyAke1xuICAgICAgICAgICAgICB0aGlzLl9kYXRhLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09ICdsb3cnXG4gICAgICAgICAgICAgICAgPyAncHJpb3JpdHktbGFiZWwtLWFjdGl2ZSdcbiAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID5Mb3c8L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHkgcHJpb3JpdHktbWVkaXVtXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0YXNrLWVkaXRvci1wcmlvcml0eVwiXG4gICAgICAgICAgICB2YWx1ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGZvcj1cInRhc2stZWRpdG9yLXByaW9yaXR5XCJcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHktbGFiZWwgcHJpb3JpdHktbGFiZWwtbWVkaXVtICR7XG4gICAgICAgICAgICAgIHRoaXMuX2RhdGEucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gJ21lZGl1bSdcbiAgICAgICAgICAgICAgICA/ICdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJ1xuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPk1lZGl1bTwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eSBwcmlvcml0eS1oaWdoXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0YXNrLWVkaXRvci1wcmlvcml0eVwiXG4gICAgICAgICAgICB2YWx1ZT1cImhpZ2hcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBmb3I9XCJ0YXNrLWVkaXRvci1wcmlvcml0eVwiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5LWxhYmVsIHByaW9yaXR5LWxhYmVsLWhpZ2ggJHtcbiAgICAgICAgICAgICAgdGhpcy5fZGF0YS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSAnaGlnaCdcbiAgICAgICAgICAgICAgICA/ICdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJ1xuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPkhpZ2g8L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLWVkaXRvci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZWRpdG9yLS1pY29uLXdyYXBwZXIgdGFzay1zYXZlXCI+U2F2ZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXRvci0taWNvbi13cmFwcGVyIHRhc2stZGVsZXRlXCI+RGVsZXRlPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLS10YXNrLWVkaXRvcicpO1xuXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5kYXRhc2V0LmlkID0gdGhpcy5fZGF0YS5pZDtcblxuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBfdG9nZ2xlUHJpb3JpdHkoZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eS1sYWJlbCcpKVxuICAgICAgcmV0dXJuO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHktbGFiZWwnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJykpO1xuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwtLWFjdGl2ZScpO1xuICB9XG5cbiAgX3ZhbGlkYXRlVGFzayhhcnIpIHtcbiAgICBjb25zdCBbdGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5XSA9IGFycjtcbiAgICBpZiAoIXRpdGxlIHx8ICFkYXRlIHx8ICFwcmlvcml0eSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF9jbGVhckZvcm0oKSB7XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1lZGl0b3ItLWZvcm0tZWxlbWVudCcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFZGl0VGFza1ZpZXcoKTtcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsVmlldyBleHRlbmRzIFZpZXcge1xuICBfZXJyb3JNZXNzYWdlID0gJ0Zvcm0gaW5wdXQgaW52YWxpZCc7XG5cbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stLWNvbnRlbnQnKTtcbiAgX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tYWRkLXRhc2snKTtcbiAgX3NpZGViYXJMYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci0tbGFiZWwnKTtcbiAgX292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuXG4gIF9idG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi5hZGQtdGFzaycpO1xuICBfYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcubWF0ZXJpYWwtaWNvbnMuaWNvbi0tY2xvc2UtYWRkLW5ldy1tb2RhbCdcbiAgKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2FkZEhhbmRsZXJNb2RhbFNpZGViYXIoKTtcbiAgfVxuXG4gIHRvZ2dsZVdpbmRvdygpIHtcbiAgICB0aGlzLl9vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIHRoaXMuX3dpbmRvdy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIHRvZ2dsZUZvcm1EaXNwbGF5KGUpIHtcbiAgICAvLyBIaWRlcyBhbGwgZm9ybXNcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQtZm9ybScpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcblxuICAgIC8vIEVzdGFibGlzaGVzIHdoaWNoIGZvcm0gdG8gc2hvd1xuICAgIGNvbnN0IGZvcm1UeXBlID0gQXJyYXkuZnJvbShlLnRhcmdldC5jbGFzc0xpc3QpWzFdLnNwbGl0KCduZXctJylbMV07XG5cbiAgICB0aGlzLl9jbGVhckZvcm0oKTtcblxuICAgIC8vIFNob3cgZm9ybSB0byBkaXNwbGF5XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5jb250ZW50LWZvcm0tLW5ldy0ke2Zvcm1UeXBlfWApXG4gICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH1cblxuICBfYWRkSGFuZGxlclNob3dNb2RhbCgpIHtcbiAgICAvLyBTaG93cy9vcGVucyB0aGUgbW9kYWxcbiAgICB0aGlzLl9idG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVXaW5kb3cuYmluZCh0aGlzKSk7XG4gIH1cblxuICBfYWRkSGFuZGxlckNsb3NlTW9kYWwoKSB7XG4gICAgLy8gQ2xvc2VzIHRoZSBtb2RhbFxuICAgIHRoaXMuX2J0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVXaW5kb3cuYmluZCh0aGlzKSk7XG4gICAgLy8gdGhpcy5fb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlV2luZG93LmJpbmQodGhpcykpO1xuICB9XG5cbiAgX2FkZEhhbmRsZXJNb2RhbFNpZGViYXIoKSB7XG4gICAgLy8gQ2hhbmdlcyB0aGUgZm9ybSBkaXNwbGF5XG4gICAgdGhpcy5fc2lkZWJhckxhYmVscy5mb3JFYWNoKChlbCkgPT5cbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVGb3JtRGlzcGxheS5iaW5kKHRoaXMpKVxuICAgICk7XG4gIH1cblxuICBfY2xlYXJGb3JtKCkge1xuICAgIC8vIENsZWFyIHRhc2sgZm9ybVxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXRhc2stLWZvcm0tZWxlbWVudCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IChlbC52YWx1ZSA9ICcnKSk7XG5cbiAgICAvLyBDbGVhciBwcm9qZWN0IGZvcm1cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5ldy1wcm9qZWN0LS1mb3JtLWVsZW1lbnQnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiAoZWwudmFsdWUgPSAnJykpO1xuXG4gICAgLy8gQ2xlYXIgbm90ZSBmb3JtXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctbm90ZS0tZm9ybS1lbGVtZW50JylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gKGVsLnZhbHVlID0gJycpKTtcblxuICAgIC8vIENsZWFyIHByaW9yaXR5IGNob2ljZVxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXRhc2stLXRhc2stcHJpb3JpdHktbGFiZWwnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJykpO1xuXG4gICAgLy8gQ2xlYXIgdGFzayBkYXRlXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stLXRhc2stZGF0ZScpLnZhbHVlID0gJyc7XG4gIH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNsYXNzIFNpZGViYXJWaWV3IGV4dGVuZHMgVmlldyB7XG4gIF93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJhcicpO1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtc3ViZGl2LnByb2plY3QtLWhlYWRlcicpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBfZ2VuZXJhdGVNYXJrdXAoKSB7XG4gICAgdGhpcy5fY2xlYXIoKTtcbiAgICBjb25zdCBtYXJrdXAgPSB0aGlzLl9kYXRhLm1hcCh0aGlzLl9nZW5lcmF0ZVByb2plY3RNYXJrdXApLmpvaW4oJycpO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBfZ2VuZXJhdGVQcm9qZWN0TWFya3VwKHByb2plY3QpIHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgPHAgY2xhc3M9XCJuYXYtc3ViZGl2LS1jb250ZW50IHByb2plY3QtLXRpdGxlXCI+JHtwcm9qZWN0LnRpdGxlfTwvcD5gO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNpZGViYXJWaWV3KCk7XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IGRldGFpbHNWaWV3IGZyb20gJy4vZGV0YWlsc1ZpZXcnO1xuXG5jbGFzcyBUYXNrVmlldyBleHRlbmRzIFZpZXcge1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpc3BsYXknKTtcbiAgX3Rhc2tEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgX2dlbmVyYXRlTWFya3VwKCkge1xuICAgIGNvbnN0IG1hcmt1cCA9IHRoaXMuX2RhdGEubWFwKHRoaXMuX2dlbmVyYXRlVGFza01hcmt1cCkuam9pbignJyk7XG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxuXG4gIF9nZW5lcmF0ZVRhc2tNYXJrdXAodGFzaykge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrIHByaW9yaXR5LSR7dGFzay5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgdGFzay5pZFxuICAgIH1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jaGVja2JveFwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHNcIj5EZXRhaWxzPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGF0ZVwiPiR7dGFzay5kYXRlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktLWljb24td3JhcHBlciB0YXNrLWVkaXRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tZWRpdCB0YXNrLWRpc3BsYXktLWljb25zXCI+IG1vZGVfZWRpdCA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGlzcGxheS0taWNvbi13cmFwcGVyIHRhc2stZGVsZXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWRlbGV0ZSB0YXNrLWRpc3BsYXktLWljb25zXCI+IGRlbGV0ZSA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRhc2tWaWV3KCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICBfZGF0YTtcblxuICByZW5kZXIoZGF0YSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIGNvbnN0IG1hcmt1cCA9IHRoaXMuX2dlbmVyYXRlTWFya3VwKCk7XG5cbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcbiAgfVxuXG4gIHJlbmRlckVycm9yKE1lc3NhZ2UgPSB0aGlzLl9lcnJvck1lc3NhZ2UpIHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgPGRpdiBjbGFzcz1cImVycm9yXCI+XG4gICAgPHA+JHttZXNzYWdlfTwvcD5cbiAgICA8L2Rpdj5gO1xuXG4gICAgdGhpcy5fY2xlYXIoKTtcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG1hcmt1cCk7XG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIG1vZGVsIGZyb20gJy4vbW9kZWwnO1xuXG5pbXBvcnQgYWRkVGFza1ZpZXcgZnJvbSAnLi92aWV3cy9hZGRUYXNrVmlldyc7XG5pbXBvcnQgYWRkUHJvamVjdFZpZXcgZnJvbSAnLi92aWV3cy9hZGRQcm9qZWN0Vmlldyc7XG5pbXBvcnQgYWRkTm90ZVZpZXcgZnJvbSAnLi92aWV3cy9hZGROb3RlVmlldyc7XG5cbmltcG9ydCBzaWRlYmFyVmlldyBmcm9tICcuL3ZpZXdzL3NpZGViYXJWaWV3JztcbmltcG9ydCB0YXNrVmlldyBmcm9tICcuL3ZpZXdzL3Rhc2tWaWV3JztcbmltcG9ydCBkZXRhaWxzVmlldyBmcm9tICcuL3ZpZXdzL2RldGFpbHNWaWV3JztcbmltcG9ydCBlZGl0VGFza1ZpZXcgZnJvbSAnLi92aWV3cy9lZGl0VGFza1ZpZXcnO1xuXG4vLyBJbmRleCBqcyBmb3IgdGhlIGFwcGxpY2F0aW9uIGxvZ2ljIChjb250cm9sbGVyKVxuXG5jb25zdCBjb250cm9sQWRkVGFzayA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIG1vZGVsLmFkZFRhc2soZGF0YSk7XG5cbiAgdGFza1ZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLnRhc2tzKTtcblxuICBhZGRIYW5kbGVyc1RvVGFzaygpO1xufTtcblxuY29uc3QgY29udHJvbEFkZFByb2plY3QgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBtb2RlbC5hZGRQcm9qZWN0KGRhdGEpO1xuXG4gIHNpZGViYXJWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS5wcm9qZWN0cyk7XG59O1xuXG5jb25zdCBjb250cm9sQWRkTm90ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIG1vZGVsLmFkZE5vdGUoZGF0YSk7XG59O1xuXG5jb25zdCBjb250cm9sU2hvd1Rhc2tzID0gZnVuY3Rpb24gKCkge1xuICB0YXNrVmlldy5yZW5kZXIobW9kZWwuc3RhdGUudGFza3MpO1xuICBzaWRlYmFyVmlldy5yZW5kZXIobW9kZWwuc3RhdGUucHJvamVjdHMpO1xufTtcblxuY29uc3QgY29udHJvbERlbGV0ZVRhc2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgbW9kZWwuZGVsZXRlVGFzayhpZCk7XG5cbiAgdGFza1ZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLnRhc2tzKTtcblxuICBhZGRIYW5kbGVyc1RvVGFzaygpO1xufTtcblxuY29uc3QgY29udHJvbERlbGV0ZVRhc2tPbk1vZGFsID0gZnVuY3Rpb24gKGlkKSB7XG4gIG1vZGVsLmRlbGV0ZVRhc2soaWQpO1xuXG4gIGRldGFpbHNWaWV3LnRvZ2dsZVdpbmRvdygpO1xuXG4gIHRhc2tWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS50YXNrcyk7XG5cbiAgYWRkSGFuZGxlcnNUb1Rhc2soKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xTYXZlRWRpdFRhc2sgPSBmdW5jdGlvbiAoaWQsIHJlcGxhY2VtZW50KSB7XG4gIG1vZGVsLnVwZGF0ZVRhc2soaWQsIHJlcGxhY2VtZW50KTtcblxuICBjb250cm9sU2hvd1Rhc2tzKCk7XG4gIGFkZEhhbmRsZXJzVG9UYXNrKCk7XG59O1xuXG5jb25zdCBjb250cm9sRWRpdFRhc2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3QgdGFza1RvRWRpdCA9IG1vZGVsLnN0YXRlLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcblxuICBlZGl0VGFza1ZpZXcucmVuZGVyKHRhc2tUb0VkaXQpO1xuXG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyU2F2ZUVkaXQoY29udHJvbFNhdmVFZGl0VGFzayk7XG59O1xuXG5jb25zdCBjb250cm9sU2hvd0RldGFpbHMgPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3QgdGFza1RvU2hvdyA9IG1vZGVsLnN0YXRlLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcblxuICBkZXRhaWxzVmlldy5yZW5kZXIodGFza1RvU2hvdyk7XG4gIGRldGFpbHNWaWV3LmFkZEhhbmRsZXJEZWxldGVUYXNrT25Nb2RhbChjb250cm9sRGVsZXRlVGFza09uTW9kYWwpO1xufTtcblxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29udHJvbFNob3dUYXNrcygpO1xuICBhZGRUYXNrVmlldy5hZGRIYW5kbGVyQWRkVGFzayhjb250cm9sQWRkVGFzayk7XG4gIGFkZFByb2plY3RWaWV3LmFkZEhhbmRsZXJBZGRQcm9qZWN0KGNvbnRyb2xBZGRQcm9qZWN0KTtcbiAgYWRkTm90ZVZpZXcuYWRkSGFuZGxlckFkZE5vdGUoY29udHJvbEFkZE5vdGUpO1xuICBkZXRhaWxzVmlldy5hZGRIYW5kbGVyVGFza0RldGFpbHMoY29udHJvbFNob3dEZXRhaWxzKTtcbiAgZGV0YWlsc1ZpZXcuYWRkSGFuZGxlckRlbGV0ZVRhc2soY29udHJvbERlbGV0ZVRhc2spO1xuICBlZGl0VGFza1ZpZXcuYWRkSGFuZGxlclNob3dFZGl0b3IoY29udHJvbEVkaXRUYXNrKTtcbn07XG5cbmluaXQoKTtcblxuLy8gIEhFTFBFUiBGVU5DVElPTlNcblxuZnVuY3Rpb24gYWRkSGFuZGxlcnNUb1Rhc2soKSB7XG4gIGRldGFpbHNWaWV3LmFkZEhhbmRsZXJUYXNrRGV0YWlscyhjb250cm9sU2hvd0RldGFpbHMpO1xuICBkZXRhaWxzVmlldy5hZGRIYW5kbGVyRGVsZXRlVGFzayhjb250cm9sRGVsZXRlVGFzayk7XG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyU2hvd0VkaXRvcihjb250cm9sRWRpdFRhc2spO1xufVxuXG4vKlxuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0IHNldE5hbWUodmFsdWUpIHtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGU7XG4gIH1cblxuICBzZXQgc2V0RGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgc2V0IHNldFByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IHNldERlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG59XG5cbiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=