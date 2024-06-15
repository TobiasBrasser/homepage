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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.module.css */ \"./components/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { isAuthenticated } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.AuthContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleDocumentsClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{\n        e.preventDefault();\n        if (!isAuthenticated) {\n            router.push(\"/dokumente\");\n        } else {\n            router.push(\"/login\");\n        }\n    }, [\n        isAuthenticated,\n        router\n    ]);\n    const toggleMenu = ()=>{\n        setMenuOpen(!menuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().all),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().leftSide),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().burger), \" \").concat(menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().open) : \"\"),\n                                onClick: toggleMenu,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                                src: \"./logo.png\",\n                                alt: \"Logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().rightSide),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        href: \"/\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        href: \"/about\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        href: \"/projekte\",\n                                        children: \"Projekte\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        href: \"/hobbies\",\n                                        children: \"Hobbies\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: handleDocumentsClick,\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                        children: \"\\uD83D\\uDD12 Dokumente\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainContent), \" \").concat(menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().blurred) : \"\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"\".concat(menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_open) : (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_closed)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_mobile),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().logoflyout),\n                            src: \"./logo.png\",\n                            alt: \"Logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                href: \"/about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                href: \"/projekte\",\n                                children: \"Projekte\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                href: \"/hobbies\",\n                                children: \"Hobbies\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: handleDocumentsClick,\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_ul_li_a),\n                                children: \"\\uD83D\\uDD12 Dokumente\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().overlay), \" \").concat(menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().visible) : \"\"),\n                onClick: toggleMenu\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\components\\\\Navbar.js\",\n                lineNumber: 86,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Navbar, \"TJHFI/8mu8x0zqIJ41uIeXcqJko=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7c0NBRXJELDhEQUFDSDs0QkFBR2QsV0FBV2QscUVBQWdCO3NDQUM3Qiw0RUFBQ0Qsa0RBQUlBO2dDQUFDZSxXQUFXZCx1RUFBa0I7Z0NBQUUrQixNQUFLOzBDQUFZOzs7Ozs7Ozs7OztzQ0FFeEQsOERBQUNIOzRCQUFHZCxXQUFXZCxxRUFBZ0I7c0NBQzdCLDRFQUFDRCxrREFBSUE7Z0NBQUNlLFdBQVdkLHVFQUFrQjtnQ0FBRStCLE1BQUs7MENBQVc7Ozs7Ozs7Ozs7O3NDQUV2RCw4REFBQ0g7NEJBQUdkLFdBQVdkLHFFQUFnQjtzQ0FDN0IsNEVBQUNnQztnQ0FBRWIsU0FBU1g7Z0NBQXNCTSxXQUFXZCx1RUFBa0I7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLdEVJLDBCQUFZLDhEQUFDUztnQkFBSUMsV0FBVyxHQUFxQlYsT0FBbEJKLG1FQUFjLEVBQUMsS0FBa0MsT0FBL0JJLFdBQVdKLG1FQUFjLEdBQUc7Z0JBQU1tQixTQUFTUDs7Ozs7Ozs7QUFHbkc7R0FsRlNUOztRQUdRRixrREFBU0E7OztLQUhqQkU7QUFvRlQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEb2N1bWVudHNDbGljayA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZG9rdW1lbnRlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2lzQXV0aGVudGljYXRlZCwgcm91dGVyXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRNZW51T3BlbighbWVudU9wZW4pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmFsbH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5sZWZ0U2lkZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7U3R5bGVzLmJ1cmdlcn0gJHttZW51T3BlbiA/IFN0eWxlcy5vcGVuIDogJyd9YH0gb25DbGljaz17dG9nZ2xlTWVudX0+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtTdHlsZXMubG9nb30gc3JjPScuL2xvZ28ucG5nJyBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17U3R5bGVzLnJpZ2h0U2lkZX0+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsfT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX2xpX2F9IGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgPC9saT4gXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGl9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saV9hfSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGl9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saV9hfSBocmVmPVwiL3Byb2pla3RlXCI+UHJvamVrdGU8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX2xpfT5cclxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGlfYX0gaHJlZj1cIi9ob2JiaWVzXCI+SG9iYmllczwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saX0+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlRG9jdW1lbnRzQ2xpY2t9IGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saV9hfT7wn5SSIERva3VtZW50ZTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1N0eWxlcy5tYWluQ29udGVudH0gJHttZW51T3BlbiA/IFN0eWxlcy5ibHVycmVkIDogJyd9YH0+XHJcbiAgICAgICAgey8qIEhhdXB0aW5oYWx0IGRlciBTZWl0ZSAqL31cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17YCR7bWVudU9wZW4gPyBTdHlsZXMubmF2X29wZW4gOiBTdHlsZXMubmF2X2Nsb3NlZH1gfT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX21vYmlsZX0+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17U3R5bGVzLmxvZ29mbHlvdXR9IHNyYz1cIi4vbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGl9PlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGlfYX0gaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGl9PlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGlfYX0gaHJlZj1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGl9PlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGlfYX0gaHJlZj1cIi9wcm9qZWt0ZVwiPlByb2pla3RlPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGl9PiBcclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtTdHlsZXMubmF2X3VsX2xpX2F9IGhyZWY9XCIvaG9iYmllc1wiPkhvYmJpZXM8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17U3R5bGVzLm5hdl91bF9saX0+XHJcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZURvY3VtZW50c0NsaWNrfSBjbGFzc05hbWU9e1N0eWxlcy5uYXZfdWxfbGlfYX0+8J+UkiBEb2t1bWVudGU8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAge21lbnVPcGVuICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZXMub3ZlcmxheX0gJHttZW51T3BlbiA/IFN0eWxlcy52aXNpYmxlIDogJyd9YH0gb25DbGljaz17dG9nZ2xlTWVudX0+PC9kaXY+fVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsIkxpbmsiLCJTdHlsZXMiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsIk5hdmJhciIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJpc0F1dGhlbnRpY2F0ZWQiLCJyb3V0ZXIiLCJoYW5kbGVEb2N1bWVudHNDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJ0b2dnbGVNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiYWxsIiwibGVmdFNpZGUiLCJidXJnZXIiLCJvcGVuIiwib25DbGljayIsImltZyIsImxvZ28iLCJzcmMiLCJhbHQiLCJuYXYiLCJyaWdodFNpZGUiLCJ1bCIsIm5hdl91bCIsImxpIiwibmF2X3VsX2xpIiwibmF2X3VsX2xpX2EiLCJocmVmIiwiYSIsIm1haW5Db250ZW50IiwiYmx1cnJlZCIsIm5hdl9vcGVuIiwibmF2X2Nsb3NlZCIsIm5hdl91bF9tb2JpbGUiLCJsb2dvZmx5b3V0Iiwib3ZlcmxheSIsInZpc2libGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});