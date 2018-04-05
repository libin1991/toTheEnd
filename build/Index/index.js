(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7)
	__webpack_require__(9)
	__webpack_require__(12)
	var $app_template$ = __webpack_require__(14)
	var $app_style$ = __webpack_require__(15)
	var $app_script$ = __webpack_require__(16)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "article"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "shown": function () {return this.isLoading},
	      "classList": [
	        "loading"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "文章读取中..."
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "shown": function () {return !(this.isLoading)},
	      "classList": [
	        "article-content"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.title}
	          },
	          "classList": [
	            "title"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.author}
	          },
	          "classList": [
	            "author"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.content}
	          },
	          "classList": [
	            "article"
	          ]
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "button",
	            "value": "随机一篇"
	          },
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "randomArticle"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  ".loading": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".loading text": {
	    "fontSize": "32px",
	    "textAlign": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "loading"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".article": {
	    "flexDirection": "column",
	    "flex": 1
	  },
	  ".article-content": {
	    "flex": 1,
	    "flexDirection": "column",
	    "paddingTop": "10px",
	    "paddingRight": "40px",
	    "paddingBottom": "10px",
	    "paddingLeft": "40px",
	    "alignItems": "center"
	  },
	  ".article-content .title": {
	    "marginTop": "20px",
	    "marginRight": "0px",
	    "marginBottom": "20px",
	    "marginLeft": "0px",
	    "paddingTop": "10px",
	    "paddingRight": "0px",
	    "paddingBottom": "10px",
	    "paddingLeft": "0px",
	    "fontSize": "40px",
	    "color": "#333333",
	    "textAlign": "center",
	    "borderTopWidth": "0px",
	    "borderRightWidth": "0px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "0px",
	    "borderTopColor": "#cccccc",
	    "borderRightColor": "#cccccc",
	    "borderBottomColor": "#cccccc",
	    "borderLeftColor": "#cccccc",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article-content"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title"
	        }
	      ]
	    }
	  },
	  ".article-content .author": {
	    "marginTop": "10px",
	    "marginRight": "0px",
	    "marginBottom": "20px",
	    "marginLeft": "0px",
	    "color": "#999999",
	    "textAlign": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article-content"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "author"
	        }
	      ]
	    }
	  },
	  ".article-content .article": {
	    "paddingTop": "0px",
	    "paddingRight": "0px",
	    "paddingBottom": "40px",
	    "paddingLeft": "0px",
	    "color": "#333333",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article-content"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "article"
	        }
	      ]
	    }
	  },
	  ".btn": {
	    "width": "400px",
	    "height": "86px",
	    "marginTop": "75px",
	    "marginRight": "75px",
	    "marginBottom": "75px",
	    "marginLeft": "75px",
	    "borderRadius": "43px",
	    "backgroundColor": "#fddb6f",
	    "fontSize": "30px",
	    "color": "#333333"
	  }
	}

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "article"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": "boook"
	      }
	    }
	  ]
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  ".loading": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".loading text": {
	    "fontSize": "32px",
	    "textAlign": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "loading"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(1)
	var $app_style$ = __webpack_require__(2)
	var $app_script$ = __webpack_require__(8)
	
	$app_define$('@app-component/article', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        model: {},
	        title: '读取中',
	        content: '',
	        author: '佚名',
	        isLoading: true
	    },
	    onInit: function onInit() {
	        var _self = this;
	        this.isLoading = true;
	        _system2.default.fetch({
	            url: 'http://daren.vipc.me/api/article/daily',
	            success: function success(res) {
	                var model = JSON.parse(res.data).model;
	                _self.title = model.title;
	                _self.content = model.content;
	                _self.author = model.author;
	                _self.isLoading = false;
	            },
	            fail: function fail(data, code) {
	                console.log("handling fail, code=" + code);
	            }
	        });
	    },
	    randomArticle: function randomArticle() {
	        var _self = this;
	        this.isLoading = true;
	        _system2.default.fetch({
	            url: 'http://daren.vipc.me/api/article/random',
	            success: function success(res) {
	                var model = JSON.parse(res.data).model;
	                _self.title = model.title;
	                _self.content = model.content;
	                _self.author = model.author;
	                _self.isLoading = false;
	            },
	            fail: function fail(data, code) {
	                console.log("handling fail, code=" + code);
	            }
	        });
	    }
	};}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(10)
	var $app_style$ = __webpack_require__(5)
	var $app_script$ = __webpack_require__(11)
	
	$app_define$('@app-component/voice', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "article"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": "voice"
	      }
	    }
	  ]
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        model: {},
	        isLoading: true
	    }
	};}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(4)
	var $app_style$ = __webpack_require__(5)
	var $app_script$ = __webpack_require__(13)
	
	$app_define$('@app-component/books', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        model: {},
	        isLoading: true
	    }
	};}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "home"
	  ],
	  "children": [
	    {
	      "type": "tabs",
	      "attr": {},
	      "events": {
	        "change": "onChangeTabIndex"
	      },
	      "children": [
	        {
	          "type": "tab-bar",
	          "attr": {
	            "mode": "scrollable"
	          },
	          "classList": [
	            "tab-bar"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "tab-bar-box"
	              ],
	              "repeat": function () {return this.tabList},
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.$item.title}
	                  },
	                  "classList": function () {return [this.currentIndex===this.$idx?'active':'']}
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "tab-content",
	          "attr": {},
	          "classList": [
	            "tab-content"
	          ],
	          "children": [
	            {
	              "type": "article",
	              "attr": {}
	            },
	            {
	              "type": "voice",
	              "attr": {}
	            },
	            {
	              "type": "books",
	              "attr": {}
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  ".tab-bar-box": {
	    "width": "160px",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".tab-bar-box text": {
	    "width": "60px",
	    "paddingBottom": "10px",
	    "textAlign": "center",
	    "color": "#999999",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-bar-box"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".tab-bar-box .active": {
	    "color": "#333333",
	    "borderTopWidth": "0px",
	    "borderRightWidth": "0px",
	    "borderBottomWidth": "4px",
	    "borderLeftWidth": "0px",
	    "borderTopColor": "#30a29d",
	    "borderRightColor": "#30a29d",
	    "borderBottomColor": "#30a29d",
	    "borderLeftColor": "#30a29d",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-bar-box"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "active"
	        }
	      ]
	    }
	  },
	  ".tab-content": {
	    "flex": 1
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	    private: {
	        tabList: [{ title: '文章' }, { title: '声音' }, { title: '书架' }],
	        currentIndex: 0
	    },
	    onInit: function onInit() {
	        this.changeTabIndex(0);
	    },
	    changeTabIndex: function changeTabIndex(index) {
	        var item = Object.assign({}, this.tabList[index]);
	        item.render = true;
	        this.tabList.splice(index, 1, item);
	    },
	    onChangeTabIndex: function onChangeTabIndex(evt) {
	        this.currentIndex = evt.index;
	        this.changeTabIndex(evt.index);
	    },
	    renderTabContent: function renderTabContent(index) {
	        return !!this.tabList[index].render;
	    }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	    return moduleOwn[acc];
	})) {
	    throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	    moduleOwn.data = {};
	    moduleOwn._descriptor = {};
	    accessors.forEach(function (acc) {
	        var accType = _typeof(moduleOwn[acc]);
	        if (accType === 'object') {
	            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	            for (var name in moduleOwn[acc]) {
	                moduleOwn._descriptor[name] = { access: acc };
	            }
	        } else if (accType === 'function') {
	            console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	        }
	    });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map