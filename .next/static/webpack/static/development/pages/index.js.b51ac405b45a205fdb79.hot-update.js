webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/Home/index.js":
/*!*****************************!*\
  !*** ./pages/Home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  function handleTopo() {
    if (window.scrollY > 200) {
      console.log('open');
    } else {
      console.log('close');
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('scroll', handleTopo());
    return function () {
      console.log('unMount');
      window.removeEventListener('scroll');
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {}, []);

  var fetchAPI = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://api.github.com/orgs/rocketseat/repos");

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;
              setPosts(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchAPI() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchAPI();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, posts.map(function (repo) {
    return __jsx("h1", {
      key: repo.id
    }, repo.name);
  }), __jsx("h1", null, "Hello World"));
}

_s(Home, "OIhgeEFa0V+OgeTUaYZ+FGUzJdE=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Ib21lL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJoYW5kbGVUb3BvIiwid2luZG93Iiwic2Nyb2xsWSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZldGNoQVBJIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsIm1hcCIsInJlcG8iLCJpZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ1RDLEtBRFM7QUFBQSxNQUNGQyxRQURFOztBQUloQixXQUFTQyxVQUFULEdBQXNCO0FBQ3BCLFFBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQUFwQixFQUF5QjtBQUN2QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNELEtBRkQsTUFFTztBQUNMRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7QUFDRjs7QUFFREMseURBQVMsQ0FBQyxZQUFNO0FBQ1pKLFVBQU0sQ0FBQ0ssZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NOLFVBQVUsRUFBNUM7QUFDQSxXQUFPLFlBQU07QUFDWEcsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBSCxZQUFNLENBQUNNLG1CQUFQLENBQTJCLFFBQTNCO0FBQ0QsS0FIRDtBQUlILEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQUYseURBQVMsQ0FBQyxZQUFNLENBRWYsQ0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFLQSxNQUFNRyxRQUFRO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDR0MsS0FBSyxDQUFDLDhDQUFELENBRFI7O0FBQUE7QUFDVEMsaUJBRFM7QUFBQTtBQUFBLHFCQUVJQSxHQUFHLENBQUNDLElBQUosRUFGSjs7QUFBQTtBQUVUQyxrQkFGUztBQUdmYixzQkFBUSxDQUFDYSxJQUFELENBQVI7O0FBSGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkosUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQU1BSCx5REFBUyxDQUFDLFlBQU07QUFDZEcsWUFBUTtBQUNULEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJRSxTQUNFLG1FQUNDVixLQUFLLENBQUNlLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsV0FDWDtBQUFJLFNBQUcsRUFBRUEsSUFBSSxDQUFDQztBQUFkLE9BQW1CRCxJQUFJLENBQUNFLElBQXhCLENBRFc7QUFBQSxHQUFkLENBREQsRUFJSSxnQ0FKSixDQURGO0FBUUQ7O0dBM0NRcEIsSTs7S0FBQUEsSTtBQTZDTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmI1MWFjNDA1YjQ1YTIwNWZkYjc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG5jb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUb3BvKCkge1xyXG4gIGlmKHdpbmRvdy5zY3JvbGxZID4gMjAwKSB7XHJcbiAgICBjb25zb2xlLmxvZygnb3BlbicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xvc2UnKTtcclxuICB9XHJcbn1cclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlVG9wbygpKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1bk1vdW50JylcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcpXHJcbiAgICB9XHJcbn0sIFtdKVxyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbn0sIFtdKVxyXG5cclxuXHJcbmNvbnN0IGZldGNoQVBJID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9vcmdzL3JvY2tldHNlYXQvcmVwb3NcIilcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBzZXRQb3N0cyhkYXRhKTtcclxufSBcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgZmV0Y2hBUEkoKTtcclxufSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIHtwb3N0cy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgPGgxIGtleT17cmVwby5pZH0+e3JlcG8ubmFtZX08L2gxPlxyXG4gICAgICApKX1cclxuICAgICAgICA8aDE+SGVsbG8gV29ybGQ8L2gxPlxyXG4gICAgPC8+XHJcbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==