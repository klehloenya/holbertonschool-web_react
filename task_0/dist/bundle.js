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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\n// Create student objects and store them in an array\nconst student1 = {\n    firstName: 'John',\n    lastName: 'Doe',\n    age: 25,\n    location: 'New York',\n};\nconst student2 = {\n    firstName: 'Jane',\n    lastName: 'Smith',\n    age: 22,\n    location: 'San Francisco',\n};\nconst studentsList = [student1, student2];\n// Render the table using Vanilla JavaScript\nconst renderTable = (students) => {\n    const table = document.createElement('table');\n    const tbody = document.createElement('tbody');\n    students.forEach((student) => {\n        const row = document.createElement('tr');\n        const firstNameCell = document.createElement('td');\n        const locationCell = document.createElement('td');\n        firstNameCell.textContent = student.firstName;\n        locationCell.textContent = student.location;\n        row.appendChild(firstNameCell);\n        row.appendChild(locationCell);\n        tbody.appendChild(row);\n    });\n    table.appendChild(tbody);\n    document.body.appendChild(table);\n};\n// Render the table with the studentsList\nrenderTable(studentsList);\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;