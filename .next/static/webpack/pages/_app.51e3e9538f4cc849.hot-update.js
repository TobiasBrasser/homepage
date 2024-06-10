"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.module.css */ \"./components/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Navbar() {\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (menuOpen) {\n            document.body.style.overflow = \"hidden\";\n        } else {\n            document.body.style.overflow = \"auto\";\n        }\n    }, [\n        menuOpen\n    ]);\n    const toggleMenu = ()=>{\n        setMenuOpen(!menuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().all),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().leftSide),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().burger), \" \").concat(menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().open) : \"\"),\n                                onClick: toggleMenu,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                                src: \"./logo.png\",\n                                alt: \"Logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().rightSide),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        href: \"/\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        href: \"/about\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        href: \"/projekte\",\n                                        children: \"Projekte\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        href: \"/hobbies\",\n                                        children: \"Hobbies\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        href: \"/hobbies\",\n                                        children: \"Dokumente\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainContent), \" \").concat(menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().blurred) : \"\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"\".concat(menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_open) : (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_closed)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_mobile),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                            src: \"./logo.png\",\n                            alt: \"Logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                href: \"/projekte\",\n                                children: \"Projekte\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                href: \"/hobbies\",\n                                children: \"Hobbies\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().overlay), \" \").concat(menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().visible) : \"\"),\n                onClick: toggleMenu\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                lineNumber: 74,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Navbar, \"YpXa3kgiBOFhFYWp8S78i7Nbdv8=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU0xRHpCLDBCQUFZLDhEQUFDTztnQkFBSUMsV0FBVyxHQUFxQlIsT0FBbEJGLG1FQUFjLEVBQUMsS0FBa0MsT0FBL0JFLFdBQVdGLG1FQUFjLEdBQUc7Z0JBQU1lLFNBQVNQOzs7Ozs7OztBQUduRztHQXhFU1A7S0FBQUE7QUEwRVQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtZW51T3Blbikge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgfVxyXG4gIH0sIFttZW51T3Blbl0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0TWVudU9wZW4oIW1lbnVPcGVuKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5hbGx9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubGVmdFNpZGV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1N0eWxlcy5idXJnZXJ9ICR7bWVudU9wZW4gPyBTdHlsZXMub3BlbiA6ICcnfWB9IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17U3R5bGVzLmxvZ299IHNyYz0nLi9sb2dvLnBuZycgYWx0PVwiTG9nb1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e1N0eWxlcy5yaWdodFNpZGV9PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bH0+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGl9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saV9hfSBocmVmPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX2xpfT5cclxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGlfYX0gaHJlZj1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX2xpfT5cclxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGlfYX0gaHJlZj1cIi9wcm9qZWt0ZVwiPlByb2pla3RlPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPiBcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX2xpX2F9IGhyZWY9XCIvaG9iYmllc1wiPkhvYmJpZXM8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGl9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saV9hfSBocmVmPVwiL2hvYmJpZXNcIj5Eb2t1bWVudGU8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZXMubWFpbkNvbnRlbnR9ICR7bWVudU9wZW4gPyBTdHlsZXMuYmx1cnJlZCA6ICcnfWB9PlxyXG4gICAgICAgIHsvKiBIYXVwdGluaGFsdCBkZXIgU2VpdGUgKi99XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake21lbnVPcGVuID8gU3R5bGVzLm5hdl9vcGVuIDogU3R5bGVzLm5hdl9jbG9zZWR9YH0+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9tb2JpbGV9PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtTdHlsZXMubG9nb30gc3JjPVwiLi9sb2dvLnBuZ1wiIGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saV9hfSBocmVmPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saV9hfSBocmVmPVwiL3Byb2pla3RlXCI+UHJvamVrdGU8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saX0+IFxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGlfYX0gaHJlZj1cIi9ob2JiaWVzXCI+SG9iYmllczwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAge21lbnVPcGVuICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZXMub3ZlcmxheX0gJHttZW51T3BlbiA/IFN0eWxlcy52aXNpYmxlIDogJyd9YH0gb25DbGljaz17dG9nZ2xlTWVudX0+PC9kaXY+fVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJTdHlsZXMiLCJOYXZiYXIiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInRvZ2dsZU1lbnUiLCJkaXYiLCJjbGFzc05hbWUiLCJhbGwiLCJsZWZ0U2lkZSIsImJ1cmdlciIsIm9wZW4iLCJvbkNsaWNrIiwiaW1nIiwibG9nbyIsInNyYyIsImFsdCIsIm5hdiIsInJpZ2h0U2lkZSIsInVsIiwibmF2X3VsIiwibGkiLCJuYXZfdWxfbGkiLCJuYXZfdWxfbGlfYSIsImhyZWYiLCJtYWluQ29udGVudCIsImJsdXJyZWQiLCJuYXZfb3BlbiIsIm5hdl9jbG9zZWQiLCJuYXZfdWxfbW9iaWxlIiwib3ZlcmxheSIsInZpc2libGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});