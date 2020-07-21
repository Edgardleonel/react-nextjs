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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  function handleTopo() {
    if (window.scrollY > 200) {
      console.log('open');
    } else {
      console.log('close');
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let subscribe = true;
    console.log('DidMount');

    if (subscribe) {
      window.addEventListener('scroll', handleTopo);
    }

    return () => {
      subscribe = false;
      console.log('WillUnMount');
      window.removeEventListener('scroll', handleTopo);
    };
  }, []);

  const fetchAPI = async () => {
    const res = await fetch("https://api.github.com/orgs/rocketseat/repos");
    const data = await res.json();
    setPosts(data);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchAPI();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, posts.map(repo => __jsx("h1", {
    key: repo.id
  }, repo.name)), __jsx("h1", null, "Hello World"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./pages/routes.js");
/* harmony import */ var _routes2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes2 */ "./pages/routes2.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function App() {
  return __jsx("div", null, __jsx("h1", null, "Welcome to Next.js!"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

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
    }
  });
}

function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", null, "Home"), __jsx("nav", null, __jsx("ul", null, __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "Home")), __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about/"
  }, "About")), __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/users/"
  }, "Users")), __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/people/"
  }, "People")), __jsx("li", {
    className: "hvr-underline-from-center"
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/posts/1"
  }, "Posts")))));
}

function About() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", null, "Home"), __jsx("nav", null, __jsx("ul", null, __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "Home")), __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about/"
  }, "About")), __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/users/"
  }, "Users")), __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/people/"
  }, "People")), __jsx("li", {
    className: "hvr-underline-from-center"
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/posts/1"
  }, "Posts")))));
}

function Users() {
  return __jsx("h2", null, "Users");
}

function NotFound() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Status, {
    code: 404
  }), __jsx("h2", null, "Not found"));
}

function Routes() {
  return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    component: Index
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/about/",
    component: About
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/users/",
    component: Users
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/posts/:id",
    component: _Home__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), __jsx(react_router__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    from: "/people/",
    to: "/users/"
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: NotFound
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./pages/routes2.js":
/*!**************************!*\
  !*** ./pages/routes2.js ***!
  \**************************/
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
    }
  });
}

function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", null, "Home"), __jsx("nav", null, __jsx("ul", null, __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "Home")), __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/posts/1"
  }, "Posts")))));
}

function About() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", null, "Home"), __jsx("nav", null, __jsx("ul", null, __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "Home 2")), __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/posts/1"
  }, "Posts 2")))));
}

function Users() {
  return __jsx("h2", null, "Users");
}

function NotFound() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Status, {
    code: 404
  }), __jsx("h2", null, "Not found"));
}

