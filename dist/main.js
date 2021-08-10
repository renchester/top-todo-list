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
/* harmony export */   "addNote": () => (/* binding */ addNote)
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

/*
export const deleteTask = function (id) {
  const index = state.tasks.findIndex((el) => el.id === id);
  state.tasks.splice(index, 1);

  persistTasks();
};
*/


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

    console.log('Upload task');

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

  _btnOpen = document.querySelector('.btn.add-task');
  _btnClose = document.querySelector('.material-icons.icon--close-modal');

  constructor() {
    super();
    this._addHandlerModalSidebar();
  }

  toggleWindow() {
    // this._overlay.classList.toggle('hidden');
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


class TaskView extends _view__WEBPACK_IMPORTED_MODULE_0__.default {
  _parentElement = document.querySelector('.task-display');

  constructor() {
    super();
    // this._addHandlerTaskDetails();
  }

  _generateMarkup() {
    const markup = this._data.map(this._generateTaskMarkup).join('');
    return markup;
  }

  _generateTaskMarkup(task) {
    return `
        <div class="task priority-${task.priority.toLowerCase()}">
          <div class="task-checkbox"></div>
          <div class="task-title">${task.title}</div>
          <div class="task-details">Details</div>
          <div class="task-date">${task.date}</div>
          <div class="task-edit">
            <span class="material-icons icon--edit"> mode_edit </span>
          </div>
          <div class="task-delete">
            <span class="material-icons icon--delete"> delete </span>
          </div>
        </div>`;
  }

  // _addHandlerTaskDetails() {
  //   this._parentElement.addEventListener('click', this._showDetails.bind(this));
  // }

  // _showDetails(e) {
  //   console.log('wtf');
  //   // if (!e.target.classList.contains('task-details')) return;
  // }
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











// Index js for the application logic (controller)

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

const controlAddTask = function (data) {
  _model__WEBPACK_IMPORTED_MODULE_0__.addTask(data);

  _views_taskView__WEBPACK_IMPORTED_MODULE_5__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.tasks);
};

const controlAddProject = function (data) {
  _model__WEBPACK_IMPORTED_MODULE_0__.addProject(data);

  _views_sidebarView__WEBPACK_IMPORTED_MODULE_4__.default.render(_model__WEBPACK_IMPORTED_MODULE_0__.state.projects);
};

const controlAddNote = function (data) {
  _model__WEBPACK_IMPORTED_MODULE_0__.addNote(data);
};

const init = function () {
  _views_addTaskView__WEBPACK_IMPORTED_MODULE_1__.default.addHandlerAddTask(controlAddTask);
  _views_addProjectView__WEBPACK_IMPORTED_MODULE_2__.default.addHandlerAddProject(controlAddProject);
  _views_addNoteView__WEBPACK_IMPORTED_MODULE_3__.default.addHandlerAddNote(controlAddNote);
};

init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNOOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDJDQUFhOztBQUVmLEVBQUUsMkRBQWUsQ0FBQywrQ0FBaUI7QUFDbkM7O0FBRUE7QUFDQSxFQUFFLDhDQUFnQjs7QUFFbEIsRUFBRSw4REFBa0IsQ0FBQyxrREFBb0I7QUFDekM7O0FBRUE7QUFDQSxFQUFFLDJDQUFhO0FBQ2Y7O0FBRUE7QUFDQSxFQUFFLHlFQUE2QjtBQUMvQixFQUFFLCtFQUFtQztBQUNyQyxFQUFFLHlFQUE2QjtBQUMvQjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9hZGROb3RlVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2FkZFByb2plY3RWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvYWRkVGFza1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9tb2RhbFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9zaWRlYmFyVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3Rhc2tWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3Mvdmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcbiAgdGFza3M6IFtdLFxuICBub3RlczogW10sXG4gIHByb2plY3RzOiBbXSxcbiAgY3VyclRhc2s6IHt9LFxuICBjdXJyTm90ZToge30sXG59O1xuXG5jb25zdCBjcmVhdGVUYXNrID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICBkYXRlOiBkYXRhLmRhdGUsXG4gICAgcHJpb3JpdHk6IGRhdGEucHJpb3JpdHksXG4gICAgLi4uKGRhdGEucHJvamVjdCAmJiB7IHByb2plY3Q6IGRhdGEucHJvamVjdCB9KSxcbiAgICAuLi4oZGF0YS5kZXNjcmlwdGlvbiAmJiB7IGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIH0pLFxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVOb3RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAuLi4oZGF0YS5kZXNjcmlwdGlvbiAmJiB7IGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIH0pLFxuICB9O1xufTtcblxuY29uc3QgcGVyc2lzdFRhc2tzID0gZnVuY3Rpb24gKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS50YXNrcykpO1xufTtcblxuY29uc3QgcGVyc2lzdFByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5wcm9qZWN0cykpO1xufTtcblxuY29uc3QgcGVyc2lzdE5vdGVzID0gZnVuY3Rpb24gKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5ub3RlcykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAvLyBBZGQgdGFzayB0byBhcHAgc3RhdGVcbiAgc3RhdGUudGFza3MudW5zaGlmdCh0YXNrKTtcblxuICAvLyBTZXQgdG8gbG9jYWwgc3RvcmFnZVxuICBwZXJzaXN0VGFza3MoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgLy8gQWRkIHByb2plY3QgdG8gYXBwIHN0YXRlXG4gIHN0YXRlLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cbiAgLy8gU2V0IHRvIGxvY2FsIHN0b3JhZ2VcbiAgcGVyc2lzdFByb2plY3RzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkTm90ZSA9IGZ1bmN0aW9uIChub3RlKSB7XG4gIC8vIEFkZCBub3RlIHRvIGFwcCBzdGF0ZVxuICBzdGF0ZS5ub3Rlcy5wdXNoKG5vdGUpO1xuXG4gIC8vIFNldCB0byBsb2NhbCBzdG9yYWdlXG4gIHBlcnNpc3ROb3RlcygpO1xufTtcblxuLypcbmV4cG9ydCBjb25zdCBkZWxldGVUYXNrID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUudGFza3MuZmluZEluZGV4KChlbCkgPT4gZWwuaWQgPT09IGlkKTtcbiAgc3RhdGUudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcblxuICBwZXJzaXN0VGFza3MoKTtcbn07XG4qL1xuIiwiaW1wb3J0IE1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5pbXBvcnQgQWRkVGFza1ZpZXcgZnJvbSAnLi9hZGRUYXNrVmlldyc7XG5cbmNsYXNzIEFkZE5vdGVWaWV3IGV4dGVuZHMgTW9kYWxWaWV3IHtcbiAgX2J0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLXN1Ym1pdC5zdWJtaXQtLW5ldy1ub3RlJyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHVwbG9hZERhdGEoaGFuZGxlciwgZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5vdGVUaXRsZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LW5vdGUtLW5vdGUtdGl0bGUnXG4gICAgKS52YWx1ZTtcbiAgICBjb25zdCBub3RlRGV0YWlscyA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LW5vdGUtLW5vdGUtZGV0YWlscydcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvbkFyciA9IFtub3RlVGl0bGUsIG5vdGVEZXRhaWxzXTtcblxuICAgIGlmICh0aGlzLl92YWxpZGF0ZVRhc2sodmFsaWRhdGlvbkFycikpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiBub3RlVGl0bGUsXG4gICAgICAgIGRldGFpbHM6IG5vdGVEZXRhaWxzLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5fY2xlYXJGb3JtKCk7XG4gICAgICB0aGlzLnRvZ2dsZVdpbmRvdygpO1xuICAgICAgaGFuZGxlcihkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyRm9ybUVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlckZvcm1FcnJvcigpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgfVxuXG4gIF92YWxpZGF0ZVRhc2soYXJyKSB7XG4gICAgY29uc3QgW3RpdGxlLCBkZXRhaWxzXSA9IGFycjtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYWRkSGFuZGxlckFkZE5vdGUoaGFuZGxlcikge1xuICAgIHRoaXMuX2J0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMudXBsb2FkRGF0YS5iaW5kKHRoaXMsIGhhbmRsZXIpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWRkTm90ZVZpZXcoKTtcbiIsImltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuaW1wb3J0IEFkZFRhc2tWaWV3IGZyb20gJy4vYWRkVGFza1ZpZXcnO1xuXG5jbGFzcyBBZGRQcm9qZWN0VmlldyBleHRlbmRzIE1vZGFsVmlldyB7XG4gIF9idG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1zdWJtaXQuc3VibWl0LS1uZXctcHJvamVjdCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICB1cGxvYWREYXRhKGhhbmRsZXIsIGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLm5ldy1wcm9qZWN0LS1wcm9qZWN0LXRpdGxlJ1xuICAgICkudmFsdWU7XG5cbiAgICBpZiAodGhpcy5fdmFsaWRhdGVUYXNrKHByb2plY3RUaXRsZSkpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiBwcm9qZWN0VGl0bGUsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9jbGVhckZvcm0oKTtcbiAgICAgIHRoaXMudG9nZ2xlV2luZG93KCk7XG4gICAgICBoYW5kbGVyKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJGb3JtRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyRm9ybUVycm9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICB9XG5cbiAgX3ZhbGlkYXRlVGFzayh0aXRsZSkge1xuICAgIGlmICghdGl0bGUgfHwgdGl0bGUubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFkZEhhbmRsZXJBZGRQcm9qZWN0KGhhbmRsZXIpIHtcbiAgICB0aGlzLl9idG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLnVwbG9hZERhdGEuYmluZCh0aGlzLCBoYW5kbGVyKVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFkZFByb2plY3RWaWV3KCk7XG4iLCJpbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcblxuY2xhc3MgQWRkVGFza1ZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBfcHJpb3JpdHlMYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stLXRhc2stcHJpb3JpdHktd3JhcHBlcicpO1xuICBfYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tc3VibWl0LnN1Ym1pdC0tbmV3LXRhc2snKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2FkZEhhbmRsZXJQcmlvcml0eSgpO1xuICAgIHRoaXMuX2FkZEhhbmRsZXJTaG93TW9kYWwoKTtcbiAgICB0aGlzLl9hZGRIYW5kbGVyQ2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgdXBsb2FkRGF0YShoYW5kbGVyLCBlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc29sZS5sb2coJ1VwbG9hZCB0YXNrJyk7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLm5ldy10YXNrLS10YXNrLXRpdGxlJ1xuICAgICkudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrRGV0YWlscyA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubmV3LXRhc2stLXRhc2stZGV0YWlscydcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3QgdGFza0RhdGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLm5ldy10YXNrLS10YXNrLWRhdGUnXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcucHJpb3JpdHktbGFiZWwtLWFjdGl2ZSdcbiAgICApPy50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25BcnIgPSBbdGFza1RpdGxlLCB0YXNrRGV0YWlscywgdGFza0RhdGUsIHRhc2tQcmlvcml0eV07XG5cbiAgICBpZiAodGhpcy5fdmFsaWRhdGVUYXNrKHZhbGlkYXRpb25BcnIpKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogdGFza1RpdGxlLFxuICAgICAgICBkZXRhaWxzOiB0YXNrRGV0YWlscyxcbiAgICAgICAgZGF0ZTogdGFza0RhdGUsXG4gICAgICAgIHByaW9yaXR5OiB0YXNrUHJpb3JpdHksXG4gICAgICAgIGlkOiBgJHt0YXNrRGF0ZX0tLSR7dGFza1RpdGxlfWAsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9jbGVhckZvcm0oKTtcbiAgICAgIHRoaXMudG9nZ2xlV2luZG93KCk7XG4gICAgICBoYW5kbGVyKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJGb3JtRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBhZGRIYW5kbGVyQWRkVGFzayhoYW5kbGVyKSB7XG4gICAgdGhpcy5fYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy51cGxvYWREYXRhLmJpbmQodGhpcywgaGFuZGxlcilcbiAgICApO1xuICB9XG5cbiAgX2FkZEhhbmRsZXJQcmlvcml0eSgpIHtcbiAgICB0aGlzLl9wcmlvcml0eUxhYmVscy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuX3RvZ2dsZVByaW9yaXR5LmJpbmQodGhpcylcbiAgICApO1xuICB9XG5cbiAgX3RvZ2dsZVByaW9yaXR5KGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmV3LXRhc2stLXRhc2stcHJpb3JpdHktbGFiZWwnKSkgcmV0dXJuO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXRhc2stLXRhc2stcHJpb3JpdHktbGFiZWwnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1sYWJlbC0tYWN0aXZlJykpO1xuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwtLWFjdGl2ZScpO1xuICB9XG5cbiAgX3ZhbGlkYXRlVGFzayhhcnIpIHtcbiAgICBjb25zdCBbdGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5XSA9IGFycjtcbiAgICBpZiAoIXRpdGxlIHx8ICFkYXRlIHx8ICFwcmlvcml0eSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF9yZW5kZXJGb3JtRXJyb3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFkZFRhc2tWaWV3KCk7XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgX2Vycm9yTWVzc2FnZSA9ICdGb3JtIGlucHV0IGludmFsaWQnO1xuXG4gIF9wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLS1jb250ZW50Jyk7XG4gIF93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLWFkZC10YXNrJyk7XG4gIF9zaWRlYmFyTGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItLWxhYmVsJyk7XG5cbiAgX2J0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLmFkZC10YXNrJyk7XG4gIF9idG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXRlcmlhbC1pY29ucy5pY29uLS1jbG9zZS1tb2RhbCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fYWRkSGFuZGxlck1vZGFsU2lkZWJhcigpO1xuICB9XG5cbiAgdG9nZ2xlV2luZG93KCkge1xuICAgIC8vIHRoaXMuX292ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgdGhpcy5fd2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9XG5cbiAgdG9nZ2xlRm9ybURpc3BsYXkoZSkge1xuICAgIC8vIEhpZGVzIGFsbCBmb3Jtc1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudC1mb3JtJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpO1xuXG4gICAgLy8gRXN0YWJsaXNoZXMgd2hpY2ggZm9ybSB0byBzaG93XG4gICAgY29uc3QgZm9ybVR5cGUgPSBBcnJheS5mcm9tKGUudGFyZ2V0LmNsYXNzTGlzdClbMV0uc3BsaXQoJ25ldy0nKVsxXTtcblxuICAgIHRoaXMuX2NsZWFyRm9ybSgpO1xuXG4gICAgLy8gU2hvdyBmb3JtIHRvIGRpc3BsYXlcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihgLmNvbnRlbnQtZm9ybS0tbmV3LSR7Zm9ybVR5cGV9YClcbiAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIF9hZGRIYW5kbGVyU2hvd01vZGFsKCkge1xuICAgIC8vIFNob3dzL29wZW5zIHRoZSBtb2RhbFxuICAgIHRoaXMuX2J0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZVdpbmRvdy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9hZGRIYW5kbGVyQ2xvc2VNb2RhbCgpIHtcbiAgICAvLyBDbG9zZXMgdGhlIG1vZGFsXG4gICAgdGhpcy5fYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZVdpbmRvdy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9hZGRIYW5kbGVyTW9kYWxTaWRlYmFyKCkge1xuICAgIC8vIENoYW5nZXMgdGhlIGZvcm0gZGlzcGxheVxuICAgIHRoaXMuX3NpZGViYXJMYWJlbHMuZm9yRWFjaCgoZWwpID0+XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlRm9ybURpc3BsYXkuYmluZCh0aGlzKSlcbiAgICApO1xuICB9XG5cbiAgX2NsZWFyRm9ybSgpIHtcbiAgICAvLyBDbGVhciB0YXNrIGZvcm1cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5ldy10YXNrLS1mb3JtLWVsZW1lbnQnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiAoZWwudmFsdWUgPSAnJykpO1xuXG4gICAgLy8gQ2xlYXIgcHJvamVjdCBmb3JtXG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctcHJvamVjdC0tZm9ybS1lbGVtZW50JylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gKGVsLnZhbHVlID0gJycpKTtcblxuICAgIC8vIENsZWFyIG5vdGUgZm9ybVxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LW5vdGUtLWZvcm0tZWxlbWVudCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IChlbC52YWx1ZSA9ICcnKSk7XG5cbiAgICAvLyBDbGVhciBwcmlvcml0eSBjaG9pY2VcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5ldy10YXNrLS10YXNrLXByaW9yaXR5LWxhYmVsJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktbGFiZWwtLWFjdGl2ZScpKTtcblxuICAgIC8vIENsZWFyIHRhc2sgZGF0ZVxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLS10YXNrLWRhdGUnKS52YWx1ZSA9ICcnO1xuICB9XG59XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuXG5jbGFzcyBTaWRlYmFyVmlldyBleHRlbmRzIFZpZXcge1xuICBfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1iYXInKTtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXN1YmRpdi5wcm9qZWN0LS1oZWFkZXInKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgX2dlbmVyYXRlTWFya3VwKCkge1xuICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgY29uc3QgbWFya3VwID0gdGhpcy5fZGF0YS5tYXAodGhpcy5fZ2VuZXJhdGVQcm9qZWN0TWFya3VwKS5qb2luKCcnKTtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9XG5cbiAgX2dlbmVyYXRlUHJvamVjdE1hcmt1cChwcm9qZWN0KSB7XG4gICAgY29uc3QgbWFya3VwID0gYFxuICAgIDxwIGNsYXNzPVwibmF2LXN1YmRpdi0tY29udGVudCBwcm9qZWN0LS10aXRsZVwiPiR7cHJvamVjdC50aXRsZX08L3A+YDtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTaWRlYmFyVmlldygpO1xuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY2xhc3MgVGFza1ZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaXNwbGF5Jyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyB0aGlzLl9hZGRIYW5kbGVyVGFza0RldGFpbHMoKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZU1hcmt1cCgpIHtcbiAgICBjb25zdCBtYXJrdXAgPSB0aGlzLl9kYXRhLm1hcCh0aGlzLl9nZW5lcmF0ZVRhc2tNYXJrdXApLmpvaW4oJycpO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cblxuICBfZ2VuZXJhdGVUYXNrTWFya3VwKHRhc2spIHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzayBwcmlvcml0eS0ke3Rhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jaGVja2JveFwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHNcIj5EZXRhaWxzPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGF0ZVwiPiR7dGFzay5kYXRlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi0tZWRpdFwiPiBtb2RlX2VkaXQgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRlbGV0ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uLS1kZWxldGVcIj4gZGVsZXRlIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIC8vIF9hZGRIYW5kbGVyVGFza0RldGFpbHMoKSB7XG4gIC8vICAgdGhpcy5fcGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX3Nob3dEZXRhaWxzLmJpbmQodGhpcykpO1xuICAvLyB9XG5cbiAgLy8gX3Nob3dEZXRhaWxzKGUpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnd3RmJyk7XG4gIC8vICAgLy8gaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZGV0YWlscycpKSByZXR1cm47XG4gIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRhc2tWaWV3KCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICBfZGF0YTtcblxuICByZW5kZXIoZGF0YSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIGNvbnN0IG1hcmt1cCA9IHRoaXMuX2dlbmVyYXRlTWFya3VwKCk7XG5cbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcbiAgfVxuXG4gIHJlbmRlckVycm9yKE1lc3NhZ2UgPSB0aGlzLl9lcnJvck1lc3NhZ2UpIHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgPGRpdiBjbGFzcz1cImVycm9yXCI+XG4gICAgPHA+JHttZXNzYWdlfTwvcD5cbiAgICA8L2Rpdj5gO1xuXG4gICAgdGhpcy5fY2xlYXIoKTtcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG1hcmt1cCk7XG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIG1vZGVsIGZyb20gJy4vbW9kZWwnO1xuXG5pbXBvcnQgYWRkVGFza1ZpZXcgZnJvbSAnLi92aWV3cy9hZGRUYXNrVmlldyc7XG5pbXBvcnQgYWRkUHJvamVjdFZpZXcgZnJvbSAnLi92aWV3cy9hZGRQcm9qZWN0Vmlldyc7XG5pbXBvcnQgYWRkTm90ZVZpZXcgZnJvbSAnLi92aWV3cy9hZGROb3RlVmlldyc7XG5cbmltcG9ydCBzaWRlYmFyVmlldyBmcm9tICcuL3ZpZXdzL3NpZGViYXJWaWV3JztcbmltcG9ydCB0YXNrVmlldyBmcm9tICcuL3ZpZXdzL3Rhc2tWaWV3JztcblxuLy8gSW5kZXgganMgZm9yIHRoZSBhcHBsaWNhdGlvbiBsb2dpYyAoY29udHJvbGxlcilcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldCBzZXROYW1lKHZhbHVlKSB7XG4gICAgdGhpcy5uYW1lID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZ2V0RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlO1xuICB9XG5cbiAgc2V0IHNldERhdGUodmFsdWUpIHtcbiAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIHNldCBzZXRQcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBzZXREZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxufVxuXG5jb25zdCBjb250cm9sQWRkVGFzayA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIG1vZGVsLmFkZFRhc2soZGF0YSk7XG5cbiAgdGFza1ZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLnRhc2tzKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xBZGRQcm9qZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgbW9kZWwuYWRkUHJvamVjdChkYXRhKTtcblxuICBzaWRlYmFyVmlldy5yZW5kZXIobW9kZWwuc3RhdGUucHJvamVjdHMpO1xufTtcblxuY29uc3QgY29udHJvbEFkZE5vdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBtb2RlbC5hZGROb3RlKGRhdGEpO1xufTtcblxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgYWRkVGFza1ZpZXcuYWRkSGFuZGxlckFkZFRhc2soY29udHJvbEFkZFRhc2spO1xuICBhZGRQcm9qZWN0Vmlldy5hZGRIYW5kbGVyQWRkUHJvamVjdChjb250cm9sQWRkUHJvamVjdCk7XG4gIGFkZE5vdGVWaWV3LmFkZEhhbmRsZXJBZGROb3RlKGNvbnRyb2xBZGROb3RlKTtcbn07XG5cbmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==