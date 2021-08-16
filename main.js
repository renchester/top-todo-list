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
/* harmony export */   "updateTask": () => (/* binding */ updateTask),
/* harmony export */   "updateProject": () => (/* binding */ updateProject),
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

const deleteProject = function (id) {
  const index = state.projects.findIndex((el) => el.title === id);
  state.projects.splice(index, 1);

  const tasksToDelete = state.tasks.filter((el) => el.project === id);

  persistProjects();
  persistTasks();
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
    const id = this._title;

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

  _generateMarkup() {
    console.log(this._data);
    const markup = `<div class="task-display--project-title">${
      this._data[0] ? this._data[0].project : this._title
    }</div> 
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
/* harmony import */ var _views_projectView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/projectView */ "./src/views/projectView.js");
/* harmony import */ var _views_formView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/formView */ "./src/views/formView.js");
/* harmony import */ var _views_modalView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/modalView */ "./src/views/modalView.js");
/* harmony import */ var _views_editTaskView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/editTaskView */ "./src/views/editTaskView.js");
/* harmony import */ var _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/editProjectView */ "./src/views/editProjectView.js");


















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
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_10__.default.renderProjectOptions(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects, taskToEdit);
};

const controlShowTasks = function () {
  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.tasks);
  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects.slice(1));

  _views_projectView__WEBPACK_IMPORTED_MODULE_7__.default.addHandlerShowProject(controlShowProject);
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

const controlDeleteProjectOnModal = function (id) {
  _model__WEBPACK_IMPORTED_MODULE_0__.deleteProject(id);

  _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__.default.toggleWindow();

  // projectView.render(id);

  controlShowTasks();
  addHandlersToTask();
};

const controlSaveEditTask = function (id, replacement) {
  _model__WEBPACK_IMPORTED_MODULE_0__.updateTask(id, replacement);

  controlShowTasks();
  addHandlersToTask();
};

const controlSaveEditProject = function (id, replacement) {
  _model__WEBPACK_IMPORTED_MODULE_0__.updateProject(id, replacement);

  const tasksToShow = _model__WEBPACK_IMPORTED_MODULE_0__.state.tasks.filter(
    (el) => el.project === replacement.title
  );

  _views_projectView__WEBPACK_IMPORTED_MODULE_7__.default.render(tasksToShow);

  // Update sidebar projects
  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects.slice(1));

  // Add handlers to sidebar projects
  _views_projectView__WEBPACK_IMPORTED_MODULE_7__.default.addHandlerShowProject(controlShowProject);

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

  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerDeleteTaskOnModal(controlDeleteTaskOnModal);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerEditTask(controlEditTask);
};

const controlToggleCompleted = function (id) {
  _model__WEBPACK_IMPORTED_MODULE_0__.toggleTaskComplete(id);
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

  _views_projectView__WEBPACK_IMPORTED_MODULE_7__.default.render(tasksToShow);
  _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__.default.addHandlerShowEditor(controlEditProject);
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
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_10__.default.addHandlerShowEditor(controlEditTask);
  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.addHandlerToggleCompleted(controlToggleCompleted);

  // projectView.addHandlerShowProject(controlShowProject);
  // sidebarView.addHandlerShowProject(controlShowProject);
};

init();

//  HELPER FUNCTIONS

function addHandlersToTask() {
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerTaskDetails(controlShowDetails);
  _views_detailsView__WEBPACK_IMPORTED_MODULE_6__.default.addHandlerDeleteTask(controlDeleteTask);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_10__.default.addHandlerShowEditor(controlEditTask);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWE7O0FBRU47QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsY0FBYztBQUNkLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVCQUF1QjtBQUNqRCw4QkFBOEIsK0JBQStCO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0JBQStCO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SW9DO0FBQ0k7O0FBRXhDLDBCQUEwQiwrQ0FBUztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZERzs7QUFFcEMsNkJBQTZCLCtDQUFTO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7O0FBRXBDLDBCQUEwQiwrQ0FBUztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVMsSUFBSSxVQUFVO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWMsSUFBSSxjQUFjO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUhHOztBQUVwQywwQkFBMEIsK0NBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsaUJBQWlCO0FBQ2pFO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQkFBZ0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsa0NBQWtDO0FBQy9HLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRCxtQkFBbUI7QUFDeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJRzs7QUFFcEMsOEJBQThCLCtDQUFTO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUscUJBQXFCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHWDtBQUNVO0FBQ0k7O0FBRXhDLDJCQUEyQiwrQ0FBUztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVMsSUFBSSxVQUFVO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2Q0FBNkM7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUJBQW1CLElBQUksbUJBQW1CO0FBQ3ZFO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWMsSUFBSSxjQUFjO0FBQ3ZEO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixhQUFhLElBQUksYUFBYTtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcFNFOztBQUVwQyx1QkFBdUIsK0NBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsU0FBUztBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDSjs7QUFFWCx3QkFBd0IsMENBQUk7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0QwQjtBQUNjOztBQUV4QywwQkFBMEIsMENBQUk7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsNEJBQTRCO0FBQ2hFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVcsSUFBSSxXQUFXO0FBQzFCO0FBQ0EsbUNBQW1DLFVBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRFA7O0FBRTFCLDBCQUEwQiwwQ0FBSTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYztBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJQO0FBQ2M7O0FBRXhDLHVCQUF1QiwwQ0FBSTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLDRCQUE0QjtBQUNoRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXLElBQUksV0FBVztBQUMxQjtBQUNBLG1DQUFtQyxVQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVEakI7O0FBRUU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUUFBUTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRW9COztBQUVhO0FBQ007QUFDTjs7QUFFQTtBQUNOO0FBQ007QUFDQTtBQUNOO0FBQ0U7O0FBRU07QUFDTTs7QUFFdEQ7O0FBRUE7QUFDQSxFQUFFLDJDQUFhOztBQUVmLEVBQUUsMkRBQWUsQ0FBQywrQ0FBaUI7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDhDQUFnQjs7QUFFbEIsRUFBRSw4REFBa0IsQ0FBQyx3REFBMEI7QUFDL0M7O0FBRUE7QUFDQSxFQUFFLDJDQUFhO0FBQ2Y7O0FBRUE7QUFDQSxFQUFFLDRFQUFnQyxDQUFDLGtEQUFvQjtBQUN2RDs7QUFFQTtBQUNBLEVBQUUsOEVBQWlDLENBQUMsa0RBQW9CO0FBQ3hEOztBQUVBO0FBQ0EsRUFBRSwyREFBZSxDQUFDLCtDQUFpQjtBQUNuQyxFQUFFLDhEQUFrQixDQUFDLHdEQUEwQjs7QUFFL0MsRUFBRSw2RUFBaUM7QUFDbkM7O0FBRUE7QUFDQSxFQUFFLDhDQUFnQjs7QUFFbEIsRUFBRSwyREFBZSxDQUFDLCtDQUFpQjs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBLEVBQUUsOENBQWdCOztBQUVsQixFQUFFLG9FQUF3Qjs7QUFFMUIsRUFBRSwyREFBZSxDQUFDLCtDQUFpQjs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBLEVBQUUsaURBQW1COztBQUVyQixFQUFFLHlFQUE0Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4Q0FBZ0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsaURBQW1COztBQUVyQixzQkFBc0Isc0RBQXdCO0FBQzlDO0FBQ0E7O0FBRUEsRUFBRSw4REFBa0I7O0FBRXBCO0FBQ0EsRUFBRSw4REFBa0IsQ0FBQyx3REFBMEI7O0FBRS9DO0FBQ0EsRUFBRSw2RUFBaUM7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLGlGQUFvQztBQUN0Qzs7QUFFQTtBQUNBLHFCQUFxQixvREFBc0I7O0FBRTNDLEVBQUUsZ0VBQW1COztBQUVyQixFQUFFLHdGQUEyQztBQUM3QztBQUNBO0FBQ0E7QUFDQSxFQUFFLDRFQUErQjtBQUNqQyxFQUFFLHFGQUF3QztBQUMxQyxFQUFFLDRFQUErQjtBQUNqQzs7QUFFQTtBQUNBLHFCQUFxQixvREFBc0I7O0FBRTNDLEVBQUUsOERBQWtCOztBQUVwQixFQUFFLG1GQUF1QztBQUN6QyxFQUFFLDBFQUE4QjtBQUNoQzs7QUFFQTtBQUNBLEVBQUUsc0RBQXdCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQXlCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1FQUFzQjs7QUFFeEIsRUFBRSwrRUFBa0M7QUFDcEMsRUFBRSwyRkFBOEM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix1REFBeUI7QUFDM0M7QUFDQTs7QUFFQSxzQkFBc0Isc0RBQXdCO0FBQzlDO0FBQ0E7O0FBRUEsRUFBRSw4REFBa0I7QUFDcEIsRUFBRSxpRkFBb0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSx5RUFBNkI7QUFDL0IsRUFBRSxzRkFBMEM7QUFDNUMsRUFBRSwrRUFBbUM7QUFDckMsRUFBRSx5RUFBNkI7QUFDL0IsRUFBRSw2RUFBaUM7QUFDbkMsRUFBRSw0RUFBZ0M7QUFDbEMsRUFBRSw4RUFBaUM7QUFDbkMsRUFBRSw4RUFBa0M7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUUsNkVBQWlDO0FBQ25DLEVBQUUsNEVBQWdDO0FBQ2xDLEVBQUUsOEVBQWlDO0FBQ25DLEVBQUUsOEVBQWtDO0FBQ3BDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9hZGROb3RlVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2FkZFByb2plY3RWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvYWRkVGFza1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9kZXRhaWxzVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2VkaXRQcm9qZWN0Vmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2VkaXRUYXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2Zvcm1WaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvbW9kYWxWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvcHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9zaWRlYmFyVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3Rhc2tWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3Mvdmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcbiAgdGFza3M6IFtdLFxuICBub3RlczogW10sXG4gIHByb2plY3RzOiBbXG4gICAge1xuICAgICAgdGl0bGU6ICdIb21lJyxcbiAgICB9LFxuICBdLFxuICBjdXJyVGFzazoge30sXG4gIGN1cnJOb3RlOiB7fSxcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSBmdW5jdGlvbiAoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICBwcmlvcml0eTogZGF0YS5wcmlvcml0eSxcbiAgICAuLi4oZGF0YS5wcm9qZWN0ICYmIHsgcHJvamVjdDogZGF0YS5wcm9qZWN0IH0pLFxuICAgIC4uLihkYXRhLmRlc2NyaXB0aW9uICYmIHsgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfSksXG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5vdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgIC4uLihkYXRhLmRlc2NyaXB0aW9uICYmIHsgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfSksXG4gIH07XG59O1xuXG5jb25zdCBwZXJzaXN0VGFza3MgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHN0YXRlLnRhc2tzKSk7XG59O1xuXG5jb25zdCBwZXJzaXN0UHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHN0YXRlLnByb2plY3RzKSk7XG59O1xuXG5jb25zdCBwZXJzaXN0Tm90ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KHN0YXRlLm5vdGVzKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gIC8vIEFkZCB0YXNrIHRvIGFwcCBzdGF0ZVxuICBzdGF0ZS50YXNrcy51bnNoaWZ0KHRhc2spO1xuXG4gIC8vIFNldCB0byBsb2NhbCBzdG9yYWdlXG4gIHBlcnNpc3RUYXNrcygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAvLyBBZGQgcHJvamVjdCB0byBhcHAgc3RhdGVcbiAgc3RhdGUucHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuICAvLyBTZXQgdG8gbG9jYWwgc3RvcmFnZVxuICBwZXJzaXN0UHJvamVjdHMoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGROb3RlID0gZnVuY3Rpb24gKG5vdGUpIHtcbiAgLy8gQWRkIG5vdGUgdG8gYXBwIHN0YXRlXG4gIHN0YXRlLm5vdGVzLnB1c2gobm90ZSk7XG5cbiAgLy8gU2V0IHRvIGxvY2FsIHN0b3JhZ2VcbiAgcGVyc2lzdE5vdGVzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVGFzayA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLnRhc2tzLmZpbmRJbmRleCgoZWwpID0+IGVsLmlkID09PSBpZCk7XG4gIHN0YXRlLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgcGVyc2lzdFRhc2tzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2plY3RzLmZpbmRJbmRleCgoZWwpID0+IGVsLnRpdGxlID09PSBpZCk7XG4gIHN0YXRlLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgY29uc3QgdGFza3NUb0RlbGV0ZSA9IHN0YXRlLnRhc2tzLmZpbHRlcigoZWwpID0+IGVsLnByb2plY3QgPT09IGlkKTtcblxuICBwZXJzaXN0UHJvamVjdHMoKTtcbiAgcGVyc2lzdFRhc2tzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVGFzayA9IGZ1bmN0aW9uIChpZCwgcmVwbGFjZW1lbnQpIHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS50YXNrcy5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gaWQpO1xuICBzdGF0ZS50YXNrcy5zcGxpY2UoaW5kZXgsIDEsIHJlcGxhY2VtZW50KTtcblxuICBwZXJzaXN0VGFza3MoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKGlkLCByZXBsYWNlbWVudCkge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2plY3RzLmZpbmRJbmRleCgoZWwpID0+IGVsLnRpdGxlID09PSBpZCk7XG4gIHN0YXRlLnByb2plY3RzLnNwbGljZShpbmRleCwgMSwgcmVwbGFjZW1lbnQpO1xuXG4gIGNvbnN0IHRhc2tzVG9VcGRhdGUgPSBzdGF0ZS50YXNrcy5maWx0ZXIoKGVsKSA9PiBlbC5wcm9qZWN0ID09PSBpZCk7XG5cbiAgdGFza3NUb1VwZGF0ZS5mb3JFYWNoKChlbCkgPT4gKGVsLnByb2plY3QgPSByZXBsYWNlbWVudC50aXRsZSkpO1xuXG4gIHBlcnNpc3RQcm9qZWN0cygpO1xuICBwZXJzaXN0VGFza3MoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVUYXNrQ29tcGxldGUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS50YXNrcy5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gaWQpO1xuXG4gIHN0YXRlLnRhc2tzW2luZGV4XS5zdGF0dXMgPVxuICAgIHN0YXRlLnRhc2tzW2luZGV4XS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gJycgOiAnY29tcGxldGVkJztcblxuICBwZXJzaXN0VGFza3MoKTtcbn07XG5cbmNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGxvY2FsVGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKTtcbiAgY29uc3QgbG9jYWxQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xuICBjb25zdCBsb2NhbE5vdGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XG5cbiAgaWYgKGxvY2FsVGFza3MpIHtcbiAgICBzdGF0ZS50YXNrcyA9IEpTT04ucGFyc2UobG9jYWxUYXNrcyk7XG4gIH1cblxuICBpZiAobG9jYWxQcm9qZWN0cykge1xuICAgIHN0YXRlLnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFByb2plY3RzKTtcbiAgfVxuXG4gIGlmIChsb2NhbE5vdGVzKSB7XG4gICAgc3RhdGUubm90ZXMgPSBKU09OLnBhcnNlKGxvY2FsTm90ZXMpO1xuICB9XG59O1xuaW5pdCgpO1xuIiwiaW1wb3J0IE1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5pbXBvcnQgQWRkVGFza1ZpZXcgZnJvbSAnLi9hZGRUYXNrVmlldyc7XG5cbmNsYXNzIEFkZE5vdGVWaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgX2J0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLXN1Ym1pdC5zdWJtaXQtLW5ldy1ub3RlJyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHVwbG9hZERhdGEoaGFuZGxlciwgZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5vdGVUaXRsZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LW5vdGUtLW5vdGUtdGl0bGUnXG4gICAgKS52YWx1ZTtcbiAgICBjb25zdCBub3RlRGV0YWlscyA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LW5vdGUtLW5vdGUtZGV0YWlscydcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvbkFyciA9IFtub3RlVGl0bGUsIG5vdGVEZXRhaWxzXTtcblxuICAgIGlmICh0aGlzLl92YWxpZGF0ZVRhc2sodmFsaWRhdGlvbkFycikpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiBub3RlVGl0bGUsXG4gICAgICAgIGRldGFpbHM6IG5vdGVEZXRhaWxzLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5fY2xlYXJGb3JtKCk7XG4gICAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuICAgICAgaGFuZGxlcihkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyRm9ybUVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlckZvcm1FcnJvcigpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgfVxuXG4gIF92YWxpZGF0ZVRhc2soYXJyKSB7XG4gICAgY29uc3QgW3RpdGxlLCBkZXRhaWxzXSA9IGFycjtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYWRkSGFuZGxlckFkZE5vdGUoaGFuZGxlcikge1xuICAgIHRoaXMuX2J0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMudXBsb2FkRGF0YS5iaW5kKHRoaXMsIGhhbmRsZXIpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWRkTm90ZVZpZXcoKTtcbiIsImltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuXG5jbGFzcyBBZGRQcm9qZWN0VmlldyBleHRlbmRzIE1vZGFsVmlldyB7XG4gIF9idG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1zdWJtaXQuc3VibWl0LS1uZXctcHJvamVjdCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICB1cGxvYWREYXRhKGhhbmRsZXIsIGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLm5ldy1wcm9qZWN0LS1wcm9qZWN0LXRpdGxlJ1xuICAgICkudmFsdWU7XG5cbiAgICBpZiAodGhpcy5fdmFsaWRhdGVUYXNrKHByb2plY3RUaXRsZSkpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiBwcm9qZWN0VGl0bGUsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9jbGVhckZvcm0oKTtcbiAgICAgIHRoaXMudG9nZ2xlV2luZG93KCk7XG4gICAgICBoYW5kbGVyKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJGb3JtRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyRm9ybUVycm9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICB9XG5cbiAgX3ZhbGlkYXRlVGFzayh0aXRsZSkge1xuICAgIGlmICghdGl0bGUgfHwgdGl0bGUubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJBZGRQcm9qZWN0KGhhbmRsZXIpIHtcbiAgICB0aGlzLl9idG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLnVwbG9hZERhdGEuYmluZCh0aGlzLCBoYW5kbGVyKVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFkZFByb2plY3RWaWV3KCk7XG4iLCJpbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcblxuY2xhc3MgQWRkVGFza1ZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBfcHJpb3JpdHlMYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stLXRhc2stcHJpb3JpdHktd3JhcHBlcicpO1xuICBfYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tc3VibWl0LnN1Ym1pdC0tbmV3LXRhc2snKTtcbiAgX3Byb2plY3RTZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2stcHJvamVjdCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fYWRkSGFuZGxlclByaW9yaXR5KCk7XG4gICAgdGhpcy5fYWRkSGFuZGxlclNob3dNb2RhbCgpO1xuICAgIHRoaXMuX2FkZEhhbmRsZXJDbG9zZU1vZGFsKCk7XG4gIH1cblxuICB1cGxvYWREYXRhKGhhbmRsZXIsIGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLm5ldy10YXNrLS10YXNrLXRpdGxlJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrRGV0YWlscyA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LXRhc2stLXRhc2stZGV0YWlscydcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdGFza0RhdGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLm5ldy10YXNrLS10YXNrLWRhdGUnXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcucHJpb3JpdHktbGFiZWwtLWFjdGl2ZSdcbiAgICApPy50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IHRhc2tQcm9qZWN0ID1cbiAgICAgIHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLXByb2plY3QnKS52YWx1ZTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25BcnIgPSBbdGFza1RpdGxlLCB0YXNrRGV0YWlscywgdGFza0RhdGUsIHRhc2tQcmlvcml0eV07XG5cbiAgICBpZiAodGhpcy5fdmFsaWRhdGVUYXNrKHZhbGlkYXRpb25BcnIpKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogdGFza1RpdGxlLFxuICAgICAgICBkZXRhaWxzOiB0YXNrRGV0YWlscyxcbiAgICAgICAgZGF0ZTogdGFza0RhdGUsXG4gICAgICAgIHByaW9yaXR5OiB0YXNrUHJpb3JpdHksXG4gICAgICAgIHByb2plY3Q6IHRhc2tQcm9qZWN0LFxuICAgICAgICBpZDogYCR7dGFza0RhdGV9LS0ke3Rhc2tUaXRsZX1gLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5fY2xlYXJGb3JtKCk7XG4gICAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuICAgICAgaGFuZGxlcihkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyRm9ybUVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkSGFuZGxlckFkZFRhc2soaGFuZGxlcikge1xuICAgIHRoaXMuX2J0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMudXBsb2FkRGF0YS5iaW5kKHRoaXMsIGhhbmRsZXIpXG4gICAgKTtcbiAgfVxuXG4gIF9hZGRIYW5kbGVyUHJpb3JpdHkoKSB7XG4gICAgdGhpcy5fcHJpb3JpdHlMYWJlbHMuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLl90b2dnbGVQcmlvcml0eS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIF90b2dnbGVQcmlvcml0eShlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy10YXNrLS10YXNrLXByaW9yaXR5LWxhYmVsJykpIHJldHVybjtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5ldy10YXNrLS10YXNrLXByaW9yaXR5LWxhYmVsJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktbGFiZWwtLWFjdGl2ZScpKTtcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnKTtcbiAgfVxuXG4gIF92YWxpZGF0ZVRhc2soYXJyKSB7XG4gICAgY29uc3QgW3RpdGxlLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eV0gPSBhcnI7XG4gICAgaWYgKCF0aXRsZSB8fCAhZGF0ZSB8fCAhcHJpb3JpdHkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfcmVuZGVyRm9ybUVycm9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICB9XG5cbiAgcmVuZGVyUHJvamVjdE9wdGlvbnMocHJvamVjdHNBcnIpIHtcbiAgICBjb25zdCBtYXJrdXAgPSB0aGlzLl9nZW5lcmF0ZVByb2pPcHRpb25zTWFya3VwKHByb2plY3RzQXJyKTtcblxuICAgIHRoaXMuX2NsZWFyUHJvamVjdE9wdGlvbnMoKTtcblxuICAgIHRoaXMuX3Byb2plY3RTZWxlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZVByb2pPcHRpb25zTWFya3VwKHByb2plY3RzQXJyKSB7XG4gICAgY29uc3QgbWFya3VwQXJyID0gW107XG5cbiAgICBwcm9qZWN0c0Fyci5zbGljZSgxKS5mb3JFYWNoKChwcm9qZWN0KSA9PlxuICAgICAgbWFya3VwQXJyLnB1c2goYFxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7cHJvamVjdC50aXRsZX1cIj4ke3Byb2plY3QudGl0bGV9PC9vcHRpb24+XG4gICAgYClcbiAgICApO1xuXG4gICAgcmV0dXJuIG1hcmt1cEFyci5qb2luKCcnKTtcbiAgfVxuXG4gIF9jbGVhclByb2plY3RPcHRpb25zKCkge1xuICAgIHRoaXMuX3Byb2plY3RTZWxlY3Rpb24uaW5uZXJIVE1MID0gYFxuICAgIDxvcHRpb24gdmFsdWU9XCJIb21lXCI+SG9tZTwvb3B0aW9uPlxuICAgIGA7XG4gIH1cblxuICBhZGRIYW5kbGVyUmVuZGVyUHJvamVjdHNPbkZvcm0oaGFuZGxlcikge1xuICAgIHRoaXMuX2J0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBZGRUYXNrVmlldygpO1xuIiwiaW1wb3J0IE1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5cbmNsYXNzIERldGFpbHNWaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRhc2stZGV0YWlscycpO1xuICBfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcbiAgX292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICBfdGFza0RldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRhc2stZGV0YWlscycpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzaG93RGV0YWlscyhoYW5kbGVyLCBlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZGV0YWlscycpKSByZXR1cm47XG5cbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZGF0YXNldC5pZDtcblxuICAgIHRoaXMudG9nZ2xlV2luZG93KCk7XG5cbiAgICBoYW5kbGVyKGlkKTtcblxuICAgIHRoaXMuX2J0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24tLWNsb3NlLWRldGFpbHMtbW9kYWwnKTtcbiAgICB0aGlzLl9hZGRIYW5kbGVyQ2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgYWxsb3dUYXNrRWRpdChoYW5kbGVyLCBlKSB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcubW9kYWwtLXRhc2stZGV0YWlscycpLmRhdGFzZXQuaWQ7XG5cbiAgICB0aGlzLl9jbGVhcigpO1xuXG4gICAgaGFuZGxlcihpZCk7XG4gIH1cblxuICBkZWxldGVUYXNrKGhhbmRsZXIsIGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZGF0YXNldC5pZDtcblxuICAgIGhhbmRsZXIoaWQpO1xuICB9XG5cbiAgZGVsZXRlVGFza09uTW9kYWwoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLS10YXNrLWRldGFpbHMnKS5kYXRhc2V0LmlkO1xuXG4gICAgaGFuZGxlcihpZCk7XG4gIH1cblxuICBhZGRIYW5kbGVyVGFza0RldGFpbHMoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKVxuICAgICAgLmZvckVhY2goKGVsKSA9PlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd0RldGFpbHMuYmluZCh0aGlzLCBoYW5kbGVyKSlcbiAgICAgICk7XG4gIH1cblxuICBhZGRIYW5kbGVyRWRpdFRhc2soaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscy0taWNvbi13cmFwcGVyLnRhc2stZWRpdCcpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFsbG93VGFza0VkaXQuYmluZCh0aGlzLCBoYW5kbGVyKSk7XG4gIH1cblxuICBhZGRIYW5kbGVyRGVsZXRlVGFzayhoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubWF0ZXJpYWwtaWNvbnMuaWNvbi0tZGVsZXRlLnRhc2stZGlzcGxheS0taWNvbnMnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlVGFzay5iaW5kKHRoaXMsIGhhbmRsZXIpKVxuICAgICAgKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJEZWxldGVUYXNrT25Nb2RhbChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzLS1pY29uLXdyYXBwZXIudGFzay1kZWxldGUnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVUYXNrT25Nb2RhbC5iaW5kKHRoaXMsIGhhbmRsZXIpKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZU1hcmt1cCgpIHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tY2xvc2UtZGV0YWlscy1tb2RhbFwiPiBjbG9zZSA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stdGl0bGVcIj4ke3RoaXMuX2RhdGEudGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stZGV0YWlsc1wiPlxuICAgICAgICAgICR7dGhpcy5fZGF0YS5kZXRhaWxzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1kYXRlLXdyYXBwZXJcIj5cbiAgICAgICAgICBEdWUgZGF0ZTpcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1kYXRlXCI+JHt0aGlzLl9kYXRhLmRhdGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1wcmlvcml0eS13cmFwcGVyXCI+XG4gICAgICAgICAgUHJpb3JpdHk6XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLXByaW9yaXR5IHRhc2stZGV0YWlscy0tdGFzay1wcmlvcml0eS0ke3RoaXMuX2RhdGEucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1cIlxuICAgICAgICAgICAgPiR7dGhpcy5fZGF0YS5wcmlvcml0eX08L3NwYW5cbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stc3RhdHVzLXdyYXBwZXJcIj5cbiAgICAgICAgICBTdGF0dXM6XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLXN0YXR1c1wiXG4gICAgICAgICAgICA+JHtcbiAgICAgICAgICAgICAgdGhpcy5fZGF0YS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gJ0NvbXBsZXRlZCcgOiAnT24tZ29pbmcnXG4gICAgICAgICAgICB9PC9zcGFuXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzLS10YXNrLXByb2plY3Qtd3JhcHBlclwiPlxuICAgICAgICAgIFByb2plY3Q6XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWRldGFpbHMtLXRhc2stcHJvamVjdFwiPiR7dGhpcy5fZGF0YS5wcm9qZWN0fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy0tdGFzay1lZGl0b3Itd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLWljb24td3JhcHBlciB0YXNrLWVkaXRcIj5cbiAgICAgICAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uLS1lZGl0IHRhc2stZGV0YWlscy0taWNvbnNcIj5cbiAgICAgICAgICAgICAgbW9kZV9lZGl0XG4gICAgICAgICAgICA8L3NwYW4+IC0tPlxuICAgICAgICAgICAgRWRpdFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtLWljb24td3JhcHBlciB0YXNrLWRlbGV0ZVwiPlxuICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWRlbGV0ZSB0YXNrLWRldGFpbHMtLWljb25zXCI+XG4gICAgICAgICAgICAgIGRlbGV0ZVxuICAgICAgICAgICAgPC9zcGFuPiAtLT5cbiAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5kYXRhc2V0LmlkID0gdGhpcy5fZGF0YS5pZDtcblxuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IERldGFpbHNWaWV3KCk7XG4iLCJpbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcblxuY2xhc3MgRWRpdFByb2plY3RWaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRhc2stZGV0YWlscycpO1xuICBfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcbiAgX3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlzcGxheS0tcHJvamVjdC10aXRsZScpO1xuXG4gIF9idG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLS1jbG9zZS1lZGl0b3ItbW9kYWwnKTtcbiAgX2J0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXRvci0taWNvbi13cmFwcGVyLnRhc2stc2F2ZScpO1xuICBfYnRuRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdG9yLS1pY29uLXdyYXBwZXIudGFzay1kZWxldGUnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc2hvd0VkaXRvck1vZGFsKGhhbmRsZXIsIGUpIHtcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnRhc2stZGlzcGxheS0tcHJvamVjdC10aXRsZSdcbiAgICApLnRleHRDb250ZW50O1xuXG4gICAgdGhpcy50b2dnbGVXaW5kb3coKTtcblxuICAgIGhhbmRsZXIoaWQpO1xuXG4gICAgdGhpcy5fYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi0tY2xvc2UtZWRpdG9yLW1vZGFsJyk7XG4gICAgdGhpcy5fYWRkSGFuZGxlckNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIHNhdmVFZGl0KGhhbmRsZXIsIGUpIHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnByb2plY3QtZWRpdG9yLS1wcm9qZWN0LXRpdGxlJ1xuICAgICkudmFsdWU7XG5cbiAgICBpZiAodGhpcy5fdmFsaWRhdGVUYXNrKHByb2plY3RUaXRsZSkpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiBwcm9qZWN0VGl0bGUsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuICAgICAgaGFuZGxlcih0aGlzLl9wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQsIGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJGb3JtRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVQcm9qZWN0T25Nb2RhbChoYW5kbGVyLCBlKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLl90aXRsZTtcblxuICAgIGhhbmRsZXIoaWQpO1xuICB9XG5cbiAgYWRkSGFuZGxlclNob3dFZGl0b3IoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLnRhc2stZGlzcGxheS0tcHJvamVjdC1idG4tZWRpdCcpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dFZGl0b3JNb2RhbC5iaW5kKHRoaXMsIGhhbmRsZXIpKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJTYXZlRWRpdChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1lZGl0b3ItLWljb24td3JhcHBlci5wcm9qZWN0LXNhdmUnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zYXZlRWRpdC5iaW5kKHRoaXMsIGhhbmRsZXIpKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJEZWxldGVQcm9qZWN0T25Nb2RhbChoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1lZGl0b3ItLWljb24td3JhcHBlci5wcm9qZWN0LWRlbGV0ZScpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZVByb2plY3RPbk1vZGFsLmJpbmQodGhpcywgaGFuZGxlcikpO1xuICB9XG5cbiAgX2dlbmVyYXRlTWFya3VwKCkge1xuICAgIC8vIDxkaXYgY2xhc3M9XCJtb2RhbC0tdGFzay1kZXRhaWxzbW9kYWwtLXRhc2stZWRpdG9yXCI+XG4gICAgY29uc3QgbWFya3VwID0gYFxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWNsb3NlLWVkaXRvci1tb2RhbFwiPiBjbG9zZSA8L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzPVwicHJvamVjdC1lZGl0b3ItLWZvcm0tZWxlbWVudCBwcm9qZWN0LWVkaXRvci0tcHJvamVjdC10aXRsZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2FtcGxlIFRpdGxlXCJcbiAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5fZGF0YS50aXRsZX1cIlxuICAgICAgICAgIG1pbmxlbmd0aD1cIjFcIlxuICAgICAgICAgIG1heGxlbmd0aD1cIjYwXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1lZGl0b3ItLXByb2plY3QtZWRpdG9yLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1lZGl0b3ItLWljb24td3JhcHBlciBwcm9qZWN0LXNhdmVcIj5TYXZlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZWRpdG9yLS1pY29uLXdyYXBwZXIgcHJvamVjdC1kZWxldGVcIj5EZWxldGU8L2Rpdj5cbiAgICAgICAgPC9kaXY+IFxuICAgIGA7XG5cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1wcm9qZWN0LWVkaXRvcicpO1xuXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5kYXRhc2V0LmlkID0gdGhpcy5fZGF0YS50aXRsZTtcblxuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBfdmFsaWRhdGVUYXNrKHRpdGxlKSB7XG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF9yZW5kZXJGb3JtRXJyb3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2Zvcm0gZXJyb3InKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRWRpdFByb2plY3RWaWV3KCk7XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IE1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5pbXBvcnQgYWRkVGFza1ZpZXcgZnJvbSAnLi9hZGRUYXNrVmlldyc7XG5cbmNsYXNzIEVkaXRUYXNrVmlldyBleHRlbmRzIE1vZGFsVmlldyB7XG4gIF9wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcbiAgX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tdGFzay1kZXRhaWxzJyk7XG4gIF9wcm9qZWN0U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcm9qZWN0Jyk7XG5cbiAgX2J0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24tLWNsb3NlLWVkaXRvci1tb2RhbCcpO1xuICBfYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdG9yLS1pY29uLXdyYXBwZXIudGFzay1zYXZlJyk7XG4gIF9idG5EZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0b3ItLWljb24td3JhcHBlci50YXNrLWRlbGV0ZScpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzaG93RWRpdG9yTW9kYWwoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5kYXRhc2V0LmlkO1xuXG4gICAgdGhpcy50b2dnbGVXaW5kb3coKTtcblxuICAgIGhhbmRsZXIoaWQpO1xuXG4gICAgdGhpcy5fYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi0tY2xvc2UtZWRpdG9yLW1vZGFsJyk7XG4gICAgdGhpcy5fYWRkSGFuZGxlckNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIHNhdmVFZGl0KGhhbmRsZXIsIGUpIHtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnRhc2stZWRpdG9yLS10YXNrLXRpdGxlJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrRGV0YWlscyA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcudGFzay1lZGl0b3ItLXRhc2stZGV0YWlscydcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdGFza0RhdGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnRhc2stZWRpdG9yLS10YXNrLWRhdGUnXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcucHJpb3JpdHktbGFiZWwtLWFjdGl2ZSdcbiAgICApPy50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IHRhc2tTdGF0dXMgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnRhc2stZWRpdG9yLS10YXNrLXN0YXR1czpjaGVja2VkJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrUHJvamVjdCA9XG4gICAgICB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stcHJvamVjdCcpLnZhbHVlO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvbkFyciA9IFtcbiAgICAgIHRhc2tUaXRsZSxcbiAgICAgIHRhc2tEZXRhaWxzLFxuICAgICAgdGFza0RhdGUsXG4gICAgICB0YXNrUHJpb3JpdHksXG4gICAgICB0YXNrU3RhdHVzLFxuICAgICAgdGFza1Byb2plY3QsXG4gICAgXTtcblxuICAgIGlmICh0aGlzLl92YWxpZGF0ZVRhc2sodmFsaWRhdGlvbkFycikpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiB0YXNrVGl0bGUsXG4gICAgICAgIGRldGFpbHM6IHRhc2tEZXRhaWxzLFxuICAgICAgICBkYXRlOiB0YXNrRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHRhc2tQcmlvcml0eSxcbiAgICAgICAgc3RhdHVzOiB0YXNrU3RhdHVzLFxuICAgICAgICBwcm9qZWN0OiB0YXNrUHJvamVjdCxcbiAgICAgICAgaWQ6IGAke3Rhc2tEYXRlfS0tJHt0YXNrVGl0bGV9YCxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMudG9nZ2xlV2luZG93KCk7XG4gICAgICBoYW5kbGVyKHRoaXMuX3BhcmVudEVsZW1lbnQuZGF0YXNldC5pZCwgZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlckZvcm1FcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZVRhc2tPbk1vZGFsKGhhbmRsZXIsIGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbC0tdGFzay1kZXRhaWxzJykuZGF0YXNldC5pZDtcblxuICAgIGhhbmRsZXIoaWQpO1xuICB9XG5cbiAgYWRkSGFuZGxlclNob3dFZGl0b3IoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm1hdGVyaWFsLWljb25zLmljb24tLWVkaXQudGFzay1kaXNwbGF5LS1pY29ucycpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93RWRpdG9yTW9kYWwuYmluZCh0aGlzLCBoYW5kbGVyKSlcbiAgICAgICk7XG4gIH1cblxuICBhZGRIYW5kbGVyU2F2ZUVkaXQoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdG9yLS1pY29uLXdyYXBwZXIudGFzay1zYXZlJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2F2ZUVkaXQuYmluZCh0aGlzLCBoYW5kbGVyKSk7XG4gIH1cblxuICBhZGRIYW5kbGVyRGVsZXRlVGFza09uTW9kYWwoaGFuZGxlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdG9yLS1pY29uLXdyYXBwZXIudGFzay1kZWxldGUnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVUYXNrT25Nb2RhbC5iaW5kKHRoaXMsIGhhbmRsZXIpKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJQcmlvcml0eSgpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eS13cmFwcGVyJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX3RvZ2dsZVByaW9yaXR5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgX2dlbmVyYXRlTWFya3VwKCkge1xuICAgIC8vIDxkaXYgY2xhc3M9XCJtb2RhbC0tdGFzay1kZXRhaWxzbW9kYWwtLXRhc2stZWRpdG9yXCI+XG4gICAgY29uc3QgbWFya3VwID0gYFxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWNsb3NlLWVkaXRvci1tb2RhbFwiPiBjbG9zZSA8L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLWZvcm0tZWxlbWVudCB0YXNrLWVkaXRvci0tdGFzay10aXRsZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGl0bGUgaGVyZVwiXG4gICAgICAgICAgdmFsdWU9XCIke3RoaXMuX2RhdGEudGl0bGV9XCJcbiAgICAgICAgICBtaW5sZW5ndGg9XCIxXCJcbiAgICAgICAgICBtYXhsZW5ndGg9XCI2MFwiXG4gICAgICAgIC8+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLWZvcm0tZWxlbWVudCB0YXNrLWVkaXRvci0tdGFzay1kZXRhaWxzXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBkZXRhaWxzIGhlcmVcIlxuICAgICAgICAgIG1heGxlbmd0aD1cIjI0MFwiXG4gICAgICAgID4ke3RoaXMuX2RhdGEuZGV0YWlscyA/IHRoaXMuX2RhdGEuZGV0YWlscyA6ICcnfTwvdGV4dGFyZWE+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLWRhdGUtd3JhcHBlclwiPlxuICAgICAgICAgIER1ZSBkYXRlOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tZm9ybS1lbGVtZW50IHRhc2stZWRpdG9yLS10YXNrLWRhdGVcIlxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgdmFsdWU9XCIke3RoaXMuX2RhdGEuZGF0ZX1cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eS13cmFwcGVyXCI+XG4gICAgICAgICAgPHAgZm9yPVwidGFzay1lZGl0b3ItcHJpb3JpdHlcIj5Qcmlvcml0eTo8L3A+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eSBwcmlvcml0eS1sb3dcIlxuICAgICAgICAgICAgbmFtZT1cInRhc2stZWRpdG9yLXByaW9yaXR5XCJcbiAgICAgICAgICAgIHZhbHVlPVwibG93XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgZm9yPVwidGFzay1lZGl0b3ItcHJpb3JpdHlcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eS1sYWJlbCBwcmlvcml0eS1sYWJlbC1sb3cgJHtcbiAgICAgICAgICAgICAgdGhpcy5fZGF0YS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSAnbG93J1xuICAgICAgICAgICAgICAgID8gJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+TG93PC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5IHByaW9yaXR5LW1lZGl1bVwiXG4gICAgICAgICAgICBuYW1lPVwidGFzay1lZGl0b3ItcHJpb3JpdHlcIlxuICAgICAgICAgICAgdmFsdWU9XCJtZWRpdW1cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBmb3I9XCJ0YXNrLWVkaXRvci1wcmlvcml0eVwiXG4gICAgICAgICAgICBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5LWxhYmVsIHByaW9yaXR5LWxhYmVsLW1lZGl1bSAke1xuICAgICAgICAgICAgICB0aGlzLl9kYXRhLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09ICdtZWRpdW0nXG4gICAgICAgICAgICAgICAgPyAncHJpb3JpdHktbGFiZWwtLWFjdGl2ZSdcbiAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID5NZWRpdW08L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHkgcHJpb3JpdHktaGlnaFwiXG4gICAgICAgICAgICBuYW1lPVwidGFzay1lZGl0b3ItcHJpb3JpdHlcIlxuICAgICAgICAgICAgdmFsdWU9XCJoaWdoXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgZm9yPVwidGFzay1lZGl0b3ItcHJpb3JpdHlcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1wcmlvcml0eS1sYWJlbCBwcmlvcml0eS1sYWJlbC1oaWdoICR7XG4gICAgICAgICAgICAgIHRoaXMuX2RhdGEucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gJ2hpZ2gnXG4gICAgICAgICAgICAgICAgPyAncHJpb3JpdHktbGFiZWwtLWFjdGl2ZSdcbiAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID5IaWdoPC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXN0YXR1cy13cmFwcGVyXCI+XG4gICAgICAgICAgU3RhdHVzOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLWZvcm0tZWxlbWVudCB0YXNrLWVkaXRvci0tdGFzay1zdGF0dXNcIlxuICAgICAgICAgICAgbmFtZT1cInRhc2stZWRpdG9yLXN0YXR1c1wiXG4gICAgICAgICAgICB2YWx1ZT1cImNvbXBsZXRlZFwiXG4gICAgICAgICAgICAke3RoaXMuX2RhdGEuc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICdjaGVja2VkJyA6ICcnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZWRpdG9yLXN0YXR1c1wiIGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stc3RhdHVzLWxhYmVsXCJcbiAgICAgICAgICAgID5Db21wbGV0ZWQ8L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIGNsYXNzPVwidGFzay1lZGl0b3ItLWZvcm0tZWxlbWVudCB0YXNrLWVkaXRvci0tdGFzay1zdGF0dXNcIlxuICAgICAgICAgICAgbmFtZT1cInRhc2stZWRpdG9yLXN0YXR1c1wiXG4gICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAke3RoaXMuX2RhdGEuc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICcnIDogJ2NoZWNrZWQnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZWRpdG9yLXN0YXR1c1wiIGNsYXNzPVwidGFzay1lZGl0b3ItLXRhc2stc3RhdHVzLWxhYmVsXCJcbiAgICAgICAgICAgID5Pbi1nb2luZzwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZWRpdG9yLS10YXNrLXByb2plY3Qtd3JhcHBlclwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0LXRhc2stcHJvamVjdFwiPlByb2plY3Q6PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJlZGl0LXRhc2stcHJvamVjdFwiIGlkPVwiZWRpdC10YXNrLXByb2plY3RcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke3RoaXMuX2RhdGEucHJvamVjdH1cIj4ke3RoaXMuX2RhdGEucHJvamVjdH08L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXRvci0tdGFzay1lZGl0b3Itd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXRvci0taWNvbi13cmFwcGVyIHRhc2stc2F2ZVwiPlNhdmU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1lZGl0b3ItLWljb24td3JhcHBlciB0YXNrLWRlbGV0ZVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tdGFzay1lZGl0b3InKTtcblxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuZGF0YXNldC5pZCA9IHRoaXMuX2RhdGEuaWQ7XG5cbiAgICByZXR1cm4gbWFya3VwO1xuICB9XG5cbiAgX3RvZ2dsZVByaW9yaXR5KGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1lZGl0b3ItLXRhc2stcHJpb3JpdHktbGFiZWwnKSlcbiAgICAgIHJldHVybjtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZWRpdG9yLS10YXNrLXByaW9yaXR5LWxhYmVsJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktbGFiZWwtLWFjdGl2ZScpKTtcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnKTtcbiAgfVxuXG4gIF92YWxpZGF0ZVRhc2soYXJyKSB7XG4gICAgY29uc3QgW3RpdGxlLCBfLCBkYXRlLCBwcmlvcml0eSwgc3RhdHVzXSA9IGFycjtcbiAgICBpZiAoIXRpdGxlIHx8ICFkYXRlIHx8ICFwcmlvcml0eSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF9yZW5kZXJGb3JtRXJyb3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2Zvcm0gZXJyb3InKTtcbiAgfVxuXG4gIHJlbmRlclByb2plY3RPcHRpb25zKHByb2plY3RzQXJyLCB0YXNrVG9FZGl0KSB7XG4gICAgY29uc3QgbWFya3VwID0gdGhpcy5fZ2VuZXJhdGVQcm9qT3B0aW9uc01hcmt1cChwcm9qZWN0c0FyciwgdGFza1RvRWRpdCk7XG5cbiAgICB0aGlzLl9jbGVhclByb2plY3RPcHRpb25zKHRhc2tUb0VkaXQpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXByb2plY3QnKVxuICAgICAgLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG1hcmt1cCk7XG4gIH1cblxuICBfZ2VuZXJhdGVQcm9qT3B0aW9uc01hcmt1cChwcm9qZWN0c0FyciwgdGFzaykge1xuICAgIGNvbnN0IG1hcmt1cEFyciA9IFtdO1xuXG4gICAgcHJvamVjdHNBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHRhc2sucHJvamVjdCAhPT0gcHJvamVjdC50aXRsZSkge1xuICAgICAgICBtYXJrdXBBcnIucHVzaChgXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qZWN0LnRpdGxlfVwiPiR7cHJvamVjdC50aXRsZX08L29wdGlvbj5cbiAgICBgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXJrdXBBcnIuam9pbignJyk7XG4gIH1cblxuICBfY2xlYXJQcm9qZWN0T3B0aW9ucyh0YXNrKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcm9qZWN0JykuaW5uZXJIVE1MID0gYFxuICAgIDxvcHRpb24gdmFsdWU9XCIke3Rhc2sucHJvamVjdH1cIj4ke3Rhc2sucHJvamVjdH08L29wdGlvbj5cbiAgICBgO1xuICB9XG5cbiAgYWRkSGFuZGxlclJlbmRlclByb2plY3RzT25Gb3JtKGhhbmRsZXIsIHRhc2spIHtcbiAgICBoYW5kbGVyKHRhc2spO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFZGl0VGFza1ZpZXcoKTtcbiIsImltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuXG5jbGFzcyBGb3JtVmlldyBleHRlbmRzIE1vZGFsVmlldyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hZGRIYW5kbGVyTW9kYWxTaWRlYmFyKCk7XG4gIH1cblxuICB0b2dnbGVGb3JtRGlzcGxheShlKSB7XG4gICAgLy8gSGlkZXMgYWxsIGZvcm1zXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50LWZvcm0nKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSk7XG5cbiAgICAvLyBFc3RhYmxpc2hlcyB3aGljaCBmb3JtIHRvIHNob3dcbiAgICBjb25zdCBmb3JtVHlwZSA9IEFycmF5LmZyb20oZS50YXJnZXQuY2xhc3NMaXN0KVsxXS5zcGxpdCgnbmV3LScpWzFdO1xuXG4gICAgdGhpcy5fY2xlYXJGb3JtKCk7XG5cbiAgICAvLyBTaG93IGZvcm0gdG8gZGlzcGxheVxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGAuY29udGVudC1mb3JtLS1uZXctJHtmb3JtVHlwZX1gKVxuICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9XG5cbiAgYWRkSGFuZGxlck1vZGFsU2lkZWJhcigpIHtcbiAgICAvLyBDaGFuZ2VzIHRoZSBmb3JtIGRpc3BsYXlcbiAgICB0aGlzLl9zaWRlYmFyTGFiZWxzLmZvckVhY2goKGVsKSA9PlxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUZvcm1EaXNwbGF5LmJpbmQodGhpcykpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRm9ybVZpZXcoKTtcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsVmlldyBleHRlbmRzIFZpZXcge1xuICBfZXJyb3JNZXNzYWdlID0gJ0Zvcm0gaW5wdXQgaW52YWxpZCc7XG5cbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stLWNvbnRlbnQnKTtcbiAgX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tYWRkLXRhc2snKTtcbiAgX3NpZGViYXJMYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci0tbGFiZWwnKTtcbiAgX292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuXG4gIF9idG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi5hZGQtdGFzaycpO1xuICBfYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcubWF0ZXJpYWwtaWNvbnMuaWNvbi0tY2xvc2UtYWRkLW5ldy1tb2RhbCdcbiAgKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgdG9nZ2xlV2luZG93KCkge1xuICAgIHRoaXMuX292ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgdGhpcy5fd2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9XG5cbiAgX2FkZEhhbmRsZXJTaG93TW9kYWwoKSB7XG4gICAgLy8gU2hvd3Mvb3BlbnMgdGhlIG1vZGFsXG4gICAgdGhpcy5fYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlV2luZG93LmJpbmQodGhpcykpO1xuICB9XG5cbiAgX2FkZEhhbmRsZXJDbG9zZU1vZGFsKCkge1xuICAgIC8vIENsb3NlcyB0aGUgbW9kYWxcbiAgICB0aGlzLl9idG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlV2luZG93LmJpbmQodGhpcykpO1xuICAgIC8vIHRoaXMuX292ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZVdpbmRvdy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9jbGVhckZvcm0oKSB7XG4gICAgLy8gQ2xlYXIgdGFzayBmb3JtXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctdGFzay0tZm9ybS1lbGVtZW50JylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gKGVsLnZhbHVlID0gJycpKTtcblxuICAgIC8vIENsZWFyIHByb2plY3QgZm9ybVxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXByb2plY3QtLWZvcm0tZWxlbWVudCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IChlbC52YWx1ZSA9ICcnKSk7XG5cbiAgICAvLyBDbGVhciBub3RlIGZvcm1cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5ldy1ub3RlLS1mb3JtLWVsZW1lbnQnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiAoZWwudmFsdWUgPSAnJykpO1xuXG4gICAgLy8gQ2xlYXIgcHJpb3JpdHkgY2hvaWNlXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctdGFzay0tdGFzay1wcmlvcml0eS1sYWJlbCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5LWxhYmVsLS1hY3RpdmUnKSk7XG5cbiAgICAvLyBDbGVhciB0YXNrIGRhdGVcbiAgICBpZiAodGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stLXRhc2stZGF0ZScpKSB7XG4gICAgICB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay0tdGFzay1kYXRlJykudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgZGV0YWlsc1ZpZXcgZnJvbSAnLi9kZXRhaWxzVmlldyc7XG5cbmNsYXNzIFByb2plY3RWaWV3IGV4dGVuZHMgVmlldyB7XG4gIF93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXN1YmRpdi5wcm9qZWN0LS1oZWFkZXInKTtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaXNwbGF5Jyk7XG4gIF90aXRsZSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBfZ2VuZXJhdGVNYXJrdXAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5fZGF0YSk7XG4gICAgY29uc3QgbWFya3VwID0gYDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktLXByb2plY3QtdGl0bGVcIj4ke1xuICAgICAgdGhpcy5fZGF0YVswXSA/IHRoaXMuX2RhdGFbMF0ucHJvamVjdCA6IHRoaXMuX3RpdGxlXG4gICAgfTwvZGl2PiBcbiAgICAgICR7dGhpcy5fZGF0YS5tYXAodGhpcy5fZ2VuZXJhdGVUYXNrTWFya3VwKS5qb2luKCcnKX0gXG4gICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGlzcGxheS0tcHJvamVjdC1idG4tZWRpdCBidG5cIj5FZGl0IFByb2plY3Q8L2Rpdj5gO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBfZ2VuZXJhdGVUYXNrTWFya3VwKHRhc2spIHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzayBwcmlvcml0eS0ke3Rhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1cIiBkYXRhLWlkPVwiJHtcbiAgICAgIHRhc2suaWRcbiAgICB9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY2hlY2tib3ggJHtcbiAgICAgICAgICAgIHRhc2suc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICd0YXNrLWNoZWNrYm94LS1jaGVja2VkJyA6ICcnXG4gICAgICAgICAgfVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXRpdGxlICR7XG4gICAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAndGFzay0tY29tcGxldGVkJyA6ICcnXG4gICAgICAgICAgfVwiPiR7dGFzay50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzXCI+RGV0YWlsczwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRhdGVcIj4ke3Rhc2suZGF0ZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kaXNwbGF5LS1pY29uLXdyYXBwZXIgdGFzay1lZGl0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWVkaXQgdGFzay1kaXNwbGF5LS1pY29uc1wiPiBtb2RlX2VkaXQgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktLWljb24td3JhcHBlciB0YXNrLWRlbGV0ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uLS1kZWxldGUgdGFzay1kaXNwbGF5LS1pY29uc1wiPiBkZWxldGUgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgYWRkSGFuZGxlclNob3dQcm9qZWN0KGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtc3ViZGl2LS1jb250ZW50LnByb2plY3QtLXRpdGxlJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT5cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dQcm9qZWN0LmJpbmQodGhpcywgaGFuZGxlcikpXG4gICAgICApO1xuICB9XG5cbiAgc2hvd1Byb2plY3QoaGFuZGxlciwgZSkge1xuICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICBoYW5kbGVyKHRpdGxlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvamVjdFZpZXcoKTtcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNsYXNzIFNpZGViYXJWaWV3IGV4dGVuZHMgVmlldyB7XG4gIF93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJhcicpO1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtc3ViZGl2LnByb2plY3QtLWhlYWRlcicpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBfZ2VuZXJhdGVNYXJrdXAoKSB7XG4gICAgdGhpcy5fY2xlYXIoKTtcbiAgICBjb25zdCBtYXJrdXAgPSB0aGlzLl9kYXRhLm1hcCh0aGlzLl9nZW5lcmF0ZVByb2plY3RNYXJrdXApLmpvaW4oJycpO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBfZ2VuZXJhdGVQcm9qZWN0TWFya3VwKHByb2plY3QpIHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgPHAgY2xhc3M9XCJuYXYtc3ViZGl2LS1jb250ZW50IHByb2plY3QtLXRpdGxlXCI+JHtwcm9qZWN0LnRpdGxlfTwvcD5gO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBhZGRIYW5kbGVyU2hvd1Byb2plY3QoaGFuZGxlcikge1xuICAgIHRoaXMuX3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC0tdGl0bGUnKSkgcmV0dXJuO1xuICAgICAgY29uc29sZS5sb2coJ2hpJyk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNpZGViYXJWaWV3KCk7XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IGRldGFpbHNWaWV3IGZyb20gJy4vZGV0YWlsc1ZpZXcnO1xuXG5jbGFzcyBUYXNrVmlldyBleHRlbmRzIFZpZXcge1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpc3BsYXknKTtcbiAgX3Rhc2tEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10YXNrLWRldGFpbHMnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgX2dlbmVyYXRlTWFya3VwKCkge1xuICAgIGNvbnN0IG1hcmt1cCA9IHRoaXMuX2RhdGEubWFwKHRoaXMuX2dlbmVyYXRlVGFza01hcmt1cCkuam9pbignJyk7XG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxuXG4gIF9nZW5lcmF0ZVRhc2tNYXJrdXAodGFzaykge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrIHByaW9yaXR5LSR7dGFzay5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgdGFzay5pZFxuICAgIH1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jaGVja2JveCAke1xuICAgICAgICAgICAgdGFzay5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gJ3Rhc2stY2hlY2tib3gtLWNoZWNrZWQnIDogJydcbiAgICAgICAgICB9XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stdGl0bGUgJHtcbiAgICAgICAgICAgIHRhc2suc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICd0YXNrLS1jb21wbGV0ZWQnIDogJydcbiAgICAgICAgICB9XCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHNcIj5EZXRhaWxzPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGF0ZVwiPiR7dGFzay5kYXRlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktLWljb24td3JhcHBlciB0YXNrLWVkaXRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tZWRpdCB0YXNrLWRpc3BsYXktLWljb25zXCI+IG1vZGVfZWRpdCA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGlzcGxheS0taWNvbi13cmFwcGVyIHRhc2stZGVsZXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb24tLWRlbGV0ZSB0YXNrLWRpc3BsYXktLWljb25zXCI+IGRlbGV0ZSA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmA7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0ZWQoaGFuZGxlciwgZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWNoZWNrYm94JykpIHJldHVybjtcblxuICAgIGNvbnN0IHRhc2tUb01hcmsgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpO1xuICAgIGNvbnN0IGlkID0gdGFza1RvTWFyay5kYXRhc2V0LmlkO1xuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1jaGVja2JveC0tY2hlY2tlZCcpO1xuXG4gICAgdGFza1RvTWFyay5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2stLWNvbXBsZXRlZCcpO1xuXG4gICAgaGFuZGxlcihpZCk7XG4gIH1cblxuICBhZGRIYW5kbGVyVG9nZ2xlQ29tcGxldGVkKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT5cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUNvbXBsZXRlZC5iaW5kKHRoaXMsIGhhbmRsZXIpKVxuICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFza1ZpZXcoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIF9kYXRhO1xuXG4gIHJlbmRlcihkYXRhKSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgY29uc3QgbWFya3VwID0gdGhpcy5fZ2VuZXJhdGVNYXJrdXAoKTtcblxuICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBtYXJrdXApO1xuICB9XG5cbiAgcmVuZGVyRXJyb3IoTWVzc2FnZSA9IHRoaXMuX2Vycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5cbiAgICA8cD4ke21lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PmA7XG5cbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgbW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5cbmltcG9ydCBhZGRUYXNrVmlldyBmcm9tICcuL3ZpZXdzL2FkZFRhc2tWaWV3JztcbmltcG9ydCBhZGRQcm9qZWN0VmlldyBmcm9tICcuL3ZpZXdzL2FkZFByb2plY3RWaWV3JztcbmltcG9ydCBhZGROb3RlVmlldyBmcm9tICcuL3ZpZXdzL2FkZE5vdGVWaWV3JztcblxuaW1wb3J0IHNpZGViYXJWaWV3IGZyb20gJy4vdmlld3Mvc2lkZWJhclZpZXcnO1xuaW1wb3J0IHRhc2tWaWV3IGZyb20gJy4vdmlld3MvdGFza1ZpZXcnO1xuaW1wb3J0IGRldGFpbHNWaWV3IGZyb20gJy4vdmlld3MvZGV0YWlsc1ZpZXcnO1xuaW1wb3J0IHByb2plY3RWaWV3IGZyb20gJy4vdmlld3MvcHJvamVjdFZpZXcnO1xuaW1wb3J0IGZvcm1WaWV3IGZyb20gJy4vdmlld3MvZm9ybVZpZXcnO1xuaW1wb3J0IG1vZGFsVmlldyBmcm9tICcuL3ZpZXdzL21vZGFsVmlldyc7XG5cbmltcG9ydCBlZGl0VGFza1ZpZXcgZnJvbSAnLi92aWV3cy9lZGl0VGFza1ZpZXcnO1xuaW1wb3J0IGVkaXRQcm9qZWN0VmlldyBmcm9tICcuL3ZpZXdzL2VkaXRQcm9qZWN0Vmlldyc7XG5cbi8vIEluZGV4IGpzIGZvciB0aGUgYXBwbGljYXRpb24gbG9naWMgKGNvbnRyb2xsZXIpXG5cbmNvbnN0IGNvbnRyb2xBZGRUYXNrID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgbW9kZWwuYWRkVGFzayhkYXRhKTtcblxuICB0YXNrVmlldy5yZW5kZXIobW9kZWwuc3RhdGUudGFza3MpO1xuXG4gIGFkZEhhbmRsZXJzVG9UYXNrKCk7XG59O1xuXG5jb25zdCBjb250cm9sQWRkUHJvamVjdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIG1vZGVsLmFkZFByb2plY3QoZGF0YSk7XG5cbiAgc2lkZWJhclZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLnByb2plY3RzLnNsaWNlKDEpKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xBZGROb3RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgbW9kZWwuYWRkTm90ZShkYXRhKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xTaG93UHJvamVjdHNPbkZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIGFkZFRhc2tWaWV3LnJlbmRlclByb2plY3RPcHRpb25zKG1vZGVsLnN0YXRlLnByb2plY3RzKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xTaG93UHJvamVjdHNPbkVkaXRvciA9IGZ1bmN0aW9uICh0YXNrVG9FZGl0KSB7XG4gIGVkaXRUYXNrVmlldy5yZW5kZXJQcm9qZWN0T3B0aW9ucyhtb2RlbC5zdGF0ZS5wcm9qZWN0cywgdGFza1RvRWRpdCk7XG59O1xuXG5jb25zdCBjb250cm9sU2hvd1Rhc2tzID0gZnVuY3Rpb24gKCkge1xuICB0YXNrVmlldy5yZW5kZXIobW9kZWwuc3RhdGUudGFza3MpO1xuICBzaWRlYmFyVmlldy5yZW5kZXIobW9kZWwuc3RhdGUucHJvamVjdHMuc2xpY2UoMSkpO1xuXG4gIHByb2plY3RWaWV3LmFkZEhhbmRsZXJTaG93UHJvamVjdChjb250cm9sU2hvd1Byb2plY3QpO1xufTtcblxuY29uc3QgY29udHJvbERlbGV0ZVRhc2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgbW9kZWwuZGVsZXRlVGFzayhpZCk7XG5cbiAgdGFza1ZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLnRhc2tzKTtcblxuICBhZGRIYW5kbGVyc1RvVGFzaygpO1xufTtcblxuY29uc3QgY29udHJvbERlbGV0ZVRhc2tPbk1vZGFsID0gZnVuY3Rpb24gKGlkKSB7XG4gIG1vZGVsLmRlbGV0ZVRhc2soaWQpO1xuXG4gIGRldGFpbHNWaWV3LnRvZ2dsZVdpbmRvdygpO1xuXG4gIHRhc2tWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS50YXNrcyk7XG5cbiAgYWRkSGFuZGxlcnNUb1Rhc2soKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xEZWxldGVQcm9qZWN0T25Nb2RhbCA9IGZ1bmN0aW9uIChpZCkge1xuICBtb2RlbC5kZWxldGVQcm9qZWN0KGlkKTtcblxuICBlZGl0UHJvamVjdFZpZXcudG9nZ2xlV2luZG93KCk7XG5cbiAgLy8gcHJvamVjdFZpZXcucmVuZGVyKGlkKTtcblxuICBjb250cm9sU2hvd1Rhc2tzKCk7XG4gIGFkZEhhbmRsZXJzVG9UYXNrKCk7XG59O1xuXG5jb25zdCBjb250cm9sU2F2ZUVkaXRUYXNrID0gZnVuY3Rpb24gKGlkLCByZXBsYWNlbWVudCkge1xuICBtb2RlbC51cGRhdGVUYXNrKGlkLCByZXBsYWNlbWVudCk7XG5cbiAgY29udHJvbFNob3dUYXNrcygpO1xuICBhZGRIYW5kbGVyc1RvVGFzaygpO1xufTtcblxuY29uc3QgY29udHJvbFNhdmVFZGl0UHJvamVjdCA9IGZ1bmN0aW9uIChpZCwgcmVwbGFjZW1lbnQpIHtcbiAgbW9kZWwudXBkYXRlUHJvamVjdChpZCwgcmVwbGFjZW1lbnQpO1xuXG4gIGNvbnN0IHRhc2tzVG9TaG93ID0gbW9kZWwuc3RhdGUudGFza3MuZmlsdGVyKFxuICAgIChlbCkgPT4gZWwucHJvamVjdCA9PT0gcmVwbGFjZW1lbnQudGl0bGVcbiAgKTtcblxuICBwcm9qZWN0Vmlldy5yZW5kZXIodGFza3NUb1Nob3cpO1xuXG4gIC8vIFVwZGF0ZSBzaWRlYmFyIHByb2plY3RzXG4gIHNpZGViYXJWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS5wcm9qZWN0cy5zbGljZSgxKSk7XG5cbiAgLy8gQWRkIGhhbmRsZXJzIHRvIHNpZGViYXIgcHJvamVjdHNcbiAgcHJvamVjdFZpZXcuYWRkSGFuZGxlclNob3dQcm9qZWN0KGNvbnRyb2xTaG93UHJvamVjdCk7XG5cbiAgLy8gQWRkIGhhbmRsZXJzIHRvIGFsbCB0YXNrc1xuICBhZGRIYW5kbGVyc1RvVGFzaygpO1xuXG4gIC8vIEFkZCBoYW5kbGVyIHRvIHByb2plY3QgZWRpdG9yXG4gIGVkaXRQcm9qZWN0Vmlldy5hZGRIYW5kbGVyU2hvd0VkaXRvcihjb250cm9sRWRpdFByb2plY3QpO1xufTtcblxuY29uc3QgY29udHJvbEVkaXRUYXNrID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IHRhc2tUb0VkaXQgPSBtb2RlbC5zdGF0ZS50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG5cbiAgZWRpdFRhc2tWaWV3LnJlbmRlcih0YXNrVG9FZGl0KTtcblxuICBlZGl0VGFza1ZpZXcuYWRkSGFuZGxlclJlbmRlclByb2plY3RzT25Gb3JtKFxuICAgIGNvbnRyb2xTaG93UHJvamVjdHNPbkVkaXRvcixcbiAgICB0YXNrVG9FZGl0XG4gICk7XG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyU2F2ZUVkaXQoY29udHJvbFNhdmVFZGl0VGFzayk7XG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyRGVsZXRlVGFza09uTW9kYWwoY29udHJvbERlbGV0ZVRhc2tPbk1vZGFsKTtcbiAgZWRpdFRhc2tWaWV3LmFkZEhhbmRsZXJQcmlvcml0eSgpO1xufTtcblxuY29uc3QgY29udHJvbFNob3dEZXRhaWxzID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IHRhc2tUb1Nob3cgPSBtb2RlbC5zdGF0ZS50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG5cbiAgZGV0YWlsc1ZpZXcucmVuZGVyKHRhc2tUb1Nob3cpO1xuXG4gIGRldGFpbHNWaWV3LmFkZEhhbmRsZXJEZWxldGVUYXNrT25Nb2RhbChjb250cm9sRGVsZXRlVGFza09uTW9kYWwpO1xuICBkZXRhaWxzVmlldy5hZGRIYW5kbGVyRWRpdFRhc2soY29udHJvbEVkaXRUYXNrKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xUb2dnbGVDb21wbGV0ZWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgbW9kZWwudG9nZ2xlVGFza0NvbXBsZXRlKGlkKTtcbn07XG5cbi8vIEluaXQgb24gZWRpdCBmdW5jdGlvblxuY29uc3QgY29udHJvbEVkaXRQcm9qZWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IHByb2plY3RUb0VkaXQgPSBtb2RlbC5zdGF0ZS5wcm9qZWN0cy5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBpZFxuICApO1xuXG4gIGNvbnNvbGUubG9nKHByb2plY3RUb0VkaXQpO1xuICBlZGl0UHJvamVjdFZpZXcucmVuZGVyKHByb2plY3RUb0VkaXQpO1xuXG4gIGVkaXRQcm9qZWN0Vmlldy5hZGRIYW5kbGVyU2F2ZUVkaXQoY29udHJvbFNhdmVFZGl0UHJvamVjdCk7XG4gIGVkaXRQcm9qZWN0Vmlldy5hZGRIYW5kbGVyRGVsZXRlUHJvamVjdE9uTW9kYWwoY29udHJvbERlbGV0ZVByb2plY3RPbk1vZGFsKTtcbn07XG5cbi8vIEluaXQgb24gc2hvdyBmdW5jdGlvblxuY29uc3QgY29udHJvbFNob3dQcm9qZWN0ID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gIGNvbnN0IHByb2plY3QgPSBtb2RlbC5zdGF0ZS5wcm9qZWN0cy5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSB0aXRsZVxuICApO1xuXG4gIGNvbnN0IHRhc2tzVG9TaG93ID0gbW9kZWwuc3RhdGUudGFza3MuZmlsdGVyKFxuICAgIChlbCkgPT4gZWwucHJvamVjdCA9PT0gcHJvamVjdC50aXRsZVxuICApO1xuXG4gIHByb2plY3RWaWV3LnJlbmRlcih0YXNrc1RvU2hvdyk7XG4gIGVkaXRQcm9qZWN0Vmlldy5hZGRIYW5kbGVyU2hvd0VkaXRvcihjb250cm9sRWRpdFByb2plY3QpO1xuICBhZGRIYW5kbGVyc1RvVGFzaygpO1xufTtcblxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29udHJvbFNob3dUYXNrcygpO1xuICBhZGRUYXNrVmlldy5hZGRIYW5kbGVyQWRkVGFzayhjb250cm9sQWRkVGFzayk7XG4gIGFkZFRhc2tWaWV3LmFkZEhhbmRsZXJSZW5kZXJQcm9qZWN0c09uRm9ybShjb250cm9sU2hvd1Byb2plY3RzT25Gb3JtKTtcbiAgYWRkUHJvamVjdFZpZXcuYWRkSGFuZGxlckFkZFByb2plY3QoY29udHJvbEFkZFByb2plY3QpO1xuICBhZGROb3RlVmlldy5hZGRIYW5kbGVyQWRkTm90ZShjb250cm9sQWRkTm90ZSk7XG4gIGRldGFpbHNWaWV3LmFkZEhhbmRsZXJUYXNrRGV0YWlscyhjb250cm9sU2hvd0RldGFpbHMpO1xuICBkZXRhaWxzVmlldy5hZGRIYW5kbGVyRGVsZXRlVGFzayhjb250cm9sRGVsZXRlVGFzayk7XG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyU2hvd0VkaXRvcihjb250cm9sRWRpdFRhc2spO1xuICB0YXNrVmlldy5hZGRIYW5kbGVyVG9nZ2xlQ29tcGxldGVkKGNvbnRyb2xUb2dnbGVDb21wbGV0ZWQpO1xuXG4gIC8vIHByb2plY3RWaWV3LmFkZEhhbmRsZXJTaG93UHJvamVjdChjb250cm9sU2hvd1Byb2plY3QpO1xuICAvLyBzaWRlYmFyVmlldy5hZGRIYW5kbGVyU2hvd1Byb2plY3QoY29udHJvbFNob3dQcm9qZWN0KTtcbn07XG5cbmluaXQoKTtcblxuLy8gIEhFTFBFUiBGVU5DVElPTlNcblxuZnVuY3Rpb24gYWRkSGFuZGxlcnNUb1Rhc2soKSB7XG4gIGRldGFpbHNWaWV3LmFkZEhhbmRsZXJUYXNrRGV0YWlscyhjb250cm9sU2hvd0RldGFpbHMpO1xuICBkZXRhaWxzVmlldy5hZGRIYW5kbGVyRGVsZXRlVGFzayhjb250cm9sRGVsZXRlVGFzayk7XG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyU2hvd0VkaXRvcihjb250cm9sRWRpdFRhc2spO1xuICB0YXNrVmlldy5hZGRIYW5kbGVyVG9nZ2xlQ29tcGxldGVkKGNvbnRyb2xUb2dnbGVDb21wbGV0ZWQpO1xufVxuXG4vKlxuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0IHNldE5hbWUodmFsdWUpIHtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGU7XG4gIH1cblxuICBzZXQgc2V0RGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgc2V0IHNldFByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IHNldERlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG59XG5cbiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=