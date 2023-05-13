exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 1759:
/***/ ((module) => {

// Exports
module.exports = {
	"spinner__box": "LoadingSpinner_spinner__box__z3yXy",
	"spinner": "LoadingSpinner_spinner__CFooE"
};


/***/ }),

/***/ 526:
/***/ ((module) => {

// Exports
module.exports = {
	"login__form": "SignUpForm_login__form__UdkbN",
	"invalid__input": "SignUpForm_invalid__input__UhLAJ",
	"btn__box": "SignUpForm_btn__box__Ai212",
	"button": "SignUpForm_button__g7Zrl",
	"error__message": "SignUpForm_error__message__hk714"
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

/***/ 9546:
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
/* harmony import */ var _lib_Validations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9667);
/* harmony import */ var _login_LoginInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2875);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(143);
/* harmony import */ var _SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(526);
/* harmony import */ var _SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);







const Form = ({ setError , loading , onSubmit  })=>{
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showConfirmPassword, setShowConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [passwordIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
        confirmpassword: "",
        firstnameIsValid: false,
        phoneIsValid: false,
        lastnameIsValid: false,
        emailIsValid: false,
        passwordIsValid: false,
        confirmpasswordIsValid: false,
        firstnameIsFocus: false,
        lastnameIsFocus: false,
        phoneIsFocus: false,
        emailIsFocus: false,
        confirmpasswordIsFocus: false,
        formIsValid: false
    });
    const firstnameOnChangeHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                firstname: e.target.value
            };
        });
        const { firstnameIsValid  } = form;
        const isValid = e.target.value.length > 3 || e.target.value.length < 10;
        if (firstnameIsValid && isValid) {
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
    const lastnameOnChangeHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                lastname: e.target.value
            };
        });
        const { lastnameIsValid  } = form;
        const isValid = e.target.value.length > 3 || e.target.value.length < 10;
        if (lastnameIsValid && isValid) {
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
    const phoneOnChangeHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                phone: e.target.value
            };
        });
        const { phoneIsValid  } = form;
        const isValid = e.target.value.startsWith("+");
        if (phoneIsValid && isValid) {
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
    const emailOnChangeHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                email: e.target.value
            };
        });
        const { passwordIsValid  } = form;
        const isValid = (0,_lib_Validations__WEBPACK_IMPORTED_MODULE_5__/* .ValidateEmail */ .J)(e.target.value);
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
    const passwordOnChangeHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                password: e.target.value
            };
        });
        const { emailIsValid  } = form;
        const isValid = (0,_lib_Validations__WEBPACK_IMPORTED_MODULE_5__/* .ValidatePassword */ .X)(e.target.value);
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
    const firstnameOnBlurHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                firstnameIsFocus: true
            };
        });
        if (form.firstname.length >= 3 && form.firstname.length <= 8) {
            setForm((prev)=>{
                return {
                    ...prev,
                    firstnameIsValid: true
                };
            });
        } else {
            setForm((prev)=>{
                return {
                    ...prev,
                    firstnameIsValid: false
                };
            });
        }
    };
    const lastnameOnBlurHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                lastnameIsFocus: true
            };
        });
        if (form.lastname.length >= 3 && form.lastname.length <= 8) {
            setForm((prev)=>{
                return {
                    ...prev,
                    lastnameIsValid: true
                };
            });
        } else {
            setForm((prev)=>{
                return {
                    ...prev,
                    lastnameIsValid: false
                };
            });
        }
    };
    const phoneOnBlurHandler = (e)=>{
        setForm((prev)=>{
            return {
                ...prev,
                phoneIsFocus: true
            };
        });
        if (form.phone.startsWith("+")) {
            setForm((prev)=>{
                return {
                    ...prev,
                    phoneIsValid: true
                };
            });
        } else {
            setForm((prev)=>{
                return {
                    ...prev,
                    phoneIsValid: false
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
        const isValid = (0,_lib_Validations__WEBPACK_IMPORTED_MODULE_5__/* .ValidateEmail */ .J)(form.email);
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
        const isValid = (0,_lib_Validations__WEBPACK_IMPORTED_MODULE_5__/* .ValidatePassword */ .X)(form.password);
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
        onSubmit({
            first_name: form.firstname,
            last_name: form.lastname,
            email: form.email,
            phone: form.phone,
            password: form.password,
            repeat_password: form.confirmpassword
        });
        // Clearing the input fields
        setForm({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            phone: "",
            confirmpassword: "",
            firstnameIsValid: false,
            phoneIsValid: false,
            lastnameIsValid: false,
            emailIsValid: false,
            passwordIsValid: false,
            confirmpasswordIsValid: false,
            firstnameIsFocus: false,
            lastnameIsFocus: false,
            phoneIsFocus: false,
            emailIsFocus: false,
            confirmpasswordIsFocus: false,
            formIsValid: false
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().login__form),
        onSubmit: submitHandler,
        "data-testid": "login__form",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-6 col-sm-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_login_LoginInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                id: "firstname",
                                label: "First Name",
                                type: "text",
                                invalid: !form.firstnameIsValid && form.nameIsFocus ? "invalid" : "",
                                placeholder: "Enter your firstname",
                                value: form.firstname,
                                onChange: firstnameOnChangeHandler,
                                onBlur: firstnameOnBlurHandler
                            }),
                            form.firstnameIsFocus && !form.firstnameIsValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                className: (_SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().invalid__input),
                                children: "Enter a firstname of length above 3 & not more than 8"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-6 col-sm-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_login_LoginInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                id: "lastname",
                                label: "Last Name",
                                type: "text",
                                invalid: !form.lastnameIsValid && form.lastname ? "invalid" : "",
                                placeholder: "Enter your lastname",
                                value: form.lastname,
                                onChange: lastnameOnChangeHandler,
                                onBlur: lastnameOnBlurHandler
                            }),
                            form.lastnameIsFocus && !form.lastnameIsValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                className: (_SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().invalid__input),
                                children: "Enter a lastname of length above 3 & not more than 8"
                            })
                        ]
                    })
                ]
            }),
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
                className: (_SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().invalid__input),
                children: "Enter a valid email."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_login_LoginInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
                id: "phone",
                label: "Phone Number",
                type: "text",
                invalid: !form.phoneIsValid && form.phoneIsFocus ? "invalid" : "",
                placeholder: "e.g, +2349021002100",
                value: form.phone,
                onChange: phoneOnChangeHandler,
                onBlur: phoneOnBlurHandler
            }),
            form.phoneIsFocus && !form.phoneIsValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                className: (_SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().invalid__input),
                children: "Enter a Valid number"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-6 col-sm-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_login_LoginInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
                                className: (_SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().invalid__input),
                                children: "MinLength(8), uppercase, lowercase, character, number"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-6 col-sm-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_login_LoginInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                id: "confirmpassword",
                                label: "Confirm Password",
                                type: showPassword ? "text" : "password",
                                invalid: !form.confirmpasswordIsValid && form.confirmpasswordIsFocus ? "invalid" : "",
                                placeholder: "e.g, Password@1234",
                                value: form.confirmpassword,
                                onChange: confirmpasswordOnChangeHandler,
                                onBlur: confirmpasswordOnBlurHandler,
                                passwordIcon: passwordIcon,
                                showPassword: showConfirmPassword,
                                setShowPassword: setShowConfirmPassword
                            }),
                            form.confirmpasswordIsFocus && !form.confirmpasswordIsValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                className: (_SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().invalid__input),
                                children: "MinLength(8), uppercase, lowercase, character, number"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().btn__box),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    id: "btn__submit",
                    type: "submit",
                    disabled: !form.formIsValid || loading,
                    className: (_SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
                    children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}) : "Sign up"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ })

};
;