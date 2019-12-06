webpackHotUpdate("main",{

/***/ "./src/common/header/index.js":
/*!************************************!*\
  !*** ./src/common/header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/common/header/style.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/common/header/store/index.js");
var _jsxFileName = "/Users/yanghuimin/Desktop/jianshu/jianshu/src/common/header/index.js";






class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.getListArea = () => {
      const _this$props = this.props,
            focused = _this$props.focused,
            list = _this$props.list,
            page = _this$props.page,
            totalPage = _this$props.totalPage,
            mouseIn = _this$props.mouseIn,
            handleMouseEnter = _this$props.handleMouseEnter,
            handleMouseLeave = _this$props.handleMouseLeave,
            handleChangePage = _this$props.handleChangePage;
      const newList = list.toJS();
      const pageList = [];

      if (newList.length) {
        for (let i = (page - 1) * 10; i < page * 10; i++) {
          pageList.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["SearchInfoItem"], {
            key: newList[i],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          }, newList[i]));
        }
      }

      if (focused || mouseIn) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["SearchInfo"], {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["SearchInfoTitle"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, "\u70ED\u95E8\u641C\u7D22", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["SearchInfoSwitch"], {
          onClick: () => {
            handleChangePage(page, totalPage, this.spinIcon);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          ref: icon => {
            this.spinIcon = icon;
          },
          className: "iconfont spin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, "\uE851"), "\u6362\u4E00\u6279")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["SearchInfoList"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, pageList));
      } else {
        return null;
      }
    };
  }

  render() {
    const _this$props2 = this.props,
          focused = _this$props2.focused,
          handleInputFocus = _this$props2.handleInputFocus,
          handleInputBlur = _this$props2.handleInputBlur;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["HeaderWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Logo"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      className: "left active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "\u9996\u9875"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      className: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "\u4E0B\u8F7DApp"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      className: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "\u767B\u9646"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      className: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "iconfont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "\uE636")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["SearchWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
      in: focused,
      timeout: 200,
      classNames: "slide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["NavSearch"], {
      className: focused ? 'focused' : '',
      onFocus: handleInputFocus,
      onBlur: handleInputBlur,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: focused ? 'focused iconfont zoom' : 'iconfont zoom',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "\uE60B"), this.getListArea())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Addition"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "writting",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "iconfont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "\uE615"), "\u5199\u6587\u7AE0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "res",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "\u6CE8\u518C"))));
  }

}

const mapStateToProps = state => {
  return {
    focused: state.getIn(['headerReducer', 'focused']),
    list: state.getIn(['headerReducer', 'list']),
    page: state.getIn(['headerReducer', 'page']),
    totalPage: state.getIn(['headerReducer', 'totalPage']),
    mouseIn: state.getIn(['headerReducer', 'mouseIn'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["actionCreators"].getList());
      dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["actionCreators"].searchFocus());
    },

    handleInputBlur() {
      dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["actionCreators"].searchBlur());
    },

    handleMouseEnter() {
      dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["actionCreators"].mouseEnter());
    },

    handleMouseLeave() {
      dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["actionCreators"].mouseLeave());
    },

    handleChangePage(page, totalPage, spin) {
      window.$spin = spin;
      let originAngle = 0;

      if (spin.style.transform) {
        originAngle = spin.style.transform.replace(/^[0-9]/ig, '');
      }

      if (originAngle) {
        originAngle = parseInt(parseInt, 10);
      }

      console.log(originAngle);
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      console.log(spin.style.transform);

      if (page < totalPage) {
        dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["actionCreators"].changePage(page + 1));
      } else {
        dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["actionCreators"].changePage(1));
      }
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ })

})
//# sourceMappingURL=main.fa36e2a12bb8a85a940b.hot-update.js.map