"use strict";
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 30108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ partials_PageHeader)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/layouts/components/Breadcrumbs.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Nguyen Ngoc Phu\Documents\GitHub\website-lpc\src\layouts\components\Breadcrumbs.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Breadcrumbs = (__default__);
// EXTERNAL MODULE: ./src/lib/utils/textConverter.ts
var textConverter = __webpack_require__(15915);
;// CONCATENATED MODULE: ./src/layouts/partials/PageHeader.tsx



const PageHeader = ({ title })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container text-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14 dark:from-darkmode-body dark:to-darkmode-theme-light",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: (0,textConverter/* humanize */.OI)(title)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumbs, {
                        className: "mt-6"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const partials_PageHeader = (PageHeader);


/***/ })

};
;