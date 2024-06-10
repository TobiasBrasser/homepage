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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.module.css */ \"./components/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Navbar() {\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (menuOpen) {\n            document.body.style.overflow = \"hidden\";\n        } else {\n            document.body.style.overflow = \"auto\";\n        }\n    }, [\n        menuOpen\n    ]);\n    const toggleMenu = ()=>{\n        setMenuOpen(!menuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().all),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().leftSide),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().burger), \" \").concat(menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().open) : \"\"),\n                                onClick: toggleMenu,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                                src: \"./logo.png\",\n                                alt: \"Logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().rightSide),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        href: \"/\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        href: \"/about\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        href: \"/projekte\",\n                                        children: \"Projekte\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        href: \"/hobbies\",\n                                        children: \"Hobbies\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"{\",\n                                            src: \"./lock.png\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                            href: \"/dokumente\",\n                                            children: \"Dokumente\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainContent), \" \").concat(menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().blurred) : \"\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"\".concat(menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_open) : (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_closed)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_mobile),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                            src: \"./logo.png\",\n                            alt: \"Logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                href: \"/projekte\",\n                                children: \"Projekte\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                href: \"/hobbies\",\n                                children: \"Hobbies\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                href: \"/dokumente\",\n                                children: \"Dokumente\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().overlay), \" \").concat(menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().visible) : \"\"),\n                onClick: toggleMenu\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                lineNumber: 76,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Navbar, \"YpXa3kgiBOFhFYWp8S78i7Nbdv8=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUNZO0FBRXpDLFNBQVNLOztJQUNQLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUixJQUFJSSxVQUFVO1lBQ1pFLFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUc7UUFDakMsT0FBTztZQUNMSCxTQUFTQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHO1FBQ2pDO0lBQ0YsR0FBRztRQUFDTDtLQUFTO0lBRWIsTUFBTU0sYUFBYTtRQUNqQkwsWUFBWSxDQUFDRDtJQUNmO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDTztnQkFBSUMsV0FBV1YsK0RBQVU7O2tDQUN4Qiw4REFBQ1M7d0JBQUlDLFdBQVdWLG9FQUFlOzswQ0FDN0IsOERBQUNTO2dDQUFJQyxXQUFXLEdBQW9CUixPQUFqQkYsa0VBQWEsRUFBQyxLQUErQixPQUE1QkUsV0FBV0YsZ0VBQVcsR0FBRztnQ0FBTWUsU0FBU1A7O2tEQUMxRSw4REFBQ0M7Ozs7O2tEQUNELDhEQUFDQTs7Ozs7a0RBQ0QsOERBQUNBOzs7Ozs7Ozs7OzswQ0FFSCw4REFBQ087Z0NBQUlOLFdBQVdWLGdFQUFXO2dDQUFFa0IsS0FBSTtnQ0FBYUMsS0FBSTs7Ozs7Ozs7Ozs7O2tDQUdwRCw4REFBQ0M7d0JBQUlWLFdBQVdWLHFFQUFnQjtrQ0FDOUIsNEVBQUNzQjs0QkFBR1osV0FBV1Ysa0VBQWE7OzhDQUMxQiw4REFBQ3dCO29DQUFHZCxXQUFXVixxRUFBZ0I7OENBQzdCLDRFQUFDRCxrREFBSUE7d0NBQUNXLFdBQVdWLHVFQUFrQjt3Q0FBRTJCLE1BQUs7a0RBQUk7Ozs7Ozs7Ozs7OzhDQUVoRCw4REFBQ0g7b0NBQUdkLFdBQVdWLHFFQUFnQjs4Q0FDN0IsNEVBQUNELGtEQUFJQTt3Q0FBQ1csV0FBV1YsdUVBQWtCO3dDQUFFMkIsTUFBSztrREFBUzs7Ozs7Ozs7Ozs7OENBRXJELDhEQUFDSDtvQ0FBR2QsV0FBV1YscUVBQWdCOzhDQUM3Qiw0RUFBQ0Qsa0RBQUlBO3dDQUFDVyxXQUFXVix1RUFBa0I7d0NBQUUyQixNQUFLO2tEQUFZOzs7Ozs7Ozs7Ozs4Q0FFeEQsOERBQUNIO29DQUFHZCxXQUFXVixxRUFBZ0I7OENBQzdCLDRFQUFDRCxrREFBSUE7d0NBQUNXLFdBQVdWLHVFQUFrQjt3Q0FBRTJCLE1BQUs7a0RBQVc7Ozs7Ozs7Ozs7OzhDQUV2RCw4REFBQ0g7b0NBQUdkLFdBQVdWLHFFQUFnQjs7c0RBQzdCLDhEQUFDZ0I7NENBQUlOLFdBQVU7NENBQUlRLEtBQUk7Ozs7OztzREFDdkIsOERBQUNuQixrREFBSUE7NENBQUNXLFdBQVdWLHVFQUFrQjs0Q0FBRTJCLE1BQUs7c0RBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU0vRCw4REFBQ2xCO2dCQUFJQyxXQUFXLEdBQXlCUixPQUF0QkYsdUVBQWtCLEVBQUMsS0FBa0MsT0FBL0JFLFdBQVdGLG1FQUFjLEdBQUc7Ozs7OzswQkFJckUsOERBQUNvQjtnQkFBSVYsV0FBVyxHQUFrRCxPQUEvQ1IsV0FBV0Ysb0VBQWUsR0FBR0Esc0VBQWlCOzBCQUMvRCw0RUFBQ3NCO29CQUFHWixXQUFXVix5RUFBb0I7O3NDQUNuQyw4REFBQ2dCOzRCQUFJTixXQUFXVixnRUFBVzs0QkFBRWtCLEtBQUk7NEJBQWFDLEtBQUk7Ozs7OztzQ0FDaEQsOERBQUNLOzRCQUFHZCxXQUFXVixxRUFBZ0I7c0NBQzdCLDRFQUFDRCxrREFBSUE7Z0NBQUNXLFdBQVdWLHVFQUFrQjtnQ0FBRTJCLE1BQUs7MENBQUk7Ozs7Ozs7Ozs7O3NDQUVoRCw4REFBQ0g7NEJBQUdkLFdBQVdWLHFFQUFnQjtzQ0FDN0IsNEVBQUNELGtEQUFJQTtnQ0FBQ1csV0FBV1YsdUVBQWtCO2dDQUFFMkIsTUFBSzswQ0FBWTs7Ozs7Ozs7Ozs7c0NBRXhELDhEQUFDSDs0QkFBR2QsV0FBV1YscUVBQWdCO3NDQUM3Qiw0RUFBQ0Qsa0RBQUlBO2dDQUFDVyxXQUFXVix1RUFBa0I7Z0NBQUUyQixNQUFLOzBDQUFXOzs7Ozs7Ozs7OztzQ0FFdkQsOERBQUNIOzRCQUFHZCxXQUFXVixxRUFBZ0I7c0NBQzNCLDRFQUFDRCxrREFBSUE7Z0NBQUNXLFdBQVdWLHVFQUFrQjtnQ0FBRTJCLE1BQUs7MENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLOUR6QiwwQkFBWSw4REFBQ087Z0JBQUlDLFdBQVcsR0FBcUJSLE9BQWxCRixtRUFBYyxFQUFDLEtBQWtDLE9BQS9CRSxXQUFXRixtRUFBYyxHQUFHO2dCQUFNZSxTQUFTUDs7Ozs7Ozs7QUFHbkc7R0ExRVNQO0tBQUFBO0FBNEVULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzP2ZiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9OYXZiYXIubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWVudU9wZW4pIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgIH1cclxuICB9LCBbbWVudU9wZW5dKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldE1lbnVPcGVuKCFtZW51T3Blbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuYWxsfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmxlZnRTaWRlfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZXMuYnVyZ2VyfSAke21lbnVPcGVuID8gU3R5bGVzLm9wZW4gOiAnJ31gfSBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e1N0eWxlcy5sb2dvfSBzcmM9Jy4vbG9nby5wbmcnIGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtTdHlsZXMucmlnaHRTaWRlfT5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWx9PlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX2xpfT5cclxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGlfYX0gaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPiBcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX2xpX2F9IGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX2xpX2F9IGhyZWY9XCIvcHJvamVrdGVcIj5Qcm9qZWt0ZTwvTGluaz5cclxuICAgICAgICAgICAgPC9saT4gXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGl9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saV9hfSBocmVmPVwiL2hvYmJpZXNcIj5Ib2JiaWVzPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX2xpfT5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIntcIiBzcmM9XCIuL2xvY2sucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX2xpX2F9IGhyZWY9XCIvZG9rdW1lbnRlXCI+RG9rdW1lbnRlPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7U3R5bGVzLm1haW5Db250ZW50fSAke21lbnVPcGVuID8gU3R5bGVzLmJsdXJyZWQgOiAnJ31gfT5cclxuICAgICAgICB7LyogSGF1cHRpbmhhbHQgZGVyIFNlaXRlICovfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgJHttZW51T3BlbiA/IFN0eWxlcy5uYXZfb3BlbiA6IFN0eWxlcy5uYXZfY2xvc2VkfWB9PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbW9iaWxlfT5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17U3R5bGVzLmxvZ299IHNyYz1cIi4vbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGl9PlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGlfYX0gaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGl9PlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGlfYX0gaHJlZj1cIi9wcm9qZWt0ZVwiPlByb2pla3RlPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGl9PiBcclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX2xpX2F9IGhyZWY9XCIvaG9iYmllc1wiPkhvYmJpZXM8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX2xpX2F9IGhyZWY9XCIvZG9rdW1lbnRlXCI+RG9rdW1lbnRlPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIHttZW51T3BlbiAmJiA8ZGl2IGNsYXNzTmFtZT17YCR7U3R5bGVzLm92ZXJsYXl9ICR7bWVudU9wZW4gPyBTdHlsZXMudmlzaWJsZSA6ICcnfWB9IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PjwvZGl2Pn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiU3R5bGVzIiwiTmF2YmFyIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJ0b2dnbGVNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiYWxsIiwibGVmdFNpZGUiLCJidXJnZXIiLCJvcGVuIiwib25DbGljayIsImltZyIsImxvZ28iLCJzcmMiLCJhbHQiLCJuYXYiLCJyaWdodFNpZGUiLCJ1bCIsIm5hdl91bCIsImxpIiwibmF2X3VsX2xpIiwibmF2X3VsX2xpX2EiLCJocmVmIiwibWFpbkNvbnRlbnQiLCJibHVycmVkIiwibmF2X29wZW4iLCJuYXZfY2xvc2VkIiwibmF2X3VsX21vYmlsZSIsIm92ZXJsYXkiLCJ2aXNpYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});