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
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteNote": () => (/* binding */ deleteNote),
/* harmony export */   "updateTask": () => (/* binding */ updateTask),
/* harmony export */   "updateProject": () => (/* binding */ updateProject),
/* harmony export */   "updateNoteTitle": () => (/* binding */ updateNoteTitle),
/* harmony export */   "updateNoteDetail": () => (/* binding */ updateNoteDetail),
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
  state.notes.unshift(note);

  // Set to local storage
  persistNotes();
};

const deleteTask = function (id) {
  const index = state.tasks.findIndex((el) => el.id === id);
  state.tasks.splice(index, 1);

  persistTasks();
};

const deleteProject = function (projectID) {
  const index = state.projects.findIndex((el) => el.title === projectID);
  state.projects.splice(index, 1);

  const tasksToDelete = state.tasks.filter((el) => el.project === projectID);
  tasksToDelete.forEach(function (item, index, array) {
    let itemIndex = state.tasks.findIndex(
      (task) => task.project === item.project
    );

    state.tasks.splice(itemIndex, 1);
  });
  persistProjects();
  persistTasks();
};

const deleteNote = function (noteID) {
  const index = state.notes.findIndex((el) => el.id === noteID);

  state.notes.splice(index, 1);

  persistNotes();
};

const updateTask = function (id, replacement) {
  const index = state.tasks.findIndex((el) => el.id === id);
  state.tasks.splice(index, 1, replacement);

  persistTasks();
};

const updateProject = function (id, replacement) {
  const index = state.projects.findIndex((el) => el.title === id);
  state.projects.splice(index, 1, replacement);

  const tasksToUpdate = state.tasks.filter((el) => el.project === id);

  tasksToUpdate.forEach((el) => (el.project = replacement.title));

  persistProjects();
  persistTasks();
};

const updateNoteTitle = function (noteID, newID, replacement) {
  const index = state.notes.findIndex((el) => el.id === noteID);

  state.notes[index].id = newID;
  state.notes[index].title = replacement;

  persistNotes();
};

const updateNoteDetail = function (noteID, replacement) {
  const index = state.notes.findIndex((el) => el.id === noteID);

  state.notes[index].details = replacement;

  persistNotes();
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

    this._btnClose = document.querySelector('.icon--close-editor-modal');
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

/***/ "./src/views/editProjectView.js":
/*!**************************************!*\
  !*** ./src/views/editProjectView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalView */ "./src/views/modalView.js");


class EditProjectView extends _modalView__WEBPACK_IMPORTED_MODULE_0__.default {
  _parentElement = document.querySelector('.modal--task-details');
  _window = document.querySelector('.modal--task-details');
  _title = document.querySelector('.task-display--project-title');

  _btnClose = document.querySelector('.icon--close-editor-modal');
  _btnSubmit = document.querySelector('.task-editor--icon-wrapper.task-save');
  _btnDelete = document.querySelector('.task-editor--icon-wrapper.task-delete');

  constructor() {
    super();
  }

  showEditorModal(handler, e) {
    const id = document.querySelector(
      '.task-display--project-title'
    ).textContent;

    this.toggleWindow();

    handler(id);

    this._btnClose = document.querySelector('.icon--close-editor-modal');
    this._addHandlerCloseModal();
  }

  saveEdit(handler, e) {
    const projectTitle = this._parentElement.querySelector(
      '.project-editor--project-title'
    ).value;

    if (this._validateTask(projectTitle)) {
      const data = {
        title: projectTitle,
      };

      this.toggleWindow();
      handler(this._parentElement.dataset.id, data);
    } else {
      this._renderFormError();
    }
  }

  deleteProjectOnModal(handler, e) {
    // const id = this._title;
    const id = document.querySelector(
      '.task-display--project-title'
    ).textContent;

    handler(id);
  }

  addHandlerShowEditor(handler) {
    document
      .querySelector('.task-display--project-btn-edit')
      .addEventListener('click', this.showEditorModal.bind(this, handler));
  }

  addHandlerSaveEdit(handler) {
    document
      .querySelector('.project-editor--icon-wrapper.project-save')
      .addEventListener('click', this.saveEdit.bind(this, handler));
  }

  addHandlerDeleteProjectOnModal(handler) {
    document
      .querySelector('.project-editor--icon-wrapper.project-delete')
      .addEventListener('click', this.deleteProjectOnModal.bind(this, handler));
  }

  _generateMarkup() {
    // <div class="modal--task-detailsmodal--task-editor">
    const markup = `
        <span class="material-icons icon--close-editor-modal"> close </span>
        <input
          class="project-editor--form-element project-editor--project-title"
          type="text"
          placeholder="Sample Title"
          value="${this._data.title}"
          minlength="1"
          maxlength="60"
        />

        <div class="project-editor--project-editor-wrapper">
          <div class="project-editor--icon-wrapper project-save">Save</div>
          <div class="project-editor--icon-wrapper project-delete">Delete</div>
        </div> 
    `;

    this._parentElement.classList.add('modal--project-editor');

    this._parentElement.dataset.id = this._data.title;

    return markup;
  }

  _validateTask(title) {
    if (!title) {
      return false;
    } else return true;
  }

  _renderFormError() {
    console.log('form error');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EditProjectView());


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

  _renderFormError() {
    console.log('form error');
  }

  renderProjectOptions(projectsArr, taskToEdit) {
    const markup = this._generateProjOptionsMarkup(projectsArr, taskToEdit);

    this._clearProjectOptions(taskToEdit);

    document
      .querySelector('#edit-task-project')
      .insertAdjacentHTML('afterbegin', markup);
  }

  _generateProjOptionsMarkup(projectsArr, task) {
    const markupArr = [];

    projectsArr.forEach((project) => {
      if (task.project !== project.title) {
        markupArr.push(`
      <option value="${project.title}">${project.title}</option>
    `);
      }
    });

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
    // Hide all forms
    this._parentElement
      .querySelectorAll('.content-form')
      .forEach((el) => el.classList.add('hidden'));

    // Establish which form to show
    const formType = Array.from(e.target.classList)[1].split('new-')[1];

    // Emphasize active label
    this._sidebarLabels.forEach((label) =>
      label.classList.remove('sidebar--label-active')
    );
    e.target.classList.add('sidebar--label-active');

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

/***/ "./src/views/noteView.js":
/*!*******************************!*\
  !*** ./src/views/noteView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/views/view.js");


class NoteView extends _view__WEBPACK_IMPORTED_MODULE_0__.default {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new NoteView());


/***/ }),

/***/ "./src/views/projectView.js":
/*!**********************************!*\
  !*** ./src/views/projectView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/views/view.js");
/* harmony import */ var _detailsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailsView */ "./src/views/detailsView.js");



class ProjectView extends _view__WEBPACK_IMPORTED_MODULE_0__.default {
  _window = document.querySelector('.nav-subdiv.project--header');
  _parentElement = document.querySelector('.task-display');
  _title = '';

  constructor() {
    super();
  }

  _generateMarkup(title) {
    const markup = `<div class="task-display--project-title">${title}</div> 
      ${this._data.map(this._generateTaskMarkup).join('')} 
       <div class="task-display--project-btn-edit btn">Edit Project</div>`;
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProjectView());


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
    document
      .querySelectorAll('.nav-subdiv--content.project--title')
      .forEach((el) =>
        el.addEventListener('click', this.showProject.bind(this, handler))
      );
  }

  showProject(handler, e) {
    const title = e.target.textContent;
    this._title = title;
    handler(title);
  }

  addHandlerShowHome(handler) {
    document
      .querySelector('.nav-header.header--home')
      .addEventListener('click', function (e) {
        handler();
      });
  }

  addHandlerShowAllTasks(handler) {
    document
      .querySelector('.nav-header.header--all')
      .addEventListener('click', function (e) {
        handler();
        document.querySelector('.task-display--project-title').textContent =
          'All Tasks';
      });
  }

  addHandlerShowNotes(handler) {
    document
      .querySelector('.nav-header.header--notes')
      .addEventListener('click', function (e) {
        handler();
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

  _generateMarkup(projTitle) {
    const markup = `
    <div class="task-display--project-title">${
      projTitle ? projTitle : this._data[0] ? this._data[0].project : 'Home'
    }</div> 
    ${this._data.map(this._generateTaskMarkup).join('')}
    
    <div class="task-display--project-btn-edit btn ${
      this._data[0] ? '' : 'hidden'
    }">Edit Project</div>`;

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

  render(data, other) {
    this._data = data;
    const markup = this._generateMarkup(other);

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
/* harmony import */ var _views_projectView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/projectView */ "./src/views/projectView.js");
/* harmony import */ var _views_formView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/formView */ "./src/views/formView.js");
/* harmony import */ var _views_modalView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/modalView */ "./src/views/modalView.js");
/* harmony import */ var _views_editTaskView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/editTaskView */ "./src/views/editTaskView.js");
/* harmony import */ var _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/editProjectView */ "./src/views/editProjectView.js");
/* harmony import */ var _views_noteView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/noteView */ "./src/views/noteView.js");



















// Index js for the application logic (controller)

// Change to show tasks in specific project
const controlShowTasks = function (project = 'Home', other) {
  const tasksToShow = _model__WEBPACK_IMPORTED_MODULE_0__.state.tasks.filter(
    (task) => task.project === project
  );
  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.render(tasksToShow, other);

  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects.slice(1));

  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.addHandlerShowProject(controlShowProject);
};

const controlAddTask = function (data) {
  _model__WEBPACK_IMPORTED_MODULE_0__.addTask(data);

  controlShowTasks(data.project);

  addHandlersToTask();
};

const controlAddProject = function (data) {
  _model__WEBPACK_IMPORTED_MODULE_0__.addProject(data);

  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects.slice(1));

  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.addHandlerShowAllTasks(controlShowAllTasks);
  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.addHandlerShowProject(controlShowProject);
};

const controlAddNote = function (data) {
  _model__WEBPACK_IMPORTED_MODULE_0__.addNote(data);

  _views_noteView__WEBPACK_IMPORTED_MODULE_12__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.notes);
};

const controlShowProjectsOnForm = function () {
  _views_addTaskView__WEBPACK_IMPORTED_MODULE_1__.default.renderProjectOptions(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects);
};

const controlShowProjectsOnEditor = function (taskToEdit) {
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_10__.default.renderProjectOptions(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects, taskToEdit);
};

const controlShowAllTasks = function () {
  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.tasks);
  addHandlersToTask();
};

const controlDeleteTask = function (id) {
  const projectToShow = getProjectBasedOnID(id);

  _model__WEBPACK_IMPORTED_MODULE_0__.deleteTask(id);

  controlShowTasks(projectToShow);

  addHandlersToTask();
};

const controlDeleteTaskOnModal = function (id) {
  const projectToShow = getProjectBasedOnID(id);

  _model__WEBPACK_IMPORTED_MODULE_0__.deleteTask(id);

  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.toggleWindow();

  controlShowTasks(projectToShow);

  addHandlersToTask();
};

const controlDeleteProjectOnModal = function (id) {
  _model__WEBPACK_IMPORTED_MODULE_0__.deleteProject(id);

  _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__.default.toggleWindow();

  controlShowTasks();
  addHandlersToTask();
};

const controlSaveEditTask = function (id, replacement) {
  _model__WEBPACK_IMPORTED_MODULE_0__.updateTask(id, replacement);

  controlShowTasks(replacement.project);
  addHandlersToTask();
};

