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
	var ArrayDataLayer_1 = __webpack_require__(1);
	var ViewModel_1 = __webpack_require__(2);
	var vm = new ViewModel_1.ViewModel(new ArrayDataLayer_1.ArrayDataLayer());


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var ArrayDataLayer = (function () {
	    function ArrayDataLayer() {
	    }
	    ArrayDataLayer.prototype.getAllTrips = function () {
	        return this._trips;
	    };
	    ArrayDataLayer.prototype.addTrip = function (trip) {
	        if (this._trips.length === 0) {
	            trip.id = 1;
	        }
	        else {
	            trip.id = this._trips.reduce(function (prev, curr) { return prev.id > curr.id ? prev : curr; }).id + 1;
	        }
	        this._trips.push(trip);
	        return trip;
	    };
	    return ArrayDataLayer;
	}());
	exports.ArrayDataLayer = ArrayDataLayer;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var ViewModel = (function () {
	    function ViewModel(dataLayer) {
	        this._dataLayer = dataLayer;
	        window.addEventListener("load", this.init);
	    }
	    ViewModel.prototype.init = function () {
	        var trips = this._dataLayer.getAllTrips();
	        var target = document.getElementById("trips");
	        var template = document.getElementById("template");
	        for (var _i = 0, trips_1 = trips; _i < trips_1.length; _i++) {
	            var trip = trips_1[_i];
	            var newTripElement = template.cloneNode(true);
	            template.removeAttribute("id");
	            newTripElement.children[0][0].innerHTML = trip.destination;
	            newTripElement.children[1][0].innerHTML = trip.description;
	            newTripElement.children[2][0].innerHTML = trip.date;
	            newTripElement.children[2][1].innerHTML = trip.rating;
	            target.appendChild(newTripElement);
	        }
	    };
	    return ViewModel;
	}());
	exports.ViewModel = ViewModel;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map