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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Page = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10), count = ref[0], setCount = ref[1];\n    var itemTitle = '１．取り組み状況';\n    var itemList = [\n        '活動が計画的に行われ、職制と対話して進めているか',\n        'リーダーが定期的にパトロールし、自ら進んで5S活動を行っている',\n        '職場規律やルールを維持する枠割分担を決めてある（5S責任者の権限）',\n        '主旨を全員が理解し分担しているか', \n    ];\n    var transition = {\n        duration: 0.5,\n        ease: [\n            0.43,\n            0.13,\n            0.23,\n            0.96\n        ]\n    };\n    var thumbnailVariants = {\n        initial: {\n            scale: 0.9,\n            opacity: 0\n        },\n        enter: {\n            scale: 1,\n            opacity: 1,\n            transition: transition\n        },\n        animate: {\n            opacity: 1,\n            duration: 1\n        },\n        exit: {\n            scale: 0.1,\n            opacity: 0,\n            transition: _objectSpread({}, transition, {\n                duration: 1.5\n            })\n        }\n    };\n    var frameVariants = {\n        hover: {\n            scale: 0.95\n        }\n    };\n    var imageVariants = {\n        hover: {\n            scale: 1.1\n        }\n    };\n    var list = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var num1 = {\n        visible: {\n            opacity: 1,\n            y: 0\n        },\n        hidden: {\n            opacity: 0,\n            y: -1000\n        },\n        exit: {\n            opacity: 1\n        }\n    };\n    var num2 = {\n        visible: {\n            opacity: 1,\n            y: 0\n        },\n        hidden: {\n            opacity: 0,\n            y: -1000\n        },\n        exit: {\n            scale: 1.5\n        }\n    };\n    var num3 = {\n        visible: {\n            opacity: 1,\n            y: 0\n        },\n        hidden: {\n            opacity: 0,\n            y: -1000\n        },\n        exit: {\n            scale: 1.5\n        }\n    };\n    var num4 = {\n        visible: {\n            opacity: 1,\n            y: 0\n        },\n        hidden: {\n            opacity: 0,\n            y: -1000\n        },\n        exit: {\n            scale: 1.5\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 1\n        },\n        animate: {\n            x: 0\n        },\n        exit: \"exit\",\n        transition: {\n            duration: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"5S活動発表\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: '/' + (count - 1),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"flex items-center h-screen text-9xl text-blue-400 bg-slate-100\",\n                            children: \"◂\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center w-full h-screen bg-slate-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            className: \"pt-48 m-auto mt-0 w-full\",\n                            variants: thumbnailVariants,\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1,\n                                transition: {\n                                    duration: 1\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-20 text-7xl\",\n                                    children: itemTitle\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.ul, {\n                                    className: \"m-auto w-5/6 list-disc\",\n                                    variants: thumbnailVariants,\n                                    children: itemList.map(function(item, index) {\n                                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {\n                                            className: \"my-10 text-5xl hover:text-red-500\",\n                                            initial: \"initial\",\n                                            animate: \"enter\",\n                                            exit: \"exit\",\n                                            whileHover: {\n                                                scale: 1.1,\n                                                transition: {\n                                                    duration: 0.4\n                                                }\n                                            },\n                                            variants: num1,\n                                            transition: transition,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: '/attempt/1-' + (index + 1),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: [\n                                                        \" \",\n                                                        item\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        }, item, false, {\n                                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: '/' + (count + 1),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"flex right-0 items-center h-screen text-9xl text-blue-400 bg-slate-100\",\n                            children: \"▸\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, _this));\n};\n_s(Page, \"MZ9zrvchv5d/QCa8qESFfIjD/Xc=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TkEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnR0FXbEIxQyxrREFBSTt3QkFBQ29DLElBQUksRUFBRSxDQUFHLE1BQUlqQyxLQUFLLEdBQUcsQ0FBQzs4R0FDekJtQyxDQUFDOzRCQUFDRCxTQUFTLEVBQUMsQ0FBd0U7c0NBQUMsQ0FFdEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztHQXRIS25DLElBQUk7S0FBSkEsSUFBSTtBQXdIViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy8xMC50c3g/MzkxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDEwKTtcclxuXHJcbiAgY29uc3QgaXRlbVRpdGxlOiBzdHJpbmcgPSAn77yR77yO5Y+W44KK57WE44G/54q25rOBJztcclxuICBjb25zdCBpdGVtTGlzdDogc3RyaW5nW10gPSBbXHJcbiAgICAn5rS75YuV44GM6KiI55S755qE44Gr6KGM44KP44KM44CB6IG35Yi244Go5a++6Kmx44GX44Gm6YCy44KB44Gm44GE44KL44GLJyxcclxuICAgICfjg6rjg7zjg4Djg7zjgYzlrprmnJ/nmoTjgavjg5Hjg4jjg63jg7zjg6vjgZfjgIHoh6rjgonpgLLjgpPjgac1U+a0u+WLleOCkuihjOOBo+OBpuOBhOOCiycsXHJcbiAgICAn6IG35aC06KaP5b6L44KE44Or44O844Or44KS57at5oyB44GZ44KL5p6g5Ymy5YiG5ouF44KS5rG644KB44Gm44GC44KL77yINVPosqzku7vogIXjga7mqKnpmZDvvIknLFxyXG4gICAgJ+S4u+aXqOOCkuWFqOWToeOBjOeQhuino+OBl+WIhuaLheOBl+OBpuOBhOOCi+OBiycsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAuNSwgZWFzZTogWzAuNDMsIDAuMTMsIDAuMjMsIDAuOTZdIH07XHJcblxyXG4gIGNvbnN0IHRodW1ibmFpbFZhcmlhbnRzID0ge1xyXG4gICAgaW5pdGlhbDogeyBzY2FsZTogMC45LCBvcGFjaXR5OiAwIH0sXHJcbiAgICBlbnRlcjogeyBzY2FsZTogMSwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbiB9LFxyXG4gICAgYW5pbWF0ZTogeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMSB9LFxyXG4gICAgZXhpdDoge1xyXG4gICAgICBzY2FsZTogMC4xLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB0cmFuc2l0aW9uOiB7IC4uLnRyYW5zaXRpb24sIGR1cmF0aW9uOiAxLjUgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZnJhbWVWYXJpYW50cyA9IHtcclxuICAgIGhvdmVyOiB7IHNjYWxlOiAwLjk1IH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW1hZ2VWYXJpYW50cyA9IHtcclxuICAgIGhvdmVyOiB7IHNjYWxlOiAxLjEgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBsaXN0ID0ge1xyXG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxIH0sXHJcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG51bTEgPSB7XHJcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcclxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAtMTAwMCB9LFxyXG4gICAgZXhpdDogeyBvcGFjaXR5OiAxIH0sXHJcbiAgfTtcclxuICBjb25zdCBudW0yID0ge1xyXG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXHJcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogLTEwMDAgfSxcclxuICAgIGV4aXQ6IHsgc2NhbGU6IDEuNSB9LFxyXG4gIH07XHJcbiAgY29uc3QgbnVtMyA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IC0xMDAwIH0sXHJcbiAgICBleGl0OiB7IHNjYWxlOiAxLjUgfSxcclxuICB9O1xyXG4gIGNvbnN0IG51bTQgPSB7XHJcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcclxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAtMTAwMCB9LFxyXG4gICAgZXhpdDogeyBzY2FsZTogMS41IH0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICBhbmltYXRlPXt7IHg6IDAgfX1cclxuICAgICAgZXhpdD0nZXhpdCdcclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxyXG4gICAgPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+NVPmtLvli5Xnmbrooag8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwJyAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwnPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9eycvJyArIChjb3VudCAtIDEpfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdGV4dC05eGwgdGV4dC1ibHVlLTQwMCBiZy1zbGF0ZS0xMDAnPuKXgjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBoLXNjcmVlbiBiZy1zbGF0ZS0xMDAnPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwdC00OCBtLWF1dG8gbXQtMCB3LWZ1bGwnXHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt0aHVtYm5haWxWYXJpYW50c31cclxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTIwIHRleHQtN3hsJz57aXRlbVRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8bW90aW9uLnVsIGNsYXNzTmFtZT0nbS1hdXRvIHctNS82IGxpc3QtZGlzYycgdmFyaWFudHM9e3RodW1ibmFpbFZhcmlhbnRzfT5cclxuICAgICAgICAgICAgICB7aXRlbUxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5saVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J215LTEwIHRleHQtNXhsIGhvdmVyOnRleHQtcmVkLTUwMCdcclxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD0naW5pdGlhbCdcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT0nZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgIGV4aXQ9J2V4aXQnXHJcbiAgICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS4xLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNCB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50cz17bnVtMX1cclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2F0dGVtcHQvMS0nICsgKGluZGV4ICsgMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPiB7aXRlbX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L21vdGlvbi51bD5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj17Jy8nICsgKGNvdW50ICsgMSl9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdmbGV4IHJpZ2h0LTAgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHRleHQtOXhsIHRleHQtYmx1ZS00MDAgYmctc2xhdGUtMTAwJz5cclxuICAgICAgICAgICAg4pa4XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkhlYWQiLCJMaW5rIiwidXNlU3RhdGUiLCJQYWdlIiwiY291bnQiLCJzZXRDb3VudCIsIml0ZW1UaXRsZSIsIml0ZW1MaXN0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInRodW1ibmFpbFZhcmlhbnRzIiwiaW5pdGlhbCIsInNjYWxlIiwib3BhY2l0eSIsImVudGVyIiwiYW5pbWF0ZSIsImV4aXQiLCJmcmFtZVZhcmlhbnRzIiwiaG92ZXIiLCJpbWFnZVZhcmlhbnRzIiwibGlzdCIsInZpc2libGUiLCJoaWRkZW4iLCJudW0xIiwieSIsIm51bTIiLCJudW0zIiwibnVtNCIsImRpdiIsIngiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiY2xhc3NOYW1lIiwiYSIsInZhcmlhbnRzIiwidWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsIndoaWxlSG92ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/10.tsx\n");

/***/ })

});