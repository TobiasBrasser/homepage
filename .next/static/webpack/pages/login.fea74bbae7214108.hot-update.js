"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.module.css */ \"./pages/login.module.css\");\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const { login } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleLogin = (e)=>{\n        e.preventDefault();\n        const success = login(username, password);\n        if (success) {\n            router.push(\"/dokumente\");\n        } else {\n            setError(\"Invalid username or password\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().body),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().login),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                onSubmit: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\pages\\\\login.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().text_area),\n                        type: \"text\",\n                        placeholder: \"Username\",\n                        value: username,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\pages\\\\login.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().text_area),\n                        type: \"password\",\n                        placeholder: \"Password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\pages\\\\login.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().btn),\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\pages\\\\login.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"red\"\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\pages\\\\login.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\pages\\\\login.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\pages\\\\login.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\homepage\\\\pages\\\\login.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"Yoa02VGMeSRWwNpNyPzDzK5wJcw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDQztBQUNiO0FBQ0E7QUFFeEMsTUFBTU0sUUFBUTs7SUFDWixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHTCxpREFBVUEsQ0FBQ0MsNkRBQVdBO0lBQ3hDLE1BQU1LLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNYyxjQUFjLENBQUNDO1FBQ25CQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLFVBQVVYLE1BQU1FLFVBQVVFO1FBQ2hDLElBQUlPLFNBQVM7WUFDWFYsT0FBT1csSUFBSSxDQUFDO1FBQ2QsT0FBTztZQUNMTCxTQUFTO1FBQ1g7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXaEIsK0RBQVc7a0JBQ3pCLDRFQUFDZTtZQUFJQyxXQUFXaEIsZ0VBQVk7c0JBQzFCLDRFQUFDa0I7Z0JBQUtGLFdBQVdoQiwrREFBVztnQkFBRW1CLFVBQVVUOztrQ0FDdEMsOERBQUNVO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO3dCQUNDTCxXQUFXaEIsb0VBQWdCO3dCQUMzQnVCLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU9yQjt3QkFDUHNCLFVBQVUsQ0FBQ2YsSUFBTU4sWUFBWU0sRUFBRWdCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O2tDQUU3Qyw4REFBQ0o7d0JBQ0NMLFdBQVdoQixvRUFBZ0I7d0JBQzNCdUIsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT25CO3dCQUNQb0IsVUFBVSxDQUFDZixJQUFNSixZQUFZSSxFQUFFZ0IsTUFBTSxDQUFDRixLQUFLOzs7Ozs7a0NBRTdDLDhEQUFDRzt3QkFBT0wsTUFBSzt3QkFBU1AsV0FBV2hCLDhEQUFVO2tDQUFFOzs7Ozs7b0JBQzVDUSx1QkFBUyw4REFBQ3NCO3dCQUFFQyxPQUFPOzRCQUFFQyxPQUFPO3dCQUFNO2tDQUFJeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakQ7R0ExQ01QOztRQUVXRixrREFBU0E7OztLQUZwQkU7QUE0Q04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL2xvZ2luLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBsb2dpbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9kb2t1bWVudGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yKCdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuYm9keX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubG9naW59PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17U3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XHJcbiAgICAgICAgICA8aDE+TG9naW48L2gxPiBcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlcy50ZXh0X2FyZWF9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17U3R5bGVzLnRleHRfYXJlYX1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtTdHlsZXMuYnRufT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAge2Vycm9yICYmIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57ZXJyb3J9PC9wPn1cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZVJvdXRlciIsIlN0eWxlcyIsIkxvZ2luIiwibG9naW4iLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN1Y2Nlc3MiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm9keSIsImZvcm0iLCJvblN1Ym1pdCIsImgxIiwiaW5wdXQiLCJ0ZXh0X2FyZWEiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwiYnRuIiwicCIsInN0eWxlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});