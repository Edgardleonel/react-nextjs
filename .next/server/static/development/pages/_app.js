module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Danielle\\Desktop\\react-next\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = ({
  posts
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, "Header"), posts.map(repo => __jsx("h1", {
  key: repo.id,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 11
  }
}, repo.name)));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./next/with-react-router.js":
/*!***********************************!*\
  !*** ./next/with-react-router.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Danielle\\Desktop\\react-next\\next\\with-react-router.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const isServer = true;
/* harmony default export */ __webpack_exports__["default"] = (App => {
  return class AppWithReactRouter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      const {
        ctx: {
          req: {
            originalUrl,
            locals = {}
          }
        }
      } = appContext;
      return {
        originalUrl,
        context: locals.context || {}
      };
    }

    render() {
      if (isServer) {
        const {
          StaticRouter
        } = __webpack_require__(/*! react-router */ "react-router");

        return __jsx(StaticRouter, {
          location: this.props.originalUrl,
          context: this.props.context,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 11
          }
        }, __jsx(App, _extends({}, this.props, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }
        })));
      }

      return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }, __jsx(App, _extends({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }
      })));
    }

  };
});

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/Home/index.js":
/*!*****************************!*\
  !*** ./pages/Home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", null, "Hello World"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/Produto.js":
/*!**************************!*\
  !*** ./pages/Produto.js ***!
  \**************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Produto({
  posts
}) {
  return __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    posts: posts
  });
} // This also gets called at build time


async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://api.github.com/orgs/rocketseat/repos`);
  const posts = await res.json(); // Pass post data to the page via props

  return {
    props: {
      posts
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Produto);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _next_with_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../next/with-react-router */ "./next/with-react-router.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./pages/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./pages/routes.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(Component, pageProps);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_next_with_react_router__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp));

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Danielle\\Desktop\\react-next\\pages\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const About = ({
  posts
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, posts.map(repo => __jsx("h1", {
  key: repo.id,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 11
  }
}, repo.name))); // This also gets called at build time


async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://api.github.com/orgs/rocketseat/repos`);
  const posts = await res.json(); // Pass post data to the page via props

  return {
    props: {
      posts
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/routes.js":
/*!*************************!*\
  !*** ./pages/routes.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./pages/Home/index.js");
/* harmony import */ var _Produto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Produto */ "./pages/Produto.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./pages/about.js");
var _jsxFileName = "C:\\Users\\Danielle\\Desktop\\react-next\\pages\\routes.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Status({
  code,
  children
}) {
  return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    render: ({
      staticContext
    }) => {
      if (staticContext) staticContext.status = code;
      return children;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  });
}

function NotFound() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Status, {
    code: 404,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Not found"));
}

function Routes() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Welcome to Next.js!"), __jsx("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Home")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/produto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Produto")), __jsx("li", {
    className: "hvr-underline-from-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Sobre")))), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    component: _Home__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/about",
    component: _about__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/produto",
    component: _Produto__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: NotFound,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./pages/styles.css":
