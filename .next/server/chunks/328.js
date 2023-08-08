"use strict";
exports.id = 328;
exports.ids = [328];
exports.modules = {

/***/ 40328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70893);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47184);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(990);
/* harmony import */ var _helpers_ImageFallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47583);
/* harmony import */ var _config_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67969);
/* harmony import */ var _config_dataEn_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95402);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _feature_changeLanguage_changeLanguageSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48465);
/* __next_internal_client_entry_do_not_use__ default auto */ 









const BlogCard = ({ data })=>{
    const curlanguage = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_feature_changeLanguage_changeLanguageSlice__WEBPACK_IMPORTED_MODULE_7__/* .language */ .dK);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-body dark:bg-darkmode-body",
        children: [
            data.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_helpers_ImageFallback__WEBPACK_IMPORTED_MODULE_3__["default"], {
                className: "mb-6 w-full rounded",
                src: data.image,
                alt: data.title,
                width: 445,
                height: 230
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "mb-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `/blog/${data.id}`,
                    children: data.title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: "mr-4 inline-block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa_index_js__WEBPACK_IMPORTED_MODULE_8__/* .FaRegFolder */ .IEK, {
                                className: "-mt-1 mr-2 inline-block"
                            }),
                            data.categories?.map((category, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/categories/${(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .slugify */ .lV)(category)}`,
                                    children: [
                                        (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .humanize */ .OI)(category),
                                        index !== data.categories.length - 1 && ", "
                                    ]
                                }, index))
                        ]
                    }),
                    data.date && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "inline-block",
                        children: (0,_lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(data.date)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-6",
                dangerouslySetInnerHTML: {
                    __html: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .plainify */ .ab)(curlanguage.changeLanguage.value == "en" ? data.contentEn : data.content).slice(0, Number(200))
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "btn btn-outline-primary btn-sm",
                href: `/blog/${data.id}`,
                children: curlanguage.changeLanguage.value == "en" ? _config_dataEn_json__WEBPACK_IMPORTED_MODULE_5__/* .text2.name */ .EI.u : _config_data_json__WEBPACK_IMPORTED_MODULE_4__/* .text2.name */ .EI.u
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);


/***/ }),

/***/ 70893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32712);

const dateFormat = (date, format = "dd MMM, yyyy")=>{
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(date, "Asia/Ho_Chi_Minh", format);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dateFormat);


/***/ })

};
;