exports.id = 487;
exports.ids = [487];
exports.modules = {

/***/ 8130:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__HxzDS"
};


/***/ }),

/***/ 143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _styles_Button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Button_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Button = ({ disabled , link , to , className , onClick , children  })=>{
    if (link) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: to,
        className: ` ${className} `,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: children
        })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        disabled: disabled,
        onClick: onClick,
        className: ` ${className} ${(_styles_Button_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 9667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ ValidateEmail),
/* harmony export */   "X": () => (/* binding */ ValidatePassword)
/* harmony export */ });
function ValidateEmail(mail) {
    const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (mail.match(reg)) {
        return true;
    }
    return false;
}
function ValidatePassword(password) {
    const reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if (reg.test(password)) {
        return true;
    }
    return false;
}


/***/ })

};
;