function Routes() {
  return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    component: Index
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/posts/:id",
    component: _Home__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), __jsx(react_router__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    from: "/people/",
    to: "/users/"
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: NotFound
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Danielle\Desktop\react-next\pages\index.js */"./pages/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcm91dGVzMi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiJdLCJuYW1lcyI6WyJIb21lIiwicG9zdHMiLCJzZXRQb3N0cyIsInVzZVN0YXRlIiwiaGFuZGxlVG9wbyIsIndpbmRvdyIsInNjcm9sbFkiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Iiwic3Vic2NyaWJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmZXRjaEFQSSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJtYXAiLCJyZXBvIiwiaWQiLCJuYW1lIiwiQXBwIiwiU3RhdHVzIiwiY29kZSIsImNoaWxkcmVuIiwic3RhdGljQ29udGV4dCIsInN0YXR1cyIsIkluZGV4IiwiQWJvdXQiLCJVc2VycyIsIk5vdEZvdW5kIiwiUm91dGVzIiwiUG9zdHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFF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LE1BQUMsTUFBRDtBQUFRLFFBQUksRUFBRTtBQUFkLElBREYsRUFFRSw4QkFGRixDQURGO0FBTUQ7O0FBRUgsU0FBU0MsTUFBVCxHQUFrQjtBQUNoQixTQUNBLE1BQUMsdURBQUQsUUFDRSxNQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBZ0IsU0FBSyxNQUFyQjtBQUFzQixhQUFTLEVBQUVKO0FBQWpDLElBREYsRUFFRSxNQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLFlBQVo7QUFBeUIsYUFBUyxFQUFFSyw2Q0FBS0E7QUFBekMsSUFGRixFQUdFLE1BQUMscURBQUQ7QUFBVSxRQUFJLEVBQUMsVUFBZjtBQUEwQixNQUFFLEVBQUM7QUFBN0IsSUFIRixFQUlFLE1BQUMsc0RBQUQ7QUFBTyxhQUFTLEVBQUVGO0FBQWxCLElBSkYsQ0FEQTtBQVFEOztBQUVjQyxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG5jb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUb3BvKCkge1xyXG4gIGlmKHdpbmRvdy5zY3JvbGxZID4gMjAwKSB7XHJcbiAgICBjb25zb2xlLmxvZygnb3BlbicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xvc2UnKTtcclxuICB9XHJcbn1cclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgbGV0IHN1YnNjcmliZSA9IHRydWU7XHJcbiAgY29uc29sZS5sb2coJ0RpZE1vdW50JylcclxuICBpZihzdWJzY3JpYmUpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVUb3BvKVxyXG4gIH1cclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgc3Vic2NyaWJlID0gZmFsc2U7XHJcbiAgICBjb25zb2xlLmxvZygnV2lsbFVuTW91bnQnKVxyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVRvcG8pXHJcbiAgfVxyXG59LCBbXSlcclxuXHJcblxyXG5jb25zdCBmZXRjaEFQSSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vb3Jncy9yb2NrZXRzZWF0L3JlcG9zXCIpXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgc2V0UG9zdHMoZGF0YSk7XHJcbn0gXHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGZldGNoQVBJKCk7XHJcbn0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICB7cG9zdHMubWFwKHJlcG8gPT4gKFxyXG4gICAgICAgIDxoMSBrZXk9e3JlcG8uaWR9PntyZXBvLm5hbWV9PC9oMT5cclxuICAgICAgKSl9XHJcbiAgICAgICAgPGgxPkhlbGxvIFdvcmxkPC9oMT5cclxuICAgIDwvPlxyXG4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuaW1wb3J0IFJvdXRlczIgZnJvbSAnLi9yb3V0ZXMyJztcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPldlbGNvbWUgdG8gTmV4dC5qcyE8L2gxPlxyXG4gICAgPFJvdXRlcyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBQb3N0cyBmcm9tICcuL0hvbWUnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFN0YXR1cyh7IGNvZGUsIGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSb3V0ZVxyXG4gICAgICAgIHJlbmRlcj17KHsgc3RhdGljQ29udGV4dCB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoc3RhdGljQ29udGV4dCkgc3RhdGljQ29udGV4dC5zdGF0dXMgPSBjb2RlO1xyXG4gICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICApOyBcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxoMj5Ib21lPC9oMj5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9hYm91dC9cIj5BYm91dDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3VzZXJzL1wiPlVzZXJzPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvcGVvcGxlL1wiPlBlb3BsZTwvTGluaz5cclxuICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImh2ci11bmRlcmxpbmUtZnJvbS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvcG9zdHMvMVwiPlBvc3RzPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT4gXHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBBYm91dCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxoMj5Ib21lPC9oMj5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0L1wiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvdXNlcnMvXCI+VXNlcnM8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9wZW9wbGUvXCI+UGVvcGxlPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPiBcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImh2ci11bmRlcmxpbmUtZnJvbS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9wb3N0cy8xXCI+UG9zdHM8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgZnVuY3Rpb24gVXNlcnMoKSB7XHJcbiAgICByZXR1cm4gPGgyPlVzZXJzPC9oMj47XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIE5vdEZvdW5kKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8U3RhdHVzIGNvZGU9ezQwNH0vPlxyXG4gICAgICAgIDxoMj5Ob3QgZm91bmQ8L2gyPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcblxyXG5mdW5jdGlvbiBSb3V0ZXMoKSB7XHJcbiAgcmV0dXJuIChcclxuICA8U3dpdGNoPlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgY29tcG9uZW50PXtJbmRleH0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0L1wiIGNvbXBvbmVudD17QWJvdXR9IC8+XHJcbiAgICA8Um91dGUgcGF0aD1cIi91c2Vycy9cIiBjb21wb25lbnQ9e1VzZXJzfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvcG9zdHMvOmlkXCIgY29tcG9uZW50PXtQb3N0c30gLz5cclxuICAgIDxSZWRpcmVjdCBmcm9tPVwiL3Blb3BsZS9cIiB0bz1cIi91c2Vycy9cIiAvPlxyXG4gICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmR9Lz5cclxuICA8L1N3aXRjaD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IFBvc3RzIGZyb20gJy4vSG9tZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gU3RhdHVzKHsgY29kZSwgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJvdXRlXHJcbiAgICAgICAgcmVuZGVyPXsoeyBzdGF0aWNDb250ZXh0IH0pID0+IHtcclxuICAgICAgICAgIGlmIChzdGF0aWNDb250ZXh0KSBzdGF0aWNDb250ZXh0LnN0YXR1cyA9IGNvZGU7XHJcbiAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICk7IFxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGgyPkhvbWU8L2gyPlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Bvc3RzLzFcIj5Qb3N0czwvTGluaz5cclxuICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBBYm91dCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxoMj5Ib21lPC9oMj5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZSAyPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvcG9zdHMvMVwiPlBvc3RzIDI8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgZnVuY3Rpb24gVXNlcnMoKSB7XHJcbiAgICByZXR1cm4gPGgyPlVzZXJzPC9oMj47XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIE5vdEZvdW5kKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8U3RhdHVzIGNvZGU9ezQwNH0vPlxyXG4gICAgICAgIDxoMj5Ob3QgZm91bmQ8L2gyPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcblxyXG5mdW5jdGlvbiBSb3V0ZXMoKSB7XHJcbiAgcmV0dXJuIChcclxuICA8U3dpdGNoPlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgY29tcG9uZW50PXtJbmRleH0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPVwiL3Bvc3RzLzppZFwiIGNvbXBvbmVudD17UG9zdHN9IC8+XHJcbiAgICA8UmVkaXJlY3QgZnJvbT1cIi9wZW9wbGUvXCIgdG89XCIvdXNlcnMvXCIgLz5cclxuICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kfS8+XHJcbiAgPC9Td2l0Y2g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=