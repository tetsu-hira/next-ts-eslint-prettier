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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Page = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(3), count = ref[0], setCount = ref[1];\n    var itemList = [\n        '活動が計画的に行われ、職制と対話して進めているか',\n        'リーダーが定期的にパトロールし、自ら進んで5S活動を行っている',\n        '職場規律やルールを維持する枠割分担を決めてある（5S責任者の権限）',\n        '主旨を全員が理解し分担しているか', \n    ];\n    console.log(itemList);\n    var transition = {\n        duration: 0.5,\n        ease: [\n            0.43,\n            0.13,\n            0.23,\n            0.96\n        ]\n    };\n    var thumbnailVariants = {\n        initial: {\n            scale: 0.9,\n            opacity: 0\n        },\n        enter: {\n            scale: 1,\n            opacity: 1,\n            transition: transition\n        },\n        animate: {\n            opacity: 1,\n            duration: 1\n        },\n        exit: {\n            // scale: 0.1,\n            opacity: 0,\n            transition: _objectSpread({}, transition, {\n                duration: 1.5\n            })\n        }\n    };\n    var frameVariants = {\n        hover: {\n            scale: 0.95\n        }\n    };\n    var imageVariants = {\n        hover: {\n            scale: 1.1\n        }\n    };\n    var list = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var item1 = {\n        visible: {\n            opacity: 1,\n            x: 0\n        },\n        hidden: {\n            opacity: 0,\n            x: -1000\n        }\n    };\n    var item2 = {\n        visible: {\n            opacity: 1,\n            x: 0\n        },\n        hidden: {\n            opacity: 0,\n            x: -1000\n        }\n    };\n    var item3 = {\n        visible: {\n            opacity: 1,\n            x: 0\n        },\n        hidden: {\n            opacity: 0,\n            x: -1000\n        }\n    };\n    var item4 = {\n        visible: {\n            opacity: 1,\n            x: 0\n        },\n        hidden: {\n            opacity: 0,\n            x: -1000\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 1\n        },\n        animate: {\n            x: 0\n        },\n        exit: \"exit\",\n        transition: {\n            duration: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"5S活動発表\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: '/' + (count - 1),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"flex items-center h-screen text-9xl text-blue-400 bg-slate-100\",\n                            children: \"◂\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"flex items-center w-full h-screen bg-slate-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            className: \"m-auto w-full\",\n                            variants: thumbnailVariants,\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1,\n                                transition: {\n                                    duration: 1\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-20 text-7xl text-center\",\n                                    children: \"１．取り組み状況\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.ul, {\n                                    initial: \"hidden\",\n                                    animate: \"visible\",\n                                    variants: list,\n                                    className: \"m-auto w-5/6 list-disc\",\n                                    children: itemList.map(function(item) {\n                                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {\n                                            variants: item1,\n                                            className: \"my-10 text-5xl\",\n                                            transition: {\n                                                duration: 3\n                                            },\n                                            children: item\n                                        }, item, false, {\n                                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 17\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: '/' + (count + 1),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"flex right-0 items-center h-screen text-9xl text-blue-400 bg-slate-100\",\n                            children: \"▸\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AIQ11\\\\Documents\\\\next-ts-eslint-prettier\\\\src\\\\pages\\\\3.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, _this));\n};\n_s(Page, \"8veI+ed81nkXngwKuokssa15Ilo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2QkUsT0FBTyxFQUFFLENBQUM7Z0NBQ1JGLE9BQU8sRUFBRSxDQUFDO2dDQUNWTixVQUFVLEVBQUUsQ0FBQztvQ0FBQ0MsUUFBUSxFQUFFLENBQUM7Z0NBQUMsQ0FBQzs0QkFDN0IsQ0FBQzs7NEdBRUFvQixDQUFHO29DQUFDUSxTQUFTLEVBQUMsQ0FBNEI7OENBQUMsQ0FBUTs7Ozs7OzRHQUNuQ3ZDLG9EQUFQO29DQUNSYyxPQUFPLEVBQUMsQ0FBUTtvQ0FDaEJJLE9BQU8sRUFBQyxDQUFTO29DQUNqQndCLFFBQVEsRUFBRW5CLElBQUk7b0NBQ2RnQixTQUFTLEVBQUMsQ0FBd0I7OENBRWpDaEMsUUFBUSxDQUFDcUMsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSTtzREFDakIsTUFBTSwrREFBTDdDLG9EQUFTOzRDQUVSMEMsUUFBUSxFQUFFaEIsS0FBSzs0Q0FDZmEsU0FBUyxFQUFDLENBQWdCOzRDQUMxQjdCLFVBQVUsRUFBRSxDQUFDO2dEQUFDQyxRQUFRLEVBQUUsQ0FBQzs0Q0FBQyxDQUFDO3NEQUUxQmtDLElBQUk7MkNBTEFBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBV2xCM0Msa0RBQUk7d0JBQUNvQyxJQUFJLEVBQUUsQ0FBRyxNQUFJakMsS0FBSyxHQUFHLENBQUM7OEdBQ3pCbUMsQ0FBQzs0QkFBQ0QsU0FBUyxFQUFDLENBQXdFO3NDQUFDLENBRXRGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtWLENBQUM7R0E3R0tuQyxJQUFJO0tBQUpBLElBQUk7QUErR1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvMy50c3g/Y2VjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDMpO1xyXG5cclxuICBjb25zdCBpdGVtTGlzdDogc3RyaW5nW10gPSBbXHJcbiAgICAn5rS75YuV44GM6KiI55S755qE44Gr6KGM44KP44KM44CB6IG35Yi244Go5a++6Kmx44GX44Gm6YCy44KB44Gm44GE44KL44GLJyxcclxuICAgICfjg6rjg7zjg4Djg7zjgYzlrprmnJ/nmoTjgavjg5Hjg4jjg63jg7zjg6vjgZfjgIHoh6rjgonpgLLjgpPjgac1U+a0u+WLleOCkuihjOOBo+OBpuOBhOOCiycsXHJcbiAgICAn6IG35aC06KaP5b6L44KE44Or44O844Or44KS57at5oyB44GZ44KL5p6g5Ymy5YiG5ouF44KS5rG644KB44Gm44GC44KL77yINVPosqzku7vogIXjga7mqKnpmZDvvIknLFxyXG4gICAgJ+S4u+aXqOOCkuWFqOWToeOBjOeQhuino+OBl+WIhuaLheOBl+OBpuOBhOOCi+OBiycsXHJcbiAgXTtcclxuICBjb25zb2xlLmxvZyhpdGVtTGlzdCk7XHJcblxyXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiAwLjUsIGVhc2U6IFswLjQzLCAwLjEzLCAwLjIzLCAwLjk2XSB9O1xyXG5cclxuICBjb25zdCB0aHVtYm5haWxWYXJpYW50cyA9IHtcclxuICAgIGluaXRpYWw6IHsgc2NhbGU6IDAuOSwgb3BhY2l0eTogMCB9LFxyXG4gICAgZW50ZXI6IHsgc2NhbGU6IDEsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb24gfSxcclxuICAgIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDEgfSxcclxuICAgIGV4aXQ6IHtcclxuICAgICAgLy8gc2NhbGU6IDAuMSxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNpdGlvbjogeyAuLi50cmFuc2l0aW9uLCBkdXJhdGlvbjogMS41IH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZyYW1lVmFyaWFudHMgPSB7XHJcbiAgICBob3ZlcjogeyBzY2FsZTogMC45NSB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGltYWdlVmFyaWFudHMgPSB7XHJcbiAgICBob3ZlcjogeyBzY2FsZTogMS4xIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGlzdCA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBpdGVtMSA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAwIH0sXHJcbiAgfTtcclxuICBjb25zdCBpdGVtMiA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAwIH0sXHJcbiAgfTtcclxuICBjb25zdCBpdGVtMyA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAwIH0sXHJcbiAgfTtcclxuICBjb25zdCBpdGVtNCA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAwIH0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICBhbmltYXRlPXt7IHg6IDAgfX1cclxuICAgICAgZXhpdD0nZXhpdCdcclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxyXG4gICAgPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+NVPmtLvli5Xnmbrooag8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwJyAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwnPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9eycvJyArIChjb3VudCAtIDEpfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdGV4dC05eGwgdGV4dC1ibHVlLTQwMCBiZy1zbGF0ZS0xMDAnPuKXgjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1zY3JlZW4gYmctc2xhdGUtMTAwJz5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbS1hdXRvIHctZnVsbCdcclxuICAgICAgICAgICAgdmFyaWFudHM9e3RodW1ibmFpbFZhcmlhbnRzfVxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMjAgdGV4dC03eGwgdGV4dC1jZW50ZXInPu+8ke+8juWPluOCiue1hOOBv+eKtuazgTwvZGl2PlxyXG4gICAgICAgICAgICA8bW90aW9uLnVsXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD0naGlkZGVuJ1xyXG4gICAgICAgICAgICAgIGFuaW1hdGU9J3Zpc2libGUnXHJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e2xpc3R9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtLWF1dG8gdy01LzYgbGlzdC1kaXNjJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2l0ZW1MaXN0Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5saVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtpdGVtMX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteS0xMCB0ZXh0LTV4bCdcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMyB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L21vdGlvbi51bD5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPExpbmsgaHJlZj17Jy8nICsgKGNvdW50ICsgMSl9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdmbGV4IHJpZ2h0LTAgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHRleHQtOXhsIHRleHQtYmx1ZS00MDAgYmctc2xhdGUtMTAwJz5cclxuICAgICAgICAgICAg4pa4XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkhlYWQiLCJMaW5rIiwidXNlU3RhdGUiLCJQYWdlIiwiY291bnQiLCJzZXRDb3VudCIsIml0ZW1MaXN0IiwiY29uc29sZSIsImxvZyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJ0aHVtYm5haWxWYXJpYW50cyIsImluaXRpYWwiLCJzY2FsZSIsIm9wYWNpdHkiLCJlbnRlciIsImFuaW1hdGUiLCJleGl0IiwiZnJhbWVWYXJpYW50cyIsImhvdmVyIiwiaW1hZ2VWYXJpYW50cyIsImxpc3QiLCJ2aXNpYmxlIiwiaGlkZGVuIiwiaXRlbTEiLCJ4IiwiaXRlbTIiLCJpdGVtMyIsIml0ZW00IiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNsYXNzTmFtZSIsImEiLCJtYWluIiwidmFyaWFudHMiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/3.tsx\n");

/***/ })

});