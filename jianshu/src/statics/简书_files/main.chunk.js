(this["webpackJsonpjianshu"] = this["webpackJsonpjianshu"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/style.js");
/* harmony import */ var _statics_iconfont_iconfont__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statics/iconfont/iconfont */ "./src/statics/iconfont/iconfont.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _common_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/header */ "./src/common/header/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
var _jsxFileName = "/Users/yanghuimin/Desktop/jianshu/jianshu/src/App.js";







class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: _store__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["GlobalStyled"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_statics_iconfont_iconfont__WEBPACK_IMPORTED_MODULE_2__["GlobalIconFont"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

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

/***/ }),

/***/ "./src/common/header/store/actionCreators.js":
/*!***************************************************!*\
  !*** ./src/common/header/store/actionCreators.js ***!
  \***************************************************/
/*! exports provided: searchFocus, searchBlur, mouseEnter, mouseLeave, changePage, getList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchFocus", function() { return searchFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBlur", function() { return searchBlur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseEnter", function() { return mouseEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseLeave", function() { return mouseLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePage", function() { return changePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/common/header/store/constants.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




const changeList = data => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LIST"],
  data: Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(data),
  totalpage: Math.ceil(data.length / 10)
});

const searchFocus = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SEARCH_FOCUS"]
});
const searchBlur = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SEARCH_BLUR"]
});
const mouseEnter = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["MOUSE_ENTER"]
});
const mouseLeave = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["MOUSE_LEAVE"]
});
const changePage = page => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["CHANGE_PAGE"],
  page
});
const getList = () => {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/headerList.json').then(res => {
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch(err => {
      console.error(err);
    });
  };
};

/***/ }),

/***/ "./src/common/header/store/constants.js":
/*!**********************************************!*\
  !*** ./src/common/header/store/constants.js ***!
  \**********************************************/
/*! exports provided: SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_FOCUS", function() { return SEARCH_FOCUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_BLUR", function() { return SEARCH_BLUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LIST", function() { return CHANGE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_ENTER", function() { return MOUSE_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_LEAVE", function() { return MOUSE_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PAGE", function() { return CHANGE_PAGE; });
const SEARCH_FOCUS = 'header/SEARCH_FOCUS';
const SEARCH_BLUR = 'header/SEARCH_BLUR';
const CHANGE_LIST = 'header/CHANGE_LIST';
const MOUSE_ENTER = 'header/MOUSE_ENTER';
const MOUSE_LEAVE = 'header/MOUSE_LEAVE';
const CHANGE_PAGE = 'header/CHANGE_PAGE';

/***/ }),

/***/ "./src/common/header/store/index.js":
/*!******************************************!*\
  !*** ./src/common/header/store/index.js ***!
  \******************************************/
/*! exports provided: reducer, actionCreators, constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/common/header/store/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionCreators */ "./src/common/header/store/actionCreators.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreators", function() { return _actionCreators__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/common/header/store/constants.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__; });





/***/ }),

/***/ "./src/common/header/store/reducer.js":
/*!********************************************!*\
  !*** ./src/common/header/store/reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/common/header/store/constants.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");


const defaultState = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});
/* harmony default export */ __webpack_exports__["default"] = ((state = defaultState, action) => {
  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["SEARCH_FOCUS"]:
      return state.set('focused', true);

    case _constants__WEBPACK_IMPORTED_MODULE_0__["SEARCH_BLUR"]:
      return state.set('focused', false);

    case _constants__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LIST"]:
      return state.merge({
        'list': action.data,
        'totalPage': action.totalpage
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__["MOUSE_ENTER"]:
      return state.set('mouseIn', true);

    case _constants__WEBPACK_IMPORTED_MODULE_0__["MOUSE_LEAVE"]:
      return state.set('mouseIn', false);

    case _constants__WEBPACK_IMPORTED_MODULE_0__["CHANGE_PAGE"]:
      return state.set('page', action.page);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/common/header/style.js":
/*!************************************!*\
  !*** ./src/common/header/style.js ***!
  \************************************/
/*! exports provided: HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem, Addition, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrapper", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWrapper", function() { return SearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSearch", function() { return NavSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInfo", function() { return SearchInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInfoTitle", function() { return SearchInfoTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInfoSwitch", function() { return SearchInfoSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInfoList", function() { return SearchInfoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInfoItem", function() { return SearchInfoItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addition", function() { return Addition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _statics_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../statics/logo.png */ "./src/statics/logo.png");
/* harmony import */ var _statics_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_statics_logo_png__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject13() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  float: right;\n  margin-top:9px;\n  margin-right:20px;\n  padding:0 20px;\n  line-height:38px;\n  border-radius:19px;\n  border:1px solid #ec6149;\n  font-size:14px;\n  &.reg{\n    color: #ec4169;\n  }\n  &.writting{\n    color:#fff;\n    background:#ec4169;\n  }\n"]);

  _templateObject13 = function () {
    return data;
  };

  return data;
}

function _templateObject12() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position:absolute;\n  top:0;\n  right:0;\n  height:58px;\n"]);

  _templateObject12 = function () {
    return data;
  };

  return data;
}

function _templateObject11() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display:block;\n  float: left;\n  margin-left:10px;\n  margin-bottom 10px;\n  line-height:20px;\n  padding: 0 3px;\n  font-size:12px;\n  border:1px solid #ddd;\n  color:#787878;\n  border-radius: 2px;\n"]);

  _templateObject11 = function () {
    return data;
  };

  return data;
}

