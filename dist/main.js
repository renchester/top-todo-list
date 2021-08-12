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
/* harmony export */   "updateTask": () => (/* binding */ updateTask),
/* harmony export */   "toggleTaskComplete": () => (/* binding */ toggleTaskComplete)
/* harmony export */ });


const state = {
  tasks: [],
  notes: [],
  projects: [
    {
      title: 'Home',
    },
  ],
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

const toggleTaskComplete = function (id) {
  const index = state.tasks.findIndex((el) => el.id === id);

  state.tasks[index].status =
    state.tasks[index].status === 'completed' ? '' : 'completed';

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
  _projectSelection = document.querySelector('#new-task-project');

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

    const taskProject =
      this._parentElement.querySelector('#new-task-project').value;

    const validationArr = [taskTitle, taskDetails, taskDate, taskPriority];

    if (this._validateTask(validationArr)) {
      const data = {
        title: taskTitle,
        details: taskDetails,
        date: taskDate,
        priority: taskPriority,
        project: taskProject,
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

  renderProjectOptions(projectsArr) {
    const markup = this._generateProjOptionsMarkup(projectsArr);

    this._clearProjectOptions();

    this._projectSelection.insertAdjacentHTML('afterbegin', markup);
  }

  _generateProjOptionsMarkup(projectsArr) {
    const markupArr = [];

    projectsArr.slice(1).forEach((project) =>
      markupArr.push(`
      <option value="${project.title}">${project.title}</option>
    `)
    );

    return markupArr.join('');
  }

  _clearProjectOptions() {
    this._projectSelection.innerHTML = `
    <option value="Home">Home</option>
    `;
  }

  addHandlerRenderProjectsOnForm(handler) {
    this._btnOpen.addEventListener('click', function (e) {
      handler();
    });
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

  allowTaskEdit(handler, e) {
    const id = e.target.closest('.modal--task-details').dataset.id;

    this._clear();

    handler(id);
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

  addHandlerEditTask(handler) {
    document
      .querySelector('.task-details--icon-wrapper.task-edit')
      .addEventListener('click', this.allowTaskEdit.bind(this, handler));
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

        <div class="task-details--task-status-wrapper">
          Status:
          <span
            class="task-details--task-status"
            >${
              this._data.status === 'completed' ? 'Completed' : 'On-going'
            }</span
          >
        </div>

        <div class="task-details--task-project-wrapper">
          Project:
          <span class="task-details--task-project">${this._data.project}</span>
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
  _projectSelection = document.querySelector('#edit-task-project');

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
    this.addHandlerPriority();
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

    const taskStatus = this._parentElement.querySelector(
      '.task-editor--task-status:checked'
    ).value;

    const taskProject =
      this._parentElement.querySelector('#edit-task-project').value;

    const validationArr = [
      taskTitle,
      taskDetails,
      taskDate,
      taskPriority,
      taskStatus,
      taskProject,
    ];

    if (this._validateTask(validationArr)) {
      const data = {
        title: taskTitle,
        details: taskDetails,
        date: taskDate,
        priority: taskPriority,
        status: taskStatus,
        project: taskProject,
        id: `${taskDate}--${taskTitle}`,
      };

      this._clearForm();
      this.toggleWindow();
      handler(this._parentElement.dataset.id, data);
    } else {
      this._renderFormError();
    }
  }

  deleteTaskOnModal(handler, e) {
    const id = e.target.closest('.modal--task-details').dataset.id;

    handler(id);
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

  addHandlerDeleteTaskOnModal(handler) {
    document
      .querySelector('.task-editor--icon-wrapper.task-delete')
      .addEventListener('click', this.deleteTaskOnModal.bind(this, handler));
  }

  addHandlerPriority() {
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

        <div class="task-editor--task-status-wrapper">
          Status:
          <input
            type="radio"
            class="task-editor--form-element task-editor--task-status"
            name="task-editor-status"
            value="completed"
            ${this._data.status === 'completed' ? 'checked' : ''}
          />
          <label for="task-editor-status" class="task-editor--task-status-label"
            >Completed</label
          >
          <input
            type="radio"
            class="task-editor--form-element task-editor--task-status"
            name="task-editor-status"
            value=""
            ${this._data.status === 'completed' ? '' : 'checked'}
          />
          <label for="task-editor-status" class="task-editor--task-status-label"
            >On-going</label
          >
        </div>


        <div class="task-editor--task-project-wrapper">
          <label for="edit-task-project">Project:</label>
          <select name="edit-task-project" id="edit-task-project">
            <option value="${this._data.project}">${this._data.project}</option>
          </select>
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
    const [title, _, date, priority, status] = arr;
    if (!title || !date || !priority) {
      return false;
    } else return true;
  }

  _clearForm() {
    this._parentElement.querySelectorAll('.task-editor--form-element');
  }

  _renderFormError() {
    console.log('form error');
  }

  renderProjectOptions(projectsArr, taskToEdit) {
    const markup = this._generateProjOptionsMarkup(projectsArr);

    this._clearProjectOptions(taskToEdit);

    document
      .querySelector('#edit-task-project')
      .insertAdjacentHTML('afterbegin', markup);
  }

  _generateProjOptionsMarkup(projectsArr) {
    const markupArr = [];

    projectsArr.slice(1).forEach((project) =>
      markupArr.push(`
      <option value="${project.title}">${project.title}</option>
    `)
    );

    return markupArr.join('');
  }

  _clearProjectOptions(task) {
    document.querySelector('#edit-task-project').innerHTML = `
    <option value="${task.project}">${task.project}</option>
    `;
  }

  addHandlerRenderProjectsOnForm(handler, task) {
    handler(task);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EditTaskView());


/***/ }),

/***/ "./src/views/formView.js":
/*!*******************************!*\
  !*** ./src/views/formView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalView */ "./src/views/modalView.js");


class FormView extends _modalView__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor() {
    super();
    this.addHandlerModalSidebar();
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

  addHandlerModalSidebar() {
    // Changes the form display
    this._sidebarLabels.forEach((el) =>
      el.addEventListener('click', this.toggleFormDisplay.bind(this))
    );
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FormView());


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
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
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
    if (this._parentElement.querySelector('.new-task--task-date')) {
      this._parentElement.querySelector('.new-task--task-date').value = '';
    }
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

  addHandlerShowProject(handler) {
    this._window.addEventListener('click', function (e) {
      if (!e.target.classList.contains('project--title')) return;
      console.log('hi');
    });
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
          <div class="task-checkbox ${
            task.status === 'completed' ? 'task-checkbox--checked' : ''
          }"></div>
          <div class="task-title ${
            task.status === 'completed' ? 'task--completed' : ''
          }">${task.title}</div>
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

  toggleCompleted(handler, e) {
    if (!e.target.classList.contains('task-checkbox')) return;

    const taskToMark = e.target.closest('.task');
    const id = taskToMark.dataset.id;

    e.target.classList.toggle('task-checkbox--checked');

    taskToMark.querySelector('.task-title').classList.toggle('task--completed');

    handler(id);
  }

  addHandlerToggleCompleted(handler) {
    document
      .querySelectorAll('.task')
      .forEach((el) =>
        el.addEventListener('click', this.toggleCompleted.bind(this, handler))
      );
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
/* harmony import */ var _views_formView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/formView */ "./src/views/formView.js");
/* harmony import */ var _views_modalView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/modalView */ "./src/views/modalView.js");















// Index js for the application logic (controller)

const controlAddTask = function (data) {
  _model__WEBPACK_IMPORTED_MODULE_0__.addTask(data);

  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.tasks);

  addHandlersToTask();
};

const controlAddProject = function (data) {
  _model__WEBPACK_IMPORTED_MODULE_0__.addProject(data);

  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects.slice(1));
};

const controlAddNote = function (data) {
  _model__WEBPACK_IMPORTED_MODULE_0__.addNote(data);
};

const controlShowProjectsOnForm = function () {
  _views_addTaskView__WEBPACK_IMPORTED_MODULE_1__.default.renderProjectOptions(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects);
};

const controlShowProjectsOnEditor = function (taskToEdit) {
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_7__.default.renderProjectOptions(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects, taskToEdit);
};

const controlShowTasks = function () {
  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.tasks);
  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects.slice(1));
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

  _views_editTaskView__WEBPACK_IMPORTED_MODULE_7__.default.addHandlerRenderProjectsOnForm(
    controlShowProjectsOnEditor,
    taskToEdit
  );
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_7__.default.addHandlerSaveEdit(controlSaveEditTask);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_7__.default.addHandlerDeleteTaskOnModal(controlDeleteTaskOnModal);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_7__.default.addHandlerPriority();
};

