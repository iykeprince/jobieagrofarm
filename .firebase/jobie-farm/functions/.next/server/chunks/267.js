exports.id = 267;
exports.ids = [267];
exports.modules = {

/***/ 1639:
/***/ ((module) => {

// Exports
module.exports = {
	"backdrop": "Modal_backdrop__xsPw5",
	"overlay": "Modal_overlay__o4XKP",
	"close__icon": "Modal_close__icon__lbS3K"
};


/***/ }),

/***/ 6267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1639);
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_css__WEBPACK_IMPORTED_MODULE_4__);





const Backdrop = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: props.onClick,
        className: (_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().backdrop)
    });
};
const Overlay = ({ children , onClick  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().overlay),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineCloseCircle, {
                className: (_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().close__icon),
                onClick: onClick
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: children
            })
        ]
    });
};
const Modal = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
                onClick: props.onClick
            }), document.getElementById("modal-root")),
            /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Overlay, {
                onClick: props.onClick,
                children: props.children
            }), document.getElementById("modal-root"))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ })

};
;