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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homeFunction)\n/* harmony export */ });\nfunction homeFunction() {\r\n  const content = document.querySelector(\"#content\");\r\n\r\n  // ----------------------NAVBAR-----------------------------\r\n  const navBar = document.createElement(\"div\");\r\n  const brand = document.createElement(\"div\");\r\n  const moonIcon = document.createElement(\"i\");\r\n  const tabs = document.createElement(\"div\");\r\n  const tabItem1 = document.createElement(\"div\");\r\n  const tabItem2 = document.createElement(\"div\");\r\n  const tabItem3 = document.createElement(\"div\");\r\n\r\n  navBar.classList.add(\"navbar\");\r\n  brand.classList.add(\"brand\");\r\n  moonIcon.classList.add(\"bi\", \"bi-moon-fill\");\r\n  tabs.classList.add(\"tabs\");\r\n  tabItem1.classList.add(\"tab-item\");\r\n  tabItem2.classList.add(\"tab-item\");\r\n  tabItem3.classList.add(\"tab-item\");\r\n\r\n  brand.textContent = \"MoonLight \";\r\n  tabItem1.textContent = \"Home\";\r\n  tabItem2.textContent = \"Menu\";\r\n  tabItem3.textContent = \"Contact\";\r\n\r\n  tabs.append(tabItem1, tabItem2, tabItem3);\r\n  brand.appendChild(moonIcon);\r\n  navBar.append(brand, tabs);\r\n  content.appendChild(navBar);\r\n\r\n  // --------------------SLOGAN SECTION ------------------------------\r\n  const sloganSection = document.createElement(\"div\");\r\n  const slogan = document.createElement(\"div\");\r\n  const img = document.createElement(\"img\");\r\n\r\n  slogan.textContent =\r\n    \" Everyone should believe in something. I believe I will have another coffee\";\r\n  img.setAttribute(\"src\", \"../src/assets/omid-armin-1UKx5_hhFLA-unsplash.jpg\");\r\n  img.setAttribute(\"alt\", \"coffee-image\");\r\n\r\n  sloganSection.classList.add(\"slogan-section\");\r\n  slogan.classList.add(\"slogan\");\r\n  img.classList.add(\"coffee-img\");\r\n\r\n  content.appendChild(sloganSection);\r\n  sloganSection.append(slogan);\r\n  sloganSection.append(img);\r\n\r\n  // ----------------------TIMING SECTION ------------------------------\r\n\r\n  const timingSection = document.createElement(\"div\");\r\n  const timingHeading = document.createElement(\"h2\");\r\n  const clockIcon = document.createElement(\"i\");\r\n  const timingGrid = document.createElement(\"div\");\r\n  const gridItem1 = document.createElement(\"div\");\r\n  const gridItem2 = document.createElement(\"div\");\r\n  const gridItem3 = document.createElement(\"div\");\r\n  const gridItem4 = document.createElement(\"div\");\r\n  const gridItem5 = document.createElement(\"div\");\r\n  const gridItem6 = document.createElement(\"div\");\r\n  const gridItem7 = document.createElement(\"div\");\r\n\r\n  timingHeading.textContent = \"Timings \";\r\n  gridItem1.textContent = \"Sunday: 8am - 8pm\";\r\n  gridItem2.textContent = \"Monday: 6am - 6pm\";\r\n  gridItem3.textContent = \"Tuesday: 6am - 6pm\";\r\n  gridItem4.textContent = \"Wednesday: 6am - 6pm\";\r\n  gridItem5.textContent = \"Thursday: 6am - 10pm\";\r\n  gridItem6.textContent = \"Friday: 6am - 10pm\";\r\n  gridItem7.textContent = \"Saturday: 8am - 10pm\";\r\n\r\n  timingSection.classList.add(\"timing-section\");\r\n  timingHeading.classList.add(\"timing-heading\");\r\n  timingGrid.classList.add(\"timing-grid\");\r\n  clockIcon.classList.add(\"bi\", \"bi-alarm-fill\");\r\n\r\n  gridItem1.classList.add(\"grid-item\");\r\n  gridItem2.classList.add(\"grid-item\");\r\n  gridItem3.classList.add(\"grid-item\");\r\n  gridItem4.classList.add(\"grid-item\");\r\n  gridItem5.classList.add(\"grid-item\");\r\n  gridItem6.classList.add(\"grid-item\");\r\n  gridItem7.classList.add(\"grid-item\");\r\n\r\n  timingHeading.append(clockIcon);\r\n  timingGrid.append(gridItem1);\r\n  timingGrid.append(gridItem2);\r\n  timingGrid.append(gridItem3);\r\n  timingGrid.append(gridItem4);\r\n  timingGrid.append(gridItem5);\r\n  timingGrid.append(gridItem6);\r\n  timingGrid.append(gridItem7);\r\n\r\n  timingSection.appendChild(timingHeading);\r\n  timingSection.appendChild(timingGrid);\r\n\r\n  content.appendChild(timingSection);\r\n\r\n  // -------------------------FOOTER-------------------------------\r\n  const footer = document.createElement(\"div\");\r\n  const anchorTag = document.createElement(\"a\");\r\n  const gitIcon = document.createElement(\"i\");\r\n\r\n  footer.textContent = \"Made by Rajat \";\r\n  anchorTag.setAttribute(\"target\", \"blank\");\r\n  anchorTag.setAttribute(\"href\", \"https://github.com/rajat4984\");\r\n\r\n  footer.classList.add(\"footer\");\r\n  gitIcon.classList.add(\"bi\", \"bi-github\");\r\n\r\n  footer.appendChild(anchorTag);\r\n  footer.appendChild(gitIcon);\r\n\r\n  content.appendChild(footer);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

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