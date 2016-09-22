/******/ (function(modules) { // webpackBootstrap
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

	"use strict";
	
	var _Trip = __webpack_require__(1);
	
	var _ArrayDataLayer = __webpack_require__(2);
	
	var _ViewModel = __webpack_require__(3);
	
	var vm = new _ViewModel.ViewModel(new _ArrayDataLayer.ArrayDataLayer());

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Trip = exports.Trip = function () {
	    _createClass(Trip, [{
	        key: "description",
	        get: function get() {
	            return this._description;
	        },
	        set: function set(v) {
	            this._description = v;
	        }
	    }, {
	        key: "destination",
	        get: function get() {
	            return this._destination;
	        },
	        set: function set(v) {
	            this._destination = v;
	        }
	    }, {
	        key: "date",
	        get: function get() {
	            return this._date;
	        },
	        set: function set(v) {
	            this._date = v;
	        }
	    }, {
	        key: "rating",
	        get: function get() {
	            return this._rating;
	        },
	        set: function set(v) {
	            this._rating = v;
	        }
	    }, {
	        key: "id",
	        get: function get() {
	            return this._id;
	        },
	        set: function set(v) {
	            this._id = v;
	        }
	    }]);
	
	    function Trip(id, destination, description, date, rating) {
	        _classCallCheck(this, Trip);
	
	        this.id = id || 0;
	        this.destination = destination || "";
	        this.description = description || "";
	        this.date = date || "";
	        this.rating = rating || 6;
	    }
	
	    return Trip;
	}();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ArrayDataLayer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Trip = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ArrayDataLayer = exports.ArrayDataLayer = function () {
	    function ArrayDataLayer() {
	        _classCallCheck(this, ArrayDataLayer);
	
	        this._trips = [];
	        this._trips.push(new _Trip.Trip(1, "Roma", "bla", "01/01/01", 9));
	        this._trips.push(new _Trip.Trip(2, "Paris", "Landjaeger ham beef short ribs jowl salami meatball. Jowl spare ribs pastrami fatback capicola. Pig shankle drumstick tri-tip short ribs. Spare ribs venison leberkas jerky. Fatback frankfurter tri-tip venison. Filet mignon cupim drumstick bresaola, doner tenderloin pork chop.", "01/01/01", 8));
	        this._trips.push(new _Trip.Trip(3, "Madrid", "blah", "01/01/01", 5));
	        this._trips.push(new _Trip.Trip(4, "Budapest", "owl pork loin cow, doner shoulder ribeye capicola beef spare ribs frankfurter chicken porchetta brisket leberkas drumstick. Jerky alcatra cow ham hock. Tenderloin doner tail fatback. Shankle beef rump pork loin filet mignon.", "01/01/01", 9));
	    }
	
	    _createClass(ArrayDataLayer, [{
	        key: "getAllTrips",
	        value: function getAllTrips() {
	            return this._trips;
	        }
	    }, {
	        key: "addTrip",
	        value: function addTrip(trip) {
	            if (this._trips.length === 0) {
	                trip.id = 1;
	            } else {
	                trip.id = this._trips.reduce(function (prev, curr) {
	                    return prev.id > curr.id ? prev : curr;
	                }).id + 1;
	            }
	            this._trips.push(trip);
	            return trip;
	        }
	    }]);

	    return ArrayDataLayer;
	}();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ViewModel = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Trip = __webpack_require__(1);
	
	var _ArrayDataLayer = __webpack_require__(2);
	
	var _Chart = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ViewModel = exports.ViewModel = function () {
	    function ViewModel(dataLayer) {
	        var _this = this;
	
	        _classCallCheck(this, ViewModel);
	
	        this._dataLayer = dataLayer;
	
	        window.addEventListener("load", function () {
	            return _this.init();
	        });
	    }
	
	    _createClass(ViewModel, [{
	        key: "init",
	        value: function init() {
	            var trips = this._dataLayer.getAllTrips();
	            var target = document.getElementById("trips");
	            var template = document.getElementById("template");
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = trips[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var trip = _step.value;
	
	                    var newTripElement = template.cloneNode(true);
	                    newTripElement.removeAttribute("id");
	                    newTripElement.children[0].children[0].innerHTML = trip.destination;
	                    newTripElement.children[1].children[0].innerHTML = trip.description;
	                    newTripElement.children[2].children[0].innerHTML = trip.date;
	                    newTripElement.children[2].children[1].innerHTML = trip.rating.toString();
	                    target.appendChild(newTripElement);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            this.drawBarChart(trips);
	        }
	    }, {
	        key: "drawBarChart",
	        value: function drawBarChart() {
	            var trips = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	
	            var chart = new _Chart.Chart();
	            var options = {
	                data: trips.map(function (t) {
	                    return t.rating;
	                }),
	                labels: trips.map(function (t) {
	                    return t.destination;
	                }),
	                canvasId: "chart"
	            };
	            chart.drawBarChart(options);
	        }
	    }]);

	    return ViewModel;
	}();

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Chart = exports.Chart = function () {
	    function Chart() {
	        _classCallCheck(this, Chart);
	    }
	
	    _createClass(Chart, [{
	        key: "drawBarChart",
	        value: function drawBarChart() {
	            var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	            var _ref$data = _ref.data;
	            var data = _ref$data === undefined ? [] : _ref$data;
	            var _ref$labels = _ref.labels;
	            var labels = _ref$labels === undefined ? [] : _ref$labels;
	            var _ref$canvasId = _ref.canvasId;
	            var canvasId = _ref$canvasId === undefined ? "" : _ref$canvasId;
	
	            var canvas = document.getElementById(canvasId);
	            if (canvas) {
	
	                var ctx = canvas.getContext("2d");
	
	                var canvasHeight = canvas.offsetHeight;
	                var canvasWidth = canvas.offsetWidth;
	
	                var borderSize = 10;
	
	                var chartHeight = canvasHeight - 2 * borderSize;
	                var chartWidth = canvasWidth - 2 * borderSize;
	
	                var numberOfBars = data.length;
	                var barDistance = 10;
	                var width = canvasWidth / numberOfBars - barDistance;
	
	                var unity = chartHeight / data.reduce(function (p, c) {
	                    return p > c ? p : c;
	                });
	                for (var i = 0; i < data.length; i++) {
	                    var x = i * (width + barDistance);
	                    var height = data[i] * unity;
	                    var y = chartHeight - borderSize - height;
	                    ctx.fillRect(x, y, width, height);
	                    ctx.fillText(labels[i], x, chartHeight);
	                }
	            }
	        }
	    }]);

	    return Chart;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=trips.js.map