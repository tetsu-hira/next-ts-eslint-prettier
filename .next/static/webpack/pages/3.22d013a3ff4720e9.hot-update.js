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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Page = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(3), count = ref[0], setCount = ref[1];\n    var itemTitle = '１．取り組み状況';\n    var itemList = [\n        '活動が計画的に行われ、職制と対話して進めているか',\n        'リーダーが定期的にパトロールし、自ら進んで5S活動を行っている',\n        '職場規律やルールを維持する枠割分担を決めてある（5S責任者の権限）',\n        '主旨を全員が理解し分担しているか', \n    ];\n    console.log(itemList);\n    var transition = {\n        duration: 0.5,\n        ease: [\n            0.43,\n            0.13,\n            0.23,\n            0.96\n        ]\n    };\n    var thumbnailVariants = {\n        initial: {\n            scale: 0.9,\n            opacity: 0\n        },\n        enter: {\n            scale: 1,\n            opacity: 1,\n            transition: transition\n        },\n        animate: {\n            opacity: 1,\n            duration: 1\n        },\n        exit: {\n            // scale: 0.1,\n            opacity: 0,\n            transition: _objectSpread({}, transition, {\n                duration: 1.5\n            })\n        }\n    };\n    var frameVariants = {\n        hover: {\n            scale: 0.95\n        }\n    };\n    var imageVariants = {\n        hover: {\n            scale: 1.1\n        }\n    };\n    var list = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var num = {\n        visible: {\n            opacity: 1,\n            y: 0\n        },\n        hidden: {\n            opacity: 0,\n            y: -1000\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 1\n        },\n        animate: {\n            x: 0\n        },\n        exit: \"exit\",\n        transition: {\n            duration: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"5S活動発表\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: '/' + (count - 1),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"flex items-center h-screen text-9xl text-blue-400 bg-slate-100\",\n                            children: \"◂\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"flex items-center w-full h-screen bg-slate-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            className: \"pt-48 m-auto mt-0 w-full\",\n                            variants: thumbnailVariants,\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1,\n                                transition: {\n                                    duration: 1\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-20 text-7xl text-center\",\n                                    children: itemTitle\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.ul, {\n                                    initial: \"hidden\",\n                                    animate: \"visible\",\n                                    variants: list,\n                                    className: \"m-auto w-5/6 list-disc\",\n                                    children: itemList.map(function(item, index) {\n                                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {\n                                            variants: num,\n                                            className: \"my-10 text-5xl\",\n                                            transition: {\n                                                duration: 1,\n                                                delay: index * 2 + 2\n                                            },\n                                            children: item\n                                        }, item, false, {\n                                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: '/' + (count + 1),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"flex right-0 items-center h-screen text-9xl text-blue-400 bg-slate-100\",\n                            children: \"▸\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this));\n};\n_s(Page, \"8veI+ed81nkXngwKuokssa15Ilo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7OztnR0FXbEIxQyxrREFBSTt3QkFBQ21DLElBQUksRUFBRSxDQUFHLE1BQUloQyxLQUFLLEdBQUcsQ0FBQzs4R0FDekJrQyxDQUFDOzRCQUFDRCxTQUFTLEVBQUMsQ0FBd0U7c0NBQUMsQ0FFdEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztHQWxHS2xDLElBQUk7S0FBSkEsSUFBSTtBQW9HViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy8zLnRzeD9jZWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMyk7XHJcblxyXG4gIGNvbnN0IGl0ZW1UaXRsZTogc3RyaW5nID0gJ++8ke+8juWPluOCiue1hOOBv+eKtuazgSc7XHJcbiAgY29uc3QgaXRlbUxpc3Q6IHN0cmluZ1tdID0gW1xyXG4gICAgJ+a0u+WLleOBjOioiOeUu+eahOOBq+ihjOOCj+OCjOOAgeiBt+WItuOBqOWvvuipseOBl+OBpumAsuOCgeOBpuOBhOOCi+OBiycsXHJcbiAgICAn44Oq44O844OA44O844GM5a6a5pyf55qE44Gr44OR44OI44Ot44O844Or44GX44CB6Ieq44KJ6YCy44KT44GnNVPmtLvli5XjgpLooYzjgaPjgabjgYTjgosnLFxyXG4gICAgJ+iBt+WgtOimj+W+i+OChOODq+ODvOODq+OCkue2reaMgeOBmeOCi+aeoOWJsuWIhuaLheOCkuaxuuOCgeOBpuOBguOCi++8iDVT6LKs5Lu76ICF44Gu5qip6ZmQ77yJJyxcclxuICAgICfkuLvml6jjgpLlhajlk6HjgYznkIbop6PjgZfliIbmi4XjgZfjgabjgYTjgovjgYsnLFxyXG4gIF07XHJcbiAgY29uc29sZS5sb2coaXRlbUxpc3QpO1xyXG5cclxuICBjb25zdCB0cmFuc2l0aW9uID0geyBkdXJhdGlvbjogMC41LCBlYXNlOiBbMC40MywgMC4xMywgMC4yMywgMC45Nl0gfTtcclxuXHJcbiAgY29uc3QgdGh1bWJuYWlsVmFyaWFudHMgPSB7XHJcbiAgICBpbml0aWFsOiB7IHNjYWxlOiAwLjksIG9wYWNpdHk6IDAgfSxcclxuICAgIGVudGVyOiB7IHNjYWxlOiAxLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uIH0sXHJcbiAgICBhbmltYXRlOiB7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAxIH0sXHJcbiAgICBleGl0OiB7XHJcbiAgICAgIC8vIHNjYWxlOiAwLjEsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zaXRpb246IHsgLi4udHJhbnNpdGlvbiwgZHVyYXRpb246IDEuNSB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBmcmFtZVZhcmlhbnRzID0ge1xyXG4gICAgaG92ZXI6IHsgc2NhbGU6IDAuOTUgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBpbWFnZVZhcmlhbnRzID0ge1xyXG4gICAgaG92ZXI6IHsgc2NhbGU6IDEuMSB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxpc3QgPSB7XHJcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEgfSxcclxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbnVtID0ge1xyXG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXHJcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogLTEwMDAgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgIGFuaW1hdGU9e3sgeDogMCB9fVxyXG4gICAgICBleGl0PSdleGl0J1xyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XHJcbiAgICA+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT41U+a0u+WLleeZuuihqDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0dlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHAnIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCc+XHJcbiAgICAgICAgPExpbmsgaHJlZj17Jy8nICsgKGNvdW50IC0gMSl9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB0ZXh0LTl4bCB0ZXh0LWJsdWUtNDAwIGJnLXNsYXRlLTEwMCc+4peCPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBoLXNjcmVlbiBiZy1zbGF0ZS0xMDAnPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwdC00OCBtLWF1dG8gbXQtMCB3LWZ1bGwnXHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt0aHVtYm5haWxWYXJpYW50c31cclxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTIwIHRleHQtN3hsIHRleHQtY2VudGVyJz57aXRlbVRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8bW90aW9uLnVsXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD0naGlkZGVuJ1xyXG4gICAgICAgICAgICAgIGFuaW1hdGU9J3Zpc2libGUnXHJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e2xpc3R9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtLWF1dG8gdy01LzYgbGlzdC1kaXNjJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2l0ZW1MaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxtb3Rpb24ubGlcclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50cz17bnVtfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J215LTEwIHRleHQtNXhsJ1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLCBkZWxheTogaW5kZXggKiAyICsgMiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L21vdGlvbi51bD5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPExpbmsgaHJlZj17Jy8nICsgKGNvdW50ICsgMSl9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdmbGV4IHJpZ2h0LTAgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHRleHQtOXhsIHRleHQtYmx1ZS00MDAgYmctc2xhdGUtMTAwJz5cclxuICAgICAgICAgICAg4pa4XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkhlYWQiLCJMaW5rIiwidXNlU3RhdGUiLCJQYWdlIiwiY291bnQiLCJzZXRDb3VudCIsIml0ZW1UaXRsZSIsIml0ZW1MaXN0IiwiY29uc29sZSIsImxvZyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJ0aHVtYm5haWxWYXJpYW50cyIsImluaXRpYWwiLCJzY2FsZSIsIm9wYWNpdHkiLCJlbnRlciIsImFuaW1hdGUiLCJleGl0IiwiZnJhbWVWYXJpYW50cyIsImhvdmVyIiwiaW1hZ2VWYXJpYW50cyIsImxpc3QiLCJ2aXNpYmxlIiwiaGlkZGVuIiwibnVtIiwieSIsImRpdiIsIngiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiY2xhc3NOYW1lIiwiYSIsIm1haW4iLCJ2YXJpYW50cyIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJkZWxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/3.tsx\n");

/***/ })

});