const controlSaveEditProject = function (id, replacement) {
  _model__WEBPACK_IMPORTED_MODULE_0__.updateProject(id, replacement);

  controlShowTasks(replacement.title, replacement.title);

  // Update sidebar projects
  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects.slice(1));

  // Add handlers to sidebar projects
  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.addHandlerShowProject(controlShowProject);

  // Add handlers to all tasks
  addHandlersToTask();

  // Add handler to project editor
  _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__.default.addHandlerShowEditor(controlEditProject);
};

const controlEditTask = function (id) {
  const taskToEdit = _model__WEBPACK_IMPORTED_MODULE_0__.state.tasks.find((task) => task.id === id);

  _views_editTaskView__WEBPACK_IMPORTED_MODULE_10__.default.render(taskToEdit);

  _views_editTaskView__WEBPACK_IMPORTED_MODULE_10__.default.addHandlerRenderProjectsOnForm(
    controlShowProjectsOnEditor,
    taskToEdit
  );
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_10__.default.addHandlerSaveEdit(controlSaveEditTask);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_10__.default.addHandlerDeleteTaskOnModal(controlDeleteTaskOnModal);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_10__.default.addHandlerPriority();
};

const controlShowDetails = function (id) {
  const taskToShow = _model__WEBPACK_IMPORTED_MODULE_0__.state.tasks.find((task) => task.id === id);

  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.render(taskToShow);

  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerEditTask(controlEditTask);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerDeleteTaskOnModal(controlDeleteTaskOnModal);
};

const controlToggleCompleted = function (id) {
  _model__WEBPACK_IMPORTED_MODULE_0__.toggleTaskComplete(id);
};

const controlShowHome = function () {
  const tasksAtHome = _model__WEBPACK_IMPORTED_MODULE_0__.state.tasks.filter(
    (task) => task.project.toLowerCase() === 'home'
  );

  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.render(tasksAtHome);
  addHandlersToTask();

  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects.slice(1));

  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.addHandlerShowProject(controlShowProject);
};

// Init on edit function
const controlEditProject = function (id) {
  const projectToEdit = _model__WEBPACK_IMPORTED_MODULE_0__.state.projects.find(
    (project) => project.title === id
  );

  console.log(projectToEdit);
  _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__.default.render(projectToEdit);

  _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__.default.addHandlerSaveEdit(controlSaveEditProject);
  _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__.default.addHandlerDeleteProjectOnModal(controlDeleteProjectOnModal);
};

// Init on show function
const controlShowProject = function (title) {
  const project = _model__WEBPACK_IMPORTED_MODULE_0__.state.projects.find(
    (project) => project.title === title
  );

  const tasksToShow = _model__WEBPACK_IMPORTED_MODULE_0__.state.tasks.filter(
    (el) => el.project === project.title
  );

  _views_projectView__WEBPACK_IMPORTED_MODULE_7__.default.render(tasksToShow, title);
  _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__.default.addHandlerShowEditor(controlEditProject);
  addHandlersToTask();
};

const controlDeleteNote = function (id) {
  _model__WEBPACK_IMPORTED_MODULE_0__.deleteNote(id);

  _views_noteView__WEBPACK_IMPORTED_MODULE_12__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.notes);

  addHandlersToNote();
};

const controlPersistNoteTitle = function (id, newID, value) {
  _model__WEBPACK_IMPORTED_MODULE_0__.updateNoteTitle(id, newID, value);

  _views_noteView__WEBPACK_IMPORTED_MODULE_12__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.notes);
};

const controlPersistNoteDetail = function (id, value) {
  _model__WEBPACK_IMPORTED_MODULE_0__.updateNoteDetail(id, value);

  _views_noteView__WEBPACK_IMPORTED_MODULE_12__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.notes);
};

const controlShowNotes = function () {
  _views_noteView__WEBPACK_IMPORTED_MODULE_12__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.notes);

  addHandlersToNote();
};

const init = function () {
  controlShowTasks();
  _views_addTaskView__WEBPACK_IMPORTED_MODULE_1__.default.addHandlerAddTask(controlAddTask);
  _views_addTaskView__WEBPACK_IMPORTED_MODULE_1__.default.addHandlerRenderProjectsOnForm(controlShowProjectsOnForm);
  _views_addProjectView__WEBPACK_IMPORTED_MODULE_2__.default.addHandlerAddProject(controlAddProject);
  _views_addNoteView__WEBPACK_IMPORTED_MODULE_3__.default.addHandlerAddNote(controlAddNote);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerTaskDetails(controlShowDetails);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerDeleteTask(controlDeleteTask);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_10__.default.addHandlerShowEditor(controlEditTask);
  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.addHandlerToggleCompleted(controlToggleCompleted);
  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.addHandlerShowHome(controlShowHome);
  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.addHandlerShowAllTasks(controlShowAllTasks);
  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.addHandlerShowNotes(controlShowNotes);
};

init();

//  HELPER FUNCTIONS

function addHandlersToTask() {
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerTaskDetails(controlShowDetails);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerDeleteTask(controlDeleteTask);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_10__.default.addHandlerShowEditor(controlEditTask);
  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.addHandlerToggleCompleted(controlToggleCompleted);
}

function addHandlersToNote() {
  _views_noteView__WEBPACK_IMPORTED_MODULE_12__.default.addHandlerDeleteNote(controlDeleteNote);
  _views_noteView__WEBPACK_IMPORTED_MODULE_12__.default.addHandlerPersistNoteTitle(controlPersistNoteTitle);
  _views_noteView__WEBPACK_IMPORTED_MODULE_12__.default.addHandlerPersistNoteDetail(controlPersistNoteDetail);
}