/*!**************************!*\
  !*** ./pages/styles.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL25leHQvd2l0aC1yZWFjdC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Qcm9kdXRvLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIl0sIm5hbWVzIjpbIkhlYWRlciIsInBvc3RzIiwibWFwIiwicmVwbyIsImlkIiwibmFtZSIsImlzU2VydmVyIiwiQXBwIiwiQXBwV2l0aFJlYWN0Um91dGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiY3R4IiwicmVxIiwib3JpZ2luYWxVcmwiLCJsb2NhbHMiLCJjb250ZXh0IiwicmVuZGVyIiwiU3RhdGljUm91dGVyIiwicmVxdWlyZSIsInByb3BzIiwicGFnZVByb3BzIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiSG9tZSIsIlByb2R1dG8iLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiIsIk15QXBwIiwid2l0aFJlYWN0Um91dGVyIiwiQWJvdXQiLCJTdGF0dXMiLCJjb2RlIiwiY2hpbGRyZW4iLCJzdGF0aWNDb250ZXh0Iiwic3RhdHVzIiwiTm90Rm91bmQiLCJSb3V0ZXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7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XFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgcG9zdHMgfSkgPT4gKFxyXG4gICAgPD5cclxuICAgIDxoMT5IZWFkZXI8L2gxPlxyXG4gICAgIHtwb3N0cy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICA8aDEga2V5PXtyZXBvLmlkfT57cmVwby5uYW1lfTwvaDE+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG4gIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QnJvd3NlclJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHAgPT4ge1xyXG4gIHJldHVybiBjbGFzcyBBcHBXaXRoUmVhY3RSb3V0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBjdHg6IHtcclxuICAgICAgICAgIHJlcToge1xyXG4gICAgICAgICAgICBvcmlnaW5hbFVybCxcclxuICAgICAgICAgICAgbG9jYWxzID0ge30sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0gPSBhcHBDb250ZXh0O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG9yaWdpbmFsVXJsLFxyXG4gICAgICAgIGNvbnRleHQ6IGxvY2Fscy5jb250ZXh0IHx8IHt9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgaWYgKGlzU2VydmVyKSB7XHJcbiAgICAgICAgY29uc3Qge1N0YXRpY1JvdXRlcn0gPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFN0YXRpY1JvdXRlclxyXG4gICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5vcmlnaW5hbFVybH1cclxuICAgICAgICAgICAgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QXBwIHsuLi50aGlzLnByb3BzfSAvPlxyXG4gICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgPEFwcCB7Li4udGhpcy5wcm9wc30gLz5cclxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPGgxPkhlbGxvIFdvcmxkPC9oMT5cclxuICAgIDwvPlxyXG4pO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcblxyXG5cclxuZnVuY3Rpb24gUHJvZHV0byh7cG9zdHN9KSB7XHJcbiAgcmV0dXJuIDxIZWFkZXIgcG9zdHM9e3Bvc3RzfS8+O1xyXG59XHJcblxyXG4gIC8vIFRoaXMgYWxzbyBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lXHJcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vIHBhcmFtcyBjb250YWlucyB0aGUgcG9zdCBgaWRgLlxyXG4gIC8vIElmIHRoZSByb3V0ZSBpcyBsaWtlIC9wb3N0cy8xLCB0aGVuIHBhcmFtcy5pZCBpcyAxXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vb3Jncy9yb2NrZXRzZWF0L3JlcG9zYClcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICBcclxuICAvLyBQYXNzIHBvc3QgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcclxuICByZXR1cm4geyBwcm9wczogeyBwb3N0cyB9IH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUHJvZHV0bztcclxuICAiLCJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHdpdGhSZWFjdFJvdXRlciBmcm9tICcuLi9uZXh0L3dpdGgtcmVhY3Qtcm91dGVyJztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVhY3RSb3V0ZXIoTXlBcHApOyIsImNvbnN0IEFib3V0ID0gKHsgcG9zdHMgfSkgPT4gKFxyXG4gICAgPD5cclxuICAgICB7cG9zdHMubWFwKHJlcG8gPT4gKFxyXG4gICAgICAgICAgPGgxIGtleT17cmVwby5pZH0+e3JlcG8ubmFtZX08L2gxPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcblxyXG4gIC8vIFRoaXMgYWxzbyBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvLyBwYXJhbXMgY29udGFpbnMgdGhlIHBvc3QgYGlkYC5cclxuICAvLyBJZiB0aGUgcm91dGUgaXMgbGlrZSAvcG9zdHMvMSwgdGhlbiBwYXJhbXMuaWQgaXMgMVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL29yZ3Mvcm9ja2V0c2VhdC9yZXBvc2ApXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIC8vIFBhc3MgcG9zdCBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xyXG4gIHJldHVybiB7IHByb3BzOiB7IHBvc3RzIH0gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuICAgIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcclxuaW1wb3J0IFByb2R1dG8gZnJvbSAnLi9Qcm9kdXRvJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vYWJvdXQnO1xyXG5cclxuZnVuY3Rpb24gU3RhdHVzKHsgY29kZSwgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJvdXRlXHJcbiAgICAgICAgcmVuZGVyPXsoeyBzdGF0aWNDb250ZXh0IH0pID0+IHtcclxuICAgICAgICAgIGlmIChzdGF0aWNDb250ZXh0KSBzdGF0aWNDb250ZXh0LnN0YXR1cyA9IGNvZGU7XHJcbiAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICk7IFxyXG4gIH1cclxuICBcclxuICBcclxuICBmdW5jdGlvbiBOb3RGb3VuZCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFN0YXR1cyBjb2RlPXs0MDR9Lz5cclxuICAgICAgICA8aDI+Tm90IGZvdW5kPC9oMj5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gUm91dGVzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+V2VsY29tZSB0byBOZXh0LmpzITwvaDE+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9wcm9kdXRvXCI+UHJvZHV0bzwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgIGNsYXNzTmFtZT1cImh2ci11bmRlcmxpbmUtZnJvbS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvYWJvdXRcIj5Tb2JyZTwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgY29tcG9uZW50PXtIb21lfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0XCIgIGNvbXBvbmVudD17QWJvdXR9IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHV0b1wiIGNvbXBvbmVudD17UHJvZHV0b30gLz5cclxuICAgIFxyXG5cclxuICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZH0vPlxyXG4gICAgICA8L1N3aXRjaD5cclxuICAgIDwvZGl2PlxyXG4gICk7IFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXM7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9