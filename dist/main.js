/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n\r\n\r\n(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homeFunction)\n/* harmony export */ });\nfunction homeFunction() {\r\n  const content = document.querySelector(\"#content\")\r\n\r\n//   const navBar = document.createElement(\"div\");\r\n//   const brand = document.createElement(\"div\");\r\n//   const moonIcon = document.createElement(\"i\")\r\n//   const tabs = document.createElement(\"div\");\r\n//   const tabItem1= document.createElement(\"div\");\r\n//   const tabItem2 = document.createElement(\"div\");\r\n//   const tabItem3 = document.createElement(\"div\");\r\n\r\n//   navBar.classList.add(\"navbar\");\r\n//   brand.classList.add(\"brand\")\r\n//   moonIcon.classList.add(\"bi\",\"bi-moon-fill\")\r\n//   tabs.classList.add(\"tabs\")\r\n//   tabItem1.classList.add(\"tab-item\")\r\n//   tabItem2.classList.add(\"tab-item\")\r\n//   tabItem3.classList.add(\"tab-item\")\r\n\r\n//   tabs.append(tabItem1,tabItem2,tabItem3)\r\n//   navBar.append(brand,tabs)\r\n//   content.appendChild(navBar)\r\n\r\n}\r\n\r\n{\r\n  /* <div class=\"navbar\">\r\n<div class=\"brand\">MoonLight <i class=\"bi bi-moon-fill\"></i></div>\r\n<div class=\"tabs\">\r\n  <div class=\"tab-item\">Home</div>\r\n  <div class=\"tab-item\">Contact</div>\r\n  <div class=\"tab-item\">Menu</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"header\">\r\n<h1>MoonLight</h1>\r\n<h3>Lights your coffee</h3>\r\n</div>\r\n\r\n<div class=\"slogan-section\">\r\n<p class=\"slogan\">\r\n  Everyone should believe in something. I believe I will have another\r\n  coffee.\r\n</p>\r\n<div class=\"coffee-image\">\r\n  <img src=\"../src/omid-armin-1UKx5_hhFLA-unsplash.jpg\" alt=\"\" />\r\n</div>\r\n</div>\r\n\r\n<div class=\"timming-section\">\r\n  <div class=\"timming-grid\">\r\n      <div class=\"grid-item\">Sunday: 8am - 8pm</div>\r\n      <div class=\"grid-item\">Monday: 6am - 6pm</div>\r\n      <div class=\"grid-item\">Tuesday: 6am - 6pm</div>\r\n      <div class=\"grid-item\">Wednesday: 6am - 6pm</div>\r\n      <div class=\"grid-item\">Thursday: 6am - 10pm</div>\r\n      <div class=\"grid-item\">Friday: 6am - 10pm</div>\r\n      <div class=\"grid-item\">Saturday: 8am - 10pm</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"location-section\">\r\n  124,New Delhi,India\r\n</div> */\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;