const controlShowDetails = function (id) {
  const taskToShow = _model__WEBPACK_IMPORTED_MODULE_0__.state.tasks.find((task) => task.id === id);

  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.render(taskToShow);

  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerDeleteTaskOnModal(controlDeleteTaskOnModal);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerEditTask(controlEditTask);
};

const controlToggleCompleted = function (id) {
  const taskToMark = _model__WEBPACK_IMPORTED_MODULE_0__.state.tasks.find((task) => task.id === id);

  _model__WEBPACK_IMPORTED_MODULE_0__.toggleTaskComplete(id);

  controlShowTasks();
  addHandlersToTask();
};

const init = function () {
  controlShowTasks();
  _views_addTaskView__WEBPACK_IMPORTED_MODULE_1__.default.addHandlerAddTask(controlAddTask);
  _views_addTaskView__WEBPACK_IMPORTED_MODULE_1__.default.addHandlerRenderProjectsOnForm(controlShowProjectsOnForm);
  _views_addProjectView__WEBPACK_IMPORTED_MODULE_2__.default.addHandlerAddProject(controlAddProject);
  _views_addNoteView__WEBPACK_IMPORTED_MODULE_3__.default.addHandlerAddNote(controlAddNote);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerTaskDetails(controlShowDetails);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerDeleteTask(controlDeleteTask);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_7__.default.addHandlerShowEditor(controlEditTask);
  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.addHandlerToggleCompleted(controlToggleCompleted);
  // sidebarView.addHandlerShowProject(controlShowProject);
};

init();

//  HELPER FUNCTIONS

