"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CustomScrollbar.js":
/*!***************************************!*\
  !*** ./components/CustomScrollbar.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars-2 */ \"./node_modules/react-custom-scrollbars-2/lib/index.js\");\n\n\n\nconst CustomScrollbarComponent = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: \"300px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_2__.Scrollbars, {\n            style: {\n                width: \"100%\",\n                height: \"100%\"\n            },\n            renderThumbVertical: (param)=>{\n                let { style, ...props } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ...props,\n                    style: {\n                        ...style,\n                        backgroundColor: \"#888\",\n                        borderRadius: \"10px\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\frontend\\\\components\\\\CustomScrollbar.js\",\n                    lineNumber: 10,\n                    columnNumber: 21\n                }, void 0);\n            },\n            renderTrackVertical: (param)=>{\n                let { style, ...props } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ...props,\n                    style: {\n                        ...style,\n                        right: \"2px\",\n                        bottom: \"2px\",\n                        top: \"2px\",\n                        borderRadius: \"10px\",\n                        backgroundColor: \"#f1f1f1\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\frontend\\\\components\\\\CustomScrollbar.js\",\n                    lineNumber: 13,\n                    columnNumber: 21\n                }, void 0);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\frontend\\\\components\\\\CustomScrollbar.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\frontend\\\\components\\\\CustomScrollbar.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, undefined);\n};\n_c = CustomScrollbarComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomScrollbarComponent);\nvar _c;\n$RefreshReg$(_c, \"CustomScrollbarComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbVNjcm9sbGJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQzZCO0FBRXZELE1BQU1FLDJCQUEyQjtJQUM3QixxQkFDSSw4REFBQ0M7UUFBSUMsT0FBTztZQUFFQyxRQUFRO1FBQVE7a0JBQzFCLDRFQUFDSixpRUFBVUE7WUFDUEcsT0FBTztnQkFBRUUsT0FBTztnQkFBUUQsUUFBUTtZQUFPO1lBQ3ZDRSxxQkFBcUI7b0JBQUMsRUFBRUgsS0FBSyxFQUFFLEdBQUdJLE9BQU87cUNBQ3JDLDhEQUFDTDtvQkFBSyxHQUFHSyxLQUFLO29CQUFFSixPQUFPO3dCQUFFLEdBQUdBLEtBQUs7d0JBQUVLLGlCQUFpQjt3QkFBUUMsY0FBYztvQkFBTzs7Ozs7OztZQUVyRkMscUJBQXFCO29CQUFDLEVBQUVQLEtBQUssRUFBRSxHQUFHSSxPQUFPO3FDQUNyQyw4REFBQ0w7b0JBQUssR0FBR0ssS0FBSztvQkFBRUosT0FBTzt3QkFBRSxHQUFHQSxLQUFLO3dCQUFFUSxPQUFPO3dCQUFPQyxRQUFRO3dCQUFPQyxLQUFLO3dCQUFPSixjQUFjO3dCQUFRRCxpQkFBaUI7b0JBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpKO0tBZk1QO0FBaUJOLCtEQUFlQSx3QkFBd0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21TY3JvbGxiYXIuanM/ZjVhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMtMic7XHJcblxyXG5jb25zdCBDdXN0b21TY3JvbGxiYXJDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2Nyb2xsYmFyc1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIHJlbmRlclRodW1iVmVydGljYWw9eyh7IHN0eWxlLCAuLi5wcm9wcyB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgey4uLnByb3BzfSBzdHlsZT17eyAuLi5zdHlsZSwgYmFja2dyb3VuZENvbG9yOiAnIzg4OCcsIGJvcmRlclJhZGl1czogJzEwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUcmFja1ZlcnRpY2FsPXsoeyBzdHlsZSwgLi4ucHJvcHMgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHsuLi5wcm9wc30gc3R5bGU9e3sgLi4uc3R5bGUsIHJpZ2h0OiAnMnB4JywgYm90dG9tOiAnMnB4JywgdG9wOiAnMnB4JywgYm9yZGVyUmFkaXVzOiAnMTBweCcsIGJhY2tncm91bmRDb2xvcjogJyNmMWYxZjEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9TY3JvbGxiYXJzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNjcm9sbGJhckNvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2Nyb2xsYmFycyIsIkN1c3RvbVNjcm9sbGJhckNvbXBvbmVudCIsImRpdiIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJyZW5kZXJUaHVtYlZlcnRpY2FsIiwicHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJyZW5kZXJUcmFja1ZlcnRpY2FsIiwicmlnaHQiLCJib3R0b20iLCJ0b3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CustomScrollbar.js\n"));

/***/ })

});