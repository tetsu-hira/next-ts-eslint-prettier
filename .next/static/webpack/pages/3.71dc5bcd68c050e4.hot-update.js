"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/3",{

/***/ "./src/pages/3.tsx":
/*!*************************!*\
  !*** ./src/pages/3.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Page = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(3), count = ref[0], setCount = ref[1];\n    var transition = {\n        duration: 0.5,\n        ease: [\n            0.43,\n            0.13,\n            0.23,\n            0.96\n        ]\n    };\n    var thumbnailVariants = {\n        initial: {\n            scale: 0.9,\n            opacity: 0\n        },\n        enter: {\n            scale: 1,\n            opacity: 1,\n            transition: transition\n        },\n        animate: {\n            opacity: 1,\n            duration: 1\n        },\n        exit: {\n            // scale: 0.1,\n            opacity: 0,\n            transition: _objectSpread({}, transition, {\n                duration: 1.5\n            })\n        }\n    };\n    var frameVariants = {\n        hover: {\n            scale: 0.95\n        }\n    };\n    var imageVariants = {\n        hover: {\n            scale: 1.1\n        }\n    };\n    var list = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var item1 = {\n        visible: {\n            opacity: 1,\n            x: 0\n        },\n        hidden: {\n            opacity: 0,\n            x: -1000\n        }\n    };\n    var item2 = {\n        visible: {\n            opacity: 1,\n            x: 0\n        },\n        hidden: {\n            opacity: 0,\n            x: -1000\n        }\n    };\n    var item3 = {\n        visible: {\n            opacity: 1,\n            x: 0\n        },\n        hidden: {\n            opacity: 0,\n            x: -1000\n        }\n    };\n    var item4 = {\n        visible: {\n            opacity: 1,\n            x: 0\n        },\n        hidden: {\n            opacity: 0,\n            x: -1000\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            x: 1500\n        },\n        animate: {\n            x: 0\n        },\n        exit: {\n            x: -1500\n        },\n        transition: {\n            duration: 1,\n            times: [\n                0,\n                0.2,\n                1\n            ]\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"5S活動発表\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: '/' + (count - 1),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"flex items-center h-screen text-9xl text-blue-400 bg-slate-100\",\n                            children: \"◂\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"flex items-center w-full h-screen bg-slate-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-20 text-7xl text-center\",\n                                    children: \"１．取り組み状況\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.ul, {\n                                    initial: \"hidden\",\n                                    animate: \"visible\",\n                                    variants: list,\n                                    className: \"m-auto w-5/6 list-disc\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {\n                                            variants: item1,\n                                            className: \"my-10 text-5xl\",\n                                            transition: {\n                                                duration: 3\n                                            },\n                                            children: \"活動が計画的に行われ、職制と対話して進めているか\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {\n                                            variants: item2,\n                                            transition: {\n                                                duration: 4\n                                            },\n                                            className: \"my-10 text-5xl\",\n                                            children: \"リーダーが定期的にパトロールし、自ら進んで5S活動を行っている\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {\n                                            variants: item3,\n                                            transition: {\n                                                duration: 5\n                                            },\n                                            className: \"my-10 text-5xl\",\n                                            children: \"職場規律やルールを維持する枠割分担を決めてある（5S責任者の権限）\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {\n                                            variants: item4,\n                                            transition: {\n                                                duration: 6\n                                            },\n                                            className: \"my-10 text-5xl\",\n                                            children: \"主旨を全員が理解し分担しているか\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: '/' + (count + 1),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"flex right-0 items-center h-screen text-9xl text-blue-400 bg-slate-100\",\n                            children: \"▸\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, _this));\n};\n_s(Page, \"8veI+ed81nkXngwKuokssa15Ilo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQ2pCMEIsUUFBUSxFQUFFckIsSUFBSTtvQ0FDZGlCLFNBQVMsRUFBQyxDQUF3Qjs7b0hBRWpDckMsb0RBQVM7NENBQUN5QyxRQUFRLEVBQUVsQixLQUFLOzRDQUFFYyxTQUFTLEVBQUMsQ0FBZ0I7NENBQUM5QixVQUFVLEVBQUUsQ0FBQztnREFBQ0MsUUFBUSxFQUFFLENBQUM7NENBQUMsQ0FBQztzREFBRSxDQUVwRjs7Ozs7O29IQUNDUixvREFBUzs0Q0FBQ3lDLFFBQVEsRUFBRWhCLEtBQUs7NENBQUVsQixVQUFVLEVBQUUsQ0FBQztnREFBQ0MsUUFBUSxFQUFFLENBQUM7NENBQUMsQ0FBQzs0Q0FBRTZCLFNBQVMsRUFBQyxDQUFnQjtzREFBQyxDQUVwRjs7Ozs7O29IQUNDckMsb0RBQVM7NENBQUN5QyxRQUFRLEVBQUVmLEtBQUs7NENBQUVuQixVQUFVLEVBQUUsQ0FBQztnREFBQ0MsUUFBUSxFQUFFLENBQUM7NENBQUMsQ0FBQzs0Q0FBRTZCLFNBQVMsRUFBQyxDQUFnQjtzREFBQyxDQUVwRjs7Ozs7O29IQUNDckMsb0RBQVM7NENBQUN5QyxRQUFRLEVBQUVkLEtBQUs7NENBQUVwQixVQUFVLEVBQUUsQ0FBQztnREFBQ0MsUUFBUSxFQUFFLENBQUM7NENBQUMsQ0FBQzs0Q0FBRTZCLFNBQVMsRUFBQyxDQUFnQjtzREFBQyxDQUVwRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBSUxuQyxrREFBSTt3QkFBQ2tDLElBQUksRUFBRSxDQUFHLE1BQUkvQixLQUFLLEdBQUcsQ0FBQzs4R0FDekJpQyxDQUFDOzRCQUFDRCxTQUFTLEVBQUMsQ0FBd0U7c0NBQUMsQ0FFdEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztHQS9GS2pDLElBQUk7S0FBSkEsSUFBSTtBQWlHViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy8zLnRzeD9jZWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMyk7XHJcblxyXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiAwLjUsIGVhc2U6IFswLjQzLCAwLjEzLCAwLjIzLCAwLjk2XSB9O1xyXG5cclxuICBjb25zdCB0aHVtYm5haWxWYXJpYW50cyA9IHtcclxuICAgIGluaXRpYWw6IHsgc2NhbGU6IDAuOSwgb3BhY2l0eTogMCB9LFxyXG4gICAgZW50ZXI6IHsgc2NhbGU6IDEsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb24gfSxcclxuICAgIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDEgfSxcclxuICAgIGV4aXQ6IHtcclxuICAgICAgLy8gc2NhbGU6IDAuMSxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNpdGlvbjogeyAuLi50cmFuc2l0aW9uLCBkdXJhdGlvbjogMS41IH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZyYW1lVmFyaWFudHMgPSB7XHJcbiAgICBob3ZlcjogeyBzY2FsZTogMC45NSB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGltYWdlVmFyaWFudHMgPSB7XHJcbiAgICBob3ZlcjogeyBzY2FsZTogMS4xIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGlzdCA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBpdGVtMSA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAwIH0sXHJcbiAgfTtcclxuICBjb25zdCBpdGVtMiA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAwIH0sXHJcbiAgfTtcclxuICBjb25zdCBpdGVtMyA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAwIH0sXHJcbiAgfTtcclxuICBjb25zdCBpdGVtNCA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAwIH0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9e3sgeDogMTUwMCB9fVxyXG4gICAgICBhbmltYXRlPXt7IHg6IDAgfX1cclxuICAgICAgZXhpdD17eyB4OiAtMTUwMCB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLCB0aW1lczogWzAsIDAuMiwgMV0gfX1cclxuICAgID5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPjVT5rS75YuV55m66KGoPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcCcgLz5cclxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsJz5cclxuICAgICAgICA8TGluayBocmVmPXsnLycgKyAoY291bnQgLSAxKX0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGgtc2NyZWVuIHRleHQtOXhsIHRleHQtYmx1ZS00MDAgYmctc2xhdGUtMTAwJz7il4I8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtc2NyZWVuIGJnLXNsYXRlLTEwMCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbS1hdXRvIHctZnVsbCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0yMCB0ZXh0LTd4bCB0ZXh0LWNlbnRlcic+77yR77yO5Y+W44KK57WE44G/54q25rOBPC9kaXY+XHJcbiAgICAgICAgICAgIDxtb3Rpb24udWxcclxuICAgICAgICAgICAgICBpbml0aWFsPSdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT0ndmlzaWJsZSdcclxuICAgICAgICAgICAgICB2YXJpYW50cz17bGlzdH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J20tYXV0byB3LTUvNiBsaXN0LWRpc2MnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8bW90aW9uLmxpIHZhcmlhbnRzPXtpdGVtMX0gY2xhc3NOYW1lPSdteS0xMCB0ZXh0LTV4bCcgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMyB9fT5cclxuICAgICAgICAgICAgICAgIOa0u+WLleOBjOioiOeUu+eahOOBq+ihjOOCj+OCjOOAgeiBt+WItuOBqOWvvuipseOBl+OBpumAsuOCgeOBpuOBhOOCi+OBi1xyXG4gICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxyXG4gICAgICAgICAgICAgIDxtb3Rpb24ubGkgdmFyaWFudHM9e2l0ZW0yfSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiA0IH19IGNsYXNzTmFtZT0nbXktMTAgdGV4dC01eGwnPlxyXG4gICAgICAgICAgICAgICAg44Oq44O844OA44O844GM5a6a5pyf55qE44Gr44OR44OI44Ot44O844Or44GX44CB6Ieq44KJ6YCy44KT44GnNVPmtLvli5XjgpLooYzjgaPjgabjgYTjgotcclxuICAgICAgICAgICAgICA8L21vdGlvbi5saT5cclxuICAgICAgICAgICAgICA8bW90aW9uLmxpIHZhcmlhbnRzPXtpdGVtM30gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogNSB9fSBjbGFzc05hbWU9J215LTEwIHRleHQtNXhsJz5cclxuICAgICAgICAgICAgICAgIOiBt+WgtOimj+W+i+OChOODq+ODvOODq+OCkue2reaMgeOBmeOCi+aeoOWJsuWIhuaLheOCkuaxuuOCgeOBpuOBguOCi++8iDVT6LKs5Lu76ICF44Gu5qip6ZmQ77yJXHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5saSB2YXJpYW50cz17aXRlbTR9IHRyYW5zaXRpb249e3sgZHVyYXRpb246IDYgfX0gY2xhc3NOYW1lPSdteS0xMCB0ZXh0LTV4bCc+XHJcbiAgICAgICAgICAgICAgICDkuLvml6jjgpLlhajlk6HjgYznkIbop6PjgZfliIbmi4XjgZfjgabjgYTjgovjgYtcclxuICAgICAgICAgICAgICA8L21vdGlvbi5saT5cclxuICAgICAgICAgICAgPC9tb3Rpb24udWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPExpbmsgaHJlZj17Jy8nICsgKGNvdW50ICsgMSl9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdmbGV4IHJpZ2h0LTAgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHRleHQtOXhsIHRleHQtYmx1ZS00MDAgYmctc2xhdGUtMTAwJz5cclxuICAgICAgICAgICAg4pa4XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkhlYWQiLCJMaW5rIiwidXNlU3RhdGUiLCJQYWdlIiwiY291bnQiLCJzZXRDb3VudCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJ0aHVtYm5haWxWYXJpYW50cyIsImluaXRpYWwiLCJzY2FsZSIsIm9wYWNpdHkiLCJlbnRlciIsImFuaW1hdGUiLCJleGl0IiwiZnJhbWVWYXJpYW50cyIsImhvdmVyIiwiaW1hZ2VWYXJpYW50cyIsImxpc3QiLCJ2aXNpYmxlIiwiaGlkZGVuIiwiaXRlbTEiLCJ4IiwiaXRlbTIiLCJpdGVtMyIsIml0ZW00IiwiZGl2IiwidGltZXMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiY2xhc3NOYW1lIiwiYSIsIm1haW4iLCJ1bCIsInZhcmlhbnRzIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/3.tsx\n");

/***/ })

});