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
    event.preventDefault();

    if (window.scrollY > 200) {
      console.log('open');
    } else {
      console.log('close');
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var subscribe = true;

    if (subscribe) {
      window.onscroll = function () {
        return handleTopo();
      };
    }

    return function () {
      subscribe = false;
      console.log('unMount');
      window.removeEventListener('scroll', handleTopo());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Ib21lL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJoYW5kbGVUb3BvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsInNjcm9sbFkiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Iiwic3Vic2NyaWJlIiwib25zY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmV0Y2hBUEkiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwibWFwIiwicmVwbyIsImlkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsTUFDVEMsS0FEUztBQUFBLE1BQ0ZDLFFBREU7O0FBSWhCLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEJDLFNBQUssQ0FBQ0MsY0FBTjs7QUFDQSxRQUFHQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsR0FBcEIsRUFBeUI7QUFDdkJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDRCxLQUZELE1BRU87QUFDTEQsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNEO0FBQ0Y7O0FBRURDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLFNBQVMsR0FBRyxJQUFoQjs7QUFDQSxRQUFHQSxTQUFILEVBQWM7QUFDWkwsWUFBTSxDQUFDTSxRQUFQLEdBQWtCO0FBQUEsZUFBTVQsVUFBVSxFQUFoQjtBQUFBLE9BQWxCO0FBQ0Q7O0FBQ0QsV0FBTyxZQUFNO0FBQ1hRLGVBQVMsR0FBRyxLQUFaO0FBQ0FILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQUgsWUFBTSxDQUFDTyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1YsVUFBVSxFQUEvQztBQUNELEtBSkQ7QUFNRCxHQVhRLEVBV04sRUFYTSxDQUFUOztBQWNBLE1BQU1XLFFBQVE7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNHQyxLQUFLLENBQUMsOENBQUQsQ0FEUjs7QUFBQTtBQUNUQyxpQkFEUztBQUFBO0FBQUEscUJBRUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUZKOztBQUFBO0FBRVRDLGtCQUZTO0FBR2ZoQixzQkFBUSxDQUFDZ0IsSUFBRCxDQUFSOztBQUhlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJKLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFNQUoseURBQVMsQ0FBQyxZQUFNO0FBQ2RJLFlBQVE7QUFDVCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUUsU0FDRSxtRUFDQ2IsS0FBSyxDQUFDa0IsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUNYO0FBQUksU0FBRyxFQUFFQSxJQUFJLENBQUNDO0FBQWQsT0FBbUJELElBQUksQ0FBQ0UsSUFBeEIsQ0FEVztBQUFBLEdBQWQsQ0FERCxFQUlJLGdDQUpKLENBREY7QUFRRDs7R0E3Q1F2QixJOztLQUFBQSxJO0FBK0NNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzc1ZjZhMThkMTczYjM1N2ZiNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbmNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRvcG8oKSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBpZih3aW5kb3cuc2Nyb2xsWSA+IDIwMCkge1xyXG4gICAgY29uc29sZS5sb2coJ29wZW4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ2Nsb3NlJyk7XHJcbiAgfVxyXG59XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGxldCBzdWJzY3JpYmUgPSB0cnVlO1xyXG4gIGlmKHN1YnNjcmliZSkge1xyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4gaGFuZGxlVG9wbygpO1xyXG4gIH1cclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgc3Vic2NyaWJlID0gZmFsc2U7XHJcbiAgICBjb25zb2xlLmxvZygndW5Nb3VudCcpXHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlVG9wbygpKVxyXG4gIH1cclxuXHJcbn0sIFtdKVxyXG5cclxuXHJcbmNvbnN0IGZldGNoQVBJID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9vcmdzL3JvY2tldHNlYXQvcmVwb3NcIilcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBzZXRQb3N0cyhkYXRhKTtcclxufSBcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgZmV0Y2hBUEkoKTtcclxufSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIHtwb3N0cy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgPGgxIGtleT17cmVwby5pZH0+e3JlcG8ubmFtZX08L2gxPlxyXG4gICAgICApKX1cclxuICAgICAgICA8aDE+SGVsbG8gV29ybGQ8L2gxPlxyXG4gICAgPC8+XHJcbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==