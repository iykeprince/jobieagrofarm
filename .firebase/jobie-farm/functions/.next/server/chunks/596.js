"use strict";
exports.id = 596;
exports.ids = [596];
exports.modules = {

/***/ 1596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Pagination = (props)=>{
    const productsPerPage = props.productsPerPage;
    const totalProducts = props.totalProducts;
    const total_pages = Math.ceil(totalProducts / productsPerPage);
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const prevHandler = ()=>{
        if (page === 1) return;
        setPage((page)=>page - 1);
        props.onChange(page - 1);
    };
    const nextHandler = ()=>{
        if (page === total_pages) return;
        setPage((page)=>page + 1);
        props.onChange(page + 1);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        "aria-label": "Page navigation example",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            class: "pagination justify-content-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    class: "page-item",
                    onClick: page <= 1 ? null : prevHandler,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        class: `page-link ${page <= 1 && "disabled"}`,
                        href: "#",
                        children: "Previous"
                    })
                }),
                Array.from({
                    length: total_pages
                }, (_, index)=>index + 1).map((each)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        class: "page-item",
                        onClick: ()=>{
                            props.onChange(each);
                            setPage((page)=>each);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            class: "page-link",
                            href: "#",
                            children: each
                        })
                    }, each)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    class: "page-item",
                    onClick: page >= total_pages ? null : nextHandler,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        class: `page-link ${page > total_pages && "disabled"}`,
                        href: "#",
                        children: "Next"
                    })
                })
            ]
        })
    });
// return (
//   <div className="pagination__card">
//     <div className="pagination__icons--box">
//       <i
//         onClick={prevHandler}
//         className={`icofont-arrow-left pagination__icons--prev ${
//           page === 1 ? ' not__allowed' : ''
//         }`}
//       ></i>
//       <p className="pagination__icons--paragraph">{page}</p>
//       <i
//         onClick={nextHandler}
//         className={` icofont-arrow-right pagination__icons--next ${
//           page === total_pages || total_pages < 1 ? ' not__allowed' : ''
//         }`}
//       ></i>
//     </div>
//     <div className="pagination__buttons">
//       {Array.from({ length: total_pages }, (_, index) => index + 1).map(
//         (each) => (
//           <button
//             key={each}
//             onClick={() => {
//               props.onChange(each)
//               setPage((page) => each)
//             }}
//           >
//             {each}
//           </button>
//         ),
//       )}
//     </div>
//   </div>
// )
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ })

};
;