function addHandlersToTask() {
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerTaskDetails(controlShowDetails);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerDeleteTask(controlDeleteTask);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_7__.default.addHandlerShowEditor(controlEditTask);
  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.addHandlerToggleCompleted(controlToggleCompleted);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUMvQixFQUFFLHNGQUEwQztBQUM1QyxFQUFFLCtFQUFtQztBQUNyQyxFQUFFLHlFQUE2QjtBQUMvQixFQUFFLDZFQUFpQztBQUNuQyxFQUFFLDRFQUFnQztBQUNsQyxFQUFFLDZFQUFpQztBQUNuQyxFQUFFLDhFQUFrQztBQUNwQztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsRUFBRSw2RUFBaUM7QUFDbkMsRUFBRSw0RUFBZ0M7QUFDbEMsRUFBRSw2RUFBaUM7QUFDbkMsRUFBRSw4RUFBa0M7QUFDcEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2FkZE5vdGVWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvYWRkUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9hZGRUYXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2RldGFpbHNWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvZWRpdFRhc2tWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvZm9ybVZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9tb2RhbFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9zaWRlYmFyVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3Rhc2tWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3Mvdmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcbiAgdGFza3M6IFtdLFxuICBub3RlczogW10sXG4gIHByb2plY3RzOiBbXG4gICAge1xuICAgICAgdGl0bGU6ICdIb21lJyxcbiAgICB9LFxuICBdLFxuICBjdXJyVGFzazoge30sXG4gIGN1cnJOb3RlOiB7fSxcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSBmdW5jdGlvbiAoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICBwcmlvcml0eTogZGF0YS5wcmlvcml0eSxcbiAgICAuLi4oZGF0YS5wcm9qZWN0ICYmIHsgcHJvamVjdDogZGF0YS5wcm9qZWN0IH0pLFxuICAgIC4uLihkYXRhLmRlc2NyaXB0aW9uICYmIHsgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfSksXG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5vdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgIC4uLihkYXRhLmRlc2NyaXB0aW9uICYmIHsgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfSksXG4gIH07XG59O1xuXG5jb25zdCBwZXJzaXN0VGFza3MgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHN0YXRlLnRhc2tzKSk7XG59O1xuXG5jb25zdCBwZXJzaXN0UHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHN0YXRlLnByb2plY3RzKSk7XG59O1xuXG5jb25zdCBwZXJzaXN0Tm90ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KHN0YXRlLm5vdGVzKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gIC8vIEFkZCB0YXNrIHRvIGFwcCBzdGF0ZVxuICBzdGF0ZS50YXNrcy51bnNoaWZ0KHRhc2spO1xuXG4gIC8vIFNldCB0byBsb2NhbCBzdG9yYWdlXG4gIHBlcnNpc3RUYXNrcygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAvLyBBZGQgcHJvamVjdCB0byBhcHAgc3RhdGVcbiAgc3RhdGUucHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuICAvLyBTZXQgdG8gbG9jYWwgc3RvcmFnZVxuICBwZXJzaXN0UHJvamVjdHMoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGROb3RlID0gZnVuY3Rpb24gKG5vdGUpIHtcbiAgLy8gQWRkIG5vdGUgdG8gYXBwIHN0YXRlXG4gIHN0YXRlLm5vdGVzLnB1c2gobm90ZSk7XG5cbiAgLy8gU2V0IHRvIGxvY2FsIHN0b3JhZ2VcbiAgcGVyc2lzdE5vdGVzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVGFzayA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLnRhc2tzLmZpbmRJbmRleCgoZWwpID0+IGVsLmlkID09PSBpZCk7XG4gIHN0YXRlLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgcGVyc2lzdFRhc2tzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVGFzayA9IGZ1bmN0aW9uIChpZCwgcmVwbGFjZW1lbnQpIHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS50YXNrcy5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gaWQpO1xuICBzdGF0ZS50YXNrcy5zcGxpY2UoaW5kZXgsIDEsIHJlcGxhY2VtZW50KTtcblxuICBwZXJzaXN0VGFza3MoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVUYXNrQ29tcGxldGUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS50YXNrcy5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gaWQpO1xuXG4gIHN0YXRlLnRhc2tzW2luZGV4XS5zdGF0dXMgPVxuICAgIHN0YXRlLnRhc2tzW2luZGV4XS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gJycgOiAnY29tcGxldGVkJztcblxuICBwZXJzaXN0VGFza3MoKTtcbn07XG5cbmNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGxvY2FsVGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKTtcbiAgY29uc3QgbG9jYWxQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xuICBjb25zdCBsb2NhbE5vdGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XG5cbiAgaWYgKGxvY2FsVGFza3MpIHtcbiAgICBzdGF0ZS50YXNrcyA9IEpTT04ucGFyc2UobG9jYWxUYXNrcyk7XG4gIH1cblxuICBpZiAobG9jYWxQcm9qZWN0cykge1xuICAgIHN0YXRlLnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFByb2plY3RzKTtcbiAgfVxuXG4gIGlmIChsb2NhbE5vdGVzKSB7XG4gICAgc3RhdGUubm90ZXMgPSBKU09OLnBhcnNlKGxvY2FsTm90ZXMpO1xuICB9XG59O1xuaW5pdCgpO1xuIiwiaW1wb3J0IE1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5pbXBvcnQgQWRkVGFza1ZpZXcgZnJvbSAnLi9hZGRUYXNrVmlldyc7XG5cbmNsYXNzIEFkZE5vdGVWaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgX2J0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLXN1Ym1pdC5zdWJtaXQtLW5ldy1ub3RlJyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHVwbG9hZERhdGEoaGFuZGxlciwgZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5vdGVUaXRsZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LW5vdGUtLW5vdGUtdGl0bGUnXG4gICAgKS52YWx1ZTtcbiAgICBjb25zdCBub3RlRGV0YWlscyA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LW5vdGUtLW5vdGUtZGV0YWlscydcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvbkFyciA9IFtub3RlVGl0bGUsIG5vdGVEZXRhaWxzXTtcblxuICAgIGlmICh0aGlzLl92YWxpZGF0ZVRhc2sodmFsaWRhdGlvbkFycikpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiBub3RlVGl0bGUsXG4gICAgICAgIGRldGFpbHM6IG5vdGVEZXRhaWxzLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5fY2xlYXJGb3JtKCk7XG4gICAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuICAgICAgaGFuZGxlcihkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyRm9ybUVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlckZvcm1FcnJvcigpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgfVxuXG4gIF92YWxpZGF0ZVRhc2soYXJyKSB7XG4gICAgY29uc3QgW3RpdGxlLCBkZXRhaWxzXSA9IGFycjtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYWRkSGFuZGxlckFkZE5vdGUoaGFuZGxlcikge1xuICAgIHRoaXMuX2J0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMudXBsb2FkRGF0YS5iaW5kKHRoaXMsIGhhbmRsZXIpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWRkTm90ZVZpZXcoKTtcbiIsImltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuXG5jbGFzcyBBZGRQcm9qZWN0VmlldyBleHRlbmRzIE1vZGFsVmlldyB7XG4gIF9idG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1zdWJtaXQuc3VibWl0LS1uZXctcHJvamVjdCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICB1cGxvYWREYXRhKGhhbmRsZXIsIGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLm5ldy1wcm9qZWN0LS1wcm9qZWN0LXRpdGxlJ1xuICAgICkudmFsdWU7XG5cbiAgICBpZiAodGhpcy5fdmFsaWRhdGVUYXNrKHByb2plY3RUaXRsZSkpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiBwcm9qZWN0VGl0bGUsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9jbGVhckZvcm0oKTtcbiAgICAgIHRoaXMudG9nZ2xlV2luZG93KCk7XG4gICAgICBoYW5kbGVyKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJGb3JtRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyRm9ybUVycm9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICB9XG5cbiAgX3ZhbGlkYXRlVGFzayh0aXRsZSkge1xuICAgIGlmICghdGl0bGUgfHwgdGl0bGUubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJBZGRQcm9qZWN0KGhhbmRsZXIpIHtcbiAgICB0aGlzLl9idG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLnVwbG9hZERhdGEuYmluZCh0aGlzLCBoYW5kbGVyKVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFkZFByb2plY3RWaWV3KCk7XG4iLCJpbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcblxuY2xhc3MgQWRkVGFza1ZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBfcHJpb3JpdHlMYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stLXRhc2stcHJpb3JpdHktd3JhcHBlcicpO1xuICBfYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tc3VibWl0LnN1Ym1pdC0tbmV3LXRhc2snKTtcbiAgX3Byb2plY3RTZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2stcHJvamVjdCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fYWRkSGFuZGxlclByaW9yaXR5KCk7XG4gICAgdGhpcy5fYWRkSGFuZGxlclNob3dNb2RhbCgpO1xuICAgIHRoaXMuX2FkZEhhbmRsZXJDbG9zZU1vZGFsKCk7XG4gIH1cblxuICB1cGxvYWREYXRhKGhhbmRsZXIsIGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLm5ldy10YXNrLS10YXNrLXRpdGxlJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrRGV0YWlscyA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LXRhc2stLXRhc2stZGV0YWlscydcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdGFza0RhdGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLm5ldy10YXNrLS10YXNrLWRhdGUnXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcucHJpb3JpdHktbGFiZWwtLWFjdGl2ZSdcbiAgICApPy50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IHRhc2tQcm9qZWN0ID1cbiAgICAgIHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLXByb2plY3QnKS52YWx1ZTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25BcnIgPSBbdGFza1RpdGxlLCB0YXNrRGV0YWlscywgdGFza0RhdGUsIHRhc2tQcmlvcml0eV07XG5cbiAgICBpZiAodGhpcy5fdmFsaWRhdGVUYXNrKHZhbGlkYXRpb25BcnIpKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogdGFza1RpdGxlLFxuICAgICAgICBkZXRhaWxzOiB0YXNrRGV0YWlscyxcbiAgICAgICAgZGF0ZTogdGFza0RhdGUsXG4gICAgICAgIHByaW9yaXR5OiB0YXNrUHJpb3JpdHksXG4gICAgICAgIHByb2plY3Q6IHRhc2tQcm9qZWN0LFxuICAgICAgICBpZDogYCR7dGFza0RhdGV9LS0ke3Rhc2tUaXRsZX1gLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5fY2xlYXJGb3JtKCk7XG4gICAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuICAgICAgaGFuZGxlcihkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyRm9ybUVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkSGFuZGxlckFkZFRhc2soaGFuZGxlcikge1xuICAgIHRoaXMuX2J0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMudXBsb2FkRGF0YS5iaW5kKHRoaXMsIGhhbmRsZXIpXG4gICAgKTtcbiAgfVxuXG4gIF9hZGRIYW5kbGVyUHJpb3JpdHkoKSB7XG4gICAgdGhpcy5fcHJpb3JpdHlMYWJlbHMuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLl90b2dnbGVQcmlvcml0eS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIF90b2dnbGVQcmlvcml0eShlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy10YXNrLS10YXNrLXByaW9yaXR5LWxhYmVsJykpIHJldHVybjtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5ldy10YXNrLS10YXNrLXByaW9yaXR5LWxhYmVsJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktbGFiZWwtLWFjdGl2ZScpKTtcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnKTtcbiAgfVxuXG4gIF92YWxpZGF0ZVRhc2soYXJyKSB7XG4gICAgY29uc3QgW3RpdGxlLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eV0gPSBhcnI7XG4gICAgaWYgKCF0aXRsZSB8fCAhZGF0ZSB8fCAhcHJpb3JpdHkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfcmVuZGVyRm9ybUVycm9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICB9XG5cbiAgcmVuZGVyUHJvamVjdE9wdGlvbnMocHJvamVjdHNBcnIpIHtcbiAgICBjb25zdCBtYXJrdXAgPSB0aGlzLl9nZW5lcmF0ZVByb2pPcHRpb25zTWFya3VwKHByb2plY3RzQXJyKTtcblxuICAgIHRoaXMuX2NsZWFyUHJvamVjdE9wdGlvbnMoKTtcblxuICAgIHRoaXMuX3Byb2plY3RTZWxlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZVByb2pPcHRpb25zTWFya3VwKHByb2plY3RzQXJyKSB7XG4gICAgY29uc3QgbWFya3VwQXJyID0gW107XG5cbiAgICBwcm9qZWN0c0Fyci5zbGljZSgxKS5mb3JFYWNoKChwcm9qZWN0KSA9PlxuICAgICAgbWFya3VwQXJyLnB1c2goYFxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7cHJvamVjdC50aXRsZX1cIj4ke3Byb2plY3QudGl0bGV9PC9vcHRpb24+XG4gICAgYClcbiAgICApO1xuXG4gICAgcmV0dXJuIG1hcmt1cEFyci5qb2luKCcnKTtcbiAgfVxuXG4gIF9jbGVhclByb2plY3RPcHRpb25zKCkge1xuICAgIHRoaXMuX3Byb2plY3RTZWxlY3Rpb24uaW5uZXJIVE1MID0gYFxuICAgIDxvcHRpb24gdmFsdWU9XCJIb21lXCI+SG9tZTwvb3B0aW9uPlxuICAgIGA7XG4gIH1cblxuICBhZGRIYW5kbGVyUmVuZGVyUHJvamVjdHNPbkZvcm0oaGFuZGxlcikge1xuICAgIHRoaXMuX2J0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBZGRUYXNrVmlldygpO1xuIiwiaW1wb3J0IE1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5cbmNsYXNzIERldGFpbHNWaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRhc2stZGV0YWlscycpO1xuICBfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcbiAgX292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICBfdGFza0RldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRhc2stZGV0YWlscycpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzaG93RGV0YWlscyhoYW5kbGVyLCBlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZGV0YWlscycpKSByZXR1cm47XG5cbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZGF0YXNldC5pZDtcblxuICAgIHRoaXMudG9nZ2xlV2luZG93KCk7XG5cbiAgICBoYW5kbGVyKGlkKTtcblxuICAgIHRoaXMuX2J0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24tLWNsb3NlLWRldGFpbHMtbW9kYWwnKTtcbiAgICB0aGlzLl9hZGRIYW5kbGVyQ2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgYWxsb3dUYXNrRWRpdChoYW5kbGVyLCBlKSB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcubW9kYWwtLXRhc2stZGV0YWlscycpLmRhdGFzZXQuaWQ7XG5cbiAgICB0aGlzLl9jbGVhcigpO1xuXG4gICAgaGFuZGxlcihpZCk7XG4gIH1cblxuICBkZWxldGVUYXNrKGhhbmRsZXIsIGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZGF0YXNldC5pZDtcblxuICAgIGhhbmRsZXIoaWQpO1xuICB9XG5cbiAgZGVsZXRlVGFza09uTW9kYWwoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLS10YXNrLWRldGFpbHMnKS5kYXRhc2V0LmlkO1xuXG4gICAgaGFuZGxlcihpZCk7XG4gIH1cblxuICBhZGRIYW5kbGVyVGFza0RldGFpbHMoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKVxuICAgICAgLmZvckVhY2goKGVsKSA9PlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd0RldGFpbHMuYmluZCh0aGlzLCBoYW5kbGVyKSlcbiAgICAgICk7XG4gIH1cblxuICBhZGRIYW5kbGVyRWRpdFRhc2soaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscy0taWNvbi13cmFwcGVyLnRhc2stZWRpdCcpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFsbG93VGFza0VkaXQuYmluZCh0aGlzLCBoYW5kbGVyKSk7XG4gIH1cblxuICBhZGRIYW5kbGVyRGVsZXRlVGFzayhoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubWF0ZXJpYWwtaWNvbnMuaWNvbi0tZGVsZXRlLnRhc2stZGlzcGxheS0taWNvbnMnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlVGFzay5iaW5kKHRoaXMsIGhhbmRsZXIpKVxuICAgICAgKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJEZWxldGVUYXNrT25Nb2RhbChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzLS1pY29uLXdyYXBwZXIudGFzay1kZWxldGUnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVUYXNrT25Nb2RhbC5iaW5kKHRoaXMsIGhhbmRsZXIpKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZU1hcmt1cCgpIHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tY2xvc2UtZGV0YWlscy1tb2RhbFwiPiBjbG9zZSA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stdGl0bGVcIj4ke3RoaXMuX2RhdGEudGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stZGV0YWlsc1wiPlxuICAgICAgICAgICR7dGhpcy5fZGF0YS5kZXRhaWxzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1kYXRlLXdyYXBwZXJcIj5cbiAgICAgICAgICBEdWUgZGF0ZTpcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1kYXRlXCI+JHt0aGlzLl9kYXRhLmRhdGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1wcmlvcml0eS13cmFwcGVyXCI+XG4gICAgICAgICAgUHJpb3JpdHk6XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLXByaW9yaXR5IHRhc2stZGV0YWlscy0tdGFzay1wcmlvcml0eS0ke3RoaXMuX2RhdGEucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1cIlxuICAgICAgICAgICAgPiR7dGhpcy5fZGF0YS5wcmlvcml0eX08L3NwYW5cbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stc3RhdHVzLXdyYXBwZXJcIj5cbiAgICAgICAgICBTdGF0dXM6XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLXN0YXR1c1wiXG4gICAgICAgICAgICA+JHtcbiAgICAgICAgICAgICAgdGhpcy5fZGF0YS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gJ0NvbXBsZXRlZCcgOiAnT24tZ29pbmcnXG4gICAgICAgICAgICB9PC9zcGFuXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLXByb2plY3Qtd3JhcHBlclwiPlxuICAgICAgICAgIFByb2plY3Q6XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stcHJvamVjdFwiPiR7dGhpcy5fZGF0YS5wcm9qZWN0fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1lZGl0b3Itd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLWljb24td3JhcHBlciB0YXNrLWVkaXRcIj5cbiAgICAgICAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uLS1lZGl0IHRhc2stZGV0YWlscy0taWNvbnNcIj5cbiAgICAgICAgICAgICAgbW9kZV9lZGl0XG4gICAgICAgICAgICA8L3NwYW4+IC0tPlxuICAgICAgICAgICAgRWRpdFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLWljb24td3JhcHBlciB0YXNrLWRlbGV0ZVwiPlxuICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWRlbGV0ZSB0YXNrLWRldGFpbHMtLWljb25zXCI+XG4gICAgICAgICAgICAgIGRlbGV0ZVxuICAgICAgICAgICAgPC9zcGFuPiAtLT5cbiAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5kYXRhc2V0LmlkID0gdGhpcy5fZGF0YS5pZDtcblxuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IERldGFpbHNWaWV3KCk7XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IE1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5pbXBvcnQgYWRkVGFza1ZpZXcgZnJvbSAnLi9hZGRUYXNrVmlldyc7XG5cbmNsYXNzIEVkaXRUYXNrVmlldyBleHRlbmRzIE1vZGFsVmlldyB7XG4gIF9wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcbiAgX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tdGFzay1kZXRhaWxzJyk7XG4gIF9wcm9qZWN0U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcm9qZWN0Jyk7XG5cbiAgX2J0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24tLWNsb3NlLWVkaXRvci1tb2RhbCcpO1xuICBfYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdG9yLS1pY29uLXdyYXBwZXIudGFzay1zYXZlJyk7XG4gIF9idG5EZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0b3ItLWljb24td3JhcHBlci50YXNrLWRlbGV0ZScpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzaG93RWRpdG9yTW9kYWwoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5kYXRhc2V0LmlkO1xuXG4gICAgdGhpcy50b2dnbGVXaW5kb3coKTtcblxuICAgIGhhbmRsZXIoaWQpO1xuXG4gICAgdGhpcy5fYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi0tY2xvc2UtZWRpdG9yLW1vZGFsJyk7XG4gICAgdGhpcy5fYWRkSGFuZGxlckNsb3NlTW9kYWwoKTtcbiAgICB0aGlzLmFkZEhhbmRsZXJQcmlvcml0eSgpO1xuICB9XG5cbiAgc2F2ZUVkaXQoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcudGFzay1lZGl0b3ItLXRhc2stdGl0bGUnXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy50YXNrLWVkaXRvci0tdGFzay1kZXRhaWxzJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrRGF0ZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcudGFzay1lZGl0b3ItLXRhc2stZGF0ZSdcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5wcmlvcml0eS1sYWJlbC0tYWN0aXZlJ1xuICAgICk/LnRleHRDb250ZW50O1xuXG4gICAgY29uc3QgdGFza1N0YXR1cyA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcudGFzay1lZGl0b3ItLXRhc2stc3RhdHVzOmNoZWNrZWQnXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2tQcm9qZWN0ID1cbiAgICAgIHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcm9qZWN0JykudmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uQXJyID0gW1xuICAgICAgdGFza1RpdGxlLFxuICAgICAgdGFza0RldGFpbHMsXG4gICAgICB0YXNrRGF0ZSxcbiAgICAgIHRhc2tQcmlvcml0eSxcbiAgICAgIHRhc2tTdGF0dXMsXG4gICAgICB0YXNrUHJvamVjdCxcbiAgICBdO1xuXG4gICAgaWYgKHRoaXMuX3ZhbGlkYXRlVGFzayh2YWxpZGF0aW9uQXJyKSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IHRhc2tUaXRsZSxcbiAgICAgICAgZGV0YWlsczogdGFza0RldGFpbHMsXG4gICAgICAgIGRhdGU6IHRhc2tEYXRlLFxuICAgICAgICBwcmlvcml0eTogdGFza1ByaW9yaXR5LFxuICAgICAgICBzdGF0dXM6IHRhc2tTdGF0dXMsXG4gICAgICAgIHByb2plY3Q6IHRhc2tQcm9qZWN0LFxuICAgICAgICBpZDogYCR7dGFza0RhdGV9LS0ke3Rhc2tUaXRsZX1gLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5fY2xlYXJGb3JtKCk7XG4gICAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuICAgICAgaGFuZGxlcih0aGlzLl9wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQsIGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJGb3JtRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVUYXNrT25Nb2RhbChoYW5kbGVyLCBlKSB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcubW9kYWwtLXRhc2stZGV0YWlscycpLmRhdGFzZXQuaWQ7XG5cbiAgICBoYW5kbGVyKGlkKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJTaG93RWRpdG9yKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXRlcmlhbC1pY29ucy5pY29uLS1lZGl0LnRhc2stZGlzcGxheS0taWNvbnMnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd0VkaXRvck1vZGFsLmJpbmQodGhpcywgaGFuZGxlcikpXG4gICAgICApO1xuICB9XG5cbiAgYWRkSGFuZGxlclNhdmVFZGl0KGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXRvci0taWNvbi13cmFwcGVyLnRhc2stc2F2ZScpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNhdmVFZGl0LmJpbmQodGhpcywgaGFuZGxlcikpO1xuICB9XG5cbiAgYWRkSGFuZGxlckRlbGV0ZVRhc2tPbk1vZGFsKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXRvci0taWNvbi13cmFwcGVyLnRhc2stZGVsZXRlJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlVGFza09uTW9kYWwuYmluZCh0aGlzLCBoYW5kbGVyKSk7XG4gIH1cblxuICBhZGRIYW5kbGVyUHJpb3JpdHkoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHktd3JhcHBlcicpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl90b2dnbGVQcmlvcml0eS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZU1hcmt1cCgpIHtcbiAgICAvLyA8ZGl2IGNsYXNzPVwibW9kYWwtLXRhc2stZGV0YWlsc21vZGFsLS10YXNrLWVkaXRvclwiPlxuICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uLS1jbG9zZS1lZGl0b3ItbW9kYWxcIj4gY2xvc2UgPC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS1mb3JtLWVsZW1lbnQgdGFzay1lZGl0b3ItLXRhc2stdGl0bGVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRpdGxlIGhlcmVcIlxuICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLl9kYXRhLnRpdGxlfVwiXG4gICAgICAgICAgbWlubGVuZ3RoPVwiMVwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiNjBcIlxuICAgICAgICAvPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS1mb3JtLWVsZW1lbnQgdGFzay1lZGl0b3ItLXRhc2stZGV0YWlsc1wiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGV0YWlscyBoZXJlXCJcbiAgICAgICAgICBtYXhsZW5ndGg9XCIyNDBcIlxuICAgICAgICA+JHt0aGlzLl9kYXRhLmRldGFpbHMgPyB0aGlzLl9kYXRhLmRldGFpbHMgOiAnJ308L3RleHRhcmVhPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1kYXRlLXdyYXBwZXJcIj5cbiAgICAgICAgICBEdWUgZGF0ZTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLWZvcm0tZWxlbWVudCB0YXNrLWVkaXRvci0tdGFzay1kYXRlXCJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLl9kYXRhLmRhdGV9XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHktd3JhcHBlclwiPlxuICAgICAgICAgIDxwIGZvcj1cInRhc2stZWRpdG9yLXByaW9yaXR5XCI+UHJpb3JpdHk6PC9wPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHkgcHJpb3JpdHktbG93XCJcbiAgICAgICAgICAgIG5hbWU9XCJ0YXNrLWVkaXRvci1wcmlvcml0eVwiXG4gICAgICAgICAgICB2YWx1ZT1cImxvd1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGZvcj1cInRhc2stZWRpdG9yLXByaW9yaXR5XCJcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHktbGFiZWwgcHJpb3JpdHktbGFiZWwtbG93ICR7XG4gICAgICAgICAgICAgIHRoaXMuX2RhdGEucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gJ2xvdydcbiAgICAgICAgICAgICAgICA/ICdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJ1xuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPkxvdzwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eSBwcmlvcml0eS1tZWRpdW1cIlxuICAgICAgICAgICAgbmFtZT1cInRhc2stZWRpdG9yLXByaW9yaXR5XCJcbiAgICAgICAgICAgIHZhbHVlPVwibWVkaXVtXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgZm9yPVwidGFzay1lZGl0b3ItcHJpb3JpdHlcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eS1sYWJlbCBwcmlvcml0eS1sYWJlbC1tZWRpdW0gJHtcbiAgICAgICAgICAgICAgdGhpcy5fZGF0YS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSAnbWVkaXVtJ1xuICAgICAgICAgICAgICAgID8gJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+TWVkaXVtPC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5IHByaW9yaXR5LWhpZ2hcIlxuICAgICAgICAgICAgbmFtZT1cInRhc2stZWRpdG9yLXByaW9yaXR5XCJcbiAgICAgICAgICAgIHZhbHVlPVwiaGlnaFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGZvcj1cInRhc2stZWRpdG9yLXByaW9yaXR5XCJcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHktbGFiZWwgcHJpb3JpdHktbGFiZWwtaGlnaCAke1xuICAgICAgICAgICAgICB0aGlzLl9kYXRhLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09ICdoaWdoJ1xuICAgICAgICAgICAgICAgID8gJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+SGlnaDwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1zdGF0dXMtd3JhcHBlclwiPlxuICAgICAgICAgIFN0YXR1czpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS1mb3JtLWVsZW1lbnQgdGFzay1lZGl0b3ItLXRhc2stc3RhdHVzXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0YXNrLWVkaXRvci1zdGF0dXNcIlxuICAgICAgICAgICAgdmFsdWU9XCJjb21wbGV0ZWRcIlxuICAgICAgICAgICAgJHt0aGlzLl9kYXRhLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAnY2hlY2tlZCcgOiAnJ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWVkaXRvci1zdGF0dXNcIiBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXN0YXR1cy1sYWJlbFwiXG4gICAgICAgICAgICA+Q29tcGxldGVkPC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS1mb3JtLWVsZW1lbnQgdGFzay1lZGl0b3ItLXRhc2stc3RhdHVzXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0YXNrLWVkaXRvci1zdGF0dXNcIlxuICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgJHt0aGlzLl9kYXRhLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAnJyA6ICdjaGVja2VkJ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWVkaXRvci1zdGF0dXNcIiBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXN0YXR1cy1sYWJlbFwiXG4gICAgICAgICAgICA+T24tZ29pbmc8L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1wcm9qZWN0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdC10YXNrLXByb2plY3RcIj5Qcm9qZWN0OjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZWRpdC10YXNrLXByb2plY3RcIiBpZD1cImVkaXQtdGFzay1wcm9qZWN0XCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHt0aGlzLl9kYXRhLnByb2plY3R9XCI+JHt0aGlzLl9kYXRhLnByb2plY3R9PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stZWRpdG9yLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1lZGl0b3ItLWljb24td3JhcHBlciB0YXNrLXNhdmVcIj5TYXZlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZWRpdG9yLS1pY29uLXdyYXBwZXIgdGFzay1kZWxldGVcIj5EZWxldGU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtLXRhc2stZWRpdG9yJyk7XG5cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQgPSB0aGlzLl9kYXRhLmlkO1xuXG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxuXG4gIF90b2dnbGVQcmlvcml0eShlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5LWxhYmVsJykpXG4gICAgICByZXR1cm47XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eS1sYWJlbCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnKSk7XG5cbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJyk7XG4gIH1cblxuICBfdmFsaWRhdGVUYXNrKGFycikge1xuICAgIGNvbnN0IFt0aXRsZSwgXywgZGF0ZSwgcHJpb3JpdHksIHN0YXR1c10gPSBhcnI7XG4gICAgaWYgKCF0aXRsZSB8fCAhZGF0ZSB8fCAhcHJpb3JpdHkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfY2xlYXJGb3JtKCkge1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZWRpdG9yLS1mb3JtLWVsZW1lbnQnKTtcbiAgfVxuXG4gIF9yZW5kZXJGb3JtRXJyb3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2Zvcm0gZXJyb3InKTtcbiAgfVxuXG4gIHJlbmRlclByb2plY3RPcHRpb25zKHByb2plY3RzQXJyLCB0YXNrVG9FZGl0KSB7XG4gICAgY29uc3QgbWFya3VwID0gdGhpcy5fZ2VuZXJhdGVQcm9qT3B0aW9uc01hcmt1cChwcm9qZWN0c0Fycik7XG5cbiAgICB0aGlzLl9jbGVhclByb2plY3RPcHRpb25zKHRhc2tUb0VkaXQpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXByb2plY3QnKVxuICAgICAgLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG1hcmt1cCk7XG4gIH1cblxuICBfZ2VuZXJhdGVQcm9qT3B0aW9uc01hcmt1cChwcm9qZWN0c0Fycikge1xuICAgIGNvbnN0IG1hcmt1cEFyciA9IFtdO1xuXG4gICAgcHJvamVjdHNBcnIuc2xpY2UoMSkuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICAgIG1hcmt1cEFyci5wdXNoKGBcbiAgICAgIDxvcHRpb24gdmFsdWU9XCIke3Byb2plY3QudGl0bGV9XCI+JHtwcm9qZWN0LnRpdGxlfTwvb3B0aW9uPlxuICAgIGApXG4gICAgKTtcblxuICAgIHJldHVybiBtYXJrdXBBcnIuam9pbignJyk7XG4gIH1cblxuICBfY2xlYXJQcm9qZWN0T3B0aW9ucyh0YXNrKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcm9qZWN0JykuaW5uZXJIVE1MID0gYFxuICAgIDxvcHRpb24gdmFsdWU9XCIke3Rhc2sucHJvamVjdH1cIj4ke3Rhc2sucHJvamVjdH08L29wdGlvbj5cbiAgICBgO1xuICB9XG5cbiAgYWRkSGFuZGxlclJlbmRlclByb2plY3RzT25Gb3JtKGhhbmRsZXIsIHRhc2spIHtcbiAgICBoYW5kbGVyKHRhc2spO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFZGl0VGFza1ZpZXcoKTtcbiIsImltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuXG5jbGFzcyBGb3JtVmlldyBleHRlbmRzIE1vZGFsVmlldyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hZGRIYW5kbGVyTW9kYWxTaWRlYmFyKCk7XG4gIH1cblxuICB0b2dnbGVGb3JtRGlzcGxheShlKSB7XG4gICAgLy8gSGlkZXMgYWxsIGZvcm1zXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50LWZvcm0nKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSk7XG5cbiAgICAvLyBFc3RhYmxpc2hlcyB3aGljaCBmb3JtIHRvIHNob3dcbiAgICBjb25zdCBmb3JtVHlwZSA9IEFycmF5LmZyb20oZS50YXJnZXQuY2xhc3NMaXN0KVsxXS5zcGxpdCgnbmV3LScpWzFdO1xuXG4gICAgdGhpcy5fY2xlYXJGb3JtKCk7XG5cbiAgICAvLyBTaG93IGZvcm0gdG8gZGlzcGxheVxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGAuY29udGVudC1mb3JtLS1uZXctJHtmb3JtVHlwZX1gKVxuICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9XG5cbiAgYWRkSGFuZGxlck1vZGFsU2lkZWJhcigpIHtcbiAgICAvLyBDaGFuZ2VzIHRoZSBmb3JtIGRpc3BsYXlcbiAgICB0aGlzLl9zaWRlYmFyTGFiZWxzLmZvckVhY2goKGVsKSA9PlxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUZvcm1EaXNwbGF5LmJpbmQodGhpcykpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRm9ybVZpZXcoKTtcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsVmlldyBleHRlbmRzIFZpZXcge1xuICBfZXJyb3JNZXNzYWdlID0gJ0Zvcm0gaW5wdXQgaW52YWxpZCc7XG5cbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stLWNvbnRlbnQnKTtcbiAgX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tYWRkLXRhc2snKTtcbiAgX3NpZGViYXJMYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci0tbGFiZWwnKTtcbiAgX292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuXG4gIF9idG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi5hZGQtdGFzaycpO1xuICBfYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcubWF0ZXJpYWwtaWNvbnMuaWNvbi0tY2xvc2UtYWRkLW5ldy1tb2RhbCdcbiAgKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgdG9nZ2xlV2luZG93KCkge1xuICAgIHRoaXMuX292ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgdGhpcy5fd2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9XG5cbiAgX2FkZEhhbmRsZXJTaG93TW9kYWwoKSB7XG4gICAgLy8gU2hvd3Mvb3BlbnMgdGhlIG1vZGFsXG4gICAgdGhpcy5fYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlV2luZG93LmJpbmQodGhpcykpO1xuICB9XG5cbiAgX2FkZEhhbmRsZXJDbG9zZU1vZGFsKCkge1xuICAgIC8vIENsb3NlcyB0aGUgbW9kYWxcbiAgICB0aGlzLl9idG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlV2luZG93LmJpbmQodGhpcykpO1xuICAgIC8vIHRoaXMuX292ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZVdpbmRvdy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9jbGVhckZvcm0oKSB7XG4gICAgLy8gQ2xlYXIgdGFzayBmb3JtXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctdGFzay0tZm9ybS1lbGVtZW50JylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gKGVsLnZhbHVlID0gJycpKTtcblxuICAgIC8vIENsZWFyIHByb2plY3QgZm9ybVxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXByb2plY3QtLWZvcm0tZWxlbWVudCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IChlbC52YWx1ZSA9ICcnKSk7XG5cbiAgICAvLyBDbGVhciBub3RlIGZvcm1cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5ldy1ub3RlLS1mb3JtLWVsZW1lbnQnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiAoZWwudmFsdWUgPSAnJykpO1xuXG4gICAgLy8gQ2xlYXIgcHJpb3JpdHkgY2hvaWNlXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctdGFzay0tdGFzay1wcmlvcml0eS1sYWJlbCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnKSk7XG5cbiAgICAvLyBDbGVhciB0YXNrIGRhdGVcbiAgICBpZiAodGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stLXRhc2stZGF0ZScpKSB7XG4gICAgICB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay0tdGFzay1kYXRlJykudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNsYXNzIFNpZGViYXJWaWV3IGV4dGVuZHMgVmlldyB7XG4gIF93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJhcicpO1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtc3ViZGl2LnByb2plY3QtLWhlYWRlcicpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBfZ2VuZXJhdGVNYXJrdXAoKSB7XG4gICAgdGhpcy5fY2xlYXIoKTtcbiAgICBjb25zdCBtYXJrdXAgPSB0aGlzLl9kYXRhLm1hcCh0aGlzLl9nZW5lcmF0ZVByb2plY3RNYXJrdXApLmpvaW4oJycpO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBfZ2VuZXJhdGVQcm9qZWN0TWFya3VwKHByb2plY3QpIHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgPHAgY2xhc3M9XCJuYXYtc3ViZGl2LS1jb250ZW50IHByb2plY3QtLXRpdGxlXCI+JHtwcm9qZWN0LnRpdGxlfTwvcD5gO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBhZGRIYW5kbGVyU2hvd1Byb2plY3QoaGFuZGxlcikge1xuICAgIHRoaXMuX3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC0tdGl0bGUnKSkgcmV0dXJuO1xuICAgICAgY29uc29sZS5sb2coJ2hpJyk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNpZGViYXJWaWV3KCk7XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IGRldGFpbHNWaWV3IGZyb20gJy4vZGV0YWlsc1ZpZXcnO1xuXG5jbGFzcyBUYXNrVmlldyBleHRlbmRzIFZpZXcge1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpc3BsYXknKTtcbiAgX3Rhc2tEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgX2dlbmVyYXRlTWFya3VwKCkge1xuICAgIGNvbnN0IG1hcmt1cCA9IHRoaXMuX2RhdGEubWFwKHRoaXMuX2dlbmVyYXRlVGFza01hcmt1cCkuam9pbignJyk7XG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxuXG4gIF9nZW5lcmF0ZVRhc2tNYXJrdXAodGFzaykge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrIHByaW9yaXR5LSR7dGFzay5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgdGFzay5pZFxuICAgIH1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jaGVja2JveCAke1xuICAgICAgICAgICAgdGFzay5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gJ3Rhc2stY2hlY2tib3gtLWNoZWNrZWQnIDogJydcbiAgICAgICAgICB9XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stdGl0bGUgJHtcbiAgICAgICAgICAgIHRhc2suc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICd0YXNrLS1jb21wbGV0ZWQnIDogJydcbiAgICAgICAgICB9XCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHNcIj5EZXRhaWxzPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGF0ZVwiPiR7dGFzay5kYXRlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktLWljb24td3JhcHBlciB0YXNrLWVkaXRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tZWRpdCB0YXNrLWRpc3BsYXktLWljb25zXCI+IG1vZGVfZWRpdCA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGlzcGxheS0taWNvbi13cmFwcGVyIHRhc2stZGVsZXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWRlbGV0ZSB0YXNrLWRpc3BsYXktLWljb25zXCI+IGRlbGV0ZSA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmA7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0ZWQoaGFuZGxlciwgZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWNoZWNrYm94JykpIHJldHVybjtcblxuICAgIGNvbnN0IHRhc2tUb01hcmsgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpO1xuICAgIGNvbnN0IGlkID0gdGFza1RvTWFyay5kYXRhc2V0LmlkO1xuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1jaGVja2JveC0tY2hlY2tlZCcpO1xuXG4gICAgdGFza1RvTWFyay5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2stLWNvbXBsZXRlZCcpO1xuXG4gICAgaGFuZGxlcihpZCk7XG4gIH1cblxuICBhZGRIYW5kbGVyVG9nZ2xlQ29tcGxldGVkKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT5cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUNvbXBsZXRlZC5iaW5kKHRoaXMsIGhhbmRsZXIpKVxuICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFza1ZpZXcoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIF9kYXRhO1xuXG4gIHJlbmRlcihkYXRhKSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgY29uc3QgbWFya3VwID0gdGhpcy5fZ2VuZXJhdGVNYXJrdXAoKTtcblxuICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBtYXJrdXApO1xuICB9XG5cbiAgcmVuZGVyRXJyb3IoTWVzc2FnZSA9IHRoaXMuX2Vycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5cbiAgICA8cD4ke21lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PmA7XG5cbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgbW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5cbmltcG9ydCBhZGRUYXNrVmlldyBmcm9tICcuL3ZpZXdzL2FkZFRhc2tWaWV3JztcbmltcG9ydCBhZGRQcm9qZWN0VmlldyBmcm9tICcuL3ZpZXdzL2FkZFByb2plY3RWaWV3JztcbmltcG9ydCBhZGROb3RlVmlldyBmcm9tICcuL3ZpZXdzL2FkZE5vdGVWaWV3JztcblxuaW1wb3J0IHNpZGViYXJWaWV3IGZyb20gJy4vdmlld3Mvc2lkZWJhclZpZXcnO1xuaW1wb3J0IHRhc2tWaWV3IGZyb20gJy4vdmlld3MvdGFza1ZpZXcnO1xuaW1wb3J0IGRldGFpbHNWaWV3IGZyb20gJy4vdmlld3MvZGV0YWlsc1ZpZXcnO1xuaW1wb3J0IGVkaXRUYXNrVmlldyBmcm9tICcuL3ZpZXdzL2VkaXRUYXNrVmlldyc7XG5pbXBvcnQgZm9ybVZpZXcgZnJvbSAnLi92aWV3cy9mb3JtVmlldyc7XG5pbXBvcnQgbW9kYWxWaWV3IGZyb20gJy4vdmlld3MvbW9kYWxWaWV3JztcblxuLy8gSW5kZXgganMgZm9yIHRoZSBhcHBsaWNhdGlvbiBsb2dpYyAoY29udHJvbGxlcilcblxuY29uc3QgY29udHJvbEFkZFRhc2sgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBtb2RlbC5hZGRUYXNrKGRhdGEpO1xuXG4gIHRhc2tWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS50YXNrcyk7XG5cbiAgYWRkSGFuZGxlcnNUb1Rhc2soKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xBZGRQcm9qZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgbW9kZWwuYWRkUHJvamVjdChkYXRhKTtcblxuICBzaWRlYmFyVmlldy5yZW5kZXIobW9kZWwuc3RhdGUucHJvamVjdHMuc2xpY2UoMSkpO1xufTtcblxuY29uc3QgY29udHJvbEFkZE5vdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBtb2RlbC5hZGROb3RlKGRhdGEpO1xufTtcblxuY29uc3QgY29udHJvbFNob3dQcm9qZWN0c09uRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgYWRkVGFza1ZpZXcucmVuZGVyUHJvamVjdE9wdGlvbnMobW9kZWwuc3RhdGUucHJvamVjdHMpO1xufTtcblxuY29uc3QgY29udHJvbFNob3dQcm9qZWN0c09uRWRpdG9yID0gZnVuY3Rpb24gKHRhc2tUb0VkaXQpIHtcbiAgZWRpdFRhc2tWaWV3LnJlbmRlclByb2plY3RPcHRpb25zKG1vZGVsLnN0YXRlLnByb2plY3RzLCB0YXNrVG9FZGl0KTtcbn07XG5cbmNvbnN0IGNvbnRyb2xTaG93VGFza3MgPSBmdW5jdGlvbiAoKSB7XG4gIHRhc2tWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS50YXNrcyk7XG4gIHNpZGViYXJWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS5wcm9qZWN0cy5zbGljZSgxKSk7XG59O1xuXG5jb25zdCBjb250cm9sRGVsZXRlVGFzayA9IGZ1bmN0aW9uIChpZCkge1xuICBtb2RlbC5kZWxldGVUYXNrKGlkKTtcblxuICB0YXNrVmlldy5yZW5kZXIobW9kZWwuc3RhdGUudGFza3MpO1xuXG4gIGFkZEhhbmRsZXJzVG9UYXNrKCk7XG59O1xuXG5jb25zdCBjb250cm9sRGVsZXRlVGFza09uTW9kYWwgPSBmdW5jdGlvbiAoaWQpIHtcbiAgbW9kZWwuZGVsZXRlVGFzayhpZCk7XG5cbiAgZGV0YWlsc1ZpZXcudG9nZ2xlV2luZG93KCk7XG5cbiAgdGFza1ZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLnRhc2tzKTtcblxuICBhZGRIYW5kbGVyc1RvVGFzaygpO1xufTtcblxuY29uc3QgY29udHJvbFNhdmVFZGl0VGFzayA9IGZ1bmN0aW9uIChpZCwgcmVwbGFjZW1lbnQpIHtcbiAgbW9kZWwudXBkYXRlVGFzayhpZCwgcmVwbGFjZW1lbnQpO1xuXG4gIGNvbnRyb2xTaG93VGFza3MoKTtcbiAgYWRkSGFuZGxlcnNUb1Rhc2soKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xFZGl0VGFzayA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCB0YXNrVG9FZGl0ID0gbW9kZWwuc3RhdGUudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xuXG4gIGVkaXRUYXNrVmlldy5yZW5kZXIodGFza1RvRWRpdCk7XG5cbiAgZWRpdFRhc2tWaWV3LmFkZEhhbmRsZXJSZW5kZXJQcm9qZWN0c09uRm9ybShcbiAgICBjb250cm9sU2hvd1Byb2plY3RzT25FZGl0b3IsXG4gICAgdGFza1RvRWRpdFxuICApO1xuICBlZGl0VGFza1ZpZXcuYWRkSGFuZGxlclNhdmVFZGl0KGNvbnRyb2xTYXZlRWRpdFRhc2spO1xuICBlZGl0VGFza1ZpZXcuYWRkSGFuZGxlckRlbGV0ZVRhc2tPbk1vZGFsKGNvbnRyb2xEZWxldGVUYXNrT25Nb2RhbCk7XG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyUHJpb3JpdHkoKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xTaG93RGV0YWlscyA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCB0YXNrVG9TaG93ID0gbW9kZWwuc3RhdGUudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xuXG4gIGRldGFpbHNWaWV3LnJlbmRlcih0YXNrVG9TaG93KTtcblxuICBkZXRhaWxzVmlldy5hZGRIYW5kbGVyRGVsZXRlVGFza09uTW9kYWwoY29udHJvbERlbGV0ZVRhc2tPbk1vZGFsKTtcbiAgZGV0YWlsc1ZpZXcuYWRkSGFuZGxlckVkaXRUYXNrKGNvbnRyb2xFZGl0VGFzayk7XG59O1xuXG5jb25zdCBjb250cm9sVG9nZ2xlQ29tcGxldGVkID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IHRhc2tUb01hcmsgPSBtb2RlbC5zdGF0ZS50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG5cbiAgbW9kZWwudG9nZ2xlVGFza0NvbXBsZXRlKGlkKTtcblxuICBjb250cm9sU2hvd1Rhc2tzKCk7XG4gIGFkZEhhbmRsZXJzVG9UYXNrKCk7XG59O1xuXG5jb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICBjb250cm9sU2hvd1Rhc2tzKCk7XG4gIGFkZFRhc2tWaWV3LmFkZEhhbmRsZXJBZGRUYXNrKGNvbnRyb2xBZGRUYXNrKTtcbiAgYWRkVGFza1ZpZXcuYWRkSGFuZGxlclJlbmRlclByb2plY3RzT25Gb3JtKGNvbnRyb2xTaG93UHJvamVjdHNPbkZvcm0pO1xuICBhZGRQcm9qZWN0Vmlldy5hZGRIYW5kbGVyQWRkUHJvamVjdChjb250cm9sQWRkUHJvamVjdCk7XG4gIGFkZE5vdGVWaWV3LmFkZEhhbmRsZXJBZGROb3RlKGNvbnRyb2xBZGROb3RlKTtcbiAgZGV0YWlsc1ZpZXcuYWRkSGFuZGxlclRhc2tEZXRhaWxzKGNvbnRyb2xTaG93RGV0YWlscyk7XG4gIGRldGFpbHNWaWV3LmFkZEhhbmRsZXJEZWxldGVUYXNrKGNvbnRyb2xEZWxldGVUYXNrKTtcbiAgZWRpdFRhc2tWaWV3LmFkZEhhbmRsZXJTaG93RWRpdG9yKGNvbnRyb2xFZGl0VGFzayk7XG4gIHRhc2tWaWV3LmFkZEhhbmRsZXJUb2dnbGVDb21wbGV0ZWQoY29udHJvbFRvZ2dsZUNvbXBsZXRlZCk7XG4gIC8vIHNpZGViYXJWaWV3LmFkZEhhbmRsZXJTaG93UHJvamVjdChjb250cm9sU2hvd1Byb2plY3QpO1xufTtcblxuaW5pdCgpO1xuXG4vLyAgSEVMUEVSIEZVTkNUSU9OU1xuXG5mdW5jdGlvbiBhZGRIYW5kbGVyc1RvVGFzaygpIHtcbiAgZGV0YWlsc1ZpZXcuYWRkSGFuZGxlclRhc2tEZXRhaWxzKGNvbnRyb2xTaG93RGV0YWlscyk7XG4gIGRldGFpbHNWaWV3LmFkZEhhbmRsZXJEZWxldGVUYXNrKGNvbnRyb2xEZWxldGVUYXNrKTtcbiAgZWRpdFRhc2tWaWV3LmFkZEhhbmRsZXJTaG93RWRpdG9yKGNvbnRyb2xFZGl0VGFzayk7XG4gIHRhc2tWaWV3LmFkZEhhbmRsZXJUb2dnbGVDb21wbGV0ZWQoY29udHJvbFRvZ2dsZUNvbXBsZXRlZCk7XG59XG5cbi8qXG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXQgc2V0TmFtZSh2YWx1ZSkge1xuICAgIHRoaXMubmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGdldERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZTtcbiAgfVxuXG4gIHNldCBzZXREYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBzZXQgc2V0UHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgc2V0RGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbn1cblxuKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==