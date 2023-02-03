"use strict";
(self["webpackChunktop_todo_list"] = self["webpackChunktop_todo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* prettier-ignore */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\n/* prettier-ignore */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\ndisplay: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  vertical-align: baseline;\n  font-family: inherit;\n  font-style: inherit;\n  font-size: 100%;\n  border: none;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --color-purple-1: #8e5f95;\n  --color-purple-2: #5f4064;\n  --color-purple-3: #2d1e2f;\n  --color-red-1: #fa7a75;\n  --color-red-2: #f9544e;\n  --color-red-3: #f72c25;\n  --color-red-4: #ec1009;\n  --color-red-5: #9d0b06;\n  --color-yellow-1: #fbd589;\n  --color-yellow-2: #f9c762;\n  --color-yellow-3: #f7b32b;\n  --color-yellow-4: #e79c06;\n  --color-yellow-5: #9d6b06;\n  --color-blond-1: #fcf6b1;\n  --color-blond-2: #f8e83a;\n  --color-blond-3: #625b04;\n  --color-seafoam-0: #effaf2;\n  --color-seafoam-1: #d0f1d9;\n  --color-seafoam-2: #a9e5bb;\n  --color-seafoam-3: #81d99c;\n  --color-seafoam-4: #62d083;\n  --color-seafoam-5: #43c76a;\n  --color-seafoam-6: #1c5e30;\n\n  --container-padding: 30px;\n  --container-margin: 15px;\n  --container-border-radius: 12px;\n  --sidebar-gap: 18px;\n  --notes-gap: 15px;\n  --modal-padding: 30px;\n  --outline-focus: 1px solid rgba(77, 77, 228, 0.8);\n}\n\n*:focus {\n  outline: var(--outline-focus);\n}\n\nbody {\n  background-color: rgb(247, 255, 242);\n  overflow-y: auto;\n  font-family: 'Roboto', 'Open Sans', Arial, Helvetica, sans-serif, monospace;\n}\n\n.container {\n  width: clamp(450px, 90%, 1000px);\n  height: clamp(680px, 80vh, 720px);\n  margin: 20px auto;\n  outline: 2px solid rgba(0, 0, 0, 0.1);\n  border-radius: var(--container-border-radius);\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,\n    rgba(0, 0, 0, 0.22) 0px 15px 12px;\n  background-color: white;\n  display: flex;\n  position: relative;\n}\n\n/* SIDEBAR STYLES */\n\n.sidebar {\n  padding: var(--container-padding);\n  padding-right: calc(var(--container-padding) / 2);\n  background-color: var(--color-seafoam-1);\n  width: clamp(150px, 30%, 350px);\n  border-top-left-radius: var(--container-border-radius);\n  border-bottom-left-radius: var(--container-border-radius);\n  box-shadow: 5px 0px 12px -5px rgba(0, 0, 0, 0.1);\n}\n\n.logo {\n  margin-bottom: 40px;\n  transform: skewX(-10deg);\n  font-family: 'Bebas Neue', Arial, Helvetica, sans-serif, monospace;\n  font-size: 2.5rem;\n  color: var(--color-purple-2);\n  cursor: default;\n}\n\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  font-family: 'Raleway', 'Open Sans', Arial, Helvetica, sans-serif;\n  font-weight: 500;\n}\n\n.emoji {\n  margin-right: 5px;\n}\n\n.tasks-all {\n  margin-bottom: 20px;\n}\n\n.nav--tasks,\n.nav--projects {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sidebar-gap);\n  color: var(--color-purple-3);\n}\n\n.nav--tasks > *,\n.nav--projects > *,\n.nav--notes {\n  cursor: pointer;\n}\n\n.nav--tasks > *:hover,\n.nav--projects > *:hover,\n.nav--notes:hover,\n.nav--tasks > *:focus,\n.nav--projects > *:focus,\n.nav--notes:focus {\n  transform: scale(1.01);\n  transform-origin: left;\n  font-weight: 1000;\n  outline: none;\n}\n\n.nav--projects {\n  min-height: 60px;\n  max-height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-right: 10px;\n}\n\n.nav--project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav--project-title {\n  padding: 4px 0;\n  width: 100%;\n}\n\n.edit-project-icon {\n  font-size: 1.1rem;\n  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;\n  color: rgb(95, 95, 95);\n}\n\n.edit-project-icon:hover,\n.edit-project-icon:focus {\n  color: var(--color-yellow-4);\n}\n\n.nav--notes {\n  margin-bottom: 30px;\n}\n\n/* MAIN CONTAINER STYLES */\n\n.content-container {\n  padding: var(--container-padding);\n  padding-left: calc(var(--container-padding) + 5px);\n  width: 70%;\n  position: relative;\n}\n\n.content-title {\n  font-size: 1.2rem;\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.content-display {\n  height: clamp(100px, 90%, 1000px);\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  padding-right: 10px;\n}\n\n.task {\n  padding: 12px 5px;\n  margin-bottom: 10px;\n  border-radius: 2px;\n  font-family: 'Roboto', Arial, Helvetica, sans-serif, monospace;\n  font-size: 0.95rem;\n  background-color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-left: 5px solid;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;\n}\n\n.task.priority-high {\n  border-left-color: var(--color-red-4);\n}\n\n.task.priority-medium {\n  border-left-color: var(--color-yellow-4);\n}\n\n.task.priority-low {\n  border-left-color: var(--color-seafoam-6);\n}\n\n.task-left,\n.task-right {\n  display: flex;\n  align-items: center;\n}\n\n.task-left > input[type='checkbox'] {\n  appearance: none;\n  font: inherit;\n  color: currentColor;\n  width: 1.15rem;\n  height: 1.15rem;\n  border: 0.15rem solid currentColor;\n  border-radius: 5px;\n  margin: 0 15px 0 12px;\n  transition: 0.15s ease-in-out;\n  display: grid;\n  place-content: center;\n}\n\n.task-left > input[type='checkbox']:checked {\n  background-color: #245e35;\n}\n\n.task-left > input[type='checkbox']:checked + .task-title {\n  text-decoration-line: line-through;\n  color: rgb(97, 97, 97);\n}\n\n.task-right {\n  gap: 15px;\n}\n\n.task-details-icon {\n  cursor: default;\n  vertical-align: center;\n  background-color: var(--color-purple-1);\n  padding: 7px 10px;\n  border-radius: 4px;\n  color: white;\n}\n\n.task-details-icon:hover,\n.task-details-icon:focus {\n  background-color: var(--color-purple-2);\n}\n\n.task-display-icon > .material-symbols-outlined {\n  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;\n  cursor: pointer;\n  color: rgb(70, 70, 70);\n  font-size: 1.2rem;\n  margin: 0 2px;\n}\n\n.task-display-icon > .material-symbols-outlined:hover,\n.task-display-icon > .material-symbols-outlined:focus {\n  transform: scale(1.05);\n}\n\n.task-display-icon.task-edit > .material-symbols-outlined:hover,\n.task-display-icon.task-edit > .material-symbols-outlined:focus,\n.task-display-icon.task-edit > .material-symbols-outlined:active {\n  color: var(--color-yellow-4);\n}\n\n.task-display-icon.task-delete > .material-symbols-outlined:hover,\n.task-display-icon.task-delete > .material-symbols-outlined:focus,\n.task-display-icon.task-delete > .material-symbols-outlined:active {\n  color: var(--color-red-5);\n}\n\n.btn-edit-task,\n.btn-delete-task {\n  padding: 8px 15px;\n  width: 70px;\n  border-radius: 5px;\n}\n\n.btn-edit-task:hover,\n.btn-edit-task:focus,\n.btn-delete-task:hover,\n.btn-delete-task:focus {\n  color: white;\n}\n\n.btn-edit-task {\n  border: 2px solid var(--color-yellow-4);\n  color: var(--color-yellow-5);\n}\n\n.btn-edit-task:hover,\n.btn-edit-task:active,\n.btn-edit-task:focus {\n  background-color: var(--color-yellow-4);\n}\n\n.btn-delete-task {\n  border: 2px solid var(--color-red-4);\n  color: var(--color-red-4);\n}\n\n.btn-delete-task:hover,\n.btn-delete-task:active,\n.btn-delete-task:focus {\n  background-color: var(--color-red-4);\n}\n\n.notes-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: var(--notes-gap);\n  height: 100%;\n}\n\n.notes-col-1,\n.notes-col-2 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--notes-gap);\n  height: 100%;\n}\n\n.note {\n  position: relative;\n  width: 100%;\n  height: min-content;\n  border: 1px solid rgba(0, 0, 0, 0.175);\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 1px, rgba(0, 0, 0, 0.04) 0px 2px 2px,\n    rgba(0, 0, 0, 0.02) 0px 4px 4px, rgba(0, 0, 0, 0.04) 0px 8px 8px,\n    rgba(0, 0, 0, 0.04) 0px 16px 16px;\n  padding: 20px;\n  display: flex;\n  line-height: normal;\n  flex-direction: column;\n  background-color: white;\n  gap: 10px;\n}\n\n.note > *:focus {\n  outline: none;\n}\n\n.note-title {\n  max-width: 85%;\n  font-weight: 600;\n}\n\n.note-details {\n  font-size: 0.9rem;\n  color: rgb(54, 54, 54);\n  height: auto;\n  overflow-wrap: break-word;\n}\n\n.btn-delete-note {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 12px;\n  background-color: white;\n}\n\n.btn-delete-note > .material-symbols-outlined {\n  color: var(--color-red-5);\n}\n\n.btn-delete-note > .material-symbols-outlined:hover,\n.btn-delete-note > .material-symbols-outlined:focus {\n  transform: scale(1.2);\n}\n\n.btn-add {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  margin: 20px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  outline: 10px solid rgba(255, 255, 255, 0.5);\n  background-color: var(--color-blond-2);\n  transition: 0.1s linear;\n}\n\n.btn-add:hover,\n.btn-add:active,\n.btn-add:focus {\n  transform: scale(1.15);\n  transform-origin: right;\n}\n\n.btn-add .material-symbols-outlined {\n  color: rgb(70, 70, 70);\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.btn-add .material-symbols-outlined:hover,\n.btn-add .material-symbols-outlined:focus {\n  transform: scale(1.05);\n  transform-origin: top;\n  color: var(--color-purple-3);\n}\n\n/*  MODAL */\n\n.modal,\n.modal-details {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transform: translate(-50%, -50%);\n  width: clamp(120px, 85%, 600px);\n  height: clamp(120px, 90%, 800px);\n  border-radius: var(--container-border-radius);\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,\n    rgba(0, 0, 0, 0.05) 0px 5px 10px;\n}\n\n.modal-header {\n  position: relative;\n  padding: var(--modal-padding);\n  padding-bottom: calc(var(--modal-padding) / 2);\n  /* border-bottom: 1px solid rgba(0, 0, 0, 0.432); */\n  border-top-left-radius: var(--container-border-radius);\n  border-top-right-radius: var(--container-border-radius);\n  background-color: #a5a6e263;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.btn-close-modal,\n.btn-close-modal-details {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 20px;\n  cursor: default;\n}\n\n.btn-close-modal:hover,\n.btn-close-modal:active,\n.btn-close-modal:focus {\n  color: var(--color-red-5);\n  transform: scale(1.1);\n}\n\n.modal-title {\n  font-size: 1.2rem;\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n  color: rgb(65, 65, 65);\n  padding-left: 10px;\n}\n\n.modal-nav {\n  display: flex;\n  gap: 20px;\n}\n\n.modal-link {\n  padding: 10px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n\n.modal-link:focus {\n  outline: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.modal-link--active {\n  font-weight: 600;\n}\n\n.modal-content-wrapper {\n  padding: var(--modal-padding);\n  padding-top: calc(var(--modal-padding) / 2);\n}\n\n.modal-content,\n.edit-task--form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.edit-task--form {\n  margin-top: 10px;\n  height: clamp(120px, 90%, 800px);\n}\n\n.edit-task--header,\n.edit-project--header {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n  font-size: 1.25rem;\n  color: var(--color-purple-2);\n  padding-left: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.5);\n}\n\ntextarea {\n  resize: vertical;\n  border-radius: 5px;\n  padding: 10px;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: var(--outline-focus);\n}\n\n#new-task--title,\n#edit-task--title {\n  resize: none;\n  vertical-align: center;\n}\n\n#new-task--details,\n#edit-task--details {\n  display: block;\n  max-height: 180px;\n  min-height: 60px;\n}\n\n.btn-submit {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  border: 2px solid var(--color-purple-1);\n  border-radius: 7px;\n  background-color: white;\n  color: var(--color-purple-1);\n  font-weight: 600;\n}\n\n.btn-submit:hover,\n.btn-submit:active,\n.btn-submit:focus {\n  background-color: var(--color-purple-1);\n  outline: none;\n  color: white;\n}\n\ndiv.new-task--form-element,\ndiv.edit-task--form-element {\n  padding: 5px;\n}\n\ndiv.new-task--form-element > *:first-child,\ndiv.edit-task--form-element > *:first-child {\n  color: rgb(90, 90, 90);\n  margin-right: 10px;\n}\n\n.new-task--task-priority-wrapper,\n.edit-task--task-priority-wrapper {\n  display: flex;\n}\n\n.new-task--priority-input,\n.edit-task--priority-input {\n  position: relative;\n  left: 2.2rem;\n  height: 1px;\n  width: 1px;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n}\n\n.new-task--priority-label,\n.edit-task--priority-label {\n  border: 2px solid;\n  border-radius: 5px;\n  padding: 0.25rem 0.5rem;\n  margin: 0 0.1 em;\n  cursor: pointer;\n  font-weight: 600;\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n  transition: transform ease-in-out 200ms;\n}\n\n.new-task--priority-label.priority-low,\n.edit-task--priority-label.priority-low {\n  color: var(--color-seafoam-6);\n  border-color: currentColor;\n}\n\n.new-task--priority-label.priority-medium,\n.edit-task--priority-label.priority-medium {\n  color: var(--color-yellow-5);\n  border-color: currentColor;\n}\n\n.new-task--priority-label.priority-high,\n.edit-task--priority-label.priority-high {\n  color: var(--color-red-5);\n  border-color: currentColor;\n}\n\n.new-task--priority-label.priority-active,\n.edit-task--priority-label.priority-active {\n  color: white;\n}\n\n.new-task--priority-label.priority-high.priority-active,\n.edit-task--priority-label.priority-high.priority-active {\n  background-color: var(--color-red-5);\n  border-color: var(--color-red-5);\n}\n\n.new-task--priority-label.priority-medium.priority-active,\n.edit-task--priority-label.priority-medium.priority-active {\n  background-color: var(--color-yellow-4);\n  border-color: var(--color-yellow-4);\n}\n\n.new-task--priority-label.priority-low.priority-active,\n.edit-task--priority-label.priority-low.priority-active {\n  background-color: var(--color-seafoam-6);\n  border-color: var(--color-seafoam-6);\n}\n\n.new-task--task-priority-wrapper,\n#new-task--date,\n#new-task--project,\n#new-task--status,\n.edit-task--task-priority-wrapper,\n#edit-task--date,\n#edit-task--project,\n#edit-task--status {\n  background-color: white;\n  padding: 5px;\n}\n\n#new-task--date,\n#new-task--project,\n#new-task--status,\n#edit-task--date,\n#edit-task--project,\n#edit-task--status {\n  max-width: 150px;\n}\n\n#new-task--project:focus,\n#new-task--project:active,\n#new-task--status:focus,\n#new-task--status:active,\n#edit-task--project:focus,\n#edit-task--project:active,\n#edit-task--status:focus,\n#edit-task--status:active {\n  outline: var(--outline-focus);\n}\n\n#new-project--title {\n  min-height: 60px;\n  max-height: 100px;\n}\n\n#new-note--title {\n  resize: none;\n}\n\n#new-note--details {\n  min-height: 60px;\n  max-height: 300px;\n}\n\n#new-task--title,\n#edit-task--title,\n#new-project--title,\n#new-note--title,\n#edit-project--title {\n  font-size: 1.05rem;\n}\n\n#new-task--details,\n#edit-task--details,\n#new-note--details {\n  color: rgb(85, 85, 85);\n}\n\n.edit-task--btn-container,\n.edit-project--btn-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 10px;\n}\n\n.edit-task--btn-container .btn-submit,\n.edit-project--btn-container .btn-submit {\n  position: relative;\n  transform: none;\n}\n\n.edit-task--btn-container .btn-delete,\n.edit-project--btn-container .btn-delete {\n  color: var(--color-red-4);\n}\n\n.edit-task--btn-container .btn-submit,\n.edit-task--btn-container .btn-delete,\n.edit-project--btn-container .btn-submit,\n.edit-project--btn-container .btn-delete {\n  padding: 10px 20px;\n  font-weight: 600;\n  background-color: white;\n  border-radius: 7px;\n  border: 2px solid;\n  bottom: 0;\n  left: 0;\n  margin-bottom: 0;\n  width: clamp(50px, 30%, 200px);\n}\n\n.edit-task--btn-container .btn-submit:hover,\n.edit-task--btn-container .btn-submit:focus,\n.edit-project--btn-container .btn-submit:hover,\n.edit-project--btn-container .btn-submit:focus {\n  background-color: var(--color-purple-1);\n}\n\n.edit-task--btn-container .btn-delete:hover,\n.edit-task--btn-container .btn-delete:focus,\n.edit-project--btn-container .btn-delete:hover,\n.edit-project--btn-container .btn-delete:focus {\n  background-color: var(--color-red-4);\n  border-color: var(--color-red-4);\n  color: white;\n}\n\n.edit-project--form {\n  display: flex;\n  flex-direction: column;\n  height: 120px;\n}\n\n#edit-project--title {\n  padding: 10px;\n  margin: 15px 0;\n  border-radius: 5px;\n}\n\n/*  MODAL DETAILS */\n\n.modal-details {\n  height: fit-content;\n  width: clamp(100px, 70%, 500px);\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.detail--task-title {\n  font-size: 1.3rem;\n}\n\n.detail--task-details {\n  font-size: 0.95rem;\n  color: rgb(77, 77, 77);\n  line-height: normal;\n}\n\n.detail--task-date,\n.detail--task-priority,\n.detail--task-status,\n.detail--task-project-name {\n  font-size: 0.95rem;\n}\n\n.detail--btn-container {\n  margin: 0 auto;\n  display: flex;\n  gap: 10px;\n}\n\n.detail--btn-edit,\n.detail--btn-delete {\n  padding: 10px 12px;\n  border-radius: 5px;\n  background-color: white;\n  border: 2px solid;\n  width: 80px;\n  text-align: center;\n  font-weight: 600;\n}\n\n.detail--btn-edit:hover,\n.detail--btn-edit:focus,\n.detail--btn-delete:hover,\n.detail--btn-delete:focus {\n  color: white;\n}\n\n.detail--btn-edit {\n  color: var(--color-yellow-4);\n  border-color: var(--color-yellow-4);\n}\n\n.detail--btn-edit:hover,\n.detail--btn-edit:focus {\n  background-color: var(--color-yellow-4);\n}\n\n.detail--btn-delete {\n  color: var(--color-red-5);\n  border-color: var(--color-red-5);\n}\n\n.detail--btn-delete:hover,\n.detail--btn-delete:focus {\n  background-color: var(--color-red-5);\n}\n\n/*  FOOTER */\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  margin-top: 2.4rem;\n  padding: 1rem;\n  color: #5e67a3;\n}\n.footer-link {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer-desc {\n  font-family: 'Open Sans ', 'Gill Sans', 'Gill Sans MT', Calibri,\n    'Trebuchet MS', sans-serif;\n  padding-left: 1em;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.footer-link:link,\n.footer-link:visited {\n  text-decoration: none;\n  color: #424870;\n}\n\n/* HELPERS */\n.hidden {\n  display: none;\n}\n\n.overlay {\n  background-color: rgba(0, 0, 0, 0.25);\n  height: 100vh;\n  width: 200vw;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* MEDIA QUERIES */\n\n@media screen and (max-height: 800px) {\n  footer {\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .container {\n    width: 100vw;\n    height: auto;\n    margin: 0;\n  }\n\n  .task-display-icon.task-delete,\n  .task-display-icon.task-edit {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 550px) {\n  .container {\n    flex-direction: column;\n    min-height: 100vh;\n  }\n\n  .sidebar {\n    width: 100%;\n  }\n\n  .logo {\n    margin-bottom: 10px;\n    font-size: 2rem;\n  }\n\n  .sidebar-nav {\n    flex-direction: row;\n  }\n\n  .nav-task:not(.tasks-all) {\n    display: none;\n  }\n\n  .sidebar-nav,\n  .nav--tasks {\n    height: fit-content;\n  }\n\n  .tasks-all {\n    margin-bottom: 0px;\n  }\n\n  .nav--projects {\n    display: none;\n  }\n\n  .nav--notes {\n    margin-bottom: 0px;\n  }\n\n  .content-container {\n    width: 100%;\n    height: 100%;\n  }\n\n  .btn-add {\n    position: fixed;\n    margin: 30px;\n    outline: 10px solid rgba(255, 255, 255, 0.9);\n  }\n\n  .modal,\n  .modal-details {\n    width: 100%;\n    height: clamp(120px, 80%, 800px);\n    position: fixed;\n    top: auto;\n    left: auto;\n    transform: none;\n    bottom: 0;\n  }\n\n  .detail--btn-container {\n    margin-bottom: 20px;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .detail--btn-edit {\n    width: 60%;\n  }\n\n  .notes-container {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  .new-task--task-priority-wrapper,\n  .edit-task--task-priority-wrapper {\n    flex-direction: column;\n    gap: 20px;\n  }\n}\n\n@media screen and (max-width: 300px) {\n  .new-task--priority-fieldset,\n  .edit-task--priority-fieldset {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .new-task--priority-label,\n  .edit-task--priority-label {\n    padding: 0.5rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* prettier-ignore */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\n/* prettier-ignore */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\ndisplay: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  vertical-align: baseline;\n  font-family: inherit;\n  font-style: inherit;\n  font-size: 100%;\n  border: none;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --color-purple-1: #8e5f95;\n  --color-purple-2: #5f4064;\n  --color-purple-3: #2d1e2f;\n  --color-red-1: #fa7a75;\n  --color-red-2: #f9544e;\n  --color-red-3: #f72c25;\n  --color-red-4: #ec1009;\n  --color-red-5: #9d0b06;\n  --color-yellow-1: #fbd589;\n  --color-yellow-2: #f9c762;\n  --color-yellow-3: #f7b32b;\n  --color-yellow-4: #e79c06;\n  --color-yellow-5: #9d6b06;\n  --color-blond-1: #fcf6b1;\n  --color-blond-2: #f8e83a;\n  --color-blond-3: #625b04;\n  --color-seafoam-0: #effaf2;\n  --color-seafoam-1: #d0f1d9;\n  --color-seafoam-2: #a9e5bb;\n  --color-seafoam-3: #81d99c;\n  --color-seafoam-4: #62d083;\n  --color-seafoam-5: #43c76a;\n  --color-seafoam-6: #1c5e30;\n\n  --container-padding: 30px;\n  --container-margin: 15px;\n  --container-border-radius: 12px;\n  --sidebar-gap: 18px;\n  --notes-gap: 15px;\n  --modal-padding: 30px;\n  --outline-focus: 1px solid rgba(77, 77, 228, 0.8);\n}\n\n*:focus {\n  outline: var(--outline-focus);\n}\n\nbody {\n  background-color: rgb(247, 255, 242);\n  overflow-y: auto;\n  font-family: 'Roboto', 'Open Sans', Arial, Helvetica, sans-serif, monospace;\n}\n\n.container {\n  width: clamp(450px, 90%, 1000px);\n  height: clamp(680px, 80vh, 720px);\n  margin: 20px auto;\n  outline: 2px solid rgba(0, 0, 0, 0.1);\n  border-radius: var(--container-border-radius);\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,\n    rgba(0, 0, 0, 0.22) 0px 15px 12px;\n  background-color: white;\n  display: flex;\n  position: relative;\n}\n\n/* SIDEBAR STYLES */\n\n.sidebar {\n  padding: var(--container-padding);\n  padding-right: calc(var(--container-padding) / 2);\n  background-color: var(--color-seafoam-1);\n  width: clamp(150px, 30%, 350px);\n  border-top-left-radius: var(--container-border-radius);\n  border-bottom-left-radius: var(--container-border-radius);\n  box-shadow: 5px 0px 12px -5px rgba(0, 0, 0, 0.1);\n}\n\n.logo {\n  margin-bottom: 40px;\n  transform: skewX(-10deg);\n  font-family: 'Bebas Neue', Arial, Helvetica, sans-serif, monospace;\n  font-size: 2.5rem;\n  color: var(--color-purple-2);\n  cursor: default;\n}\n\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  font-family: 'Raleway', 'Open Sans', Arial, Helvetica, sans-serif;\n  font-weight: 500;\n}\n\n.emoji {\n  margin-right: 5px;\n}\n\n.tasks-all {\n  margin-bottom: 20px;\n}\n\n.nav--tasks,\n.nav--projects {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sidebar-gap);\n  color: var(--color-purple-3);\n}\n\n.nav--tasks > *,\n.nav--projects > *,\n.nav--notes {\n  cursor: pointer;\n}\n\n.nav--tasks > *:hover,\n.nav--projects > *:hover,\n.nav--notes:hover,\n.nav--tasks > *:focus,\n.nav--projects > *:focus,\n.nav--notes:focus {\n  transform: scale(1.01);\n  transform-origin: left;\n  font-weight: 1000;\n  outline: none;\n}\n\n.nav--projects {\n  min-height: 60px;\n  max-height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-right: 10px;\n}\n\n.nav--project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav--project-title {\n  padding: 4px 0;\n  width: 100%;\n}\n\n.edit-project-icon {\n  font-size: 1.1rem;\n  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;\n  color: rgb(95, 95, 95);\n}\n\n.edit-project-icon:hover,\n.edit-project-icon:focus {\n  color: var(--color-yellow-4);\n}\n\n.nav--notes {\n  margin-bottom: 30px;\n}\n\n/* MAIN CONTAINER STYLES */\n\n.content-container {\n  padding: var(--container-padding);\n  padding-left: calc(var(--container-padding) + 5px);\n  width: 70%;\n  position: relative;\n}\n\n.content-title {\n  font-size: 1.2rem;\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.content-display {\n  height: clamp(100px, 90%, 1000px);\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  padding-right: 10px;\n}\n\n.task {\n  padding: 12px 5px;\n  margin-bottom: 10px;\n  border-radius: 2px;\n  font-family: 'Roboto', Arial, Helvetica, sans-serif, monospace;\n  font-size: 0.95rem;\n  background-color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-left: 5px solid;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;\n}\n\n.task.priority-high {\n  border-left-color: var(--color-red-4);\n}\n\n.task.priority-medium {\n  border-left-color: var(--color-yellow-4);\n}\n\n.task.priority-low {\n  border-left-color: var(--color-seafoam-6);\n}\n\n.task-left,\n.task-right {\n  display: flex;\n  align-items: center;\n}\n\n.task-left > input[type='checkbox'] {\n  appearance: none;\n  font: inherit;\n  color: currentColor;\n  width: 1.15rem;\n  height: 1.15rem;\n  border: 0.15rem solid currentColor;\n  border-radius: 5px;\n  margin: 0 15px 0 12px;\n  transition: 0.15s ease-in-out;\n  display: grid;\n  place-content: center;\n}\n\n.task-left > input[type='checkbox']:checked {\n  background-color: #245e35;\n}\n\n.task-left > input[type='checkbox']:checked + .task-title {\n  text-decoration-line: line-through;\n  color: rgb(97, 97, 97);\n}\n\n.task-right {\n  gap: 15px;\n}\n\n.task-details-icon {\n  cursor: default;\n  vertical-align: center;\n  background-color: var(--color-purple-1);\n  padding: 7px 10px;\n  border-radius: 4px;\n  color: white;\n}\n\n.task-details-icon:hover,\n.task-details-icon:focus {\n  background-color: var(--color-purple-2);\n}\n\n.task-display-icon > .material-symbols-outlined {\n  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;\n  cursor: pointer;\n  color: rgb(70, 70, 70);\n  font-size: 1.2rem;\n  margin: 0 2px;\n}\n\n.task-display-icon > .material-symbols-outlined:hover,\n.task-display-icon > .material-symbols-outlined:focus {\n  transform: scale(1.05);\n}\n\n.task-display-icon.task-edit > .material-symbols-outlined:hover,\n.task-display-icon.task-edit > .material-symbols-outlined:focus,\n.task-display-icon.task-edit > .material-symbols-outlined:active {\n  color: var(--color-yellow-4);\n}\n\n.task-display-icon.task-delete > .material-symbols-outlined:hover,\n.task-display-icon.task-delete > .material-symbols-outlined:focus,\n.task-display-icon.task-delete > .material-symbols-outlined:active {\n  color: var(--color-red-5);\n}\n\n.btn-edit-task,\n.btn-delete-task {\n  padding: 8px 15px;\n  width: 70px;\n  border-radius: 5px;\n}\n\n.btn-edit-task:hover,\n.btn-edit-task:focus,\n.btn-delete-task:hover,\n.btn-delete-task:focus {\n  color: white;\n}\n\n.btn-edit-task {\n  border: 2px solid var(--color-yellow-4);\n  color: var(--color-yellow-5);\n}\n\n.btn-edit-task:hover,\n.btn-edit-task:active,\n.btn-edit-task:focus {\n  background-color: var(--color-yellow-4);\n}\n\n.btn-delete-task {\n  border: 2px solid var(--color-red-4);\n  color: var(--color-red-4);\n}\n\n.btn-delete-task:hover,\n.btn-delete-task:active,\n.btn-delete-task:focus {\n  background-color: var(--color-red-4);\n}\n\n.notes-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: var(--notes-gap);\n  height: 100%;\n}\n\n.notes-col-1,\n.notes-col-2 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--notes-gap);\n  height: 100%;\n}\n\n.note {\n  position: relative;\n  width: 100%;\n  height: min-content;\n  border: 1px solid rgba(0, 0, 0, 0.175);\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 1px, rgba(0, 0, 0, 0.04) 0px 2px 2px,\n    rgba(0, 0, 0, 0.02) 0px 4px 4px, rgba(0, 0, 0, 0.04) 0px 8px 8px,\n    rgba(0, 0, 0, 0.04) 0px 16px 16px;\n  padding: 20px;\n  display: flex;\n  line-height: normal;\n  flex-direction: column;\n  background-color: white;\n  gap: 10px;\n}\n\n.note > *:focus {\n  outline: none;\n}\n\n.note-title {\n  max-width: 85%;\n  font-weight: 600;\n}\n\n.note-details {\n  font-size: 0.9rem;\n  color: rgb(54, 54, 54);\n  height: auto;\n  overflow-wrap: break-word;\n}\n\n.btn-delete-note {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 12px;\n  background-color: white;\n}\n\n.btn-delete-note > .material-symbols-outlined {\n  color: var(--color-red-5);\n}\n\n.btn-delete-note > .material-symbols-outlined:hover,\n.btn-delete-note > .material-symbols-outlined:focus {\n  transform: scale(1.2);\n}\n\n.btn-add {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  margin: 20px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  outline: 10px solid rgba(255, 255, 255, 0.5);\n  background-color: var(--color-blond-2);\n  transition: 0.1s linear;\n}\n\n.btn-add:hover,\n.btn-add:active,\n.btn-add:focus {\n  transform: scale(1.15);\n  transform-origin: right;\n}\n\n.btn-add .material-symbols-outlined {\n  color: rgb(70, 70, 70);\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.btn-add .material-symbols-outlined:hover,\n.btn-add .material-symbols-outlined:focus {\n  transform: scale(1.05);\n  transform-origin: top;\n  color: var(--color-purple-3);\n}\n\n/*  MODAL */\n\n.modal,\n.modal-details {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transform: translate(-50%, -50%);\n  width: clamp(120px, 85%, 600px);\n  height: clamp(120px, 90%, 800px);\n  border-radius: var(--container-border-radius);\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,\n    rgba(0, 0, 0, 0.05) 0px 5px 10px;\n}\n\n.modal-header {\n  position: relative;\n  padding: var(--modal-padding);\n  padding-bottom: calc(var(--modal-padding) / 2);\n  /* border-bottom: 1px solid rgba(0, 0, 0, 0.432); */\n  border-top-left-radius: var(--container-border-radius);\n  border-top-right-radius: var(--container-border-radius);\n  background-color: #a5a6e263;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.btn-close-modal,\n.btn-close-modal-details {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 20px;\n  cursor: default;\n}\n\n.btn-close-modal:hover,\n.btn-close-modal:active,\n.btn-close-modal:focus {\n  color: var(--color-red-5);\n  transform: scale(1.1);\n}\n\n.modal-title {\n  font-size: 1.2rem;\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n  color: rgb(65, 65, 65);\n  padding-left: 10px;\n}\n\n.modal-nav {\n  display: flex;\n  gap: 20px;\n}\n\n.modal-link {\n  padding: 10px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n\n.modal-link:focus {\n  outline: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.modal-link--active {\n  font-weight: 600;\n}\n\n.modal-content-wrapper {\n  padding: var(--modal-padding);\n  padding-top: calc(var(--modal-padding) / 2);\n}\n\n.modal-content,\n.edit-task--form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.edit-task--form {\n  margin-top: 10px;\n  height: clamp(120px, 90%, 800px);\n}\n\n.edit-task--header,\n.edit-project--header {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n  font-size: 1.25rem;\n  color: var(--color-purple-2);\n  padding-left: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.5);\n}\n\ntextarea {\n  resize: vertical;\n  border-radius: 5px;\n  padding: 10px;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: var(--outline-focus);\n}\n\n#new-task--title,\n#edit-task--title {\n  resize: none;\n  vertical-align: center;\n}\n\n#new-task--details,\n#edit-task--details {\n  display: block;\n  max-height: 180px;\n  min-height: 60px;\n}\n\n.btn-submit {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  border: 2px solid var(--color-purple-1);\n  border-radius: 7px;\n  background-color: white;\n  color: var(--color-purple-1);\n  font-weight: 600;\n}\n\n.btn-submit:hover,\n.btn-submit:active,\n.btn-submit:focus {\n  background-color: var(--color-purple-1);\n  outline: none;\n  color: white;\n}\n\ndiv.new-task--form-element,\ndiv.edit-task--form-element {\n  padding: 5px;\n}\n\ndiv.new-task--form-element > *:first-child,\ndiv.edit-task--form-element > *:first-child {\n  color: rgb(90, 90, 90);\n  margin-right: 10px;\n}\n\n.new-task--task-priority-wrapper,\n.edit-task--task-priority-wrapper {\n  display: flex;\n}\n\n.new-task--priority-input,\n.edit-task--priority-input {\n  position: relative;\n  left: 2.2rem;\n  height: 1px;\n  width: 1px;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n}\n\n.new-task--priority-label,\n.edit-task--priority-label {\n  border: 2px solid;\n  border-radius: 5px;\n  padding: 0.25rem 0.5rem;\n  margin: 0 0.1 em;\n  cursor: pointer;\n  font-weight: 600;\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n  transition: transform ease-in-out 200ms;\n}\n\n.new-task--priority-label.priority-low,\n.edit-task--priority-label.priority-low {\n  color: var(--color-seafoam-6);\n  border-color: currentColor;\n}\n\n.new-task--priority-label.priority-medium,\n.edit-task--priority-label.priority-medium {\n  color: var(--color-yellow-5);\n  border-color: currentColor;\n}\n\n.new-task--priority-label.priority-high,\n.edit-task--priority-label.priority-high {\n  color: var(--color-red-5);\n  border-color: currentColor;\n}\n\n.new-task--priority-label.priority-active,\n.edit-task--priority-label.priority-active {\n  color: white;\n}\n\n.new-task--priority-label.priority-high.priority-active,\n.edit-task--priority-label.priority-high.priority-active {\n  background-color: var(--color-red-5);\n  border-color: var(--color-red-5);\n}\n\n.new-task--priority-label.priority-medium.priority-active,\n.edit-task--priority-label.priority-medium.priority-active {\n  background-color: var(--color-yellow-4);\n  border-color: var(--color-yellow-4);\n}\n\n.new-task--priority-label.priority-low.priority-active,\n.edit-task--priority-label.priority-low.priority-active {\n  background-color: var(--color-seafoam-6);\n  border-color: var(--color-seafoam-6);\n}\n\n.new-task--task-priority-wrapper,\n#new-task--date,\n#new-task--project,\n#new-task--status,\n.edit-task--task-priority-wrapper,\n#edit-task--date,\n#edit-task--project,\n#edit-task--status {\n  background-color: white;\n  padding: 5px;\n}\n\n#new-task--date,\n#new-task--project,\n#new-task--status,\n#edit-task--date,\n#edit-task--project,\n#edit-task--status {\n  max-width: 150px;\n}\n\n#new-task--project:focus,\n#new-task--project:active,\n#new-task--status:focus,\n#new-task--status:active,\n#edit-task--project:focus,\n#edit-task--project:active,\n#edit-task--status:focus,\n#edit-task--status:active {\n  outline: var(--outline-focus);\n}\n\n#new-project--title {\n  min-height: 60px;\n  max-height: 100px;\n}\n\n#new-note--title {\n  resize: none;\n}\n\n#new-note--details {\n  min-height: 60px;\n  max-height: 300px;\n}\n\n#new-task--title,\n#edit-task--title,\n#new-project--title,\n#new-note--title,\n#edit-project--title {\n  font-size: 1.05rem;\n}\n\n#new-task--details,\n#edit-task--details,\n#new-note--details {\n  color: rgb(85, 85, 85);\n}\n\n.edit-task--btn-container,\n.edit-project--btn-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 10px;\n}\n\n.edit-task--btn-container .btn-submit,\n.edit-project--btn-container .btn-submit {\n  position: relative;\n  transform: none;\n}\n\n.edit-task--btn-container .btn-delete,\n.edit-project--btn-container .btn-delete {\n  color: var(--color-red-4);\n}\n\n.edit-task--btn-container .btn-submit,\n.edit-task--btn-container .btn-delete,\n.edit-project--btn-container .btn-submit,\n.edit-project--btn-container .btn-delete {\n  padding: 10px 20px;\n  font-weight: 600;\n  background-color: white;\n  border-radius: 7px;\n  border: 2px solid;\n  bottom: 0;\n  left: 0;\n  margin-bottom: 0;\n  width: clamp(50px, 30%, 200px);\n}\n\n.edit-task--btn-container .btn-submit:hover,\n.edit-task--btn-container .btn-submit:focus,\n.edit-project--btn-container .btn-submit:hover,\n.edit-project--btn-container .btn-submit:focus {\n  background-color: var(--color-purple-1);\n}\n\n.edit-task--btn-container .btn-delete:hover,\n.edit-task--btn-container .btn-delete:focus,\n.edit-project--btn-container .btn-delete:hover,\n.edit-project--btn-container .btn-delete:focus {\n  background-color: var(--color-red-4);\n  border-color: var(--color-red-4);\n  color: white;\n}\n\n.edit-project--form {\n  display: flex;\n  flex-direction: column;\n  height: 120px;\n}\n\n#edit-project--title {\n  padding: 10px;\n  margin: 15px 0;\n  border-radius: 5px;\n}\n\n/*  MODAL DETAILS */\n\n.modal-details {\n  height: fit-content;\n  width: clamp(100px, 70%, 500px);\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.detail--task-title {\n  font-size: 1.3rem;\n}\n\n.detail--task-details {\n  font-size: 0.95rem;\n  color: rgb(77, 77, 77);\n  line-height: normal;\n}\n\n.detail--task-date,\n.detail--task-priority,\n.detail--task-status,\n.detail--task-project-name {\n  font-size: 0.95rem;\n}\n\n.detail--btn-container {\n  margin: 0 auto;\n  display: flex;\n  gap: 10px;\n}\n\n.detail--btn-edit,\n.detail--btn-delete {\n  padding: 10px 12px;\n  border-radius: 5px;\n  background-color: white;\n  border: 2px solid;\n  width: 80px;\n  text-align: center;\n  font-weight: 600;\n}\n\n.detail--btn-edit:hover,\n.detail--btn-edit:focus,\n.detail--btn-delete:hover,\n.detail--btn-delete:focus {\n  color: white;\n}\n\n.detail--btn-edit {\n  color: var(--color-yellow-4);\n  border-color: var(--color-yellow-4);\n}\n\n.detail--btn-edit:hover,\n.detail--btn-edit:focus {\n  background-color: var(--color-yellow-4);\n}\n\n.detail--btn-delete {\n  color: var(--color-red-5);\n  border-color: var(--color-red-5);\n}\n\n.detail--btn-delete:hover,\n.detail--btn-delete:focus {\n  background-color: var(--color-red-5);\n}\n\n/*  FOOTER */\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  margin-top: 2.4rem;\n  padding: 1rem;\n  color: #5e67a3;\n}\n.footer-link {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer-desc {\n  font-family: 'Open Sans ', 'Gill Sans', 'Gill Sans MT', Calibri,\n    'Trebuchet MS', sans-serif;\n  padding-left: 1em;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.footer-link:link,\n.footer-link:visited {\n  text-decoration: none;\n  color: #424870;\n}\n\n/* HELPERS */\n.hidden {\n  display: none;\n}\n\n.overlay {\n  background-color: rgba(0, 0, 0, 0.25);\n  height: 100vh;\n  width: 200vw;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* MEDIA QUERIES */\n\n@media screen and (max-height: 800px) {\n  footer {\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .container {\n    width: 100vw;\n    height: auto;\n    margin: 0;\n  }\n\n  .task-display-icon.task-delete,\n  .task-display-icon.task-edit {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 550px) {\n  .container {\n    flex-direction: column;\n    min-height: 100vh;\n  }\n\n  .sidebar {\n    width: 100%;\n  }\n\n  .logo {\n    margin-bottom: 10px;\n    font-size: 2rem;\n  }\n\n  .sidebar-nav {\n    flex-direction: row;\n  }\n\n  .nav-task:not(.tasks-all) {\n    display: none;\n  }\n\n  .sidebar-nav,\n  .nav--tasks {\n    height: fit-content;\n  }\n\n  .tasks-all {\n    margin-bottom: 0px;\n  }\n\n  .nav--projects {\n    display: none;\n  }\n\n  .nav--notes {\n    margin-bottom: 0px;\n  }\n\n  .content-container {\n    width: 100%;\n    height: 100%;\n  }\n\n  .btn-add {\n    position: fixed;\n    margin: 30px;\n    outline: 10px solid rgba(255, 255, 255, 0.9);\n  }\n\n  .modal,\n  .modal-details {\n    width: 100%;\n    height: clamp(120px, 80%, 800px);\n    position: fixed;\n    top: auto;\n    left: auto;\n    transform: none;\n    bottom: 0;\n  }\n\n  .detail--btn-container {\n    margin-bottom: 20px;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .detail--btn-edit {\n    width: 60%;\n  }\n\n  .notes-container {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  .new-task--task-priority-wrapper,\n  .edit-task--task-priority-wrapper {\n    flex-direction: column;\n    gap: 20px;\n  }\n}\n\n@media screen and (max-width: 300px) {\n  .new-task--priority-fieldset,\n  .edit-task--priority-fieldset {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .new-task--priority-label,\n  .edit-task--priority-label {\n    padding: 0.5rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isFuture/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isFuture/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isFuture)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * const result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */

function isFuture(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime() > Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/style.css */ "./src/style.css");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _views_taskView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/taskView */ "./src/views/taskView.js");
/* harmony import */ var _views_taskDetailsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/taskDetailsView */ "./src/views/taskDetailsView.js");
/* harmony import */ var _views_addTaskView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/addTaskView */ "./src/views/addTaskView.js");
/* harmony import */ var _views_addProjectView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/addProjectView */ "./src/views/addProjectView.js");
/* harmony import */ var _views_addNoteView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/addNoteView */ "./src/views/addNoteView.js");
/* harmony import */ var _views_noteView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/noteView */ "./src/views/noteView.js");
/* harmony import */ var _views_editTaskView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/editTaskView */ "./src/views/editTaskView.js");
/* harmony import */ var _views_sidebarView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/sidebarView */ "./src/views/sidebarView.js");
/* harmony import */ var _views_projectView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/projectView */ "./src/views/projectView.js");
/* harmony import */ var _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/editProjectView */ "./src/views/editProjectView.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isFuture/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");

















