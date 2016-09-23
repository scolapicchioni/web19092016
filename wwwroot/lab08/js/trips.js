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
	
	var _IndexedDBDataLayer = __webpack_require__(2);
	
	var _ViewModel = __webpack_require__(3);
	
	var vm = new _ViewModel.ViewModel(new _IndexedDBDataLayer.IndexedDBDataLayer());

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
	exports.IndexedDBDataLayer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Trip = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var dbVersion = 3,
	    dbName = "TripsDB",
	    objectStoreName = "Trips",
	    keyPathName = "_id";
	
	var IndexedDBDataLayer = exports.IndexedDBDataLayer = function () {
	    function IndexedDBDataLayer() {
	        _classCallCheck(this, IndexedDBDataLayer);
	
	        if (window.indexedDB) {
	            var request = window.indexedDB.open(dbName, dbVersion);
	
	            request.onerror = function (event) {
	                // Do something with request.errorCode!
	                console.log(event.errorCode);
	            };
	            request.onsuccess = function (event) {
	                // Do something with request.result!
	                console.log("opened");
	            };
	            request.onupgradeneeded = function (event) {
	                var db = event.target.result;
	                if (db.objectStoreNames.contains(objectStoreName)) {
	                    db.deleteObjectStore(objectStoreName);
	                }
	                // Create an objectStore for this database
	                var objectStore = db.createObjectStore(objectStoreName, { keyPath: keyPathName });
	
	                objectStore.transaction.oncomplete = function (event) {
	                    // Store values in the newly created objectStore.
	                    var objectStore = db.transaction(objectStoreName, "readwrite").objectStore(objectStoreName);
	
	                    var _trips = [];
	                    _trips.push(new _Trip.Trip(1, "Roma", "Quanto sei bella Roma quando e' sera", "01/01/01", 9));
	                    _trips.push(new _Trip.Trip(2, "Paris", "Oh la la. Landjaeger ham beef short ribs jowl salami meatball. Jowl spare ribs pastrami fatback capicola. Pig shankle drumstick tri-tip short ribs. Spare ribs venison leberkas jerky. Fatback frankfurter tri-tip venison. Filet mignon cupim drumstick bresaola, doner tenderloin pork chop.", "01/01/01", 8));
	                    _trips.push(new _Trip.Trip(3, "Madrid", "Andale andale! Los tres caballeros.", "01/01/01", 5));
	                    _trips.push(new _Trip.Trip(4, "Budapest", "owl pork loin cow, doner shoulder ribeye capicola beef spare ribs frankfurter chicken porchetta brisket leberkas drumstick. Jerky alcatra cow ham hock. Tenderloin doner tail fatback. Shankle beef rump pork loin filet mignon.", "01/01/01", 9));
	
	                    putNext();
	
	                    var i = 0;
	                    function putNext() {
	                        if (i < _trips.length) {
	                            objectStore.put(_trips[i]).onsuccess = putNext;
	                            ++i;
	                        } else {
	                            // complete
	                            console.log('populate complete');
	                            db.close();
	                        }
	                    }
	                };
	            };
	        }
	    }
	
	    _createClass(IndexedDBDataLayer, [{
	        key: "getAllTrips",
	        value: function getAllTrips() {
	            return new Promise(function (resolve, reject) {
	
	                var _trips = [];
	                var request = window.indexedDB.open(dbName, dbVersion);
	
	                request.onsuccess = function (event) {
	                    var db = event.target.result;
	                    var objectStore = db.transaction(objectStoreName).objectStore(objectStoreName);
	
	                    objectStore.openCursor().onsuccess = function (event) {
	                        var cursor = event.target.result;
	                        if (cursor) {
	                            _trips.push(new _Trip.Trip(cursor.value._id, cursor.value._destination, cursor.value._description, cursor.value._date, cursor.value._rating));
	                            cursor.continue();
	                        } else {
	                            db.close();
	                            resolve(_trips);
	                        }
	                    };
	                };
	            });
	        }
	    }, {
	        key: "addTrip",
	        value: function addTrip(trip) {
	            if (localStorage.length === 0) {
	                trip.id = 1;
	            } else {
	                trip.id = +localStorage.key(localStorage.length - 1) + 1;
	            }
	            localStorage.setItem(trip.id.toString(), JSON.stringify(trip));
	            return trip;
	        }
	    }, {
	        key: "getTripById",
	        value: function getTripById(id) {
	            return JSON.parse(localStorage[id.toString()], function (key, value) {
	                return new _Trip.Trip(value._id, value._destination, value._description, value._date, value._rating);
	            });
	        }
	    }, {
	        key: "editTrip",
	        value: function editTrip(trip) {
	            localStorage.setItem(trip.id.toString(), JSON.stringify(trip));
	            return trip;
	        }
	    }, {
	        key: "removeTrip",
	        value: function removeTrip(id) {
	            localStorage.removeItem(id.toString());
	        }
	    }]);

	    return IndexedDBDataLayer;
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
	    }, {
	        key: "refreshUI",
	        value: function refreshUI() {
	            var _this3 = this;
	
	            this._dataLayer.getAllTrips().then(function (trips) {
	                var target = document.getElementById("trips");
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
	                        newTripElement.querySelector(".panel-title").innerHTML = trip.destination;
	                        newTripElement.querySelector(".trip-description").innerHTML = trip.description;
	                        newTripElement.querySelector(".trip-date").innerHTML = trip.date;
	                        newTripElement.querySelector(".trip-rating").innerHTML = trip.rating.toString();
	                        var btnEdit = newTripElement.querySelector(".edit-trip");
	                        btnEdit.setAttribute("data-trip-id", trip.id.toString());
	                        btnEdit.addEventListener("click", function (event) {
	                            return _this3.editTrip(+event.srcElement.getAttribute("data-trip-id"));
	                        });
	                        var btnDelete = newTripElement.querySelector(".delete-trip");
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
	
	                _this3.drawBarChart(trips);
	            });
	        }
	    }, {
	        key: "showForm",
	        value: function showForm(trip) {
	            document.getElementById("add-trip-container").classList.remove("invisible");
	            document.getElementById("save-trip").setAttribute("data-trip-id", trip.id.toString());
	            document.getElementById("destination-input").value = trip.destination;
	            document.getElementById("description-input").value = trip.description;
	            document.getElementById("date-input").value = trip.date;
	            document.getElementById("rating-input").value = trip.rating.toString();
	        }
	    }, {
	        key: "addTrip",
	        value: function addTrip() {
	            var trip = new _Trip.Trip();
	            this.showForm(trip);
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
	            this.showForm(trip);
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
	
	            document.getElementById("add-trip-container").classList.add("invisible");
	
	            this.refreshUI();
	            return false;
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
	
	                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
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