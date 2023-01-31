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
___CSS_LOADER_EXPORT___.push([module.id, "/* prettier-ignore */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\n/* prettier-ignore */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\ndisplay: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  vertical-align: baseline;\n  font-family: inherit;\n  font-style: inherit;\n  font-size: 100%;\n  border: none;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --color-purple-1: #8e5f95;\n  --color-purple-2: #5f4064;\n  --color-purple-3: #2d1e2f;\n  --color-red-1: #fa7a75;\n  --color-red-2: #f9544e;\n  --color-red-3: #f72c25;\n  --color-red-4: #ec1009;\n  --color-red-5: #9d0b06;\n  --color-yellow-1: #fbd589;\n  --color-yellow-2: #f9c762;\n  --color-yellow-3: #f7b32b;\n  --color-yellow-4: #eca009;\n  --color-yellow-5: #eca009;\n  --color-blond-1: #fcf6b1;\n  --color-blond-2: #f8e83a;\n  --color-blond-3: #625b04;\n  --color-seafoam-0: #effaf2;\n  --color-seafoam-1: #d0f1d9;\n  --color-seafoam-2: #a9e5bb;\n  --color-seafoam-3: #81d99c;\n  --color-seafoam-4: #62d083;\n  --color-seafoam-5: #43c76a;\n  --color-seafoam-6: #1c5e30;\n\n  --container-padding: 50px;\n  --container-margin: 15px;\n  --container-border-radius: 12px;\n  --sidebar-gap: 15px;\n}\n\nbody {\n  background-color: var(--color-seafoam-0, #e7f3ea);\n  overflow-y: auto;\n  font-family: 'Roboto', 'Open Sans', Arial, Helvetica, sans-serif, monospace;\n}\n\n.container {\n  width: clamp(450px, 90%, 1300px);\n  height: clamp(300px, 100%, 1000px);\n  margin: 20px auto;\n  border: 2px solid rgba(0, 0, 0, 0.25);\n  border-radius: var(--container-border-radius);\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,\n    rgba(0, 0, 0, 0.22) 0px 15px 12px;\n  background-color: white;\n  display: flex;\n}\n\n/* SIDEBAR STYLES */\n\n.sidebar {\n  padding: var(--container-padding);\n  padding-right: calc(var(--container-padding) / 2);\n  background-color: var(--color-seafoam-1);\n  height: 100%;\n  width: clamp(150px, 30%, 350px);\n  border-top-left-radius: var(--container-border-radius);\n  border-bottom-left-radius: var(--container-border-radius);\n}\n\n.logo {\n  font-family: 'Bebas Neue', Arial, Helvetica, sans-serif, monospace;\n  font-size: 2.5rem;\n  transform: skewX(-10deg);\n  margin-bottom: 40px;\n  cursor: default;\n}\n\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n\n.nav--tasks,\n.nav--projects,\n.nav--notes {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sidebar-gap);\n}\n\n.nav--tasks > *,\n.nav--projects > *,\n.nav--notes {\n  cursor: pointer;\n}\n\n.nav--tasks > *:hover {\n  transform: scale(1.025);\n  transform-origin: left;\n}\n\n/* MAIN CONTAINER STYLES */\n\n.content-container {\n  padding: var(--container-padding);\n  padding-left: calc(var(--container-padding) + 5px);\n  width: 70%;\n}\n\n/*  FOOTER */\n/* FOOTER */\nfooter {\n  position: fixed;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  margin-top: 2.4rem;\n  padding: 1rem;\n  color: #5e67a3;\n}\n.footer-link {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer-desc {\n  font-family: 'Open Sans ', 'Gill Sans', 'Gill Sans MT', Calibri,\n    'Trebuchet MS', sans-serif;\n  padding-left: 1em;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.footer-link:link,\n.footer-link:visited {\n  text-decoration: none;\n  color: #424870;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,oBAAoB;AACpB;;;;;;;;;;;;;AAaA,SAAS;AACT,UAAU;AACV,SAAS;AACT,eAAe;AACf,aAAa;AACb,wBAAwB;AACxB;;AAEA,oBAAoB;AACpB;;AAEA,cAAc;AACd;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;EACxB,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;;EAE1B,yBAAyB;EACzB,wBAAwB;EACxB,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA;EACE,iDAAiD;EACjD,gBAAgB;EAChB,2EAA2E;AAC7E;;AAEA;EACE,gCAAgC;EAChC,kCAAkC;EAClC,iBAAiB;EACjB,qCAAqC;EACrC,6CAA6C;EAC7C;qCACmC;EACnC,uBAAuB;EACvB,aAAa;AACf;;AAEA,mBAAmB;;AAEnB;EACE,iCAAiC;EACjC,iDAAiD;EACjD,wCAAwC;EACxC,YAAY;EACZ,+BAA+B;EAC/B,sDAAsD;EACtD,yDAAyD;AAC3D;;AAEA;EACE,kEAAkE;EAClE,iBAAiB;EACjB,wBAAwB;EACxB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,sDAAsD;AACxD;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA,0BAA0B;;AAE1B;EACE,iCAAiC;EACjC,kDAAkD;EAClD,UAAU;AACZ;;AAEA,YAAY;AACZ,WAAW;AACX;EACE,eAAe;EACf,SAAS;EACT,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,cAAc;AAChB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE;8BAC4B;EAC5B,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;AACnB;AACA;;EAEE,qBAAqB;EACrB,cAAc;AAChB","sourcesContent":["/* prettier-ignore */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\n/* prettier-ignore */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\ndisplay: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  vertical-align: baseline;\n  font-family: inherit;\n  font-style: inherit;\n  font-size: 100%;\n  border: none;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --color-purple-1: #8e5f95;\n  --color-purple-2: #5f4064;\n  --color-purple-3: #2d1e2f;\n  --color-red-1: #fa7a75;\n  --color-red-2: #f9544e;\n  --color-red-3: #f72c25;\n  --color-red-4: #ec1009;\n  --color-red-5: #9d0b06;\n  --color-yellow-1: #fbd589;\n  --color-yellow-2: #f9c762;\n  --color-yellow-3: #f7b32b;\n  --color-yellow-4: #eca009;\n  --color-yellow-5: #eca009;\n  --color-blond-1: #fcf6b1;\n  --color-blond-2: #f8e83a;\n  --color-blond-3: #625b04;\n  --color-seafoam-0: #effaf2;\n  --color-seafoam-1: #d0f1d9;\n  --color-seafoam-2: #a9e5bb;\n  --color-seafoam-3: #81d99c;\n  --color-seafoam-4: #62d083;\n  --color-seafoam-5: #43c76a;\n  --color-seafoam-6: #1c5e30;\n\n  --container-padding: 50px;\n  --container-margin: 15px;\n  --container-border-radius: 12px;\n  --sidebar-gap: 15px;\n}\n\nbody {\n  background-color: var(--color-seafoam-0, #e7f3ea);\n  overflow-y: auto;\n  font-family: 'Roboto', 'Open Sans', Arial, Helvetica, sans-serif, monospace;\n}\n\n.container {\n  width: clamp(450px, 90%, 1300px);\n  height: clamp(300px, 100%, 1000px);\n  margin: 20px auto;\n  border: 2px solid rgba(0, 0, 0, 0.25);\n  border-radius: var(--container-border-radius);\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,\n    rgba(0, 0, 0, 0.22) 0px 15px 12px;\n  background-color: white;\n  display: flex;\n}\n\n/* SIDEBAR STYLES */\n\n.sidebar {\n  padding: var(--container-padding);\n  padding-right: calc(var(--container-padding) / 2);\n  background-color: var(--color-seafoam-1);\n  height: 100%;\n  width: clamp(150px, 30%, 350px);\n  border-top-left-radius: var(--container-border-radius);\n  border-bottom-left-radius: var(--container-border-radius);\n}\n\n.logo {\n  font-family: 'Bebas Neue', Arial, Helvetica, sans-serif, monospace;\n  font-size: 2.5rem;\n  transform: skewX(-10deg);\n  margin-bottom: 40px;\n  cursor: default;\n}\n\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n\n.nav--tasks,\n.nav--projects,\n.nav--notes {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sidebar-gap);\n}\n\n.nav--tasks > *,\n.nav--projects > *,\n.nav--notes {\n  cursor: pointer;\n}\n\n.nav--tasks > *:hover {\n  transform: scale(1.025);\n  transform-origin: left;\n}\n\n/* MAIN CONTAINER STYLES */\n\n.content-container {\n  padding: var(--container-padding);\n  padding-left: calc(var(--container-padding) + 5px);\n  width: 70%;\n}\n\n/*  FOOTER */\n/* FOOTER */\nfooter {\n  position: fixed;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  margin-top: 2.4rem;\n  padding: 1rem;\n  color: #5e67a3;\n}\n.footer-link {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer-desc {\n  font-family: 'Open Sans ', 'Gill Sans', 'Gill Sans MT', Calibri,\n    'Trebuchet MS', sans-serif;\n  padding-left: 1em;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.footer-link:link,\n.footer-link:visited {\n  text-decoration: none;\n  color: #424870;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _views_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/View */ "./src/views/View.js");






const controlTasks = function () {};


/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Note": () => (/* binding */ Note),
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
/* eslint-disable no-underscore-dangle */

const state = (() => {
  const _tasks = [];
  const _projects = [];
  const _notes = [];

  const _matchTypeToArray = function (type) {
    let arrayOfType;

    if (type === 'task') {
      arrayOfType = _tasks;
    } else if (type === 'project') {
      arrayOfType = _projects;
    } else if (type === 'note') {
      arrayOfType = _notes;
    }

    return arrayOfType;
  };

  const addItem = (item, type) => {
    const typeArray = _matchTypeToArray(type);

    typeArray.push(item);
  };

  const deleteItem = (item, type) => {
    const typeArray = _matchTypeToArray(type);

    const index = typeArray.findIndex((i) => i.id === item.id);

    typeArray.splice(index, 1);
  };

  const persistToLocalStorage = (type) => {
    localStorage.setItem(`${type}s`, JSON.stringify(_matchTypeToArray(type)));
  };

  const getTasks = () => _tasks;
  const getProjects = () => _projects;
  const getNotes = () => _notes;

  return {
    addItem,
    deleteItem,
    persistToLocalStorage,
    getNotes,
    getProjects,
    getTasks,
  };
})();

const Task = function (data) {
  const props = {
    ...data,
    id: `ID${Math.random().toString(16).slice(2)}`,
  };

  const methods = {
    setTitle(newTitle) {
      this.title = newTitle;
    },

    setDescription(newDesc) {
      this.description = newDesc;
    },

    setDate(newDate) {
      this.date = newDate;
    },

    setPriority(newPriority) {
      this.priority = newPriority;
    },

    setProject(newProject) {
      this.project = newProject;
    },
  };

  const task = Object.assign(Object.create(methods), props);

  return task;
};

const Project = function (data) {
  const props = {
    ...data,
    id: `ID${Math.random().toString(16).slice(2)}`,
  };

  const methods = {
    setTitle(newTitle) {
      this.title = newTitle;
    },
  };

  const project = Object.assign(Object.create(methods), props);

  return project;
};

const Note = function (data) {
  const props = {
    ...data,
    id: `ID${Math.random().toString(16).slice(2)}`,
  };

  const methods = {
    setTitle(newTitle) {
      this.title = newTitle;
    },

    setDescription(newDesc) {
      this.description = newDesc;
    },
  };

  const note = Object.assign(Object.create(methods), props);

  return note;
};


/***/ }),

/***/ "./src/views/View.js":
/*!***************************!*\
  !*** ./src/views/View.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const View = (function () {
  let _data;

  function render() {}
  function update(data) {
    const newMarkup = _generateMarkup();
  }

  function _clear(el) {
    el.parentElement.innerHTML = '';
  }

  function _generateMarkup() {}

  function test() {
    console.log('view.js');
  }

  return { test };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/controller.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsYUFBYSxvQ0FBb0M7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsYUFBYSxvQ0FBb0M7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFIQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL1ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBwcmV0dGllci1pZ25vcmUgKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxubWFyZ2luOiAwO1xcbnBhZGRpbmc6IDA7XFxuYm9yZGVyOiAwO1xcbmZvbnQtc2l6ZTogMTAwJTtcXG5mb250OiBpbmhlcml0O1xcbnZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogcHJldHRpZXItaWdub3JlICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5kaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4qIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLXB1cnBsZS0xOiAjOGU1Zjk1O1xcbiAgLS1jb2xvci1wdXJwbGUtMjogIzVmNDA2NDtcXG4gIC0tY29sb3ItcHVycGxlLTM6ICMyZDFlMmY7XFxuICAtLWNvbG9yLXJlZC0xOiAjZmE3YTc1O1xcbiAgLS1jb2xvci1yZWQtMjogI2Y5NTQ0ZTtcXG4gIC0tY29sb3ItcmVkLTM6ICNmNzJjMjU7XFxuICAtLWNvbG9yLXJlZC00OiAjZWMxMDA5O1xcbiAgLS1jb2xvci1yZWQtNTogIzlkMGIwNjtcXG4gIC0tY29sb3IteWVsbG93LTE6ICNmYmQ1ODk7XFxuICAtLWNvbG9yLXllbGxvdy0yOiAjZjljNzYyO1xcbiAgLS1jb2xvci15ZWxsb3ctMzogI2Y3YjMyYjtcXG4gIC0tY29sb3IteWVsbG93LTQ6ICNlY2EwMDk7XFxuICAtLWNvbG9yLXllbGxvdy01OiAjZWNhMDA5O1xcbiAgLS1jb2xvci1ibG9uZC0xOiAjZmNmNmIxO1xcbiAgLS1jb2xvci1ibG9uZC0yOiAjZjhlODNhO1xcbiAgLS1jb2xvci1ibG9uZC0zOiAjNjI1YjA0O1xcbiAgLS1jb2xvci1zZWFmb2FtLTA6ICNlZmZhZjI7XFxuICAtLWNvbG9yLXNlYWZvYW0tMTogI2QwZjFkOTtcXG4gIC0tY29sb3Itc2VhZm9hbS0yOiAjYTllNWJiO1xcbiAgLS1jb2xvci1zZWFmb2FtLTM6ICM4MWQ5OWM7XFxuICAtLWNvbG9yLXNlYWZvYW0tNDogIzYyZDA4MztcXG4gIC0tY29sb3Itc2VhZm9hbS01OiAjNDNjNzZhO1xcbiAgLS1jb2xvci1zZWFmb2FtLTY6ICMxYzVlMzA7XFxuXFxuICAtLWNvbnRhaW5lci1wYWRkaW5nOiA1MHB4O1xcbiAgLS1jb250YWluZXItbWFyZ2luOiAxNXB4O1xcbiAgLS1jb250YWluZXItYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIC0tc2lkZWJhci1nYXA6IDE1cHg7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2VhZm9hbS0wLCAjZTdmM2VhKTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IGNsYW1wKDQ1MHB4LCA5MCUsIDEzMDBweCk7XFxuICBoZWlnaHQ6IGNsYW1wKDMwMHB4LCAxMDAlLCAxMDAwcHgpO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29udGFpbmVyLWJvcmRlci1yYWRpdXMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOXB4IDM4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDE1cHggMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogU0lERUJBUiBTVFlMRVMgKi9cXG5cXG4uc2lkZWJhciB7XFxuICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXItcGFkZGluZyk7XFxuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWNvbnRhaW5lci1wYWRkaW5nKSAvIDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2VhZm9hbS0xKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiBjbGFtcCgxNTBweCwgMzAlLCAzNTBweCk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgdHJhbnNmb3JtOiBza2V3WCgtMTBkZWcpO1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnNpZGViYXItbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2LS10YXNrcyxcXG4ubmF2LS1wcm9qZWN0cyxcXG4ubmF2LS1ub3RlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tc2lkZWJhci1nYXApO1xcbn1cXG5cXG4ubmF2LS10YXNrcyA+ICosXFxuLm5hdi0tcHJvamVjdHMgPiAqLFxcbi5uYXYtLW5vdGVzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi0tdGFza3MgPiAqOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG59XFxuXFxuLyogTUFJTiBDT05UQUlORVIgU1RZTEVTICovXFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lci1wYWRkaW5nKTtcXG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jb250YWluZXItcGFkZGluZykgKyA1cHgpO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLyogIEZPT1RFUiAqL1xcbi8qIEZPT1RFUiAqL1xcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDIuNHJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBjb2xvcjogIzVlNjdhMztcXG59XFxuLmZvb3Rlci1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXItZGVzYyB7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyAnLCAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksXFxuICAgICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuLmZvb3Rlci1saW5rOmxpbmssXFxuLmZvb3Rlci1saW5rOnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICM0MjQ4NzA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0JBQW9CO0FBQ3BCOzs7Ozs7Ozs7Ozs7O0FBYUEsU0FBUztBQUNULFVBQVU7QUFDVixTQUFTO0FBQ1QsZUFBZTtBQUNmLGFBQWE7QUFDYix3QkFBd0I7QUFDeEI7O0FBRUEsb0JBQW9CO0FBQ3BCOztBQUVBLGNBQWM7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsMEJBQTBCOztFQUUxQix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpREFBaUQ7RUFDakQsZ0JBQWdCO0VBQ2hCLDJFQUEyRTtBQUM3RTs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLHFDQUFxQztFQUNyQyw2Q0FBNkM7RUFDN0M7cUNBQ21DO0VBQ25DLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLGlDQUFpQztFQUNqQyxpREFBaUQ7RUFDakQsd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0Isc0RBQXNEO0VBQ3RELHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGtFQUFrRTtFQUNsRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qsc0RBQXNEO0FBQ3hEOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7O0VBR0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUEsMEJBQTBCOztBQUUxQjtFQUNFLGlDQUFpQztFQUNqQyxrREFBa0Q7RUFDbEQsVUFBVTtBQUNaOztBQUVBLFlBQVk7QUFDWixXQUFXO0FBQ1g7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7OEJBQzRCO0VBQzVCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogcHJldHRpZXItaWdub3JlICovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbmJvcmRlcjogMDtcXG5mb250LXNpemU6IDEwMCU7XFxuZm9udDogaW5oZXJpdDtcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuKiB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1wdXJwbGUtMTogIzhlNWY5NTtcXG4gIC0tY29sb3ItcHVycGxlLTI6ICM1ZjQwNjQ7XFxuICAtLWNvbG9yLXB1cnBsZS0zOiAjMmQxZTJmO1xcbiAgLS1jb2xvci1yZWQtMTogI2ZhN2E3NTtcXG4gIC0tY29sb3ItcmVkLTI6ICNmOTU0NGU7XFxuICAtLWNvbG9yLXJlZC0zOiAjZjcyYzI1O1xcbiAgLS1jb2xvci1yZWQtNDogI2VjMTAwOTtcXG4gIC0tY29sb3ItcmVkLTU6ICM5ZDBiMDY7XFxuICAtLWNvbG9yLXllbGxvdy0xOiAjZmJkNTg5O1xcbiAgLS1jb2xvci15ZWxsb3ctMjogI2Y5Yzc2MjtcXG4gIC0tY29sb3IteWVsbG93LTM6ICNmN2IzMmI7XFxuICAtLWNvbG9yLXllbGxvdy00OiAjZWNhMDA5O1xcbiAgLS1jb2xvci15ZWxsb3ctNTogI2VjYTAwOTtcXG4gIC0tY29sb3ItYmxvbmQtMTogI2ZjZjZiMTtcXG4gIC0tY29sb3ItYmxvbmQtMjogI2Y4ZTgzYTtcXG4gIC0tY29sb3ItYmxvbmQtMzogIzYyNWIwNDtcXG4gIC0tY29sb3Itc2VhZm9hbS0wOiAjZWZmYWYyO1xcbiAgLS1jb2xvci1zZWFmb2FtLTE6ICNkMGYxZDk7XFxuICAtLWNvbG9yLXNlYWZvYW0tMjogI2E5ZTViYjtcXG4gIC0tY29sb3Itc2VhZm9hbS0zOiAjODFkOTljO1xcbiAgLS1jb2xvci1zZWFmb2FtLTQ6ICM2MmQwODM7XFxuICAtLWNvbG9yLXNlYWZvYW0tNTogIzQzYzc2YTtcXG4gIC0tY29sb3Itc2VhZm9hbS02OiAjMWM1ZTMwO1xcblxcbiAgLS1jb250YWluZXItcGFkZGluZzogNTBweDtcXG4gIC0tY29udGFpbmVyLW1hcmdpbjogMTVweDtcXG4gIC0tY29udGFpbmVyLWJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAtLXNpZGViYXItZ2FwOiAxNXB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlYWZvYW0tMCwgI2U3ZjNlYSk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiBjbGFtcCg0NTBweCwgOTAlLCAxMzAwcHgpO1xcbiAgaGVpZ2h0OiBjbGFtcCgzMDBweCwgMTAwJSwgMTAwMHB4KTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMTlweCAzOHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxNXB4IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIFNJREVCQVIgU1RZTEVTICovXFxuXFxuLnNpZGViYXIge1xcbiAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyLXBhZGRpbmcpO1xcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1jb250YWluZXItcGFkZGluZykgLyAyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlYWZvYW0tMSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogY2xhbXAoMTUwcHgsIDMwJSwgMzUwcHgpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tY29udGFpbmVyLWJvcmRlci1yYWRpdXMpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tY29udGFpbmVyLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHRyYW5zZm9ybTogc2tld1goLTEwZGVnKTtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5zaWRlYmFyLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdi0tdGFza3MsXFxuLm5hdi0tcHJvamVjdHMsXFxuLm5hdi0tbm90ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLXNpZGViYXItZ2FwKTtcXG59XFxuXFxuLm5hdi0tdGFza3MgPiAqLFxcbi5uYXYtLXByb2plY3RzID4gKixcXG4ubmF2LS1ub3RlcyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYtLXRhc2tzID4gKjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcbi8qIE1BSU4gQ09OVEFJTkVSIFNUWUxFUyAqL1xcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXItcGFkZGluZyk7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tY29udGFpbmVyLXBhZGRpbmcpICsgNXB4KTtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi8qICBGT09URVIgKi9cXG4vKiBGT09URVIgKi9cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAyLjRyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY29sb3I6ICM1ZTY3YTM7XFxufVxcbi5mb290ZXItbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyLWRlc2Mge1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgJywgJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLFxcbiAgICAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcbi5mb290ZXItbGluazpsaW5rLFxcbi5mb290ZXItbGluazp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjNDI0ODcwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy9zcmMvc3R5bGUuY3NzJztcblxuaW1wb3J0ICogYXMgbW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5cbmltcG9ydCBWaWV3IGZyb20gJy4vdmlld3MvVmlldyc7XG5cbmNvbnN0IGNvbnRyb2xUYXNrcyA9IGZ1bmN0aW9uICgpIHt9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuZXhwb3J0IGNvbnN0IHN0YXRlID0gKCgpID0+IHtcbiAgY29uc3QgX3Rhc2tzID0gW107XG4gIGNvbnN0IF9wcm9qZWN0cyA9IFtdO1xuICBjb25zdCBfbm90ZXMgPSBbXTtcblxuICBjb25zdCBfbWF0Y2hUeXBlVG9BcnJheSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgbGV0IGFycmF5T2ZUeXBlO1xuXG4gICAgaWYgKHR5cGUgPT09ICd0YXNrJykge1xuICAgICAgYXJyYXlPZlR5cGUgPSBfdGFza3M7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgIGFycmF5T2ZUeXBlID0gX3Byb2plY3RzO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25vdGUnKSB7XG4gICAgICBhcnJheU9mVHlwZSA9IF9ub3RlcztcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlPZlR5cGU7XG4gIH07XG5cbiAgY29uc3QgYWRkSXRlbSA9IChpdGVtLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgdHlwZUFycmF5ID0gX21hdGNoVHlwZVRvQXJyYXkodHlwZSk7XG5cbiAgICB0eXBlQXJyYXkucHVzaChpdGVtKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVJdGVtID0gKGl0ZW0sIHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlQXJyYXkgPSBfbWF0Y2hUeXBlVG9BcnJheSh0eXBlKTtcblxuICAgIGNvbnN0IGluZGV4ID0gdHlwZUFycmF5LmZpbmRJbmRleCgoaSkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XG5cbiAgICB0eXBlQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICBjb25zdCBwZXJzaXN0VG9Mb2NhbFN0b3JhZ2UgPSAodHlwZSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3R5cGV9c2AsIEpTT04uc3RyaW5naWZ5KF9tYXRjaFR5cGVUb0FycmF5KHR5cGUpKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiBfdGFza3M7XG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gX3Byb2plY3RzO1xuICBjb25zdCBnZXROb3RlcyA9ICgpID0+IF9ub3RlcztcblxuICByZXR1cm4ge1xuICAgIGFkZEl0ZW0sXG4gICAgZGVsZXRlSXRlbSxcbiAgICBwZXJzaXN0VG9Mb2NhbFN0b3JhZ2UsXG4gICAgZ2V0Tm90ZXMsXG4gICAgZ2V0UHJvamVjdHMsXG4gICAgZ2V0VGFza3MsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgVGFzayA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGNvbnN0IHByb3BzID0ge1xuICAgIC4uLmRhdGEsXG4gICAgaWQ6IGBJRCR7TWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMil9YCxcbiAgfTtcblxuICBjb25zdCBtZXRob2RzID0ge1xuICAgIHNldFRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgfSxcblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2MpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjO1xuICAgIH0sXG5cbiAgICBzZXREYXRlKG5ld0RhdGUpIHtcbiAgICAgIHRoaXMuZGF0ZSA9IG5ld0RhdGU7XG4gICAgfSxcblxuICAgIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfSxcblxuICAgIHNldFByb2plY3QobmV3UHJvamVjdCkge1xuICAgICAgdGhpcy5wcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHRhc2sgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobWV0aG9kcyksIHByb3BzKTtcblxuICByZXR1cm4gdGFzaztcbn07XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgLi4uZGF0YSxcbiAgICBpZDogYElEJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKX1gLFxuICB9O1xuXG4gIGNvbnN0IG1ldGhvZHMgPSB7XG4gICAgc2V0VGl0bGUobmV3VGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHByb2plY3QgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobWV0aG9kcyksIHByb3BzKTtcblxuICByZXR1cm4gcHJvamVjdDtcbn07XG5cbmV4cG9ydCBjb25zdCBOb3RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgLi4uZGF0YSxcbiAgICBpZDogYElEJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKX1gLFxuICB9O1xuXG4gIGNvbnN0IG1ldGhvZHMgPSB7XG4gICAgc2V0VGl0bGUobmV3VGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9LFxuXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzYykge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBub3RlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG1ldGhvZHMpLCBwcm9wcyk7XG5cbiAgcmV0dXJuIG5vdGU7XG59O1xuIiwiY29uc3QgVmlldyA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBfZGF0YTtcblxuICBmdW5jdGlvbiByZW5kZXIoKSB7fVxuICBmdW5jdGlvbiB1cGRhdGUoZGF0YSkge1xuICAgIGNvbnN0IG5ld01hcmt1cCA9IF9nZW5lcmF0ZU1hcmt1cCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NsZWFyKGVsKSB7XG4gICAgZWwucGFyZW50RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZW5lcmF0ZU1hcmt1cCgpIHt9XG5cbiAgZnVuY3Rpb24gdGVzdCgpIHtcbiAgICBjb25zb2xlLmxvZygndmlldy5qcycpO1xuICB9XG5cbiAgcmV0dXJuIHsgdGVzdCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVmlldztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==