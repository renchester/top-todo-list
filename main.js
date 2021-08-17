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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDZFQUFpQztBQUNuQyxFQUFFLDRFQUFnQztBQUNsQyxFQUFFLDhFQUFpQztBQUNuQyxFQUFFLDhFQUFrQztBQUNwQyxFQUFFLDBFQUE4QjtBQUNoQyxFQUFFLDhFQUFrQztBQUNwQyxFQUFFLDJFQUErQjtBQUNqQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUUsNkVBQWlDO0FBQ25DLEVBQUUsNEVBQWdDO0FBQ2xDLEVBQUUsOEVBQWlDO0FBQ25DLEVBQUUsOEVBQWtDO0FBQ3BDOztBQUVBO0FBQ0EsRUFBRSwwRUFBNkI7QUFDL0IsRUFBRSxnRkFBbUM7QUFDckMsRUFBRSxpRkFBb0M7QUFDdEM7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixvREFBc0I7QUFDM0MsY0FBYyxvREFBc0I7O0FBRXBDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2FkZE5vdGVWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvYWRkUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9hZGRUYXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2RldGFpbHNWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvZWRpdFByb2plY3RWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvZWRpdFRhc2tWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvZm9ybVZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9tb2RhbFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9ub3RlVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3Byb2plY3RWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3Mvc2lkZWJhclZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy90YXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY29uc3Qgc3RhdGUgPSB7XG4gIHRhc2tzOiBbXSxcbiAgbm90ZXM6IFtdLFxuICBwcm9qZWN0czogW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnSG9tZScsXG4gICAgfSxcbiAgXSxcbiAgY3VyclRhc2s6IHt9LFxuICBjdXJyTm90ZToge30sXG59O1xuXG5jb25zdCBjcmVhdGVUYXNrID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICBkYXRlOiBkYXRhLmRhdGUsXG4gICAgcHJpb3JpdHk6IGRhdGEucHJpb3JpdHksXG4gICAgLi4uKGRhdGEucHJvamVjdCAmJiB7IHByb2plY3Q6IGRhdGEucHJvamVjdCB9KSxcbiAgICAuLi4oZGF0YS5kZXNjcmlwdGlvbiAmJiB7IGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIH0pLFxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVOb3RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAuLi4oZGF0YS5kZXNjcmlwdGlvbiAmJiB7IGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIH0pLFxuICB9O1xufTtcblxuY29uc3QgcGVyc2lzdFRhc2tzID0gZnVuY3Rpb24gKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS50YXNrcykpO1xufTtcblxuY29uc3QgcGVyc2lzdFByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5wcm9qZWN0cykpO1xufTtcblxuY29uc3QgcGVyc2lzdE5vdGVzID0gZnVuY3Rpb24gKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5ub3RlcykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAvLyBBZGQgdGFzayB0byBhcHAgc3RhdGVcbiAgc3RhdGUudGFza3MudW5zaGlmdCh0YXNrKTtcblxuICAvLyBTZXQgdG8gbG9jYWwgc3RvcmFnZVxuICBwZXJzaXN0VGFza3MoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgLy8gQWRkIHByb2plY3QgdG8gYXBwIHN0YXRlXG4gIHN0YXRlLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cbiAgLy8gU2V0IHRvIGxvY2FsIHN0b3JhZ2VcbiAgcGVyc2lzdFByb2plY3RzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkTm90ZSA9IGZ1bmN0aW9uIChub3RlKSB7XG4gIC8vIEFkZCBub3RlIHRvIGFwcCBzdGF0ZVxuICBzdGF0ZS5ub3Rlcy51bnNoaWZ0KG5vdGUpO1xuXG4gIC8vIFNldCB0byBsb2NhbCBzdG9yYWdlXG4gIHBlcnNpc3ROb3RlcygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRhc2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS50YXNrcy5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gaWQpO1xuICBzdGF0ZS50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIHBlcnNpc3RUYXNrcygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdElEKSB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvamVjdHMuZmluZEluZGV4KChlbCkgPT4gZWwudGl0bGUgPT09IHByb2plY3RJRCk7XG4gIHN0YXRlLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgY29uc3QgdGFza3NUb0RlbGV0ZSA9IHN0YXRlLnRhc2tzLmZpbHRlcigoZWwpID0+IGVsLnByb2plY3QgPT09IHByb2plY3RJRCk7XG4gIHRhc2tzVG9EZWxldGUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIGFycmF5KSB7XG4gICAgbGV0IGl0ZW1JbmRleCA9IHN0YXRlLnRhc2tzLmZpbmRJbmRleChcbiAgICAgICh0YXNrKSA9PiB0YXNrLnByb2plY3QgPT09IGl0ZW0ucHJvamVjdFxuICAgICk7XG5cbiAgICBzdGF0ZS50YXNrcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbiAgfSk7XG4gIHBlcnNpc3RQcm9qZWN0cygpO1xuICBwZXJzaXN0VGFza3MoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVOb3RlID0gZnVuY3Rpb24gKG5vdGVJRCkge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLm5vdGVzLmZpbmRJbmRleCgoZWwpID0+IGVsLmlkID09PSBub3RlSUQpO1xuXG4gIHN0YXRlLm5vdGVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgcGVyc2lzdE5vdGVzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVGFzayA9IGZ1bmN0aW9uIChpZCwgcmVwbGFjZW1lbnQpIHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS50YXNrcy5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gaWQpO1xuICBzdGF0ZS50YXNrcy5zcGxpY2UoaW5kZXgsIDEsIHJlcGxhY2VtZW50KTtcblxuICBwZXJzaXN0VGFza3MoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKGlkLCByZXBsYWNlbWVudCkge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2plY3RzLmZpbmRJbmRleCgoZWwpID0+IGVsLnRpdGxlID09PSBpZCk7XG4gIHN0YXRlLnByb2plY3RzLnNwbGljZShpbmRleCwgMSwgcmVwbGFjZW1lbnQpO1xuXG4gIGNvbnN0IHRhc2tzVG9VcGRhdGUgPSBzdGF0ZS50YXNrcy5maWx0ZXIoKGVsKSA9PiBlbC5wcm9qZWN0ID09PSBpZCk7XG5cbiAgdGFza3NUb1VwZGF0ZS5mb3JFYWNoKChlbCkgPT4gKGVsLnByb2plY3QgPSByZXBsYWNlbWVudC50aXRsZSkpO1xuXG4gIHBlcnNpc3RQcm9qZWN0cygpO1xuICBwZXJzaXN0VGFza3MoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVOb3RlVGl0bGUgPSBmdW5jdGlvbiAobm90ZUlELCBuZXdJRCwgcmVwbGFjZW1lbnQpIHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5ub3Rlcy5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gbm90ZUlEKTtcblxuICBzdGF0ZS5ub3Rlc1tpbmRleF0uaWQgPSBuZXdJRDtcbiAgc3RhdGUubm90ZXNbaW5kZXhdLnRpdGxlID0gcmVwbGFjZW1lbnQ7XG5cbiAgcGVyc2lzdE5vdGVzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTm90ZURldGFpbCA9IGZ1bmN0aW9uIChub3RlSUQsIHJlcGxhY2VtZW50KSB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUubm90ZXMuZmluZEluZGV4KChlbCkgPT4gZWwuaWQgPT09IG5vdGVJRCk7XG5cbiAgc3RhdGUubm90ZXNbaW5kZXhdLmRldGFpbHMgPSByZXBsYWNlbWVudDtcblxuICBwZXJzaXN0Tm90ZXMoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVUYXNrQ29tcGxldGUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS50YXNrcy5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gaWQpO1xuXG4gIHN0YXRlLnRhc2tzW2luZGV4XS5zdGF0dXMgPVxuICAgIHN0YXRlLnRhc2tzW2luZGV4XS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gJycgOiAnY29tcGxldGVkJztcblxuICBwZXJzaXN0VGFza3MoKTtcbn07XG5cbmNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGxvY2FsVGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKTtcbiAgY29uc3QgbG9jYWxQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xuICBjb25zdCBsb2NhbE5vdGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XG5cbiAgaWYgKGxvY2FsVGFza3MpIHtcbiAgICBzdGF0ZS50YXNrcyA9IEpTT04ucGFyc2UobG9jYWxUYXNrcyk7XG4gIH1cblxuICBpZiAobG9jYWxQcm9qZWN0cykge1xuICAgIHN0YXRlLnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFByb2plY3RzKTtcbiAgfVxuXG4gIGlmIChsb2NhbE5vdGVzKSB7XG4gICAgc3RhdGUubm90ZXMgPSBKU09OLnBhcnNlKGxvY2FsTm90ZXMpO1xuICB9XG59O1xuaW5pdCgpO1xuIiwiaW1wb3J0IE1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5pbXBvcnQgQWRkVGFza1ZpZXcgZnJvbSAnLi9hZGRUYXNrVmlldyc7XG5cbmNsYXNzIEFkZE5vdGVWaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgX2J0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLXN1Ym1pdC5zdWJtaXQtLW5ldy1ub3RlJyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHVwbG9hZERhdGEoaGFuZGxlciwgZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5vdGVUaXRsZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LW5vdGUtLW5vdGUtdGl0bGUnXG4gICAgKS52YWx1ZTtcbiAgICBjb25zdCBub3RlRGV0YWlscyA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LW5vdGUtLW5vdGUtZGV0YWlscydcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvbkFyciA9IFtub3RlVGl0bGUsIG5vdGVEZXRhaWxzXTtcblxuICAgIGlmICh0aGlzLl92YWxpZGF0ZVRhc2sodmFsaWRhdGlvbkFycikpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IG5vdGVUaXRsZSxcbiAgICAgICAgZGV0YWlsczogbm90ZURldGFpbHMsXG4gICAgICAgIGlkOiBgJHtub3RlVGl0bGV9LS0ke2RhdGUuZ2V0VGltZSgpfWAsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9jbGVhckZvcm0oKTtcbiAgICAgIHRoaXMudG9nZ2xlV2luZG93KCk7XG4gICAgICBoYW5kbGVyKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJGb3JtRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyRm9ybUVycm9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICB9XG5cbiAgX3ZhbGlkYXRlVGFzayhhcnIpIHtcbiAgICBjb25zdCBbdGl0bGUsIGRldGFpbHNdID0gYXJyO1xuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhZGRIYW5kbGVyQWRkTm90ZShoYW5kbGVyKSB7XG4gICAgdGhpcy5fYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy51cGxvYWREYXRhLmJpbmQodGhpcywgaGFuZGxlcilcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBZGROb3RlVmlldygpO1xuIiwiaW1wb3J0IE1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5cbmNsYXNzIEFkZFByb2plY3RWaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgX2J0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLXN1Ym1pdC5zdWJtaXQtLW5ldy1wcm9qZWN0Jyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHVwbG9hZERhdGEoaGFuZGxlciwgZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LXByb2plY3QtLXByb2plY3QtdGl0bGUnXG4gICAgKS52YWx1ZTtcblxuICAgIGlmICh0aGlzLl92YWxpZGF0ZVRhc2socHJvamVjdFRpdGxlKSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IHByb2plY3RUaXRsZSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2NsZWFyRm9ybSgpO1xuICAgICAgdGhpcy50b2dnbGVXaW5kb3coKTtcbiAgICAgIGhhbmRsZXIoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlckZvcm1FcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXJGb3JtRXJyb3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gIH1cblxuICBfdmFsaWRhdGVUYXNrKHRpdGxlKSB7XG4gICAgaWYgKCF0aXRsZSB8fCB0aXRsZS5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYWRkSGFuZGxlckFkZFByb2plY3QoaGFuZGxlcikge1xuICAgIHRoaXMuX2J0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMudXBsb2FkRGF0YS5iaW5kKHRoaXMsIGhhbmRsZXIpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWRkUHJvamVjdFZpZXcoKTtcbiIsImltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuXG5jbGFzcyBBZGRUYXNrVmlldyBleHRlbmRzIE1vZGFsVmlldyB7XG4gIF9wcmlvcml0eUxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay0tdGFzay1wcmlvcml0eS13cmFwcGVyJyk7XG4gIF9idG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1zdWJtaXQuc3VibWl0LS1uZXctdGFzaycpO1xuICBfcHJvamVjdFNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay1wcm9qZWN0Jyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9hZGRIYW5kbGVyUHJpb3JpdHkoKTtcbiAgICB0aGlzLl9hZGRIYW5kbGVyU2hvd01vZGFsKCk7XG4gICAgdGhpcy5fYWRkSGFuZGxlckNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIHVwbG9hZERhdGEoaGFuZGxlciwgZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LXRhc2stLXRhc2stdGl0bGUnXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5uZXctdGFzay0tdGFzay1kZXRhaWxzJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrRGF0ZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LXRhc2stLXRhc2stZGF0ZSdcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5wcmlvcml0eS1sYWJlbC0tYWN0aXZlJ1xuICAgICk/LnRleHRDb250ZW50O1xuXG4gICAgY29uc3QgdGFza1Byb2plY3QgPVxuICAgICAgdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2stcHJvamVjdCcpLnZhbHVlO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvbkFyciA9IFt0YXNrVGl0bGUsIHRhc2tEZXRhaWxzLCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5XTtcblxuICAgIGlmICh0aGlzLl92YWxpZGF0ZVRhc2sodmFsaWRhdGlvbkFycikpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiB0YXNrVGl0bGUsXG4gICAgICAgIGRldGFpbHM6IHRhc2tEZXRhaWxzLFxuICAgICAgICBkYXRlOiB0YXNrRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHRhc2tQcmlvcml0eSxcbiAgICAgICAgcHJvamVjdDogdGFza1Byb2plY3QsXG4gICAgICAgIGlkOiBgJHt0YXNrRGF0ZX0tLSR7dGFza1RpdGxlfWAsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9jbGVhckZvcm0oKTtcbiAgICAgIHRoaXMudG9nZ2xlV2luZG93KCk7XG4gICAgICBoYW5kbGVyKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJGb3JtRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBhZGRIYW5kbGVyQWRkVGFzayhoYW5kbGVyKSB7XG4gICAgdGhpcy5fYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy51cGxvYWREYXRhLmJpbmQodGhpcywgaGFuZGxlcilcbiAgICApO1xuICB9XG5cbiAgX2FkZEhhbmRsZXJQcmlvcml0eSgpIHtcbiAgICB0aGlzLl9wcmlvcml0eUxhYmVscy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuX3RvZ2dsZVByaW9yaXR5LmJpbmQodGhpcylcbiAgICApO1xuICB9XG5cbiAgX3RvZ2dsZVByaW9yaXR5KGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmV3LXRhc2stLXRhc2stcHJpb3JpdHktbGFiZWwnKSkgcmV0dXJuO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXRhc2stLXRhc2stcHJpb3JpdHktbGFiZWwnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJykpO1xuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwtLWFjdGl2ZScpO1xuICB9XG5cbiAgX3ZhbGlkYXRlVGFzayhhcnIpIHtcbiAgICBjb25zdCBbdGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5XSA9IGFycjtcbiAgICBpZiAoIXRpdGxlIHx8ICFkYXRlIHx8ICFwcmlvcml0eSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF9yZW5kZXJGb3JtRXJyb3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gIH1cblxuICByZW5kZXJQcm9qZWN0T3B0aW9ucyhwcm9qZWN0c0Fycikge1xuICAgIGNvbnN0IG1hcmt1cCA9IHRoaXMuX2dlbmVyYXRlUHJvak9wdGlvbnNNYXJrdXAocHJvamVjdHNBcnIpO1xuXG4gICAgdGhpcy5fY2xlYXJQcm9qZWN0T3B0aW9ucygpO1xuXG4gICAgdGhpcy5fcHJvamVjdFNlbGVjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBtYXJrdXApO1xuICB9XG5cbiAgX2dlbmVyYXRlUHJvak9wdGlvbnNNYXJrdXAocHJvamVjdHNBcnIpIHtcbiAgICBjb25zdCBtYXJrdXBBcnIgPSBbXTtcblxuICAgIHByb2plY3RzQXJyLnNsaWNlKDEpLmZvckVhY2goKHByb2plY3QpID0+XG4gICAgICBtYXJrdXBBcnIucHVzaChgXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qZWN0LnRpdGxlfVwiPiR7cHJvamVjdC50aXRsZX08L29wdGlvbj5cbiAgICBgKVxuICAgICk7XG5cbiAgICByZXR1cm4gbWFya3VwQXJyLmpvaW4oJycpO1xuICB9XG5cbiAgX2NsZWFyUHJvamVjdE9wdGlvbnMoKSB7XG4gICAgdGhpcy5fcHJvamVjdFNlbGVjdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgPG9wdGlvbiB2YWx1ZT1cIkhvbWVcIj5Ib21lPC9vcHRpb24+XG4gICAgYDtcbiAgfVxuXG4gIGFkZEhhbmRsZXJSZW5kZXJQcm9qZWN0c09uRm9ybShoYW5kbGVyKSB7XG4gICAgdGhpcy5fYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFkZFRhc2tWaWV3KCk7XG4iLCJpbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcblxuY2xhc3MgRGV0YWlsc1ZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tdGFzay1kZXRhaWxzJyk7XG4gIF93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRhc2stZGV0YWlscycpO1xuICBfb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gIF90YXNrRGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tdGFzay1kZXRhaWxzJyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHNob3dEZXRhaWxzKGhhbmRsZXIsIGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1kZXRhaWxzJykpIHJldHVybjtcblxuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5kYXRhc2V0LmlkO1xuXG4gICAgdGhpcy50b2dnbGVXaW5kb3coKTtcblxuICAgIGhhbmRsZXIoaWQpO1xuXG4gICAgdGhpcy5fYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi0tY2xvc2UtZGV0YWlscy1tb2RhbCcpO1xuICAgIHRoaXMuX2FkZEhhbmRsZXJDbG9zZU1vZGFsKCk7XG4gIH1cblxuICBhbGxvd1Rhc2tFZGl0KGhhbmRsZXIsIGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbC0tdGFzay1kZXRhaWxzJykuZGF0YXNldC5pZDtcblxuICAgIHRoaXMuX2NsZWFyKCk7XG5cbiAgICBoYW5kbGVyKGlkKTtcblxuICAgIHRoaXMuX2J0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24tLWNsb3NlLWVkaXRvci1tb2RhbCcpO1xuICAgIHRoaXMuX2FkZEhhbmRsZXJDbG9zZU1vZGFsKCk7XG4gIH1cblxuICBkZWxldGVUYXNrKGhhbmRsZXIsIGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZGF0YXNldC5pZDtcblxuICAgIGhhbmRsZXIoaWQpO1xuICB9XG5cbiAgZGVsZXRlVGFza09uTW9kYWwoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLS10YXNrLWRldGFpbHMnKS5kYXRhc2V0LmlkO1xuXG4gICAgaGFuZGxlcihpZCk7XG4gIH1cblxuICBhZGRIYW5kbGVyVGFza0RldGFpbHMoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKVxuICAgICAgLmZvckVhY2goKGVsKSA9PlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd0RldGFpbHMuYmluZCh0aGlzLCBoYW5kbGVyKSlcbiAgICAgICk7XG4gIH1cblxuICBhZGRIYW5kbGVyRWRpdFRhc2soaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscy0taWNvbi13cmFwcGVyLnRhc2stZWRpdCcpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFsbG93VGFza0VkaXQuYmluZCh0aGlzLCBoYW5kbGVyKSk7XG4gIH1cblxuICBhZGRIYW5kbGVyRGVsZXRlVGFzayhoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubWF0ZXJpYWwtaWNvbnMuaWNvbi0tZGVsZXRlLnRhc2stZGlzcGxheS0taWNvbnMnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlVGFzay5iaW5kKHRoaXMsIGhhbmRsZXIpKVxuICAgICAgKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJEZWxldGVUYXNrT25Nb2RhbChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzLS1pY29uLXdyYXBwZXIudGFzay1kZWxldGUnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVUYXNrT25Nb2RhbC5iaW5kKHRoaXMsIGhhbmRsZXIpKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZU1hcmt1cCgpIHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tY2xvc2UtZGV0YWlscy1tb2RhbFwiPiBjbG9zZSA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stdGl0bGVcIj4ke3RoaXMuX2RhdGEudGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stZGV0YWlsc1wiPlxuICAgICAgICAgICR7dGhpcy5fZGF0YS5kZXRhaWxzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1kYXRlLXdyYXBwZXJcIj5cbiAgICAgICAgICBEdWUgZGF0ZTpcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1kYXRlXCI+JHt0aGlzLl9kYXRhLmRhdGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1wcmlvcml0eS13cmFwcGVyXCI+XG4gICAgICAgICAgUHJpb3JpdHk6XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLXByaW9yaXR5IHRhc2stZGV0YWlscy0tdGFzay1wcmlvcml0eS0ke3RoaXMuX2RhdGEucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1cIlxuICAgICAgICAgICAgPiR7dGhpcy5fZGF0YS5wcmlvcml0eX08L3NwYW5cbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stc3RhdHVzLXdyYXBwZXJcIj5cbiAgICAgICAgICBTdGF0dXM6XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLXN0YXR1c1wiXG4gICAgICAgICAgICA+JHtcbiAgICAgICAgICAgICAgdGhpcy5fZGF0YS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gJ0NvbXBsZXRlZCcgOiAnT24tZ29pbmcnXG4gICAgICAgICAgICB9PC9zcGFuXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLXByb2plY3Qtd3JhcHBlclwiPlxuICAgICAgICAgIFByb2plY3Q6XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stcHJvamVjdFwiPiR7dGhpcy5fZGF0YS5wcm9qZWN0fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1lZGl0b3Itd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLWljb24td3JhcHBlciB0YXNrLWVkaXRcIj5cbiAgICAgICAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uLS1lZGl0IHRhc2stZGV0YWlscy0taWNvbnNcIj5cbiAgICAgICAgICAgICAgbW9kZV9lZGl0XG4gICAgICAgICAgICA8L3NwYW4+IC0tPlxuICAgICAgICAgICAgRWRpdFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLWljb24td3JhcHBlciB0YXNrLWRlbGV0ZVwiPlxuICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWRlbGV0ZSB0YXNrLWRldGFpbHMtLWljb25zXCI+XG4gICAgICAgICAgICAgIGRlbGV0ZVxuICAgICAgICAgICAgPC9zcGFuPiAtLT5cbiAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5kYXRhc2V0LmlkID0gdGhpcy5fZGF0YS5pZDtcblxuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IERldGFpbHNWaWV3KCk7XG4iLCJpbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcblxuY2xhc3MgRWRpdFByb2plY3RWaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRhc2stZGV0YWlscycpO1xuICBfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcbiAgX3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlzcGxheS0tcHJvamVjdC10aXRsZScpO1xuXG4gIF9idG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLS1jbG9zZS1lZGl0b3ItbW9kYWwnKTtcbiAgX2J0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXRvci0taWNvbi13cmFwcGVyLnRhc2stc2F2ZScpO1xuICBfYnRuRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdG9yLS1pY29uLXdyYXBwZXIudGFzay1kZWxldGUnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc2hvd0VkaXRvck1vZGFsKGhhbmRsZXIsIGUpIHtcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnRhc2stZGlzcGxheS0tcHJvamVjdC10aXRsZSdcbiAgICApLnRleHRDb250ZW50O1xuXG4gICAgdGhpcy50b2dnbGVXaW5kb3coKTtcblxuICAgIGhhbmRsZXIoaWQpO1xuXG4gICAgdGhpcy5fYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi0tY2xvc2UtZWRpdG9yLW1vZGFsJyk7XG4gICAgdGhpcy5fYWRkSGFuZGxlckNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIHNhdmVFZGl0KGhhbmRsZXIsIGUpIHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnByb2plY3QtZWRpdG9yLS1wcm9qZWN0LXRpdGxlJ1xuICAgICkudmFsdWU7XG5cbiAgICBpZiAodGhpcy5fdmFsaWRhdGVUYXNrKHByb2plY3RUaXRsZSkpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiBwcm9qZWN0VGl0bGUsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuICAgICAgaGFuZGxlcih0aGlzLl9wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQsIGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJGb3JtRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVQcm9qZWN0T25Nb2RhbChoYW5kbGVyLCBlKSB7XG4gICAgLy8gY29uc3QgaWQgPSB0aGlzLl90aXRsZTtcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnRhc2stZGlzcGxheS0tcHJvamVjdC10aXRsZSdcbiAgICApLnRleHRDb250ZW50O1xuXG4gICAgaGFuZGxlcihpZCk7XG4gIH1cblxuICBhZGRIYW5kbGVyU2hvd0VkaXRvcihoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaXNwbGF5LS1wcm9qZWN0LWJ0bi1lZGl0JylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd0VkaXRvck1vZGFsLmJpbmQodGhpcywgaGFuZGxlcikpO1xuICB9XG5cbiAgYWRkSGFuZGxlclNhdmVFZGl0KGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWVkaXRvci0taWNvbi13cmFwcGVyLnByb2plY3Qtc2F2ZScpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNhdmVFZGl0LmJpbmQodGhpcywgaGFuZGxlcikpO1xuICB9XG5cbiAgYWRkSGFuZGxlckRlbGV0ZVByb2plY3RPbk1vZGFsKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWVkaXRvci0taWNvbi13cmFwcGVyLnByb2plY3QtZGVsZXRlJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlUHJvamVjdE9uTW9kYWwuYmluZCh0aGlzLCBoYW5kbGVyKSk7XG4gIH1cblxuICBfZ2VuZXJhdGVNYXJrdXAoKSB7XG4gICAgLy8gPGRpdiBjbGFzcz1cIm1vZGFsLS10YXNrLWRldGFpbHNtb2RhbC0tdGFzay1lZGl0b3JcIj5cbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tY2xvc2UtZWRpdG9yLW1vZGFsXCI+IGNsb3NlIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3M9XCJwcm9qZWN0LWVkaXRvci0tZm9ybS1lbGVtZW50IHByb2plY3QtZWRpdG9yLS1wcm9qZWN0LXRpdGxlXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTYW1wbGUgVGl0bGVcIlxuICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLl9kYXRhLnRpdGxlfVwiXG4gICAgICAgICAgbWlubGVuZ3RoPVwiMVwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiNjBcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWVkaXRvci0tcHJvamVjdC1lZGl0b3Itd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWVkaXRvci0taWNvbi13cmFwcGVyIHByb2plY3Qtc2F2ZVwiPlNhdmU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1lZGl0b3ItLWljb24td3JhcHBlciBwcm9qZWN0LWRlbGV0ZVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICA8L2Rpdj4gXG4gICAgYDtcblxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtLXByb2plY3QtZWRpdG9yJyk7XG5cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQgPSB0aGlzLl9kYXRhLnRpdGxlO1xuXG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxuXG4gIF92YWxpZGF0ZVRhc2sodGl0bGUpIHtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX3JlbmRlckZvcm1FcnJvcigpIHtcbiAgICBjb25zb2xlLmxvZygnZm9ybSBlcnJvcicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFZGl0UHJvamVjdFZpZXcoKTtcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcbmltcG9ydCBhZGRUYXNrVmlldyBmcm9tICcuL2FkZFRhc2tWaWV3JztcblxuY2xhc3MgRWRpdFRhc2tWaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRhc2stZGV0YWlscycpO1xuICBfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcbiAgX3Byb2plY3RTZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXByb2plY3QnKTtcblxuICBfYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi0tY2xvc2UtZWRpdG9yLW1vZGFsJyk7XG4gIF9idG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0b3ItLWljb24td3JhcHBlci50YXNrLXNhdmUnKTtcbiAgX2J0bkRlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXRvci0taWNvbi13cmFwcGVyLnRhc2stZGVsZXRlJyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHNob3dFZGl0b3JNb2RhbChoYW5kbGVyLCBlKSB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmRhdGFzZXQuaWQ7XG5cbiAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuXG4gICAgaGFuZGxlcihpZCk7XG5cbiAgICB0aGlzLl9idG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLS1jbG9zZS1lZGl0b3ItbW9kYWwnKTtcbiAgICB0aGlzLl9hZGRIYW5kbGVyQ2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgc2F2ZUVkaXQoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcudGFzay1lZGl0b3ItLXRhc2stdGl0bGUnXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy50YXNrLWVkaXRvci0tdGFzay1kZXRhaWxzJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrRGF0ZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcudGFzay1lZGl0b3ItLXRhc2stZGF0ZSdcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5wcmlvcml0eS1sYWJlbC0tYWN0aXZlJ1xuICAgICk/LnRleHRDb250ZW50O1xuXG4gICAgY29uc3QgdGFza1N0YXR1cyA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcudGFzay1lZGl0b3ItLXRhc2stc3RhdHVzOmNoZWNrZWQnXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2tQcm9qZWN0ID1cbiAgICAgIHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcm9qZWN0JykudmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uQXJyID0gW1xuICAgICAgdGFza1RpdGxlLFxuICAgICAgdGFza0RldGFpbHMsXG4gICAgICB0YXNrRGF0ZSxcbiAgICAgIHRhc2tQcmlvcml0eSxcbiAgICAgIHRhc2tTdGF0dXMsXG4gICAgICB0YXNrUHJvamVjdCxcbiAgICBdO1xuXG4gICAgaWYgKHRoaXMuX3ZhbGlkYXRlVGFzayh2YWxpZGF0aW9uQXJyKSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IHRhc2tUaXRsZSxcbiAgICAgICAgZGV0YWlsczogdGFza0RldGFpbHMsXG4gICAgICAgIGRhdGU6IHRhc2tEYXRlLFxuICAgICAgICBwcmlvcml0eTogdGFza1ByaW9yaXR5LFxuICAgICAgICBzdGF0dXM6IHRhc2tTdGF0dXMsXG4gICAgICAgIHByb2plY3Q6IHRhc2tQcm9qZWN0LFxuICAgICAgICBpZDogYCR7dGFza0RhdGV9LS0ke3Rhc2tUaXRsZX1gLFxuICAgICAgfTtcblxuICAgICAgdGhpcy50b2dnbGVXaW5kb3coKTtcbiAgICAgIGhhbmRsZXIodGhpcy5fcGFyZW50RWxlbWVudC5kYXRhc2V0LmlkLCBkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyRm9ybUVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlVGFza09uTW9kYWwoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLS10YXNrLWRldGFpbHMnKS5kYXRhc2V0LmlkO1xuXG4gICAgaGFuZGxlcihpZCk7XG4gIH1cblxuICBhZGRIYW5kbGVyU2hvd0VkaXRvcihoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubWF0ZXJpYWwtaWNvbnMuaWNvbi0tZWRpdC50YXNrLWRpc3BsYXktLWljb25zJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT5cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dFZGl0b3JNb2RhbC5iaW5kKHRoaXMsIGhhbmRsZXIpKVxuICAgICAgKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJTYXZlRWRpdChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0b3ItLWljb24td3JhcHBlci50YXNrLXNhdmUnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zYXZlRWRpdC5iaW5kKHRoaXMsIGhhbmRsZXIpKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJEZWxldGVUYXNrT25Nb2RhbChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0b3ItLWljb24td3JhcHBlci50YXNrLWRlbGV0ZScpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZVRhc2tPbk1vZGFsLmJpbmQodGhpcywgaGFuZGxlcikpO1xuICB9XG5cbiAgYWRkSGFuZGxlclByaW9yaXR5KCkge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5LXdyYXBwZXInKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fdG9nZ2xlUHJpb3JpdHkuYmluZCh0aGlzKSk7XG4gIH1cblxuICBfZ2VuZXJhdGVNYXJrdXAoKSB7XG4gICAgLy8gPGRpdiBjbGFzcz1cIm1vZGFsLS10YXNrLWRldGFpbHNtb2RhbC0tdGFzay1lZGl0b3JcIj5cbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tY2xvc2UtZWRpdG9yLW1vZGFsXCI+IGNsb3NlIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tZm9ybS1lbGVtZW50IHRhc2stZWRpdG9yLS10YXNrLXRpdGxlXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aXRsZSBoZXJlXCJcbiAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5fZGF0YS50aXRsZX1cIlxuICAgICAgICAgIG1pbmxlbmd0aD1cIjFcIlxuICAgICAgICAgIG1heGxlbmd0aD1cIjYwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tZm9ybS1lbGVtZW50IHRhc2stZWRpdG9yLS10YXNrLWRldGFpbHNcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGRldGFpbHMgaGVyZVwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiMjQwXCJcbiAgICAgICAgPiR7dGhpcy5fZGF0YS5kZXRhaWxzID8gdGhpcy5fZGF0YS5kZXRhaWxzIDogJyd9PC90ZXh0YXJlYT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stZGF0ZS13cmFwcGVyXCI+XG4gICAgICAgICAgRHVlIGRhdGU6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS1mb3JtLWVsZW1lbnQgdGFzay1lZGl0b3ItLXRhc2stZGF0ZVwiXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5fZGF0YS5kYXRlfVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5LXdyYXBwZXJcIj5cbiAgICAgICAgICA8cCBmb3I9XCJ0YXNrLWVkaXRvci1wcmlvcml0eVwiPlByaW9yaXR5OjwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5IHByaW9yaXR5LWxvd1wiXG4gICAgICAgICAgICBuYW1lPVwidGFzay1lZGl0b3ItcHJpb3JpdHlcIlxuICAgICAgICAgICAgdmFsdWU9XCJsb3dcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBmb3I9XCJ0YXNrLWVkaXRvci1wcmlvcml0eVwiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5LWxhYmVsIHByaW9yaXR5LWxhYmVsLWxvdyAke1xuICAgICAgICAgICAgICB0aGlzLl9kYXRhLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09ICdsb3cnXG4gICAgICAgICAgICAgICAgPyAncHJpb3JpdHktbGFiZWwtLWFjdGl2ZSdcbiAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID5Mb3c8L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHkgcHJpb3JpdHktbWVkaXVtXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0YXNrLWVkaXRvci1wcmlvcml0eVwiXG4gICAgICAgICAgICB2YWx1ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGZvcj1cInRhc2stZWRpdG9yLXByaW9yaXR5XCJcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHktbGFiZWwgcHJpb3JpdHktbGFiZWwtbWVkaXVtICR7XG4gICAgICAgICAgICAgIHRoaXMuX2RhdGEucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gJ21lZGl1bSdcbiAgICAgICAgICAgICAgICA/ICdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJ1xuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPk1lZGl1bTwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eSBwcmlvcml0eS1oaWdoXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0YXNrLWVkaXRvci1wcmlvcml0eVwiXG4gICAgICAgICAgICB2YWx1ZT1cImhpZ2hcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBmb3I9XCJ0YXNrLWVkaXRvci1wcmlvcml0eVwiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5LWxhYmVsIHByaW9yaXR5LWxhYmVsLWhpZ2ggJHtcbiAgICAgICAgICAgICAgdGhpcy5fZGF0YS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSAnaGlnaCdcbiAgICAgICAgICAgICAgICA/ICdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJ1xuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPkhpZ2g8L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stc3RhdHVzLXdyYXBwZXJcIj5cbiAgICAgICAgICBTdGF0dXM6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tZm9ybS1lbGVtZW50IHRhc2stZWRpdG9yLS10YXNrLXN0YXR1c1wiXG4gICAgICAgICAgICBuYW1lPVwidGFzay1lZGl0b3Itc3RhdHVzXCJcbiAgICAgICAgICAgIHZhbHVlPVwiY29tcGxldGVkXCJcbiAgICAgICAgICAgICR7dGhpcy5fZGF0YS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gJ2NoZWNrZWQnIDogJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1lZGl0b3Itc3RhdHVzXCIgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1zdGF0dXMtbGFiZWxcIlxuICAgICAgICAgICAgPkNvbXBsZXRlZDwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tZm9ybS1lbGVtZW50IHRhc2stZWRpdG9yLS10YXNrLXN0YXR1c1wiXG4gICAgICAgICAgICBuYW1lPVwidGFzay1lZGl0b3Itc3RhdHVzXCJcbiAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICR7dGhpcy5fZGF0YS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gJycgOiAnY2hlY2tlZCd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1lZGl0b3Itc3RhdHVzXCIgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1zdGF0dXMtbGFiZWxcIlxuICAgICAgICAgICAgPk9uLWdvaW5nPC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJvamVjdC13cmFwcGVyXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXQtdGFzay1wcm9qZWN0XCI+UHJvamVjdDo8L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImVkaXQtdGFzay1wcm9qZWN0XCIgaWQ9XCJlZGl0LXRhc2stcHJvamVjdFwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7dGhpcy5fZGF0YS5wcm9qZWN0fVwiPiR7dGhpcy5fZGF0YS5wcm9qZWN0fTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLWVkaXRvci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZWRpdG9yLS1pY29uLXdyYXBwZXIgdGFzay1zYXZlXCI+U2F2ZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXRvci0taWNvbi13cmFwcGVyIHRhc2stZGVsZXRlXCI+RGVsZXRlPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLS10YXNrLWVkaXRvcicpO1xuXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5kYXRhc2V0LmlkID0gdGhpcy5fZGF0YS5pZDtcblxuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBfdG9nZ2xlUHJpb3JpdHkoZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eS1sYWJlbCcpKVxuICAgICAgcmV0dXJuO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHktbGFiZWwnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJykpO1xuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwtLWFjdGl2ZScpO1xuICB9XG5cbiAgX3ZhbGlkYXRlVGFzayhhcnIpIHtcbiAgICBjb25zdCBbdGl0bGUsIF8sIGRhdGUsIHByaW9yaXR5LCBzdGF0dXNdID0gYXJyO1xuICAgIGlmICghdGl0bGUgfHwgIWRhdGUgfHwgIXByaW9yaXR5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX3JlbmRlckZvcm1FcnJvcigpIHtcbiAgICBjb25zb2xlLmxvZygnZm9ybSBlcnJvcicpO1xuICB9XG5cbiAgcmVuZGVyUHJvamVjdE9wdGlvbnMocHJvamVjdHNBcnIsIHRhc2tUb0VkaXQpIHtcbiAgICBjb25zdCBtYXJrdXAgPSB0aGlzLl9nZW5lcmF0ZVByb2pPcHRpb25zTWFya3VwKHByb2plY3RzQXJyLCB0YXNrVG9FZGl0KTtcblxuICAgIHRoaXMuX2NsZWFyUHJvamVjdE9wdGlvbnModGFza1RvRWRpdCk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stcHJvamVjdCcpXG4gICAgICAuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZVByb2pPcHRpb25zTWFya3VwKHByb2plY3RzQXJyLCB0YXNrKSB7XG4gICAgY29uc3QgbWFya3VwQXJyID0gW107XG5cbiAgICBwcm9qZWN0c0Fyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAodGFzay5wcm9qZWN0ICE9PSBwcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgIG1hcmt1cEFyci5wdXNoKGBcbiAgICAgIDxvcHRpb24gdmFsdWU9XCIke3Byb2plY3QudGl0bGV9XCI+JHtwcm9qZWN0LnRpdGxlfTwvb3B0aW9uPlxuICAgIGApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hcmt1cEFyci5qb2luKCcnKTtcbiAgfVxuXG4gIF9jbGVhclByb2plY3RPcHRpb25zKHRhc2spIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXByb2plY3QnKS5pbm5lckhUTUwgPSBgXG4gICAgPG9wdGlvbiB2YWx1ZT1cIiR7dGFzay5wcm9qZWN0fVwiPiR7dGFzay5wcm9qZWN0fTwvb3B0aW9uPlxuICAgIGA7XG4gIH1cblxuICBhZGRIYW5kbGVyUmVuZGVyUHJvamVjdHNPbkZvcm0oaGFuZGxlciwgdGFzaykge1xuICAgIGhhbmRsZXIodGFzayk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVkaXRUYXNrVmlldygpO1xuIiwiaW1wb3J0IE1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5cbmNsYXNzIEZvcm1WaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFkZEhhbmRsZXJNb2RhbFNpZGViYXIoKTtcbiAgfVxuXG4gIHRvZ2dsZUZvcm1EaXNwbGF5KGUpIHtcbiAgICAvLyBIaWRlcyBhbGwgZm9ybXNcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQtZm9ybScpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcblxuICAgIC8vIEVzdGFibGlzaGVzIHdoaWNoIGZvcm0gdG8gc2hvd1xuICAgIGNvbnN0IGZvcm1UeXBlID0gQXJyYXkuZnJvbShlLnRhcmdldC5jbGFzc0xpc3QpWzFdLnNwbGl0KCduZXctJylbMV07XG5cbiAgICB0aGlzLl9jbGVhckZvcm0oKTtcblxuICAgIC8vIFNob3cgZm9ybSB0byBkaXNwbGF5XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5jb250ZW50LWZvcm0tLW5ldy0ke2Zvcm1UeXBlfWApXG4gICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH1cblxuICBhZGRIYW5kbGVyTW9kYWxTaWRlYmFyKCkge1xuICAgIC8vIENoYW5nZXMgdGhlIGZvcm0gZGlzcGxheVxuICAgIHRoaXMuX3NpZGViYXJMYWJlbHMuZm9yRWFjaCgoZWwpID0+XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlRm9ybURpc3BsYXkuYmluZCh0aGlzKSlcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGb3JtVmlldygpO1xuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxWaWV3IGV4dGVuZHMgVmlldyB7XG4gIF9lcnJvck1lc3NhZ2UgPSAnRm9ybSBpbnB1dCBpbnZhbGlkJztcblxuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay0tY29udGVudCcpO1xuICBfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS1hZGQtdGFzaycpO1xuICBfc2lkZWJhckxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLS1sYWJlbCcpO1xuICBfb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5cbiAgX2J0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLmFkZC10YXNrJyk7XG4gIF9idG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5tYXRlcmlhbC1pY29ucy5pY29uLS1jbG9zZS1hZGQtbmV3LW1vZGFsJ1xuICApO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICB0b2dnbGVXaW5kb3coKSB7XG4gICAgdGhpcy5fb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB0aGlzLl93aW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIH1cblxuICBfYWRkSGFuZGxlclNob3dNb2RhbCgpIHtcbiAgICAvLyBTaG93cy9vcGVucyB0aGUgbW9kYWxcbiAgICB0aGlzLl9idG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVXaW5kb3cuYmluZCh0aGlzKSk7XG4gIH1cblxuICBfYWRkSGFuZGxlckNsb3NlTW9kYWwoKSB7XG4gICAgLy8gQ2xvc2VzIHRoZSBtb2RhbFxuICAgIHRoaXMuX2J0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVXaW5kb3cuYmluZCh0aGlzKSk7XG4gICAgLy8gdGhpcy5fb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlV2luZG93LmJpbmQodGhpcykpO1xuICB9XG5cbiAgX2NsZWFyRm9ybSgpIHtcbiAgICAvLyBDbGVhciB0YXNrIGZvcm1cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5ldy10YXNrLS1mb3JtLWVsZW1lbnQnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiAoZWwudmFsdWUgPSAnJykpO1xuXG4gICAgLy8gQ2xlYXIgcHJvamVjdCBmb3JtXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctcHJvamVjdC0tZm9ybS1lbGVtZW50JylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gKGVsLnZhbHVlID0gJycpKTtcblxuICAgIC8vIENsZWFyIG5vdGUgZm9ybVxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LW5vdGUtLWZvcm0tZWxlbWVudCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IChlbC52YWx1ZSA9ICcnKSk7XG5cbiAgICAvLyBDbGVhciBwcmlvcml0eSBjaG9pY2VcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5ldy10YXNrLS10YXNrLXByaW9yaXR5LWxhYmVsJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktbGFiZWwtLWFjdGl2ZScpKTtcblxuICAgIC8vIENsZWFyIHRhc2sgZGF0ZVxuICAgIGlmICh0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay0tdGFzay1kYXRlJykpIHtcbiAgICAgIHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLS10YXNrLWRhdGUnKS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY2xhc3MgTm90ZVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaXNwbGF5Jyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZU1hcmt1cCgpIHtcbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIGNvbnN0IGV2ZW5JbmRpY2VzID0gdGhpcy5fZGF0YS5maWx0ZXIoKG5vdGUsIGluZGV4KSA9PiBpbmRleCAlIDIgPT09IDApO1xuICAgIGNvbnN0IG9kZEluZGljZXMgPSB0aGlzLl9kYXRhLmZpbHRlcigobm90ZSwgaW5kZXgpID0+IGluZGV4ICUgMiAhPT0gMCk7XG5cbiAgICBsZXQgbWFya3VwID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kaXNwbGF5LS1ub3Rlcy1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZXMtY29udGFpbmVyLS1jb2wtMVwiPiR7ZXZlbkluZGljZXNcbiAgICAgICAgICAgIC5tYXAodGhpcy5fZ2VuZXJhdGVOb3RlTWFya3VwKVxuICAgICAgICAgICAgLmpvaW4oJycpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3Rlcy1jb250YWluZXItLWNvbC0yXCI+JHtvZGRJbmRpY2VzXG4gICAgICAgICAgICAubWFwKHRoaXMuX2dlbmVyYXRlTm90ZU1hcmt1cClcbiAgICAgICAgICAgIC5qb2luKCcnKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgYDtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9XG5cbiAgX2dlbmVyYXRlTm90ZU1hcmt1cChub3RlLCBpbmRleCkge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm5vdGVcIiBkYXRhLWlkPVwiJHtub3RlLmlkfVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZS0taWNvbi13cmFwcGVyIG5vdGUtZGVsZXRlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uLS1kZWxldGUtbm90ZVwiPiBjbG9zZSA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZS0tdGl0bGVcIiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+JHtub3RlLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZS0tZGV0YWlsc1wiIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj4ke25vdGUuZGV0YWlsc308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gIH1cblxuICBhZGRIYW5kbGVyRGVsZXRlTm90ZShoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vdGUnKS5mb3JFYWNoKChlbCkgPT5cbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24tLWRlbGV0ZS1ub3RlJykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5ub3RlJykuZGF0YXNldC5pZDtcblxuICAgICAgICBoYW5kbGVyKGlkKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJQZXJzaXN0Tm90ZVRpdGxlKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm90ZS0tdGl0bGUnKS5mb3JFYWNoKChlbCkgPT5cbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcubm90ZScpLmRhdGFzZXQuaWQ7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBuZXdJRCA9IGAke3ZhbHVlfS0tJHtkYXRlLmdldFRpbWUoKX1gO1xuXG4gICAgICAgIGhhbmRsZXIoaWQsIG5ld0lELCB2YWx1ZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBhZGRIYW5kbGVyUGVyc2lzdE5vdGVEZXRhaWwoaGFuZGxlcikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RlLS1kZXRhaWxzJykuZm9yRWFjaCgoZWwpID0+XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLm5vdGUnKS5kYXRhc2V0LmlkO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LmlubmVyVGV4dDtcblxuICAgICAgICBoYW5kbGVyKGlkLCB2YWx1ZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5vdGVWaWV3KCk7XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IGRldGFpbHNWaWV3IGZyb20gJy4vZGV0YWlsc1ZpZXcnO1xuXG5jbGFzcyBQcm9qZWN0VmlldyBleHRlbmRzIFZpZXcge1xuICBfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1zdWJkaXYucHJvamVjdC0taGVhZGVyJyk7XG4gIF9wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlzcGxheScpO1xuICBfdGl0bGUgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgX2dlbmVyYXRlTWFya3VwKHRpdGxlKSB7XG4gICAgY29uc3QgbWFya3VwID0gYDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktLXByb2plY3QtdGl0bGVcIj4ke3RpdGxlfTwvZGl2PiBcbiAgICAgICR7dGhpcy5fZGF0YS5tYXAodGhpcy5fZ2VuZXJhdGVUYXNrTWFya3VwKS5qb2luKCcnKX0gXG4gICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGlzcGxheS0tcHJvamVjdC1idG4tZWRpdCBidG5cIj5FZGl0IFByb2plY3Q8L2Rpdj5gO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBfZ2VuZXJhdGVUYXNrTWFya3VwKHRhc2spIHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzayBwcmlvcml0eS0ke3Rhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1cIiBkYXRhLWlkPVwiJHtcbiAgICAgIHRhc2suaWRcbiAgICB9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY2hlY2tib3ggJHtcbiAgICAgICAgICAgIHRhc2suc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICd0YXNrLWNoZWNrYm94LS1jaGVja2VkJyA6ICcnXG4gICAgICAgICAgfVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXRpdGxlICR7XG4gICAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAndGFzay0tY29tcGxldGVkJyA6ICcnXG4gICAgICAgICAgfVwiPiR7dGFzay50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzXCI+RGV0YWlsczwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRhdGVcIj4ke3Rhc2suZGF0ZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kaXNwbGF5LS1pY29uLXdyYXBwZXIgdGFzay1lZGl0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWVkaXQgdGFzay1kaXNwbGF5LS1pY29uc1wiPiBtb2RlX2VkaXQgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktLWljb24td3JhcHBlciB0YXNrLWRlbGV0ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uLS1kZWxldGUgdGFzay1kaXNwbGF5LS1pY29uc1wiPiBkZWxldGUgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm9qZWN0VmlldygpO1xuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY2xhc3MgU2lkZWJhclZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYmFyJyk7XG4gIF9wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1zdWJkaXYucHJvamVjdC0taGVhZGVyJyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZU1hcmt1cCgpIHtcbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIGNvbnN0IG1hcmt1cCA9IHRoaXMuX2RhdGEubWFwKHRoaXMuX2dlbmVyYXRlUHJvamVjdE1hcmt1cCkuam9pbignJyk7XG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxuXG4gIF9nZW5lcmF0ZVByb2plY3RNYXJrdXAocHJvamVjdCkge1xuICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICA8cCBjbGFzcz1cIm5hdi1zdWJkaXYtLWNvbnRlbnQgcHJvamVjdC0tdGl0bGVcIj4ke3Byb2plY3QudGl0bGV9PC9wPmA7XG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxuXG4gIGFkZEhhbmRsZXJTaG93UHJvamVjdChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LXN1YmRpdi0tY29udGVudC5wcm9qZWN0LS10aXRsZScpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93UHJvamVjdC5iaW5kKHRoaXMsIGhhbmRsZXIpKVxuICAgICAgKTtcbiAgfVxuXG4gIHNob3dQcm9qZWN0KGhhbmRsZXIsIGUpIHtcbiAgICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgaGFuZGxlcih0aXRsZSk7XG4gIH1cblxuICBhZGRIYW5kbGVyU2hvd0hvbWUoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLm5hdi1oZWFkZXIuaGVhZGVyLS1ob21lJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGhhbmRsZXIoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYWRkSGFuZGxlclNob3dBbGxUYXNrcyhoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcubmF2LWhlYWRlci5oZWFkZXItLWFsbCcpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpc3BsYXktLXByb2plY3QtdGl0bGUnKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgJ0FsbCBUYXNrcyc7XG4gICAgICB9KTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJTaG93Tm90ZXMoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLm5hdi1oZWFkZXIuaGVhZGVyLS1ub3RlcycpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBoYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2lkZWJhclZpZXcoKTtcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgZGV0YWlsc1ZpZXcgZnJvbSAnLi9kZXRhaWxzVmlldyc7XG5cbmNsYXNzIFRhc2tWaWV3IGV4dGVuZHMgVmlldyB7XG4gIF9wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlzcGxheScpO1xuICBfdGFza0RldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRhc2stZGV0YWlscycpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBfZ2VuZXJhdGVNYXJrdXAocHJvalRpdGxlKSB7XG4gICAgY29uc3QgbWFya3VwID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktLXByb2plY3QtdGl0bGVcIj4ke1xuICAgICAgcHJvalRpdGxlID8gcHJvalRpdGxlIDogdGhpcy5fZGF0YVswXSA/IHRoaXMuX2RhdGFbMF0ucHJvamVjdCA6ICdIb21lJ1xuICAgIH08L2Rpdj4gXG4gICAgJHt0aGlzLl9kYXRhLm1hcCh0aGlzLl9nZW5lcmF0ZVRhc2tNYXJrdXApLmpvaW4oJycpfVxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktLXByb2plY3QtYnRuLWVkaXQgYnRuICR7XG4gICAgICB0aGlzLl9kYXRhWzBdID8gJycgOiAnaGlkZGVuJ1xuICAgIH1cIj5FZGl0IFByb2plY3Q8L2Rpdj5gO1xuXG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxuXG4gIF9nZW5lcmF0ZVRhc2tNYXJrdXAodGFzaykge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrIHByaW9yaXR5LSR7dGFzay5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgdGFzay5pZFxuICAgIH1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jaGVja2JveCAke1xuICAgICAgICAgICAgdGFzay5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gJ3Rhc2stY2hlY2tib3gtLWNoZWNrZWQnIDogJydcbiAgICAgICAgICB9XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stdGl0bGUgJHtcbiAgICAgICAgICAgIHRhc2suc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICd0YXNrLS1jb21wbGV0ZWQnIDogJydcbiAgICAgICAgICB9XCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHNcIj5EZXRhaWxzPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGF0ZVwiPiR7dGFzay5kYXRlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktLWljb24td3JhcHBlciB0YXNrLWVkaXRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tZWRpdCB0YXNrLWRpc3BsYXktLWljb25zXCI+IG1vZGVfZWRpdCA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGlzcGxheS0taWNvbi13cmFwcGVyIHRhc2stZGVsZXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWRlbGV0ZSB0YXNrLWRpc3BsYXktLWljb25zXCI+IGRlbGV0ZSA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmA7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0ZWQoaGFuZGxlciwgZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWNoZWNrYm94JykpIHJldHVybjtcblxuICAgIGNvbnN0IHRhc2tUb01hcmsgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpO1xuICAgIGNvbnN0IGlkID0gdGFza1RvTWFyay5kYXRhc2V0LmlkO1xuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1jaGVja2JveC0tY2hlY2tlZCcpO1xuXG4gICAgdGFza1RvTWFyay5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2stLWNvbXBsZXRlZCcpO1xuXG4gICAgaGFuZGxlcihpZCk7XG4gIH1cblxuICBhZGRIYW5kbGVyVG9nZ2xlQ29tcGxldGVkKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT5cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUNvbXBsZXRlZC5iaW5kKHRoaXMsIGhhbmRsZXIpKVxuICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFza1ZpZXcoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIF9kYXRhO1xuXG4gIHJlbmRlcihkYXRhLCBvdGhlcikge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIGNvbnN0IG1hcmt1cCA9IHRoaXMuX2dlbmVyYXRlTWFya3VwKG90aGVyKTtcblxuICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBtYXJrdXApO1xuICB9XG5cbiAgcmVuZGVyRXJyb3IoTWVzc2FnZSA9IHRoaXMuX2Vycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5cbiAgICA8cD4ke21lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PmA7XG5cbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgbW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5cbmltcG9ydCBhZGRUYXNrVmlldyBmcm9tICcuL3ZpZXdzL2FkZFRhc2tWaWV3JztcbmltcG9ydCBhZGRQcm9qZWN0VmlldyBmcm9tICcuL3ZpZXdzL2FkZFByb2plY3RWaWV3JztcbmltcG9ydCBhZGROb3RlVmlldyBmcm9tICcuL3ZpZXdzL2FkZE5vdGVWaWV3JztcblxuaW1wb3J0IHNpZGViYXJWaWV3IGZyb20gJy4vdmlld3Mvc2lkZWJhclZpZXcnO1xuaW1wb3J0IHRhc2tWaWV3IGZyb20gJy4vdmlld3MvdGFza1ZpZXcnO1xuaW1wb3J0IGRldGFpbHNWaWV3IGZyb20gJy4vdmlld3MvZGV0YWlsc1ZpZXcnO1xuaW1wb3J0IHByb2plY3RWaWV3IGZyb20gJy4vdmlld3MvcHJvamVjdFZpZXcnO1xuaW1wb3J0IGZvcm1WaWV3IGZyb20gJy4vdmlld3MvZm9ybVZpZXcnO1xuaW1wb3J0IG1vZGFsVmlldyBmcm9tICcuL3ZpZXdzL21vZGFsVmlldyc7XG5cbmltcG9ydCBlZGl0VGFza1ZpZXcgZnJvbSAnLi92aWV3cy9lZGl0VGFza1ZpZXcnO1xuaW1wb3J0IGVkaXRQcm9qZWN0VmlldyBmcm9tICcuL3ZpZXdzL2VkaXRQcm9qZWN0Vmlldyc7XG5pbXBvcnQgbm90ZVZpZXcgZnJvbSAnLi92aWV3cy9ub3RlVmlldyc7XG5cbi8vIEluZGV4IGpzIGZvciB0aGUgYXBwbGljYXRpb24gbG9naWMgKGNvbnRyb2xsZXIpXG5cbi8vIENoYW5nZSB0byBzaG93IHRhc2tzIGluIHNwZWNpZmljIHByb2plY3RcbmNvbnN0IGNvbnRyb2xTaG93VGFza3MgPSBmdW5jdGlvbiAocHJvamVjdCA9ICdIb21lJywgb3RoZXIpIHtcbiAgY29uc3QgdGFza3NUb1Nob3cgPSBtb2RlbC5zdGF0ZS50YXNrcy5maWx0ZXIoXG4gICAgKHRhc2spID0+IHRhc2sucHJvamVjdCA9PT0gcHJvamVjdFxuICApO1xuICB0YXNrVmlldy5yZW5kZXIodGFza3NUb1Nob3csIG90aGVyKTtcblxuICBzaWRlYmFyVmlldy5yZW5kZXIobW9kZWwuc3RhdGUucHJvamVjdHMuc2xpY2UoMSkpO1xuXG4gIHNpZGViYXJWaWV3LmFkZEhhbmRsZXJTaG93UHJvamVjdChjb250cm9sU2hvd1Byb2plY3QpO1xufTtcblxuY29uc3QgY29udHJvbEFkZFRhc2sgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBtb2RlbC5hZGRUYXNrKGRhdGEpO1xuXG4gIGNvbnRyb2xTaG93VGFza3MoZGF0YS5wcm9qZWN0KTtcblxuICBhZGRIYW5kbGVyc1RvVGFzaygpO1xufTtcblxuY29uc3QgY29udHJvbEFkZFByb2plY3QgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBtb2RlbC5hZGRQcm9qZWN0KGRhdGEpO1xuXG4gIHNpZGViYXJWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS5wcm9qZWN0cy5zbGljZSgxKSk7XG5cbiAgc2lkZWJhclZpZXcuYWRkSGFuZGxlclNob3dBbGxUYXNrcyhjb250cm9sU2hvd0FsbFRhc2tzKTtcbiAgc2lkZWJhclZpZXcuYWRkSGFuZGxlclNob3dQcm9qZWN0KGNvbnRyb2xTaG93UHJvamVjdCk7XG59O1xuXG5jb25zdCBjb250cm9sQWRkTm90ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIG1vZGVsLmFkZE5vdGUoZGF0YSk7XG5cbiAgbm90ZVZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLm5vdGVzKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xTaG93UHJvamVjdHNPbkZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIGFkZFRhc2tWaWV3LnJlbmRlclByb2plY3RPcHRpb25zKG1vZGVsLnN0YXRlLnByb2plY3RzKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xTaG93UHJvamVjdHNPbkVkaXRvciA9IGZ1bmN0aW9uICh0YXNrVG9FZGl0KSB7XG4gIGVkaXRUYXNrVmlldy5yZW5kZXJQcm9qZWN0T3B0aW9ucyhtb2RlbC5zdGF0ZS5wcm9qZWN0cywgdGFza1RvRWRpdCk7XG59O1xuXG5jb25zdCBjb250cm9sU2hvd0FsbFRhc2tzID0gZnVuY3Rpb24gKCkge1xuICB0YXNrVmlldy5yZW5kZXIobW9kZWwuc3RhdGUudGFza3MpO1xuICBhZGRIYW5kbGVyc1RvVGFzaygpO1xufTtcblxuY29uc3QgY29udHJvbERlbGV0ZVRhc2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3QgcHJvamVjdFRvU2hvdyA9IGdldFByb2plY3RCYXNlZE9uSUQoaWQpO1xuXG4gIG1vZGVsLmRlbGV0ZVRhc2soaWQpO1xuXG4gIGNvbnRyb2xTaG93VGFza3MocHJvamVjdFRvU2hvdyk7XG5cbiAgYWRkSGFuZGxlcnNUb1Rhc2soKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xEZWxldGVUYXNrT25Nb2RhbCA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBwcm9qZWN0VG9TaG93ID0gZ2V0UHJvamVjdEJhc2VkT25JRChpZCk7XG5cbiAgbW9kZWwuZGVsZXRlVGFzayhpZCk7XG5cbiAgZGV0YWlsc1ZpZXcudG9nZ2xlV2luZG93KCk7XG5cbiAgY29udHJvbFNob3dUYXNrcyhwcm9qZWN0VG9TaG93KTtcblxuICBhZGRIYW5kbGVyc1RvVGFzaygpO1xufTtcblxuY29uc3QgY29udHJvbERlbGV0ZVByb2plY3RPbk1vZGFsID0gZnVuY3Rpb24gKGlkKSB7XG4gIG1vZGVsLmRlbGV0ZVByb2plY3QoaWQpO1xuXG4gIGVkaXRQcm9qZWN0Vmlldy50b2dnbGVXaW5kb3coKTtcblxuICBjb250cm9sU2hvd1Rhc2tzKCk7XG4gIGFkZEhhbmRsZXJzVG9UYXNrKCk7XG59O1xuXG5jb25zdCBjb250cm9sU2F2ZUVkaXRUYXNrID0gZnVuY3Rpb24gKGlkLCByZXBsYWNlbWVudCkge1xuICBtb2RlbC51cGRhdGVUYXNrKGlkLCByZXBsYWNlbWVudCk7XG5cbiAgY29udHJvbFNob3dUYXNrcyhyZXBsYWNlbWVudC5wcm9qZWN0KTtcbiAgYWRkSGFuZGxlcnNUb1Rhc2soKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xTYXZlRWRpdFByb2plY3QgPSBmdW5jdGlvbiAoaWQsIHJlcGxhY2VtZW50KSB7XG4gIG1vZGVsLnVwZGF0ZVByb2plY3QoaWQsIHJlcGxhY2VtZW50KTtcblxuICBjb250cm9sU2hvd1Rhc2tzKHJlcGxhY2VtZW50LnRpdGxlLCByZXBsYWNlbWVudC50aXRsZSk7XG5cbiAgLy8gVXBkYXRlIHNpZGViYXIgcHJvamVjdHNcbiAgc2lkZWJhclZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLnByb2plY3RzLnNsaWNlKDEpKTtcblxuICAvLyBBZGQgaGFuZGxlcnMgdG8gc2lkZWJhciBwcm9qZWN0c1xuICBzaWRlYmFyVmlldy5hZGRIYW5kbGVyU2hvd1Byb2plY3QoY29udHJvbFNob3dQcm9qZWN0KTtcblxuICAvLyBBZGQgaGFuZGxlcnMgdG8gYWxsIHRhc2tzXG4gIGFkZEhhbmRsZXJzVG9UYXNrKCk7XG5cbiAgLy8gQWRkIGhhbmRsZXIgdG8gcHJvamVjdCBlZGl0b3JcbiAgZWRpdFByb2plY3RWaWV3LmFkZEhhbmRsZXJTaG93RWRpdG9yKGNvbnRyb2xFZGl0UHJvamVjdCk7XG59O1xuXG5jb25zdCBjb250cm9sRWRpdFRhc2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3QgdGFza1RvRWRpdCA9IG1vZGVsLnN0YXRlLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcblxuICBlZGl0VGFza1ZpZXcucmVuZGVyKHRhc2tUb0VkaXQpO1xuXG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyUmVuZGVyUHJvamVjdHNPbkZvcm0oXG4gICAgY29udHJvbFNob3dQcm9qZWN0c09uRWRpdG9yLFxuICAgIHRhc2tUb0VkaXRcbiAgKTtcbiAgZWRpdFRhc2tWaWV3LmFkZEhhbmRsZXJTYXZlRWRpdChjb250cm9sU2F2ZUVkaXRUYXNrKTtcbiAgZWRpdFRhc2tWaWV3LmFkZEhhbmRsZXJEZWxldGVUYXNrT25Nb2RhbChjb250cm9sRGVsZXRlVGFza09uTW9kYWwpO1xuICBlZGl0VGFza1ZpZXcuYWRkSGFuZGxlclByaW9yaXR5KCk7XG59O1xuXG5jb25zdCBjb250cm9sU2hvd0RldGFpbHMgPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3QgdGFza1RvU2hvdyA9IG1vZGVsLnN0YXRlLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcblxuICBkZXRhaWxzVmlldy5yZW5kZXIodGFza1RvU2hvdyk7XG5cbiAgZGV0YWlsc1ZpZXcuYWRkSGFuZGxlckVkaXRUYXNrKGNvbnRyb2xFZGl0VGFzayk7XG4gIGRldGFpbHNWaWV3LmFkZEhhbmRsZXJEZWxldGVUYXNrT25Nb2RhbChjb250cm9sRGVsZXRlVGFza09uTW9kYWwpO1xufTtcblxuY29uc3QgY29udHJvbFRvZ2dsZUNvbXBsZXRlZCA9IGZ1bmN0aW9uIChpZCkge1xuICBtb2RlbC50b2dnbGVUYXNrQ29tcGxldGUoaWQpO1xufTtcblxuY29uc3QgY29udHJvbFNob3dIb21lID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0YXNrc0F0SG9tZSA9IG1vZGVsLnN0YXRlLnRhc2tzLmZpbHRlcihcbiAgICAodGFzaykgPT4gdGFzay5wcm9qZWN0LnRvTG93ZXJDYXNlKCkgPT09ICdob21lJ1xuICApO1xuXG4gIHRhc2tWaWV3LnJlbmRlcih0YXNrc0F0SG9tZSk7XG4gIGFkZEhhbmRsZXJzVG9UYXNrKCk7XG5cbiAgc2lkZWJhclZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLnByb2plY3RzLnNsaWNlKDEpKTtcblxuICBzaWRlYmFyVmlldy5hZGRIYW5kbGVyU2hvd1Byb2plY3QoY29udHJvbFNob3dQcm9qZWN0KTtcbn07XG5cbi8vIEluaXQgb24gZWRpdCBmdW5jdGlvblxuY29uc3QgY29udHJvbEVkaXRQcm9qZWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IHByb2plY3RUb0VkaXQgPSBtb2RlbC5zdGF0ZS5wcm9qZWN0cy5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBpZFxuICApO1xuXG4gIGNvbnNvbGUubG9nKHByb2plY3RUb0VkaXQpO1xuICBlZGl0UHJvamVjdFZpZXcucmVuZGVyKHByb2plY3RUb0VkaXQpO1xuXG4gIGVkaXRQcm9qZWN0Vmlldy5hZGRIYW5kbGVyU2F2ZUVkaXQoY29udHJvbFNhdmVFZGl0UHJvamVjdCk7XG4gIGVkaXRQcm9qZWN0Vmlldy5hZGRIYW5kbGVyRGVsZXRlUHJvamVjdE9uTW9kYWwoY29udHJvbERlbGV0ZVByb2plY3RPbk1vZGFsKTtcbn07XG5cbi8vIEluaXQgb24gc2hvdyBmdW5jdGlvblxuY29uc3QgY29udHJvbFNob3dQcm9qZWN0ID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gIGNvbnN0IHByb2plY3QgPSBtb2RlbC5zdGF0ZS5wcm9qZWN0cy5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSB0aXRsZVxuICApO1xuXG4gIGNvbnN0IHRhc2tzVG9TaG93ID0gbW9kZWwuc3RhdGUudGFza3MuZmlsdGVyKFxuICAgIChlbCkgPT4gZWwucHJvamVjdCA9PT0gcHJvamVjdC50aXRsZVxuICApO1xuXG4gIHByb2plY3RWaWV3LnJlbmRlcih0YXNrc1RvU2hvdywgdGl0bGUpO1xuICBlZGl0UHJvamVjdFZpZXcuYWRkSGFuZGxlclNob3dFZGl0b3IoY29udHJvbEVkaXRQcm9qZWN0KTtcbiAgYWRkSGFuZGxlcnNUb1Rhc2soKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xEZWxldGVOb3RlID0gZnVuY3Rpb24gKGlkKSB7XG4gIG1vZGVsLmRlbGV0ZU5vdGUoaWQpO1xuXG4gIG5vdGVWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS5ub3Rlcyk7XG5cbiAgYWRkSGFuZGxlcnNUb05vdGUoKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xQZXJzaXN0Tm90ZVRpdGxlID0gZnVuY3Rpb24gKGlkLCBuZXdJRCwgdmFsdWUpIHtcbiAgbW9kZWwudXBkYXRlTm90ZVRpdGxlKGlkLCBuZXdJRCwgdmFsdWUpO1xuXG4gIG5vdGVWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS5ub3Rlcyk7XG59O1xuXG5jb25zdCBjb250cm9sUGVyc2lzdE5vdGVEZXRhaWwgPSBmdW5jdGlvbiAoaWQsIHZhbHVlKSB7XG4gIG1vZGVsLnVwZGF0ZU5vdGVEZXRhaWwoaWQsIHZhbHVlKTtcblxuICBub3RlVmlldy5yZW5kZXIobW9kZWwuc3RhdGUubm90ZXMpO1xufTtcblxuY29uc3QgY29udHJvbFNob3dOb3RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgbm90ZVZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLm5vdGVzKTtcblxuICBhZGRIYW5kbGVyc1RvTm90ZSgpO1xufTtcblxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29udHJvbFNob3dUYXNrcygpO1xuICBhZGRUYXNrVmlldy5hZGRIYW5kbGVyQWRkVGFzayhjb250cm9sQWRkVGFzayk7XG4gIGFkZFRhc2tWaWV3LmFkZEhhbmRsZXJSZW5kZXJQcm9qZWN0c09uRm9ybShjb250cm9sU2hvd1Byb2plY3RzT25Gb3JtKTtcbiAgYWRkUHJvamVjdFZpZXcuYWRkSGFuZGxlckFkZFByb2plY3QoY29udHJvbEFkZFByb2plY3QpO1xuICBhZGROb3RlVmlldy5hZGRIYW5kbGVyQWRkTm90ZShjb250cm9sQWRkTm90ZSk7XG4gIGRldGFpbHNWaWV3LmFkZEhhbmRsZXJUYXNrRGV0YWlscyhjb250cm9sU2hvd0RldGFpbHMpO1xuICBkZXRhaWxzVmlldy5hZGRIYW5kbGVyRGVsZXRlVGFzayhjb250cm9sRGVsZXRlVGFzayk7XG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyU2hvd0VkaXRvcihjb250cm9sRWRpdFRhc2spO1xuICB0YXNrVmlldy5hZGRIYW5kbGVyVG9nZ2xlQ29tcGxldGVkKGNvbnRyb2xUb2dnbGVDb21wbGV0ZWQpO1xuICBzaWRlYmFyVmlldy5hZGRIYW5kbGVyU2hvd0hvbWUoY29udHJvbFNob3dIb21lKTtcbiAgc2lkZWJhclZpZXcuYWRkSGFuZGxlclNob3dBbGxUYXNrcyhjb250cm9sU2hvd0FsbFRhc2tzKTtcbiAgc2lkZWJhclZpZXcuYWRkSGFuZGxlclNob3dOb3Rlcyhjb250cm9sU2hvd05vdGVzKTtcbn07XG5cbmluaXQoKTtcblxuLy8gIEhFTFBFUiBGVU5DVElPTlNcblxuZnVuY3Rpb24gYWRkSGFuZGxlcnNUb1Rhc2soKSB7XG4gIGRldGFpbHNWaWV3LmFkZEhhbmRsZXJUYXNrRGV0YWlscyhjb250cm9sU2hvd0RldGFpbHMpO1xuICBkZXRhaWxzVmlldy5hZGRIYW5kbGVyRGVsZXRlVGFzayhjb250cm9sRGVsZXRlVGFzayk7XG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyU2hvd0VkaXRvcihjb250cm9sRWRpdFRhc2spO1xuICB0YXNrVmlldy5hZGRIYW5kbGVyVG9nZ2xlQ29tcGxldGVkKGNvbnRyb2xUb2dnbGVDb21wbGV0ZWQpO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyc1RvTm90ZSgpIHtcbiAgbm90ZVZpZXcuYWRkSGFuZGxlckRlbGV0ZU5vdGUoY29udHJvbERlbGV0ZU5vdGUpO1xuICBub3RlVmlldy5hZGRIYW5kbGVyUGVyc2lzdE5vdGVUaXRsZShjb250cm9sUGVyc2lzdE5vdGVUaXRsZSk7XG4gIG5vdGVWaWV3LmFkZEhhbmRsZXJQZXJzaXN0Tm90ZURldGFpbChjb250cm9sUGVyc2lzdE5vdGVEZXRhaWwpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0QmFzZWRPbklEKHRhc2tJRCkge1xuICBjb25zb2xlLmxvZyh0YXNrSUQpO1xuICBjb25zdCBjaG9zZW5UYXNrID0gbW9kZWwuc3RhdGUudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lEKTtcbiAgY29uc29sZS5sb2cobW9kZWwuc3RhdGUudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lEKSk7XG5cbiAgcmV0dXJuIGNob3NlblRhc2sucHJvamVjdDtcbn1cblxuLypcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldCBzZXROYW1lKHZhbHVlKSB7XG4gICAgdGhpcy5uYW1lID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZ2V0RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlO1xuICB9XG5cbiAgc2V0IHNldERhdGUodmFsdWUpIHtcbiAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIHNldCBzZXRQcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBzZXREZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxufVxuXG4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9