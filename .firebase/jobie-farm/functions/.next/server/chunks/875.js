exports.id = 875;
exports.ids = [875];
exports.modules = {

/***/ 688:
/***/ ((module) => {

// Exports
module.exports = {
	"input__group": "LoginInput_input__group__N8Vcq",
	"label": "LoginInput_label__xzyVx",
	"input": "LoginInput_input__eRrtF",
	"eye": "LoginInput_eye__057FY",
	"eyeSvg": "LoginInput_eyeSvg__9_5Qj"
};


/***/ }),

/***/ 2875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LoginInput_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(688);
/* harmony import */ var _LoginInput_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LoginInput_module_css__WEBPACK_IMPORTED_MODULE_3__);





const Input = (props)=>{
    const { invalid ="" , passwordIcon , showPassword , setShowPassword , ...others } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${props.className} ${(_LoginInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().input__group)}`,
        "data-testid": "login__input",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: (_LoginInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),
                children: props.label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ...others,
                className: `${invalid ? `${(_LoginInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().invalid)}` : ""} ${(_LoginInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().input)}`
            }),
            passwordIcon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_LoginInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().eye),
                onClick: ()=>setShowPassword(!showPassword),
                children: showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_LoginInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().eyeSvg),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillEyeInvisible, {})
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_LoginInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().eyeSvg),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillEye, {})
                })
            }) : null
        ]
    });
};
// Typechecking
Input.propTypes = {
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default())?.string,
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default())?.string,
    type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default())?.string,
    invalid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default())?.string,
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ })

};
;