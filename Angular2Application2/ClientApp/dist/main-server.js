(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<app></app>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(7);
	var navmenu_component_1 = __webpack_require__(12);
	var home_component_1 = __webpack_require__(14);
	var fetchdata_component_1 = __webpack_require__(16);
	var counter_component_1 = __webpack_require__(19);
	var carList_component_1 = __webpack_require__(21);
	var carListItem_component_1 = __webpack_require__(25);
	var carNewItem_component_1 = __webpack_require__(27);
	var carService_1 = __webpack_require__(22);
	var customerList_component_1 = __webpack_require__(30);
	var customerListItem_component_1 = __webpack_require__(34);
	var customerNewItem_component_1 = __webpack_require__(36);
	var customerService_1 = __webpack_require__(31);
	var forms_1 = __webpack_require__(28);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            app_component_1.AppComponent,
	            navmenu_component_1.NavMenuComponent,
	            counter_component_1.CounterComponent,
	            fetchdata_component_1.FetchDataComponent,
	            carList_component_1.CarListComponent,
	            carListItem_component_1.CarListItemComponent,
	            carNewItem_component_1.CarNewItemComponent,
	            customerList_component_1.CustomerListComponent,
	            customerListItem_component_1.CustomerListItemComponent,
	            customerNewItem_component_1.CustomerNewItemComponent,
	            home_component_1.HomeComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            forms_1.ReactiveFormsModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                { path: 'counter', component: counter_component_1.CounterComponent },
	                { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
	                { path: 'car', component: carList_component_1.CarListComponent },
	                { path: 'car/:customerID', component: carListItem_component_1.CarListItemComponent },
	                { path: 'newcar/:customerID', component: carNewItem_component_1.CarNewItemComponent },
	                { path: 'customers', component: customerList_component_1.CustomerListComponent },
	                { path: 'editcustomer/:customerID', component: customerNewItem_component_1.CustomerNewItemComponent },
	                { path: 'viewcustomer/:customerID', component: customerListItem_component_1.CustomerListItemComponent },
	                { path: 'newcustomer', component: customerNewItem_component_1.CustomerNewItemComponent },
	                { path: '**', redirectTo: 'home' }
	            ])
	        ],
	        providers: [carService_1.CarService, customerService_1.CustomerService]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(8),
	        styles: [__webpack_require__(9)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(10);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(13),
	        styles: [('./navmenu.component.css')]
	    })
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Angular2Application2</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/customers']\">\r\n                        <span class='glyphicon glyphicon-user'></span> Ügyfelek\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/car']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Járművek\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(15)
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <button class=\"btn btn-primary\" routerLink=\"/newcustomer\">Új ügyfél</button>\r\n    <button class=\"btn btn-primary\" routerLink=\"/newcar\">Új jármű</button>\r\n</div>"

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(17);
	var FetchDataComponent = (function () {
	    function FetchDataComponent(http) {
	        var _this = this;
	        http.get('/api/SampleData/WeatherForecasts').subscribe(function (result) {
	            _this.forecasts = result.json();
	        });
	    }
	    return FetchDataComponent;
	}());
	FetchDataComponent = __decorate([
	    core_1.Component({
	        selector: 'fetchdata',
	        template: __webpack_require__(18)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], FetchDataComponent);
	exports.FetchDataComponent = FetchDataComponent;


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table' *ngIf=\"forecasts\">\r\n    <thead>\r\n        <tr>\r\n            <th>Date</th>\r\n            <th>Temp. (C)</th>\r\n            <th>Temp. (F)</th>\r\n            <th>Summary</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let forecast of forecasts\">\r\n            <td>{{ forecast.dateFormatted }}</td>\r\n            <td>{{ forecast.temperatureC }}</td>\r\n            <td>{{ forecast.temperatureF }}</td>\r\n            <td>{{ forecast.summary }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var CounterComponent = (function () {
	    function CounterComponent() {
	        this.currentCount = 0;
	    }
	    CounterComponent.prototype.incrementCounter = function () {
	        this.currentCount++;
	    };
	    return CounterComponent;
	}());
	CounterComponent = __decorate([
	    core_1.Component({
	        selector: 'counter',
	        template: __webpack_require__(20)
	    })
	], CounterComponent);
	exports.CounterComponent = CounterComponent;


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<h2>Counter</h2>\r\n\r\n<p>This is a simple example of an Angular 2 component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)=\"incrementCounter()\">Increment</button>\r\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var carService_1 = __webpack_require__(22);
	var CarListComponent = (function () {
	    function CarListComponent(carService, route) {
	        var _this = this;
	        this.carService = carService;
	        this.route = route;
	        this.processData = function (data) {
	            _this.cars = data;
	        };
	        this.carService.cars.subscribe(this.processData);
	    }
	    CarListComponent.prototype.ngOnInit = function () {
	        this.carService.getAllCar();
	    };
	    return CarListComponent;
	}());
	CarListComponent = __decorate([
	    core_1.Component({
	        selector: 'carList',
	        template: __webpack_require__(24)
	    }),
	    __metadata("design:paramtypes", [carService_1.CarService,
	        router_1.ActivatedRoute])
	], CarListComponent);
	exports.CarListComponent = CarListComponent;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var Subject_1 = __webpack_require__(23);
	//import { Configuration } from "../configuration"; ez lehet, hogy nem kell
	var http_1 = __webpack_require__(17);
	var CarService = (function () {
	    //private configuration: Configuration, 
	    function CarService(http) {
	        this.http = http;
	        this.cars = new Subject_1.Subject();
	        this.car = new Subject_1.Subject();
	        this.carMakes = new Subject_1.Subject();
	        this.carModels = new Subject_1.Subject();
	        this.fuelTypes = new Subject_1.Subject();
	        var defaultHeaders = new http_1.Headers();
	        defaultHeaders.append("Content-Type", "application/json");
	        this.defaultArgs = { headers: defaultHeaders };
	    }
	    CarService.prototype.handleError = function (error) {
	        var message = "";
	        try {
	            var result = JSON.parse(error.text());
	            for (var property in result) {
	                if (Array.isArray(result[property])) {
	                    for (var i = 0; i < result[property].length; i++) {
	                        message = message + result[property][i] + "\n";
	                    }
	                }
	            }
	        }
	        catch (e) {
	            message = (error.text() || error.statusText || error.status.toString(10));
	        }
	        if (!message) {
	            message = (error.text() || error.statusText || error.status.toString(10));
	        }
	        alert(message);
	    };
	    CarService.prototype.getAllCar = function () {
	        var _this = this;
	        this.http.get("/api/Car/GetCars").subscribe(function (result) {
	            _this.cars.next(result.json());
	        }, this.handleError);
	    };
	    CarService.prototype.getCarByCustomerID = function (customerID) {
	        var _this = this;
	        this.http.get("/api/Car/GetCarsByCustomerID?customerID=" + customerID).subscribe(function (result) {
	            _this.cars.next(result.json());
	            //console.log("car " + result.json()[0].carModel.carModelName);
	        }, this.handleError);
	    };
	    CarService.prototype.insert = function (car) {
	        var _this = this;
	        console.log("this.car" + car.carModelID + " " + car.carMakeID + " " + car.engineNumber + " " + car.color + " " + car.vin + " " + car.customerID);
	        this.http.post("/api/Car/", JSON.stringify(car), this.defaultArgs)
	            .subscribe(function (result) {
	            _this.car.next(result.json());
	        }, this.handleError);
	    };
	    /* FORMHOZ */
	    CarService.prototype.getAllCarMakes = function () {
	        var _this = this;
	        this.http.get("/api/Car/GetAllCarMakes").subscribe(function (result) {
	            _this.carMakes.next(result.json());
	            console.log("carMakes " + result.json()[0].carMakeName);
	        }, this.handleError);
	    };
	    CarService.prototype.getCarModelByCarMakeID = function (CarMakeID) {
	        var _this = this;
	        this.http.get("/api/Car/GetCarModelByCarMakeID?CarMakeID=" + CarMakeID).subscribe(function (result) {
	            _this.carModels.next(result.json());
	            console.log("carModels from service " + result.json()[0].carModelName);
	        }, this.handleError);
	    };
	    CarService.prototype.getFuelTypes = function () {
	        var _this = this;
	        this.http.get("/api/Car/GetFuelTypes").subscribe(function (result) {
	            _this.fuelTypes.next(result.json());
	            console.log("fuelTypes from service " + result.json()[0].fuelTypeName);
	        }, this.handleError);
	    };
	    return CarService;
	}());
	CarService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], CarService);
	exports.CarService = CarService;


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Subject");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<h1>Cars</h1>\r\n<p>This component demonstrates fetching data from the server.</p>\r\n<p *ngIf=\"!cars\"><em>Loading...</em></p>\r\n<table class='table' *ngIf=\"cars\">\r\n    {{ customerID }}\r\n    <thead>\r\n        <tr>\r\n            <th>VIN</th>\r\n            <th>CarMake</th>\r\n            <th>CarModel</th>\r\n            <th>ServiceIncidences</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let car of cars\">\r\n            <td>{{ car.vin }}</td>\r\n            <td>{{ car.carModel.carMake.carMakeName }}</td>\r\n            <td>{{ car.carModel.carModelName }}</td>\r\n            <td>\r\n                <ul>\r\n                    <li *ngFor=\"let si of car.serviceIncidences\">\r\n                        {{ si.serviceIncidenceName.incidenceName }} {{ si.repairDate | date:'yyyy. MM. dd.'}}\r\n                        <ul>\r\n                            <li *ngFor=\"let carpart of si.serviceIncidenceCarPart\">{{carpart.carPart.carPartName}} {{carpart.carPart.price}}</li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var carService_1 = __webpack_require__(22);
	var CarListItemComponent = (function () {
	    function CarListItemComponent(carService, route) {
	        var _this = this;
	        this.carService = carService;
	        this.route = route;
	        this.processData = function (data) {
	            _this.car = data;
	        };
	        this.carService.cars.subscribe(this.processData);
	    }
	    CarListItemComponent.prototype.ngOnInit = function () {
	        this.customerID = this.route.snapshot.params['customerID'];
	        this.carService.getCarByCustomerID(this.customerID);
	    };
	    return CarListItemComponent;
	}());
	CarListItemComponent = __decorate([
	    core_1.Component({
	        selector: 'carListItem',
	        template: __webpack_require__(26)
	    }),
	    __metadata("design:paramtypes", [carService_1.CarService,
	        router_1.ActivatedRoute])
	], CarListItemComponent);
	exports.CarListItemComponent = CarListItemComponent;


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<h1>Cars</h1>\r\n<p>This component demonstrates fetching data from the server.</p>\r\n<p *ngIf=\"!car\"><em>Loading...</em></p>\r\n<table class='table' *ngIf=\"car\">\r\n    <thead>\r\n        <tr>\r\n            <th>VIN</th>\r\n            <th>CarMake</th>\r\n            <th>CarModel</th>\r\n            <th>ServiceIncidences</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let ca of car\">\r\n            <td>{{ ca.vin }}</td>\r\n            <td>{{ ca.carModel.carMake.carMakeName }}</td>\r\n            <td>{{ ca.carModel.carModelName }}</td>\r\n            <td>\r\n                <ul>\r\n                    <li *ngFor=\"let si of ca.serviceIncidences\">{{ si.serviceIncidenceName.incidenceName }} {{ si.repairDate | date:'yyyy. MM. dd.'}}</li>\r\n                </ul>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var carService_1 = __webpack_require__(22);
	var forms_1 = __webpack_require__(28);
	var CarNewItemComponent = (function () {
	    function CarNewItemComponent(router, carService, route, formBuilder) {
	        var _this = this;
	        this.router = router;
	        this.carService = carService;
	        this.route = route;
	        this.formBuilder = formBuilder;
	        this.car = null;
	        this.state = null;
	        this.processData = function (data) {
	            _this.carMakes = data;
	        };
	        this.carmodelData = function (data) {
	            _this.carModels = data;
	        };
	        this.fueltypeData = function (data) {
	            _this.fuelTypes = data;
	        };
	        this.carService.carMakes.subscribe(this.processData);
	        this.carService.carModels.subscribe(this.carmodelData);
	        this.carService.fuelTypes.subscribe(this.fueltypeData);
	    }
	    CarNewItemComponent.prototype.ngOnInit = function () {
	        this.carService.getAllCarMakes();
	        this.carService.getFuelTypes();
	        this.customerID = this.route.snapshot.params['customerID'];
	        console.log("carmakes from component " + this.carMakes);
	        console.log("car from component " + this.car);
	        this.carForm = this.formBuilder.group({
	            "carMakeID": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "carModelID": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "fuelTypeID": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "vin": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "engineNumber": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "color": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "customerID": [this.customerID],
	            "licenseplate": [null, forms_1.Validators.compose([forms_1.Validators.required])]
	        });
	    };
	    CarNewItemComponent.prototype.SelectedCarMake = function (carmakeid) {
	        this.carModels = null;
	        this.carService.getCarModelByCarMakeID(carmakeid);
	    };
	    CarNewItemComponent.prototype.SelectedCarModel = function (carmodelid) {
	        console.log(carmodelid);
	    };
	    CarNewItemComponent.prototype.SelectedFuelType = function (fueltypeid) {
	        console.log(fueltypeid);
	    };
	    CarNewItemComponent.prototype.saveCar = function () {
	        this.car = this.carForm.value;
	        console.log("this.car" + this.car.carModelID + " " + this.car.carMakeID + " " + this.car.engineNumber + " " + this.car.color + " " + this.car.vin + " " + this.car.customerID);
	        alert(this.car);
	        this.carService.insert(this.car);
	    };
	    return CarNewItemComponent;
	}());
	CarNewItemComponent = __decorate([
	    core_1.Component({
	        selector: 'carNewItem',
	        template: __webpack_require__(29)
	    }),
	    __metadata("design:paramtypes", [router_1.Router,
	        carService_1.CarService,
	        router_1.ActivatedRoute,
	        forms_1.FormBuilder])
	], CarNewItemComponent);
	exports.CarNewItemComponent = CarNewItemComponent;


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\r\n<h3>Új</h3>\r\n<form [formGroup]=\"carForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{'has-error':!customerForm.controls['lastName'].valid}\">\r\n        <label class=\"col-md-4 control-label\">Vezetéknév*</label>\r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                <input name=\"LastName\" id=\"LastName\" placeholder=\"Vezetéknév\" formControlName=\"lastName\" class=\"form-control\" type=\"text\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-4 col-lg-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"carMakeID\">Jármű márka</label>\r\n                <select #carmakeselected formControlName=\"carMakeID\" (change)=\"SelectedCarMake(carmakeselected.value)\" class=\"form-control\">\r\n                    <option *ngFor=\"let carMake of carMakes\" [value]=\"carMake.carMakeID\">{{carMake.carMakeName}} {{carMake.carMakeID}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-sm-4 col-lg-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"carModelID\">Jármű típus</label>\r\n                <select #carmodelselected formControlName=\"carModelID\" (change)=\"SelectedCarModel(carmodelselected.value)\" class=\"form-control\">\r\n                    <option *ngFor=\"let carModel of carModels\" [value]=\"carModel.carModelID\">{{carModel.carModelName}} {{carModel.carModelID}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-sm-4 col-lg-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"fuelTypeID\">Üzemanyag típus</label>\r\n                <select #fueltypeselected formControlName=\"fuelTypeID\" (change)=\"SelectedFuelType(fueltypeselected.value)\" class=\"form-control\">\r\n                    <option *ngFor=\"let fuelType of fuelTypes\" [value]=\"fuelType.fuelTypeID\">{{fuelType.fuelTypeName}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-4 col-lg-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"vin\">Alvázszám</label>\r\n                <input class=\"form-control\" type=\"text\" id=\"vin\" formControlName=\"vin\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-4 col-lg-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"engineNumber\">Motorszám</label>\r\n                <input class=\"form-control\" type=\"text\" id=\"engineNumber\" formControlName=\"engineNumber\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-4 col-lg-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"color\">Szín</label>\r\n                <input class=\"form-control\" type=\"text\" id=\"color\" formControlName=\"color\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-4 col-lg-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"licenseplate\">licenseplate</label>\r\n                <input class=\"form-control\" id=\"licenseplate\" formControlName=\"licenseplate\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveCar()\"\r\n                    [disabled]=\"!carForm.valid\">\r\n                <!---->\r\n                Save\r\n                <span class=\"glyphicon glyphicon-refresh glyphicon-spin\"></span>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancel()\">Cancel</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDelete()\">Delete</button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"back()\">Back</button>\r\n\r\n            <!--<div *ngIf=\"!carForm.valid\" class=\"alert alert-danger\">Correct all invalid values to enable save.</div>-->\r\n\r\n</form>"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var customerService_1 = __webpack_require__(31);
	var CustomerListComponent = (function () {
	    function CustomerListComponent(customerService, route, router) {
	        var _this = this;
	        this.customerService = customerService;
	        this.route = route;
	        this.router = router;
	        this.processData = function (data) {
	            _this.customers = data;
	        };
	        this.customerService.customers.subscribe(this.processData);
	    }
	    CustomerListComponent.prototype.ngOnInit = function () {
	        this.customerService.getAllCustomer();
	    };
	    CustomerListComponent.prototype.editCustomer = function (customer) {
	        console.log("Listből " + customer);
	        this.router.navigate(["/editcustomer/" + customer]);
	    };
	    CustomerListComponent.prototype.viewCustomer = function (customer) {
	        this.router.navigate(["/viewcustomer/" + customer]);
	    };
	    return CustomerListComponent;
	}());
	CustomerListComponent = __decorate([
	    core_1.Component({
	        selector: 'customerList',
	        template: __webpack_require__(33)
	    }),
	    __metadata("design:paramtypes", [customerService_1.CustomerService,
	        router_1.ActivatedRoute,
	        router_1.Router])
	], CustomerListComponent);
	exports.CustomerListComponent = CustomerListComponent;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(32);
	var Subject_1 = __webpack_require__(23);
	//import { Configuration } from "../configuration"; ez lehet, hogy nem kell
	var http_1 = __webpack_require__(17);
	var CustomerService = (function () {
	    //private configuration: Configuration, 
	    function CustomerService(http) {
	        this.http = http;
	        this.sajt = new Observable_1.Observable();
	        this.customer = new Subject_1.Subject();
	        this.customers = new Subject_1.Subject();
	        var defaultHeaders = new http_1.Headers();
	        defaultHeaders.append("Content-Type", "application/json");
	        this.defaultArgs = { headers: defaultHeaders };
	    }
	    CustomerService.prototype.handleError = function (error) {
	        var message = "";
	        try {
	            var result = JSON.parse(error.text());
	            for (var property in result) {
	                if (Array.isArray(result[property])) {
	                    for (var i = 0; i < result[property].length; i++) {
	                        message = message + result[property][i] + "\n";
	                    }
	                }
	            }
	        }
	        catch (e) {
	            message = (error.text() || error.statusText || error.status.toString(10));
	        }
	        if (!message) {
	            message = (error.text() || error.statusText || error.status.toString(10));
	        }
	        alert(message);
	    };
	    CustomerService.prototype.getAllCustomer = function () {
	        var _this = this;
	        this.http.get("/api/Customer/GetAllCustomer").subscribe(function (result) {
	            _this.customers.next(result.json());
	        }, this.handleError);
	    };
	    CustomerService.prototype.getCustomerById = function (customerID) {
	        var _this = this;
	        this.http.get("/api/Customer/GetCustomerByID?customerID=" + customerID)
	            .subscribe(function (result) {
	            _this.customer.next(result.json());
	        }, this.handleError);
	    };
	    CustomerService.prototype.extractData = function (res) {
	        var body = res.json();
	        return body.data || {};
	    };
	    CustomerService.prototype.insert = function (customer) {
	        var _this = this;
	        return this.http.post("/api/Customer/", JSON.stringify(customer), this.defaultArgs)
	            .subscribe(function (result) {
	            _this.customer.next(result.json());
	        }, this.handleError);
	    };
	    CustomerService.prototype.update = function (customer) {
	        var _this = this;
	        console.log("update customer " + customer);
	        this.http.put("/api/Customer/", JSON.stringify(customer), this.defaultArgs)
	            .subscribe(function (result) {
	            _this.customer.next(customer);
	        }, this.handleError);
	    };
	    return CustomerService;
	}());
	CustomerService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], CustomerService);
	exports.CustomerService = CustomerService;


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Observable");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<h1>Ügyfelek</h1>\r\n\r\n<p *ngIf=\"!customers\"><em>Loading...</em></p>\r\n<table class='table' *ngIf=\"customers\">\r\n    <thead>\r\n        <tr>\r\n            <th>Vezetéknév</th>\r\n            <th>Keresztnév</th>\r\n            <th>Telefonszám</th>\r\n            <th>Szerk.</th>\r\n            <!--<th>ServiceIncidences</th>-->\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let customer of customers\" (click)=\"viewCustomer(customer.customerID)\">\r\n            <td>{{ customer.lastName }}</td>\r\n            <td>{{ customer.firstName}}</td>\r\n            <td>{{ customer.phoneNumber }}</td>\r\n            <td>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"editCustomer(customer.customerID)\">\r\n                    <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\r\n                </button>\r\n            </td>\r\n            <!--<td>\r\n                <ul>\r\n                    <li *ngFor=\"let si of car.serviceIncidences\">\r\n                        {{ si.serviceIncidenceName.incidenceName }} {{ si.repairDate | date:'yyyy. MM. dd.'}}\r\n                        <ul>\r\n                            <li *ngFor=\"let carpart of si.serviceIncidenceCarPart\">{{carpart.carPart.carPartName}} {{carpart.carPart.price}}</li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </td>-->\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var customerService_1 = __webpack_require__(31);
	var CustomerListItemComponent = (function () {
	    function CustomerListItemComponent(customerService, route, router) {
	        var _this = this;
	        this.customerService = customerService;
	        this.route = route;
	        this.router = router;
	        this.processData = function (data) {
	            _this.customer = data;
	        };
	        this.customerService.customer.subscribe(this.processData);
	    }
	    CustomerListItemComponent.prototype.ngOnInit = function () {
	        this.customerID = this.route.snapshot.params['customerID'];
	        this.customerService.getCustomerById(this.customerID);
	    };
	    CustomerListItemComponent.prototype.editCustomer = function (customer) {
	        console.log("Listből " + customer);
	        this.router.navigate(["/editcustomer/" + customer]);
	    };
	    CustomerListItemComponent.prototype.addCar = function (customer) {
	        console.log(customer);
	        this.router.navigate(["/newcar/" + customer]);
	    };
	    return CustomerListItemComponent;
	}());
	CustomerListItemComponent = __decorate([
	    core_1.Component({
	        selector: 'customerListItem',
	        template: __webpack_require__(35)
	    }),
	    __metadata("design:paramtypes", [customerService_1.CustomerService,
	        router_1.ActivatedRoute,
	        router_1.Router])
	], CustomerListItemComponent);
	exports.CustomerListItemComponent = CustomerListItemComponent;


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<p *ngIf=\"!customer\"><em>Loading...</em></p>\r\n<div class=\"panel-group\">\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n            <h4 class=\"panel-title\">\r\n                <a data-toggle=\"collapse\" href=\"#customer\">Ügyfél adatai</a>\r\n            </h4>\r\n        </div>\r\n        <div id=\"customer\" class=\"panel-collapse collapse in\" aria-expanded=\"true\">\r\n            <div class=\"panel-body\">\r\n                <table class='table' *ngIf=\"customer\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Vezetéknév</th>\r\n                            <th>Keresztnév</th>\r\n                            <th>Telefonszám</th>\r\n                            <th>Szerk.</th>\r\n                            <!--<th>ServiceIncidences</th>-->\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let customer of customer\">\r\n                            <td>{{ customer.lastName }}</td>\r\n                            <td>{{ customer.firstName}}</td>\r\n                            <td>{{ customer.phoneNumber }}</td>\r\n                            <td>\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"editCustomer(customer.customerID)\">\r\n                                    <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">Panel Footer</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngFor=\"let customer of customer\">\r\n    <div class=\"panel-group\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <span class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" href=\"#cars\">Ügyfél járművei</a>\r\n                </span>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addCar(customer.customerID)\">\r\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>{{customer.customerID}}\r\n                </button>\r\n            </div>\r\n            <div id=\"cars\" class=\"panel-collapse collapse in\" aria-expanded=\"true\">\r\n                <div class=\"panel-body\">\r\n\r\n\r\n                    <div *ngFor=\"let car of customer.cars\">\r\n                        <div class=\"panel-group\">\r\n                            <div class=\"panel panel-default\">\r\n                                <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                        <a data-toggle=\"collapse\" href=\"#car{{car.carID}}\">{{car.carModel.carMake.carMakeName}} {{car.carModel.carModelName}}</a>\r\n                                    </h4>\r\n                                </div>\r\n                                <div id=\"car{{car.carID}}\" class=\"panel-collapse collapse\" aria-expanded=\"true\">\r\n                                    <div class=\"panel-body\">\r\n\r\n\r\n                                        {{car.carModel.carMake.carMakeName}} {{car.carModel.carModelName}}\r\n\r\n                                    </div>\r\n                                    <!--<div class=\"panel-footer\">Panel Footer</div>-->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n            <!--<div class=\"panel-footer\">Panel Footer</div>-->\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var customerService_1 = __webpack_require__(31);
	var forms_1 = __webpack_require__(28);
	var CustomerNewItemComponent = (function () {
	    function CustomerNewItemComponent(router, customerService, route, formBuilder) {
	        var _this = this;
	        this.router = router;
	        this.customerService = customerService;
	        this.route = route;
	        this.formBuilder = formBuilder;
	        this.customer = null;
	        this.state = null;
	        this.processData = function (data) {
	            _this.customer = data;
	            console.log("processData");
	            _this.customerForm.patchValue(_this.customer[0]);
	        };
	    }
	    CustomerNewItemComponent.prototype.ngOnInit = function () {
	        this.customerID = 0;
	        //GET CustomerID
	        this.customerID = this.route.snapshot.params['customerID'];
	        if (this.customerID > 0) {
	            console.log("customerID > 0");
	            this.customerService.getCustomerById(this.customerID);
	        }
	        else {
	        }
	        this.subscription = this.customerService.customer.subscribe(this.processData);
	        this.customerForm = this.formBuilder.group({
	            "customerID": [0],
	            "lastName": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "firstName": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "birthplace": [""],
	            "birthday": [""],
	            "address": [""],
	            "idNumber": [""],
	            "phoneNumber": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "nameOfMother": [""],
	            "registerDate": [new Date()],
	            "lastModified": [new Date()]
	        });
	    };
	    CustomerNewItemComponent.prototype.saveCustomer = function () {
	        this.customer = this.customerForm.value;
	        if (this.customer.customerID === 0) {
	            console.log("insert");
	            this.customerService.insert(this.customer);
	            this.subscription = this.customerService.customer.subscribe(this.processData);
	            console.log("subs" + this.subscription);
	            //this.router.navigate(["/newcar/" + sajt.]);
	            //console.log(sajt);
	        }
	        else {
	            console.log("update");
	            this.customerService.update(this.customer);
	        }
	        //this.customerForm.reset();
	    };
	    CustomerNewItemComponent.prototype.back = function () {
	        console.log("dirty? " + this.customerForm.dirty);
	        if (this.customerForm.dirty) {
	            alert("Visszalépés előtt mentsen!");
	        }
	        else {
	            this.router.navigate(["customers"]);
	        }
	    };
	    return CustomerNewItemComponent;
	}());
	CustomerNewItemComponent = __decorate([
	    core_1.Component({
	        selector: 'customer-new',
	        template: __webpack_require__(37)
	    }),
	    __metadata("design:paramtypes", [router_1.Router,
	        customerService_1.CustomerService,
	        router_1.ActivatedRoute,
	        forms_1.FormBuilder])
	], CustomerNewItemComponent);
	exports.CustomerNewItemComponent = CustomerNewItemComponent;


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "\r\n<h3>Új ügyfél</h3>\r\n<form [formGroup]=\"customerForm\" class=\"well form-horizontal\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{'has-error':!customerForm.controls['lastName'].valid}\">\r\n        <label class=\"col-md-4 control-label\">Vezetéknév*</label>\r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                <input name=\"LastName\" id=\"LastName\" placeholder=\"Vezetéknév\" formControlName=\"lastName\" class=\"form-control\" type=\"text\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{'has-error':!customerForm.controls['firstName'].valid}\">\r\n        <label class=\"col-md-4 control-label\">Keresztnév*</label>\r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                <input name=\"Firstname\" id=\"Firstname\" placeholder=\"Keresztnév\" formControlName=\"firstName\" class=\"form-control\" type=\"text\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{'has-error':!customerForm.controls['phoneNumber'].valid}\">\r\n        <label class=\"col-md-4 control-label\">Telefonszám*</label>\r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\r\n                <input name=\"PhoneNumber\" id=\"Firstname\" placeholder=\"Telefonszám\" formControlName=\"phoneNumber\" class=\"form-control\" type=\"text\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\">Lakcím</label>\r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span>\r\n                <input name=\"Address\" id=\"Address\" placeholder=\"Lakcím\" formControlName=\"address\" class=\"form-control\" type=\"text\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\">Személyi igazolványszám</label>\r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                <input name=\"IDNumber\" id=\"IDNumber\" placeholder=\"Személyi igazolványszám\" formControlName=\"idNumber\" class=\"form-control\" type=\"text\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\">Születési hely</label>\r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                <input name=\"Birthplace\" id=\"Birthplace\" placeholder=\"Születési hely\" formControlName=\"birthplace\" class=\"form-control\" type=\"text\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\">Születési idő</label>\r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                <input name=\"Birthday\" id=\"Birthday\" placeholder=\"Születési idő\" formControlName=\"birthday\" class=\"form-control\" type=\"text\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\">Anyja neve</label>\r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                <input name=\"NameOfMother\" id=\"NameOfMother\" placeholder=\"Anyja neve\" formControlName=\"nameOfMother\" class=\"form-control\" type=\"text\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--<div class=\"row\">\r\n        <!--<div class=\"col-xs-12 col-sm-4 col-lg-4\">\r\n            <div class=\"form-group\">\r\n                <div class=\"form-group\" [ngClass]=\"{'has-error':!customerForm.controls['Surname'].valid}\">\r\n                    <label for=\"Surname\">Vezetéknév*</label>\r\n                    <input class=\"form-control\" type=\"text\" id=\"Surname\" formControlName=\"Surname\" />\r\n                </div>\r\n            </div>\r\n        </div>-->\r\n\r\n        <!--<div class=\"col-xs-12 col-sm-4 col-lg-4\">\r\n            <div class=\"form-group\" [ngClass]=\"{'has-error':!customerForm.controls['Firstname'].valid}\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"Firstname\">Keresztnév*</label>\r\n                    <input class=\"form-control\" type=\"text\" id=\"Firstname\" formControlName=\"Firstname\" />\r\n                </div>\r\n            </div>\r\n        </div>-->\r\n\r\n        <!--<div class=\"col-xs-12 col-sm-4 col-lg-4\">\r\n            <div class=\"form-group\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"Birthplace\">Születési hely</label>\r\n                    <input class=\"form-control\" type=\"text\" id=\"Birthplace\" formControlName=\"Birthplace\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>-->\r\n\r\n    <!--<div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-4 col-lg-4\">\r\n            <div class=\"form-group\" [ngClass]=\"{'has-error':!customerForm.controls['PhoneNumber'].valid}\">\r\n                <label for=\"PhoneNumber\">Telefonszám*</label>\r\n                <input class=\"form-control\" type=\"text\" id=\"PhoneNumber\" formControlName=\"PhoneNumber\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-4 col-lg-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"Address\">Lakcím</label>\r\n                <input class=\"form-control\" type=\"text\" id=\"Address\" formControlName=\"Address\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-4 col-lg-4\">\r\n            <div class=\"form-group\">\r\n                <label for=\"Birthday\">Születésnap</label>\r\n                <input class=\"form-control\" type=\"text\" id=\"Birthday\" formControlName=\"Birthday\" />\r\n            </div>\r\n        </div>\r\n    </div>-->\r\n\r\n    <!--<div class=\"row\">\r\n\r\n        <label for=\"NameOfMother\">Anyja neve</label>\r\n        <input class=\"form-control\" id=\"NameOfMother\" formControlName=\"NameOfMother\">\r\n        <label for=\"IDNumber\">Szigszám</label>\r\n        <input class=\"form-control\" id=\"IDNumber\" formControlName=\"IDNumber\">\r\n\r\n        <!--<div *ngIf=\"carForm.controls.carMakeID.hasError('required')\" class=\"alert alert-danger\">Name is required!</div>\r\n        <div *ngIf=\"carForm.controls.carMakeID.hasError('maxlength')\" class=\"alert alert-danger\">Name is too long!</div>\r\n        <div *ngIf=\"carForm.controls.carMakeID.hasError('dupe')\" class=\"alert alert-danger\">Name is a duplicate!</div>\r\n    </div>-->\r\n\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveCustomer()\"\r\n            [disabled]=\"!customerForm.valid\">\r\n        <!---->\r\n        Save\r\n        <span class=\"glyphicon glyphicon-refresh glyphicon-spin\"></span>\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancel()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDelete()\">Delete</button>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"back()\">Back</button>\r\n\r\n    <!--<div *ngIf=\"!carForm.valid\" class=\"alert alert-danger\">Correct all invalid values to enable save.</div>-->\r\n\r\n</form>"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWIyN2VkM2I3MTg3YWM0ZWZmNGYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXIvY2FyTGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhci9jYXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvU3ViamVjdFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXIvY2FyTGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyL2Nhckxpc3RJdGVtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyL2Nhckxpc3RJdGVtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXIvY2FyTmV3SXRlbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyL2Nhck5ld0l0ZW0uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2N1c3RvbWVyL2N1c3RvbWVyTGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2N1c3RvbWVyL2N1c3RvbWVyU2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXJMaXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lckxpc3RJdGVtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXJMaXN0SXRlbS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXJOZXdJdGVtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXJOZXdJdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1C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Q0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQzFCLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQ3hDLENBQUM7U0FBQyxJQUFJLENBQUMsQ0FBQzthQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUN4QyxDQUFDO0tBQ0wsQ0FBQztLQUNMLCtCQUFDO0FBQUQsRUFBQztBQTVFWSx5QkFBd0I7S0FKcEMsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRSxjQUFjO1NBQ3hCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQWtDLENBQUM7TUFDeEQsQ0FBQztzQ0FVc0IsZUFBTTtTQUNHLGlDQUFlO1NBQ3pCLHVCQUFjO1NBQ1IsbUJBQVc7SUFaM0Isd0JBQXdCLENBNEVwQztBQTVFWSw2REFBd0I7Ozs7Ozs7QUNackMseUtBQXdLLHFEQUFxRCx1aEJBQXVoQixzREFBc0QsMGhCQUEwaEIsd0RBQXdELGl3R0FBaXdHLG9EQUFvRCxpWEFBaVgsc0RBQXNELHkyQkFBeTJCLHdEQUF3RCxpdkUiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5YjI3ZWQzYjcxODdhYzRlZmY0ZiIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XHJcbmltcG9ydCAnem9uZS5qcyc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuXHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8YXBwPjwvYXBwPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZXRjaERhdGFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQ2FyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXIvY2FyTGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXIvY2FyTGlzdEl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FyTmV3SXRlbUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyL2Nhck5ld0l0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyL2NhclNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyL2N1c3RvbWVyTGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDdXN0b21lckxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyL2N1c3RvbWVyTGlzdEl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3VzdG9tZXJOZXdJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyL2N1c3RvbWVyTmV3SXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDdXN0b21lclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXJTZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxyXG4gICAgICAgIENvdW50ZXJDb21wb25lbnQsXHJcbiAgICAgICAgRmV0Y2hEYXRhQ29tcG9uZW50LFxyXG4gICAgICAgIENhckxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgQ2FyTGlzdEl0ZW1Db21wb25lbnQsXHJcbiAgICAgICAgQ2FyTmV3SXRlbUNvbXBvbmVudCxcclxuICAgICAgICBDdXN0b21lckxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgQ3VzdG9tZXJMaXN0SXRlbUNvbXBvbmVudCxcclxuICAgICAgICBDdXN0b21lck5ld0l0ZW1Db21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2NvdW50ZXInLCBjb21wb25lbnQ6IENvdW50ZXJDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZmV0Y2gtZGF0YScsIGNvbXBvbmVudDogRmV0Y2hEYXRhQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2NhcicsIGNvbXBvbmVudDogQ2FyTGlzdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdjYXIvOmN1c3RvbWVySUQnLCBjb21wb25lbnQ6IENhckxpc3RJdGVtQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ25ld2Nhci86Y3VzdG9tZXJJRCcsIGNvbXBvbmVudDogQ2FyTmV3SXRlbUNvbXBvbmVudCB9LFxyXG5cclxuICAgICAgICAgICAgeyBwYXRoOiAnY3VzdG9tZXJzJywgY29tcG9uZW50OiBDdXN0b21lckxpc3RDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZWRpdGN1c3RvbWVyLzpjdXN0b21lcklEJywgY29tcG9uZW50OiBDdXN0b21lck5ld0l0ZW1Db21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAndmlld2N1c3RvbWVyLzpjdXN0b21lcklEJywgY29tcG9uZW50OiBDdXN0b21lckxpc3RJdGVtQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ25ld2N1c3RvbWVyJywgY29tcG9uZW50OiBDdXN0b21lck5ld0l0ZW1Db21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfSAgICAgICAgICAgIFxyXG4gICAgICAgIF0pXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbQ2FyU2VydmljZSwgQ3VzdG9tZXJTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXHJcXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJz5cXHJcXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTkgYm9keS1jb250ZW50Jz5cXHJcXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxyXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFsoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxyXFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPkFuZ3VsYXIyQXBwbGljYXRpb24yPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjbGVhcmZpeCc+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvbWUnPjwvc3Bhbj4gSG9tZVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9jdXN0b21lcnMnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdXNlcic+PC9zcGFuPiDDnGd5ZmVsZWtcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2FyJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gSsOhcm3FsXZla1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHJvdXRlckxpbms9XFxcIi9uZXdjdXN0b21lclxcXCI+w5pqIMO8Z3lmw6lsPC9idXR0b24+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgcm91dGVyTGluaz1cXFwiL25ld2NhclxcXCI+w5pqIGrDoXJtxbE8L2J1dHRvbj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmZXRjaGRhdGEnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmV0Y2hkYXRhLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIEZldGNoRGF0YUNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgZm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSB7XHJcbiAgICAgICAgaHR0cC5nZXQoJy9hcGkvU2FtcGxlRGF0YS9XZWF0aGVyRm9yZWNhc3RzJykuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yZWNhc3RzID0gcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFdlYXRoZXJGb3JlY2FzdCB7XHJcbiAgICBkYXRlRm9ybWF0dGVkOiBzdHJpbmc7XHJcbiAgICB0ZW1wZXJhdHVyZUM6IG51bWJlcjtcclxuICAgIHRlbXBlcmF0dXJlRjogbnVtYmVyO1xyXG4gICAgc3VtbWFyeTogc3RyaW5nO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+V2VhdGhlciBmb3JlY2FzdDwvaDE+XFxyXFxuXFxyXFxuPHA+VGhpcyBjb21wb25lbnQgZGVtb25zdHJhdGVzIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyLjwvcD5cXHJcXG5cXHJcXG48cCAqbmdJZj1cXFwiIWZvcmVjYXN0c1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD5cXHJcXG5cXHJcXG48dGFibGUgY2xhc3M9J3RhYmxlJyAqbmdJZj1cXFwiZm9yZWNhc3RzXFxcIj5cXHJcXG4gICAgPHRoZWFkPlxcclxcbiAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+VGVtcC4gKEMpPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+VGVtcC4gKEYpPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+U3VtbWFyeTwvdGg+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3RoZWFkPlxcclxcbiAgICA8dGJvZHk+XFxyXFxuICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgZm9yZWNhc3Qgb2YgZm9yZWNhc3RzXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QuZGF0ZUZvcm1hdHRlZCB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LnRlbXBlcmF0dXJlQyB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LnRlbXBlcmF0dXJlRiB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LnN1bW1hcnkgfX08L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY291bnRlcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jb3VudGVyLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIENvdW50ZXJDb21wb25lbnQge1xyXG4gICAgcHVibGljIGN1cnJlbnRDb3VudCA9IDA7XHJcblxyXG4gICAgcHVibGljIGluY3JlbWVudENvdW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q291bnQrKztcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+Q291bnRlcjwvaDI+XFxyXFxuXFxyXFxuPHA+VGhpcyBpcyBhIHNpbXBsZSBleGFtcGxlIG9mIGFuIEFuZ3VsYXIgMiBjb21wb25lbnQuPC9wPlxcclxcblxcclxcbjxwPkN1cnJlbnQgY291bnQ6IDxzdHJvbmc+e3sgY3VycmVudENvdW50IH19PC9zdHJvbmc+PC9wPlxcclxcblxcclxcbjxidXR0b24gKGNsaWNrKT1cXFwiaW5jcmVtZW50Q291bnRlcigpXFxcIj5JbmNyZW1lbnQ8L2J1dHRvbj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDYXJTZXJ2aWNlIH0gZnJvbSAnLi9jYXJTZXJ2aWNlJztcclxuXHJcbmltcG9ydCBJQ2FyID0gQXBwLk1vZGVscy5JQ2FyO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Nhckxpc3QnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2FyTGlzdC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBjYXJzOiBJQ2FyW107XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgY2FyU2VydmljZTogQ2FyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jYXJTZXJ2aWNlLmNhcnMuc3Vic2NyaWJlKHRoaXMucHJvY2Vzc0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NEYXRhID0gKGRhdGE6IElDYXJbXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FycyA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJTZXJ2aWNlLmdldEFsbENhcigpO1xyXG4gICAgfSAgICAgICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyL2Nhckxpc3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XHJcbi8vaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9jb25maWd1cmF0aW9uXCI7IGV6IGxlaGV0LCBob2d5IG5lbSBrZWxsXHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9uc0FyZ3MsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuaW1wb3J0IENhciA9IEFwcC5Nb2RlbHMuSUNhcjtcclxuaW1wb3J0IENhck1ha2UgPSBBcHAuTW9kZWxzLklDYXJNYWtlO1xyXG5pbXBvcnQgQ2FyTW9kZWwgPSBBcHAuTW9kZWxzLklDYXJNb2RlbDtcclxuaW1wb3J0IEZ1ZWxUeXBlID0gQXBwLk1vZGVscy5JRnVlbFR5cGU7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYXJTZXJ2aWNlIHtcclxuXHJcbiAgICBjYXJzOiBTdWJqZWN0PENhcltdPjtcclxuICAgIGNhcjogU3ViamVjdDxDYXI+O1xyXG5cclxuICAgIC8qIEZPUk1IT1ogKi9cclxuICAgIGNhck1ha2VzOiBTdWJqZWN0PENhck1ha2VbXT47XHJcbiAgICBjYXJNb2RlbHM6IFN1YmplY3Q8Q2FyTW9kZWxbXT47XHJcbiAgICBmdWVsVHlwZXM6IFN1YmplY3Q8RnVlbFR5cGVbXT47XHJcbiAgICAvKiBGT1JNSE9aIFbDiUdFKi9cclxuXHJcbiAgICBwcml2YXRlIGRlZmF1bHRBcmdzOiBSZXF1ZXN0T3B0aW9uc0FyZ3M7XHJcbiAgICAvL3ByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiwgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLmNhcnMgPSBuZXcgU3ViamVjdDxDYXJbXT4oKTtcclxuICAgICAgICB0aGlzLmNhciA9IG5ldyBTdWJqZWN0PENhcj4oKTtcclxuICAgICAgICB0aGlzLmNhck1ha2VzID0gbmV3IFN1YmplY3Q8Q2FyTWFrZVtdPigpO1xyXG4gICAgICAgIHRoaXMuY2FyTW9kZWxzID0gbmV3IFN1YmplY3Q8Q2FyTW9kZWxbXT4oKTtcclxuICAgICAgICB0aGlzLmZ1ZWxUeXBlcyA9IG5ldyBTdWJqZWN0PEZ1ZWxUeXBlW10+KCk7XHJcblxyXG4gICAgICAgIGxldCBkZWZhdWx0SGVhZGVyczogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgZGVmYXVsdEhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKVxyXG4gICAgICAgIHRoaXMuZGVmYXVsdEFyZ3MgPSB7IGhlYWRlcnM6IGRlZmF1bHRIZWFkZXJzIH07XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIlwiO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShlcnJvci50ZXh0KCkpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRbcHJvcGVydHldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0W3Byb3BlcnR5XS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZSArIHJlc3VsdFtwcm9wZXJ0eV1baV0gKyBcIlxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlID0gKGVycm9yLnRleHQoKSB8fCBlcnJvci5zdGF0dXNUZXh0IHx8IGVycm9yLnN0YXR1cy50b1N0cmluZygxMCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAoZXJyb3IudGV4dCgpIHx8IGVycm9yLnN0YXR1c1RleHQgfHwgZXJyb3Iuc3RhdHVzLnRvU3RyaW5nKDEwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbENhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KFwiL2FwaS9DYXIvR2V0Q2Fyc1wiKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXN1bHQ6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnMubmV4dChyZXN1bHQuanNvbigpKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FyQnlDdXN0b21lcklEKGN1c3RvbWVySUQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoXCIvYXBpL0Nhci9HZXRDYXJzQnlDdXN0b21lcklEP2N1c3RvbWVySUQ9XCIgKyBjdXN0b21lcklEKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXN1bHQ6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnMubmV4dChyZXN1bHQuanNvbigpKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYXIgXCIgKyByZXN1bHQuanNvbigpWzBdLmNhck1vZGVsLmNhck1vZGVsTmFtZSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydChjYXI6IENhcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5jYXJcIiArIGNhci5jYXJNb2RlbElEICsgXCIgXCIgKyBjYXIuY2FyTWFrZUlEICsgXCIgXCIgKyBjYXIuZW5naW5lTnVtYmVyICsgXCIgXCIgKyBjYXIuY29sb3IgKyBcIiBcIiArIGNhci52aW4gKyBcIiBcIiArIGNhci5jdXN0b21lcklEKTtcclxuICAgICAgICB0aGlzLmh0dHAucG9zdChcIi9hcGkvQ2FyL1wiLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjYXIpLFxyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRBcmdzKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQ6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhci5uZXh0KHJlc3VsdC5qc29uKCkpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBGT1JNSE9aICovXHJcbiAgICBnZXRBbGxDYXJNYWtlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KFwiL2FwaS9DYXIvR2V0QWxsQ2FyTWFrZXNcIikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzdWx0OiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJNYWtlcy5uZXh0KHJlc3VsdC5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXJNYWtlcyBcIiArIHJlc3VsdC5qc29uKClbMF0uY2FyTWFrZU5hbWUpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJNb2RlbEJ5Q2FyTWFrZUlEKENhck1ha2VJRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldChcIi9hcGkvQ2FyL0dldENhck1vZGVsQnlDYXJNYWtlSUQ/Q2FyTWFrZUlEPVwiICsgQ2FyTWFrZUlEKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXN1bHQ6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhck1vZGVscy5uZXh0KHJlc3VsdC5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXJNb2RlbHMgZnJvbSBzZXJ2aWNlIFwiICsgcmVzdWx0Lmpzb24oKVswXS5jYXJNb2RlbE5hbWUpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGdWVsVHlwZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldChcIi9hcGkvQ2FyL0dldEZ1ZWxUeXBlc1wiKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXN1bHQ6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZ1ZWxUeXBlcy5uZXh0KHJlc3VsdC5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmdWVsVHlwZXMgZnJvbSBzZXJ2aWNlIFwiICsgcmVzdWx0Lmpzb24oKVswXS5mdWVsVHlwZU5hbWUpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuICAgIC8qIEZPUk1IT1ogVsOJR0UgKi9cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyL2NhclNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1N1YmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5DYXJzPC9oMT5cXHJcXG48cD5UaGlzIGNvbXBvbmVudCBkZW1vbnN0cmF0ZXMgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuPC9wPlxcclxcbjxwICpuZ0lmPVxcXCIhY2Fyc1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD5cXHJcXG48dGFibGUgY2xhc3M9J3RhYmxlJyAqbmdJZj1cXFwiY2Fyc1xcXCI+XFxyXFxuICAgIHt7IGN1c3RvbWVySUQgfX1cXHJcXG4gICAgPHRoZWFkPlxcclxcbiAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgIDx0aD5WSU48L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5DYXJNYWtlPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+Q2FyTW9kZWw8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5TZXJ2aWNlSW5jaWRlbmNlczwvdGg+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3RoZWFkPlxcclxcbiAgICA8dGJvZHk+XFxyXFxuICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgY2FyIG9mIGNhcnNcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBjYXIudmluIH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3sgY2FyLmNhck1vZGVsLmNhck1ha2UuY2FyTWFrZU5hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBjYXIuY2FyTW9kZWwuY2FyTW9kZWxOYW1lIH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx1bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBzaSBvZiBjYXIuc2VydmljZUluY2lkZW5jZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNpLnNlcnZpY2VJbmNpZGVuY2VOYW1lLmluY2lkZW5jZU5hbWUgfX0ge3sgc2kucmVwYWlyRGF0ZSB8IGRhdGU6J3l5eXkuIE1NLiBkZC4nfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBjYXJwYXJ0IG9mIHNpLnNlcnZpY2VJbmNpZGVuY2VDYXJQYXJ0XFxcIj57e2NhcnBhcnQuY2FyUGFydC5jYXJQYXJ0TmFtZX19IHt7Y2FycGFydC5jYXJQYXJ0LnByaWNlfX08L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3Rib2R5PlxcclxcbjwvdGFibGU+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXIvY2FyTGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDYXJTZXJ2aWNlIH0gZnJvbSAnLi9jYXJTZXJ2aWNlJztcclxuXHJcbmltcG9ydCBJQ2FyID0gQXBwLk1vZGVscy5JQ2FyO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Nhckxpc3RJdGVtJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Nhckxpc3RJdGVtLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIENhckxpc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBjYXI6IElDYXJbXTtcclxuICAgIHB1YmxpYyBjdXN0b21lcklEO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNhclNlcnZpY2U6IENhclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY2FyU2VydmljZS5jYXJzLnN1YnNjcmliZSh0aGlzLnByb2Nlc3NEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzRGF0YSA9IChkYXRhOiBJQ2FyW10pID0+IHtcclxuICAgICAgICB0aGlzLmNhciA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21lcklEID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2N1c3RvbWVySUQnXTtcclxuICAgICAgICB0aGlzLmNhclNlcnZpY2UuZ2V0Q2FyQnlDdXN0b21lcklEKHRoaXMuY3VzdG9tZXJJRCk7XHJcbiAgICB9ICAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhci9jYXJMaXN0SXRlbS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkNhcnM8L2gxPlxcclxcbjxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlci48L3A+XFxyXFxuPHAgKm5nSWY9XFxcIiFjYXJcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxyXFxuPHRhYmxlIGNsYXNzPSd0YWJsZScgKm5nSWY9XFxcImNhclxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+VklOPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+Q2FyTWFrZTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPkNhck1vZGVsPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+U2VydmljZUluY2lkZW5jZXM8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGNhIG9mIGNhclxcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGNhLnZpbiB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGNhLmNhck1vZGVsLmNhck1ha2UuY2FyTWFrZU5hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBjYS5jYXJNb2RlbC5jYXJNb2RlbE5hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IHNpIG9mIGNhLnNlcnZpY2VJbmNpZGVuY2VzXFxcIj57eyBzaS5zZXJ2aWNlSW5jaWRlbmNlTmFtZS5pbmNpZGVuY2VOYW1lIH19IHt7IHNpLnJlcGFpckRhdGUgfCBkYXRlOid5eXl5LiBNTS4gZGQuJ319PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyL2Nhckxpc3RJdGVtLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhcmFtcywgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IENhclNlcnZpY2UgfSBmcm9tIFwiLi9jYXJTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCBJQ2FyID0gQXBwLk1vZGVscy5JQ2FyO1xyXG5pbXBvcnQgSUNhck1ha2UgPSBBcHAuTW9kZWxzLklDYXJNYWtlO1xyXG5pbXBvcnQgSUNhck1vZGVsID0gQXBwLk1vZGVscy5JQ2FyTW9kZWw7XHJcbmltcG9ydCBJRnVlbFR5cGUgPSBBcHAuTW9kZWxzLklGdWVsVHlwZTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYXJOZXdJdGVtJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Nhck5ld0l0ZW0uY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhck5ld0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY2FyOiBJQ2FyID0gbnVsbDtcclxuICAgIGNhck1ha2VzOiBJQ2FyTWFrZVtdO1xyXG4gICAgY2FyTW9kZWxzOiBJQ2FyTW9kZWxbXTtcclxuICAgIGZ1ZWxUeXBlczogSUZ1ZWxUeXBlW107XHJcbiAgICBjYXJGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBwcml2YXRlIGN1c3RvbWVySUQ7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0ZTogSUNhciA9IG51bGw7XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGNhclNlcnZpY2U6IENhclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXJcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5jYXJTZXJ2aWNlLmNhck1ha2VzLnN1YnNjcmliZSh0aGlzLnByb2Nlc3NEYXRhKTtcclxuICAgICAgICB0aGlzLmNhclNlcnZpY2UuY2FyTW9kZWxzLnN1YnNjcmliZSh0aGlzLmNhcm1vZGVsRGF0YSk7XHJcbiAgICAgICAgdGhpcy5jYXJTZXJ2aWNlLmZ1ZWxUeXBlcy5zdWJzY3JpYmUodGhpcy5mdWVsdHlwZURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvY2Vzc0RhdGEgPSAoZGF0YTogSUNhck1ha2VbXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FyTWFrZXMgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjYXJtb2RlbERhdGEgPSAoZGF0YTogSUNhck1vZGVsW10pID0+IHtcclxuICAgICAgICB0aGlzLmNhck1vZGVscyA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZ1ZWx0eXBlRGF0YSA9IChkYXRhOiBJRnVlbFR5cGVbXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZnVlbFR5cGVzID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhclNlcnZpY2UuZ2V0QWxsQ2FyTWFrZXMoKTtcclxuICAgICAgICB0aGlzLmNhclNlcnZpY2UuZ2V0RnVlbFR5cGVzKCk7XHJcbiAgICAgICAgdGhpcy5jdXN0b21lcklEID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2N1c3RvbWVySUQnXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhcm1ha2VzIGZyb20gY29tcG9uZW50IFwiICsgdGhpcy5jYXJNYWtlcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYXIgZnJvbSBjb21wb25lbnQgXCIgKyB0aGlzLmNhcik7XHJcbiAgICAgICAgdGhpcy5jYXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIFwiY2FyTWFrZUlEXCI6IFtudWxsLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgIFwiY2FyTW9kZWxJRFwiOiBbbnVsbCwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICBcImZ1ZWxUeXBlSURcIjogW251bGwsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgXCJ2aW5cIjogW251bGwsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgXCJlbmdpbmVOdW1iZXJcIjogW251bGwsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBbbnVsbCwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICBcImN1c3RvbWVySURcIjogW3RoaXMuY3VzdG9tZXJJRF0sXHJcbiAgICAgICAgICAgIFwibGljZW5zZXBsYXRlXCI6IFtudWxsLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2VsZWN0ZWRDYXJNYWtlKGNhcm1ha2VpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYXJNb2RlbHMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2FyU2VydmljZS5nZXRDYXJNb2RlbEJ5Q2FyTWFrZUlEKGNhcm1ha2VpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgU2VsZWN0ZWRDYXJNb2RlbChjYXJtb2RlbGlkOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXJtb2RlbGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBTZWxlY3RlZEZ1ZWxUeXBlKGZ1ZWx0eXBlaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZ1ZWx0eXBlaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVDYXIoKSB7XHJcbiAgICAgICAgdGhpcy5jYXIgPSB0aGlzLmNhckZvcm0udmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmNhclwiICsgdGhpcy5jYXIuY2FyTW9kZWxJRCArIFwiIFwiICsgdGhpcy5jYXIuY2FyTWFrZUlEICsgXCIgXCIgKyB0aGlzLmNhci5lbmdpbmVOdW1iZXIgKyBcIiBcIiArIHRoaXMuY2FyLmNvbG9yICsgXCIgXCIgKyB0aGlzLmNhci52aW4gKyBcIiBcIiArIHRoaXMuY2FyLmN1c3RvbWVySUQpO1xyXG4gICAgICAgIGFsZXJ0KHRoaXMuY2FyKTtcclxuICAgICAgICB0aGlzLmNhclNlcnZpY2UuaW5zZXJ0KHRoaXMuY2FyKTtcclxuICAgIH1cclxuXHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhci9jYXJOZXdJdGVtLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxoMz7Dmmo8L2gzPlxcclxcbjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJjYXJGb3JtXFxcIiBub3ZhbGlkYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaGFzLWVycm9yJzohY3VzdG9tZXJGb3JtLmNvbnRyb2xzWydsYXN0TmFtZSddLnZhbGlkfVxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcXFwiPlZlemV0w6lrbsOpdio8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgaW5wdXRHcm91cENvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcXFwiPjwvaT48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJMYXN0TmFtZVxcXCIgaWQ9XFxcIkxhc3ROYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiVmV6ZXTDqWtuw6l2XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImxhc3ROYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tNCBjb2wtbGctNFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNhck1ha2VJRFxcXCI+SsOhcm3FsSBtw6Fya2E8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0ICNjYXJtYWtlc2VsZWN0ZWQgZm9ybUNvbnRyb2xOYW1lPVxcXCJjYXJNYWtlSURcXFwiIChjaGFuZ2UpPVxcXCJTZWxlY3RlZENhck1ha2UoY2FybWFrZXNlbGVjdGVkLnZhbHVlKVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGNhck1ha2Ugb2YgY2FyTWFrZXNcXFwiIFt2YWx1ZV09XFxcImNhck1ha2UuY2FyTWFrZUlEXFxcIj57e2Nhck1ha2UuY2FyTWFrZU5hbWV9fSB7e2Nhck1ha2UuY2FyTWFrZUlEfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tNCBjb2wtbGctNFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNhck1vZGVsSURcXFwiPkrDoXJtxbEgdMOtcHVzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCAjY2FybW9kZWxzZWxlY3RlZCBmb3JtQ29udHJvbE5hbWU9XFxcImNhck1vZGVsSURcXFwiIChjaGFuZ2UpPVxcXCJTZWxlY3RlZENhck1vZGVsKGNhcm1vZGVsc2VsZWN0ZWQudmFsdWUpXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgY2FyTW9kZWwgb2YgY2FyTW9kZWxzXFxcIiBbdmFsdWVdPVxcXCJjYXJNb2RlbC5jYXJNb2RlbElEXFxcIj57e2Nhck1vZGVsLmNhck1vZGVsTmFtZX19IHt7Y2FyTW9kZWwuY2FyTW9kZWxJRH19PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTQgY29sLWxnLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJmdWVsVHlwZUlEXFxcIj7DnHplbWFueWFnIHTDrXB1czwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgI2Z1ZWx0eXBlc2VsZWN0ZWQgZm9ybUNvbnRyb2xOYW1lPVxcXCJmdWVsVHlwZUlEXFxcIiAoY2hhbmdlKT1cXFwiU2VsZWN0ZWRGdWVsVHlwZShmdWVsdHlwZXNlbGVjdGVkLnZhbHVlKVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGZ1ZWxUeXBlIG9mIGZ1ZWxUeXBlc1xcXCIgW3ZhbHVlXT1cXFwiZnVlbFR5cGUuZnVlbFR5cGVJRFxcXCI+e3tmdWVsVHlwZS5mdWVsVHlwZU5hbWV9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTQgY29sLWxnLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ2aW5cXFwiPkFsdsOhenN6w6FtPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ2aW5cXFwiIGZvcm1Db250cm9sTmFtZT1cXFwidmluXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTQgY29sLWxnLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbmdpbmVOdW1iZXJcXFwiPk1vdG9yc3rDoW08L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImVuZ2luZU51bWJlclxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJlbmdpbmVOdW1iZXJcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tNCBjb2wtbGctNFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNvbG9yXFxcIj5TesOtbjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiY29sb3JcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiY29sb3JcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTQgY29sLWxnLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJsaWNlbnNlcGxhdGVcXFwiPmxpY2Vuc2VwbGF0ZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibGljZW5zZXBsYXRlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImxpY2Vuc2VwbGF0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInNhdmVDYXIoKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XFxcIiFjYXJGb3JtLnZhbGlkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLS0tPlxcclxcbiAgICAgICAgICAgICAgICBTYXZlXFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggZ2x5cGhpY29uLXNwaW5cXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKGNsaWNrKT1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcIm9uRGVsZXRlKClcXFwiPkRlbGV0ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAoY2xpY2spPVxcXCJiYWNrKClcXFwiPkJhY2s8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8IS0tPGRpdiAqbmdJZj1cXFwiIWNhckZvcm0udmFsaWRcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPkNvcnJlY3QgYWxsIGludmFsaWQgdmFsdWVzIHRvIGVuYWJsZSBzYXZlLjwvZGl2Pi0tPlxcclxcblxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhci9jYXJOZXdJdGVtLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ3VzdG9tZXJTZXJ2aWNlIH0gZnJvbSAnLi9jdXN0b21lclNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IElDdXN0b21lciA9IEFwcC5Nb2RlbHMuSUN1c3RvbWVyO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2N1c3RvbWVyTGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jdXN0b21lckxpc3QuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBjdXN0b21lcnM6IElDdXN0b21lcltdO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGN1c3RvbWVyU2VydmljZTogQ3VzdG9tZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmN1c3RvbWVycy5zdWJzY3JpYmUodGhpcy5wcm9jZXNzRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc0RhdGEgPSAoZGF0YTogSUN1c3RvbWVyW10pID0+IHtcclxuICAgICAgICB0aGlzLmN1c3RvbWVycyA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0QWxsQ3VzdG9tZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0Q3VzdG9tZXIoY3VzdG9tZXI6IElDdXN0b21lcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGlzdGLFkWwgXCIgKyBjdXN0b21lcik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2VkaXRjdXN0b21lci9cIiArIGN1c3RvbWVyXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlld0N1c3RvbWVyKGN1c3RvbWVyOiBJQ3VzdG9tZXIpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdmlld2N1c3RvbWVyL1wiICsgY3VzdG9tZXJdKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lckxpc3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xyXG4vL2ltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vY29uZmlndXJhdGlvblwiOyBleiBsZWhldCwgaG9neSBuZW0ga2VsbFxyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RPcHRpb25zQXJncywgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcblxyXG5cclxuaW1wb3J0IEN1c3RvbWVyID0gQXBwLk1vZGVscy5JQ3VzdG9tZXI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21lclNlcnZpY2Uge1xyXG4gICAgLyogRk9STUhPWiAqL1xyXG4gICAgc2FqdDogT2JzZXJ2YWJsZTxDdXN0b21lcj47XHJcbiAgICBjdXN0b21lcjogU3ViamVjdDxDdXN0b21lcj47XHJcbiAgICBjdXN0b21lcnM6IFN1YmplY3Q8Q3VzdG9tZXJbXT47XHJcbiAgICAvKiBGT1JNSE9aIFbDiUdFKi9cclxuXHJcbiAgICBwcml2YXRlIGRlZmF1bHRBcmdzOiBSZXF1ZXN0T3B0aW9uc0FyZ3M7XHJcbiAgICAvL3ByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiwgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLnNhanQgPSBuZXcgT2JzZXJ2YWJsZTxDdXN0b21lcj4oKTtcclxuICAgICAgICB0aGlzLmN1c3RvbWVyID0gbmV3IFN1YmplY3Q8Q3VzdG9tZXI+KCk7XHJcbiAgICAgICAgdGhpcy5jdXN0b21lcnMgPSBuZXcgU3ViamVjdDxDdXN0b21lcltdPigpO1xyXG5cclxuICAgICAgICBsZXQgZGVmYXVsdEhlYWRlcnM6IEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGRlZmF1bHRIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIilcclxuICAgICAgICB0aGlzLmRlZmF1bHRBcmdzID0geyBoZWFkZXJzOiBkZWZhdWx0SGVhZGVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gXCJcIjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoZXJyb3IudGV4dCgpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0W3Byb3BlcnR5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdFtwcm9wZXJ0eV0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgKyByZXN1bHRbcHJvcGVydHldW2ldICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbWVzc2FnZSA9IChlcnJvci50ZXh0KCkgfHwgZXJyb3Iuc3RhdHVzVGV4dCB8fCBlcnJvci5zdGF0dXMudG9TdHJpbmcoMTApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWVzc2FnZSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlID0gKGVycm9yLnRleHQoKSB8fCBlcnJvci5zdGF0dXNUZXh0IHx8IGVycm9yLnN0YXR1cy50b1N0cmluZygxMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxDdXN0b21lcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KFwiL2FwaS9DdXN0b21lci9HZXRBbGxDdXN0b21lclwiKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXN1bHQ6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVycy5uZXh0KHJlc3VsdC5qc29uKCkpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXN0b21lckJ5SWQoY3VzdG9tZXJJRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldChcIi9hcGkvQ3VzdG9tZXIvR2V0Q3VzdG9tZXJCeUlEP2N1c3RvbWVySUQ9XCIgKyBjdXN0b21lcklEKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQ6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyLm5leHQocmVzdWx0Lmpzb24oKSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gYm9keS5kYXRhIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydChjdXN0b21lcjogQ3VzdG9tZXIpOiBTdWJqZWN0PEN1c3RvbWVyPiB7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCIvYXBpL0N1c3RvbWVyL1wiLCBKU09OLnN0cmluZ2lmeShjdXN0b21lciksIHRoaXMuZGVmYXVsdEFyZ3MpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdDogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXIubmV4dChyZXN1bHQuanNvbigpKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGN1c3RvbWVyOiBDdXN0b21lcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIGN1c3RvbWVyIFwiICsgY3VzdG9tZXIpO1xyXG4gICAgICAgIHRoaXMuaHR0cC5wdXQoXCIvYXBpL0N1c3RvbWVyL1wiLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjdXN0b21lciksXHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdEFyZ3MpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdDogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXIubmV4dChjdXN0b21lcik7XHJcbiAgICAgICAgICAgIH0sIHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lclNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL09ic2VydmFibGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIlxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT7DnGd5ZmVsZWs8L2gxPlxcclxcblxcclxcbjxwICpuZ0lmPVxcXCIhY3VzdG9tZXJzXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcclxcbjx0YWJsZSBjbGFzcz0ndGFibGUnICpuZ0lmPVxcXCJjdXN0b21lcnNcXFwiPlxcclxcbiAgICA8dGhlYWQ+XFxyXFxuICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgPHRoPlZlemV0w6lrbsOpdjwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPktlcmVzenRuw6l2PC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+VGVsZWZvbnN6w6FtPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+U3plcmsuPC90aD5cXHJcXG4gICAgICAgICAgICA8IS0tPHRoPlNlcnZpY2VJbmNpZGVuY2VzPC90aD4tLT5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBjdXN0b21lciBvZiBjdXN0b21lcnNcXFwiIChjbGljayk9XFxcInZpZXdDdXN0b21lcihjdXN0b21lci5jdXN0b21lcklEKVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGN1c3RvbWVyLmxhc3ROYW1lIH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3sgY3VzdG9tZXIuZmlyc3ROYW1lfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBjdXN0b21lci5waG9uZU51bWJlciB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiIChjbGljayk9XFxcImVkaXRDdXN0b21lcihjdXN0b21lci5jdXN0b21lcklEKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwhLS08dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx1bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBzaSBvZiBjYXIuc2VydmljZUluY2lkZW5jZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNpLnNlcnZpY2VJbmNpZGVuY2VOYW1lLmluY2lkZW5jZU5hbWUgfX0ge3sgc2kucmVwYWlyRGF0ZSB8IGRhdGU6J3l5eXkuIE1NLiBkZC4nfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBjYXJwYXJ0IG9mIHNpLnNlcnZpY2VJbmNpZGVuY2VDYXJQYXJ0XFxcIj57e2NhcnBhcnQuY2FyUGFydC5jYXJQYXJ0TmFtZX19IHt7Y2FycGFydC5jYXJQYXJ0LnByaWNlfX08L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgIDwvdGQ+LS0+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3Rib2R5PlxcclxcbjwvdGFibGU+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lckxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDdXN0b21lclNlcnZpY2UgfSBmcm9tICcuL2N1c3RvbWVyU2VydmljZSc7XHJcblxyXG5pbXBvcnQgSUN1c3RvbWVyID0gQXBwLk1vZGVscy5JQ3VzdG9tZXI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY3VzdG9tZXJMaXN0SXRlbScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jdXN0b21lckxpc3RJdGVtLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyTGlzdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGN1c3RvbWVyOiBJQ3VzdG9tZXI7XHJcbiAgICBwdWJsaWMgY3VzdG9tZXJJRDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGN1c3RvbWVyU2VydmljZTogQ3VzdG9tZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmN1c3RvbWVyLnN1YnNjcmliZSh0aGlzLnByb2Nlc3NEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzRGF0YSA9IChkYXRhOiBJQ3VzdG9tZXIpID0+IHtcclxuICAgICAgICB0aGlzLmN1c3RvbWVyID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmN1c3RvbWVySUQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snY3VzdG9tZXJJRCddO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyQnlJZCh0aGlzLmN1c3RvbWVySUQpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRDdXN0b21lcihjdXN0b21lcjogSUN1c3RvbWVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMaXN0YsWRbCBcIiArIGN1c3RvbWVyKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZWRpdGN1c3RvbWVyL1wiICsgY3VzdG9tZXJdKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDYXIoY3VzdG9tZXI6IElDdXN0b21lcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGN1c3RvbWVyKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmV3Y2FyL1wiICsgY3VzdG9tZXJdKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lckxpc3RJdGVtLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8cCAqbmdJZj1cXFwiIWN1c3RvbWVyXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcclxcbjxkaXYgY2xhc3M9XFxcInBhbmVsLWdyb3VwXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBocmVmPVxcXCIjY3VzdG9tZXJcXFwiPsOcZ3lmw6lsIGFkYXRhaTwvYT5cXHJcXG4gICAgICAgICAgICA8L2g0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJjdXN0b21lclxcXCIgY2xhc3M9XFxcInBhbmVsLWNvbGxhcHNlIGNvbGxhcHNlIGluXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPSd0YWJsZScgKm5nSWY9XFxcImN1c3RvbWVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5WZXpldMOpa27DqXY8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+S2VyZXN6dG7DqXY8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGVsZWZvbnN6w6FtPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN6ZXJrLjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGg+U2VydmljZUluY2lkZW5jZXM8L3RoPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBjdXN0b21lciBvZiBjdXN0b21lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBjdXN0b21lci5sYXN0TmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBjdXN0b21lci5maXJzdE5hbWV9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBjdXN0b21lci5waG9uZU51bWJlciB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCIgKGNsaWNrKT1cXFwiZWRpdEN1c3RvbWVyKGN1c3RvbWVyLmN1c3RvbWVySUQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5QYW5lbCBGb290ZXI8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2ICpuZ0Zvcj1cXFwibGV0IGN1c3RvbWVyIG9mIGN1c3RvbWVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGhyZWY9XFxcIiNjYXJzXFxcIj7DnGd5ZsOpbCBqw6FybcWxdmVpPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCIgKGNsaWNrKT1cXFwiYWRkQ2FyKGN1c3RvbWVyLmN1c3RvbWVySUQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+e3tjdXN0b21lci5jdXN0b21lcklEfX1cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiY2Fyc1xcXCIgY2xhc3M9XFxcInBhbmVsLWNvbGxhcHNlIGNvbGxhcHNlIGluXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGNhciBvZiBjdXN0b21lci5jYXJzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgaHJlZj1cXFwiI2Nhcnt7Y2FyLmNhcklEfX1cXFwiPnt7Y2FyLmNhck1vZGVsLmNhck1ha2UuY2FyTWFrZU5hbWV9fSB7e2Nhci5jYXJNb2RlbC5jYXJNb2RlbE5hbWV9fTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJjYXJ7e2Nhci5jYXJJRH19XFxcIiBjbGFzcz1cXFwicGFuZWwtY29sbGFwc2UgY29sbGFwc2VcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2Nhci5jYXJNb2RlbC5jYXJNYWtlLmNhck1ha2VOYW1lfX0ge3tjYXIuY2FyTW9kZWwuY2FyTW9kZWxOYW1lfX1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5QYW5lbCBGb290ZXI8L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5QYW5lbCBGb290ZXI8L2Rpdj4tLT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2N1c3RvbWVyL2N1c3RvbWVyTGlzdEl0ZW0uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhcmFtcywgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IEN1c3RvbWVyU2VydmljZSB9IGZyb20gXCIuL2N1c3RvbWVyU2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgSUN1c3RvbWVyID0gQXBwLk1vZGVscy5JQ3VzdG9tZXI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY3VzdG9tZXItbmV3JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2N1c3RvbWVyTmV3SXRlbS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21lck5ld0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY3VzdG9tZXI6IElDdXN0b21lciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1c3RvbWVySUQ6IG51bWJlcjtcclxuICAgIFxyXG4gICAgY3VzdG9tZXJGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBJQ3VzdG9tZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGN1c3RvbWVyU2VydmljZTogQ3VzdG9tZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyXHJcbiAgICApIHt9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzRGF0YSA9IChkYXRhOiBJQ3VzdG9tZXIpID0+IHtcclxuICAgICAgICB0aGlzLmN1c3RvbWVyID0gZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByb2Nlc3NEYXRhXCIpO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJGb3JtLnBhdGNoVmFsdWUodGhpcy5jdXN0b21lclswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21lcklEID0gMDtcclxuICAgICAgICAvL0dFVCBDdXN0b21lcklEXHJcbiAgICAgICAgdGhpcy5jdXN0b21lcklEID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2N1c3RvbWVySUQnXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tZXJJRCA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXN0b21lcklEID4gMFwiKTtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXJCeUlkKHRoaXMuY3VzdG9tZXJJRCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmN1c3RvbWVyU2VydmljZS5jdXN0b21lci5zdWJzY3JpYmUodGhpcy5wcm9jZXNzRGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIFwiY3VzdG9tZXJJRFwiOiBbMF0sXHJcbiAgICAgICAgICAgIFwibGFzdE5hbWVcIjogW251bGwsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgXCJmaXJzdE5hbWVcIjogW251bGwsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgXCJiaXJ0aHBsYWNlXCI6IFtcIlwiXSxcclxuICAgICAgICAgICAgXCJiaXJ0aGRheVwiOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFwiaWROdW1iZXJcIjogW1wiXCJdLFxyXG4gICAgICAgICAgICBcInBob25lTnVtYmVyXCI6IFtudWxsLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgIFwibmFtZU9mTW90aGVyXCI6IFtcIlwiXSxcclxuICAgICAgICAgICAgXCJyZWdpc3RlckRhdGVcIjogW25ldyBEYXRlKCldLFxyXG4gICAgICAgICAgICBcImxhc3RNb2RpZmllZFwiOiBbbmV3IERhdGUoKV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQ3VzdG9tZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21lciA9IHRoaXMuY3VzdG9tZXJGb3JtLnZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbWVyLmN1c3RvbWVySUQgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnNlcnRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmluc2VydCh0aGlzLmN1c3RvbWVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jdXN0b21lclNlcnZpY2UuY3VzdG9tZXIuc3Vic2NyaWJlKHRoaXMucHJvY2Vzc0RhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1YnNcIisgdGhpcy5zdWJzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9uZXdjYXIvXCIgKyBzYWp0Ll0pO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHNhanQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS51cGRhdGUodGhpcy5jdXN0b21lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdGhpcy5jdXN0b21lckZvcm0ucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGlydHk/IFwiICsgdGhpcy5jdXN0b21lckZvcm0uZGlydHkpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbWVyRm9ybS5kaXJ0eSkge1xyXG4gICAgICAgICAgICBhbGVydChcIlZpc3N6YWzDqXDDqXMgZWzFkXR0IG1lbnRzZW4hXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImN1c3RvbWVyc1wiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lck5ld0l0ZW0uY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxoMz7Dmmogw7xneWbDqWw8L2gzPlxcclxcbjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJjdXN0b21lckZvcm1cXFwiIGNsYXNzPVxcXCJ3ZWxsIGZvcm0taG9yaXpvbnRhbFxcXCIgbm92YWxpZGF0ZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hhcy1lcnJvcic6IWN1c3RvbWVyRm9ybS5jb250cm9sc1snbGFzdE5hbWUnXS52YWxpZH1cXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj5WZXpldMOpa27DqXYqPC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00IGlucHV0R3JvdXBDb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwiTGFzdE5hbWVcXFwiIGlkPVxcXCJMYXN0TmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlZlemV0w6lrbsOpdlxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJsYXN0TmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydoYXMtZXJyb3InOiFjdXN0b21lckZvcm0uY29udHJvbHNbJ2ZpcnN0TmFtZSddLnZhbGlkfVxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcXFwiPktlcmVzenRuw6l2KjwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBpbnB1dEdyb3VwQ29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdXNlclxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XFxcIkZpcnN0bmFtZVxcXCIgaWQ9XFxcIkZpcnN0bmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIktlcmVzenRuw6l2XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImZpcnN0TmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydoYXMtZXJyb3InOiFjdXN0b21lckZvcm0uY29udHJvbHNbJ3Bob25lTnVtYmVyJ10udmFsaWR9XFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTQgY29udHJvbC1sYWJlbFxcXCI+VGVsZWZvbnN6w6FtKjwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBpbnB1dEdyb3VwQ29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmVcXFwiPjwvaT48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJQaG9uZU51bWJlclxcXCIgaWQ9XFxcIkZpcnN0bmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlRlbGVmb25zesOhbVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJwaG9uZU51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj5MYWtjw61tPC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00IGlucHV0R3JvdXBDb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwiQWRkcmVzc1xcXCIgaWQ9XFxcIkFkZHJlc3NcXFwiIHBsYWNlaG9sZGVyPVxcXCJMYWtjw61tXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImFkZHJlc3NcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTQgY29udHJvbC1sYWJlbFxcXCI+U3plbcOpbHlpIGlnYXpvbHbDoW55c3rDoW08L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgaW5wdXRHcm91cENvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcXFwiPjwvaT48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJJRE51bWJlclxcXCIgaWQ9XFxcIklETnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiU3plbcOpbHlpIGlnYXpvbHbDoW55c3rDoW1cXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaWROdW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTQgY29udHJvbC1sYWJlbFxcXCI+U3rDvGxldMOpc2kgaGVseTwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBpbnB1dEdyb3VwQ29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdXNlclxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XFxcIkJpcnRocGxhY2VcXFwiIGlkPVxcXCJCaXJ0aHBsYWNlXFxcIiBwbGFjZWhvbGRlcj1cXFwiU3rDvGxldMOpc2kgaGVseVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJiaXJ0aHBsYWNlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcXFwiPlN6w7xsZXTDqXNpIGlkxZE8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgaW5wdXRHcm91cENvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcXFwiPjwvaT48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJCaXJ0aGRheVxcXCIgaWQ9XFxcIkJpcnRoZGF5XFxcIiBwbGFjZWhvbGRlcj1cXFwiU3rDvGxldMOpc2kgaWTFkVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJiaXJ0aGRheVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj5BbnlqYSBuZXZlPC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00IGlucHV0R3JvdXBDb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwiTmFtZU9mTW90aGVyXFxcIiBpZD1cXFwiTmFtZU9mTW90aGVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiQW55amEgbmV2ZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJuYW1lT2ZNb3RoZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8IS0tPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTQgY29sLWxnLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaGFzLWVycm9yJzohY3VzdG9tZXJGb3JtLmNvbnRyb2xzWydTdXJuYW1lJ10udmFsaWR9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIlN1cm5hbWVcXFwiPlZlemV0w6lrbsOpdio8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJTdXJuYW1lXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlN1cm5hbWVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+LS0+XFxyXFxuXFxyXFxuICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS00IGNvbC1sZy00XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaGFzLWVycm9yJzohY3VzdG9tZXJGb3JtLmNvbnRyb2xzWydGaXJzdG5hbWUnXS52YWxpZH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIkZpcnN0bmFtZVxcXCI+S2VyZXN6dG7DqXYqPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiRmlyc3RuYW1lXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkZpcnN0bmFtZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj4tLT5cXHJcXG5cXHJcXG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTQgY29sLWxnLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIkJpcnRocGxhY2VcXFwiPlN6w7xsZXTDqXNpIGhlbHk8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJCaXJ0aHBsYWNlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkJpcnRocGxhY2VcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2Pi0tPlxcclxcblxcclxcbiAgICA8IS0tPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tNCBjb2wtbGctNFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hhcy1lcnJvcic6IWN1c3RvbWVyRm9ybS5jb250cm9sc1snUGhvbmVOdW1iZXInXS52YWxpZH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJQaG9uZU51bWJlclxcXCI+VGVsZWZvbnN6w6FtKjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiUGhvbmVOdW1iZXJcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiUGhvbmVOdW1iZXJcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tNCBjb2wtbGctNFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIkFkZHJlc3NcXFwiPkxha2PDrW08L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcIkFkZHJlc3NcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiQWRkcmVzc1xcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS00IGNvbC1sZy00XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiQmlydGhkYXlcXFwiPlN6w7xsZXTDqXNuYXA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcIkJpcnRoZGF5XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkJpcnRoZGF5XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2Pi0tPlxcclxcblxcclxcbiAgICA8IS0tPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcIk5hbWVPZk1vdGhlclxcXCI+QW55amEgbmV2ZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIk5hbWVPZk1vdGhlclxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJOYW1lT2ZNb3RoZXJcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiSUROdW1iZXJcXFwiPlN6aWdzesOhbTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIklETnVtYmVyXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIklETnVtYmVyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDwhLS08ZGl2ICpuZ0lmPVxcXCJjYXJGb3JtLmNvbnRyb2xzLmNhck1ha2VJRC5oYXNFcnJvcigncmVxdWlyZWQnKVxcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+TmFtZSBpcyByZXF1aXJlZCE8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcImNhckZvcm0uY29udHJvbHMuY2FyTWFrZUlELmhhc0Vycm9yKCdtYXhsZW5ndGgnKVxcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+TmFtZSBpcyB0b28gbG9uZyE8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcImNhckZvcm0uY29udHJvbHMuY2FyTWFrZUlELmhhc0Vycm9yKCdkdXBlJylcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPk5hbWUgaXMgYSBkdXBsaWNhdGUhPC9kaXY+XFxyXFxuICAgIDwvZGl2Pi0tPlxcclxcblxcclxcblxcclxcbiAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwic2F2ZUN1c3RvbWVyKClcXFwiXFxyXFxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cXFwiIWN1c3RvbWVyRm9ybS52YWxpZFxcXCI+XFxyXFxuICAgICAgICA8IS0tLS0+XFxyXFxuICAgICAgICBTYXZlXFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIGdseXBoaWNvbi1zcGluXFxcIj48L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKGNsaWNrKT1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJvbkRlbGV0ZSgpXFxcIj5EZWxldGU8L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcImJhY2soKVxcXCI+QmFjazwvYnV0dG9uPlxcclxcblxcclxcbiAgICA8IS0tPGRpdiAqbmdJZj1cXFwiIWNhckZvcm0udmFsaWRcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPkNvcnJlY3QgYWxsIGludmFsaWQgdmFsdWVzIHRvIGVuYWJsZSBzYXZlLjwvZGl2Pi0tPlxcclxcblxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2N1c3RvbWVyL2N1c3RvbWVyTmV3SXRlbS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==