// Task Controllers

const ctrlShowAllTasks = () => {
  _views_taskView__WEBPACK_IMPORTED_MODULE_2__["default"].render(_model__WEBPACK_IMPORTED_MODULE_1__.state.tasks);

  addHandlersToTasks();
};

const ctrlToggleStatus = (data) => {
  _model__WEBPACK_IMPORTED_MODULE_1__.updateTask(data);
};

const ctrlTaskDetails = (id) => {
  const toShow = _model__WEBPACK_IMPORTED_MODULE_1__.state.tasks.find((task) => task.id === id);

  _views_taskDetailsView__WEBPACK_IMPORTED_MODULE_3__["default"].render(toShow);

  _views_editTaskView__WEBPACK_IMPORTED_MODULE_8__["default"].addHandlerEditTaskOnModal(ctrlEditTask);
};

const ctrlAddTask = (data) => {
  _model__WEBPACK_IMPORTED_MODULE_1__.addTask(data);

  ctrlShowTasksByProject(data.projectID);
};

const ctrlEditTask = (id) => {
  const toShow = _model__WEBPACK_IMPORTED_MODULE_1__.state.tasks.find((task) => task.id === id);

  _views_editTaskView__WEBPACK_IMPORTED_MODULE_8__["default"].render(toShow);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_8__["default"].renderProjects(_model__WEBPACK_IMPORTED_MODULE_1__.state.projects, toShow.projectID);

  _views_editTaskView__WEBPACK_IMPORTED_MODULE_8__["default"].addHandlerSaveEdit(ctrlUpdateTask);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_8__["default"].addHandlerDeleteTask(ctrlDeleteTask);
};

const ctrlUpdateTask = (data) => {
  _model__WEBPACK_IMPORTED_MODULE_1__.updateTask(data);

  ctrlShowTasksByProject(data.projectID);
};

const ctrlDeleteTask = (id) => {
  _model__WEBPACK_IMPORTED_MODULE_1__.deleteTask(id);

  ctrlShowAllTasks();
};

// Sidebar Task Controllers

const ctrlTasksToday = () => {
  const date = new Date();
  const [day, month, year] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ];

  const toShow = _model__WEBPACK_IMPORTED_MODULE_1__.state.tasks.filter(
    (task) => task.date === (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(year, month, day), 'yyyy-MM-dd'),
  );

  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].render(toShow);

  addHandlersToTasks();
};

const ctrlTasksUpcoming = () => {
  const toShow = _model__WEBPACK_IMPORTED_MODULE_1__.state.tasks.filter((task) =>
    (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(task.date)),
  );

  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].render(toShow);

  addHandlersToTasks();
};

const ctrlTasksFinished = () => {
  const toShow = _model__WEBPACK_IMPORTED_MODULE_1__.state.tasks.filter((task) => task.status === 'finished');

  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].render(toShow);

  addHandlersToTasks();
};

const ctrlHighPriority = () => {
  const toShow = _model__WEBPACK_IMPORTED_MODULE_1__.state.tasks.filter((task) => task.priority === 'high');

  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].render(toShow);

  addHandlersToTasks();
};

const ctrlMediumPriority = () => {
  const toShow = _model__WEBPACK_IMPORTED_MODULE_1__.state.tasks.filter((task) => task.priority === 'medium');

  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].render(toShow);

  addHandlersToTasks();
};

const ctrlLowPriority = () => {
  const toShow = _model__WEBPACK_IMPORTED_MODULE_1__.state.tasks.filter((task) => task.priority === 'low');

  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].render(toShow);

  addHandlersToTasks();
};

// Sidebar Project ctrllers

const ctrlRenderProjectsOnSidebar = () => {
  _views_sidebarView__WEBPACK_IMPORTED_MODULE_9__["default"].render(_model__WEBPACK_IMPORTED_MODULE_1__.state.projects);

  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].addHandlerShowTasks(ctrlShowTasksByProject);
  _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__["default"].addHandlerEditProject(ctrlEditProject);
};

const ctrlShowTasksByProject = (id) => {
  const toShow = _model__WEBPACK_IMPORTED_MODULE_1__.state.tasks.filter((task) => task.projectID === id);

  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].render(toShow);

  addHandlersToTasks();
};

const ctrlProjectsOnForm = () => {
  _views_addTaskView__WEBPACK_IMPORTED_MODULE_4__["default"].renderProjects(_model__WEBPACK_IMPORTED_MODULE_1__.state.projects);
};

const ctrlAddProject = (data) => {
  _model__WEBPACK_IMPORTED_MODULE_1__.addProject(data);

  ctrlRenderProjectsOnSidebar();
};

const ctrlEditProject = (id) => {
  const toShow = _model__WEBPACK_IMPORTED_MODULE_1__.state.projects.find((project) => project.id === id);

  _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__["default"].render(toShow);

  _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__["default"].addHandlerSaveEdit(ctrlUpdateProject);
  _views_editProjectView__WEBPACK_IMPORTED_MODULE_11__["default"].addHandlerDeleteProject(ctrlDeleteProject);
};

const ctrlUpdateProject = (data) => {
  _model__WEBPACK_IMPORTED_MODULE_1__.updateProject(data);

  ctrlRenderProjectsOnSidebar();
  ctrlShowTasksByProject(data.id);
};

const ctrlDeleteProject = (id) => {
  _model__WEBPACK_IMPORTED_MODULE_1__.deleteProject(id);

  ctrlRenderProjectsOnSidebar();
};

// Note controllers

const ctrlShowNotes = () => {
  _views_noteView__WEBPACK_IMPORTED_MODULE_7__["default"].render(_model__WEBPACK_IMPORTED_MODULE_1__.state.notes);

  _views_noteView__WEBPACK_IMPORTED_MODULE_7__["default"].addHandlerDeleteNotes(ctrlDeleteNote);
  _views_noteView__WEBPACK_IMPORTED_MODULE_7__["default"].addHandlerEditNotes(ctrlEditNote);
};

const ctrlAddNote = (data) => {
  _model__WEBPACK_IMPORTED_MODULE_1__.addNote(data);

  ctrlShowNotes();
};

const ctrlEditNote = (data) => {
  _model__WEBPACK_IMPORTED_MODULE_1__.updateNote(data);

  ctrlShowNotes();
};

const ctrlDeleteNote = (id) => {
  _model__WEBPACK_IMPORTED_MODULE_1__.deleteNote(id);

  ctrlShowNotes();
};

const init = () => {
  // Task initializers
  ctrlShowAllTasks();

  _views_taskView__WEBPACK_IMPORTED_MODULE_2__["default"].addHandlerToggleStatus(ctrlToggleStatus);
  _views_taskDetailsView__WEBPACK_IMPORTED_MODULE_3__["default"].addHandlerShowTaskDetails(ctrlTaskDetails);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_8__["default"].addHandlerEditTask(ctrlEditTask);
  _views_taskView__WEBPACK_IMPORTED_MODULE_2__["default"].addHandlerDeleteTask(ctrlDeleteTask);

  // Project / Sidebar initializers
  ctrlRenderProjectsOnSidebar();

  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].addHandlerTasksAll(ctrlShowAllTasks);
  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].addHandlerTasksFinished(ctrlTasksFinished);
  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].addHandlerTasksToday(ctrlTasksToday);
  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].addHandlerTasksUpcoming(ctrlTasksUpcoming);
  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].addHandlerHighPriority(ctrlHighPriority);
  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].addHandlerMediumPriority(ctrlMediumPriority);
  _views_projectView__WEBPACK_IMPORTED_MODULE_10__["default"].addHandlerLowPriority(ctrlLowPriority);

  // Note initializer
  _views_noteView__WEBPACK_IMPORTED_MODULE_7__["default"].addHandlerShowNotes(ctrlShowNotes);

  // Modal initializers
  _views_addTaskView__WEBPACK_IMPORTED_MODULE_4__["default"].addHandlerAddTask(ctrlAddTask);
  _views_addTaskView__WEBPACK_IMPORTED_MODULE_4__["default"].addHandlerListProjects(ctrlProjectsOnForm);
  _views_addNoteView__WEBPACK_IMPORTED_MODULE_6__["default"].addHandlerAddNote(ctrlAddNote);
  _views_addProjectView__WEBPACK_IMPORTED_MODULE_5__["default"].addHandlerAddProject(ctrlAddProject);
};

init();

// Helpers

function addHandlersToTasks() {
  _views_taskView__WEBPACK_IMPORTED_MODULE_2__["default"].addHandlerToggleStatus(ctrlToggleStatus);
  _views_taskDetailsView__WEBPACK_IMPORTED_MODULE_3__["default"].addHandlerShowTaskDetails(ctrlTaskDetails);
  _views_editTaskView__WEBPACK_IMPORTED_MODULE_8__["default"].addHandlerEditTask(ctrlEditTask);
  _views_taskView__WEBPACK_IMPORTED_MODULE_2__["default"].addHandlerDeleteTask(ctrlDeleteTask);
}


/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNote": () => (/* binding */ addNote),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "deleteNote": () => (/* binding */ deleteNote),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "state": () => (/* binding */ state),
/* harmony export */   "updateNote": () => (/* binding */ updateNote),
/* harmony export */   "updateProject": () => (/* binding */ updateProject),
/* harmony export */   "updateTask": () => (/* binding */ updateTask)
/* harmony export */ });
/* eslint-disable no-underscore-dangle */

const state = {
  tasks: [],
  projects: [{ title: 'Home', id: 'ID00000' }],
  notes: [],
};

const _persistToLocalStorage = (type) => {
  localStorage.setItem(type, JSON.stringify(state[type]));
};

// Tasks

const createTask = (data) => ({
  title: data.title,
  details: data.details,
  priority: data.priority,
  id: `ID${Math.random().toString(16).slice(2)}`,
  projectName: data.projectName,
  projectID: data.projectID,
  status: data.status,
  date: data.date,
  pinned: data.pinned || false,
});

const addTask = (data) => {
  const newTask = createTask(data);

  state.tasks.unshift(newTask);

  _persistToLocalStorage('tasks');
};

const updateTask = (data) => {
  const target = state.tasks[getIndex(state.tasks, data.id)];

  Object.assign(target, data);

  _persistToLocalStorage('tasks');
};

const deleteTask = (id) => {
  state.tasks.splice(getIndex(state.tasks, id), 1);

  _persistToLocalStorage('tasks');
};