function _templateObject10() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  overflow:hidden;\n"]);

  _templateObject10 = function () {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  float:right;\n  font-size:13px;\n  .spin{\n    display:block;\n    float:left;\n    font-size:12px;\n    margin-right:2px;\n    transition: all .2s ease-in;\n    transform:rotate(0deg);\n    transform-origin:center center;\n  }\n"]);

  _templateObject9 = function () {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 20px;\n  margin-bottom: 15px;\n  line-height:20px;\n  font-size:14px;\n  color:#969696;\n"]);

  _templateObject8 = function () {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  left:0;\n  top: 58px;\n  padding:0 20px;\n  width:240px;\n  box-shadow: 0 0 8px rgba(0,0,0,0.2);\n"]);

  _templateObject7 = function () {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 160px;\n  height:38px;\n  margin-top:9px;\n  padding:0 30px 0 20px;\n  margin-left:20px;\n  border:none;\n  outline:none;\n  border-radius: 19px;\n  font-size: 15px;\n  color:#777;\n  background:#eee;\n  &::placeholder{\n    color:#999;\n  }\n  &.focused{\n    width:200px;\n    .iconfont{\n      background:#ccc;\n    }\n  }\n  &.slide-enter {\n    transition: all .2s ease-out\n  }\n  &.slide-enter-active {\n    width:240px;\n  }\n  &.slide-exit {\n    transition: all .2s ease-out\n  }\n  &.slide-exit-active {\n    width:160px;\n  }\n"]);

  _templateObject6 = function () {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position:relative;\n  float:left;\n  .zoom{\n    position:absolute;\n    right:5px;\n    bottom:5px;\n    width:30px;\n    height:30px;\n    border-radius:15px;\n    line-height:30px;\n    text-align:center;\n    &.focused{\n      background:#777;\n      color:white;\n    }\n  }\n"]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  line-height:58px;\n  padding:0 15px;\n  font-size: 17px;\n  color:#333;\n  &.left {\n    float:left;\n  }\n  &.right {\n    float:right;\n    color: #969696;\n  }\n  &.active {\n    color:#ea6f5a;\n  }\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width:960px;\n  height:100%;\n  margin:0 auto;\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top:0;\n  left: 0;\n  display:block;\n  width:100px;\n  height: 58px;\n  background:url(", ");\n  background-size:contain;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 58px;\n  border-bottom: 1px solid #ccc;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.attrs({
  href: '/'
})(_templateObject2(), _statics_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a);
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());
const NavSearch = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.attrs({
  placeholder: '搜索'
})(_templateObject6());
const SearchInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject7());
const SearchInfoTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject8());
const SearchInfoSwitch = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject9());
const SearchInfoList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject10());
const SearchInfoItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject11());
const Addition = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject12());
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject13());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/yanghuimin/Desktop/jianshu/jianshu/src/index.js";
 // JSX



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/statics/iconfont/iconfont.js":
/*!******************************************!*\
  !*** ./src/statics/iconfont/iconfont.js ***!
  \******************************************/
