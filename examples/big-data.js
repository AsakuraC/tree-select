/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"examples/big-data": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/big-data-generator.js":
/*!****************************************!*\
  !*** ./examples/big-data-generator.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./examples/util.js");
/* harmony import */ var _src_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Gen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Gen, _React$Component);

  function Gen() {
    var _this;

    _classCallCheck(this, Gen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gen).call(this));

    _defineProperty(_assertThisInitialized(_this), "state", {
      nums: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onGen", function (e) {
      var onGen = _this.props.onGen;
      e.preventDefault();

      var vals = _this.getVals();

      onGen(Object(_util__WEBPACK_IMPORTED_MODULE_2__["generateData"])(vals.x, vals.y, vals.z));

      _this.setState({
        nums: Object(_util__WEBPACK_IMPORTED_MODULE_2__["calcTotal"])(vals.x, vals.y, vals.z)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getVals", function () {
      return {
        x: parseInt(_this.xRef.current.value, 10),
        y: parseInt(_this.yRef.current.value, 10),
        z: parseInt(_this.zRef.current.value, 10)
      };
    });

    _this.xRef = Object(_src_util__WEBPACK_IMPORTED_MODULE_3__["createRef"])();
    _this.yRef = Object(_src_util__WEBPACK_IMPORTED_MODULE_3__["createRef"])();
    _this.zRef = Object(_src_util__WEBPACK_IMPORTED_MODULE_3__["createRef"])();
    return _this;
  }

  _createClass(Gen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onGen = this.props.onGen;
      var vals = this.getVals();
      onGen(Object(_util__WEBPACK_IMPORTED_MODULE_2__["generateData"])(vals.x, vals.y, vals.z));
    }
  }, {
    key: "render",
    value: function render() {
      var nums = this.state.nums;
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          z = _this$props.z;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '0 20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "big data generator"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onGen
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          marginRight: 10
        }
      }, "x:", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        ref: this.xRef,
        defaultValue: x,
        type: "number",
        min: "1",
        required: true,
        style: {
          width: 50
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          marginRight: 10
        }
      }, "y:", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        ref: this.yRef,
        defaultValue: y,
        type: "number",
        min: "1",
        required: true,
        style: {
          width: 50
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          marginRight: 10
        }
      }, "z:", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        ref: this.zRef,
        defaultValue: z,
        type: "number",
        min: "1",
        required: true,
        style: {
          width: 50
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit"
      }, "Generate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "total nodes: ", nums || Object(_util__WEBPACK_IMPORTED_MODULE_2__["calcTotal"])(x, y, z))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontSize: 12
        }
      }, "x\uFF1A\u6BCF\u4E00\u7EA7\u4E0B\u7684\u8282\u70B9\u603B\u6570\u3002y\uFF1A\u6BCF\u7EA7\u8282\u70B9\u91CC\u6709y\u4E2A\u8282\u70B9\u3001\u5B58\u5728\u5B50\u8282\u70B9\u3002z\uFF1A\u6811\u7684level\u5C42\u7EA7\u6570\uFF080\u8868\u793A\u4E00\u7EA7\uFF09"));
    }
  }]);

  return Gen;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Gen, "propTypes", {
  onGen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  z: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
});

_defineProperty(Gen, "defaultProps", {
  onGen: function onGen() {},
  x: 20,
  y: 18,
  z: 1
});

/* harmony default export */ __webpack_exports__["default"] = (Gen);

/***/ }),

/***/ "./examples/big-data.js":
/*!******************************!*\
  !*** ./examples/big-data.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_tree_select_assets_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-tree-select/assets/index.less */ "./assets/index.less");
/* harmony import */ var rc_tree_select_assets_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_tree_select_assets_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/_react-dom@16.8.2@react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_tree_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-tree-select */ "./index.js");
/* harmony import */ var _big_data_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./big-data-generator */ "./examples/big-data-generator.js");
/* harmony import */ var _demo_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo.less */ "./examples/demo.less");
/* harmony import */ var _demo_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_demo_less__WEBPACK_IMPORTED_MODULE_5__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/no-multi-comp:0, no-console:0 */







var Demo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Demo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      gData: [],
      gData1: [],
      value: '',
      value1: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      console.log('onChange', value);

      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeStrictly", function (value1) {
      console.log('onChangeStrictly', value1);
      var ind = parseInt(Math.random() * 3, 10);
      value1.push({
        value: "0-0-0-".concat(ind, "-value"),
        label: "0-0-0-".concat(ind, "-label"),
        halfChecked: true
      });

      _this.setState({
        value1: value1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onGen", function (data) {
      _this.setState({
        gData: data,
        gData1: _toConsumableArray(data),
        value: '0-0-0-value',
        value1: [{
          value: '0-0-value',
          label: '0-0-label',
          halfChecked: true
        }, {
          value: '0-0-0-value',
          label: '0-0-0-label'
        }] // value: ['0-0-0-0-value', '0-0-0-1-value', '0-0-0-2-value'],

      });
    });

    return _this;
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          value1 = _this$state.value1,
          gData1 = _this$state.gData1,
          value = _this$state.value,
          gData = _this$state.gData;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: '0 20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_big_data_generator__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onGen: this.onGen
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: 'flex'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginRight: 20
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "normal check"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tree_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
          width: 300
        },
        dropdownStyle: {
          maxHeight: 200,
          overflow: 'auto'
        },
        treeData: gData,
        treeLine: true,
        value: value,
        placeholder: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "\u8BF7\u4E0B\u62C9\u9009\u62E9"),
        treeCheckable: true,
        showCheckedStrategy: rc_tree_select__WEBPACK_IMPORTED_MODULE_3__["SHOW_PARENT"],
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "checkStrictly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tree_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
          width: 300
        },
        dropdownStyle: {
          maxHeight: 200,
          overflow: 'auto'
        },
        treeData: gData1,
        treeLine: true,
        value: value1,
        placeholder: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "\u8BF7\u4E0B\u62C9\u9009\u62E9"),
        treeCheckable: true,
        treeCheckStrictly: true,
        showCheckedStrategy: rc_tree_select__WEBPACK_IMPORTED_MODULE_3__["SHOW_PARENT"],
        onChange: this.onChangeStrictly
      }))));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./examples/big-data.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/big-data.js */"./examples/big-data.js");


/***/ })

/******/ });
//# sourceMappingURL=big-data.js.map