// Projects

const createProject = (data) => ({
  title: data.title,
  id: `ID${Math.random().toString(16).slice(2)}`,
});

const addProject = (data) => {
  const newProject = createProject(data);

  state.projects.push(newProject);

  _persistToLocalStorage('projects');
};

const updateProject = (data) => {
  const target = state.projects[getIndex(state.projects, data.id)];

  Object.assign(target, data);

  updateProjectNames(data.id, data.title);

  Object.assign(target, data);

  _persistToLocalStorage('projects');
  _persistToLocalStorage('tasks');
};

const deleteProject = (id) => {
  deleteTasksUnderProject(id);

  state.projects.splice(getIndex(state.projects, id), 1);

  _persistToLocalStorage('projects');
  _persistToLocalStorage('tasks');
};

const updateProjectNames = (id, newProjName) => {
  state.tasks.forEach((task) => {
    if (task.projectID === id) {
      task.projectName = newProjName;
    }
  });
};

const deleteTasksUnderProject = (id) => {
  const tasksToDelete = state.tasks.filter((el) => el.projectID === id);

  tasksToDelete.forEach((item) => {
    let itemIndex = state.tasks.findIndex(
      (task) => task.projectID === item.projectID,
    );

    state.tasks.splice(itemIndex, 1);
  });
};

// Notes

const createNote = (data) => ({
  title: data.title,
  details: data.details,
  id: `ID${Math.random().toString(16).slice(2)}`,
});

const addNote = (data) => {
  const newNote = createNote(data);

  state.notes.push(newNote);

  _persistToLocalStorage('notes');
};

const updateNote = (data) => {
  const target = state.notes[getIndex(state.notes, data.id)];

  Object.assign(target, data);

  _persistToLocalStorage('notes');
};

const deleteNote = (id) => {
  state.notes.splice(getIndex(state.notes, id), 1);

  _persistToLocalStorage('notes');
};

const getIndex = (array, id) => {
  return array.findIndex((item) => item.id === id);
};

const init = () => {
  const stored = (type) => {
    let result = !!localStorage.getItem(type);

    return result;
  };

  const setToState = (type) => {
    state[type] = JSON.parse(localStorage.getItem(type));
  };

  ['tasks', 'projects', 'notes'].forEach((type) => {
    if (stored(type)) setToState(type);
  });
};

init();


/***/ }),

/***/ "./src/views/View.js":
/*!***************************!*\
  !*** ./src/views/View.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this._renderBackup();

    this._data = data;
    const markup = this._generateMarkup(data);

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderProjects = (data, chosenProjID) => {
    let markup;

    if (!chosenProjID) {
      markup = data
        .map(
          (proj) =>
            `<option value="${proj.id}" class="project-option">${proj.title}</option>`,
        )
        .join('');
    } else if (chosenProjID) {
      const firstChoice = data.find((proj) => proj.id === chosenProjID);
      const others = data
        .filter((proj) => proj.id !== chosenProjID)
        .map(
          (proj) =>
            `<option value="${proj.id}" class="project-option">${proj.title}</option>`,
        )
        .join('');

      markup = `<option value="${firstChoice.id}" class="project-option">${firstChoice.title}</option>
      ${others}`;
    }

    const projSelection = this._parentElement.querySelector('.select-project');

    projSelection.innerHTML = '';
    projSelection.insertAdjacentHTML('afterbegin', markup);
  };

  _changeTitle = (text) => {
    document.querySelector('.content-title').textContent = text;
  };

  _renderBackup() {
    const markup = this._generateBackup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  _unhideEl(el) {
    el.classList.remove('hidden');
  }

  _hideEl(el) {
    el.classList.add('hidden');
  }

  _toggleEl(el) {
    el.classList.toggle('hidden');
  }
}


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


class AddNoteView extends _modalView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _navLink = document.querySelector('.modal-link--note');
  _form = document.querySelector('.modal-content.add-new--note');
  _btnSubmit = document.querySelector('.btn-submit.submit--new-note');

  constructor() {
    super();
    this._addHandlerShowForm();
  }

  _addHandlerShowForm = () => {
    this._navLink.addEventListener('click', this._showForm.bind(this));
  };

  addHandlerAddNote = (handler) => {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = this._parentElement.querySelector('#new-note--title').value;

      const details =
        this._parentElement.querySelector('#new-note--details').value;

      const data = { title, details };

      handler(data);

      this._closeModal();
    });
  };
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


class AddProjectView extends _modalView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _navLink = document.querySelector('.modal-link--project');
  _form = document.querySelector('.modal-content.add-new--project');
  _btnSubmit = document.querySelector('.btn-submit.submit--new-project');

  constructor() {
    super();
    this._addHandlerShowForm();
  }

  _addHandlerShowForm = () => {
    this._navLink.addEventListener('click', this._showForm.bind(this));
  };

  addHandlerAddProject = (handler) => {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = this._parentElement.querySelector(
        '#new-project--title',
      ).value;

      const data = { title };

      handler(data);
      this._closeModal();
    });
  };
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


class AddTaskView extends _modalView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _navLink = document.querySelector('.modal-link--task');
  _form = this._parentElement.querySelector('.modal-content.add-new--task');
  _btnSubmit = this._parentElement.querySelector(
    '.btn-submit.submit--new-task',
  );
  _priorityList = [
    ...this._parentElement.querySelectorAll('.new-task--priority-label'),
  ];
  _projectSelector = this._parentElement.querySelector(
    '.new-task--task-project-wrapper',
  );

  constructor() {
    super();

    this._addHandlerShowModal();
    this._addHandlerCloseModal();
    this._addHandlerShowForm();
    this._addHandlerTogglePriority();
    this.addHandlerListProjects();
  }

  _addHandlerShowForm = () => {
    this._navLink.addEventListener('click', this._showForm.bind(this));
  };

  addHandlerAddTask = (handler) => {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = this._parentElement.querySelector('#new-task--title').value;

      const date = this._parentElement.querySelector('#new-task--date').value;

      const status =
        this._parentElement.querySelector('#new-task--status').value;

      const priority =
        this._parentElement.querySelector('.priority-active').nextElementSibling
          .value;

      const details =
        this._parentElement.querySelector('#new-task--details').value;

      const projectID =
        this._parentElement.querySelector('#new-task--project').value;

      const projectName = [
        ...this._parentElement.querySelectorAll('.project-option'),
      ].find((projEl) => projEl.value === projectID).textContent;

      if (this._validateTask([title, date, priority])) {
        const data = {
          title,
          date,
          status,
          priority,
          details,
          projectName,
          projectID,
        };

        // Stores data in model state through controller
        handler(data);

        this._changeTitle(projectName);

        this._closeModal();
      }
    });
  };

  addHandlerListProjects = (handler) => {
    this._btnAdd.addEventListener('click', handler);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AddTaskView());


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


class EditProjectView extends _modalView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _parentElement = document.querySelector('.modal-details');
  _overlay = document.querySelector('.overlay');

  addHandlerEditProject = (handler) => {
    document.querySelectorAll('.edit-project-icon').forEach((btn) =>
      btn.addEventListener('click', (e) => {
        const { id } = e.target.closest('.nav--project').dataset;

        this._parentElement.setAttribute('data-id', id);

        this._unhideEl(this._parentElement);
        this._unhideEl(this._overlay);

        handler(id);

        this._btnCloseModal = document.querySelector(
          '.btn-close-modal-details',
        );
        this._addHandlerCloseModal();
      }),
    );
  };

  addHandlerSaveEdit = (handler) => {
    this._parentElement
      .querySelector('form')
      .addEventListener('submit', (e) => {
        e.preventDefault();

        const title = this._parentElement.querySelector(
          '#edit-project--title',
        ).value;

        const { id } = this._parentElement.dataset;

        const data = {
          title,
          id,
        };

        handler(data);

        this._changeTitle(title);
        this._closeModal();
      });
  };

  addHandlerDeleteProject = (handler) => {
    this._parentElement
      .querySelector('.delete--edit-project')
      .addEventListener('click', (e) => {
        const { id } = e.target.closest('.modal-details').dataset;

        handler(id);

        this._closeModal();
      });
  };

  _generateMarkup = () => `
     <span class="edit-project--header">Edit Project</span>
     <span class="btn-close-modal-details material-symbols-outlined">close</span>  
      <form action="" class="edit-project--form">
          <input
            name="edit-project--title"
            id="edit-project--title"
            class="edit-project--form-element"
            minlength="1"
            maxlength="60"
            value="${this._data.title}"
            required
         />

        <div class="edit-project--btn-container">
            <button class="btn-submit submit--edit-project" type="submit">
              Save
            </button>
            <button class="btn-delete delete--edit-project" type="button">
              Delete
            </button>
          </div>
    </form>
    `;

  _generateBackup = () => 'You have not added anything yet';
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
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalView */ "./src/views/modalView.js");


class EditTaskView extends _modalView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _parentElement = document.querySelector('.modal-details');

  addHandlerEditTask = (handler) => {
    const tasks = [...document.querySelectorAll('.task')];

    tasks.forEach((task) =>
      task.addEventListener('click', (e) => {
        if (!e.target.parentNode.classList.contains('display-icon-edit'))
          return;

        const { id } = e.target.closest('.task').dataset;

        this._unhideEl(this._parentElement);
        this._unhideEl(this._overlay);

        this._parentElement.setAttribute('data-id', id);

        handler(id);

        this._priorityList = [
          ...this._parentElement.querySelectorAll('.edit-task--priority-label'),
        ];
        this._addHandlerTogglePriority();

        this._btnCloseModal = document.querySelector(
          '.btn-close-modal-details',
        );
        this._addHandlerCloseModal();
      }),
    );
  };

  addHandlerEditTaskOnModal = (handler) => {
    this._parentElement
      .querySelector('.detail--btn-edit')
      .addEventListener('click', (e) => {
        const { id } = e.target.closest('.modal-details').dataset;

        handler(id);

        this._priorityList = [
          ...this._parentElement.querySelectorAll('.edit-task--priority-label'),
        ];
        this._addHandlerTogglePriority();

        this._btnCloseModal = document.querySelector(
          '.btn-close-modal-details',
        );
        this._addHandlerCloseModal();
      });
  };

  addHandlerSaveEdit = (handler) => {
    this._parentElement
      .querySelector('form')
      .addEventListener('submit', (e) => {
        e.preventDefault();

        const title =
          this._parentElement.querySelector('#edit-task--title').value;

        const date =
          this._parentElement.querySelector('#edit-task--date').value;

        const status =
          this._parentElement.querySelector('#edit-task--status').value;

        const priority =
          this._parentElement.querySelector('.priority-active')
            .nextElementSibling.value;

        const details = this._parentElement.querySelector(
          '#edit-task--details',
        ).value;

        const projectID = this._parentElement.querySelector(
          '#edit-task--project',
        ).value;

        const projectName = [
          ...this._parentElement.querySelectorAll('.project-option'),
        ].find((projEl) => projEl.value === projectID).textContent;

        const { id } = this._parentElement.dataset;

        if (this._validateTask([title, date, priority])) {
          const data = {
            title,
            date,
            status,
            priority,
            details,
            projectName,
            projectID,
            id,
          };

          this._changeTitle(projectName);

          handler(data);

          this._closeModal();
        }
      });
  };

  addHandlerDeleteTask = (handler) => {
    this._parentElement
      .querySelector('.delete--edit-task')
      .addEventListener('click', (e) => {
        const targetTask = e.target.closest('.modal-details');
        const { id } = targetTask.dataset;

        handler(id);

        this._closeModal();
      });
  };

  _generateMarkup = () => {
    const task = this._data;

    const markup = ` 
      <span class="edit-task--header">Edit Task</span>
      <span class="btn-close-modal-details material-symbols-outlined">close</span>  
      <form action="" class="edit-task--form">
          <textarea
            name="edit-task--title"
            id="edit-task--title"
            class="edit-task--form-element"
            minlength="1"
            maxlength="60"
            placeholder="Go to the doctor's office"
            required
          >${task.title}</textarea>
          <textarea
            name="edit-task--details"
            id="edit-task--details"
            class="edit-task--form-element"
            minlength="1"
            placeholder="Appointment with Dr. Chiu at Somerset Hospital, 10am"
          >${task.details}</textarea>
          <div class="edit-task--form-element edit-task--task-date-wrapper">
            <label for="edit-task--date"> Due Date: </label>
            <input
              type="date"
              class="edit-task--form-input"
              id="edit-task--date"
              name="edit-task--date"
              value="${task.date}"
              required
            />
          </div>
          <div class="edit-task--form-element edit-task--task-priority-wrapper">
            <legend class="edit-task--priority-legend">Priority:</legend>

            <fieldset class="edit-task--priority-fieldset">
              <label
                for="edit-task--priority-low"
                class="edit-task--priority-label priority-low ${
                  task.priority === 'low' ? 'priority-active' : ''
                }"
                >Low</label
              >
              <input
                type="radio"
                class="edit-task--form-input edit-task--priority-input"
                id="edit-task--priority-low"
                name="edit-task--priority-low"
                value="low"
                ${task.priority === 'low' ? 'checked' : ''}
              />
              <label
                for="edit-task--priority-medium"
                class="edit-task--priority-label priority-medium ${
                  task.priority === 'medium' ? 'priority-active' : ''
                }"
                >Medium</label
              >
              <input
                type="radio"
                class="edit-task--form-input edit-task--priority-input"
                id="edit-task--priority-medium"
                name="edit-task--priority-medium"
                value="medium"
                ${task.priority === 'medium' ? 'checked' : ''}
              />
              <label
                for="edit-task--priority-high"
                class="edit-task--priority-label priority-high ${
                  task.priority === 'high' ? 'priority-active' : ''
                }"
                >High</label
              >
              <input
                type="radio"
                class="edit-task--form-input edit-task--priority-input"
                id="edit-task--priority-high"
                name="edit-task--priority-high"
                value="high"
                ${task.priority === 'high' ? 'checked' : ''}
              />
            </fieldset>
          </div>
          <div class="edit-task--form-element edit-task--task-project-wrapper">
            <label for="edit-task--project">Project:</label>
            <select name="edit-task--project" id="edit-task--project" class="select-project">
            </select>
          </div>
          <div class="edit-task--form-element edit-task--task-status">
            <label for="edit-task--status">Status:</label
            ><select name="edit-task--status" id="edit-task--status">
              <option value="on-going">On-going</option>
              <option value="finished">Finished</option>
            </select>
          </div>
          <div class="edit-task--btn-container">
            <button class="btn-submit submit--edit-task" type="submit">
              Save
            </button>
            <button class="btn-delete delete--edit-task" type="button">
              Delete
            </button>
          </div>
        </form>
    `;

    return markup;
  };

  _generatePlaceholder = () => 'You have not added anything yet';
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
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/views/View.js");



class ModalView extends _View__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _parentElement = document.querySelector('.modal');
  _overlay = document.querySelector('.overlay');
  _window = document.querySelector('.modal-content-wrapper');
  _btnAdd = document.querySelector('.btn-add');

  _btnCloseModal = this._parentElement.querySelector('.btn-close-modal');
  _btnSubmit = this._parentElement.querySelector('.btn-submit');

  _modalLinks = [...this._parentElement.querySelectorAll('.modal-link')];
  _modalFormContainer = [
    ...this._parentElement.querySelectorAll('.modal-content'),
  ];

  _addHandlerShowModal = () => {
    this._btnAdd.addEventListener('click', this._showModal);
  };

  _addHandlerCloseModal = () => {
    this._btnCloseModal.addEventListener('click', this._closeModal);
  };

  _addHandlerTogglePriority = () => {
    this._priorityList.forEach((el) =>
      el.addEventListener('click', (e) => {
        this._priorityList.forEach((priority) =>
          priority.classList.remove('priority-active'),
        );

        e.target.classList.add('priority-active');
      }),
    );
  };

  _showModal = () => {
    this._unhideEl(this._parentElement);
    this._unhideEl(this._overlay);

    this._parentElement.querySelector('#new-task--date').value =
      this._formatDateForForm();
  };

  _closeModal = () => {
    this._hideEl(this._parentElement);
    this._hideEl(this._overlay);

    this._resetForms();
    this._parentElement.removeAttribute('data-id');
  };

  _showForm = (e) => {
    this._makeActiveLink(e.target);

    this._modalFormContainer.forEach((form) => {
      this._resetForms();
      this._hideEl(form);
    });

    this._parentElement.querySelector('#new-task--date').value =
      this._formatDateForForm();

    this._unhideEl(this._form);
  };

  _resetForms = () => {
    [...this._parentElement.querySelectorAll('form')].forEach((form) =>
      form.reset(),
    );
  };

  _makeActiveLink = (target) => {
    this._modalLinks.forEach((link) =>
      link.classList.remove('modal-link--active'),
    );
    target.classList.add('modal-link--active');
  };

  _formatDateForForm = () => {
    const date = new Date();
    const [day, month, year] = [
      date.getDate(),
      date.getMonth(),
      date.getFullYear(),
    ];

    return (0,date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(year, month, day), 'yyyy-MM-dd');
  };

  _validateTask(arr) {
    const [title, date, priority] = arr;

    return !(!title || !date || !priority);
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
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/views/View.js");


class NoteView extends _View__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/views/View.js");


class ProjectView extends _View__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _parentElement = document.querySelector('.content-display');

  addHandlerShowTasks = (handler) => {
    document.querySelectorAll('.nav--project').forEach((proj) =>
      proj.addEventListener('click', (e) => {
        if (!e.target.classList.contains('nav--project-title')) return;

        const { id } = e.target.closest('.nav--project').dataset;

        this._changeTitle(e.target.textContent);

        handler(id);
      }),
    );
  };

  addHandlerTasksAll = (handler) => {
    document.querySelector('.tasks-all').addEventListener('click', () => {
      handler();
      this._changeTitle('All tasks');
    });
  };

  addHandlerTasksToday = (handler) => {
    document.querySelector('.tasks-today').addEventListener('click', () => {
      handler();
      this._changeTitle('Due Today');
    });
  };

  addHandlerTasksUpcoming = (handler) => {
    document.querySelector('.tasks-upcoming').addEventListener('click', () => {
      handler();
      this._changeTitle('Upcoming');
    });
  };

  addHandlerTasksFinished = (handler) => {
    document.querySelector('.tasks-finished').addEventListener('click', () => {
      handler();
      this._changeTitle('Finished');
    });
  };

  addHandlerHighPriority = (handler) => {
    document
      .querySelector('.tasks-high-priority')
      .addEventListener('click', () => {
        handler();
        this._changeTitle('High Priority');
      });
  };

  addHandlerMediumPriority = (handler) => {
    document
      .querySelector('.tasks-medium-priority')
      .addEventListener('click', () => {
        handler();
        this._changeTitle('Medium Priority');
      });
  };

  addHandlerLowPriority = (handler) => {
    document
      .querySelector('.tasks-low-priority')
      .addEventListener('click', () => {
        handler();
        this._changeTitle('Low Priority');
      });
  };

  _generateMarkup = () => {
    const markup = this._data
      .map(
        (task) => `
         <div class="task priority-${task.priority}" data-id="${task.id}">

              <div class="task-left">
                <input
                  type="checkbox"
                  name="task-status"
                  id="task-status"
                  class="task-status"
                  ${task.status === 'finished' ? 'checked' : ''}
                />
                <span class="task-title ${
                  task.status === 'finished' ? 'task-finished' : ''
                }">${task.title}</span>
              </div>

              <div class="task-right">
                <div class="task-details-icon" tabindex="0">
                  Details
                </div>

                <div class="task-display-icon display-icon-edit task-edit">
                  <span class="material-symbols-outlined">
                    edit
                  </span>
                </div>
                <div class="task-display-icon display-icon-delete task-delete">
                  <span class="material-symbols-outlined">
                    delete
                  </span>
                </div>
              </div>
          </div>
    `,
      )
      .join('');

    return markup;
  };

  _generateBackup = () =>
    `<div class="placeholder-project">You have no tasks listed under this project/category currently.</div>`;
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
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/views/View.js");


class SidebarView extends _View__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _parentElement = document.querySelector('.nav--projects');

  _generateMarkup = () =>
    this._data
      .map(
        (proj) =>
          `<div tabindex="0" class="nav--project" data-id="${proj.id}">
            <span class="nav--project-title">${proj.title}</span>
            ${
              proj.id !== 'ID00000'
                ? '<span class="material-symbols-outlined edit-project-icon">edit</span>'
                : ''
            }   
          </div>`,
      )
      .join('');

  _generateBackup = () =>
    `<div class="nav-project" data-id="ID00000">Example Project</div>`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SidebarView());


/***/ }),

/***/ "./src/views/taskDetailsView.js":
/*!**************************************!*\
  !*** ./src/views/taskDetailsView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalView */ "./src/views/modalView.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");



