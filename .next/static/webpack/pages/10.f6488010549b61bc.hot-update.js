"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/10",{

/***/ "./src/pages/10.tsx":
/*!**************************!*\
  !*** ./src/pages/10.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Page = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10), count = ref[0], setCount = ref[1];\n    var itemTitle = '１．取り組み状況';\n    var itemList = [\n        '活動が計画的に行われ、職制と対話して進めているか',\n        'リーダーが定期的にパトロールし、自ら進んで5S活動を行っている',\n        '職場規律やルールを維持する枠割分担を決めてある（5S責任者の権限）',\n        '主旨を全員が理解し分担しているか', \n    ];\n    var transition = {\n        duration: 0.5,\n        ease: [\n            0.43,\n            0.13,\n            0.23,\n            0.96\n        ]\n    };\n    var thumbnailVariants = {\n        initial: {\n            scale: 0.9,\n            opacity: 0\n        },\n        enter: {\n            scale: 1,\n            opacity: 1,\n            transition: transition\n        },\n        animate: {\n            opacity: 1,\n            duration: 1\n        },\n        exit: {\n            scale: 0.1,\n            opacity: 0,\n            transition: _objectSpread({}, transition, {\n                duration: 1.5\n            })\n        }\n    };\n    var frameVariants = {\n        hover: {\n            scale: 0.95\n        }\n    };\n    var imageVariants = {\n        hover: {\n            scale: 1.1\n        }\n    };\n    var list = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var num1 = {\n        visible: {\n            opacity: 1,\n            y: 0\n        },\n        hidden: {\n            opacity: 0,\n            y: -1000\n        },\n        exit: {\n            opacity: 1\n        }\n    };\n    var num2 = {\n        visible: {\n            opacity: 1,\n            y: 0\n        },\n        hidden: {\n            opacity: 0,\n            y: -1000\n        },\n        exit: {\n            scale: 1.5\n        }\n    };\n    var num3 = {\n        visible: {\n            opacity: 1,\n            y: 0\n        },\n        hidden: {\n            opacity: 0,\n            y: -1000\n        },\n        exit: {\n            scale: 1.5\n        }\n    };\n    var num4 = {\n        visible: {\n            opacity: 1,\n            y: 0\n        },\n        hidden: {\n            opacity: 0,\n            y: -1000\n        },\n        exit: {\n            scale: 1.5\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 1\n        },\n        animate: {\n            x: 0\n        },\n        // exit='exit'\n        transition: {\n            duration: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"5S活動発表\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: '/' + (count - 1),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"flex items-center h-screen text-9xl text-blue-400 bg-slate-100\",\n                            children: \"◂\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"flex items-center w-full h-screen bg-slate-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            className: \"pt-48 m-auto mt-0 w-full\",\n                            variants: thumbnailVariants,\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1,\n                                transition: {\n                                    duration: 1\n                                }\n                            },\n                            exit: {\n                                scale: 1,\n                                opacity: 0,\n                                transition: _objectSpread({}, transition, {\n                                    duration: 1.5\n                                })\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-20 text-7xl\",\n                                    children: itemTitle\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.ul, {\n                                    className: \"m-auto w-5/6 list-disc\",\n                                    variants: thumbnailVariants,\n                                    children: itemList.map(function(item, index) {\n                                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {\n                                            className: \"my-10 text-5xl hover:text-red-500\",\n                                            initial: \"initial\",\n                                            animate: \"enter\",\n                                            exit: \"exit\",\n                                            whileHover: {\n                                                scale: 1.1,\n                                                transition: {\n                                                    duration: 0.4\n                                                }\n                                            },\n                                            variants: num1,\n                                            transition: transition,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: '/attempt/1-' + (index + 1),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: [\n                                                        \" \",\n                                                        item\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                                    lineNumber: 111,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        }, item, false, {\n                                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 17\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: '/' + (count + 1),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"flex right-0 items-center h-screen text-9xl text-blue-400 bg-slate-100\",\n                            children: \"▸\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, _this));\n};\n_s(Page, \"MZ9zrvchv5d/QCa8qESFfIjD/Xc=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO2tJQUdyQlAsa0RBQUk7Z0RBQUNvQyxJQUFJLEVBQUUsQ0FBYSxnQkFBSVEsS0FBSyxHQUFHLENBQUM7c0lBQ25DTixDQUFDOzt3REFBQyxDQUFDO3dEQUFDSyxJQUFJOzs7Ozs7Ozs7Ozs7MkNBSE5BLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBV2xCM0Msa0RBQUk7d0JBQUNvQyxJQUFJLEVBQUUsQ0FBRyxNQUFJakMsS0FBSyxHQUFHLENBQUM7OEdBQ3pCbUMsQ0FBQzs0QkFBQ0QsU0FBUyxFQUFDLENBQXdFO3NDQUFDLENBRXRGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtWLENBQUM7R0F2SEtuQyxJQUFJO0tBQUpBLElBQUk7QUF5SFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvMTAudHN4PzM5MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGU8bnVtYmVyPigxMCk7XHJcblxyXG4gIGNvbnN0IGl0ZW1UaXRsZTogc3RyaW5nID0gJ++8ke+8juWPluOCiue1hOOBv+eKtuazgSc7XHJcbiAgY29uc3QgaXRlbUxpc3Q6IHN0cmluZ1tdID0gW1xyXG4gICAgJ+a0u+WLleOBjOioiOeUu+eahOOBq+ihjOOCj+OCjOOAgeiBt+WItuOBqOWvvuipseOBl+OBpumAsuOCgeOBpuOBhOOCi+OBiycsXHJcbiAgICAn44Oq44O844OA44O844GM5a6a5pyf55qE44Gr44OR44OI44Ot44O844Or44GX44CB6Ieq44KJ6YCy44KT44GnNVPmtLvli5XjgpLooYzjgaPjgabjgYTjgosnLFxyXG4gICAgJ+iBt+WgtOimj+W+i+OChOODq+ODvOODq+OCkue2reaMgeOBmeOCi+aeoOWJsuWIhuaLheOCkuaxuuOCgeOBpuOBguOCi++8iDVT6LKs5Lu76ICF44Gu5qip6ZmQ77yJJyxcclxuICAgICfkuLvml6jjgpLlhajlk6HjgYznkIbop6PjgZfliIbmi4XjgZfjgabjgYTjgovjgYsnLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiAwLjUsIGVhc2U6IFswLjQzLCAwLjEzLCAwLjIzLCAwLjk2XSB9O1xyXG5cclxuICBjb25zdCB0aHVtYm5haWxWYXJpYW50cyA9IHtcclxuICAgIGluaXRpYWw6IHsgc2NhbGU6IDAuOSwgb3BhY2l0eTogMCB9LFxyXG4gICAgZW50ZXI6IHsgc2NhbGU6IDEsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb24gfSxcclxuICAgIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDEgfSxcclxuICAgIGV4aXQ6IHtcclxuICAgICAgc2NhbGU6IDAuMSxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNpdGlvbjogeyAuLi50cmFuc2l0aW9uLCBkdXJhdGlvbjogMS41IH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZyYW1lVmFyaWFudHMgPSB7XHJcbiAgICBob3ZlcjogeyBzY2FsZTogMC45NSB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGltYWdlVmFyaWFudHMgPSB7XHJcbiAgICBob3ZlcjogeyBzY2FsZTogMS4xIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGlzdCA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBudW0xID0ge1xyXG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXHJcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogLTEwMDAgfSxcclxuICAgIGV4aXQ6IHsgb3BhY2l0eTogMSB9LFxyXG4gIH07XHJcbiAgY29uc3QgbnVtMiA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IC0xMDAwIH0sXHJcbiAgICBleGl0OiB7IHNjYWxlOiAxLjUgfSxcclxuICB9O1xyXG4gIGNvbnN0IG51bTMgPSB7XHJcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcclxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAtMTAwMCB9LFxyXG4gICAgZXhpdDogeyBzY2FsZTogMS41IH0sXHJcbiAgfTtcclxuICBjb25zdCBudW00ID0ge1xyXG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXHJcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogLTEwMDAgfSxcclxuICAgIGV4aXQ6IHsgc2NhbGU6IDEuNSB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgYW5pbWF0ZT17eyB4OiAwIH19XHJcbiAgICAgIC8vIGV4aXQ9J2V4aXQnXHJcbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cclxuICAgID5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPjVT5rS75YuV55m66KGoPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcCcgLz5cclxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsJz5cclxuICAgICAgICA8TGluayBocmVmPXsnLycgKyAoY291bnQgLSAxKX0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGgtc2NyZWVuIHRleHQtOXhsIHRleHQtYmx1ZS00MDAgYmctc2xhdGUtMTAwJz7il4I8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtc2NyZWVuIGJnLXNsYXRlLTEwMCc+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3B0LTQ4IG0tYXV0byBtdC0wIHctZnVsbCdcclxuICAgICAgICAgICAgdmFyaWFudHM9e3RodW1ibmFpbFZhcmlhbnRzfVxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBleGl0PXt7IHNjYWxlOiAxLCBvcGFjaXR5OiAwLCB0cmFuc2l0aW9uOiB7IC4uLnRyYW5zaXRpb24sIGR1cmF0aW9uOiAxLjUgfSB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMjAgdGV4dC03eGwnPntpdGVtVGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxtb3Rpb24udWwgY2xhc3NOYW1lPSdtLWF1dG8gdy01LzYgbGlzdC1kaXNjJyB2YXJpYW50cz17dGh1bWJuYWlsVmFyaWFudHN9PlxyXG4gICAgICAgICAgICAgIHtpdGVtTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmxpXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXktMTAgdGV4dC01eGwgaG92ZXI6dGV4dC1yZWQtNTAwJ1xyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPSdpbml0aWFsJ1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRlPSdlbnRlcidcclxuICAgICAgICAgICAgICAgICAgZXhpdD0nZXhpdCdcclxuICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC40IH0sXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtudW0xfVxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYXR0ZW1wdC8xLScgKyAoaW5kZXggKyAxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+IHtpdGVtfTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvbW90aW9uLnVsPlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj17Jy8nICsgKGNvdW50ICsgMSl9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdmbGV4IHJpZ2h0LTAgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHRleHQtOXhsIHRleHQtYmx1ZS00MDAgYmctc2xhdGUtMTAwJz5cclxuICAgICAgICAgICAg4pa4XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkhlYWQiLCJMaW5rIiwidXNlU3RhdGUiLCJQYWdlIiwiY291bnQiLCJzZXRDb3VudCIsIml0ZW1UaXRsZSIsIml0ZW1MaXN0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInRodW1ibmFpbFZhcmlhbnRzIiwiaW5pdGlhbCIsInNjYWxlIiwib3BhY2l0eSIsImVudGVyIiwiYW5pbWF0ZSIsImV4aXQiLCJmcmFtZVZhcmlhbnRzIiwiaG92ZXIiLCJpbWFnZVZhcmlhbnRzIiwibGlzdCIsInZpc2libGUiLCJoaWRkZW4iLCJudW0xIiwieSIsIm51bTIiLCJudW0zIiwibnVtNCIsImRpdiIsIngiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiY2xhc3NOYW1lIiwiYSIsIm1haW4iLCJ2YXJpYW50cyIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJ3aGlsZUhvdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/10.tsx\n");

/***/ })

});