(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9090);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Pagination_Pagination_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7841);
/* harmony import */ var _components_Pagination_Pagination_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Pagination_Pagination_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_auth_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5096);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6552);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1127);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_auth_context__WEBPACK_IMPORTED_MODULE_5__]);
_contexts_auth_context__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_auth_context__WEBPACK_IMPORTED_MODULE_5__/* .AuthUserProvider */ .s, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: "/assets/js/jquery.js",
                    onLoad: ()=>console.log("jQuery loaded")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: "/assets/js/fontawesome.min.js",
                    onLoad: ()=>console.log("fontAwesome loaded")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: "/assets/js/waypoints.min.js",
                    onLoad: ()=>console.log("waypoint loaded")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js",
                    integrity: "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy",
                    crossOrigin: "anonymous",
                    onLoad: ()=>console.log("bootsrap loaded")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: "/assets/js/swiper.min.js",
                    onLoad: ()=>console.log("swiper loaded")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: "/assets/js/jquery.countdown.min.js",
                    onLoad: ()=>console.log("jquery countdowm loaded")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: "/assets/js/jquery.counterup.min.js",
                    onLoad: ()=>console.log("countup loaded")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: "/assets/js/isotope.pkgd.min.js",
                    onLoad: ()=>console.log("isotope loaded")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: "/assets/js/lightcase.js",
                    onLoad: ()=>console.log("lightcase loaded")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: "/assets/js/functions.js",
                    onLoad: ()=>console.log("function loaded")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
                    store: _store_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__.PersistGate, {
                        loading: null,
                        persistor: _store_store__WEBPACK_IMPORTED_MODULE_7__/* .persistor */ .D,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ store_store),
  "D": () => (/* binding */ persistor)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./store/Products/ProductsSlice.js
var ProductsSlice = __webpack_require__(4438);
;// CONCATENATED MODULE: ./store/store.js





const persistConfig = {
    key: "root",
    storage: (storage_default())
};
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, ProductsSlice/* default */.Z);
const store = (0,toolkit_.configureStore)({
    reducer: {
        products: persistedReducer
    },
    middleware: [
        (external_redux_thunk_default())
    ]
});
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
/* harmony default export */ const store_store = (store);


/***/ }),

/***/ 7841:
/***/ (() => {



/***/ }),

/***/ 9090:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3573)


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1127:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ 9500:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/analytics");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [573,796,707], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();