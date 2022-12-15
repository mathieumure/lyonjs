(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/.pnpm/normalize.css@8.0.1/node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(4431);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(2128);
;// CONCATENATED MODULE: external "dayjs/locale/fr"
const fr_namespaceObject = require("dayjs/locale/fr");
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./pages/_app.tsx





external_dayjs_default().locale("fr");
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4431:
/***/ (() => {



/***/ }),

/***/ 2128:
/***/ (() => {



/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5752));
module.exports = __webpack_exports__;

})();