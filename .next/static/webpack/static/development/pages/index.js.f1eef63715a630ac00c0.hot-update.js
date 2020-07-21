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
    var subscribe = true;

    if (subscribe) {
      window.onscroll = handleTopo;
    }

    return function () {
      subscribe = false;
      console.log('unMount');
      window.stop();
    };
  }, []);

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

_s(Home, "PHc/x8VzfKAeoEucl9QADHSFyUk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Ib21lL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJoYW5kbGVUb3BvIiwid2luZG93Iiwic2Nyb2xsWSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzdWJzY3JpYmUiLCJvbnNjcm9sbCIsInN0b3AiLCJmZXRjaEFQSSIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJtYXAiLCJyZXBvIiwiaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUNUQyxLQURTO0FBQUEsTUFDRkMsUUFERTs7QUFJaEIsV0FBU0MsVUFBVCxHQUFzQjtBQUNwQixRQUFHQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsR0FBcEIsRUFBeUI7QUFDdkJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDRCxLQUZELE1BRU87QUFDTEQsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNEO0FBQ0Y7O0FBRURDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLFNBQVMsR0FBRyxJQUFoQjs7QUFDQSxRQUFHQSxTQUFILEVBQWM7QUFDWkwsWUFBTSxDQUFDTSxRQUFQLEdBQW1CUCxVQUFuQjtBQUNEOztBQUNELFdBQU8sWUFBTTtBQUNYTSxlQUFTLEdBQUcsS0FBWjtBQUNBSCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FILFlBQU0sQ0FBQ08sSUFBUDtBQUNELEtBSkQ7QUFNRCxHQVhRLEVBV04sRUFYTSxDQUFUOztBQWNBLE1BQU1DLFFBQVE7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNHQyxLQUFLLENBQUMsOENBQUQsQ0FEUjs7QUFBQTtBQUNUQyxpQkFEUztBQUFBO0FBQUEscUJBRUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUZKOztBQUFBO0FBRVRDLGtCQUZTO0FBR2ZkLHNCQUFRLENBQUNjLElBQUQsQ0FBUjs7QUFIZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSSixRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBTUFKLHlEQUFTLENBQUMsWUFBTTtBQUNkSSxZQUFRO0FBQ1QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlFLFNBQ0UsbUVBQ0NYLEtBQUssQ0FBQ2dCLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsV0FDWDtBQUFJLFNBQUcsRUFBRUEsSUFBSSxDQUFDQztBQUFkLE9BQW1CRCxJQUFJLENBQUNFLElBQXhCLENBRFc7QUFBQSxHQUFkLENBREQsRUFJSSxnQ0FKSixDQURGO0FBUUQ7O0dBNUNRckIsSTs7S0FBQUEsSTtBQThDTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmYxZWVmNjM3MTVhNjMwYWMwMGMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG5jb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUb3BvKCkge1xyXG4gIGlmKHdpbmRvdy5zY3JvbGxZID4gMjAwKSB7XHJcbiAgICBjb25zb2xlLmxvZygnb3BlbicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xvc2UnKTtcclxuICB9XHJcbn1cclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgbGV0IHN1YnNjcmliZSA9IHRydWU7XHJcbiAgaWYoc3Vic2NyaWJlKSB7XHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSAgaGFuZGxlVG9wbztcclxuICB9XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIHN1YnNjcmliZSA9IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2coJ3VuTW91bnQnKVxyXG4gICAgd2luZG93LnN0b3AoKVxyXG4gIH1cclxuXHJcbn0sIFtdKVxyXG5cclxuXHJcbmNvbnN0IGZldGNoQVBJID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9vcmdzL3JvY2tldHNlYXQvcmVwb3NcIilcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBzZXRQb3N0cyhkYXRhKTtcclxufSBcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgZmV0Y2hBUEkoKTtcclxufSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIHtwb3N0cy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgPGgxIGtleT17cmVwby5pZH0+e3JlcG8ubmFtZX08L2gxPlxyXG4gICAgICApKX1cclxuICAgICAgICA8aDE+SGVsbG8gV29ybGQ8L2gxPlxyXG4gICAgPC8+XHJcbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==