function getProjectBasedOnID(taskID) {
  console.log(taskID);
  const chosenTask = _model__WEBPACK_IMPORTED_MODULE_0__.state.tasks.find((task) => task.id === taskID);
  console.log(_model__WEBPACK_IMPORTED_MODULE_0__.state.tasks.find((task) => task.id === taskID));

  return chosenTask.project;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JDLEVBQUUseUVBQTZCO0FBQy9CLEVBQUUsNkVBQWlDO0FBQ25DLEVBQUUsNEVBQWdDO0FBQ2xDLEVBQUUsOEVBQWlDO0FBQ25DLEVBQUUsOEVBQWtDO0FBQ3BDLEVBQUUsMEVBQThCO0FBQ2hDLEVBQUUsOEVBQWtDO0FBQ3BDLEVBQUUsMkVBQStCO0FBQ2pDOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsRUFBRSw2RUFBaUM7QUFDbkMsRUFBRSw0RUFBZ0M7QUFDbEMsRUFBRSw4RUFBaUM7QUFDbkMsRUFBRSw4RUFBa0M7QUFDcEM7O0FBRUE7QUFDQSxFQUFFLDBFQUE2QjtBQUMvQixFQUFFLGdGQUFtQztBQUNyQyxFQUFFLGlGQUFvQztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFzQjtBQUMzQyxjQUFjLG9EQUFzQjs7QUFFcEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvYWRkTm90ZVZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9hZGRQcm9qZWN0Vmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2FkZFRhc2tWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvZGV0YWlsc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9lZGl0UHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9lZGl0VGFza1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9mb3JtVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL21vZGFsVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL25vdGVWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvcHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9zaWRlYmFyVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3Rhc2tWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3Mvdmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcbiAgdGFza3M6IFtdLFxuICBub3RlczogW10sXG4gIHByb2plY3RzOiBbXG4gICAge1xuICAgICAgdGl0bGU6ICdIb21lJyxcbiAgICB9LFxuICBdLFxuICBjdXJyVGFzazoge30sXG4gIGN1cnJOb3RlOiB7fSxcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSBmdW5jdGlvbiAoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICBwcmlvcml0eTogZGF0YS5wcmlvcml0eSxcbiAgICAuLi4oZGF0YS5wcm9qZWN0ICYmIHsgcHJvamVjdDogZGF0YS5wcm9qZWN0IH0pLFxuICAgIC4uLihkYXRhLmRlc2NyaXB0aW9uICYmIHsgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfSksXG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5vdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgIC4uLihkYXRhLmRlc2NyaXB0aW9uICYmIHsgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfSksXG4gIH07XG59O1xuXG5jb25zdCBwZXJzaXN0VGFza3MgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHN0YXRlLnRhc2tzKSk7XG59O1xuXG5jb25zdCBwZXJzaXN0UHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHN0YXRlLnByb2plY3RzKSk7XG59O1xuXG5jb25zdCBwZXJzaXN0Tm90ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KHN0YXRlLm5vdGVzKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gIC8vIEFkZCB0YXNrIHRvIGFwcCBzdGF0ZVxuICBzdGF0ZS50YXNrcy51bnNoaWZ0KHRhc2spO1xuXG4gIC8vIFNldCB0byBsb2NhbCBzdG9yYWdlXG4gIHBlcnNpc3RUYXNrcygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAvLyBBZGQgcHJvamVjdCB0byBhcHAgc3RhdGVcbiAgc3RhdGUucHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuICAvLyBTZXQgdG8gbG9jYWwgc3RvcmFnZVxuICBwZXJzaXN0UHJvamVjdHMoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGROb3RlID0gZnVuY3Rpb24gKG5vdGUpIHtcbiAgLy8gQWRkIG5vdGUgdG8gYXBwIHN0YXRlXG4gIHN0YXRlLm5vdGVzLnVuc2hpZnQobm90ZSk7XG5cbiAgLy8gU2V0IHRvIGxvY2FsIHN0b3JhZ2VcbiAgcGVyc2lzdE5vdGVzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVGFzayA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLnRhc2tzLmZpbmRJbmRleCgoZWwpID0+IGVsLmlkID09PSBpZCk7XG4gIHN0YXRlLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgcGVyc2lzdFRhc2tzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0SUQpIHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5wcm9qZWN0cy5maW5kSW5kZXgoKGVsKSA9PiBlbC50aXRsZSA9PT0gcHJvamVjdElEKTtcbiAgc3RhdGUucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICBjb25zdCB0YXNrc1RvRGVsZXRlID0gc3RhdGUudGFza3MuZmlsdGVyKChlbCkgPT4gZWwucHJvamVjdCA9PT0gcHJvamVjdElEKTtcbiAgdGFza3NUb0RlbGV0ZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgYXJyYXkpIHtcbiAgICBsZXQgaXRlbUluZGV4ID0gc3RhdGUudGFza3MuZmluZEluZGV4KFxuICAgICAgKHRhc2spID0+IHRhc2sucHJvamVjdCA9PT0gaXRlbS5wcm9qZWN0XG4gICAgKTtcblxuICAgIHN0YXRlLnRhc2tzLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICB9KTtcbiAgcGVyc2lzdFByb2plY3RzKCk7XG4gIHBlcnNpc3RUYXNrcygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU5vdGUgPSBmdW5jdGlvbiAobm90ZUlEKSB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUubm90ZXMuZmluZEluZGV4KChlbCkgPT4gZWwuaWQgPT09IG5vdGVJRCk7XG5cbiAgc3RhdGUubm90ZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICBwZXJzaXN0Tm90ZXMoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUYXNrID0gZnVuY3Rpb24gKGlkLCByZXBsYWNlbWVudCkge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLnRhc2tzLmZpbmRJbmRleCgoZWwpID0+IGVsLmlkID09PSBpZCk7XG4gIHN0YXRlLnRhc2tzLnNwbGljZShpbmRleCwgMSwgcmVwbGFjZW1lbnQpO1xuXG4gIHBlcnNpc3RUYXNrcygpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2plY3QgPSBmdW5jdGlvbiAoaWQsIHJlcGxhY2VtZW50KSB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvamVjdHMuZmluZEluZGV4KChlbCkgPT4gZWwudGl0bGUgPT09IGlkKTtcbiAgc3RhdGUucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxLCByZXBsYWNlbWVudCk7XG5cbiAgY29uc3QgdGFza3NUb1VwZGF0ZSA9IHN0YXRlLnRhc2tzLmZpbHRlcigoZWwpID0+IGVsLnByb2plY3QgPT09IGlkKTtcblxuICB0YXNrc1RvVXBkYXRlLmZvckVhY2goKGVsKSA9PiAoZWwucHJvamVjdCA9IHJlcGxhY2VtZW50LnRpdGxlKSk7XG5cbiAgcGVyc2lzdFByb2plY3RzKCk7XG4gIHBlcnNpc3RUYXNrcygpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU5vdGVUaXRsZSA9IGZ1bmN0aW9uIChub3RlSUQsIG5ld0lELCByZXBsYWNlbWVudCkge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLm5vdGVzLmZpbmRJbmRleCgoZWwpID0+IGVsLmlkID09PSBub3RlSUQpO1xuXG4gIHN0YXRlLm5vdGVzW2luZGV4XS5pZCA9IG5ld0lEO1xuICBzdGF0ZS5ub3Rlc1tpbmRleF0udGl0bGUgPSByZXBsYWNlbWVudDtcblxuICBwZXJzaXN0Tm90ZXMoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVOb3RlRGV0YWlsID0gZnVuY3Rpb24gKG5vdGVJRCwgcmVwbGFjZW1lbnQpIHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5ub3Rlcy5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gbm90ZUlEKTtcblxuICBzdGF0ZS5ub3Rlc1tpbmRleF0uZGV0YWlscyA9IHJlcGxhY2VtZW50O1xuXG4gIHBlcnNpc3ROb3RlcygpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZVRhc2tDb21wbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLnRhc2tzLmZpbmRJbmRleCgoZWwpID0+IGVsLmlkID09PSBpZCk7XG5cbiAgc3RhdGUudGFza3NbaW5kZXhdLnN0YXR1cyA9XG4gICAgc3RhdGUudGFza3NbaW5kZXhdLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAnJyA6ICdjb21wbGV0ZWQnO1xuXG4gIHBlcnNpc3RUYXNrcygpO1xufTtcblxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbG9jYWxUYXNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpO1xuICBjb25zdCBsb2NhbFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gIGNvbnN0IGxvY2FsTm90ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKTtcblxuICBpZiAobG9jYWxUYXNrcykge1xuICAgIHN0YXRlLnRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFRhc2tzKTtcbiAgfVxuXG4gIGlmIChsb2NhbFByb2plY3RzKSB7XG4gICAgc3RhdGUucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsUHJvamVjdHMpO1xuICB9XG5cbiAgaWYgKGxvY2FsTm90ZXMpIHtcbiAgICBzdGF0ZS5ub3RlcyA9IEpTT04ucGFyc2UobG9jYWxOb3Rlcyk7XG4gIH1cbn07XG5pbml0KCk7XG4iLCJpbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcbmltcG9ydCBBZGRUYXNrVmlldyBmcm9tICcuL2FkZFRhc2tWaWV3JztcblxuY2xhc3MgQWRkTm90ZVZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBfYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tc3VibWl0LnN1Ym1pdC0tbmV3LW5vdGUnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgdXBsb2FkRGF0YShoYW5kbGVyLCBlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3Qgbm90ZVRpdGxlID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5uZXctbm90ZS0tbm90ZS10aXRsZSdcbiAgICApLnZhbHVlO1xuICAgIGNvbnN0IG5vdGVEZXRhaWxzID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5uZXctbm90ZS0tbm90ZS1kZXRhaWxzJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uQXJyID0gW25vdGVUaXRsZSwgbm90ZURldGFpbHNdO1xuXG4gICAgaWYgKHRoaXMuX3ZhbGlkYXRlVGFzayh2YWxpZGF0aW9uQXJyKSkge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogbm90ZVRpdGxlLFxuICAgICAgICBkZXRhaWxzOiBub3RlRGV0YWlscyxcbiAgICAgICAgaWQ6IGAke25vdGVUaXRsZX0tLSR7ZGF0ZS5nZXRUaW1lKCl9YCxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2NsZWFyRm9ybSgpO1xuICAgICAgdGhpcy50b2dnbGVXaW5kb3coKTtcbiAgICAgIGhhbmRsZXIoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlckZvcm1FcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXJGb3JtRXJyb3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gIH1cblxuICBfdmFsaWRhdGVUYXNrKGFycikge1xuICAgIGNvbnN0IFt0aXRsZSwgZGV0YWlsc10gPSBhcnI7XG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJBZGROb3RlKGhhbmRsZXIpIHtcbiAgICB0aGlzLl9idG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLnVwbG9hZERhdGEuYmluZCh0aGlzLCBoYW5kbGVyKVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFkZE5vdGVWaWV3KCk7XG4iLCJpbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcblxuY2xhc3MgQWRkUHJvamVjdFZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBfYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tc3VibWl0LnN1Ym1pdC0tbmV3LXByb2plY3QnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgdXBsb2FkRGF0YShoYW5kbGVyLCBlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5uZXctcHJvamVjdC0tcHJvamVjdC10aXRsZSdcbiAgICApLnZhbHVlO1xuXG4gICAgaWYgKHRoaXMuX3ZhbGlkYXRlVGFzayhwcm9qZWN0VGl0bGUpKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogcHJvamVjdFRpdGxlLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5fY2xlYXJGb3JtKCk7XG4gICAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuICAgICAgaGFuZGxlcihkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyRm9ybUVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlckZvcm1FcnJvcigpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgfVxuXG4gIF92YWxpZGF0ZVRhc2sodGl0bGUpIHtcbiAgICBpZiAoIXRpdGxlIHx8IHRpdGxlLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhZGRIYW5kbGVyQWRkUHJvamVjdChoYW5kbGVyKSB7XG4gICAgdGhpcy5fYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy51cGxvYWREYXRhLmJpbmQodGhpcywgaGFuZGxlcilcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBZGRQcm9qZWN0VmlldygpO1xuIiwiaW1wb3J0IE1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5cbmNsYXNzIEFkZFRhc2tWaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgX3ByaW9yaXR5TGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLS10YXNrLXByaW9yaXR5LXdyYXBwZXInKTtcbiAgX2J0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLXN1Ym1pdC5zdWJtaXQtLW5ldy10YXNrJyk7XG4gIF9wcm9qZWN0U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLXByb2plY3QnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2FkZEhhbmRsZXJQcmlvcml0eSgpO1xuICAgIHRoaXMuX2FkZEhhbmRsZXJTaG93TW9kYWwoKTtcbiAgICB0aGlzLl9hZGRIYW5kbGVyQ2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgdXBsb2FkRGF0YShoYW5kbGVyLCBlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5uZXctdGFzay0tdGFzay10aXRsZSdcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdGFza0RldGFpbHMgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLm5ldy10YXNrLS10YXNrLWRldGFpbHMnXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2tEYXRlID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5uZXctdGFzay0tdGFzay1kYXRlJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnByaW9yaXR5LWxhYmVsLS1hY3RpdmUnXG4gICAgKT8udGV4dENvbnRlbnQ7XG5cbiAgICBjb25zdCB0YXNrUHJvamVjdCA9XG4gICAgICB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay1wcm9qZWN0JykudmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uQXJyID0gW3Rhc2tUaXRsZSwgdGFza0RldGFpbHMsIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHldO1xuXG4gICAgaWYgKHRoaXMuX3ZhbGlkYXRlVGFzayh2YWxpZGF0aW9uQXJyKSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IHRhc2tUaXRsZSxcbiAgICAgICAgZGV0YWlsczogdGFza0RldGFpbHMsXG4gICAgICAgIGRhdGU6IHRhc2tEYXRlLFxuICAgICAgICBwcmlvcml0eTogdGFza1ByaW9yaXR5LFxuICAgICAgICBwcm9qZWN0OiB0YXNrUHJvamVjdCxcbiAgICAgICAgaWQ6IGAke3Rhc2tEYXRlfS0tJHt0YXNrVGl0bGV9YCxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2NsZWFyRm9ybSgpO1xuICAgICAgdGhpcy50b2dnbGVXaW5kb3coKTtcbiAgICAgIGhhbmRsZXIoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlckZvcm1FcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEhhbmRsZXJBZGRUYXNrKGhhbmRsZXIpIHtcbiAgICB0aGlzLl9idG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLnVwbG9hZERhdGEuYmluZCh0aGlzLCBoYW5kbGVyKVxuICAgICk7XG4gIH1cblxuICBfYWRkSGFuZGxlclByaW9yaXR5KCkge1xuICAgIHRoaXMuX3ByaW9yaXR5TGFiZWxzLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5fdG9nZ2xlUHJpb3JpdHkuYmluZCh0aGlzKVxuICAgICk7XG4gIH1cblxuICBfdG9nZ2xlUHJpb3JpdHkoZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctdGFzay0tdGFzay1wcmlvcml0eS1sYWJlbCcpKSByZXR1cm47XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctdGFzay0tdGFzay1wcmlvcml0eS1sYWJlbCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnKSk7XG5cbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJyk7XG4gIH1cblxuICBfdmFsaWRhdGVUYXNrKGFycikge1xuICAgIGNvbnN0IFt0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHldID0gYXJyO1xuICAgIGlmICghdGl0bGUgfHwgIWRhdGUgfHwgIXByaW9yaXR5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX3JlbmRlckZvcm1FcnJvcigpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgfVxuXG4gIHJlbmRlclByb2plY3RPcHRpb25zKHByb2plY3RzQXJyKSB7XG4gICAgY29uc3QgbWFya3VwID0gdGhpcy5fZ2VuZXJhdGVQcm9qT3B0aW9uc01hcmt1cChwcm9qZWN0c0Fycik7XG5cbiAgICB0aGlzLl9jbGVhclByb2plY3RPcHRpb25zKCk7XG5cbiAgICB0aGlzLl9wcm9qZWN0U2VsZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG1hcmt1cCk7XG4gIH1cblxuICBfZ2VuZXJhdGVQcm9qT3B0aW9uc01hcmt1cChwcm9qZWN0c0Fycikge1xuICAgIGNvbnN0IG1hcmt1cEFyciA9IFtdO1xuXG4gICAgcHJvamVjdHNBcnIuc2xpY2UoMSkuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICAgIG1hcmt1cEFyci5wdXNoKGBcbiAgICAgIDxvcHRpb24gdmFsdWU9XCIke3Byb2plY3QudGl0bGV9XCI+JHtwcm9qZWN0LnRpdGxlfTwvb3B0aW9uPlxuICAgIGApXG4gICAgKTtcblxuICAgIHJldHVybiBtYXJrdXBBcnIuam9pbignJyk7XG4gIH1cblxuICBfY2xlYXJQcm9qZWN0T3B0aW9ucygpIHtcbiAgICB0aGlzLl9wcm9qZWN0U2VsZWN0aW9uLmlubmVySFRNTCA9IGBcbiAgICA8b3B0aW9uIHZhbHVlPVwiSG9tZVwiPkhvbWU8L29wdGlvbj5cbiAgICBgO1xuICB9XG5cbiAgYWRkSGFuZGxlclJlbmRlclByb2plY3RzT25Gb3JtKGhhbmRsZXIpIHtcbiAgICB0aGlzLl9idG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWRkVGFza1ZpZXcoKTtcbiIsImltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuXG5jbGFzcyBEZXRhaWxzVmlldyBleHRlbmRzIE1vZGFsVmlldyB7XG4gIF9wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcbiAgX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tdGFzay1kZXRhaWxzJyk7XG4gIF9vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgX3Rhc2tEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc2hvd0RldGFpbHMoaGFuZGxlciwgZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWRldGFpbHMnKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmRhdGFzZXQuaWQ7XG5cbiAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuXG4gICAgaGFuZGxlcihpZCk7XG5cbiAgICB0aGlzLl9idG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLS1jbG9zZS1kZXRhaWxzLW1vZGFsJyk7XG4gICAgdGhpcy5fYWRkSGFuZGxlckNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIGFsbG93VGFza0VkaXQoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLS10YXNrLWRldGFpbHMnKS5kYXRhc2V0LmlkO1xuXG4gICAgdGhpcy5fY2xlYXIoKTtcblxuICAgIGhhbmRsZXIoaWQpO1xuXG4gICAgdGhpcy5fYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi0tY2xvc2UtZWRpdG9yLW1vZGFsJyk7XG4gICAgdGhpcy5fYWRkSGFuZGxlckNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIGRlbGV0ZVRhc2soaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5kYXRhc2V0LmlkO1xuXG4gICAgaGFuZGxlcihpZCk7XG4gIH1cblxuICBkZWxldGVUYXNrT25Nb2RhbChoYW5kbGVyLCBlKSB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcubW9kYWwtLXRhc2stZGV0YWlscycpLmRhdGFzZXQuaWQ7XG5cbiAgICBoYW5kbGVyKGlkKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJUYXNrRGV0YWlscyhoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93RGV0YWlscy5iaW5kKHRoaXMsIGhhbmRsZXIpKVxuICAgICAgKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJFZGl0VGFzayhoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzLS1pY29uLXdyYXBwZXIudGFzay1lZGl0JylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWxsb3dUYXNrRWRpdC5iaW5kKHRoaXMsIGhhbmRsZXIpKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJEZWxldGVUYXNrKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXRlcmlhbC1pY29ucy5pY29uLS1kZWxldGUudGFzay1kaXNwbGF5LS1pY29ucycpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVUYXNrLmJpbmQodGhpcywgaGFuZGxlcikpXG4gICAgICApO1xuICB9XG5cbiAgYWRkSGFuZGxlckRlbGV0ZVRhc2tPbk1vZGFsKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbHMtLWljb24td3JhcHBlci50YXNrLWRlbGV0ZScpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZVRhc2tPbk1vZGFsLmJpbmQodGhpcywgaGFuZGxlcikpO1xuICB9XG5cbiAgX2dlbmVyYXRlTWFya3VwKCkge1xuICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uLS1jbG9zZS1kZXRhaWxzLW1vZGFsXCI+IGNsb3NlIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay10aXRsZVwiPiR7dGhpcy5fZGF0YS50aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1kZXRhaWxzXCI+XG4gICAgICAgICAgJHt0aGlzLl9kYXRhLmRldGFpbHN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLWRhdGUtd3JhcHBlclwiPlxuICAgICAgICAgIER1ZSBkYXRlOlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLWRhdGVcIj4ke3RoaXMuX2RhdGEuZGF0ZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLXByaW9yaXR5LXdyYXBwZXJcIj5cbiAgICAgICAgICBQcmlvcml0eTpcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stcHJpb3JpdHkgdGFzay1kZXRhaWxzLS10YXNrLXByaW9yaXR5LSR7dGhpcy5fZGF0YS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfVwiXG4gICAgICAgICAgICA+JHt0aGlzLl9kYXRhLnByaW9yaXR5fTwvc3BhblxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1zdGF0dXMtd3JhcHBlclwiPlxuICAgICAgICAgIFN0YXR1czpcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stc3RhdHVzXCJcbiAgICAgICAgICAgID4ke1xuICAgICAgICAgICAgICB0aGlzLl9kYXRhLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAnQ29tcGxldGVkJyA6ICdPbi1nb2luZydcbiAgICAgICAgICAgIH08L3NwYW5cbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stcHJvamVjdC13cmFwcGVyXCI+XG4gICAgICAgICAgUHJvamVjdDpcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1wcm9qZWN0XCI+JHt0aGlzLl9kYXRhLnByb2plY3R9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLWVkaXRvci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0taWNvbi13cmFwcGVyIHRhc2stZWRpdFwiPlxuICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWVkaXQgdGFzay1kZXRhaWxzLS1pY29uc1wiPlxuICAgICAgICAgICAgICBtb2RlX2VkaXRcbiAgICAgICAgICAgIDwvc3Bhbj4gLS0+XG4gICAgICAgICAgICBFZGl0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0taWNvbi13cmFwcGVyIHRhc2stZGVsZXRlXCI+XG4gICAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tZGVsZXRlIHRhc2stZGV0YWlscy0taWNvbnNcIj5cbiAgICAgICAgICAgICAgZGVsZXRlXG4gICAgICAgICAgICA8L3NwYW4+IC0tPlxuICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQgPSB0aGlzLl9kYXRhLmlkO1xuXG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRGV0YWlsc1ZpZXcoKTtcbiIsImltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuXG5jbGFzcyBFZGl0UHJvamVjdFZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tdGFzay1kZXRhaWxzJyk7XG4gIF93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRhc2stZGV0YWlscycpO1xuICBfdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaXNwbGF5LS1wcm9qZWN0LXRpdGxlJyk7XG5cbiAgX2J0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24tLWNsb3NlLWVkaXRvci1tb2RhbCcpO1xuICBfYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdG9yLS1pY29uLXdyYXBwZXIudGFzay1zYXZlJyk7XG4gIF9idG5EZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0b3ItLWljb24td3JhcHBlci50YXNrLWRlbGV0ZScpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzaG93RWRpdG9yTW9kYWwoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcudGFzay1kaXNwbGF5LS1wcm9qZWN0LXRpdGxlJ1xuICAgICkudGV4dENvbnRlbnQ7XG5cbiAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuXG4gICAgaGFuZGxlcihpZCk7XG5cbiAgICB0aGlzLl9idG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLS1jbG9zZS1lZGl0b3ItbW9kYWwnKTtcbiAgICB0aGlzLl9hZGRIYW5kbGVyQ2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgc2F2ZUVkaXQoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcucHJvamVjdC1lZGl0b3ItLXByb2plY3QtdGl0bGUnXG4gICAgKS52YWx1ZTtcblxuICAgIGlmICh0aGlzLl92YWxpZGF0ZVRhc2socHJvamVjdFRpdGxlKSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IHByb2plY3RUaXRsZSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMudG9nZ2xlV2luZG93KCk7XG4gICAgICBoYW5kbGVyKHRoaXMuX3BhcmVudEVsZW1lbnQuZGF0YXNldC5pZCwgZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlckZvcm1FcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZVByb2plY3RPbk1vZGFsKGhhbmRsZXIsIGUpIHtcbiAgICAvLyBjb25zdCBpZCA9IHRoaXMuX3RpdGxlO1xuICAgIGNvbnN0IGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcudGFzay1kaXNwbGF5LS1wcm9qZWN0LXRpdGxlJ1xuICAgICkudGV4dENvbnRlbnQ7XG5cbiAgICBoYW5kbGVyKGlkKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJTaG93RWRpdG9yKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpc3BsYXktLXByb2plY3QtYnRuLWVkaXQnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93RWRpdG9yTW9kYWwuYmluZCh0aGlzLCBoYW5kbGVyKSk7XG4gIH1cblxuICBhZGRIYW5kbGVyU2F2ZUVkaXQoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLnByb2plY3QtZWRpdG9yLS1pY29uLXdyYXBwZXIucHJvamVjdC1zYXZlJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2F2ZUVkaXQuYmluZCh0aGlzLCBoYW5kbGVyKSk7XG4gIH1cblxuICBhZGRIYW5kbGVyRGVsZXRlUHJvamVjdE9uTW9kYWwoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLnByb2plY3QtZWRpdG9yLS1pY29uLXdyYXBwZXIucHJvamVjdC1kZWxldGUnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVQcm9qZWN0T25Nb2RhbC5iaW5kKHRoaXMsIGhhbmRsZXIpKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZU1hcmt1cCgpIHtcbiAgICAvLyA8ZGl2IGNsYXNzPVwibW9kYWwtLXRhc2stZGV0YWlsc21vZGFsLS10YXNrLWVkaXRvclwiPlxuICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uLS1jbG9zZS1lZGl0b3ItbW9kYWxcIj4gY2xvc2UgPC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzcz1cInByb2plY3QtZWRpdG9yLS1mb3JtLWVsZW1lbnQgcHJvamVjdC1lZGl0b3ItLXByb2plY3QtdGl0bGVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNhbXBsZSBUaXRsZVwiXG4gICAgICAgICAgdmFsdWU9XCIke3RoaXMuX2RhdGEudGl0bGV9XCJcbiAgICAgICAgICBtaW5sZW5ndGg9XCIxXCJcbiAgICAgICAgICBtYXhsZW5ndGg9XCI2MFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZWRpdG9yLS1wcm9qZWN0LWVkaXRvci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZWRpdG9yLS1pY29uLXdyYXBwZXIgcHJvamVjdC1zYXZlXCI+U2F2ZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWVkaXRvci0taWNvbi13cmFwcGVyIHByb2plY3QtZGVsZXRlXCI+RGVsZXRlPC9kaXY+XG4gICAgICAgIDwvZGl2PiBcbiAgICBgO1xuXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tcHJvamVjdC1lZGl0b3InKTtcblxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuZGF0YXNldC5pZCA9IHRoaXMuX2RhdGEudGl0bGU7XG5cbiAgICByZXR1cm4gbWFya3VwO1xuICB9XG5cbiAgX3ZhbGlkYXRlVGFzayh0aXRsZSkge1xuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfcmVuZGVyRm9ybUVycm9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdmb3JtIGVycm9yJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVkaXRQcm9qZWN0VmlldygpO1xuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcbmltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuaW1wb3J0IGFkZFRhc2tWaWV3IGZyb20gJy4vYWRkVGFza1ZpZXcnO1xuXG5jbGFzcyBFZGl0VGFza1ZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tdGFzay1kZXRhaWxzJyk7XG4gIF93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRhc2stZGV0YWlscycpO1xuICBfcHJvamVjdFNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stcHJvamVjdCcpO1xuXG4gIF9idG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLS1jbG9zZS1lZGl0b3ItbW9kYWwnKTtcbiAgX2J0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXRvci0taWNvbi13cmFwcGVyLnRhc2stc2F2ZScpO1xuICBfYnRuRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdG9yLS1pY29uLXdyYXBwZXIudGFzay1kZWxldGUnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc2hvd0VkaXRvck1vZGFsKGhhbmRsZXIsIGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZGF0YXNldC5pZDtcblxuICAgIHRoaXMudG9nZ2xlV2luZG93KCk7XG5cbiAgICBoYW5kbGVyKGlkKTtcblxuICAgIHRoaXMuX2J0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24tLWNsb3NlLWVkaXRvci1tb2RhbCcpO1xuICAgIHRoaXMuX2FkZEhhbmRsZXJDbG9zZU1vZGFsKCk7XG4gIH1cblxuICBzYXZlRWRpdChoYW5kbGVyLCBlKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy50YXNrLWVkaXRvci0tdGFzay10aXRsZSdcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdGFza0RldGFpbHMgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnRhc2stZWRpdG9yLS10YXNrLWRldGFpbHMnXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2tEYXRlID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy50YXNrLWVkaXRvci0tdGFzay1kYXRlJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnByaW9yaXR5LWxhYmVsLS1hY3RpdmUnXG4gICAgKT8udGV4dENvbnRlbnQ7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy50YXNrLWVkaXRvci0tdGFzay1zdGF0dXM6Y2hlY2tlZCdcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdGFza1Byb2plY3QgPVxuICAgICAgdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXByb2plY3QnKS52YWx1ZTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25BcnIgPSBbXG4gICAgICB0YXNrVGl0bGUsXG4gICAgICB0YXNrRGV0YWlscyxcbiAgICAgIHRhc2tEYXRlLFxuICAgICAgdGFza1ByaW9yaXR5LFxuICAgICAgdGFza1N0YXR1cyxcbiAgICAgIHRhc2tQcm9qZWN0LFxuICAgIF07XG5cbiAgICBpZiAodGhpcy5fdmFsaWRhdGVUYXNrKHZhbGlkYXRpb25BcnIpKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogdGFza1RpdGxlLFxuICAgICAgICBkZXRhaWxzOiB0YXNrRGV0YWlscyxcbiAgICAgICAgZGF0ZTogdGFza0RhdGUsXG4gICAgICAgIHByaW9yaXR5OiB0YXNrUHJpb3JpdHksXG4gICAgICAgIHN0YXR1czogdGFza1N0YXR1cyxcbiAgICAgICAgcHJvamVjdDogdGFza1Byb2plY3QsXG4gICAgICAgIGlkOiBgJHt0YXNrRGF0ZX0tLSR7dGFza1RpdGxlfWAsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuICAgICAgaGFuZGxlcih0aGlzLl9wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQsIGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJGb3JtRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVUYXNrT25Nb2RhbChoYW5kbGVyLCBlKSB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcubW9kYWwtLXRhc2stZGV0YWlscycpLmRhdGFzZXQuaWQ7XG5cbiAgICBoYW5kbGVyKGlkKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJTaG93RWRpdG9yKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXRlcmlhbC1pY29ucy5pY29uLS1lZGl0LnRhc2stZGlzcGxheS0taWNvbnMnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd0VkaXRvck1vZGFsLmJpbmQodGhpcywgaGFuZGxlcikpXG4gICAgICApO1xuICB9XG5cbiAgYWRkSGFuZGxlclNhdmVFZGl0KGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXRvci0taWNvbi13cmFwcGVyLnRhc2stc2F2ZScpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNhdmVFZGl0LmJpbmQodGhpcywgaGFuZGxlcikpO1xuICB9XG5cbiAgYWRkSGFuZGxlckRlbGV0ZVRhc2tPbk1vZGFsKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXRvci0taWNvbi13cmFwcGVyLnRhc2stZGVsZXRlJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlVGFza09uTW9kYWwuYmluZCh0aGlzLCBoYW5kbGVyKSk7XG4gIH1cblxuICBhZGRIYW5kbGVyUHJpb3JpdHkoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHktd3JhcHBlcicpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl90b2dnbGVQcmlvcml0eS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZU1hcmt1cCgpIHtcbiAgICAvLyA8ZGl2IGNsYXNzPVwibW9kYWwtLXRhc2stZGV0YWlsc21vZGFsLS10YXNrLWVkaXRvclwiPlxuICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uLS1jbG9zZS1lZGl0b3ItbW9kYWxcIj4gY2xvc2UgPC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS1mb3JtLWVsZW1lbnQgdGFzay1lZGl0b3ItLXRhc2stdGl0bGVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRpdGxlIGhlcmVcIlxuICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLl9kYXRhLnRpdGxlfVwiXG4gICAgICAgICAgbWlubGVuZ3RoPVwiMVwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiNjBcIlxuICAgICAgICAvPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS1mb3JtLWVsZW1lbnQgdGFzay1lZGl0b3ItLXRhc2stZGV0YWlsc1wiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGV0YWlscyBoZXJlXCJcbiAgICAgICAgICBtYXhsZW5ndGg9XCIyNDBcIlxuICAgICAgICA+JHt0aGlzLl9kYXRhLmRldGFpbHMgPyB0aGlzLl9kYXRhLmRldGFpbHMgOiAnJ308L3RleHRhcmVhPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1kYXRlLXdyYXBwZXJcIj5cbiAgICAgICAgICBEdWUgZGF0ZTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLWZvcm0tZWxlbWVudCB0YXNrLWVkaXRvci0tdGFzay1kYXRlXCJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLl9kYXRhLmRhdGV9XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHktd3JhcHBlclwiPlxuICAgICAgICAgIDxwIGZvcj1cInRhc2stZWRpdG9yLXByaW9yaXR5XCI+UHJpb3JpdHk6PC9wPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHkgcHJpb3JpdHktbG93XCJcbiAgICAgICAgICAgIG5hbWU9XCJ0YXNrLWVkaXRvci1wcmlvcml0eVwiXG4gICAgICAgICAgICB2YWx1ZT1cImxvd1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGZvcj1cInRhc2stZWRpdG9yLXByaW9yaXR5XCJcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHktbGFiZWwgcHJpb3JpdHktbGFiZWwtbG93ICR7XG4gICAgICAgICAgICAgIHRoaXMuX2RhdGEucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gJ2xvdydcbiAgICAgICAgICAgICAgICA/ICdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJ1xuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPkxvdzwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eSBwcmlvcml0eS1tZWRpdW1cIlxuICAgICAgICAgICAgbmFtZT1cInRhc2stZWRpdG9yLXByaW9yaXR5XCJcbiAgICAgICAgICAgIHZhbHVlPVwibWVkaXVtXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgZm9yPVwidGFzay1lZGl0b3ItcHJpb3JpdHlcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eS1sYWJlbCBwcmlvcml0eS1sYWJlbC1tZWRpdW0gJHtcbiAgICAgICAgICAgICAgdGhpcy5fZGF0YS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSAnbWVkaXVtJ1xuICAgICAgICAgICAgICAgID8gJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+TWVkaXVtPC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5IHByaW9yaXR5LWhpZ2hcIlxuICAgICAgICAgICAgbmFtZT1cInRhc2stZWRpdG9yLXByaW9yaXR5XCJcbiAgICAgICAgICAgIHZhbHVlPVwiaGlnaFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGZvcj1cInRhc2stZWRpdG9yLXByaW9yaXR5XCJcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHktbGFiZWwgcHJpb3JpdHktbGFiZWwtaGlnaCAke1xuICAgICAgICAgICAgICB0aGlzLl9kYXRhLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09ICdoaWdoJ1xuICAgICAgICAgICAgICAgID8gJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+SGlnaDwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1zdGF0dXMtd3JhcHBlclwiPlxuICAgICAgICAgIFN0YXR1czpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS1mb3JtLWVsZW1lbnQgdGFzay1lZGl0b3ItLXRhc2stc3RhdHVzXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0YXNrLWVkaXRvci1zdGF0dXNcIlxuICAgICAgICAgICAgdmFsdWU9XCJjb21wbGV0ZWRcIlxuICAgICAgICAgICAgJHt0aGlzLl9kYXRhLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAnY2hlY2tlZCcgOiAnJ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWVkaXRvci1zdGF0dXNcIiBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXN0YXR1cy1sYWJlbFwiXG4gICAgICAgICAgICA+Q29tcGxldGVkPC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS1mb3JtLWVsZW1lbnQgdGFzay1lZGl0b3ItLXRhc2stc3RhdHVzXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0YXNrLWVkaXRvci1zdGF0dXNcIlxuICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgJHt0aGlzLl9kYXRhLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAnJyA6ICdjaGVja2VkJ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWVkaXRvci1zdGF0dXNcIiBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXN0YXR1cy1sYWJlbFwiXG4gICAgICAgICAgICA+T24tZ29pbmc8L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1wcm9qZWN0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdC10YXNrLXByb2plY3RcIj5Qcm9qZWN0OjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZWRpdC10YXNrLXByb2plY3RcIiBpZD1cImVkaXQtdGFzay1wcm9qZWN0XCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHt0aGlzLl9kYXRhLnByb2plY3R9XCI+JHt0aGlzLl9kYXRhLnByb2plY3R9PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stZWRpdG9yLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1lZGl0b3ItLWljb24td3JhcHBlciB0YXNrLXNhdmVcIj5TYXZlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZWRpdG9yLS1pY29uLXdyYXBwZXIgdGFzay1kZWxldGVcIj5EZWxldGU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtLXRhc2stZWRpdG9yJyk7XG5cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQgPSB0aGlzLl9kYXRhLmlkO1xuXG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxuXG4gIF90b2dnbGVQcmlvcml0eShlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5LWxhYmVsJykpXG4gICAgICByZXR1cm47XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eS1sYWJlbCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnKSk7XG5cbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJyk7XG4gIH1cblxuICBfdmFsaWRhdGVUYXNrKGFycikge1xuICAgIGNvbnN0IFt0aXRsZSwgXywgZGF0ZSwgcHJpb3JpdHksIHN0YXR1c10gPSBhcnI7XG4gICAgaWYgKCF0aXRsZSB8fCAhZGF0ZSB8fCAhcHJpb3JpdHkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfcmVuZGVyRm9ybUVycm9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdmb3JtIGVycm9yJyk7XG4gIH1cblxuICByZW5kZXJQcm9qZWN0T3B0aW9ucyhwcm9qZWN0c0FyciwgdGFza1RvRWRpdCkge1xuICAgIGNvbnN0IG1hcmt1cCA9IHRoaXMuX2dlbmVyYXRlUHJvak9wdGlvbnNNYXJrdXAocHJvamVjdHNBcnIsIHRhc2tUb0VkaXQpO1xuXG4gICAgdGhpcy5fY2xlYXJQcm9qZWN0T3B0aW9ucyh0YXNrVG9FZGl0KTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcm9qZWN0JylcbiAgICAgIC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBtYXJrdXApO1xuICB9XG5cbiAgX2dlbmVyYXRlUHJvak9wdGlvbnNNYXJrdXAocHJvamVjdHNBcnIsIHRhc2spIHtcbiAgICBjb25zdCBtYXJrdXBBcnIgPSBbXTtcblxuICAgIHByb2plY3RzQXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmICh0YXNrLnByb2plY3QgIT09IHByb2plY3QudGl0bGUpIHtcbiAgICAgICAgbWFya3VwQXJyLnB1c2goYFxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7cHJvamVjdC50aXRsZX1cIj4ke3Byb2plY3QudGl0bGV9PC9vcHRpb24+XG4gICAgYCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFya3VwQXJyLmpvaW4oJycpO1xuICB9XG5cbiAgX2NsZWFyUHJvamVjdE9wdGlvbnModGFzaykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stcHJvamVjdCcpLmlubmVySFRNTCA9IGBcbiAgICA8b3B0aW9uIHZhbHVlPVwiJHt0YXNrLnByb2plY3R9XCI+JHt0YXNrLnByb2plY3R9PC9vcHRpb24+XG4gICAgYDtcbiAgfVxuXG4gIGFkZEhhbmRsZXJSZW5kZXJQcm9qZWN0c09uRm9ybShoYW5kbGVyLCB0YXNrKSB7XG4gICAgaGFuZGxlcih0YXNrKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRWRpdFRhc2tWaWV3KCk7XG4iLCJpbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcblxuY2xhc3MgRm9ybVZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWRkSGFuZGxlck1vZGFsU2lkZWJhcigpO1xuICB9XG5cbiAgdG9nZ2xlRm9ybURpc3BsYXkoZSkge1xuICAgIC8vIEhpZGUgYWxsIGZvcm1zXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50LWZvcm0nKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSk7XG5cbiAgICAvLyBFc3RhYmxpc2ggd2hpY2ggZm9ybSB0byBzaG93XG4gICAgY29uc3QgZm9ybVR5cGUgPSBBcnJheS5mcm9tKGUudGFyZ2V0LmNsYXNzTGlzdClbMV0uc3BsaXQoJ25ldy0nKVsxXTtcblxuICAgIC8vIEVtcGhhc2l6ZSBhY3RpdmUgbGFiZWxcbiAgICB0aGlzLl9zaWRlYmFyTGFiZWxzLmZvckVhY2goKGxhYmVsKSA9PlxuICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci0tbGFiZWwtYWN0aXZlJylcbiAgICApO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItLWxhYmVsLWFjdGl2ZScpO1xuXG4gICAgdGhpcy5fY2xlYXJGb3JtKCk7XG5cbiAgICAvLyBTaG93IGZvcm0gdG8gZGlzcGxheVxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGAuY29udGVudC1mb3JtLS1uZXctJHtmb3JtVHlwZX1gKVxuICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9XG5cbiAgYWRkSGFuZGxlck1vZGFsU2lkZWJhcigpIHtcbiAgICAvLyBDaGFuZ2VzIHRoZSBmb3JtIGRpc3BsYXlcbiAgICB0aGlzLl9zaWRlYmFyTGFiZWxzLmZvckVhY2goKGVsKSA9PlxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUZvcm1EaXNwbGF5LmJpbmQodGhpcykpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRm9ybVZpZXcoKTtcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsVmlldyBleHRlbmRzIFZpZXcge1xuICBfZXJyb3JNZXNzYWdlID0gJ0Zvcm0gaW5wdXQgaW52YWxpZCc7XG5cbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stLWNvbnRlbnQnKTtcbiAgX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tYWRkLXRhc2snKTtcbiAgX3NpZGViYXJMYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci0tbGFiZWwnKTtcbiAgX292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuXG4gIF9idG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi5hZGQtdGFzaycpO1xuICBfYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcubWF0ZXJpYWwtaWNvbnMuaWNvbi0tY2xvc2UtYWRkLW5ldy1tb2RhbCdcbiAgKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgdG9nZ2xlV2luZG93KCkge1xuICAgIHRoaXMuX292ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgdGhpcy5fd2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9XG5cbiAgX2FkZEhhbmRsZXJTaG93TW9kYWwoKSB7XG4gICAgLy8gU2hvd3Mvb3BlbnMgdGhlIG1vZGFsXG4gICAgdGhpcy5fYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlV2luZG93LmJpbmQodGhpcykpO1xuICB9XG5cbiAgX2FkZEhhbmRsZXJDbG9zZU1vZGFsKCkge1xuICAgIC8vIENsb3NlcyB0aGUgbW9kYWxcbiAgICB0aGlzLl9idG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlV2luZG93LmJpbmQodGhpcykpO1xuICAgIC8vIHRoaXMuX292ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZVdpbmRvdy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9jbGVhckZvcm0oKSB7XG4gICAgLy8gQ2xlYXIgdGFzayBmb3JtXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctdGFzay0tZm9ybS1lbGVtZW50JylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gKGVsLnZhbHVlID0gJycpKTtcblxuICAgIC8vIENsZWFyIHByb2plY3QgZm9ybVxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXByb2plY3QtLWZvcm0tZWxlbWVudCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IChlbC52YWx1ZSA9ICcnKSk7XG5cbiAgICAvLyBDbGVhciBub3RlIGZvcm1cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5ldy1ub3RlLS1mb3JtLWVsZW1lbnQnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiAoZWwudmFsdWUgPSAnJykpO1xuXG4gICAgLy8gQ2xlYXIgcHJpb3JpdHkgY2hvaWNlXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctdGFzay0tdGFzay1wcmlvcml0eS1sYWJlbCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnKSk7XG5cbiAgICAvLyBDbGVhciB0YXNrIGRhdGVcbiAgICBpZiAodGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stLXRhc2stZGF0ZScpKSB7XG4gICAgICB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay0tdGFzay1kYXRlJykudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNsYXNzIE5vdGVWaWV3IGV4dGVuZHMgVmlldyB7XG4gIF9wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlzcGxheScpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBfZ2VuZXJhdGVNYXJrdXAoKSB7XG4gICAgdGhpcy5fY2xlYXIoKTtcbiAgICBjb25zdCBldmVuSW5kaWNlcyA9IHRoaXMuX2RhdGEuZmlsdGVyKChub3RlLCBpbmRleCkgPT4gaW5kZXggJSAyID09PSAwKTtcbiAgICBjb25zdCBvZGRJbmRpY2VzID0gdGhpcy5fZGF0YS5maWx0ZXIoKG5vdGUsIGluZGV4KSA9PiBpbmRleCAlIDIgIT09IDApO1xuXG4gICAgbGV0IG1hcmt1cCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGlzcGxheS0tbm90ZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVzLWNvbnRhaW5lci0tY29sLTFcIj4ke2V2ZW5JbmRpY2VzXG4gICAgICAgICAgICAubWFwKHRoaXMuX2dlbmVyYXRlTm90ZU1hcmt1cClcbiAgICAgICAgICAgIC5qb2luKCcnKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZXMtY29udGFpbmVyLS1jb2wtMlwiPiR7b2RkSW5kaWNlc1xuICAgICAgICAgICAgLm1hcCh0aGlzLl9nZW5lcmF0ZU5vdGVNYXJrdXApXG4gICAgICAgICAgICAuam9pbignJyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIFxuICAgIGA7XG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxuXG4gIF9nZW5lcmF0ZU5vdGVNYXJrdXAobm90ZSwgaW5kZXgpIHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJub3RlXCIgZGF0YS1pZD1cIiR7bm90ZS5pZH1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGUtLWljb24td3JhcHBlciBub3RlLWRlbGV0ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tZGVsZXRlLW5vdGVcIj4gY2xvc2UgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGUtLXRpdGxlXCIgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPiR7bm90ZS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGUtLWRldGFpbHNcIiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+JHtub3RlLmRldGFpbHN9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgYWRkSGFuZGxlckRlbGV0ZU5vdGUoaGFuZGxlcikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RlJykuZm9yRWFjaCgoZWwpID0+XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLS1kZWxldGUtbm90ZScpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcubm90ZScpLmRhdGFzZXQuaWQ7XG5cbiAgICAgICAgaGFuZGxlcihpZCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBhZGRIYW5kbGVyUGVyc2lzdE5vdGVUaXRsZShoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vdGUtLXRpdGxlJykuZm9yRWFjaCgoZWwpID0+XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLm5vdGUnKS5kYXRhc2V0LmlkO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgbmV3SUQgPSBgJHt2YWx1ZX0tLSR7ZGF0ZS5nZXRUaW1lKCl9YDtcblxuICAgICAgICBoYW5kbGVyKGlkLCBuZXdJRCwgdmFsdWUpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgYWRkSGFuZGxlclBlcnNpc3ROb3RlRGV0YWlsKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm90ZS0tZGV0YWlscycpLmZvckVhY2goKGVsKSA9PlxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5ub3RlJykuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC5pbm5lclRleHQ7XG5cbiAgICAgICAgaGFuZGxlcihpZCwgdmFsdWUpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOb3RlVmlldygpO1xuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcbmltcG9ydCBkZXRhaWxzVmlldyBmcm9tICcuL2RldGFpbHNWaWV3JztcblxuY2xhc3MgUHJvamVjdFZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtc3ViZGl2LnByb2plY3QtLWhlYWRlcicpO1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpc3BsYXknKTtcbiAgX3RpdGxlID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZU1hcmt1cCh0aXRsZSkge1xuICAgIGNvbnN0IG1hcmt1cCA9IGA8ZGl2IGNsYXNzPVwidGFzay1kaXNwbGF5LS1wcm9qZWN0LXRpdGxlXCI+JHt0aXRsZX08L2Rpdj4gXG4gICAgICAke3RoaXMuX2RhdGEubWFwKHRoaXMuX2dlbmVyYXRlVGFza01hcmt1cCkuam9pbignJyl9IFxuICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktLXByb2plY3QtYnRuLWVkaXQgYnRuXCI+RWRpdCBQcm9qZWN0PC9kaXY+YDtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9XG5cbiAgX2dlbmVyYXRlVGFza01hcmt1cCh0YXNrKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2sgcHJpb3JpdHktJHt0YXNrLnByaW9yaXR5LnRvTG93ZXJDYXNlKCl9XCIgZGF0YS1pZD1cIiR7XG4gICAgICB0YXNrLmlkXG4gICAgfVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNoZWNrYm94ICR7XG4gICAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAndGFzay1jaGVja2JveC0tY2hlY2tlZCcgOiAnJ1xuICAgICAgICAgIH1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay10aXRsZSAke1xuICAgICAgICAgICAgdGFzay5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gJ3Rhc2stLWNvbXBsZXRlZCcgOiAnJ1xuICAgICAgICAgIH1cIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlsc1wiPkRldGFpbHM8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kYXRlXCI+JHt0YXNrLmRhdGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGlzcGxheS0taWNvbi13cmFwcGVyIHRhc2stZWRpdFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uLS1lZGl0IHRhc2stZGlzcGxheS0taWNvbnNcIj4gbW9kZV9lZGl0IDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kaXNwbGF5LS1pY29uLXdyYXBwZXIgdGFzay1kZWxldGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tZGVsZXRlIHRhc2stZGlzcGxheS0taWNvbnNcIj4gZGVsZXRlIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvamVjdFZpZXcoKTtcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNsYXNzIFNpZGViYXJWaWV3IGV4dGVuZHMgVmlldyB7XG4gIF93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJhcicpO1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtc3ViZGl2LnByb2plY3QtLWhlYWRlcicpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBfZ2VuZXJhdGVNYXJrdXAoKSB7XG4gICAgdGhpcy5fY2xlYXIoKTtcbiAgICBjb25zdCBtYXJrdXAgPSB0aGlzLl9kYXRhLm1hcCh0aGlzLl9nZW5lcmF0ZVByb2plY3RNYXJrdXApLmpvaW4oJycpO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBfZ2VuZXJhdGVQcm9qZWN0TWFya3VwKHByb2plY3QpIHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgPHAgY2xhc3M9XCJuYXYtc3ViZGl2LS1jb250ZW50IHByb2plY3QtLXRpdGxlXCI+JHtwcm9qZWN0LnRpdGxlfTwvcD5gO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBhZGRIYW5kbGVyU2hvd1Byb2plY3QoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1zdWJkaXYtLWNvbnRlbnQucHJvamVjdC0tdGl0bGUnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd1Byb2plY3QuYmluZCh0aGlzLCBoYW5kbGVyKSlcbiAgICAgICk7XG4gIH1cblxuICBzaG93UHJvamVjdChoYW5kbGVyLCBlKSB7XG4gICAgY29uc3QgdGl0bGUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgIGhhbmRsZXIodGl0bGUpO1xuICB9XG5cbiAgYWRkSGFuZGxlclNob3dIb21lKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5uYXYtaGVhZGVyLmhlYWRlci0taG9tZScpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBoYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJTaG93QWxsVGFza3MoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLm5hdi1oZWFkZXIuaGVhZGVyLS1hbGwnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaXNwbGF5LS1wcm9qZWN0LXRpdGxlJykudGV4dENvbnRlbnQgPVxuICAgICAgICAgICdBbGwgVGFza3MnO1xuICAgICAgfSk7XG4gIH1cblxuICBhZGRIYW5kbGVyU2hvd05vdGVzKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5uYXYtaGVhZGVyLmhlYWRlci0tbm90ZXMnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaGFuZGxlcigpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNpZGViYXJWaWV3KCk7XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IGRldGFpbHNWaWV3IGZyb20gJy4vZGV0YWlsc1ZpZXcnO1xuXG5jbGFzcyBUYXNrVmlldyBleHRlbmRzIFZpZXcge1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpc3BsYXknKTtcbiAgX3Rhc2tEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgX2dlbmVyYXRlTWFya3VwKHByb2pUaXRsZSkge1xuICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1kaXNwbGF5LS1wcm9qZWN0LXRpdGxlXCI+JHtcbiAgICAgIHByb2pUaXRsZSA/IHByb2pUaXRsZSA6IHRoaXMuX2RhdGFbMF0gPyB0aGlzLl9kYXRhWzBdLnByb2plY3QgOiAnSG9tZSdcbiAgICB9PC9kaXY+IFxuICAgICR7dGhpcy5fZGF0YS5tYXAodGhpcy5fZ2VuZXJhdGVUYXNrTWFya3VwKS5qb2luKCcnKX1cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1kaXNwbGF5LS1wcm9qZWN0LWJ0bi1lZGl0IGJ0biAke1xuICAgICAgdGhpcy5fZGF0YVswXSA/ICcnIDogJ2hpZGRlbidcbiAgICB9XCI+RWRpdCBQcm9qZWN0PC9kaXY+YDtcblxuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBfZ2VuZXJhdGVUYXNrTWFya3VwKHRhc2spIHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzayBwcmlvcml0eS0ke3Rhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1cIiBkYXRhLWlkPVwiJHtcbiAgICAgIHRhc2suaWRcbiAgICB9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY2hlY2tib3ggJHtcbiAgICAgICAgICAgIHRhc2suc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICd0YXNrLWNoZWNrYm94LS1jaGVja2VkJyA6ICcnXG4gICAgICAgICAgfVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXRpdGxlICR7XG4gICAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAndGFzay0tY29tcGxldGVkJyA6ICcnXG4gICAgICAgICAgfVwiPiR7dGFzay50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzXCI+RGV0YWlsczwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRhdGVcIj4ke3Rhc2suZGF0ZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kaXNwbGF5LS1pY29uLXdyYXBwZXIgdGFzay1lZGl0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWVkaXQgdGFzay1kaXNwbGF5LS1pY29uc1wiPiBtb2RlX2VkaXQgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktLWljb24td3JhcHBlciB0YXNrLWRlbGV0ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uLS1kZWxldGUgdGFzay1kaXNwbGF5LS1pY29uc1wiPiBkZWxldGUgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGVkKGhhbmRsZXIsIGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1jaGVja2JveCcpKSByZXR1cm47XG5cbiAgICBjb25zdCB0YXNrVG9NYXJrID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKTtcbiAgICBjb25zdCBpZCA9IHRhc2tUb01hcmsuZGF0YXNldC5pZDtcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2stY2hlY2tib3gtLWNoZWNrZWQnKTtcblxuICAgIHRhc2tUb01hcmsucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKS5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrLS1jb21wbGV0ZWQnKTtcblxuICAgIGhhbmRsZXIoaWQpO1xuICB9XG5cbiAgYWRkSGFuZGxlclRvZ2dsZUNvbXBsZXRlZChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVDb21wbGV0ZWQuYmluZCh0aGlzLCBoYW5kbGVyKSlcbiAgICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRhc2tWaWV3KCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICBfZGF0YTtcblxuICByZW5kZXIoZGF0YSwgb3RoZXIpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICBjb25zdCBtYXJrdXAgPSB0aGlzLl9nZW5lcmF0ZU1hcmt1cChvdGhlcik7XG5cbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcbiAgfVxuXG4gIHJlbmRlckVycm9yKE1lc3NhZ2UgPSB0aGlzLl9lcnJvck1lc3NhZ2UpIHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgPGRpdiBjbGFzcz1cImVycm9yXCI+XG4gICAgPHA+JHttZXNzYWdlfTwvcD5cbiAgICA8L2Rpdj5gO1xuXG4gICAgdGhpcy5fY2xlYXIoKTtcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG1hcmt1cCk7XG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIG1vZGVsIGZyb20gJy4vbW9kZWwnO1xuXG5pbXBvcnQgYWRkVGFza1ZpZXcgZnJvbSAnLi92aWV3cy9hZGRUYXNrVmlldyc7XG5pbXBvcnQgYWRkUHJvamVjdFZpZXcgZnJvbSAnLi92aWV3cy9hZGRQcm9qZWN0Vmlldyc7XG5pbXBvcnQgYWRkTm90ZVZpZXcgZnJvbSAnLi92aWV3cy9hZGROb3RlVmlldyc7XG5cbmltcG9ydCBzaWRlYmFyVmlldyBmcm9tICcuL3ZpZXdzL3NpZGViYXJWaWV3JztcbmltcG9ydCB0YXNrVmlldyBmcm9tICcuL3ZpZXdzL3Rhc2tWaWV3JztcbmltcG9ydCBkZXRhaWxzVmlldyBmcm9tICcuL3ZpZXdzL2RldGFpbHNWaWV3JztcbmltcG9ydCBwcm9qZWN0VmlldyBmcm9tICcuL3ZpZXdzL3Byb2plY3RWaWV3JztcbmltcG9ydCBmb3JtVmlldyBmcm9tICcuL3ZpZXdzL2Zvcm1WaWV3JztcbmltcG9ydCBtb2RhbFZpZXcgZnJvbSAnLi92aWV3cy9tb2RhbFZpZXcnO1xuXG5pbXBvcnQgZWRpdFRhc2tWaWV3IGZyb20gJy4vdmlld3MvZWRpdFRhc2tWaWV3JztcbmltcG9ydCBlZGl0UHJvamVjdFZpZXcgZnJvbSAnLi92aWV3cy9lZGl0UHJvamVjdFZpZXcnO1xuaW1wb3J0IG5vdGVWaWV3IGZyb20gJy4vdmlld3Mvbm90ZVZpZXcnO1xuXG4vLyBJbmRleCBqcyBmb3IgdGhlIGFwcGxpY2F0aW9uIGxvZ2ljIChjb250cm9sbGVyKVxuXG4vLyBDaGFuZ2UgdG8gc2hvdyB0YXNrcyBpbiBzcGVjaWZpYyBwcm9qZWN0XG5jb25zdCBjb250cm9sU2hvd1Rhc2tzID0gZnVuY3Rpb24gKHByb2plY3QgPSAnSG9tZScsIG90aGVyKSB7XG4gIGNvbnN0IHRhc2tzVG9TaG93ID0gbW9kZWwuc3RhdGUudGFza3MuZmlsdGVyKFxuICAgICh0YXNrKSA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3RcbiAgKTtcbiAgdGFza1ZpZXcucmVuZGVyKHRhc2tzVG9TaG93LCBvdGhlcik7XG5cbiAgc2lkZWJhclZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLnByb2plY3RzLnNsaWNlKDEpKTtcblxuICBzaWRlYmFyVmlldy5hZGRIYW5kbGVyU2hvd1Byb2plY3QoY29udHJvbFNob3dQcm9qZWN0KTtcbn07XG5cbmNvbnN0IGNvbnRyb2xBZGRUYXNrID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgbW9kZWwuYWRkVGFzayhkYXRhKTtcblxuICBjb250cm9sU2hvd1Rhc2tzKGRhdGEucHJvamVjdCk7XG5cbiAgYWRkSGFuZGxlcnNUb1Rhc2soKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xBZGRQcm9qZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgbW9kZWwuYWRkUHJvamVjdChkYXRhKTtcblxuICBzaWRlYmFyVmlldy5yZW5kZXIobW9kZWwuc3RhdGUucHJvamVjdHMuc2xpY2UoMSkpO1xuXG4gIHNpZGViYXJWaWV3LmFkZEhhbmRsZXJTaG93QWxsVGFza3MoY29udHJvbFNob3dBbGxUYXNrcyk7XG4gIHNpZGViYXJWaWV3LmFkZEhhbmRsZXJTaG93UHJvamVjdChjb250cm9sU2hvd1Byb2plY3QpO1xufTtcblxuY29uc3QgY29udHJvbEFkZE5vdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBtb2RlbC5hZGROb3RlKGRhdGEpO1xuXG4gIG5vdGVWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS5ub3Rlcyk7XG59O1xuXG5jb25zdCBjb250cm9sU2hvd1Byb2plY3RzT25Gb3JtID0gZnVuY3Rpb24gKCkge1xuICBhZGRUYXNrVmlldy5yZW5kZXJQcm9qZWN0T3B0aW9ucyhtb2RlbC5zdGF0ZS5wcm9qZWN0cyk7XG59O1xuXG5jb25zdCBjb250cm9sU2hvd1Byb2plY3RzT25FZGl0b3IgPSBmdW5jdGlvbiAodGFza1RvRWRpdCkge1xuICBlZGl0VGFza1ZpZXcucmVuZGVyUHJvamVjdE9wdGlvbnMobW9kZWwuc3RhdGUucHJvamVjdHMsIHRhc2tUb0VkaXQpO1xufTtcblxuY29uc3QgY29udHJvbFNob3dBbGxUYXNrcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGFza1ZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLnRhc2tzKTtcbiAgYWRkSGFuZGxlcnNUb1Rhc2soKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xEZWxldGVUYXNrID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IHByb2plY3RUb1Nob3cgPSBnZXRQcm9qZWN0QmFzZWRPbklEKGlkKTtcblxuICBtb2RlbC5kZWxldGVUYXNrKGlkKTtcblxuICBjb250cm9sU2hvd1Rhc2tzKHByb2plY3RUb1Nob3cpO1xuXG4gIGFkZEhhbmRsZXJzVG9UYXNrKCk7XG59O1xuXG5jb25zdCBjb250cm9sRGVsZXRlVGFza09uTW9kYWwgPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3QgcHJvamVjdFRvU2hvdyA9IGdldFByb2plY3RCYXNlZE9uSUQoaWQpO1xuXG4gIG1vZGVsLmRlbGV0ZVRhc2soaWQpO1xuXG4gIGRldGFpbHNWaWV3LnRvZ2dsZVdpbmRvdygpO1xuXG4gIGNvbnRyb2xTaG93VGFza3MocHJvamVjdFRvU2hvdyk7XG5cbiAgYWRkSGFuZGxlcnNUb1Rhc2soKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xEZWxldGVQcm9qZWN0T25Nb2RhbCA9IGZ1bmN0aW9uIChpZCkge1xuICBtb2RlbC5kZWxldGVQcm9qZWN0KGlkKTtcblxuICBlZGl0UHJvamVjdFZpZXcudG9nZ2xlV2luZG93KCk7XG5cbiAgY29udHJvbFNob3dUYXNrcygpO1xuICBhZGRIYW5kbGVyc1RvVGFzaygpO1xufTtcblxuY29uc3QgY29udHJvbFNhdmVFZGl0VGFzayA9IGZ1bmN0aW9uIChpZCwgcmVwbGFjZW1lbnQpIHtcbiAgbW9kZWwudXBkYXRlVGFzayhpZCwgcmVwbGFjZW1lbnQpO1xuXG4gIGNvbnRyb2xTaG93VGFza3MocmVwbGFjZW1lbnQucHJvamVjdCk7XG4gIGFkZEhhbmRsZXJzVG9UYXNrKCk7XG59O1xuXG5jb25zdCBjb250cm9sU2F2ZUVkaXRQcm9qZWN0ID0gZnVuY3Rpb24gKGlkLCByZXBsYWNlbWVudCkge1xuICBtb2RlbC51cGRhdGVQcm9qZWN0KGlkLCByZXBsYWNlbWVudCk7XG5cbiAgY29udHJvbFNob3dUYXNrcyhyZXBsYWNlbWVudC50aXRsZSwgcmVwbGFjZW1lbnQudGl0bGUpO1xuXG4gIC8vIFVwZGF0ZSBzaWRlYmFyIHByb2plY3RzXG4gIHNpZGViYXJWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS5wcm9qZWN0cy5zbGljZSgxKSk7XG5cbiAgLy8gQWRkIGhhbmRsZXJzIHRvIHNpZGViYXIgcHJvamVjdHNcbiAgc2lkZWJhclZpZXcuYWRkSGFuZGxlclNob3dQcm9qZWN0KGNvbnRyb2xTaG93UHJvamVjdCk7XG5cbiAgLy8gQWRkIGhhbmRsZXJzIHRvIGFsbCB0YXNrc1xuICBhZGRIYW5kbGVyc1RvVGFzaygpO1xuXG4gIC8vIEFkZCBoYW5kbGVyIHRvIHByb2plY3QgZWRpdG9yXG4gIGVkaXRQcm9qZWN0Vmlldy5hZGRIYW5kbGVyU2hvd0VkaXRvcihjb250cm9sRWRpdFByb2plY3QpO1xufTtcblxuY29uc3QgY29udHJvbEVkaXRUYXNrID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IHRhc2tUb0VkaXQgPSBtb2RlbC5zdGF0ZS50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG5cbiAgZWRpdFRhc2tWaWV3LnJlbmRlcih0YXNrVG9FZGl0KTtcblxuICBlZGl0VGFza1ZpZXcuYWRkSGFuZGxlclJlbmRlclByb2plY3RzT25Gb3JtKFxuICAgIGNvbnRyb2xTaG93UHJvamVjdHNPbkVkaXRvcixcbiAgICB0YXNrVG9FZGl0XG4gICk7XG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyU2F2ZUVkaXQoY29udHJvbFNhdmVFZGl0VGFzayk7XG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyRGVsZXRlVGFza09uTW9kYWwoY29udHJvbERlbGV0ZVRhc2tPbk1vZGFsKTtcbiAgZWRpdFRhc2tWaWV3LmFkZEhhbmRsZXJQcmlvcml0eSgpO1xufTtcblxuY29uc3QgY29udHJvbFNob3dEZXRhaWxzID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IHRhc2tUb1Nob3cgPSBtb2RlbC5zdGF0ZS50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG5cbiAgZGV0YWlsc1ZpZXcucmVuZGVyKHRhc2tUb1Nob3cpO1xuXG4gIGRldGFpbHNWaWV3LmFkZEhhbmRsZXJFZGl0VGFzayhjb250cm9sRWRpdFRhc2spO1xuICBkZXRhaWxzVmlldy5hZGRIYW5kbGVyRGVsZXRlVGFza09uTW9kYWwoY29udHJvbERlbGV0ZVRhc2tPbk1vZGFsKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xUb2dnbGVDb21wbGV0ZWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgbW9kZWwudG9nZ2xlVGFza0NvbXBsZXRlKGlkKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xTaG93SG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdGFza3NBdEhvbWUgPSBtb2RlbC5zdGF0ZS50YXNrcy5maWx0ZXIoXG4gICAgKHRhc2spID0+IHRhc2sucHJvamVjdC50b0xvd2VyQ2FzZSgpID09PSAnaG9tZSdcbiAgKTtcblxuICB0YXNrVmlldy5yZW5kZXIodGFza3NBdEhvbWUpO1xuICBhZGRIYW5kbGVyc1RvVGFzaygpO1xuXG4gIHNpZGViYXJWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS5wcm9qZWN0cy5zbGljZSgxKSk7XG5cbiAgc2lkZWJhclZpZXcuYWRkSGFuZGxlclNob3dQcm9qZWN0KGNvbnRyb2xTaG93UHJvamVjdCk7XG59O1xuXG4vLyBJbml0IG9uIGVkaXQgZnVuY3Rpb25cbmNvbnN0IGNvbnRyb2xFZGl0UHJvamVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBwcm9qZWN0VG9FZGl0ID0gbW9kZWwuc3RhdGUucHJvamVjdHMuZmluZChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gaWRcbiAgKTtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0VG9FZGl0KTtcbiAgZWRpdFByb2plY3RWaWV3LnJlbmRlcihwcm9qZWN0VG9FZGl0KTtcblxuICBlZGl0UHJvamVjdFZpZXcuYWRkSGFuZGxlclNhdmVFZGl0KGNvbnRyb2xTYXZlRWRpdFByb2plY3QpO1xuICBlZGl0UHJvamVjdFZpZXcuYWRkSGFuZGxlckRlbGV0ZVByb2plY3RPbk1vZGFsKGNvbnRyb2xEZWxldGVQcm9qZWN0T25Nb2RhbCk7XG59O1xuXG4vLyBJbml0IG9uIHNob3cgZnVuY3Rpb25cbmNvbnN0IGNvbnRyb2xTaG93UHJvamVjdCA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICBjb25zdCBwcm9qZWN0ID0gbW9kZWwuc3RhdGUucHJvamVjdHMuZmluZChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gdGl0bGVcbiAgKTtcblxuICBjb25zdCB0YXNrc1RvU2hvdyA9IG1vZGVsLnN0YXRlLnRhc2tzLmZpbHRlcihcbiAgICAoZWwpID0+IGVsLnByb2plY3QgPT09IHByb2plY3QudGl0bGVcbiAgKTtcblxuICBwcm9qZWN0Vmlldy5yZW5kZXIodGFza3NUb1Nob3csIHRpdGxlKTtcbiAgZWRpdFByb2plY3RWaWV3LmFkZEhhbmRsZXJTaG93RWRpdG9yKGNvbnRyb2xFZGl0UHJvamVjdCk7XG4gIGFkZEhhbmRsZXJzVG9UYXNrKCk7XG59O1xuXG5jb25zdCBjb250cm9sRGVsZXRlTm90ZSA9IGZ1bmN0aW9uIChpZCkge1xuICBtb2RlbC5kZWxldGVOb3RlKGlkKTtcblxuICBub3RlVmlldy5yZW5kZXIobW9kZWwuc3RhdGUubm90ZXMpO1xuXG4gIGFkZEhhbmRsZXJzVG9Ob3RlKCk7XG59O1xuXG5jb25zdCBjb250cm9sUGVyc2lzdE5vdGVUaXRsZSA9IGZ1bmN0aW9uIChpZCwgbmV3SUQsIHZhbHVlKSB7XG4gIG1vZGVsLnVwZGF0ZU5vdGVUaXRsZShpZCwgbmV3SUQsIHZhbHVlKTtcblxuICBub3RlVmlldy5yZW5kZXIobW9kZWwuc3RhdGUubm90ZXMpO1xufTtcblxuY29uc3QgY29udHJvbFBlcnNpc3ROb3RlRGV0YWlsID0gZnVuY3Rpb24gKGlkLCB2YWx1ZSkge1xuICBtb2RlbC51cGRhdGVOb3RlRGV0YWlsKGlkLCB2YWx1ZSk7XG5cbiAgbm90ZVZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLm5vdGVzKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xTaG93Tm90ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIG5vdGVWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS5ub3Rlcyk7XG5cbiAgYWRkSGFuZGxlcnNUb05vdGUoKTtcbn07XG5cbmNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnRyb2xTaG93VGFza3MoKTtcbiAgYWRkVGFza1ZpZXcuYWRkSGFuZGxlckFkZFRhc2soY29udHJvbEFkZFRhc2spO1xuICBhZGRUYXNrVmlldy5hZGRIYW5kbGVyUmVuZGVyUHJvamVjdHNPbkZvcm0oY29udHJvbFNob3dQcm9qZWN0c09uRm9ybSk7XG4gIGFkZFByb2plY3RWaWV3LmFkZEhhbmRsZXJBZGRQcm9qZWN0KGNvbnRyb2xBZGRQcm9qZWN0KTtcbiAgYWRkTm90ZVZpZXcuYWRkSGFuZGxlckFkZE5vdGUoY29udHJvbEFkZE5vdGUpO1xuICBkZXRhaWxzVmlldy5hZGRIYW5kbGVyVGFza0RldGFpbHMoY29udHJvbFNob3dEZXRhaWxzKTtcbiAgZGV0YWlsc1ZpZXcuYWRkSGFuZGxlckRlbGV0ZVRhc2soY29udHJvbERlbGV0ZVRhc2spO1xuICBlZGl0VGFza1ZpZXcuYWRkSGFuZGxlclNob3dFZGl0b3IoY29udHJvbEVkaXRUYXNrKTtcbiAgdGFza1ZpZXcuYWRkSGFuZGxlclRvZ2dsZUNvbXBsZXRlZChjb250cm9sVG9nZ2xlQ29tcGxldGVkKTtcbiAgc2lkZWJhclZpZXcuYWRkSGFuZGxlclNob3dIb21lKGNvbnRyb2xTaG93SG9tZSk7XG4gIHNpZGViYXJWaWV3LmFkZEhhbmRsZXJTaG93QWxsVGFza3MoY29udHJvbFNob3dBbGxUYXNrcyk7XG4gIHNpZGViYXJWaWV3LmFkZEhhbmRsZXJTaG93Tm90ZXMoY29udHJvbFNob3dOb3Rlcyk7XG59O1xuXG5pbml0KCk7XG5cbi8vICBIRUxQRVIgRlVOQ1RJT05TXG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXJzVG9UYXNrKCkge1xuICBkZXRhaWxzVmlldy5hZGRIYW5kbGVyVGFza0RldGFpbHMoY29udHJvbFNob3dEZXRhaWxzKTtcbiAgZGV0YWlsc1ZpZXcuYWRkSGFuZGxlckRlbGV0ZVRhc2soY29udHJvbERlbGV0ZVRhc2spO1xuICBlZGl0VGFza1ZpZXcuYWRkSGFuZGxlclNob3dFZGl0b3IoY29udHJvbEVkaXRUYXNrKTtcbiAgdGFza1ZpZXcuYWRkSGFuZGxlclRvZ2dsZUNvbXBsZXRlZChjb250cm9sVG9nZ2xlQ29tcGxldGVkKTtcbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcnNUb05vdGUoKSB7XG4gIG5vdGVWaWV3LmFkZEhhbmRsZXJEZWxldGVOb3RlKGNvbnRyb2xEZWxldGVOb3RlKTtcbiAgbm90ZVZpZXcuYWRkSGFuZGxlclBlcnNpc3ROb3RlVGl0bGUoY29udHJvbFBlcnNpc3ROb3RlVGl0bGUpO1xuICBub3RlVmlldy5hZGRIYW5kbGVyUGVyc2lzdE5vdGVEZXRhaWwoY29udHJvbFBlcnNpc3ROb3RlRGV0YWlsKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdEJhc2VkT25JRCh0YXNrSUQpIHtcbiAgY29uc29sZS5sb2codGFza0lEKTtcbiAgY29uc3QgY2hvc2VuVGFzayA9IG1vZGVsLnN0YXRlLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJRCk7XG4gIGNvbnNvbGUubG9nKG1vZGVsLnN0YXRlLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJRCkpO1xuXG4gIHJldHVybiBjaG9zZW5UYXNrLnByb2plY3Q7XG59XG5cbi8qXG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXQgc2V0TmFtZSh2YWx1ZSkge1xuICAgIHRoaXMubmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGdldERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZTtcbiAgfVxuXG4gIHNldCBzZXREYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBzZXQgc2V0UHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgc2V0RGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbn1cblxuKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==