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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Page = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10), count = ref[0], setCount = ref[1];\n    var itemTitle = '１．取り組み状況';\n    var itemList = [\n        '活動が計画的に行われ、職制と対話して進めているか',\n        'リーダーが定期的にパトロールし、自ら進んで5S活動を行っている',\n        '職場規律やルールを維持する枠割分担を決めてある（5S責任者の権限）',\n        '主旨を全員が理解し分担しているか', \n    ];\n    var transition = {\n        duration: 0.5,\n        ease: [\n            0.43,\n            0.13,\n            0.23,\n            0.96\n        ]\n    };\n    var thumbnailVariants = {\n        initial: {\n            scale: 0.9,\n            opacity: 0\n        },\n        enter: {\n            scale: 1,\n            opacity: 1,\n            transition: transition\n        },\n        animate: {\n            opacity: 1,\n            duration: 1\n        },\n        exit: {\n            // scale: 0.1,\n            opacity: 0,\n            transition: _objectSpread({}, transition, {\n                duration: 1.5\n            })\n        }\n    };\n    var frameVariants = {\n        hover: {\n            scale: 0.95\n        }\n    };\n    var imageVariants = {\n        hover: {\n            scale: 1.1\n        }\n    };\n    var list = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var num1 = {\n        visible: {\n            opacity: 1,\n            y: 0\n        },\n        hidden: {\n            opacity: 0,\n            y: -1000\n        },\n        exit: {\n            scale: 1.5\n        }\n    };\n    var num2 = {\n        visible: {\n            opacity: 1,\n            y: 0\n        },\n        hidden: {\n            opacity: 0,\n            y: -1000\n        },\n        exit: {\n            scale: 1.5\n        }\n    };\n    var num3 = {\n        visible: {\n            opacity: 1,\n            y: 0\n        },\n        hidden: {\n            opacity: 0,\n            y: -1000\n        },\n        exit: {\n            scale: 1.5\n        }\n    };\n    var num4 = {\n        visible: {\n            opacity: 1,\n            y: 0\n        },\n        hidden: {\n            opacity: 0,\n            y: -1000\n        },\n        exit: {\n            scale: 1.5\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 1\n        },\n        animate: {\n            x: 0\n        },\n        exit: \"exit\",\n        transition: {\n            duration: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"5S活動発表\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: '/' + (count - 1),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"flex items-center h-screen text-9xl text-blue-400 bg-slate-100\",\n                            children: \"◂\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"flex items-center w-full h-screen bg-slate-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            className: \"pt-48 m-auto mt-0 w-full\",\n                            variants: thumbnailVariants,\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1,\n                                transition: {\n                                    duration: 1\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-20 text-7xl\",\n                                    children: itemTitle\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.ul, {\n                                    className: \"m-auto w-5/6 list-disc\",\n                                    variants: thumbnailVariants,\n                                    children: itemList.map(function(item, index) {\n                                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {\n                                            className: \"my-10 text-5xl hover:text-red-500\",\n                                            initial: \"initial\",\n                                            animate: \"enter\",\n                                            exit: \"exit\",\n                                            whileHover: {\n                                                scale: 1.1,\n                                                transition: {\n                                                    duration: 0.4\n                                                }\n                                            },\n                                            variants: num + String(index + 1),\n                                            transition: transition,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: '/attempt/1-' + (index + 1),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: [\n                                                        \" \",\n                                                        item\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        }, item, false, {\n                                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: '/' + (count + 1),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"flex right-0 items-center h-screen text-9xl text-blue-400 bg-slate-100\",\n                            children: \"▸\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\10.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, _this));\n};\n_s(Page, \"MZ9zrvchv5d/QCa8qESFfIjD/Xc=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7Ozs7Ozs7Ozs7OzsyQ0FITkEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnR0FVbEIzQyxrREFBSTt3QkFBQ29DLElBQUksRUFBRSxDQUFHLE1BQUlqQyxLQUFLLEdBQUcsQ0FBQzs4R0FDekJtQyxDQUFDOzRCQUFDRCxTQUFTLEVBQUMsQ0FBd0U7c0NBQUMsQ0FFdEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztHQXJIS25DLElBQUk7S0FBSkEsSUFBSTtBQXVIViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy8xMC50c3g/MzkxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDEwKTtcclxuXHJcbiAgY29uc3QgaXRlbVRpdGxlOiBzdHJpbmcgPSAn77yR77yO5Y+W44KK57WE44G/54q25rOBJztcclxuICBjb25zdCBpdGVtTGlzdDogc3RyaW5nW10gPSBbXHJcbiAgICAn5rS75YuV44GM6KiI55S755qE44Gr6KGM44KP44KM44CB6IG35Yi244Go5a++6Kmx44GX44Gm6YCy44KB44Gm44GE44KL44GLJyxcclxuICAgICfjg6rjg7zjg4Djg7zjgYzlrprmnJ/nmoTjgavjg5Hjg4jjg63jg7zjg6vjgZfjgIHoh6rjgonpgLLjgpPjgac1U+a0u+WLleOCkuihjOOBo+OBpuOBhOOCiycsXHJcbiAgICAn6IG35aC06KaP5b6L44KE44Or44O844Or44KS57at5oyB44GZ44KL5p6g5Ymy5YiG5ouF44KS5rG644KB44Gm44GC44KL77yINVPosqzku7vogIXjga7mqKnpmZDvvIknLFxyXG4gICAgJ+S4u+aXqOOCkuWFqOWToeOBjOeQhuino+OBl+WIhuaLheOBl+OBpuOBhOOCi+OBiycsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAuNSwgZWFzZTogWzAuNDMsIDAuMTMsIDAuMjMsIDAuOTZdIH07XHJcblxyXG4gIGNvbnN0IHRodW1ibmFpbFZhcmlhbnRzID0ge1xyXG4gICAgaW5pdGlhbDogeyBzY2FsZTogMC45LCBvcGFjaXR5OiAwIH0sXHJcbiAgICBlbnRlcjogeyBzY2FsZTogMSwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbiB9LFxyXG4gICAgYW5pbWF0ZTogeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMSB9LFxyXG4gICAgZXhpdDoge1xyXG4gICAgICAvLyBzY2FsZTogMC4xLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB0cmFuc2l0aW9uOiB7IC4uLnRyYW5zaXRpb24sIGR1cmF0aW9uOiAxLjUgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZnJhbWVWYXJpYW50cyA9IHtcclxuICAgIGhvdmVyOiB7IHNjYWxlOiAwLjk1IH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW1hZ2VWYXJpYW50cyA9IHtcclxuICAgIGhvdmVyOiB7IHNjYWxlOiAxLjEgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBsaXN0ID0ge1xyXG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxIH0sXHJcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG51bTEgPSB7XHJcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcclxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAtMTAwMCB9LFxyXG4gICAgZXhpdDogeyBzY2FsZTogMS41IH0sXHJcbiAgfTtcclxuICBjb25zdCBudW0yID0ge1xyXG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXHJcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogLTEwMDAgfSxcclxuICAgIGV4aXQ6IHsgc2NhbGU6IDEuNSB9LFxyXG4gIH07XHJcbiAgY29uc3QgbnVtMyA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IC0xMDAwIH0sXHJcbiAgICBleGl0OiB7IHNjYWxlOiAxLjUgfSxcclxuICB9O1xyXG4gIGNvbnN0IG51bTQgPSB7XHJcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcclxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAtMTAwMCB9LFxyXG4gICAgZXhpdDogeyBzY2FsZTogMS41IH0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICBhbmltYXRlPXt7IHg6IDAgfX1cclxuICAgICAgZXhpdD0nZXhpdCdcclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxyXG4gICAgPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+NVPmtLvli5Xnmbrooag8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwJyAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwnPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9eycvJyArIChjb3VudCAtIDEpfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdGV4dC05eGwgdGV4dC1ibHVlLTQwMCBiZy1zbGF0ZS0xMDAnPuKXgjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1zY3JlZW4gYmctc2xhdGUtMTAwJz5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncHQtNDggbS1hdXRvIG10LTAgdy1mdWxsJ1xyXG4gICAgICAgICAgICB2YXJpYW50cz17dGh1bWJuYWlsVmFyaWFudHN9XHJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAxIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0yMCB0ZXh0LTd4bCc+e2l0ZW1UaXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPG1vdGlvbi51bCBjbGFzc05hbWU9J20tYXV0byB3LTUvNiBsaXN0LWRpc2MnIHZhcmlhbnRzPXt0aHVtYm5haWxWYXJpYW50c30+XHJcbiAgICAgICAgICAgICAge2l0ZW1MaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxtb3Rpb24ubGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteS0xMCB0ZXh0LTV4bCBob3Zlcjp0ZXh0LXJlZC01MDAnXHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9J2luaXRpYWwnXHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9J2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICBleGl0PSdleGl0J1xyXG4gICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuMSxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjQgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e251bSArIFN0cmluZyhpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYXR0ZW1wdC8xLScgKyAoaW5kZXggKyAxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+IHtpdGVtfTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvbW90aW9uLnVsPlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8TGluayBocmVmPXsnLycgKyAoY291bnQgKyAxKX0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZsZXggcmlnaHQtMCBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdGV4dC05eGwgdGV4dC1ibHVlLTQwMCBiZy1zbGF0ZS0xMDAnPlxyXG4gICAgICAgICAgICDilrhcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwibmFtZXMiOlsibW90aW9uIiwiSGVhZCIsIkxpbmsiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJjb3VudCIsInNldENvdW50IiwiaXRlbVRpdGxlIiwiaXRlbUxpc3QiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwidGh1bWJuYWlsVmFyaWFudHMiLCJpbml0aWFsIiwic2NhbGUiLCJvcGFjaXR5IiwiZW50ZXIiLCJhbmltYXRlIiwiZXhpdCIsImZyYW1lVmFyaWFudHMiLCJob3ZlciIsImltYWdlVmFyaWFudHMiLCJsaXN0IiwidmlzaWJsZSIsImhpZGRlbiIsIm51bTEiLCJ5IiwibnVtMiIsIm51bTMiLCJudW00IiwiZGl2IiwieCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJjbGFzc05hbWUiLCJhIiwibWFpbiIsInZhcmlhbnRzIiwidWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsIndoaWxlSG92ZXIiLCJudW0iLCJTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/10.tsx\n");

/***/ })

});