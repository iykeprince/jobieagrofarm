"use strict";
exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 5096:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth),
/* harmony export */   "s": () => (/* binding */ AuthUserProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1125);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__]);
_hooks_useFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const authUserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    authUser: null,
    loading: true,
    signOut: async ()=>{},
    signInWithCustomEmailAndPassword: async (email, password)=>{},
    createNewUserWithEmailAndPassword: async (email, password)=>{},
    updateUsername: async (user, name)=>{},
    signInWithGoogle: async ()=>{},
    signInWithFacebook: async ()=>{}
});
// authUser,
// loading,
// signInWithCustomEmailAndPassword,
// createNewUserWithEmailAndPassword,
// updateUsername,
// signInWithGoogle,
// signInWithFacebook,
// signOut,
function AuthUserProvider({ children  }) {
    const auth = (0,_hooks_useFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    // useEffect(() => {
    //   console.log('auth.authUser',auth.authUser)
    //   if(!auth.authUser) {
    //       router.push("/")
    //   }
    // }, [auth?.authUser])
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(authUserContext.Provider, {
        value: auth,
        children: children
    });
}
const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authUserContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a": () => (/* binding */ ProductsActions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    products: [],
    carts: [],
    totalAmount: 0,
    totalQuantity: 0,
    changed: false,
    users: [],
    transactions: [],
    filteredTransactions: [],
    noTransaction: false,
    orders: [],
    filteredOrders: [],
    noOrder: false
};
const ProductsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "products",
    initialState: initialState,
    reducers: {
        addProducts (state, action) {
            state.products = action.payload.products;
        },
        addCartItem (state, action) {
            state.totalQuantity++;
            const newItem = action.payload;
            const existingItem = state.carts.find((item)=>item.id === newItem.id);
            const updatedAmount = +state.totalAmount + +newItem.price;
            state.totalAmount = updatedAmount.toFixed(2);
            const newItemPrice = +newItem.price;
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = Math.round(existingItem.totalPrice + Number(parseFloat(newItemPrice).toFixed(2)));
            } else {
                state.carts.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: Number(parseFloat(newItemPrice).toFixed(2)),
                    title: newItem.title,
                    image: newItem.image,
                    type: newItem.type
                });
            }
        },
        removeCartItem (state, action) {
            const { id  } = action.payload;
            const existingItem = state.carts.find((item)=>item.id === id);
            const updatedAmount = +state.totalAmount - +existingItem.price;
            state.totalAmount = updatedAmount.toFixed(2);
            state.totalQuantity = state.totalQuantity - +existingItem.quantity;
            if (existingItem.quantity === 1) {
                state.carts = state.carts.filter((item)=>item.id !== id);
            } else {
                const newAmount = existingItem.totalPrice - existingItem.price;
                existingItem.quantity--;
                existingItem.totalPrice = newAmount.toFixed(2);
            }
        },
        deleteCartItem (state, action) {
            const { id  } = action.payload;
            const existingItem = state.carts.find((item)=>item.id === id);
            const updatedAmount = +state.totalAmount - +existingItem.totalPrice;
            state.totalAmount = updatedAmount.toFixed(2);
            state.totalQuantity = state.totalQuantity - +existingItem.quantity;
            state.carts = state.carts.filter((item)=>item.id !== id);
        },
        addUsers (state, action) {
            state.users = action.payload.users;
        },
        addTransactions (state, action) {
            state.transactions = action.payload.transactions;
        },
        addOrders (state, action) {
            state.orders = action.payload.orders;
        },
        filterByDate (state, action) {
            function isDateInRange(dateToCheck, startDate, endDate) {
                return dateToCheck >= startDate && dateToCheck <= endDate;
            }
            const { startDate , endDate  } = action.payload;
            const filtered = state.transactions.filter((item)=>{
                const date = new Date(item.date);
                if (isDateInRange(date, startDate, endDate)) return true;
                else return false;
            });
            if (filtered.length === 0) {
                state.noTransaction = true;
            } else {
                state.noTransaction = false;
            }
            state.filteredTransactions = filtered;
        },
        filterOrders (state, action) {
            const { type , order , payment  } = action.payload;
            if (type === "All" && order === "All" && payment === "All") {
                state.filteredOrders = state.orders;
                return;
            }
            const filtered = state.orders.filter((ord)=>{
                return (ord.type === type || type === "All") && (ord.orderStatus === order || order === "All") && (ord.paymentStatus === payment || payment === "All");
            });
            state.filteredOrders = filtered;
        }
    }
});
const ProductsActions = ProductsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsSlice.reducer);


/***/ })

};
;