class TaskDetailsView extends _modalView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _window = document.querySelector('.modal-details');
  _parentElement = document.querySelector('.modal-details');
  _overlay = document.querySelector('.overlay');

  addHandlerShowTaskDetails(handler) {
    document.querySelectorAll('.task').forEach((el) =>
      el.addEventListener('click', (e) => {
        if (!e.target.classList.contains('task-details-icon')) return;

        const { id } = e.target.closest('.task').dataset;

        this._parentElement.setAttribute('data-id', id);

        this._unhideEl(this._parentElement);
        this._unhideEl(this._overlay);

        handler(id);

        this._btnCloseModal = document.querySelector(
          '.btn-close-modal-details',
        );
        this._addHandlerCloseModal();
      }),
    );
  }

  _generateMarkup = (data) => ` 
       <span class="btn-close-modal-details material-symbols-outlined">close</span>  
        <div class="detail--task-title">${data.title}</div>
        <div class="detail--task-details">
          ${data.details}
        </div>
        <div class="detail--task-date">Date: ${(0,date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(
          new Date(data.date),
          'MMMM d, yyy',
        )}</div>
        <div class="detail--task-priority">Priority: ${this._capitalizeFirstLetter(
          data.priority,
        )}</div>
        <div class="detail--task-status">Status: ${this._capitalizeFirstLetter(
          data.status,
        )}</div>
        <div class="detail--task-project-name">Project: ${
          data.projectName
        }</div>

        <div class="detail--btn-container">
          <button class="detail--btn-edit task-edit">Edit</button>
        </div>`;

  _generateBackup = () => `
        <span class="btn-close-modal-details material-symbols-outlined">close</span> 
        <div class="detail--task-title">Sample Task</div>
        <div class="detail--task-details">
          You are seeing this sample task because you have not added a task yet. Add one now!
        </div>
        <div class="detail--task-date">Date: Jan. 1, 2000</div>
        <div class="detail--task-priority">Priority: High</div>
        <div class="detail--task-status">Status: On-going</div>
        <div class="detail--task-project-name">Project: Home</div>

        <div class="detail--btn-container hidden">
          <button class="detail--btn-edit task-edit">Edit</button>
        </div> 
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TaskDetailsView());


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
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/views/View.js");


class TaskView extends _View__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _parentElement = document.querySelector('.content-display');
  _navShowAll = document.querySelector('.tasks-all');

  addHandlerToggleStatus = (handler) => {
    const statusBoxes = [...document.querySelectorAll('.task-status')];

    statusBoxes.forEach((box) =>
      box.addEventListener('click', (e) => {
        const { id } = e.target.closest('.task').dataset;

        const status = e.target.checked ? 'finished' : 'on-going';

        handler({ id, status });
      }),
    );
  };

  addHandlerDeleteTask = (handler) => {
    const tasks = [...document.querySelectorAll('.task')];

    tasks.forEach((task) =>
      task.addEventListener('click', (e) => {
        if (!e.target.parentNode.classList.contains('display-icon-delete'))
          return;

        const { id } = e.target.closest('.task').dataset;

        handler(id);
      }),
    );
  };

  _generateMarkup = () => {
    this._changeTitle('All tasks');

    const markup = this._data
      .map(
        (task) => `
         <div class="task priority-${task.priority}" data-id="${task.id}">

              <div class="task-left">
                <input
                  type="checkbox"
                  name="task-status"
                  id="task-status"
                  class="task-status"
                  ${task.status === 'finished' ? 'checked' : ''}
                />
                <span class="task-title ${
                  task.status === 'finished' ? 'task-finished' : ''
                }">${task.title}</span>
              </div>

              <div class="task-right">
                <div class="task-details-icon" tabindex="0">
                  Details
                </div>

                <div class="task-display-icon display-icon-edit task-edit">
                  <span class="material-symbols-outlined">
                    edit
                  </span>
                </div>
                <div class="task-display-icon display-icon-delete task-delete">
                  <span class="material-symbols-outlined">
                    delete
                  </span>
                </div>
              </div>
          </div>
    `,
      )
      .join('');

    return markup;
  };

  _generateBackup = () => {
    const markup = `
          <div class="task priority-medium" data-id="null">

              <div class="task-left">
                <input
                  type="checkbox"
                  name="task-status"
                  id="task-status"
                  class="task-status"
                />
                <span class="task-title">Sample Task</span>
              </div>

              <div class="task-right">
                <div class="task-details-icon">
                  Details
                </div>

                <div class="task-display-icon task-edit">
                  <span class="material-symbols-outlined">
                    edit
                  </span>
                </div>
                <div class="task-display-icon task-delete">
                  <span class="material-symbols-outlined">
                    delete
                  </span>
                </div>
              </div>
          </div>`;

    return markup;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TaskView());


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/controller.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSwwakJBQTBqQixZQUFZLGFBQWEsWUFBWSxrQkFBa0IsZ0JBQWdCLDJCQUEyQixHQUFHLHNIQUFzSCxpQkFBaUIsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFdBQVcscUJBQXFCLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLDZEQUE2RCxnQkFBZ0Isa0JBQWtCLEdBQUcsU0FBUyw4QkFBOEIsc0JBQXNCLEdBQUcsT0FBTyw2QkFBNkIseUJBQXlCLHdCQUF3QixvQkFBb0IsaUJBQWlCLGVBQWUsY0FBYywyQkFBMkIsR0FBRyxXQUFXLDhCQUE4Qiw4QkFBOEIsOEJBQThCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLDhCQUE4Qiw2QkFBNkIsNkJBQTZCLDZCQUE2QiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsZ0NBQWdDLDZCQUE2QixvQ0FBb0Msd0JBQXdCLHNCQUFzQiwwQkFBMEIsc0RBQXNELEdBQUcsYUFBYSxrQ0FBa0MsR0FBRyxVQUFVLHlDQUF5QyxxQkFBcUIsZ0ZBQWdGLEdBQUcsZ0JBQWdCLHFDQUFxQyxzQ0FBc0Msc0JBQXNCLDBDQUEwQyxrREFBa0QseUZBQXlGLDRCQUE0QixrQkFBa0IsdUJBQXVCLEdBQUcsc0NBQXNDLHNDQUFzQyxzREFBc0QsNkNBQTZDLG9DQUFvQywyREFBMkQsOERBQThELHFEQUFxRCxHQUFHLFdBQVcsd0JBQXdCLDZCQUE2Qix1RUFBdUUsc0JBQXNCLGlDQUFpQyxvQkFBb0IsR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQixjQUFjLHNFQUFzRSxxQkFBcUIsR0FBRyxZQUFZLHNCQUFzQixHQUFHLGdCQUFnQix3QkFBd0IsR0FBRyxrQ0FBa0Msa0JBQWtCLDJCQUEyQiw0QkFBNEIsaUNBQWlDLEdBQUcsd0RBQXdELG9CQUFvQixHQUFHLGlKQUFpSiwyQkFBMkIsMkJBQTJCLHNCQUFzQixrQkFBa0IsR0FBRyxvQkFBb0IscUJBQXFCLHNCQUFzQixxQkFBcUIsdUJBQXVCLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0IsbUNBQW1DLHdCQUF3QixHQUFHLHlCQUF5QixtQkFBbUIsZ0JBQWdCLEdBQUcsd0JBQXdCLHNCQUFzQix1RUFBdUUsMkJBQTJCLEdBQUcseURBQXlELGlDQUFpQyxHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyx1REFBdUQsc0NBQXNDLHVEQUF1RCxlQUFlLHVCQUF1QixHQUFHLG9CQUFvQixzQkFBc0IsMkRBQTJELHFCQUFxQix3QkFBd0IsR0FBRyxzQkFBc0Isc0NBQXNDLHFCQUFxQixrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLFdBQVcsc0JBQXNCLHdCQUF3Qix1QkFBdUIsbUVBQW1FLHVCQUF1Qix5Q0FBeUMsa0JBQWtCLHdCQUF3Qix3QkFBd0IsbUNBQW1DLDJCQUEyQiwrQ0FBK0MsR0FBRyx5QkFBeUIsMENBQTBDLEdBQUcsMkJBQTJCLDZDQUE2QyxHQUFHLHdCQUF3Qiw4Q0FBOEMsR0FBRyw4QkFBOEIsa0JBQWtCLHdCQUF3QixHQUFHLHlDQUF5QyxxQkFBcUIsa0JBQWtCLHdCQUF3QixtQkFBbUIsb0JBQW9CLHVDQUF1Qyx1QkFBdUIsMEJBQTBCLGtDQUFrQyxrQkFBa0IsMEJBQTBCLEdBQUcsaURBQWlELDhCQUE4QixHQUFHLCtEQUErRCx1Q0FBdUMsMkJBQTJCLEdBQUcsaUJBQWlCLGNBQWMsR0FBRyx3QkFBd0Isb0JBQW9CLDJCQUEyQiw0Q0FBNEMsc0JBQXNCLHVCQUF1QixpQkFBaUIsR0FBRyx5REFBeUQsNENBQTRDLEdBQUcscURBQXFELHVFQUF1RSxvQkFBb0IsMkJBQTJCLHNCQUFzQixrQkFBa0IsR0FBRyxtSEFBbUgsMkJBQTJCLEdBQUcsME1BQTBNLGlDQUFpQyxHQUFHLGdOQUFnTiw4QkFBOEIsR0FBRyx1Q0FBdUMsc0JBQXNCLGdCQUFnQix1QkFBdUIsR0FBRyxtR0FBbUcsaUJBQWlCLEdBQUcsb0JBQW9CLDRDQUE0QyxpQ0FBaUMsR0FBRyx5RUFBeUUsNENBQTRDLEdBQUcsc0JBQXNCLHlDQUF5Qyw4QkFBOEIsR0FBRywrRUFBK0UseUNBQXlDLEdBQUcsc0JBQXNCLGtCQUFrQiwwQ0FBMEMsMEJBQTBCLGlCQUFpQixHQUFHLGlDQUFpQyxrQkFBa0IsMkJBQTJCLDBCQUEwQixpQkFBaUIsR0FBRyxXQUFXLHVCQUF1QixnQkFBZ0Isd0JBQXdCLDJDQUEyQyx1QkFBdUIsZ01BQWdNLGtCQUFrQixrQkFBa0Isd0JBQXdCLDJCQUEyQiw0QkFBNEIsY0FBYyxHQUFHLHFCQUFxQixrQkFBa0IsR0FBRyxpQkFBaUIsbUJBQW1CLHFCQUFxQixHQUFHLG1CQUFtQixzQkFBc0IsMkJBQTJCLGlCQUFpQiw4QkFBOEIsR0FBRyxzQkFBc0IsdUJBQXVCLFdBQVcsYUFBYSxpQkFBaUIsNEJBQTRCLEdBQUcsbURBQW1ELDhCQUE4QixHQUFHLCtHQUErRywwQkFBMEIsR0FBRyxjQUFjLHVCQUF1QixhQUFhLGNBQWMsaUJBQWlCLGdCQUFnQixpQkFBaUIsd0JBQXdCLGlEQUFpRCwyQ0FBMkMsNEJBQTRCLEdBQUcsdURBQXVELDJCQUEyQiw0QkFBNEIsR0FBRyx5Q0FBeUMsMkJBQTJCLG9CQUFvQixxQkFBcUIsR0FBRywyRkFBMkYsMkJBQTJCLDBCQUEwQixpQ0FBaUMsR0FBRyw2Q0FBNkMsdUJBQXVCLGFBQWEsY0FBYyxlQUFlLHFDQUFxQyxvQ0FBb0MscUNBQXFDLGtEQUFrRCw0QkFBNEIseUNBQXlDLHlGQUF5RixHQUFHLG1CQUFtQix1QkFBdUIsa0NBQWtDLG1EQUFtRCxzREFBc0QsNkRBQTZELDREQUE0RCxnQ0FBZ0Msa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsaURBQWlELHVCQUF1QixXQUFXLGFBQWEsaUJBQWlCLG9CQUFvQixHQUFHLCtFQUErRSw4QkFBOEIsMEJBQTBCLEdBQUcsa0JBQWtCLHNCQUFzQiwyREFBMkQsMkJBQTJCLHVCQUF1QixHQUFHLGdCQUFnQixrQkFBa0IsY0FBYyxHQUFHLGlCQUFpQixrQkFBa0Isb0JBQW9CLHNCQUFzQiwyREFBMkQsR0FBRyx1QkFBdUIsa0JBQWtCLGdEQUFnRCxHQUFHLHlCQUF5QixxQkFBcUIsR0FBRyw0QkFBNEIsa0NBQWtDLGdEQUFnRCxHQUFHLHVDQUF1QyxrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyxzQkFBc0IscUJBQXFCLHFDQUFxQyxHQUFHLGdEQUFnRCwyREFBMkQsdUJBQXVCLGlDQUFpQyx1QkFBdUIseUJBQXlCLHNEQUFzRCxHQUFHLGNBQWMscUJBQXFCLHVCQUF1QixrQkFBa0IsR0FBRyxrQ0FBa0Msa0NBQWtDLEdBQUcsMENBQTBDLGlCQUFpQiwyQkFBMkIsR0FBRyw4Q0FBOEMsbUJBQW1CLHNCQUFzQixxQkFBcUIsR0FBRyxpQkFBaUIsdUJBQXVCLGNBQWMsY0FBYyxnQ0FBZ0Msd0JBQXdCLHVCQUF1Qiw0Q0FBNEMsdUJBQXVCLDRCQUE0QixpQ0FBaUMscUJBQXFCLEdBQUcsZ0VBQWdFLDRDQUE0QyxrQkFBa0IsaUJBQWlCLEdBQUcsOERBQThELGlCQUFpQixHQUFHLDhGQUE4RiwyQkFBMkIsdUJBQXVCLEdBQUcsMEVBQTBFLGtCQUFrQixHQUFHLDREQUE0RCx1QkFBdUIsaUJBQWlCLGdCQUFnQixlQUFlLGVBQWUsY0FBYyxlQUFlLEdBQUcsNERBQTRELHNCQUFzQix1QkFBdUIsNEJBQTRCLHFCQUFxQixvQkFBb0IscUJBQXFCLDJEQUEyRCw0Q0FBNEMsR0FBRyxzRkFBc0Ysa0NBQWtDLCtCQUErQixHQUFHLDRGQUE0RixpQ0FBaUMsK0JBQStCLEdBQUcsd0ZBQXdGLDhCQUE4QiwrQkFBK0IsR0FBRyw0RkFBNEYsaUJBQWlCLEdBQUcsd0hBQXdILHlDQUF5QyxxQ0FBcUMsR0FBRyw0SEFBNEgsNENBQTRDLHdDQUF3QyxHQUFHLHNIQUFzSCw2Q0FBNkMseUNBQXlDLEdBQUcsbU1BQW1NLDRCQUE0QixpQkFBaUIsR0FBRyw0SEFBNEgscUJBQXFCLEdBQUcsK05BQStOLGtDQUFrQyxHQUFHLHlCQUF5QixxQkFBcUIsc0JBQXNCLEdBQUcsc0JBQXNCLGlCQUFpQixHQUFHLHdCQUF3QixxQkFBcUIsc0JBQXNCLEdBQUcsMEdBQTBHLHVCQUF1QixHQUFHLG1FQUFtRSwyQkFBMkIsR0FBRyw4REFBOEQsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsY0FBYyxxQkFBcUIsR0FBRyxzRkFBc0YsdUJBQXVCLG9CQUFvQixHQUFHLHNGQUFzRiw4QkFBOEIsR0FBRyx5S0FBeUssdUJBQXVCLHFCQUFxQiw0QkFBNEIsdUJBQXVCLHNCQUFzQixjQUFjLFlBQVkscUJBQXFCLG1DQUFtQyxHQUFHLGlNQUFpTSw0Q0FBNEMsR0FBRyxpTUFBaU0seUNBQXlDLHFDQUFxQyxpQkFBaUIsR0FBRyx5QkFBeUIsa0JBQWtCLDJCQUEyQixrQkFBa0IsR0FBRywwQkFBMEIsa0JBQWtCLG1CQUFtQix1QkFBdUIsR0FBRyw0Q0FBNEMsd0JBQXdCLG9DQUFvQyxrQkFBa0Isa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcseUJBQXlCLHNCQUFzQixHQUFHLDJCQUEyQix1QkFBdUIsMkJBQTJCLHdCQUF3QixHQUFHLHFHQUFxRyx1QkFBdUIsR0FBRyw0QkFBNEIsbUJBQW1CLGtCQUFrQixjQUFjLEdBQUcsNkNBQTZDLHVCQUF1Qix1QkFBdUIsNEJBQTRCLHNCQUFzQixnQkFBZ0IsdUJBQXVCLHFCQUFxQixHQUFHLCtHQUErRyxpQkFBaUIsR0FBRyx1QkFBdUIsaUNBQWlDLHdDQUF3QyxHQUFHLHVEQUF1RCw0Q0FBNEMsR0FBRyx5QkFBeUIsOEJBQThCLHFDQUFxQyxHQUFHLDJEQUEyRCx5Q0FBeUMsR0FBRyw2QkFBNkIsdUJBQXVCLGNBQWMsaUJBQWlCLGdCQUFnQix1QkFBdUIsa0JBQWtCLG1CQUFtQixHQUFHLGdCQUFnQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGdCQUFnQixxR0FBcUcsc0JBQXNCLHVCQUF1QixzQkFBc0IsR0FBRyw0Q0FBNEMsMEJBQTBCLG1CQUFtQixHQUFHLDRCQUE0QixrQkFBa0IsR0FBRyxjQUFjLDBDQUEwQyxrQkFBa0IsaUJBQWlCLHVCQUF1QixXQUFXLFlBQVksR0FBRyxrRUFBa0UsWUFBWSx5QkFBeUIsS0FBSyxHQUFHLDBDQUEwQyxnQkFBZ0IsbUJBQW1CLG1CQUFtQixnQkFBZ0IsS0FBSyx1RUFBdUUsb0JBQW9CLEtBQUssR0FBRywwQ0FBMEMsZ0JBQWdCLDZCQUE2Qix3QkFBd0IsS0FBSyxnQkFBZ0Isa0JBQWtCLEtBQUssYUFBYSwwQkFBMEIsc0JBQXNCLEtBQUssb0JBQW9CLDBCQUEwQixLQUFLLGlDQUFpQyxvQkFBb0IsS0FBSyxvQ0FBb0MsMEJBQTBCLEtBQUssa0JBQWtCLHlCQUF5QixLQUFLLHNCQUFzQixvQkFBb0IsS0FBSyxtQkFBbUIseUJBQXlCLEtBQUssMEJBQTBCLGtCQUFrQixtQkFBbUIsS0FBSyxnQkFBZ0Isc0JBQXNCLG1CQUFtQixtREFBbUQsS0FBSyxpQ0FBaUMsa0JBQWtCLHVDQUF1QyxzQkFBc0IsZ0JBQWdCLGlCQUFpQixzQkFBc0IsZ0JBQWdCLEtBQUssOEJBQThCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLEtBQUsseUJBQXlCLGlCQUFpQixLQUFLLHdCQUF3QixpQ0FBaUMsS0FBSyxHQUFHLDBDQUEwQyw0RUFBNEUsNkJBQTZCLGdCQUFnQixLQUFLLEdBQUcsMENBQTBDLG9FQUFvRSxvQkFBb0IsNkJBQTZCLEtBQUssZ0VBQWdFLHNCQUFzQixLQUFLLEdBQUcsU0FBUyx1RkFBdUYsa0JBQWtCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxRQUFRLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxhQUFhLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sUUFBUSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksWUFBWSxXQUFXLE1BQU0sVUFBVSxZQUFZLE9BQU8sWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFNBQVMsWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLE9BQU8sUUFBUSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxRQUFRLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksV0FBVyxPQUFPLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlB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QUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFD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Q1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdExtQztBQUNnQjtBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ007QUFDVztBQUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUscUJBQXFCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RVg7O0FBRTFCLHVCQUF1Qiw2Q0FBSTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixLQUFLOztBQUVyQjs7QUFFQSxrQkFBa0IsWUFBWTtBQUM5QixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixLQUFLOztBQUVyQjtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGNBQWMsYUFBYSxRQUFROztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLElBQUksV0FBVztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRnV0dXJlL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2FkZE5vdGVWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvYWRkUHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9hZGRUYXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2VkaXRQcm9qZWN0Vmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2VkaXRUYXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL21vZGFsVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL25vdGVWaWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvcHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9zaWRlYmFyVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3Rhc2tEZXRhaWxzVmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3Rhc2tWaWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcHJldHRpZXItaWdub3JlICovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbmJvcmRlcjogMDtcXG5mb250LXNpemU6IDEwMCU7XFxuZm9udDogaW5oZXJpdDtcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuKiB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1wdXJwbGUtMTogIzhlNWY5NTtcXG4gIC0tY29sb3ItcHVycGxlLTI6ICM1ZjQwNjQ7XFxuICAtLWNvbG9yLXB1cnBsZS0zOiAjMmQxZTJmO1xcbiAgLS1jb2xvci1yZWQtMTogI2ZhN2E3NTtcXG4gIC0tY29sb3ItcmVkLTI6ICNmOTU0NGU7XFxuICAtLWNvbG9yLXJlZC0zOiAjZjcyYzI1O1xcbiAgLS1jb2xvci1yZWQtNDogI2VjMTAwOTtcXG4gIC0tY29sb3ItcmVkLTU6ICM5ZDBiMDY7XFxuICAtLWNvbG9yLXllbGxvdy0xOiAjZmJkNTg5O1xcbiAgLS1jb2xvci15ZWxsb3ctMjogI2Y5Yzc2MjtcXG4gIC0tY29sb3IteWVsbG93LTM6ICNmN2IzMmI7XFxuICAtLWNvbG9yLXllbGxvdy00OiAjZTc5YzA2O1xcbiAgLS1jb2xvci15ZWxsb3ctNTogIzlkNmIwNjtcXG4gIC0tY29sb3ItYmxvbmQtMTogI2ZjZjZiMTtcXG4gIC0tY29sb3ItYmxvbmQtMjogI2Y4ZTgzYTtcXG4gIC0tY29sb3ItYmxvbmQtMzogIzYyNWIwNDtcXG4gIC0tY29sb3Itc2VhZm9hbS0wOiAjZWZmYWYyO1xcbiAgLS1jb2xvci1zZWFmb2FtLTE6ICNkMGYxZDk7XFxuICAtLWNvbG9yLXNlYWZvYW0tMjogI2E5ZTViYjtcXG4gIC0tY29sb3Itc2VhZm9hbS0zOiAjODFkOTljO1xcbiAgLS1jb2xvci1zZWFmb2FtLTQ6ICM2MmQwODM7XFxuICAtLWNvbG9yLXNlYWZvYW0tNTogIzQzYzc2YTtcXG4gIC0tY29sb3Itc2VhZm9hbS02OiAjMWM1ZTMwO1xcblxcbiAgLS1jb250YWluZXItcGFkZGluZzogMzBweDtcXG4gIC0tY29udGFpbmVyLW1hcmdpbjogMTVweDtcXG4gIC0tY29udGFpbmVyLWJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAtLXNpZGViYXItZ2FwOiAxOHB4O1xcbiAgLS1ub3Rlcy1nYXA6IDE1cHg7XFxuICAtLW1vZGFsLXBhZGRpbmc6IDMwcHg7XFxuICAtLW91dGxpbmUtZm9jdXM6IDFweCBzb2xpZCByZ2JhKDc3LCA3NywgMjI4LCAwLjgpO1xcbn1cXG5cXG4qOmZvY3VzIHtcXG4gIG91dGxpbmU6IHZhcigtLW91dGxpbmUtZm9jdXMpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI1NSwgMjQyKTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IGNsYW1wKDQ1MHB4LCA5MCUsIDEwMDBweCk7XFxuICBoZWlnaHQ6IGNsYW1wKDY4MHB4LCA4MHZoLCA3MjBweCk7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE5cHggMzhweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTVweCAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBTSURFQkFSIFNUWUxFUyAqL1xcblxcbi5zaWRlYmFyIHtcXG4gIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lci1wYWRkaW5nKTtcXG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tY29udGFpbmVyLXBhZGRpbmcpIC8gMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWFmb2FtLTEpO1xcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCAzMCUsIDM1MHB4KTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IDVweCAwcHggMTJweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIHRyYW5zZm9ybTogc2tld1goLTEwZGVnKTtcXG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS0yKTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnNpZGViYXItbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0MHB4O1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JywgJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZW1vamkge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi50YXNrcy1hbGwge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm5hdi0tdGFza3MsXFxuLm5hdi0tcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLXNpZGViYXItZ2FwKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtMyk7XFxufVxcblxcbi5uYXYtLXRhc2tzID4gKixcXG4ubmF2LS1wcm9qZWN0cyA+ICosXFxuLm5hdi0tbm90ZXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LS10YXNrcyA+ICo6aG92ZXIsXFxuLm5hdi0tcHJvamVjdHMgPiAqOmhvdmVyLFxcbi5uYXYtLW5vdGVzOmhvdmVyLFxcbi5uYXYtLXRhc2tzID4gKjpmb2N1cyxcXG4ubmF2LS1wcm9qZWN0cyA+ICo6Zm9jdXMsXFxuLm5hdi0tbm90ZXM6Zm9jdXMge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5uYXYtLXByb2plY3RzIHtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubmF2LS1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LS1wcm9qZWN0LXRpdGxlIHtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5lZGl0LXByb2plY3QtaWNvbiB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnRklMTCcgMSwgJ3dnaHQnIDQwMCwgJ0dSQUQnIDAsICdvcHN6JyA0ODtcXG4gIGNvbG9yOiByZ2IoOTUsIDk1LCA5NSk7XFxufVxcblxcbi5lZGl0LXByb2plY3QtaWNvbjpob3ZlcixcXG4uZWRpdC1wcm9qZWN0LWljb246Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy00KTtcXG59XFxuXFxuLm5hdi0tbm90ZXMge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLyogTUFJTiBDT05UQUlORVIgU1RZTEVTICovXFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lci1wYWRkaW5nKTtcXG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jb250YWluZXItcGFkZGluZykgKyA1cHgpO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNvbnRlbnQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmNvbnRlbnQtZGlzcGxheSB7XFxuICBoZWlnaHQ6IGNsYW1wKDEwMHB4LCA5MCUsIDEwMDBweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBwYWRkaW5nOiAxMnB4IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQ7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDNweCA4cHg7XFxufVxcblxcbi50YXNrLnByaW9yaXR5LWhpZ2gge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWNvbG9yLXJlZC00KTtcXG59XFxuXFxuLnRhc2sucHJpb3JpdHktbWVkaXVtIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctNCk7XFxufVxcblxcbi50YXNrLnByaW9yaXR5LWxvdyB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tY29sb3Itc2VhZm9hbS02KTtcXG59XFxuXFxuLnRhc2stbGVmdCxcXG4udGFzay1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stbGVmdCA+IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgd2lkdGg6IDEuMTVyZW07XFxuICBoZWlnaHQ6IDEuMTVyZW07XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDE1cHggMCAxMnB4O1xcbiAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1sZWZ0ID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDVlMzU7XFxufVxcblxcbi50YXNrLWxlZnQgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyAudGFzay10aXRsZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IHJnYig5NywgOTcsIDk3KTtcXG59XFxuXFxuLnRhc2stcmlnaHQge1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWljb24ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS0xKTtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWljb246aG92ZXIsXFxuLnRhc2stZGV0YWlscy1pY29uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS0yKTtcXG59XFxuXFxuLnRhc2stZGlzcGxheS1pY29uID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdGSUxMJyAxLCAnd2dodCcgNDAwLCAnR1JBRCcgMCwgJ29wc3onIDQ4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luOiAwIDJweDtcXG59XFxuXFxuLnRhc2stZGlzcGxheS1pY29uID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIsXFxuLnRhc2stZGlzcGxheS1pY29uID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6Zm9jdXMge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnRhc2stZGlzcGxheS1pY29uLnRhc2stZWRpdCA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmhvdmVyLFxcbi50YXNrLWRpc3BsYXktaWNvbi50YXNrLWVkaXQgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpmb2N1cyxcXG4udGFzay1kaXNwbGF5LWljb24udGFzay1lZGl0ID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6YWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctNCk7XFxufVxcblxcbi50YXNrLWRpc3BsYXktaWNvbi50YXNrLWRlbGV0ZSA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmhvdmVyLFxcbi50YXNrLWRpc3BsYXktaWNvbi50YXNrLWRlbGV0ZSA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmZvY3VzLFxcbi50YXNrLWRpc3BsYXktaWNvbi50YXNrLWRlbGV0ZSA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcmVkLTUpO1xcbn1cXG5cXG4uYnRuLWVkaXQtdGFzayxcXG4uYnRuLWRlbGV0ZS10YXNrIHtcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgd2lkdGg6IDcwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5idG4tZWRpdC10YXNrOmhvdmVyLFxcbi5idG4tZWRpdC10YXNrOmZvY3VzLFxcbi5idG4tZGVsZXRlLXRhc2s6aG92ZXIsXFxuLmJ0bi1kZWxldGUtdGFzazpmb2N1cyB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5idG4tZWRpdC10YXNrIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXllbGxvdy00KTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctNSk7XFxufVxcblxcbi5idG4tZWRpdC10YXNrOmhvdmVyLFxcbi5idG4tZWRpdC10YXNrOmFjdGl2ZSxcXG4uYnRuLWVkaXQtdGFzazpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctNCk7XFxufVxcblxcbi5idG4tZGVsZXRlLXRhc2sge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcmVkLTQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZC00KTtcXG59XFxuXFxuLmJ0bi1kZWxldGUtdGFzazpob3ZlcixcXG4uYnRuLWRlbGV0ZS10YXNrOmFjdGl2ZSxcXG4uYnRuLWRlbGV0ZS10YXNrOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZC00KTtcXG59XFxuXFxuLm5vdGVzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdhcDogdmFyKC0tbm90ZXMtZ2FwKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5vdGVzLWNvbC0xLFxcbi5ub3Rlcy1jb2wtMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tbm90ZXMtZ2FwKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5vdGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE3NSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDQpIDBweCAxcHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDQpIDBweCAycHggMnB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMDIpIDBweCA0cHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDQpIDBweCA4cHggOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMDQpIDBweCAxNnB4IDE2cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5ub3RlID4gKjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubm90ZS10aXRsZSB7XFxuICBtYXgtd2lkdGg6IDg1JTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5ub3RlLWRldGFpbHMge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmJ0bi1kZWxldGUtbm90ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYnRuLWRlbGV0ZS1ub3RlID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZC01KTtcXG59XFxuXFxuLmJ0bi1kZWxldGUtbm90ZSA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmhvdmVyLFxcbi5idG4tZGVsZXRlLW5vdGUgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpmb2N1cyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5idG4tYWRkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgb3V0bGluZTogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibG9uZC0yKTtcXG4gIHRyYW5zaXRpb246IDAuMXMgbGluZWFyO1xcbn1cXG5cXG4uYnRuLWFkZDpob3ZlcixcXG4uYnRuLWFkZDphY3RpdmUsXFxuLmJ0bi1hZGQ6Zm9jdXMge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbn1cXG5cXG4uYnRuLWFkZCAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBjb2xvcjogcmdiKDcwLCA3MCwgNzApO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmJ0bi1hZGQgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIsXFxuLmJ0bi1hZGQgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6Zm9jdXMge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtMyk7XFxufVxcblxcbi8qICBNT0RBTCAqL1xcblxcbi5tb2RhbCxcXG4ubW9kYWwtZGV0YWlscyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiBjbGFtcCgxMjBweCwgODUlLCA2MDBweCk7XFxuICBoZWlnaHQ6IGNsYW1wKDEyMHB4LCA5MCUsIDgwMHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggMTVweCAyNXB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA1cHggMTBweDtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiB2YXIoLS1tb2RhbC1wYWRkaW5nKTtcXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW1vZGFsLXBhZGRpbmcpIC8gMik7XFxuICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQzMik7ICovXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tY29udGFpbmVyLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1YTZlMjYzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5idG4tY2xvc2UtbW9kYWwsXFxuLmJ0bi1jbG9zZS1tb2RhbC1kZXRhaWxzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uYnRuLWNsb3NlLW1vZGFsOmhvdmVyLFxcbi5idG4tY2xvc2UtbW9kYWw6YWN0aXZlLFxcbi5idG4tY2xvc2UtbW9kYWw6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZC01KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLm1vZGFsLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYig2NSwgNjUsIDY1KTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLm1vZGFsLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubW9kYWwtbGluayB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbC1saW5rOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubW9kYWwtbGluay0tYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tb2RhbC1jb250ZW50LXdyYXBwZXIge1xcbiAgcGFkZGluZzogdmFyKC0tbW9kYWwtcGFkZGluZyk7XFxuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1tb2RhbC1wYWRkaW5nKSAvIDIpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCxcXG4uZWRpdC10YXNrLS1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZWRpdC10YXNrLS1mb3JtIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBoZWlnaHQ6IGNsYW1wKDEyMHB4LCA5MCUsIDgwMHB4KTtcXG59XFxuXFxuLmVkaXQtdGFzay0taGVhZGVyLFxcbi5lZGl0LXByb2plY3QtLWhlYWRlciB7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHVycGxlLTIpO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogdmFyKC0tb3V0bGluZS1mb2N1cyk7XFxufVxcblxcbiNuZXctdGFzay0tdGl0bGUsXFxuI2VkaXQtdGFzay0tdGl0bGUge1xcbiAgcmVzaXplOiBub25lO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI25ldy10YXNrLS1kZXRhaWxzLFxcbiNlZGl0LXRhc2stLWRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtaGVpZ2h0OiAxODBweDtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5idG4tc3VibWl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wdXJwbGUtMSk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtMSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYnRuLXN1Ym1pdDpob3ZlcixcXG4uYnRuLXN1Ym1pdDphY3RpdmUsXFxuLmJ0bi1zdWJtaXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHVycGxlLTEpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZGl2Lm5ldy10YXNrLS1mb3JtLWVsZW1lbnQsXFxuZGl2LmVkaXQtdGFzay0tZm9ybS1lbGVtZW50IHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuZGl2Lm5ldy10YXNrLS1mb3JtLWVsZW1lbnQgPiAqOmZpcnN0LWNoaWxkLFxcbmRpdi5lZGl0LXRhc2stLWZvcm0tZWxlbWVudCA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLm5ldy10YXNrLS10YXNrLXByaW9yaXR5LXdyYXBwZXIsXFxuLmVkaXQtdGFzay0tdGFzay1wcmlvcml0eS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5uZXctdGFzay0tcHJpb3JpdHktaW5wdXQsXFxuLmVkaXQtdGFzay0tcHJpb3JpdHktaW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMi4ycmVtO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICB3aWR0aDogMXB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5uZXctdGFzay0tcHJpb3JpdHktbGFiZWwsXFxuLmVkaXQtdGFzay0tcHJpb3JpdHktbGFiZWwge1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIG1hcmdpbjogMCAwLjEgZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDIwMG1zO1xcbn1cXG5cXG4ubmV3LXRhc2stLXByaW9yaXR5LWxhYmVsLnByaW9yaXR5LWxvdyxcXG4uZWRpdC10YXNrLS1wcmlvcml0eS1sYWJlbC5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlYWZvYW0tNik7XFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLm5ldy10YXNrLS1wcmlvcml0eS1sYWJlbC5wcmlvcml0eS1tZWRpdW0sXFxuLmVkaXQtdGFzay0tcHJpb3JpdHktbGFiZWwucHJpb3JpdHktbWVkaXVtIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctNSk7XFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLm5ldy10YXNrLS1wcmlvcml0eS1sYWJlbC5wcmlvcml0eS1oaWdoLFxcbi5lZGl0LXRhc2stLXByaW9yaXR5LWxhYmVsLnByaW9yaXR5LWhpZ2gge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZC01KTtcXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG4ubmV3LXRhc2stLXByaW9yaXR5LWxhYmVsLnByaW9yaXR5LWFjdGl2ZSxcXG4uZWRpdC10YXNrLS1wcmlvcml0eS1sYWJlbC5wcmlvcml0eS1hY3RpdmUge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmV3LXRhc2stLXByaW9yaXR5LWxhYmVsLnByaW9yaXR5LWhpZ2gucHJpb3JpdHktYWN0aXZlLFxcbi5lZGl0LXRhc2stLXByaW9yaXR5LWxhYmVsLnByaW9yaXR5LWhpZ2gucHJpb3JpdHktYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZC01KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmVkLTUpO1xcbn1cXG5cXG4ubmV3LXRhc2stLXByaW9yaXR5LWxhYmVsLnByaW9yaXR5LW1lZGl1bS5wcmlvcml0eS1hY3RpdmUsXFxuLmVkaXQtdGFzay0tcHJpb3JpdHktbGFiZWwucHJpb3JpdHktbWVkaXVtLnByaW9yaXR5LWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctNCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy00KTtcXG59XFxuXFxuLm5ldy10YXNrLS1wcmlvcml0eS1sYWJlbC5wcmlvcml0eS1sb3cucHJpb3JpdHktYWN0aXZlLFxcbi5lZGl0LXRhc2stLXByaW9yaXR5LWxhYmVsLnByaW9yaXR5LWxvdy5wcmlvcml0eS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2VhZm9hbS02KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3Itc2VhZm9hbS02KTtcXG59XFxuXFxuLm5ldy10YXNrLS10YXNrLXByaW9yaXR5LXdyYXBwZXIsXFxuI25ldy10YXNrLS1kYXRlLFxcbiNuZXctdGFzay0tcHJvamVjdCxcXG4jbmV3LXRhc2stLXN0YXR1cyxcXG4uZWRpdC10YXNrLS10YXNrLXByaW9yaXR5LXdyYXBwZXIsXFxuI2VkaXQtdGFzay0tZGF0ZSxcXG4jZWRpdC10YXNrLS1wcm9qZWN0LFxcbiNlZGl0LXRhc2stLXN0YXR1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI25ldy10YXNrLS1kYXRlLFxcbiNuZXctdGFzay0tcHJvamVjdCxcXG4jbmV3LXRhc2stLXN0YXR1cyxcXG4jZWRpdC10YXNrLS1kYXRlLFxcbiNlZGl0LXRhc2stLXByb2plY3QsXFxuI2VkaXQtdGFzay0tc3RhdHVzIHtcXG4gIG1heC13aWR0aDogMTUwcHg7XFxufVxcblxcbiNuZXctdGFzay0tcHJvamVjdDpmb2N1cyxcXG4jbmV3LXRhc2stLXByb2plY3Q6YWN0aXZlLFxcbiNuZXctdGFzay0tc3RhdHVzOmZvY3VzLFxcbiNuZXctdGFzay0tc3RhdHVzOmFjdGl2ZSxcXG4jZWRpdC10YXNrLS1wcm9qZWN0OmZvY3VzLFxcbiNlZGl0LXRhc2stLXByb2plY3Q6YWN0aXZlLFxcbiNlZGl0LXRhc2stLXN0YXR1czpmb2N1cyxcXG4jZWRpdC10YXNrLS1zdGF0dXM6YWN0aXZlIHtcXG4gIG91dGxpbmU6IHZhcigtLW91dGxpbmUtZm9jdXMpO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtLXRpdGxlIHtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBtYXgtaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI25ldy1ub3RlLS10aXRsZSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbiNuZXctbm90ZS0tZGV0YWlscyB7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxufVxcblxcbiNuZXctdGFzay0tdGl0bGUsXFxuI2VkaXQtdGFzay0tdGl0bGUsXFxuI25ldy1wcm9qZWN0LS10aXRsZSxcXG4jbmV3LW5vdGUtLXRpdGxlLFxcbiNlZGl0LXByb2plY3QtLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcXG59XFxuXFxuI25ldy10YXNrLS1kZXRhaWxzLFxcbiNlZGl0LXRhc2stLWRldGFpbHMsXFxuI25ldy1ub3RlLS1kZXRhaWxzIHtcXG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxufVxcblxcbi5lZGl0LXRhc2stLWJ0bi1jb250YWluZXIsXFxuLmVkaXQtcHJvamVjdC0tYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmVkaXQtdGFzay0tYnRuLWNvbnRhaW5lciAuYnRuLXN1Ym1pdCxcXG4uZWRpdC1wcm9qZWN0LS1idG4tY29udGFpbmVyIC5idG4tc3VibWl0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLmVkaXQtdGFzay0tYnRuLWNvbnRhaW5lciAuYnRuLWRlbGV0ZSxcXG4uZWRpdC1wcm9qZWN0LS1idG4tY29udGFpbmVyIC5idG4tZGVsZXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQtNCk7XFxufVxcblxcbi5lZGl0LXRhc2stLWJ0bi1jb250YWluZXIgLmJ0bi1zdWJtaXQsXFxuLmVkaXQtdGFzay0tYnRuLWNvbnRhaW5lciAuYnRuLWRlbGV0ZSxcXG4uZWRpdC1wcm9qZWN0LS1idG4tY29udGFpbmVyIC5idG4tc3VibWl0LFxcbi5lZGl0LXByb2plY3QtLWJ0bi1jb250YWluZXIgLmJ0bi1kZWxldGUge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHdpZHRoOiBjbGFtcCg1MHB4LCAzMCUsIDIwMHB4KTtcXG59XFxuXFxuLmVkaXQtdGFzay0tYnRuLWNvbnRhaW5lciAuYnRuLXN1Ym1pdDpob3ZlcixcXG4uZWRpdC10YXNrLS1idG4tY29udGFpbmVyIC5idG4tc3VibWl0OmZvY3VzLFxcbi5lZGl0LXByb2plY3QtLWJ0bi1jb250YWluZXIgLmJ0bi1zdWJtaXQ6aG92ZXIsXFxuLmVkaXQtcHJvamVjdC0tYnRuLWNvbnRhaW5lciAuYnRuLXN1Ym1pdDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtMSk7XFxufVxcblxcbi5lZGl0LXRhc2stLWJ0bi1jb250YWluZXIgLmJ0bi1kZWxldGU6aG92ZXIsXFxuLmVkaXQtdGFzay0tYnRuLWNvbnRhaW5lciAuYnRuLWRlbGV0ZTpmb2N1cyxcXG4uZWRpdC1wcm9qZWN0LS1idG4tY29udGFpbmVyIC5idG4tZGVsZXRlOmhvdmVyLFxcbi5lZGl0LXByb2plY3QtLWJ0bi1jb250YWluZXIgLmJ0bi1kZWxldGU6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkLTQpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQtNCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5lZGl0LXByb2plY3QtLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG4jZWRpdC1wcm9qZWN0LS10aXRsZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAxNXB4IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qICBNT0RBTCBERVRBSUxTICovXFxuXFxuLm1vZGFsLWRldGFpbHMge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgNzAlLCA1MDBweCk7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5kZXRhaWwtLXRhc2stdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5kZXRhaWwtLXRhc2stZGV0YWlscyB7XFxuICBmb250LXNpemU6IDAuOTVyZW07XFxuICBjb2xvcjogcmdiKDc3LCA3NywgNzcpO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLmRldGFpbC0tdGFzay1kYXRlLFxcbi5kZXRhaWwtLXRhc2stcHJpb3JpdHksXFxuLmRldGFpbC0tdGFzay1zdGF0dXMsXFxuLmRldGFpbC0tdGFzay1wcm9qZWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xcbn1cXG5cXG4uZGV0YWlsLS1idG4tY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmRldGFpbC0tYnRuLWVkaXQsXFxuLmRldGFpbC0tYnRuLWRlbGV0ZSB7XFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgd2lkdGg6IDgwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZGV0YWlsLS1idG4tZWRpdDpob3ZlcixcXG4uZGV0YWlsLS1idG4tZWRpdDpmb2N1cyxcXG4uZGV0YWlsLS1idG4tZGVsZXRlOmhvdmVyLFxcbi5kZXRhaWwtLWJ0bi1kZWxldGU6Zm9jdXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGV0YWlsLS1idG4tZWRpdCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3IteWVsbG93LTQpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctNCk7XFxufVxcblxcbi5kZXRhaWwtLWJ0bi1lZGl0OmhvdmVyLFxcbi5kZXRhaWwtLWJ0bi1lZGl0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy00KTtcXG59XFxuXFxuLmRldGFpbC0tYnRuLWRlbGV0ZSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcmVkLTUpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQtNSk7XFxufVxcblxcbi5kZXRhaWwtLWJ0bi1kZWxldGU6aG92ZXIsXFxuLmRldGFpbC0tYnRuLWRlbGV0ZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQtNSk7XFxufVxcblxcbi8qICBGT09URVIgKi9cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAyLjRyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY29sb3I6ICM1ZTY3YTM7XFxufVxcbi5mb290ZXItbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyLWRlc2Mge1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgJywgJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLFxcbiAgICAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcbi5mb290ZXItbGluazpsaW5rLFxcbi5mb290ZXItbGluazp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjNDI0ODcwO1xcbn1cXG5cXG4vKiBIRUxQRVJTICovXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAyMDB2dztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi8qIE1FRElBIFFVRVJJRVMgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcXG4gIGZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLnRhc2stZGlzcGxheS1pY29uLnRhc2stZGVsZXRlLFxcbiAgLnRhc2stZGlzcGxheS1pY29uLnRhc2stZWRpdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmxvZ28ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAuc2lkZWJhci1uYXYge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLm5hdi10YXNrOm5vdCgudGFza3MtYWxsKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc2lkZWJhci1uYXYsXFxuICAubmF2LS10YXNrcyB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxuXFxuICAudGFza3MtYWxsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgfVxcblxcbiAgLm5hdi0tcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm5hdi0tbm90ZXMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB9XFxuXFxuICAuY29udGVudC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLmJ0bi1hZGQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogMzBweDtcXG4gICAgb3V0bGluZTogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxuICB9XFxuXFxuICAubW9kYWwsXFxuICAubW9kYWwtZGV0YWlscyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDEyMHB4LCA4MCUsIDgwMHB4KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IGF1dG87XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgfVxcblxcbiAgLmRldGFpbC0tYnRuLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5kZXRhaWwtLWJ0bi1lZGl0IHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gIH1cXG5cXG4gIC5ub3Rlcy1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcXG4gIC5uZXctdGFzay0tdGFzay1wcmlvcml0eS13cmFwcGVyLFxcbiAgLmVkaXQtdGFzay0tdGFzay1wcmlvcml0eS13cmFwcGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xcbiAgLm5ldy10YXNrLS1wcmlvcml0eS1maWVsZHNldCxcXG4gIC5lZGl0LXRhc2stLXByaW9yaXR5LWZpZWxkc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5uZXctdGFzay0tcHJpb3JpdHktbGFiZWwsXFxuICAuZWRpdC10YXNrLS1wcmlvcml0eS1sYWJlbCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQkFBb0I7QUFDcEI7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTO0FBQ1QsVUFBVTtBQUNWLFNBQVM7QUFDVCxlQUFlO0FBQ2YsYUFBYTtBQUNiLHdCQUF3QjtBQUN4Qjs7QUFFQSxvQkFBb0I7QUFDcEI7O0FBRUEsY0FBYztBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlC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Z25vcmUgKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxubWFyZ2luOiAwO1xcbnBhZGRpbmc6IDA7XFxuYm9yZGVyOiAwO1xcbmZvbnQtc2l6ZTogMTAwJTtcXG5mb250OiBpbmhlcml0O1xcbnZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogcHJldHRpZXItaWdub3JlICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5kaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4qIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLXB1cnBsZS0xOiAjOGU1Zjk1O1xcbiAgLS1jb2xvci1wdXJwbGUtMjogIzVmNDA2NDtcXG4gIC0tY29sb3ItcHVycGxlLTM6ICMyZDFlMmY7XFxuICAtLWNvbG9yLXJlZC0xOiAjZmE3YTc1O1xcbiAgLS1jb2xvci1yZWQtMjogI2Y5NTQ0ZTtcXG4gIC0tY29sb3ItcmVkLTM6ICNmNzJjMjU7XFxuICAtLWNvbG9yLXJlZC00OiAjZWMxMDA5O1xcbiAgLS1jb2xvci1yZWQtNTogIzlkMGIwNjtcXG4gIC0tY29sb3IteWVsbG93LTE6ICNmYmQ1ODk7XFxuICAtLWNvbG9yLXllbGxvdy0yOiAjZjljNzYyO1xcbiAgLS1jb2xvci15ZWxsb3ctMzogI2Y3YjMyYjtcXG4gIC0tY29sb3IteWVsbG93LTQ6ICNlNzljMDY7XFxuICAtLWNvbG9yLXllbGxvdy01OiAjOWQ2YjA2O1xcbiAgLS1jb2xvci1ibG9uZC0xOiAjZmNmNmIxO1xcbiAgLS1jb2xvci1ibG9uZC0yOiAjZjhlODNhO1xcbiAgLS1jb2xvci1ibG9uZC0zOiAjNjI1YjA0O1xcbiAgLS1jb2xvci1zZWFmb2FtLTA6ICNlZmZhZjI7XFxuICAtLWNvbG9yLXNlYWZvYW0tMTogI2QwZjFkOTtcXG4gIC0tY29sb3Itc2VhZm9hbS0yOiAjYTllNWJiO1xcbiAgLS1jb2xvci1zZWFmb2FtLTM6ICM4MWQ5OWM7XFxuICAtLWNvbG9yLXNlYWZvYW0tNDogIzYyZDA4MztcXG4gIC0tY29sb3Itc2VhZm9hbS01OiAjNDNjNzZhO1xcbiAgLS1jb2xvci1zZWFmb2FtLTY6ICMxYzVlMzA7XFxuXFxuICAtLWNvbnRhaW5lci1wYWRkaW5nOiAzMHB4O1xcbiAgLS1jb250YWluZXItbWFyZ2luOiAxNXB4O1xcbiAgLS1jb250YWluZXItYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIC0tc2lkZWJhci1nYXA6IDE4cHg7XFxuICAtLW5vdGVzLWdhcDogMTVweDtcXG4gIC0tbW9kYWwtcGFkZGluZzogMzBweDtcXG4gIC0tb3V0bGluZS1mb2N1czogMXB4IHNvbGlkIHJnYmEoNzcsIDc3LCAyMjgsIDAuOCk7XFxufVxcblxcbio6Zm9jdXMge1xcbiAgb3V0bGluZTogdmFyKC0tb3V0bGluZS1mb2N1cyk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjU1LCAyNDIpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogY2xhbXAoNDUwcHgsIDkwJSwgMTAwMHB4KTtcXG4gIGhlaWdodDogY2xhbXAoNjgwcHgsIDgwdmgsIDcyMHB4KTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMTlweCAzOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxNXB4IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIFNJREVCQVIgU1RZTEVTICovXFxuXFxuLnNpZGViYXIge1xcbiAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyLXBhZGRpbmcpO1xcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1jb250YWluZXItcGFkZGluZykgLyAyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlYWZvYW0tMSk7XFxuICB3aWR0aDogY2xhbXAoMTUwcHgsIDMwJSwgMzUwcHgpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tY29udGFpbmVyLWJvcmRlci1yYWRpdXMpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tY29udGFpbmVyLWJvcmRlci1yYWRpdXMpO1xcbiAgYm94LXNoYWRvdzogNXB4IDBweCAxMnB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgdHJhbnNmb3JtOiBza2V3WCgtMTBkZWcpO1xcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHVycGxlLTIpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uc2lkZWJhci1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDQwcHg7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5lbW9qaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLnRhc2tzLWFsbCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubmF2LS10YXNrcyxcXG4ubmF2LS1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tc2lkZWJhci1nYXApO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS0zKTtcXG59XFxuXFxuLm5hdi0tdGFza3MgPiAqLFxcbi5uYXYtLXByb2plY3RzID4gKixcXG4ubmF2LS1ub3RlcyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYtLXRhc2tzID4gKjpob3ZlcixcXG4ubmF2LS1wcm9qZWN0cyA+ICo6aG92ZXIsXFxuLm5hdi0tbm90ZXM6aG92ZXIsXFxuLm5hdi0tdGFza3MgPiAqOmZvY3VzLFxcbi5uYXYtLXByb2plY3RzID4gKjpmb2N1cyxcXG4ubmF2LS1ub3Rlczpmb2N1cyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm5hdi0tcHJvamVjdHMge1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5uYXYtLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtLXByb2plY3QtdGl0bGUge1xcbiAgcGFkZGluZzogNHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdGSUxMJyAxLCAnd2dodCcgNDAwLCAnR1JBRCcgMCwgJ29wc3onIDQ4O1xcbiAgY29sb3I6IHJnYig5NSwgOTUsIDk1KTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1pY29uOmhvdmVyLFxcbi5lZGl0LXByb2plY3QtaWNvbjpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tY29sb3IteWVsbG93LTQpO1xcbn1cXG5cXG4ubmF2LS1ub3RlcyB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4vKiBNQUlOIENPTlRBSU5FUiBTVFlMRVMgKi9cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyLXBhZGRpbmcpO1xcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWNvbnRhaW5lci1wYWRkaW5nKSArIDVweCk7XFxuICB3aWR0aDogNzAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29udGVudC10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uY29udGVudC1kaXNwbGF5IHtcXG4gIGhlaWdodDogY2xhbXAoMTAwcHgsIDkwJSwgMTAwMHB4KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50YXNrIHtcXG4gIHBhZGRpbmc6IDEycHggNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDhweDtcXG59XFxuXFxuLnRhc2sucHJpb3JpdHktaGlnaCB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tY29sb3ItcmVkLTQpO1xcbn1cXG5cXG4udGFzay5wcmlvcml0eS1tZWRpdW0ge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy00KTtcXG59XFxuXFxuLnRhc2sucHJpb3JpdHktbG93IHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1jb2xvci1zZWFmb2FtLTYpO1xcbn1cXG5cXG4udGFzay1sZWZ0LFxcbi50YXNrLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1sZWZ0ID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICB3aWR0aDogMS4xNXJlbTtcXG4gIGhlaWdodDogMS4xNXJlbTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMTVweCAwIDEycHg7XFxuICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWxlZnQgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NWUzNTtcXG59XFxuXFxuLnRhc2stbGVmdCA+IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIC50YXNrLXRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogcmdiKDk3LCA5NywgOTcpO1xcbn1cXG5cXG4udGFzay1yaWdodCB7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaWNvbiB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHVycGxlLTEpO1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaWNvbjpob3ZlcixcXG4udGFzay1kZXRhaWxzLWljb246Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHVycGxlLTIpO1xcbn1cXG5cXG4udGFzay1kaXNwbGF5LWljb24gPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDEsICd3Z2h0JyA0MDAsICdHUkFEJyAwLCAnb3BzeicgNDg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDcwLCA3MCwgNzApO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDAgMnB4O1xcbn1cXG5cXG4udGFzay1kaXNwbGF5LWljb24gPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpob3ZlcixcXG4udGFzay1kaXNwbGF5LWljb24gPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpmb2N1cyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4udGFzay1kaXNwbGF5LWljb24udGFzay1lZGl0ID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIsXFxuLnRhc2stZGlzcGxheS1pY29uLnRhc2stZWRpdCA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmZvY3VzLFxcbi50YXNrLWRpc3BsYXktaWNvbi50YXNrLWVkaXQgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDphY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy00KTtcXG59XFxuXFxuLnRhc2stZGlzcGxheS1pY29uLnRhc2stZGVsZXRlID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIsXFxuLnRhc2stZGlzcGxheS1pY29uLnRhc2stZGVsZXRlID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6Zm9jdXMsXFxuLnRhc2stZGlzcGxheS1pY29uLnRhc2stZGVsZXRlID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6YWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQtNSk7XFxufVxcblxcbi5idG4tZWRpdC10YXNrLFxcbi5idG4tZGVsZXRlLXRhc2sge1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxuICB3aWR0aDogNzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmJ0bi1lZGl0LXRhc2s6aG92ZXIsXFxuLmJ0bi1lZGl0LXRhc2s6Zm9jdXMsXFxuLmJ0bi1kZWxldGUtdGFzazpob3ZlcixcXG4uYnRuLWRlbGV0ZS10YXNrOmZvY3VzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ0bi1lZGl0LXRhc2sge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3IteWVsbG93LTQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy01KTtcXG59XFxuXFxuLmJ0bi1lZGl0LXRhc2s6aG92ZXIsXFxuLmJ0bi1lZGl0LXRhc2s6YWN0aXZlLFxcbi5idG4tZWRpdC10YXNrOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy00KTtcXG59XFxuXFxuLmJ0bi1kZWxldGUtdGFzayB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1yZWQtNCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcmVkLTQpO1xcbn1cXG5cXG4uYnRuLWRlbGV0ZS10YXNrOmhvdmVyLFxcbi5idG4tZGVsZXRlLXRhc2s6YWN0aXZlLFxcbi5idG4tZGVsZXRlLXRhc2s6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkLTQpO1xcbn1cXG5cXG4ubm90ZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ2FwOiB2YXIoLS1ub3Rlcy1nYXApO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubm90ZXMtY29sLTEsXFxuLm5vdGVzLWNvbC0yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1ub3Rlcy1nYXApO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubm90ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNCkgMHB4IDFweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4wNCkgMHB4IDJweCAycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4wMikgMHB4IDRweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wNCkgMHB4IDhweCA4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4wNCkgMHB4IDE2cHggMTZweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm5vdGUgPiAqOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5ub3RlLXRpdGxlIHtcXG4gIG1heC13aWR0aDogODUlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm5vdGUtZGV0YWlscyB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiByZ2IoNTQsIDU0LCA1NCk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uYnRuLWRlbGV0ZS1ub3RlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5idG4tZGVsZXRlLW5vdGUgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcmVkLTUpO1xcbn1cXG5cXG4uYnRuLWRlbGV0ZS1ub3RlID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIsXFxuLmJ0bi1kZWxldGUtbm90ZSA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmZvY3VzIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmJ0bi1hZGQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IDIwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBvdXRsaW5lOiAxMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsb25kLTIpO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBsaW5lYXI7XFxufVxcblxcbi5idG4tYWRkOmhvdmVyLFxcbi5idG4tYWRkOmFjdGl2ZSxcXG4uYnRuLWFkZDpmb2N1cyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxufVxcblxcbi5idG4tYWRkIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYnRuLWFkZCAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpob3ZlcixcXG4uYnRuLWFkZCAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpmb2N1cyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS0zKTtcXG59XFxuXFxuLyogIE1PREFMICovXFxuXFxuLm1vZGFsLFxcbi5tb2RhbC1kZXRhaWxzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogMjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IGNsYW1wKDEyMHB4LCA4NSUsIDYwMHB4KTtcXG4gIGhlaWdodDogY2xhbXAoMTIwcHgsIDkwJSwgODAwcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29udGFpbmVyLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCAxNXB4IDI1cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDVweCAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IHZhcigtLW1vZGFsLXBhZGRpbmcpO1xcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tbW9kYWwtcGFkZGluZykgLyAyKTtcXG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDMyKTsgKi9cXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVhNmUyNjM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmJ0bi1jbG9zZS1tb2RhbCxcXG4uYnRuLWNsb3NlLW1vZGFsLWRldGFpbHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IDIwcHg7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5idG4tY2xvc2UtbW9kYWw6aG92ZXIsXFxuLmJ0bi1jbG9zZS1tb2RhbDphY3RpdmUsXFxuLmJ0bi1jbG9zZS1tb2RhbDpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcmVkLTUpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiKDY1LCA2NSwgNjUpO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5tb2RhbC1saW5rIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGFsLWxpbms6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5tb2RhbC1saW5rLS1hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQtd3JhcHBlciB7XFxuICBwYWRkaW5nOiB2YXIoLS1tb2RhbC1wYWRkaW5nKTtcXG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLW1vZGFsLXBhZGRpbmcpIC8gMik7XFxufVxcblxcbi5tb2RhbC1jb250ZW50LFxcbi5lZGl0LXRhc2stLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5lZGl0LXRhc2stLWZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGhlaWdodDogY2xhbXAoMTIwcHgsIDkwJSwgODAwcHgpO1xcbn1cXG5cXG4uZWRpdC10YXNrLS1oZWFkZXIsXFxuLmVkaXQtcHJvamVjdC0taGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtMik7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiB2YXIoLS1vdXRsaW5lLWZvY3VzKTtcXG59XFxuXFxuI25ldy10YXNrLS10aXRsZSxcXG4jZWRpdC10YXNrLS10aXRsZSB7XFxuICByZXNpemU6IG5vbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRhc2stLWRldGFpbHMsXFxuI2VkaXQtdGFzay0tZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xcbiAgbWluLWhlaWdodDogNjBweDtcXG59XFxuXFxuLmJ0bi1zdWJtaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXB1cnBsZS0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS0xKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5idG4tc3VibWl0OmhvdmVyLFxcbi5idG4tc3VibWl0OmFjdGl2ZSxcXG4uYnRuLXN1Ym1pdDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtMSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5kaXYubmV3LXRhc2stLWZvcm0tZWxlbWVudCxcXG5kaXYuZWRpdC10YXNrLS1mb3JtLWVsZW1lbnQge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5kaXYubmV3LXRhc2stLWZvcm0tZWxlbWVudCA+ICo6Zmlyc3QtY2hpbGQsXFxuZGl2LmVkaXQtdGFzay0tZm9ybS1lbGVtZW50ID4gKjpmaXJzdC1jaGlsZCB7XFxuICBjb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubmV3LXRhc2stLXRhc2stcHJpb3JpdHktd3JhcHBlcixcXG4uZWRpdC10YXNrLS10YXNrLXByaW9yaXR5LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5ldy10YXNrLS1wcmlvcml0eS1pbnB1dCxcXG4uZWRpdC10YXNrLS1wcmlvcml0eS1pbnB1dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAyLjJyZW07XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm5ldy10YXNrLS1wcmlvcml0eS1sYWJlbCxcXG4uZWRpdC10YXNrLS1wcmlvcml0eS1sYWJlbCB7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAgbWFyZ2luOiAwIDAuMSBlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMjAwbXM7XFxufVxcblxcbi5uZXctdGFzay0tcHJpb3JpdHktbGFiZWwucHJpb3JpdHktbG93LFxcbi5lZGl0LXRhc2stLXByaW9yaXR5LWxhYmVsLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2VhZm9hbS02KTtcXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG4ubmV3LXRhc2stLXByaW9yaXR5LWxhYmVsLnByaW9yaXR5LW1lZGl1bSxcXG4uZWRpdC10YXNrLS1wcmlvcml0eS1sYWJlbC5wcmlvcml0eS1tZWRpdW0ge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy01KTtcXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG4ubmV3LXRhc2stLXByaW9yaXR5LWxhYmVsLnByaW9yaXR5LWhpZ2gsXFxuLmVkaXQtdGFzay0tcHJpb3JpdHktbGFiZWwucHJpb3JpdHktaGlnaCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcmVkLTUpO1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbi5uZXctdGFzay0tcHJpb3JpdHktbGFiZWwucHJpb3JpdHktYWN0aXZlLFxcbi5lZGl0LXRhc2stLXByaW9yaXR5LWxhYmVsLnByaW9yaXR5LWFjdGl2ZSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uZXctdGFzay0tcHJpb3JpdHktbGFiZWwucHJpb3JpdHktaGlnaC5wcmlvcml0eS1hY3RpdmUsXFxuLmVkaXQtdGFzay0tcHJpb3JpdHktbGFiZWwucHJpb3JpdHktaGlnaC5wcmlvcml0eS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkLTUpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQtNSk7XFxufVxcblxcbi5uZXctdGFzay0tcHJpb3JpdHktbGFiZWwucHJpb3JpdHktbWVkaXVtLnByaW9yaXR5LWFjdGl2ZSxcXG4uZWRpdC10YXNrLS1wcmlvcml0eS1sYWJlbC5wcmlvcml0eS1tZWRpdW0ucHJpb3JpdHktYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy00KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93LTQpO1xcbn1cXG5cXG4ubmV3LXRhc2stLXByaW9yaXR5LWxhYmVsLnByaW9yaXR5LWxvdy5wcmlvcml0eS1hY3RpdmUsXFxuLmVkaXQtdGFzay0tcHJpb3JpdHktbGFiZWwucHJpb3JpdHktbG93LnByaW9yaXR5LWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWFmb2FtLTYpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1zZWFmb2FtLTYpO1xcbn1cXG5cXG4ubmV3LXRhc2stLXRhc2stcHJpb3JpdHktd3JhcHBlcixcXG4jbmV3LXRhc2stLWRhdGUsXFxuI25ldy10YXNrLS1wcm9qZWN0LFxcbiNuZXctdGFzay0tc3RhdHVzLFxcbi5lZGl0LXRhc2stLXRhc2stcHJpb3JpdHktd3JhcHBlcixcXG4jZWRpdC10YXNrLS1kYXRlLFxcbiNlZGl0LXRhc2stLXByb2plY3QsXFxuI2VkaXQtdGFzay0tc3RhdHVzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jbmV3LXRhc2stLWRhdGUsXFxuI25ldy10YXNrLS1wcm9qZWN0LFxcbiNuZXctdGFzay0tc3RhdHVzLFxcbiNlZGl0LXRhc2stLWRhdGUsXFxuI2VkaXQtdGFzay0tcHJvamVjdCxcXG4jZWRpdC10YXNrLS1zdGF0dXMge1xcbiAgbWF4LXdpZHRoOiAxNTBweDtcXG59XFxuXFxuI25ldy10YXNrLS1wcm9qZWN0OmZvY3VzLFxcbiNuZXctdGFzay0tcHJvamVjdDphY3RpdmUsXFxuI25ldy10YXNrLS1zdGF0dXM6Zm9jdXMsXFxuI25ldy10YXNrLS1zdGF0dXM6YWN0aXZlLFxcbiNlZGl0LXRhc2stLXByb2plY3Q6Zm9jdXMsXFxuI2VkaXQtdGFzay0tcHJvamVjdDphY3RpdmUsXFxuI2VkaXQtdGFzay0tc3RhdHVzOmZvY3VzLFxcbiNlZGl0LXRhc2stLXN0YXR1czphY3RpdmUge1xcbiAgb3V0bGluZTogdmFyKC0tb3V0bGluZS1mb2N1cyk7XFxufVxcblxcbiNuZXctcHJvamVjdC0tdGl0bGUge1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jbmV3LW5vdGUtLXRpdGxlIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI25ldy1ub3RlLS1kZXRhaWxzIHtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuI25ldy10YXNrLS10aXRsZSxcXG4jZWRpdC10YXNrLS10aXRsZSxcXG4jbmV3LXByb2plY3QtLXRpdGxlLFxcbiNuZXctbm90ZS0tdGl0bGUsXFxuI2VkaXQtcHJvamVjdC0tdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xcbn1cXG5cXG4jbmV3LXRhc2stLWRldGFpbHMsXFxuI2VkaXQtdGFzay0tZGV0YWlscyxcXG4jbmV3LW5vdGUtLWRldGFpbHMge1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG59XFxuXFxuLmVkaXQtdGFzay0tYnRuLWNvbnRhaW5lcixcXG4uZWRpdC1wcm9qZWN0LS1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZWRpdC10YXNrLS1idG4tY29udGFpbmVyIC5idG4tc3VibWl0LFxcbi5lZGl0LXByb2plY3QtLWJ0bi1jb250YWluZXIgLmJ0bi1zdWJtaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4uZWRpdC10YXNrLS1idG4tY29udGFpbmVyIC5idG4tZGVsZXRlLFxcbi5lZGl0LXByb2plY3QtLWJ0bi1jb250YWluZXIgLmJ0bi1kZWxldGUge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZC00KTtcXG59XFxuXFxuLmVkaXQtdGFzay0tYnRuLWNvbnRhaW5lciAuYnRuLXN1Ym1pdCxcXG4uZWRpdC10YXNrLS1idG4tY29udGFpbmVyIC5idG4tZGVsZXRlLFxcbi5lZGl0LXByb2plY3QtLWJ0bi1jb250YWluZXIgLmJ0bi1zdWJtaXQsXFxuLmVkaXQtcHJvamVjdC0tYnRuLWNvbnRhaW5lciAuYnRuLWRlbGV0ZSB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgd2lkdGg6IGNsYW1wKDUwcHgsIDMwJSwgMjAwcHgpO1xcbn1cXG5cXG4uZWRpdC10YXNrLS1idG4tY29udGFpbmVyIC5idG4tc3VibWl0OmhvdmVyLFxcbi5lZGl0LXRhc2stLWJ0bi1jb250YWluZXIgLmJ0bi1zdWJtaXQ6Zm9jdXMsXFxuLmVkaXQtcHJvamVjdC0tYnRuLWNvbnRhaW5lciAuYnRuLXN1Ym1pdDpob3ZlcixcXG4uZWRpdC1wcm9qZWN0LS1idG4tY29udGFpbmVyIC5idG4tc3VibWl0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZS0xKTtcXG59XFxuXFxuLmVkaXQtdGFzay0tYnRuLWNvbnRhaW5lciAuYnRuLWRlbGV0ZTpob3ZlcixcXG4uZWRpdC10YXNrLS1idG4tY29udGFpbmVyIC5idG4tZGVsZXRlOmZvY3VzLFxcbi5lZGl0LXByb2plY3QtLWJ0bi1jb250YWluZXIgLmJ0bi1kZWxldGU6aG92ZXIsXFxuLmVkaXQtcHJvamVjdC0tYnRuLWNvbnRhaW5lciAuYnRuLWRlbGV0ZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQtNCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXJlZC00KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC0tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcblxcbiNlZGl0LXByb2plY3QtLXRpdGxlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDE1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLyogIE1PREFMIERFVEFJTFMgKi9cXG5cXG4ubW9kYWwtZGV0YWlscyB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCA3MCUsIDUwMHB4KTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLmRldGFpbC0tdGFzay10aXRsZSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmRldGFpbC0tdGFzay1kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gIGNvbG9yOiByZ2IoNzcsIDc3LCA3Nyk7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uZGV0YWlsLS10YXNrLWRhdGUsXFxuLmRldGFpbC0tdGFzay1wcmlvcml0eSxcXG4uZGV0YWlsLS10YXNrLXN0YXR1cyxcXG4uZGV0YWlsLS10YXNrLXByb2plY3QtbmFtZSB7XFxuICBmb250LXNpemU6IDAuOTVyZW07XFxufVxcblxcbi5kZXRhaWwtLWJ0bi1jb250YWluZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZGV0YWlsLS1idG4tZWRpdCxcXG4uZGV0YWlsLS1idG4tZGVsZXRlIHtcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxuICB3aWR0aDogODBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kZXRhaWwtLWJ0bi1lZGl0OmhvdmVyLFxcbi5kZXRhaWwtLWJ0bi1lZGl0OmZvY3VzLFxcbi5kZXRhaWwtLWJ0bi1kZWxldGU6aG92ZXIsXFxuLmRldGFpbC0tYnRuLWRlbGV0ZTpmb2N1cyB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kZXRhaWwtLWJ0bi1lZGl0IHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctNCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy00KTtcXG59XFxuXFxuLmRldGFpbC0tYnRuLWVkaXQ6aG92ZXIsXFxuLmRldGFpbC0tYnRuLWVkaXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93LTQpO1xcbn1cXG5cXG4uZGV0YWlsLS1idG4tZGVsZXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQtNSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXJlZC01KTtcXG59XFxuXFxuLmRldGFpbC0tYnRuLWRlbGV0ZTpob3ZlcixcXG4uZGV0YWlsLS1idG4tZGVsZXRlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZC01KTtcXG59XFxuXFxuLyogIEZPT1RFUiAqL1xcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDIuNHJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBjb2xvcjogIzVlNjdhMztcXG59XFxuLmZvb3Rlci1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXItZGVzYyB7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyAnLCAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksXFxuICAgICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuLmZvb3Rlci1saW5rOmxpbmssXFxuLmZvb3Rlci1saW5rOnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICM0MjQ4NzA7XFxufVxcblxcbi8qIEhFTFBFUlMgKi9cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDIwMHZ3O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLyogTUVESUEgUVVFUklFUyAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xcbiAgZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAudGFzay1kaXNwbGF5LWljb24udGFzay1kZWxldGUsXFxuICAudGFzay1kaXNwbGF5LWljb24udGFzay1lZGl0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubG9nbyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyLW5hdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAubmF2LXRhc2s6bm90KC50YXNrcy1hbGwpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyLW5hdixcXG4gIC5uYXYtLXRhc2tzIHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG5cXG4gIC50YXNrcy1hbGwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB9XFxuXFxuICAubmF2LS1wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubmF2LS1ub3RlcyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIH1cXG5cXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAuYnRuLWFkZCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbWFyZ2luOiAzMHB4O1xcbiAgICBvdXRsaW5lOiAxMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG4gIH1cXG5cXG4gIC5tb2RhbCxcXG4gIC5tb2RhbC1kZXRhaWxzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogY2xhbXAoMTIwcHgsIDgwJSwgODAwcHgpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogYXV0bztcXG4gICAgbGVmdDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuXFxuICAuZGV0YWlsLS1idG4tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmRldGFpbC0tYnRuLWVkaXQge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcblxcbiAgLm5vdGVzLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xcbiAgLm5ldy10YXNrLS10YXNrLXByaW9yaXR5LXdyYXBwZXIsXFxuICAuZWRpdC10YXNrLS10YXNrLXByaW9yaXR5LXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxuICAubmV3LXRhc2stLXByaW9yaXR5LWZpZWxkc2V0LFxcbiAgLmVkaXQtdGFzay0tcHJpb3JpdHktZmllbGRzZXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLm5ldy10YXNrLS1wcmlvcml0eS1sYWJlbCxcXG4gIC5lZGl0LXRhc2stLXByaW9yaXR5LWxhYmVsIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNGdXR1cmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgZnV0dXJlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGUgZnV0dXJlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDMxIERlY2VtYmVyIDIwMTQgaW4gdGhlIGZ1dHVyZT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzRnV0dXJlKG5ldyBEYXRlKDIwMTQsIDExLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Z1dHVyZShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCkgPiBEYXRlLm5vdygpO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy9zcmMvc3R5bGUuY3NzJztcblxuaW1wb3J0ICogYXMgbW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5cbmltcG9ydCB0YXNrVmlldyBmcm9tICcuL3ZpZXdzL3Rhc2tWaWV3JztcbmltcG9ydCB0YXNrRGV0YWlsc1ZpZXcgZnJvbSAnLi92aWV3cy90YXNrRGV0YWlsc1ZpZXcnO1xuaW1wb3J0IGFkZFRhc2tWaWV3IGZyb20gJy4vdmlld3MvYWRkVGFza1ZpZXcnO1xuaW1wb3J0IGFkZFByb2plY3RWaWV3IGZyb20gJy4vdmlld3MvYWRkUHJvamVjdFZpZXcnO1xuaW1wb3J0IGFkZE5vdGVWaWV3IGZyb20gJy4vdmlld3MvYWRkTm90ZVZpZXcnO1xuaW1wb3J0IG5vdGVWaWV3IGZyb20gJy4vdmlld3Mvbm90ZVZpZXcnO1xuaW1wb3J0IGVkaXRUYXNrVmlldyBmcm9tICcuL3ZpZXdzL2VkaXRUYXNrVmlldyc7XG5pbXBvcnQgc2lkZWJhclZpZXcgZnJvbSAnLi92aWV3cy9zaWRlYmFyVmlldyc7XG5pbXBvcnQgcHJvamVjdFZpZXcgZnJvbSAnLi92aWV3cy9wcm9qZWN0Vmlldyc7XG5pbXBvcnQgZWRpdFByb2plY3RWaWV3IGZyb20gJy4vdmlld3MvZWRpdFByb2plY3RWaWV3JztcblxuaW1wb3J0IHsgZm9ybWF0LCBpc0Z1dHVyZSwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5cbi8vIFRhc2sgQ29udHJvbGxlcnNcblxuY29uc3QgY3RybFNob3dBbGxUYXNrcyA9ICgpID0+IHtcbiAgdGFza1ZpZXcucmVuZGVyKG1vZGVsLnN0YXRlLnRhc2tzKTtcblxuICBhZGRIYW5kbGVyc1RvVGFza3MoKTtcbn07XG5cbmNvbnN0IGN0cmxUb2dnbGVTdGF0dXMgPSAoZGF0YSkgPT4ge1xuICBtb2RlbC51cGRhdGVUYXNrKGRhdGEpO1xufTtcblxuY29uc3QgY3RybFRhc2tEZXRhaWxzID0gKGlkKSA9PiB7XG4gIGNvbnN0IHRvU2hvdyA9IG1vZGVsLnN0YXRlLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcblxuICB0YXNrRGV0YWlsc1ZpZXcucmVuZGVyKHRvU2hvdyk7XG5cbiAgZWRpdFRhc2tWaWV3LmFkZEhhbmRsZXJFZGl0VGFza09uTW9kYWwoY3RybEVkaXRUYXNrKTtcbn07XG5cbmNvbnN0IGN0cmxBZGRUYXNrID0gKGRhdGEpID0+IHtcbiAgbW9kZWwuYWRkVGFzayhkYXRhKTtcblxuICBjdHJsU2hvd1Rhc2tzQnlQcm9qZWN0KGRhdGEucHJvamVjdElEKTtcbn07XG5cbmNvbnN0IGN0cmxFZGl0VGFzayA9IChpZCkgPT4ge1xuICBjb25zdCB0b1Nob3cgPSBtb2RlbC5zdGF0ZS50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG5cbiAgZWRpdFRhc2tWaWV3LnJlbmRlcih0b1Nob3cpO1xuICBlZGl0VGFza1ZpZXcucmVuZGVyUHJvamVjdHMobW9kZWwuc3RhdGUucHJvamVjdHMsIHRvU2hvdy5wcm9qZWN0SUQpO1xuXG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyU2F2ZUVkaXQoY3RybFVwZGF0ZVRhc2spO1xuICBlZGl0VGFza1ZpZXcuYWRkSGFuZGxlckRlbGV0ZVRhc2soY3RybERlbGV0ZVRhc2spO1xufTtcblxuY29uc3QgY3RybFVwZGF0ZVRhc2sgPSAoZGF0YSkgPT4ge1xuICBtb2RlbC51cGRhdGVUYXNrKGRhdGEpO1xuXG4gIGN0cmxTaG93VGFza3NCeVByb2plY3QoZGF0YS5wcm9qZWN0SUQpO1xufTtcblxuY29uc3QgY3RybERlbGV0ZVRhc2sgPSAoaWQpID0+IHtcbiAgbW9kZWwuZGVsZXRlVGFzayhpZCk7XG5cbiAgY3RybFNob3dBbGxUYXNrcygpO1xufTtcblxuLy8gU2lkZWJhciBUYXNrIENvbnRyb2xsZXJzXG5cbmNvbnN0IGN0cmxUYXNrc1RvZGF5ID0gKCkgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gW1xuICAgIGRhdGUuZ2V0RGF0ZSgpLFxuICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gIF07XG5cbiAgY29uc3QgdG9TaG93ID0gbW9kZWwuc3RhdGUudGFza3MuZmlsdGVyKFxuICAgICh0YXNrKSA9PiB0YXNrLmRhdGUgPT09IGZvcm1hdChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSwgJ3l5eXktTU0tZGQnKSxcbiAgKTtcblxuICBwcm9qZWN0Vmlldy5yZW5kZXIodG9TaG93KTtcblxuICBhZGRIYW5kbGVyc1RvVGFza3MoKTtcbn07XG5cbmNvbnN0IGN0cmxUYXNrc1VwY29taW5nID0gKCkgPT4ge1xuICBjb25zdCB0b1Nob3cgPSBtb2RlbC5zdGF0ZS50YXNrcy5maWx0ZXIoKHRhc2spID0+XG4gICAgaXNGdXR1cmUocGFyc2VJU08odGFzay5kYXRlKSksXG4gICk7XG5cbiAgcHJvamVjdFZpZXcucmVuZGVyKHRvU2hvdyk7XG5cbiAgYWRkSGFuZGxlcnNUb1Rhc2tzKCk7XG59O1xuXG5jb25zdCBjdHJsVGFza3NGaW5pc2hlZCA9ICgpID0+IHtcbiAgY29uc3QgdG9TaG93ID0gbW9kZWwuc3RhdGUudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnN0YXR1cyA9PT0gJ2ZpbmlzaGVkJyk7XG5cbiAgcHJvamVjdFZpZXcucmVuZGVyKHRvU2hvdyk7XG5cbiAgYWRkSGFuZGxlcnNUb1Rhc2tzKCk7XG59O1xuXG5jb25zdCBjdHJsSGlnaFByaW9yaXR5ID0gKCkgPT4ge1xuICBjb25zdCB0b1Nob3cgPSBtb2RlbC5zdGF0ZS50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJyk7XG5cbiAgcHJvamVjdFZpZXcucmVuZGVyKHRvU2hvdyk7XG5cbiAgYWRkSGFuZGxlcnNUb1Rhc2tzKCk7XG59O1xuXG5jb25zdCBjdHJsTWVkaXVtUHJpb3JpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHRvU2hvdyA9IG1vZGVsLnN0YXRlLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5wcmlvcml0eSA9PT0gJ21lZGl1bScpO1xuXG4gIHByb2plY3RWaWV3LnJlbmRlcih0b1Nob3cpO1xuXG4gIGFkZEhhbmRsZXJzVG9UYXNrcygpO1xufTtcblxuY29uc3QgY3RybExvd1ByaW9yaXR5ID0gKCkgPT4ge1xuICBjb25zdCB0b1Nob3cgPSBtb2RlbC5zdGF0ZS50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKTtcblxuICBwcm9qZWN0Vmlldy5yZW5kZXIodG9TaG93KTtcblxuICBhZGRIYW5kbGVyc1RvVGFza3MoKTtcbn07XG5cbi8vIFNpZGViYXIgUHJvamVjdCBjdHJsbGVyc1xuXG5jb25zdCBjdHJsUmVuZGVyUHJvamVjdHNPblNpZGViYXIgPSAoKSA9PiB7XG4gIHNpZGViYXJWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS5wcm9qZWN0cyk7XG5cbiAgcHJvamVjdFZpZXcuYWRkSGFuZGxlclNob3dUYXNrcyhjdHJsU2hvd1Rhc2tzQnlQcm9qZWN0KTtcbiAgZWRpdFByb2plY3RWaWV3LmFkZEhhbmRsZXJFZGl0UHJvamVjdChjdHJsRWRpdFByb2plY3QpO1xufTtcblxuY29uc3QgY3RybFNob3dUYXNrc0J5UHJvamVjdCA9IChpZCkgPT4ge1xuICBjb25zdCB0b1Nob3cgPSBtb2RlbC5zdGF0ZS50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sucHJvamVjdElEID09PSBpZCk7XG5cbiAgcHJvamVjdFZpZXcucmVuZGVyKHRvU2hvdyk7XG5cbiAgYWRkSGFuZGxlcnNUb1Rhc2tzKCk7XG59O1xuXG5jb25zdCBjdHJsUHJvamVjdHNPbkZvcm0gPSAoKSA9PiB7XG4gIGFkZFRhc2tWaWV3LnJlbmRlclByb2plY3RzKG1vZGVsLnN0YXRlLnByb2plY3RzKTtcbn07XG5cbmNvbnN0IGN0cmxBZGRQcm9qZWN0ID0gKGRhdGEpID0+IHtcbiAgbW9kZWwuYWRkUHJvamVjdChkYXRhKTtcblxuICBjdHJsUmVuZGVyUHJvamVjdHNPblNpZGViYXIoKTtcbn07XG5cbmNvbnN0IGN0cmxFZGl0UHJvamVjdCA9IChpZCkgPT4ge1xuICBjb25zdCB0b1Nob3cgPSBtb2RlbC5zdGF0ZS5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBpZCk7XG5cbiAgZWRpdFByb2plY3RWaWV3LnJlbmRlcih0b1Nob3cpO1xuXG4gIGVkaXRQcm9qZWN0Vmlldy5hZGRIYW5kbGVyU2F2ZUVkaXQoY3RybFVwZGF0ZVByb2plY3QpO1xuICBlZGl0UHJvamVjdFZpZXcuYWRkSGFuZGxlckRlbGV0ZVByb2plY3QoY3RybERlbGV0ZVByb2plY3QpO1xufTtcblxuY29uc3QgY3RybFVwZGF0ZVByb2plY3QgPSAoZGF0YSkgPT4ge1xuICBtb2RlbC51cGRhdGVQcm9qZWN0KGRhdGEpO1xuXG4gIGN0cmxSZW5kZXJQcm9qZWN0c09uU2lkZWJhcigpO1xuICBjdHJsU2hvd1Rhc2tzQnlQcm9qZWN0KGRhdGEuaWQpO1xufTtcblxuY29uc3QgY3RybERlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgbW9kZWwuZGVsZXRlUHJvamVjdChpZCk7XG5cbiAgY3RybFJlbmRlclByb2plY3RzT25TaWRlYmFyKCk7XG59O1xuXG4vLyBOb3RlIGNvbnRyb2xsZXJzXG5cbmNvbnN0IGN0cmxTaG93Tm90ZXMgPSAoKSA9PiB7XG4gIG5vdGVWaWV3LnJlbmRlcihtb2RlbC5zdGF0ZS5ub3Rlcyk7XG5cbiAgbm90ZVZpZXcuYWRkSGFuZGxlckRlbGV0ZU5vdGVzKGN0cmxEZWxldGVOb3RlKTtcbiAgbm90ZVZpZXcuYWRkSGFuZGxlckVkaXROb3RlcyhjdHJsRWRpdE5vdGUpO1xufTtcblxuY29uc3QgY3RybEFkZE5vdGUgPSAoZGF0YSkgPT4ge1xuICBtb2RlbC5hZGROb3RlKGRhdGEpO1xuXG4gIGN0cmxTaG93Tm90ZXMoKTtcbn07XG5cbmNvbnN0IGN0cmxFZGl0Tm90ZSA9IChkYXRhKSA9PiB7XG4gIG1vZGVsLnVwZGF0ZU5vdGUoZGF0YSk7XG5cbiAgY3RybFNob3dOb3RlcygpO1xufTtcblxuY29uc3QgY3RybERlbGV0ZU5vdGUgPSAoaWQpID0+IHtcbiAgbW9kZWwuZGVsZXRlTm90ZShpZCk7XG5cbiAgY3RybFNob3dOb3RlcygpO1xufTtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgLy8gVGFzayBpbml0aWFsaXplcnNcbiAgY3RybFNob3dBbGxUYXNrcygpO1xuXG4gIHRhc2tWaWV3LmFkZEhhbmRsZXJUb2dnbGVTdGF0dXMoY3RybFRvZ2dsZVN0YXR1cyk7XG4gIHRhc2tEZXRhaWxzVmlldy5hZGRIYW5kbGVyU2hvd1Rhc2tEZXRhaWxzKGN0cmxUYXNrRGV0YWlscyk7XG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyRWRpdFRhc2soY3RybEVkaXRUYXNrKTtcbiAgdGFza1ZpZXcuYWRkSGFuZGxlckRlbGV0ZVRhc2soY3RybERlbGV0ZVRhc2spO1xuXG4gIC8vIFByb2plY3QgLyBTaWRlYmFyIGluaXRpYWxpemVyc1xuICBjdHJsUmVuZGVyUHJvamVjdHNPblNpZGViYXIoKTtcblxuICBwcm9qZWN0Vmlldy5hZGRIYW5kbGVyVGFza3NBbGwoY3RybFNob3dBbGxUYXNrcyk7XG4gIHByb2plY3RWaWV3LmFkZEhhbmRsZXJUYXNrc0ZpbmlzaGVkKGN0cmxUYXNrc0ZpbmlzaGVkKTtcbiAgcHJvamVjdFZpZXcuYWRkSGFuZGxlclRhc2tzVG9kYXkoY3RybFRhc2tzVG9kYXkpO1xuICBwcm9qZWN0Vmlldy5hZGRIYW5kbGVyVGFza3NVcGNvbWluZyhjdHJsVGFza3NVcGNvbWluZyk7XG4gIHByb2plY3RWaWV3LmFkZEhhbmRsZXJIaWdoUHJpb3JpdHkoY3RybEhpZ2hQcmlvcml0eSk7XG4gIHByb2plY3RWaWV3LmFkZEhhbmRsZXJNZWRpdW1Qcmlvcml0eShjdHJsTWVkaXVtUHJpb3JpdHkpO1xuICBwcm9qZWN0Vmlldy5hZGRIYW5kbGVyTG93UHJpb3JpdHkoY3RybExvd1ByaW9yaXR5KTtcblxuICAvLyBOb3RlIGluaXRpYWxpemVyXG4gIG5vdGVWaWV3LmFkZEhhbmRsZXJTaG93Tm90ZXMoY3RybFNob3dOb3Rlcyk7XG5cbiAgLy8gTW9kYWwgaW5pdGlhbGl6ZXJzXG4gIGFkZFRhc2tWaWV3LmFkZEhhbmRsZXJBZGRUYXNrKGN0cmxBZGRUYXNrKTtcbiAgYWRkVGFza1ZpZXcuYWRkSGFuZGxlckxpc3RQcm9qZWN0cyhjdHJsUHJvamVjdHNPbkZvcm0pO1xuICBhZGROb3RlVmlldy5hZGRIYW5kbGVyQWRkTm90ZShjdHJsQWRkTm90ZSk7XG4gIGFkZFByb2plY3RWaWV3LmFkZEhhbmRsZXJBZGRQcm9qZWN0KGN0cmxBZGRQcm9qZWN0KTtcbn07XG5cbmluaXQoKTtcblxuLy8gSGVscGVyc1xuXG5mdW5jdGlvbiBhZGRIYW5kbGVyc1RvVGFza3MoKSB7XG4gIHRhc2tWaWV3LmFkZEhhbmRsZXJUb2dnbGVTdGF0dXMoY3RybFRvZ2dsZVN0YXR1cyk7XG4gIHRhc2tEZXRhaWxzVmlldy5hZGRIYW5kbGVyU2hvd1Rhc2tEZXRhaWxzKGN0cmxUYXNrRGV0YWlscyk7XG4gIGVkaXRUYXNrVmlldy5hZGRIYW5kbGVyRWRpdFRhc2soY3RybEVkaXRUYXNrKTtcbiAgdGFza1ZpZXcuYWRkSGFuZGxlckRlbGV0ZVRhc2soY3RybERlbGV0ZVRhc2spO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuZXhwb3J0IGNvbnN0IHN0YXRlID0ge1xuICB0YXNrczogW10sXG4gIHByb2plY3RzOiBbeyB0aXRsZTogJ0hvbWUnLCBpZDogJ0lEMDAwMDAnIH1dLFxuICBub3RlczogW10sXG59O1xuXG5jb25zdCBfcGVyc2lzdFRvTG9jYWxTdG9yYWdlID0gKHR5cGUpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZSwgSlNPTi5zdHJpbmdpZnkoc3RhdGVbdHlwZV0pKTtcbn07XG5cbi8vIFRhc2tzXG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSAoZGF0YSkgPT4gKHtcbiAgdGl0bGU6IGRhdGEudGl0bGUsXG4gIGRldGFpbHM6IGRhdGEuZGV0YWlscyxcbiAgcHJpb3JpdHk6IGRhdGEucHJpb3JpdHksXG4gIGlkOiBgSUQke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWAsXG4gIHByb2plY3ROYW1lOiBkYXRhLnByb2plY3ROYW1lLFxuICBwcm9qZWN0SUQ6IGRhdGEucHJvamVjdElELFxuICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxuICBkYXRlOiBkYXRhLmRhdGUsXG4gIHBpbm5lZDogZGF0YS5waW5uZWQgfHwgZmFsc2UsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayhkYXRhKTtcblxuICBzdGF0ZS50YXNrcy51bnNoaWZ0KG5ld1Rhc2spO1xuXG4gIF9wZXJzaXN0VG9Mb2NhbFN0b3JhZ2UoJ3Rhc2tzJyk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVGFzayA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IHN0YXRlLnRhc2tzW2dldEluZGV4KHN0YXRlLnRhc2tzLCBkYXRhLmlkKV07XG5cbiAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIGRhdGEpO1xuXG4gIF9wZXJzaXN0VG9Mb2NhbFN0b3JhZ2UoJ3Rhc2tzJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVGFzayA9IChpZCkgPT4ge1xuICBzdGF0ZS50YXNrcy5zcGxpY2UoZ2V0SW5kZXgoc3RhdGUudGFza3MsIGlkKSwgMSk7XG5cbiAgX3BlcnNpc3RUb0xvY2FsU3RvcmFnZSgndGFza3MnKTtcbn07XG5cbi8vIFByb2plY3RzXG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoZGF0YSkgPT4gKHtcbiAgdGl0bGU6IGRhdGEudGl0bGUsXG4gIGlkOiBgSUQke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWAsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChkYXRhKTtcblxuICBzdGF0ZS5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gIF9wZXJzaXN0VG9Mb2NhbFN0b3JhZ2UoJ3Byb2plY3RzJyk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvamVjdCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IHN0YXRlLnByb2plY3RzW2dldEluZGV4KHN0YXRlLnByb2plY3RzLCBkYXRhLmlkKV07XG5cbiAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIGRhdGEpO1xuXG4gIHVwZGF0ZVByb2plY3ROYW1lcyhkYXRhLmlkLCBkYXRhLnRpdGxlKTtcblxuICBPYmplY3QuYXNzaWduKHRhcmdldCwgZGF0YSk7XG5cbiAgX3BlcnNpc3RUb0xvY2FsU3RvcmFnZSgncHJvamVjdHMnKTtcbiAgX3BlcnNpc3RUb0xvY2FsU3RvcmFnZSgndGFza3MnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gIGRlbGV0ZVRhc2tzVW5kZXJQcm9qZWN0KGlkKTtcblxuICBzdGF0ZS5wcm9qZWN0cy5zcGxpY2UoZ2V0SW5kZXgoc3RhdGUucHJvamVjdHMsIGlkKSwgMSk7XG5cbiAgX3BlcnNpc3RUb0xvY2FsU3RvcmFnZSgncHJvamVjdHMnKTtcbiAgX3BlcnNpc3RUb0xvY2FsU3RvcmFnZSgndGFza3MnKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVByb2plY3ROYW1lcyA9IChpZCwgbmV3UHJvak5hbWUpID0+IHtcbiAgc3RhdGUudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLnByb2plY3RJRCA9PT0gaWQpIHtcbiAgICAgIHRhc2sucHJvamVjdE5hbWUgPSBuZXdQcm9qTmFtZTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgZGVsZXRlVGFza3NVbmRlclByb2plY3QgPSAoaWQpID0+IHtcbiAgY29uc3QgdGFza3NUb0RlbGV0ZSA9IHN0YXRlLnRhc2tzLmZpbHRlcigoZWwpID0+IGVsLnByb2plY3RJRCA9PT0gaWQpO1xuXG4gIHRhc2tzVG9EZWxldGUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGxldCBpdGVtSW5kZXggPSBzdGF0ZS50YXNrcy5maW5kSW5kZXgoXG4gICAgICAodGFzaykgPT4gdGFzay5wcm9qZWN0SUQgPT09IGl0ZW0ucHJvamVjdElELFxuICAgICk7XG5cbiAgICBzdGF0ZS50YXNrcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbiAgfSk7XG59O1xuXG4vLyBOb3Rlc1xuXG5jb25zdCBjcmVhdGVOb3RlID0gKGRhdGEpID0+ICh7XG4gIHRpdGxlOiBkYXRhLnRpdGxlLFxuICBkZXRhaWxzOiBkYXRhLmRldGFpbHMsXG4gIGlkOiBgSUQke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWAsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZE5vdGUgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBuZXdOb3RlID0gY3JlYXRlTm90ZShkYXRhKTtcblxuICBzdGF0ZS5ub3Rlcy5wdXNoKG5ld05vdGUpO1xuXG4gIF9wZXJzaXN0VG9Mb2NhbFN0b3JhZ2UoJ25vdGVzJyk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTm90ZSA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IHN0YXRlLm5vdGVzW2dldEluZGV4KHN0YXRlLm5vdGVzLCBkYXRhLmlkKV07XG5cbiAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIGRhdGEpO1xuXG4gIF9wZXJzaXN0VG9Mb2NhbFN0b3JhZ2UoJ25vdGVzJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTm90ZSA9IChpZCkgPT4ge1xuICBzdGF0ZS5ub3Rlcy5zcGxpY2UoZ2V0SW5kZXgoc3RhdGUubm90ZXMsIGlkKSwgMSk7XG5cbiAgX3BlcnNpc3RUb0xvY2FsU3RvcmFnZSgnbm90ZXMnKTtcbn07XG5cbmNvbnN0IGdldEluZGV4ID0gKGFycmF5LCBpZCkgPT4ge1xuICByZXR1cm4gYXJyYXkuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBjb25zdCBzdG9yZWQgPSAodHlwZSkgPT4ge1xuICAgIGxldCByZXN1bHQgPSAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHR5cGUpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBzZXRUb1N0YXRlID0gKHR5cGUpID0+IHtcbiAgICBzdGF0ZVt0eXBlXSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odHlwZSkpO1xuICB9O1xuXG4gIFsndGFza3MnLCAncHJvamVjdHMnLCAnbm90ZXMnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgaWYgKHN0b3JlZCh0eXBlKSkgc2V0VG9TdGF0ZSh0eXBlKTtcbiAgfSk7XG59O1xuXG5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgX2RhdGE7XG5cbiAgcmVuZGVyKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEgfHwgKEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPT09IDApKVxuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckJhY2t1cCgpO1xuXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgY29uc3QgbWFya3VwID0gdGhpcy5fZ2VuZXJhdGVNYXJrdXAoZGF0YSk7XG5cbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcbiAgfVxuXG4gIHJlbmRlclByb2plY3RzID0gKGRhdGEsIGNob3NlblByb2pJRCkgPT4ge1xuICAgIGxldCBtYXJrdXA7XG5cbiAgICBpZiAoIWNob3NlblByb2pJRCkge1xuICAgICAgbWFya3VwID0gZGF0YVxuICAgICAgICAubWFwKFxuICAgICAgICAgIChwcm9qKSA9PlxuICAgICAgICAgICAgYDxvcHRpb24gdmFsdWU9XCIke3Byb2ouaWR9XCIgY2xhc3M9XCJwcm9qZWN0LW9wdGlvblwiPiR7cHJvai50aXRsZX08L29wdGlvbj5gLFxuICAgICAgICApXG4gICAgICAgIC5qb2luKCcnKTtcbiAgICB9IGVsc2UgaWYgKGNob3NlblByb2pJRCkge1xuICAgICAgY29uc3QgZmlyc3RDaG9pY2UgPSBkYXRhLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IGNob3NlblByb2pJRCk7XG4gICAgICBjb25zdCBvdGhlcnMgPSBkYXRhXG4gICAgICAgIC5maWx0ZXIoKHByb2opID0+IHByb2ouaWQgIT09IGNob3NlblByb2pJRClcbiAgICAgICAgLm1hcChcbiAgICAgICAgICAocHJvaikgPT5cbiAgICAgICAgICAgIGA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qLmlkfVwiIGNsYXNzPVwicHJvamVjdC1vcHRpb25cIj4ke3Byb2oudGl0bGV9PC9vcHRpb24+YCxcbiAgICAgICAgKVxuICAgICAgICAuam9pbignJyk7XG5cbiAgICAgIG1hcmt1cCA9IGA8b3B0aW9uIHZhbHVlPVwiJHtmaXJzdENob2ljZS5pZH1cIiBjbGFzcz1cInByb2plY3Qtb3B0aW9uXCI+JHtmaXJzdENob2ljZS50aXRsZX08L29wdGlvbj5cbiAgICAgICR7b3RoZXJzfWA7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvalNlbGVjdGlvbiA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1wcm9qZWN0Jyk7XG5cbiAgICBwcm9qU2VsZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgIHByb2pTZWxlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcbiAgfTtcblxuICBfY2hhbmdlVGl0bGUgPSAodGV4dCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRpdGxlJykudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB9O1xuXG4gIF9yZW5kZXJCYWNrdXAoKSB7XG4gICAgY29uc3QgbWFya3VwID0gdGhpcy5fZ2VuZXJhdGVCYWNrdXAoKTtcbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgX2NhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH1cblxuICBfdW5oaWRlRWwoZWwpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIF9oaWRlRWwoZWwpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfVxuXG4gIF90b2dnbGVFbChlbCkge1xuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9XG59XG4iLCJpbXBvcnQgTW9kYWxWaWV3IGZyb20gJy4vbW9kYWxWaWV3JztcblxuY2xhc3MgQWRkTm90ZVZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBfbmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1saW5rLS1ub3RlJyk7XG4gIF9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQuYWRkLW5ldy0tbm90ZScpO1xuICBfYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zdWJtaXQuc3VibWl0LS1uZXctbm90ZScpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fYWRkSGFuZGxlclNob3dGb3JtKCk7XG4gIH1cblxuICBfYWRkSGFuZGxlclNob3dGb3JtID0gKCkgPT4ge1xuICAgIHRoaXMuX25hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9zaG93Rm9ybS5iaW5kKHRoaXMpKTtcbiAgfTtcblxuICBhZGRIYW5kbGVyQWRkTm90ZSA9IChoYW5kbGVyKSA9PiB7XG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1ub3RlLS10aXRsZScpLnZhbHVlO1xuXG4gICAgICBjb25zdCBkZXRhaWxzID1cbiAgICAgICAgdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LW5vdGUtLWRldGFpbHMnKS52YWx1ZTtcblxuICAgICAgY29uc3QgZGF0YSA9IHsgdGl0bGUsIGRldGFpbHMgfTtcblxuICAgICAgaGFuZGxlcihkYXRhKTtcblxuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWRkTm90ZVZpZXcoKTtcbiIsImltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuXG5jbGFzcyBBZGRQcm9qZWN0VmlldyBleHRlbmRzIE1vZGFsVmlldyB7XG4gIF9uYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWxpbmstLXByb2plY3QnKTtcbiAgX2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudC5hZGQtbmV3LS1wcm9qZWN0Jyk7XG4gIF9idG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXN1Ym1pdC5zdWJtaXQtLW5ldy1wcm9qZWN0Jyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9hZGRIYW5kbGVyU2hvd0Zvcm0oKTtcbiAgfVxuXG4gIF9hZGRIYW5kbGVyU2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgdGhpcy5fbmF2TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX3Nob3dGb3JtLmJpbmQodGhpcykpO1xuICB9O1xuXG4gIGFkZEhhbmRsZXJBZGRQcm9qZWN0ID0gKGhhbmRsZXIpID0+IHtcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnI25ldy1wcm9qZWN0LS10aXRsZScsXG4gICAgICApLnZhbHVlO1xuXG4gICAgICBjb25zdCBkYXRhID0geyB0aXRsZSB9O1xuXG4gICAgICBoYW5kbGVyKGRhdGEpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWRkUHJvamVjdFZpZXcoKTtcbiIsImltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuXG5jbGFzcyBBZGRUYXNrVmlldyBleHRlbmRzIE1vZGFsVmlldyB7XG4gIF9uYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWxpbmstLXRhc2snKTtcbiAgX2Zvcm0gPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50LmFkZC1uZXctLXRhc2snKTtcbiAgX2J0blN1Ym1pdCA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmJ0bi1zdWJtaXQuc3VibWl0LS1uZXctdGFzaycsXG4gICk7XG4gIF9wcmlvcml0eUxpc3QgPSBbXG4gICAgLi4udGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXRhc2stLXByaW9yaXR5LWxhYmVsJyksXG4gIF07XG4gIF9wcm9qZWN0U2VsZWN0b3IgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5uZXctdGFzay0tdGFzay1wcm9qZWN0LXdyYXBwZXInLFxuICApO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9hZGRIYW5kbGVyU2hvd01vZGFsKCk7XG4gICAgdGhpcy5fYWRkSGFuZGxlckNsb3NlTW9kYWwoKTtcbiAgICB0aGlzLl9hZGRIYW5kbGVyU2hvd0Zvcm0oKTtcbiAgICB0aGlzLl9hZGRIYW5kbGVyVG9nZ2xlUHJpb3JpdHkoKTtcbiAgICB0aGlzLmFkZEhhbmRsZXJMaXN0UHJvamVjdHMoKTtcbiAgfVxuXG4gIF9hZGRIYW5kbGVyU2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgdGhpcy5fbmF2TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX3Nob3dGb3JtLmJpbmQodGhpcykpO1xuICB9O1xuXG4gIGFkZEhhbmRsZXJBZGRUYXNrID0gKGhhbmRsZXIpID0+IHtcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2stLXRpdGxlJykudmFsdWU7XG5cbiAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay0tZGF0ZScpLnZhbHVlO1xuXG4gICAgICBjb25zdCBzdGF0dXMgPVxuICAgICAgICB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay0tc3RhdHVzJykudmFsdWU7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5ID1cbiAgICAgICAgdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYWN0aXZlJykubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgLnZhbHVlO1xuXG4gICAgICBjb25zdCBkZXRhaWxzID1cbiAgICAgICAgdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2stLWRldGFpbHMnKS52YWx1ZTtcblxuICAgICAgY29uc3QgcHJvamVjdElEID1cbiAgICAgICAgdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2stLXByb2plY3QnKS52YWx1ZTtcblxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBbXG4gICAgICAgIC4uLnRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3Qtb3B0aW9uJyksXG4gICAgICBdLmZpbmQoKHByb2pFbCkgPT4gcHJvakVsLnZhbHVlID09PSBwcm9qZWN0SUQpLnRleHRDb250ZW50O1xuXG4gICAgICBpZiAodGhpcy5fdmFsaWRhdGVUYXNrKFt0aXRsZSwgZGF0ZSwgcHJpb3JpdHldKSkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgIGRldGFpbHMsXG4gICAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgICAgcHJvamVjdElELFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFN0b3JlcyBkYXRhIGluIG1vZGVsIHN0YXRlIHRocm91Z2ggY29udHJvbGxlclxuICAgICAgICBoYW5kbGVyKGRhdGEpO1xuXG4gICAgICAgIHRoaXMuX2NoYW5nZVRpdGxlKHByb2plY3ROYW1lKTtcblxuICAgICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgYWRkSGFuZGxlckxpc3RQcm9qZWN0cyA9IChoYW5kbGVyKSA9PiB7XG4gICAgdGhpcy5fYnRuQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBZGRUYXNrVmlldygpO1xuIiwiaW1wb3J0IG1vZGFsVmlldyBmcm9tICcuL21vZGFsVmlldyc7XG5cbmNsYXNzIEVkaXRQcm9qZWN0VmlldyBleHRlbmRzIG1vZGFsVmlldyB7XG4gIF9wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRldGFpbHMnKTtcbiAgX292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuXG4gIGFkZEhhbmRsZXJFZGl0UHJvamVjdCA9IChoYW5kbGVyKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtcHJvamVjdC1pY29uJykuZm9yRWFjaCgoYnRuKSA9PlxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQuY2xvc2VzdCgnLm5hdi0tcHJvamVjdCcpLmRhdGFzZXQ7XG5cbiAgICAgICAgdGhpcy5fcGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG5cbiAgICAgICAgdGhpcy5fdW5oaWRlRWwodGhpcy5fcGFyZW50RWxlbWVudCk7XG4gICAgICAgIHRoaXMuX3VuaGlkZUVsKHRoaXMuX292ZXJsYXkpO1xuXG4gICAgICAgIGhhbmRsZXIoaWQpO1xuXG4gICAgICAgIHRoaXMuX2J0bkNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcuYnRuLWNsb3NlLW1vZGFsLWRldGFpbHMnLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9hZGRIYW5kbGVyQ2xvc2VNb2RhbCgpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfTtcblxuICBhZGRIYW5kbGVyU2F2ZUVkaXQgPSAoaGFuZGxlcikgPT4ge1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCdmb3JtJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJyNlZGl0LXByb2plY3QtLXRpdGxlJyxcbiAgICAgICAgKS52YWx1ZTtcblxuICAgICAgICBjb25zdCB7IGlkIH0gPSB0aGlzLl9wYXJlbnRFbGVtZW50LmRhdGFzZXQ7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBpZCxcbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGVyKGRhdGEpO1xuXG4gICAgICAgIHRoaXMuX2NoYW5nZVRpdGxlKHRpdGxlKTtcbiAgICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgYWRkSGFuZGxlckRlbGV0ZVByb2plY3QgPSAoaGFuZGxlcikgPT4ge1xuICAgIHRoaXMuX3BhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLS1lZGl0LXByb2plY3QnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLWRldGFpbHMnKS5kYXRhc2V0O1xuXG4gICAgICAgIGhhbmRsZXIoaWQpO1xuXG4gICAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIF9nZW5lcmF0ZU1hcmt1cCA9ICgpID0+IGBcbiAgICAgPHNwYW4gY2xhc3M9XCJlZGl0LXByb2plY3QtLWhlYWRlclwiPkVkaXQgUHJvamVjdDwvc3Bhbj5cbiAgICAgPHNwYW4gY2xhc3M9XCJidG4tY2xvc2UtbW9kYWwtZGV0YWlscyBtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Y2xvc2U8L3NwYW4+ICBcbiAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwiZWRpdC1wcm9qZWN0LS1mb3JtXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwiZWRpdC1wcm9qZWN0LS10aXRsZVwiXG4gICAgICAgICAgICBpZD1cImVkaXQtcHJvamVjdC0tdGl0bGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXByb2plY3QtLWZvcm0tZWxlbWVudFwiXG4gICAgICAgICAgICBtaW5sZW5ndGg9XCIxXCJcbiAgICAgICAgICAgIG1heGxlbmd0aD1cIjYwXCJcbiAgICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLl9kYXRhLnRpdGxlfVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1wcm9qZWN0LS1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXN1Ym1pdCBzdWJtaXQtLWVkaXQtcHJvamVjdFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWRlbGV0ZSBkZWxldGUtLWVkaXQtcHJvamVjdFwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICAgYDtcblxuICBfZ2VuZXJhdGVCYWNrdXAgPSAoKSA9PiAnWW91IGhhdmUgbm90IGFkZGVkIGFueXRoaW5nIHlldCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFZGl0UHJvamVjdFZpZXcoKTtcbiIsImltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuXG5jbGFzcyBFZGl0VGFza1ZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kZXRhaWxzJyk7XG5cbiAgYWRkSGFuZGxlckVkaXRUYXNrID0gKGhhbmRsZXIpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpXTtcblxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+XG4gICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKCFlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheS1pY29uLWVkaXQnKSlcbiAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5kYXRhc2V0O1xuXG4gICAgICAgIHRoaXMuX3VuaGlkZUVsKHRoaXMuX3BhcmVudEVsZW1lbnQpO1xuICAgICAgICB0aGlzLl91bmhpZGVFbCh0aGlzLl9vdmVybGF5KTtcblxuICAgICAgICB0aGlzLl9wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcblxuICAgICAgICBoYW5kbGVyKGlkKTtcblxuICAgICAgICB0aGlzLl9wcmlvcml0eUxpc3QgPSBbXG4gICAgICAgICAgLi4udGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10YXNrLS1wcmlvcml0eS1sYWJlbCcpLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLl9hZGRIYW5kbGVyVG9nZ2xlUHJpb3JpdHkoKTtcblxuICAgICAgICB0aGlzLl9idG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnLmJ0bi1jbG9zZS1tb2RhbC1kZXRhaWxzJyxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fYWRkSGFuZGxlckNsb3NlTW9kYWwoKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH07XG5cbiAgYWRkSGFuZGxlckVkaXRUYXNrT25Nb2RhbCA9IChoYW5kbGVyKSA9PiB7XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWwtLWJ0bi1lZGl0JylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbC1kZXRhaWxzJykuZGF0YXNldDtcblxuICAgICAgICBoYW5kbGVyKGlkKTtcblxuICAgICAgICB0aGlzLl9wcmlvcml0eUxpc3QgPSBbXG4gICAgICAgICAgLi4udGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10YXNrLS1wcmlvcml0eS1sYWJlbCcpLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLl9hZGRIYW5kbGVyVG9nZ2xlUHJpb3JpdHkoKTtcblxuICAgICAgICB0aGlzLl9idG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnLmJ0bi1jbG9zZS1tb2RhbC1kZXRhaWxzJyxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fYWRkSGFuZGxlckNsb3NlTW9kYWwoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGFkZEhhbmRsZXJTYXZlRWRpdCA9IChoYW5kbGVyKSA9PiB7XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9XG4gICAgICAgICAgdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLS10aXRsZScpLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPVxuICAgICAgICAgIHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay0tZGF0ZScpLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9XG4gICAgICAgICAgdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLS1zdGF0dXMnKS52YWx1ZTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9XG4gICAgICAgICAgdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYWN0aXZlJylcbiAgICAgICAgICAgIC5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWU7XG5cbiAgICAgICAgY29uc3QgZGV0YWlscyA9IHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnI2VkaXQtdGFzay0tZGV0YWlscycsXG4gICAgICAgICkudmFsdWU7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcjZWRpdC10YXNrLS1wcm9qZWN0JyxcbiAgICAgICAgKS52YWx1ZTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IFtcbiAgICAgICAgICAuLi50aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpLFxuICAgICAgICBdLmZpbmQoKHByb2pFbCkgPT4gcHJvakVsLnZhbHVlID09PSBwcm9qZWN0SUQpLnRleHRDb250ZW50O1xuXG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMuX3BhcmVudEVsZW1lbnQuZGF0YXNldDtcblxuICAgICAgICBpZiAodGhpcy5fdmFsaWRhdGVUYXNrKFt0aXRsZSwgZGF0ZSwgcHJpb3JpdHldKSkge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGRldGFpbHMsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIHByb2plY3RJRCxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLl9jaGFuZ2VUaXRsZShwcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgICBoYW5kbGVyKGRhdGEpO1xuXG4gICAgICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICBhZGRIYW5kbGVyRGVsZXRlVGFzayA9IChoYW5kbGVyKSA9PiB7XG4gICAgdGhpcy5fcGFyZW50RWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtLWVkaXQtdGFzaycpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRUYXNrID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLWRldGFpbHMnKTtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gdGFyZ2V0VGFzay5kYXRhc2V0O1xuXG4gICAgICAgIGhhbmRsZXIoaWQpO1xuXG4gICAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIF9nZW5lcmF0ZU1hcmt1cCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5fZGF0YTtcblxuICAgIGNvbnN0IG1hcmt1cCA9IGAgXG4gICAgICA8c3BhbiBjbGFzcz1cImVkaXQtdGFzay0taGVhZGVyXCI+RWRpdCBUYXNrPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJidG4tY2xvc2UtbW9kYWwtZGV0YWlscyBtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Y2xvc2U8L3NwYW4+ICBcbiAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwiZWRpdC10YXNrLS1mb3JtXCI+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBuYW1lPVwiZWRpdC10YXNrLS10aXRsZVwiXG4gICAgICAgICAgICBpZD1cImVkaXQtdGFzay0tdGl0bGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stLWZvcm0tZWxlbWVudFwiXG4gICAgICAgICAgICBtaW5sZW5ndGg9XCIxXCJcbiAgICAgICAgICAgIG1heGxlbmd0aD1cIjYwXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiR28gdG8gdGhlIGRvY3RvcidzIG9mZmljZVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgID4ke3Rhc2sudGl0bGV9PC90ZXh0YXJlYT5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIG5hbWU9XCJlZGl0LXRhc2stLWRldGFpbHNcIlxuICAgICAgICAgICAgaWQ9XCJlZGl0LXRhc2stLWRldGFpbHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stLWZvcm0tZWxlbWVudFwiXG4gICAgICAgICAgICBtaW5sZW5ndGg9XCIxXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXBwb2ludG1lbnQgd2l0aCBEci4gQ2hpdSBhdCBTb21lcnNldCBIb3NwaXRhbCwgMTBhbVwiXG4gICAgICAgICAgPiR7dGFzay5kZXRhaWxzfTwvdGV4dGFyZWE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGFzay0tZm9ybS1lbGVtZW50IGVkaXQtdGFzay0tdGFzay1kYXRlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0LXRhc2stLWRhdGVcIj4gRHVlIERhdGU6IDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtdGFzay0tZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgIGlkPVwiZWRpdC10YXNrLS1kYXRlXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVkaXQtdGFzay0tZGF0ZVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiJHt0YXNrLmRhdGV9XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGFzay0tZm9ybS1lbGVtZW50IGVkaXQtdGFzay0tdGFzay1wcmlvcml0eS13cmFwcGVyXCI+XG4gICAgICAgICAgICA8bGVnZW5kIGNsYXNzPVwiZWRpdC10YXNrLS1wcmlvcml0eS1sZWdlbmRcIj5Qcmlvcml0eTo8L2xlZ2VuZD5cblxuICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVwiZWRpdC10YXNrLS1wcmlvcml0eS1maWVsZHNldFwiPlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBmb3I9XCJlZGl0LXRhc2stLXByaW9yaXR5LWxvd1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stLXByaW9yaXR5LWxhYmVsIHByaW9yaXR5LWxvdyAke1xuICAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9PT0gJ2xvdycgPyAncHJpb3JpdHktYWN0aXZlJyA6ICcnXG4gICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgPkxvdzwvbGFiZWxcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZWRpdC10YXNrLS1mb3JtLWlucHV0IGVkaXQtdGFzay0tcHJpb3JpdHktaW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZWRpdC10YXNrLS1wcmlvcml0eS1sb3dcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlZGl0LXRhc2stLXByaW9yaXR5LWxvd1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJsb3dcIlxuICAgICAgICAgICAgICAgICR7dGFzay5wcmlvcml0eSA9PT0gJ2xvdycgPyAnY2hlY2tlZCcgOiAnJ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgZm9yPVwiZWRpdC10YXNrLS1wcmlvcml0eS1tZWRpdW1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZWRpdC10YXNrLS1wcmlvcml0eS1sYWJlbCBwcmlvcml0eS1tZWRpdW0gJHtcbiAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPT09ICdtZWRpdW0nID8gJ3ByaW9yaXR5LWFjdGl2ZScgOiAnJ1xuICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgID5NZWRpdW08L2xhYmVsXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtdGFzay0tZm9ybS1pbnB1dCBlZGl0LXRhc2stLXByaW9yaXR5LWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cImVkaXQtdGFzay0tcHJpb3JpdHktbWVkaXVtXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdC10YXNrLS1wcmlvcml0eS1tZWRpdW1cIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAke3Rhc2sucHJpb3JpdHkgPT09ICdtZWRpdW0nID8gJ2NoZWNrZWQnIDogJyd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGZvcj1cImVkaXQtdGFzay0tcHJpb3JpdHktaGlnaFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stLXByaW9yaXR5LWxhYmVsIHByaW9yaXR5LWhpZ2ggJHtcbiAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJyA/ICdwcmlvcml0eS1hY3RpdmUnIDogJydcbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICA+SGlnaDwvbGFiZWxcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZWRpdC10YXNrLS1mb3JtLWlucHV0IGVkaXQtdGFzay0tcHJpb3JpdHktaW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZWRpdC10YXNrLS1wcmlvcml0eS1oaWdoXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdC10YXNrLS1wcmlvcml0eS1oaWdoXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cImhpZ2hcIlxuICAgICAgICAgICAgICAgICR7dGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnID8gJ2NoZWNrZWQnIDogJyd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LXRhc2stLWZvcm0tZWxlbWVudCBlZGl0LXRhc2stLXRhc2stcHJvamVjdC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdC10YXNrLS1wcm9qZWN0XCI+UHJvamVjdDo8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZWRpdC10YXNrLS1wcm9qZWN0XCIgaWQ9XCJlZGl0LXRhc2stLXByb2plY3RcIiBjbGFzcz1cInNlbGVjdC1wcm9qZWN0XCI+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLS1mb3JtLWVsZW1lbnQgZWRpdC10YXNrLS10YXNrLXN0YXR1c1wiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXQtdGFzay0tc3RhdHVzXCI+U3RhdHVzOjwvbGFiZWxcbiAgICAgICAgICAgID48c2VsZWN0IG5hbWU9XCJlZGl0LXRhc2stLXN0YXR1c1wiIGlkPVwiZWRpdC10YXNrLS1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9uLWdvaW5nXCI+T24tZ29pbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZpbmlzaGVkXCI+RmluaXNoZWQ8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LXRhc2stLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tc3VibWl0IHN1Ym1pdC0tZWRpdC10YXNrXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tZGVsZXRlIGRlbGV0ZS0tZWRpdC10YXNrXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgYDtcblxuICAgIHJldHVybiBtYXJrdXA7XG4gIH07XG5cbiAgX2dlbmVyYXRlUGxhY2Vob2xkZXIgPSAoKSA9PiAnWW91IGhhdmUgbm90IGFkZGVkIGFueXRoaW5nIHlldCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFZGl0VGFza1ZpZXcoKTtcbiIsImltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsVmlldyBleHRlbmRzIFZpZXcge1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBfb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gIF93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudC13cmFwcGVyJyk7XG4gIF9idG5BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWFkZCcpO1xuXG4gIF9idG5DbG9zZU1vZGFsID0gdGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsb3NlLW1vZGFsJyk7XG4gIF9idG5TdWJtaXQgPSB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc3VibWl0Jyk7XG5cbiAgX21vZGFsTGlua3MgPSBbLi4udGhpcy5fcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtbGluaycpXTtcbiAgX21vZGFsRm9ybUNvbnRhaW5lciA9IFtcbiAgICAuLi50aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1jb250ZW50JyksXG4gIF07XG5cbiAgX2FkZEhhbmRsZXJTaG93TW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5fYnRuQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fc2hvd01vZGFsKTtcbiAgfTtcblxuICBfYWRkSGFuZGxlckNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5fYnRuQ2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2Nsb3NlTW9kYWwpO1xuICB9O1xuXG4gIF9hZGRIYW5kbGVyVG9nZ2xlUHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgdGhpcy5fcHJpb3JpdHlMaXN0LmZvckVhY2goKGVsKSA9PlxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB0aGlzLl9wcmlvcml0eUxpc3QuZm9yRWFjaCgocHJpb3JpdHkpID0+XG4gICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktYWN0aXZlJyksXG4gICAgICAgICk7XG5cbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYWN0aXZlJyk7XG4gICAgICB9KSxcbiAgICApO1xuICB9O1xuXG4gIF9zaG93TW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5fdW5oaWRlRWwodGhpcy5fcGFyZW50RWxlbWVudCk7XG4gICAgdGhpcy5fdW5oaWRlRWwodGhpcy5fb3ZlcmxheSk7XG5cbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay0tZGF0ZScpLnZhbHVlID1cbiAgICAgIHRoaXMuX2Zvcm1hdERhdGVGb3JGb3JtKCk7XG4gIH07XG5cbiAgX2Nsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5faGlkZUVsKHRoaXMuX3BhcmVudEVsZW1lbnQpO1xuICAgIHRoaXMuX2hpZGVFbCh0aGlzLl9vdmVybGF5KTtcblxuICAgIHRoaXMuX3Jlc2V0Rm9ybXMoKTtcbiAgICB0aGlzLl9wYXJlbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICB9O1xuXG4gIF9zaG93Rm9ybSA9IChlKSA9PiB7XG4gICAgdGhpcy5fbWFrZUFjdGl2ZUxpbmsoZS50YXJnZXQpO1xuXG4gICAgdGhpcy5fbW9kYWxGb3JtQ29udGFpbmVyLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgIHRoaXMuX3Jlc2V0Rm9ybXMoKTtcbiAgICAgIHRoaXMuX2hpZGVFbChmb3JtKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLS1kYXRlJykudmFsdWUgPVxuICAgICAgdGhpcy5fZm9ybWF0RGF0ZUZvckZvcm0oKTtcblxuICAgIHRoaXMuX3VuaGlkZUVsKHRoaXMuX2Zvcm0pO1xuICB9O1xuXG4gIF9yZXNldEZvcm1zID0gKCkgPT4ge1xuICAgIFsuLi50aGlzLl9wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKV0uZm9yRWFjaCgoZm9ybSkgPT5cbiAgICAgIGZvcm0ucmVzZXQoKSxcbiAgICApO1xuICB9O1xuXG4gIF9tYWtlQWN0aXZlTGluayA9ICh0YXJnZXQpID0+IHtcbiAgICB0aGlzLl9tb2RhbExpbmtzLmZvckVhY2goKGxpbmspID0+XG4gICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWxpbmstLWFjdGl2ZScpLFxuICAgICk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWxpbmstLWFjdGl2ZScpO1xuICB9O1xuXG4gIF9mb3JtYXREYXRlRm9yRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSBbXG4gICAgICBkYXRlLmdldERhdGUoKSxcbiAgICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSwgJ3l5eXktTU0tZGQnKTtcbiAgfTtcblxuICBfdmFsaWRhdGVUYXNrKGFycikge1xuICAgIGNvbnN0IFt0aXRsZSwgZGF0ZSwgcHJpb3JpdHldID0gYXJyO1xuXG4gICAgcmV0dXJuICEoIXRpdGxlIHx8ICFkYXRlIHx8ICFwcmlvcml0eSk7XG4gIH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gJy4vVmlldyc7XG5cbmNsYXNzIE5vdGVWaWV3IGV4dGVuZHMgVmlldyB7XG4gIF9wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtZGlzcGxheScpO1xuICBfYnRuU2hvd05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi0tbm90ZXMnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWRkSGFuZGxlckVkaXROb3RlcygpO1xuICAgIHRoaXMuYWRkSGFuZGxlckRlbGV0ZU5vdGVzKCk7XG4gIH1cblxuICBhZGRIYW5kbGVyU2hvd05vdGVzID0gKGhhbmRsZXIpID0+IHtcbiAgICB0aGlzLl9idG5TaG93Tm90ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaGFuZGxlcigpO1xuICAgICAgdGhpcy5fY2hhbmdlVGl0bGUoJ05vdGVzJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgYWRkSGFuZGxlckVkaXROb3RlcyA9IChoYW5kbGVyKSA9PiB7XG4gICAgY29uc3Qgbm90ZXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vdGUnKV07XG5cbiAgICBub3Rlcy5mb3JFYWNoKChub3RlKSA9PlxuICAgICAgbm90ZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGVUb0NoYW5nZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5ub3RlJyk7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IG5vdGVUb0NoYW5nZS5kYXRhc2V0O1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gbm90ZVRvQ2hhbmdlLnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLXRpdGxlJykudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBub3RlVG9DaGFuZ2UucXVlcnlTZWxlY3RvcignLm5vdGUtZGV0YWlscycpLnRleHRDb250ZW50O1xuXG4gICAgICAgIGhhbmRsZXIoeyB0aXRsZSwgZGV0YWlscywgaWQgfSk7XG4gICAgICB9KSxcbiAgICApO1xuICB9O1xuXG4gIGFkZEhhbmRsZXJEZWxldGVOb3RlcyA9IChoYW5kbGVyKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlQnRucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWRlbGV0ZS1ub3RlJyldO1xuXG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKChidG4pID0+XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldC5jbG9zZXN0KCcubm90ZScpLmRhdGFzZXQ7XG4gICAgICAgIGhhbmRsZXIoaWQpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfTtcblxuICBfZ2VuZXJhdGVNYXJrdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgZXZlbiA9IHRoaXMuX2RhdGEuZmlsdGVyKChub3RlLCBpKSA9PiBpICUgMiA9PT0gMCk7XG4gICAgY29uc3Qgb2RkID0gdGhpcy5fZGF0YS5maWx0ZXIoKG5vdGUsIGkpID0+IGkgJSAyICE9PSAwKTtcblxuICAgIGNvbnN0IG1hcmt1cCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVzLWNvbC0xXCI+XG4gICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlTm90ZU1hcmt1cChldmVuKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3Rlcy1jb2wtMlwiPlxuICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZU5vdGVNYXJrdXAob2RkKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcblxuICAgIHJldHVybiBtYXJrdXA7XG4gIH07XG5cbiAgX2dlbmVyYXRlTm90ZU1hcmt1cCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgbWFya3VwID0gZGF0YVxuICAgICAgLm1hcChcbiAgICAgICAgKG5vdGUpID0+IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCIgZGF0YS1pZD1cIiR7bm90ZS5pZH1cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1kZWxldGUtbm90ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsb3NlPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGUtdGl0bGVcIiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgJHtub3RlLnRpdGxlfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGUtZGV0YWlsc1wiIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAke25vdGUuZGV0YWlsc31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIGAsXG4gICAgICApXG4gICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gbWFya3VwO1xuICB9O1xuXG4gIF9nZW5lcmF0ZUJhY2t1cCA9ICgpID0+IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCIgaWQ9XCJudWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlLXRpdGxlXCIgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIFNhbXBsZSBOb3RlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZS1kZXRhaWxzXCIgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIFlvdSBhcmUgc2VlaW5nIHRoaXMgc2FtcGxlIGJlY2F1c2UgeW91IGhhdmUgbm90IGFkZGVkIGFueSBub3RlcyB5ZXQuIEFkZCBvbmUgbm93IVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5vdGVWaWV3KCk7XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcnO1xuXG5jbGFzcyBQcm9qZWN0VmlldyBleHRlbmRzIFZpZXcge1xuICBfcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWRpc3BsYXknKTtcblxuICBhZGRIYW5kbGVyU2hvd1Rhc2tzID0gKGhhbmRsZXIpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LS1wcm9qZWN0JykuZm9yRWFjaCgocHJvaikgPT5cbiAgICAgIHByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2LS1wcm9qZWN0LXRpdGxlJykpIHJldHVybjtcblxuICAgICAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldC5jbG9zZXN0KCcubmF2LS1wcm9qZWN0JykuZGF0YXNldDtcblxuICAgICAgICB0aGlzLl9jaGFuZ2VUaXRsZShlLnRhcmdldC50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgaGFuZGxlcihpZCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9O1xuXG4gIGFkZEhhbmRsZXJUYXNrc0FsbCA9IChoYW5kbGVyKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWFsbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaGFuZGxlcigpO1xuICAgICAgdGhpcy5fY2hhbmdlVGl0bGUoJ0FsbCB0YXNrcycpO1xuICAgIH0pO1xuICB9O1xuXG4gIGFkZEhhbmRsZXJUYXNrc1RvZGF5ID0gKGhhbmRsZXIpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtdG9kYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICAgIHRoaXMuX2NoYW5nZVRpdGxlKCdEdWUgVG9kYXknKTtcbiAgICB9KTtcbiAgfTtcblxuICBhZGRIYW5kbGVyVGFza3NVcGNvbWluZyA9IChoYW5kbGVyKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLXVwY29taW5nJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VUaXRsZSgnVXBjb21pbmcnKTtcbiAgICB9KTtcbiAgfTtcblxuICBhZGRIYW5kbGVyVGFza3NGaW5pc2hlZCA9IChoYW5kbGVyKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWZpbmlzaGVkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VUaXRsZSgnRmluaXNoZWQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBhZGRIYW5kbGVySGlnaFByaW9yaXR5ID0gKGhhbmRsZXIpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1oaWdoLXByaW9yaXR5JylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VUaXRsZSgnSGlnaCBQcmlvcml0eScpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgYWRkSGFuZGxlck1lZGl1bVByaW9yaXR5ID0gKGhhbmRsZXIpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1tZWRpdW0tcHJpb3JpdHknKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZVRpdGxlKCdNZWRpdW0gUHJpb3JpdHknKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGFkZEhhbmRsZXJMb3dQcmlvcml0eSA9IChoYW5kbGVyKSA9PiB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGFza3MtbG93LXByaW9yaXR5JylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VUaXRsZSgnTG93IFByaW9yaXR5Jyk7XG4gICAgICB9KTtcbiAgfTtcblxuICBfZ2VuZXJhdGVNYXJrdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFya3VwID0gdGhpcy5fZGF0YVxuICAgICAgLm1hcChcbiAgICAgICAgKHRhc2spID0+IGBcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrIHByaW9yaXR5LSR7dGFzay5wcmlvcml0eX1cIiBkYXRhLWlkPVwiJHt0YXNrLmlkfVwiPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGFzay1zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJ0YXNrLXN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRhc2stc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICR7dGFzay5zdGF0dXMgPT09ICdmaW5pc2hlZCcgPyAnY2hlY2tlZCcgOiAnJ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay10aXRsZSAke1xuICAgICAgICAgICAgICAgICAgdGFzay5zdGF0dXMgPT09ICdmaW5pc2hlZCcgPyAndGFzay1maW5pc2hlZCcgOiAnJ1xuICAgICAgICAgICAgICAgIH1cIj4ke3Rhc2sudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMtaWNvblwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgRGV0YWlsc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGlzcGxheS1pY29uIGRpc3BsYXktaWNvbi1lZGl0IHRhc2stZWRpdFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIGVkaXRcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kaXNwbGF5LWljb24gZGlzcGxheS1pY29uLWRlbGV0ZSB0YXNrLWRlbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgICAgKVxuICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfTtcblxuICBfZ2VuZXJhdGVCYWNrdXAgPSAoKSA9PlxuICAgIGA8ZGl2IGNsYXNzPVwicGxhY2Vob2xkZXItcHJvamVjdFwiPllvdSBoYXZlIG5vIHRhc2tzIGxpc3RlZCB1bmRlciB0aGlzIHByb2plY3QvY2F0ZWdvcnkgY3VycmVudGx5LjwvZGl2PmA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm9qZWN0VmlldygpO1xuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcblxuY2xhc3MgU2lkZWJhclZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LS1wcm9qZWN0cycpO1xuXG4gIF9nZW5lcmF0ZU1hcmt1cCA9ICgpID0+XG4gICAgdGhpcy5fZGF0YVxuICAgICAgLm1hcChcbiAgICAgICAgKHByb2opID0+XG4gICAgICAgICAgYDxkaXYgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJuYXYtLXByb2plY3RcIiBkYXRhLWlkPVwiJHtwcm9qLmlkfVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtLXByb2plY3QtdGl0bGVcIj4ke3Byb2oudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgcHJvai5pZCAhPT0gJ0lEMDAwMDAnXG4gICAgICAgICAgICAgICAgPyAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGVkaXQtcHJvamVjdC1pY29uXCI+ZWRpdDwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICAgIDwvZGl2PmAsXG4gICAgICApXG4gICAgICAuam9pbignJyk7XG5cbiAgX2dlbmVyYXRlQmFja3VwID0gKCkgPT5cbiAgICBgPGRpdiBjbGFzcz1cIm5hdi1wcm9qZWN0XCIgZGF0YS1pZD1cIklEMDAwMDBcIj5FeGFtcGxlIFByb2plY3Q8L2Rpdj5gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2lkZWJhclZpZXcoKTtcbiIsImltcG9ydCBNb2RhbFZpZXcgZnJvbSAnLi9tb2RhbFZpZXcnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuXG5jbGFzcyBUYXNrRGV0YWlsc1ZpZXcgZXh0ZW5kcyBNb2RhbFZpZXcge1xuICBfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRldGFpbHMnKTtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGV0YWlscycpO1xuICBfb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5cbiAgYWRkSGFuZGxlclNob3dUYXNrRGV0YWlscyhoYW5kbGVyKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKS5mb3JFYWNoKChlbCkgPT5cbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZGV0YWlscy1pY29uJykpIHJldHVybjtcblxuICAgICAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmRhdGFzZXQ7XG5cbiAgICAgICAgdGhpcy5fcGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG5cbiAgICAgICAgdGhpcy5fdW5oaWRlRWwodGhpcy5fcGFyZW50RWxlbWVudCk7XG4gICAgICAgIHRoaXMuX3VuaGlkZUVsKHRoaXMuX292ZXJsYXkpO1xuXG4gICAgICAgIGhhbmRsZXIoaWQpO1xuXG4gICAgICAgIHRoaXMuX2J0bkNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcuYnRuLWNsb3NlLW1vZGFsLWRldGFpbHMnLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9hZGRIYW5kbGVyQ2xvc2VNb2RhbCgpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZU1hcmt1cCA9IChkYXRhKSA9PiBgIFxuICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuLWNsb3NlLW1vZGFsLWRldGFpbHMgbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsb3NlPC9zcGFuPiAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtLXRhc2stdGl0bGVcIj4ke2RhdGEudGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtLXRhc2stZGV0YWlsc1wiPlxuICAgICAgICAgICR7ZGF0YS5kZXRhaWxzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC0tdGFzay1kYXRlXCI+RGF0ZTogJHtmb3JtYXQoXG4gICAgICAgICAgbmV3IERhdGUoZGF0YS5kYXRlKSxcbiAgICAgICAgICAnTU1NTSBkLCB5eXknLFxuICAgICAgICApfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLS10YXNrLXByaW9yaXR5XCI+UHJpb3JpdHk6ICR7dGhpcy5fY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFxuICAgICAgICAgIGRhdGEucHJpb3JpdHksXG4gICAgICAgICl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtLXRhc2stc3RhdHVzXCI+U3RhdHVzOiAke3RoaXMuX2NhcGl0YWxpemVGaXJzdExldHRlcihcbiAgICAgICAgICBkYXRhLnN0YXR1cyxcbiAgICAgICAgKX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC0tdGFzay1wcm9qZWN0LW5hbWVcIj5Qcm9qZWN0OiAke1xuICAgICAgICAgIGRhdGEucHJvamVjdE5hbWVcbiAgICAgICAgfTwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGV0YWlsLS1idG4tZWRpdCB0YXNrLWVkaXRcIj5FZGl0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PmA7XG5cbiAgX2dlbmVyYXRlQmFja3VwID0gKCkgPT4gYFxuICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bi1jbG9zZS1tb2RhbC1kZXRhaWxzIG1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jbG9zZTwvc3Bhbj4gXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtLXRhc2stdGl0bGVcIj5TYW1wbGUgVGFzazwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLS10YXNrLWRldGFpbHNcIj5cbiAgICAgICAgICBZb3UgYXJlIHNlZWluZyB0aGlzIHNhbXBsZSB0YXNrIGJlY2F1c2UgeW91IGhhdmUgbm90IGFkZGVkIGEgdGFzayB5ZXQuIEFkZCBvbmUgbm93IVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC0tdGFzay1kYXRlXCI+RGF0ZTogSmFuLiAxLCAyMDAwPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtLXRhc2stcHJpb3JpdHlcIj5Qcmlvcml0eTogSGlnaDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLS10YXNrLXN0YXR1c1wiPlN0YXR1czogT24tZ29pbmc8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC0tdGFzay1wcm9qZWN0LW5hbWVcIj5Qcm9qZWN0OiBIb21lPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC0tYnRuLWNvbnRhaW5lciBoaWRkZW5cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGV0YWlsLS1idG4tZWRpdCB0YXNrLWVkaXRcIj5FZGl0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PiBcbiAgYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRhc2tEZXRhaWxzVmlldygpO1xuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcblxuY2xhc3MgVGFza1ZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1kaXNwbGF5Jyk7XG4gIF9uYXZTaG93QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWFsbCcpO1xuXG4gIGFkZEhhbmRsZXJUb2dnbGVTdGF0dXMgPSAoaGFuZGxlcikgPT4ge1xuICAgIGNvbnN0IHN0YXR1c0JveGVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLXN0YXR1cycpXTtcblxuICAgIHN0YXR1c0JveGVzLmZvckVhY2goKGJveCkgPT5cbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZGF0YXNldDtcblxuICAgICAgICBjb25zdCBzdGF0dXMgPSBlLnRhcmdldC5jaGVja2VkID8gJ2ZpbmlzaGVkJyA6ICdvbi1nb2luZyc7XG5cbiAgICAgICAgaGFuZGxlcih7IGlkLCBzdGF0dXMgfSk7XG4gICAgICB9KSxcbiAgICApO1xuICB9O1xuXG4gIGFkZEhhbmRsZXJEZWxldGVUYXNrID0gKGhhbmRsZXIpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpXTtcblxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+XG4gICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKCFlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheS1pY29uLWRlbGV0ZScpKVxuICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmRhdGFzZXQ7XG5cbiAgICAgICAgaGFuZGxlcihpZCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9O1xuXG4gIF9nZW5lcmF0ZU1hcmt1cCA9ICgpID0+IHtcbiAgICB0aGlzLl9jaGFuZ2VUaXRsZSgnQWxsIHRhc2tzJyk7XG5cbiAgICBjb25zdCBtYXJrdXAgPSB0aGlzLl9kYXRhXG4gICAgICAubWFwKFxuICAgICAgICAodGFzaykgPT4gYFxuICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2sgcHJpb3JpdHktJHt0YXNrLnByaW9yaXR5fVwiIGRhdGEtaWQ9XCIke3Rhc2suaWR9XCI+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0YXNrLXN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICBpZD1cInRhc2stc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGFzay1zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgJHt0YXNrLnN0YXR1cyA9PT0gJ2ZpbmlzaGVkJyA/ICdjaGVja2VkJyA6ICcnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLXRpdGxlICR7XG4gICAgICAgICAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gJ2ZpbmlzaGVkJyA/ICd0YXNrLWZpbmlzaGVkJyA6ICcnXG4gICAgICAgICAgICAgICAgfVwiPiR7dGFzay50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscy1pY29uXCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICAgICAgICAgICAgICBEZXRhaWxzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kaXNwbGF5LWljb24gZGlzcGxheS1pY29uLWVkaXQgdGFzay1lZGl0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgZWRpdFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktaWNvbiBkaXNwbGF5LWljb24tZGVsZXRlIHRhc2stZGVsZXRlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgICApXG4gICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gbWFya3VwO1xuICB9O1xuXG4gIF9nZW5lcmF0ZUJhY2t1cCA9ICgpID0+IHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2sgcHJpb3JpdHktbWVkaXVtXCIgZGF0YS1pZD1cIm51bGxcIj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRhc2stc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwidGFzay1zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLXN0YXR1c1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stdGl0bGVcIj5TYW1wbGUgVGFzazwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzLWljb25cIj5cbiAgICAgICAgICAgICAgICAgIERldGFpbHNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRpc3BsYXktaWNvbiB0YXNrLWVkaXRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPlxuICAgICAgICAgICAgICAgICAgICBlZGl0XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGlzcGxheS1pY29uIHRhc2stZGVsZXRlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICByZXR1cm4gbWFya3VwO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFza1ZpZXcoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==