exports.id = 386;
exports.ids = [386];
exports.modules = {

/***/ 9658:
/***/ ((module) => {

// Exports
module.exports = {
	"forgot__password": "ResetForm_forgot__password__SHCRY",
	"text": "ResetForm_text__DtbK5",
	"invalid__input": "ResetForm_invalid__input__VAqv6",
	"reset__form": "ResetForm_reset__form__r9eTj",
	"btn__box": "ResetForm_btn__box__aD4TY",
	"button": "ResetForm_button__jODyl",
	"p": "ResetForm_p__9TUly",
	"a": "ResetForm_a__G7p40"
};


/***/ }),

/***/ 386:
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
/* harmony import */ var _ResetForm_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9658);
/* harmony import */ var _ResetForm_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ResetForm_module_css__WEBPACK_IMPORTED_MODULE_5__);






const Form = (props)=>{
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [passwordIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        password: "",
        confirmpassword: "",
        passwordIsValid: false,
        confirmpasswordIsValid: false,
        confirmpasswordIsFocus: false
    });
    const passwordOnChangeHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                password: e.target.value
            };
        });
        const { emailIsValid  } = form;
        const isValid = (0,_lib_Validations__WEBPACK_IMPORTED_MODULE_4__/* .ValidatePassword */ .X)(e.target.value);
        if (emailIsValid && isValid) {
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
    const confirmpasswordOnChangeHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                confirmpassword: e.target.value
            };
        });
        const { emailIsValid  } = form;
        const isValid = e.target.value === form.password;
        if (emailIsValid && isValid) {
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
    // Allowing the user to unfocus the input field before checking if the input field is correct.
    const passwordOnBlurHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                passwordIsFocus: true
            };
        });
        const isValid = (0,_lib_Validations__WEBPACK_IMPORTED_MODULE_4__/* .ValidatePassword */ .X)(form.password);
        if (isValid) {
            setForm((prev)=>{
                return {
                    ...prev,
                    passwordIsValid: true
                };
            });
        } else {
            setForm((prev)=>{
                return {
                    ...prev,
                    passwordIsValid: false
                };
            });
        }
    };
    const confirmpasswordOnBlurHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                passwordIsFocus: true
            };
        });
        const isValid = form.password === form.confirmpassword;
        if (isValid) {
            setForm((prev)=>{
                return {
                    ...prev,
                    confirmpasswordIsValid: true
                };
            });
        } else {
            setForm((prev)=>{
                return {
                    ...prev,
                    confirmpasswordIsValid: false
                };
            });
        }
    };
    const submitHandler = (event)=>{
        event.preventDefault();
        // Send form details to backend
        props.onSubmit({
            password: form.password,
            repeat_password: form.confirmpassword
        });
        // Clearing the input fields
        setForm({
            password: "",
            confirmpassword: "",
            passwordIsValid: false,
            confirmpasswordIsValid: false,
            passwordIsFocus: false,
            confirmpasswordIsFocus: false
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_ResetForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().reset__form),
        onSubmit: submitHandler,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_login_LoginInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
                id: "password",
                label: "New Password",
                type: showPassword ? "text" : "password",
                invalid: !form.passwordIsValid && form.passwordIsFocus ? "invalid" : "",
                placeholder: "e.g, Password@1234",
                value: form.password,
                onChange: passwordOnChangeHandler,
                onBlur: passwordOnBlurHandler,
                passwordIcon: passwordIcon,
                showPassword: showPassword,
                setShowPassword: setShowPassword
            }),
            form.passwordIsFocus && !form.passwordIsValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                className: (_ResetForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().invalid__input),
                children: "MinLength(8), uppercase, lowercase, character, number"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_login_LoginInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
                id: "confirmpassword",
                label: "Confirm New Password",
                type: showPassword ? "text" : "password",
                invalid: !form.confirmpasswordIsValid && form.confirmpasswordIsFocus ? "invalid" : "",
                placeholder: "e.g, Password@1234",
                value: form.confirmpassword,
                onChange: confirmpasswordOnChangeHandler,
                onBlur: confirmpasswordOnBlurHandler,
                passwordIcon: passwordIcon,
                showPassword: showPassword,
                setShowPassword: setShowPassword
            }),
            form.confirmpasswordIsFocus && !form.confirmpasswordIsValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                className: (_ResetForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().invalid__input),
                children: "MinLength(8), uppercase, lowercase, character, number"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ResetForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn__box),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    id: "btn__submit",
                    type: "submit",
                    disabled: !form.formIsValid,
                    className: (_ResetForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
                    children: "Reset"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ })

};
;