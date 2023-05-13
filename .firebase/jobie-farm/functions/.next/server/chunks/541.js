exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 3626:
/***/ ((module) => {

// Exports
module.exports = {
	"desktop": "SelectedProducts_desktop__4C0Vg",
	"mobile": "SelectedProducts_mobile__ZQRZe",
	"table": "SelectedProducts_table__iQyeL",
	"tr": "SelectedProducts_tr__6ZALM",
	"delete": "SelectedProducts_delete__diVQJ",
	"add": "SelectedProducts_add__Keios",
	"image": "SelectedProducts_image__pu2m8",
	"ul": "SelectedProducts_ul__k4TVj",
	"li": "SelectedProducts_li__ElvSg",
	"box__1": "SelectedProducts_box__1__x2jKz",
	"title__box": "SelectedProducts_title__box__B7Nnv",
	"title": "SelectedProducts_title__lNfnl",
	"price__box": "SelectedProducts_price__box__TiGug",
	"actions": "SelectedProducts_actions__nR3rO",
	"total__price": "SelectedProducts_total__price__RuvWW"
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

/***/ 9720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SelectedProducts_SelectedProducts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./store/Products/ProductsSlice.js
var ProductsSlice = __webpack_require__(4438);
// EXTERNAL MODULE: ./components/SelectedProducts/SelectedProducts.module.css
var SelectedProducts_module = __webpack_require__(3626);
var SelectedProducts_module_default = /*#__PURE__*/__webpack_require__.n(SelectedProducts_module);
;// CONCATENATED MODULE: ./components/SelectedProducts/MobileSelectedItem.jsx





const MobileSelectedItem = ({ title , price , totalPrice , id , image , quantity  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const deleteCartItems = ()=>{
        dispatch(ProductsSlice/* ProductsActions.deleteCartItem */.a.deleteCartItem({
            id
        }));
    };
    const reduceCartItem = ()=>{
        dispatch(ProductsSlice/* ProductsActions.removeCartItem */.a.removeCartItem({
            id
        }));
    };
    const increaseCartItem = ()=>{
        dispatch(ProductsSlice/* ProductsActions.addCartItem */.a.addCartItem({
            id,
            title,
            image,
            price,
            amount: 1,
            totalPrice,
            quantity
        }));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: `${(SelectedProducts_module_default()).li}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (SelectedProducts_module_default()).box__1,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: image,
                        width: 80,
                        height: 20,
                        alt: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (SelectedProducts_module_default()).title__box,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (SelectedProducts_module_default()).title,
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (SelectedProducts_module_default()).price__box,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: price
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: (SelectedProducts_module_default()).actions,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: `icofont-ui-delete ${(SelectedProducts_module_default())["delete"]}`,
                                                    onClick: deleteCartItems
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: (SelectedProducts_module_default()).quantity,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: `icofont-minus ${(SelectedProducts_module_default()).add}`,
                                                            onClick: reduceCartItem
                                                        })
                                                    }),
                                                    quantity,
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: `icofont-plus ${(SelectedProducts_module_default()).add}`,
                                                            onClick: increaseCartItem
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (SelectedProducts_module_default()).total__price,
                children: [
                    "Total price: ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            "₦",
                            totalPrice
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const SelectedProducts_MobileSelectedItem = (MobileSelectedItem);

;// CONCATENATED MODULE: ./components/SelectedProducts/SelectedItem.jsx





const SelectedItem = ({ title , price , totalPrice , id , image , quantity  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const deleteCartItems = ()=>{
        dispatch(ProductsSlice/* ProductsActions.deleteCartItem */.a.deleteCartItem({
            id
        }));
    };
    const reduceCartItem = ()=>{
        dispatch(ProductsSlice/* ProductsActions.removeCartItem */.a.removeCartItem({
            id
        }));
    };
    const increaseCartItem = ()=>{
        dispatch(ProductsSlice/* ProductsActions.addCartItem */.a.addCartItem({
            id,
            title,
            image,
            price,
            amount: 1,
            totalPrice,
            quantity
        }));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: (SelectedProducts_module_default()).tr,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: `icofont-ui-delete ${(SelectedProducts_module_default())["delete"]}`,
                        onClick: deleteCartItems
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: (SelectedProducts_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: image,
                        width: 120,
                        height: 20,
                        alt: title
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: title
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: `icofont-minus ${(SelectedProducts_module_default()).add}`,
                                onClick: reduceCartItem
                            })
                        }),
                        quantity,
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: `icofont-plus ${(SelectedProducts_module_default()).add}`,
                                onClick: increaseCartItem
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                    children: [
                        "₦",
                        price
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                    children: [
                        "₦",
                        totalPrice
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const SelectedProducts_SelectedItem = (SelectedItem);

;// CONCATENATED MODULE: ./components/SelectedProducts/SelectedProducts.jsx





const SelectedProducts = ()=>{
    const { carts  } = (0,external_react_redux_.useSelector)((state)=>state.products);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(SelectedProducts_module_default()).desktop}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                    className: `${(SelectedProducts_module_default()).table}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                className: (SelectedProducts_module_default()).tr,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Remove"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Image"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Product Name"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Quantity"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Unit Price"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Total Price"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                            children: carts?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(SelectedProducts_SelectedItem, {
                                    id: item.id,
                                    title: item.title,
                                    totalPrice: item.totalPrice,
                                    price: item.price,
                                    image: item.image,
                                    quantity: item.quantity
                                }, item.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: `${(SelectedProducts_module_default()).mobile} ${(SelectedProducts_module_default()).ul}`,
                children: carts?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(SelectedProducts_MobileSelectedItem, {
                        id: item.id,
                        title: item.title,
                        totalPrice: item.totalPrice,
                        price: item.price,
                        image: item.image,
                        quantity: item.quantity
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const SelectedProducts_SelectedProducts = (SelectedProducts);


/***/ })

};
;