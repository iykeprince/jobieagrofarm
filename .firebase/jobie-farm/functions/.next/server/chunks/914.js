exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 1956:
/***/ ((module) => {

// Exports
module.exports = {
	"input__group": "UserInput_input__group__1_9uZ",
	"label": "UserInput_label__hrWpX",
	"input": "UserInput_input__Fc1Bk",
	"nav": "UserInput_nav__HumbZ",
	"nav__list": "UserInput_nav__list__MeSnC"
};


/***/ }),

/***/ 694:
/***/ ((module) => {

// Exports
module.exports = {
	"head": "User_head__6p2PJ",
	"container": "User_container__X5vad",
	"left": "User_left__cZ35A",
	"icon__box": "User_icon__box__pmjRB",
	"icon": "User_icon__mKO16",
	"profile__details": "User_profile__details__lbNc2",
	"p": "User_p__lt1DB",
	"span": "User_span__maLOu",
	"right": "User_right__YnWrp"
};


/***/ }),

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

/***/ 3057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ User_UserHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/User/UserInput.module.css
var UserInput_module = __webpack_require__(1956);
var UserInput_module_default = /*#__PURE__*/__webpack_require__.n(UserInput_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./components/NavLink.jsx




const NavLink = ({ href , exact , children , ...props })=>{
    const { pathname  } = (0,router_.useRouter)();
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    if (isActive) {
        props.className += " activeNav";
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        legacyBehavior: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            ...props,
            children: children
        })
    });
};
/* harmony default export */ const components_NavLink = (NavLink);
NavLink.propTypes = {
    href: (external_prop_types_default()).string.isRequired,
    exact: (external_prop_types_default()).bool
};
NavLink.defaultProps = {
    exact: false
};

;// CONCATENATED MODULE: ./components/User/UserHeader.jsx



const UserHeader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: (UserInput_module_default()).nav,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_NavLink, {
                    href: "/user",
                    exact: true,
                    className: (UserInput_module_default()).nav__list,
                    children: "Profile"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (UserInput_module_default()).nav__list,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_NavLink, {
                    href: "/user/orders",
                    exact: true,
                    className: (UserInput_module_default()).nav__list,
                    children: "Orders"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (UserInput_module_default()).nav__list,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_NavLink, {
                    href: "/user/transactions",
                    exact: true,
                    className: (UserInput_module_default()).nav__list,
                    children: "Transactions"
                })
            })
        ]
    });
};
/* harmony default export */ const User_UserHeader = (UserHeader);


/***/ })

};
;