/*! exports provided: GlobalIconFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalIconFont", function() { return GlobalIconFont; });
/* harmony import */ var _Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @font-face {font-family: \"iconfont\";\n  src: url('./iconfont.eot?t=1575641116228'); /* IE9 */\n  src: url('./iconfont.eot?t=1575641116228#iefix') format('embedded-opentype'), /* IE6-IE8 */\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQcAAsAAAAACGAAAAPOAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqDeINOATYCJAMUCwwABCAFhG0HTxthB1FULspkPyRJAkcyYRuAExAAIFAFBREoQAFADMTD/+/3bZ8rb97cN+JJkhlefXU8kX+axGQskvBG6oRCJJHFSnhXa/t3rISdjkeSadJ+svdmi02nZVIiRAiNwbwqbdaZJV8i26yML6An4Du3c9SXWDimPi0Bc3a7SzVVJP0UgKcEOlhEYYEcNEB+MP4wdhPlQRwm0Gxq0++4709aTQFGBeIs3WNaLaVQatJDL3QlC4t4q+rT6/QVb/jn479LIUBSMzDx7mQhtfEv9Odefjm+9IQi8MbTQVtGxhFNIZ6WGs6YYeCIqTm/s9ygaXpJ+jX8Wv117c+9ccQV7kjeIG8vf7wsER2QOgNuiMHCL4QZBL+kuWUyc5FB5k9QUMJ9LaRhwCf8AAC37tIsKdLuDIdHXFygl0bzcoksS3O5mGGo+/djkDg0YCe7sWw5rUOVhu4wIG8jQilCtdezNC3F1TFBeJc1rwFEG80JFcpE4RE9KkKf5cLit1AnAC2E9oU6bhL1GNfzC22p5TlQN486jwgC41QDXF8vRPd0gdCVJKpPlV4wdakgEzmgmCqLBxfXVtSoDUb3luokfPQIkuipRw8neaZ4xAlwCk4+ejT1ohuenZHdkCVmdcMeeHoGu0WWuL1kovGjjbBH6+D3dnj4U4NCJ7J1ebmVdKwFLznu8Pz5U3YiXcZ/N6Qq/7d6LrA/8bij6XonWeQ/v81m2AdQpHNCuj2X57f9edGJpQFRnfRzteh04Wjk42j9JgYXXclL/1bY/qi2Cf5yRvLIvU7TCIIk2vyBWIS3lpR//7x9yevxYP6qUqWsHFpbUvjgZRIx/j2jWL7Vz13a3w2EARi/wWWoyymjuQ9B6BUMh9V//TueJeZ3rKjtV/keFfBd7NW6WDC+LPJLfp1Ma94/5rUsK64AKGuxizHXNlYXEgrJqWv4s5Ylv3Hkq61TCb3VGJIpG5D1tpAFewTV4Ap0etehObRaPlhWMkWZxoGXAGHBG5I5XyBb8EEW7BeqNX/oLASE5nEsbzjYiXSh2wXICCXwcggSs1QhNTWC9AN615iVSQEnX7CsAjcMuv1seIUplmNMqUq8IRUpUAVZAkvhOIzjDPKCLERBXb+I8lGvp8oe1BW5idZwWwkxBEmAewIBIZNStDZp5N5/gDxXMaasKekwX6BSJegcDHT1WyBX0rRVybV0r9x4hghR8jCllEmApahDMQxkQF7eL4QE0uX38OVGelI11VbanV+ePOM2aMBmNVLkKFGj0ybxqSdZGFCSdZ5nN27Gty6jR0ekoYiCVNMAAAA=') format('woff2'),\n  url('./iconfont.woff?t=1575641116228') format('woff'),\n  url('./iconfont.ttf?t=1575641116228') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n  url('./iconfont.svg?t=1575641116228#iconfont') format('svg'); /* iOS 4.1- */\n  }\n\n  .iconfont {\n    font-family: \"iconfont\" !important;\n    font-size: 16px;\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const GlobalIconFont = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "./src/statics/logo.png":
/*!******************************!*\
  !*** ./src/statics/logo.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/store/reducer.js");



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"])));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "./node_modules/redux-immutable/dist/index.js");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_header_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/header/store */ "./src/common/header/store/index.js");


const reducer = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  headerReducer: _common_header_store__WEBPACK_IMPORTED_MODULE_1__["reducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: GlobalStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyled", function() { return GlobalStyled; });
/* harmony import */ var _Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_Users_yanghuimin_Desktop_jianshu_jianshu_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const GlobalStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/yanghuimin/Desktop/jianshu/jianshu/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/yanghuimin/Desktop/jianshu/jianshu/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map