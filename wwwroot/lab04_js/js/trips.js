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
	
	    function Trip() {
	        var id = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var destination = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];
	        var description = arguments.length <= 2 || arguments[2] === undefined ? "" : arguments[2];
	        var date = arguments.length <= 3 || arguments[3] === undefined ? "" : arguments[3];
	        var rating = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	
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
	        this._trips.push(new _Trip.Trip(2, "Paris", "yada", "01/01/01", 8));
	        this._trips.push(new _Trip.Trip(3, "Madrid", "blah", "01/01/01", 5));
	        this._trips.push(new _Trip.Trip(4, "Budapest", "yadah", "01/01/01", 9));
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
	    }, {
	        key: "getTripById",
	        value: function getTripById(id) {
	            return this._trips.filter(function (t) {
	                return t.id === id;
	            })[0];
	        }
	    }, {
	        key: "editTrip",
	        value: function editTrip(trip) {
	            var original = this.getTripById(trip.id);
	            original.description = trip.description;
	            original.destination = trip.destination;
	            original.date = trip.date;
	            original.rating = trip.rating;
	            return original;
	        }
	    }, {
	        key: "removeTrip",
	        value: function removeTrip(id) {
	            this._trips.splice(this._trips.indexOf(this.getTripById(id)), 1);
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
	            var _this2 = this;
	
	            this.refreshUI();
	
	            document.getElementById("add-trip").addEventListener("click", function () {
	                return _this2.addTrip();
	            });
	            document.getElementById("save-trip").addEventListener("click", function () {
	                return _this2.saveTrip();
	            });
	        }
	    }, {
	        key: "refreshUI",
	        value: function refreshUI() {
	            var _this3 = this;
	
	            var trips = this._dataLayer.getAllTrips();
	            var target = document.getElementById("trips").children[0];
	            target.innerHTML = "";
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
	                    newTripElement.children[1].children[1].innerHTML = trip.date;
	                    newTripElement.children[1].children[2].innerHTML = trip.rating.toString();
	                    var btnEdit = newTripElement.children[2].children[0].children[0];
	                    btnEdit.setAttribute("data-trip-id", trip.id.toString());
	                    btnEdit.addEventListener("click", function (event) {
	                        return _this3.editTrip(+event.srcElement.getAttribute("data-trip-id"));
	                    });
	                    var btnDelete = newTripElement.children[2].children[1].children[0];
	                    btnDelete.setAttribute("data-trip-id", trip.id.toString());
	                    btnDelete.addEventListener("click", function (event) {
	                        return _this3.deleteTrip(+event.srcElement.getAttribute("data-trip-id"));
	                    });
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
	        }
	    }, {
	        key: "addTrip",
	        value: function addTrip() {
	            var trip = new _Trip.Trip();
	            document.getElementById("save-trip").setAttribute("data-trip-id", trip.id.toString());
	            document.getElementById("destination-input").value = trip.destination;
	            document.getElementById("description-input").value = trip.description;
	            document.getElementById("date-input").value = trip.date;
	            document.getElementById("rating-input").value = trip.rating.toString();
	        }
	    }, {
	        key: "deleteTrip",
	        value: function deleteTrip(tripId) {
	            this._dataLayer.removeTrip(tripId);
	            this.refreshUI();
	        }
	    }, {
	        key: "editTrip",
	        value: function editTrip(tripId) {
	            var trip = this._dataLayer.getTripById(tripId);
	            document.getElementById("save-trip").setAttribute("data-trip-id", trip.id.toString());
	            document.getElementById("destination-input").value = trip.destination;
	            document.getElementById("description-input").value = trip.description;
	            document.getElementById("date-input").value = trip.date;
	            document.getElementById("rating-input").value = trip.rating.toString();
	        }
	    }, {
	        key: "saveTrip",
	        value: function saveTrip() {
	            event.preventDefault();
	
	            var trip = new _Trip.Trip();
	            trip.id = +document.getElementById("save-trip").getAttribute("data-trip-id");
	            trip.destination = document.getElementById("destination-input").value;
	            trip.description = document.getElementById("description-input").value;
	            trip.date = document.getElementById("date-input").value;
	            trip.rating = +document.getElementById("rating-input").value;
	
	            if (trip.id === 0) {
	                this._dataLayer.addTrip(trip);
	            } else {
	                this._dataLayer.editTrip(trip);
	            }
	            this.refreshUI();
	            return false;
	        }
	    }]);

	    return ViewModel;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=trips.js.map