exports.id = 401;
exports.ids = [401];
exports.modules = {

/***/ 3730:
/***/ ((module) => {

// Exports
module.exports = {
	"forgot__password": "ForgotForm_forgot__password__WAsen",
	"text": "ForgotForm_text__vFEHz",
	"invalid__input": "ForgotForm_invalid__input__ieRF_",
	"btn__box": "ForgotForm_btn__box__N_oiH",
	"button": "ForgotForm_button__RV0rI",
	"p": "ForgotForm_p__CgFS5",
	"a": "ForgotForm_a__zBfnW"
};


/***/ }),

/***/ 1401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9667);
/* harmony import */ var _login_LoginInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2875);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(143);
/* harmony import */ var _ForgotForm_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3730);
/* harmony import */ var _ForgotForm_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ForgotForm_module_css__WEBPACK_IMPORTED_MODULE_5__);






const Form = (props)=>{
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        email: "",
        emailIsValid: false,
        emailIsFocus: false
    });
    const emailOnChangeHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                email: e.target.value
            };
        });
        const { passwordIsValid  } = form;
        const isValid = (0,_lib_Validations__WEBPACK_IMPORTED_MODULE_4__/* .ValidateEmail */ .J)(e.target.value);
        if (passwordIsValid && isValid) {
            setForm((prev)=>{
                return {
                    ...prev,
                    formIsValid: true
                };
            });
        } else {
            setForm((prev)=>{
                return {
                    ...prev,
                    formIsValid: false
                };
            });
        }
    };
    const emailOnBlurHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                emailIsFocus: true
            };
        });
        const isValid = (0,_lib_Validations__WEBPACK_IMPORTED_MODULE_4__/* .ValidateEmail */ .J)(form.email);
        if (isValid) {
            setForm((prev)=>{
                return {
                    ...prev,
                    emailIsValid: true
                };
            });
        } else {
            setForm((prev)=>{
                return {
                    ...prev,
                    emailIsValid: false
                };
            });
        }
    };
    const submitHandler = (event)=>{
        event.preventDefault();
        // Send form details to backend
        props.onSubmit({
            email: form.email
        });
        // Clearing the input fields
        setForm({
            email: "",
            emailIsValid: false,
            emailIsFocus: false
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_ForgotForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().forgot__form),
        onSubmit: submitHandler,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_login_LoginInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
                id: "email",
                label: "Email",
                type: "email",
                invalid: !form.emailIsValid && form.emailIsFocus ? "invalid" : "",
                placeholder: "example@email.com",
                value: form.email,
                onChange: emailOnChangeHandler,
                onBlur: emailOnBlurHandler
            }),
            form.emailIsFocus && !form.emailIsValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                className: (_ForgotForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().invalid__input),
                children: "Enter a valid email."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ForgotForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn__box),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    id: "btn__submit",
                    type: "submit",
                    className: (_ForgotForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
                    children: "Continue"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ })

};
;