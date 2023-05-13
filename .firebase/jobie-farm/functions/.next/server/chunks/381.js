exports.id = 381;
exports.ids = [381];
exports.modules = {

/***/ 1759:
/***/ ((module) => {

// Exports
module.exports = {
	"spinner__box": "LoadingSpinner_spinner__box__z3yXy",
	"spinner": "LoadingSpinner_spinner__CFooE"
};


/***/ }),

/***/ 1405:
/***/ ((module) => {

// Exports
module.exports = {
	"login__form": "LoginForm_login__form__miDMi",
	"invalid__input": "LoginForm_invalid__input__ejeh2",
	"btn__box": "LoginForm_btn__box__N_drJ",
	"button": "LoginForm_button__raTPo",
	"error__message": "LoginForm_error__message__RaaNV",
	"forget": "LoginForm_forget__jiZSK"
};


/***/ }),

/***/ 3590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(924);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1759);
/* harmony import */ var _LoadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LoadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2__);



const LoadingSpinner = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_LoadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().spinner__box),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_1__.ImSpinner10, {
            className: (_LoadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().spinner)
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingSpinner);


/***/ }),

/***/ 9381:
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
/* harmony import */ var _lib_Validations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9667);
/* harmony import */ var _LoginInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2875);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(143);
/* harmony import */ var _LoginForm_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1405);
/* harmony import */ var _LoginForm_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);








const Form = ({ onSubmit , loading  })=>{
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [passwordIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        email: "",
        password: "",
        emailIsValid: false,
        passwordIsValid: false,
        emailIsFocus: false,
        passwordIsFocus: false
    });
    const emailOnChangeHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                email: e.target.value
            };
        });
    };
    const passwordOnChangeHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                password: e.target.value
            };
        });
    };
    // Allowing the user to unfocus the input field before checking if the input field is correct.
    const emailOnBlurHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                emailIsFocus: true
            };
        });
        const isValid = (0,_lib_Validations__WEBPACK_IMPORTED_MODULE_6__/* .ValidateEmail */ .J)(form.email);
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
    const passwordOnBlurHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                passwordIsFocus: true
            };
        });
        const isValid = (0,_lib_Validations__WEBPACK_IMPORTED_MODULE_6__/* .ValidatePassword */ .X)(form.password);
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
    const submitHandler = (event)=>{
        event.preventDefault();
        // Send form details to parent component
        onSubmit({
            email: form.email,
            password: form.password
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().login__form),
        onSubmit: submitHandler,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
                id: "email",
                label: "Email",
                type: "text",
                invalid: !form.emailIsValid && form.emailIsFocus ? "invalid" : "",
                placeholder: "example@name.com",
                value: form.email,
                onChange: emailOnChangeHandler,
                onBlur: emailOnBlurHandler
            }),
            form.emailIsFocus && !form.emailIsValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                className: (_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().invalid__input),
                children: "Please enter a valid email"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
                id: "password",
                label: "Password",
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
                className: (_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().invalid__input),
                children: "MinLength(8), uppercase, lowercase, character, number"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: "/forgot-password",
                className: (_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().forget),
                children: "Forgot password"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn__box),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    disabled: loading,
                    id: "btn__submit",
                    type: "submit",
                    className: (_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),
                    children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}) : "Sign In"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ })

};
;