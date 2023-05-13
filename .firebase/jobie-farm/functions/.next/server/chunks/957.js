"use strict";
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 9557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Products_Products)
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
// EXTERNAL MODULE: ./styles/Cart.module.css
var Cart_module = __webpack_require__(994);
var Cart_module_default = /*#__PURE__*/__webpack_require__.n(Cart_module);
;// CONCATENATED MODULE: ./components/Products/ProductItem.jsx





const ProductsItem = ({ id , title , image , price , type , quantity  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const addCartItem = async ()=>{
        dispatch(ProductsSlice/* ProductsActions.addCartItem */.a.addCartItem({
            id,
            title,
            image,
            price,
            amount: 1,
            type
        }));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-xl-3 col-lg-4 col-sm-6 col-12",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "product-item-2",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "product-inner",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product-thumb",
                        style: {
                            height: "280px",
                            position: "relative"
                        },
                        children: [
                            quantity <= 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    zIndex: 100
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        padding: "4px",
                                        backgroundColor: "#000",
                                        color: "#fff"
                                    },
                                    children: "OUT OF STOCK"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: image,
                                alt: "product",
                                width: 250,
                                height: 100
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product-content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: title
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "rating",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "far fa-star"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "far fa-star"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "far fa-star"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "far fa-star"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "far fa-star"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                className: "price",
                                children: [
                                    "₦",
                                    price
                                ]
                            }),
                            quantity > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(Cart_module_default()).add__btn} cart-option`,
                                onClick: addCartItem,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "lab-btn",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Add To Cart"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const ProductItem = (ProductsItem);

;// CONCATENATED MODULE: ./components/Products/Products.jsx



const Products = ({ start , end  })=>{
    const products = (0,external_react_redux_.useSelector)((state)=>state.products.products);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "section-wrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center mb-15-none",
                    children: products.slice(start, end).map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductItem, {
                            id: product.id,
                            title: product.title,
                            image: product.image,
                            price: product.price,
                            type: product.type,
                            quantity: product.quantity
                        }, product.id))
                })
            })
        })
    });
};
/* harmony default export */ const Products_Products = (Products);


/***/ })

};
;