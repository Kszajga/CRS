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
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(7);
	var navmenu_component_1 = __webpack_require__(12);
	var home_component_1 = __webpack_require__(16);
	var fetchdata_component_1 = __webpack_require__(18);
	var counter_component_1 = __webpack_require__(21);
	var carList_component_1 = __webpack_require__(23);
	var carListItem_component_1 = __webpack_require__(27);
	var carNewItem_component_1 = __webpack_require__(29);
	var carService_1 = __webpack_require__(24);
	var forms_1 = __webpack_require__(30);
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
	                { path: 'newcar', component: carNewItem_component_1.CarNewItemComponent },
	                { path: '**', redirectTo: 'home' }
	            ])
	        ],
	        providers: [carService_1.CarService]
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
	        styles: [__webpack_require__(14)]
	    })
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Angular2Application2</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/counter']\">\r\n                        <span class='glyphicon glyphicon-education'></span> Counter\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/fetch-data']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/car/2']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Car\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(15);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);
	
	// exports


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
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(17)
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\r\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\r\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\r\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\r\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\r\n</ul>\r\n"

/***/ },
/* 18 */
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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(19);
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
	        template: __webpack_require__(20)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], FetchDataComponent);
	exports.FetchDataComponent = FetchDataComponent;


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table' *ngIf=\"forecasts\">\r\n    <thead>\r\n        <tr>\r\n            <th>Date</th>\r\n            <th>Temp. (C)</th>\r\n            <th>Temp. (F)</th>\r\n            <th>Summary</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let forecast of forecasts\">\r\n            <td>{{ forecast.dateFormatted }}</td>\r\n            <td>{{ forecast.temperatureC }}</td>\r\n            <td>{{ forecast.temperatureF }}</td>\r\n            <td>{{ forecast.summary }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

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
	        template: __webpack_require__(22)
	    })
	], CounterComponent);
	exports.CounterComponent = CounterComponent;


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<h2>Counter</h2>\r\n\r\n<p>This is a simple example of an Angular 2 component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)=\"incrementCounter()\">Increment</button>\r\n"

/***/ },
/* 23 */
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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var carService_1 = __webpack_require__(24);
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
	        template: __webpack_require__(26)
	    }),
	    __metadata("design:paramtypes", [carService_1.CarService,
	        router_1.ActivatedRoute])
	], CarListComponent);
	exports.CarListComponent = CarListComponent;


/***/ },
/* 24 */
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
	var core_1 = __webpack_require__(3);
	var Subject_1 = __webpack_require__(25);
	//import { Configuration } from "../configuration"; ez lehet, hogy nem kell
	var http_1 = __webpack_require__(19);
	var CarService = (function () {
	    //private configuration: Configuration, 
	    function CarService(http) {
	        this.http = http;
	        this.cars = new Subject_1.Subject();
	        this.car = new Subject_1.Subject();
	        this.carMakes = new Subject_1.Subject();
	        this.carModels = new Subject_1.Subject();
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
	        console.log("serviceből: " + car);
	        this.http.post("/api/Car", JSON.stringify(car), this.defaultArgs)
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
	    return CarService;
	}());
	CarService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], CarService);
	exports.CarService = CarService;


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Subject");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<h1>Cars</h1>\r\n<p>This component demonstrates fetching data from the server.</p>\r\n<p *ngIf=\"!cars\"><em>Loading...</em></p>\r\n<table class='table' *ngIf=\"cars\">\r\n    {{ customerID }}\r\n    <thead>\r\n        <tr>\r\n            <th>VIN</th>\r\n            <th>CarMake</th>\r\n            <th>CarModel</th>\r\n            <th>ServiceIncidences</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let car of cars\">\r\n            <td>{{ car.vin }}</td>\r\n            <td>{{ car.carMake.carMakeName }}</td>\r\n            <td>{{ car.carModel.carModelName }}</td>\r\n            <td>\r\n                <ul>\r\n                    <li *ngFor=\"let si of car.serviceIncidences\">{{ si.serviceIncidenceName.incidenceName }} {{ si.repairDate | date:'yyyy. MM. dd.'}}</li>\r\n                </ul>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var carService_1 = __webpack_require__(24);
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
	        template: __webpack_require__(28)
	    }),
	    __metadata("design:paramtypes", [carService_1.CarService,
	        router_1.ActivatedRoute])
	], CarListItemComponent);
	exports.CarListItemComponent = CarListItemComponent;


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<h1>Cars</h1>\r\n<p>This component demonstrates fetching data from the server.</p>\r\n<p *ngIf=\"!car\"><em>Loading...</em></p>\r\n<table class='table' *ngIf=\"car\">\r\n    <thead>\r\n        <tr>\r\n            <th>VIN</th>\r\n            <th>CarMake</th>\r\n            <th>CarModel</th>\r\n            <th>ServiceIncidences</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let ca of car\">\r\n            <td>{{ ca.vin }}</td>\r\n            <td>{{ ca.carModel.carMake.carMakeName }}</td>\r\n            <td>{{ ca.carModel.carModelName }}</td>\r\n            <td>\r\n                <ul>\r\n                    <li *ngFor=\"let si of ca.serviceIncidences\">{{ si.serviceIncidenceName.incidenceName }} {{ si.repairDate | date:'yyyy. MM. dd.'}}</li>\r\n                </ul>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ },
/* 29 */
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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var carService_1 = __webpack_require__(24);
	var forms_1 = __webpack_require__(30);
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
	        this.carService.carMakes.subscribe(this.processData);
	        this.carService.carModels.subscribe(this.carmodelData);
	    }
	    CarNewItemComponent.prototype.ngOnInit = function () {
	        this.carService.getAllCarMakes();
	        console.log("carmakes from component " + this.carMakes);
	        console.log("car from component " + this.car);
	        this.carForm = this.formBuilder.group({
	            "carMakeID": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "carModelID": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "FuelTypeID": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "VIN": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "engineNumber": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "color": [null, forms_1.Validators.compose([forms_1.Validators.required])],
	            "customerID": [null, forms_1.Validators.compose([forms_1.Validators.required])]
	        });
	    };
	    CarNewItemComponent.prototype.SelectedCarMake = function (carmakeid) {
	        this.carModels = null;
	        this.carService.getCarModelByCarMakeID(carmakeid);
	    };
	    CarNewItemComponent.prototype.SelectedCarModel = function (carmodelid) {
	        console.log(carmodelid);
	    };
	    CarNewItemComponent.prototype.saveCar = function () {
	        this.car = this.carForm.value;
	        console.log(this.car);
	        this.carService.insert(this.car);
	    };
	    return CarNewItemComponent;
	}());
	CarNewItemComponent = __decorate([
	    core_1.Component({
	        selector: 'carNewItem',
	        template: __webpack_require__(31)
	    }),
	    __metadata("design:paramtypes", [router_1.Router,
	        carService_1.CarService,
	        router_1.ActivatedRoute,
	        forms_1.FormBuilder])
	], CarNewItemComponent);
	exports.CarNewItemComponent = CarNewItemComponent;


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\r\n<h3>Új</h3>\r\n<form [formGroup]=\"carForm\" novalidate>\r\n    <div class=\"form-group\">\r\n        <div class=\"form-inline\">\r\n            <div class=\"form-group col-xs-12 col-sm-6 col-lg-6\">\r\n                <label for=\"carMakeID\" class=\"col-xs-4\">Jármű márka</label>\r\n                <div class=\"col-xs-8\">\r\n                    <select #carmakeselected formControlName=\"carMakeID\" (change)=\"SelectedCarMake(carmakeselected.value)\" class=\"form-control\">\r\n                        <option *ngFor=\"let carMake of carMakes\" [value]=\"carMake.carMakeID\">{{carMake.carMakeName}} {{carMake.carMakeID}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xs-12 col-sm-6 col-lg-6\">\r\n                <!--<input class=\"form-control\" id=\"name\" formControlName=\"carMakeID\" [style.border-color]=\"'red'\">-->\r\n                <label for=\"carModelID\" class=\"col-xs-4\">Jármű típus</label>\r\n                <div class=\"col-xs-8\">\r\n                    <select #carmodelselected formControlName=\"carModelID\" (change)=\"SelectedCarModel(carmodelselected.value)\" class=\"form-control\">\r\n                        <option *ngFor=\"let carModel of carModels\" [value]=\"carModel.carModelID\">{{carModel.carModelName}} {{carModel.carModelID}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"FuelTypeID\">Üzemanyag típus</label>\r\n        <input class=\"form-control\" id=\"name\" formControlName=\"FuelTypeID\" [style.border-color]=\"'red'\">\r\n        <label for=\"VIN\">Alvázszám</label>\r\n        <input class=\"form-control\" id=\"name\" formControlName=\"VIN\" [style.border-color]=\"'red'\">\r\n        <label for=\"color\">Szín</label>\r\n        <input class=\"form-control\" id=\"name\" formControlName=\"color\" [style.border-color]=\"'red'\">\r\n        <label for=\"customerID\">CustomerID</label>\r\n        <input class=\"form-control\" id=\"name\" formControlName=\"customerID\" [style.border-color]=\"'red'\">\r\n        <label for=\"engineNumber\">Motorszám</label>\r\n        <input class=\"form-control\" id=\"name\" formControlName=\"engineNumber\" [style.border-color]=\"'red'\">\r\n\r\n        <div *ngIf=\"carForm.controls.carMakeID.hasError('required')\" class=\"alert alert-danger\">Name is required!</div>\r\n        <div *ngIf=\"carForm.controls.carMakeID.hasError('maxlength')\" class=\"alert alert-danger\">Name is too long!</div>\r\n        <div *ngIf=\"carForm.controls.carMakeID.hasError('dupe')\" class=\"alert alert-danger\">Name is a duplicate!</div>\r\n    </div>\r\n\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveCar()\"\r\n            [disabled]=\"!carForm.valid\">\r\n        <!---->\r\n        Save\r\n        <span class=\"glyphicon glyphicon-refresh glyphicon-spin\"></span>\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancel()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDelete()\">Delete</button>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"back()\">Back</button>\r\n\r\n    <!--<div *ngIf=\"!carForm.valid\" class=\"alert alert-danger\">Correct all invalid values to enable save.</div>-->\r\n\r\n</form>"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzNlMjUxMDg0ZTFjOWNkYjNhNDQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyL2Nhckxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXIvY2FyU2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyL2Nhckxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhci9jYXJMaXN0SXRlbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhci9jYXJMaXN0SXRlbS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyL2Nhck5ld0l0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhci9jYXJOZXdJdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSx3QkFBc0M7QUFDdEMsd0JBQWlCO0FBQ2pCLHFDQUErQztBQUMvQyxtREFBeUQ7QUFDekQsMkNBQTZDO0FBRTdDLHNCQUFjLEVBQUUsQ0FBQztBQUNqQixLQUFNLFFBQVEsR0FBRyx3Q0FBbUIsRUFBRSxDQUFDO0FBSXZDLG9CQUF5QixNQUFXO0tBQ2hDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1NBQy9CLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ2xDLElBQUksRUFBRSwyQkFBMkI7YUFDakMsVUFBVSxFQUFFO2lCQUNSLE9BQU8sRUFBRSxHQUFHO2lCQUNaLFVBQVUsRUFBRSxNQUFNLENBQUMsR0FBRztpQkFDdEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNO2lCQUN4QixPQUFPLEVBQUUsS0FBSztpQkFDZCw2RkFBNkY7aUJBQzdGLDZEQUE2RDtpQkFDN0QsUUFBUSxFQUFFLG1FQUFtRTtjQUNoRjthQUNELGFBQWEsRUFBRSxVQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLEtBQUs7aUJBQ3RELDZFQUE2RTtpQkFDN0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lC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LENBQUMsQ0FBQztTQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckMsQ0FBQztLQUdMLDBCQUFDO0FBQUQsRUFBQztBQS9EWSxvQkFBbUI7S0FML0IsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRSxZQUFZO1NBQ3RCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQTZCLENBQUM7TUFDbkQsQ0FBQztzQ0Fjc0IsZUFBTTtTQUNGLHVCQUFVO1NBQ2YsdUJBQWM7U0FDUixtQkFBVztJQWYzQixtQkFBbUIsQ0ErRC9CO0FBL0RZLG1EQUFtQjs7Ozs7OztBQ2ZoQyw0Qzs7Ozs7O0FDQUEsOGxCQUE2bEIscUJBQXFCLEdBQUcsbUJBQW1CLDJxQkFBMnFCLHVCQUF1QixHQUFHLHFCQUFxQiw0aEUiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzM2UyNTEwODRlMWM5Y2RiM2E0NCIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XHJcbmltcG9ydCAnem9uZS5qcyc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuXHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnXHJcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZldGNoRGF0YUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBDYXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nhci9jYXJMaXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhckxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nhci9jYXJMaXN0SXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJOZXdJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXIvY2FyTmV3SXRlbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9jYXIvY2FyU2VydmljZSc7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxyXG4gICAgICAgIENvdW50ZXJDb21wb25lbnQsXHJcbiAgICAgICAgRmV0Y2hEYXRhQ29tcG9uZW50LFxyXG4gICAgICAgIENhckxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgQ2FyTGlzdEl0ZW1Db21wb25lbnQsXHJcbiAgICAgICAgQ2FyTmV3SXRlbUNvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSwgXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnY291bnRlcicsIGNvbXBvbmVudDogQ291bnRlckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdmZXRjaC1kYXRhJywgY29tcG9uZW50OiBGZXRjaERhdGFDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnY2FyJywgY29tcG9uZW50OiBDYXJMaXN0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2Nhci86Y3VzdG9tZXJJRCcsIGNvbXBvbmVudDogQ2FyTGlzdEl0ZW1Db21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnbmV3Y2FyJywgY29tcG9uZW50OiBDYXJOZXdJdGVtQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH0gICAgICAgICAgICBcclxuICAgICAgICBdKVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW0NhclNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcclxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcclxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcclxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxyXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nbWFpbi1uYXYnPlxcclxcbiAgICA8ZGl2IGNsYXNzPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWhlYWRlcic+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPSduYXZiYXItYnJhbmQnIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5Bbmd1bGFyMkFwcGxpY2F0aW9uMjwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY291bnRlciddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1lZHVjYXRpb24nPjwvc3Bhbj4gQ291bnRlclxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9mZXRjaC1kYXRhJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gRmV0Y2ggZGF0YVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9jYXIvMiddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0Jz48L3NwYW4+IENhclxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcclxcbmxpLmxpbmstYWN0aXZlIGEsXFxyXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXHJcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcclxcbi5tYWluLW5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcclxcbiAgICAubWFpbi1uYXYge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXHJcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcclxcbiAgICAgICAgcGFkZGluZzogMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgdWwge1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciBsaSB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgbGkgYSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciBhIHtcXHJcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5IZWxsbywgd29ybGQhPC9oMT5cXHJcXG48cD5XZWxjb21lIHRvIHlvdXIgbmV3IHNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uLCBidWlsdCB3aXRoOjwvcD5cXHJcXG48dWw+XFxyXFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2dldC5hc3AubmV0Lyc+QVNQLk5FVCBDb3JlPC9hPiBhbmQgPGEgaHJlZj0naHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS82N2VmOHNiZC5hc3B4Jz5DIzwvYT4gZm9yIGNyb3NzLXBsYXRmb3JtIHNlcnZlci1zaWRlIGNvZGU8L2xpPlxcclxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9hbmd1bGFyLmlvLyc+QW5ndWxhciAyPC9hPiBhbmQgPGEgaHJlZj0naHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJz5UeXBlU2NyaXB0PC9hPiBmb3IgY2xpZW50LXNpZGUgY29kZTwvbGk+XFxyXFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL3dlYnBhY2suZ2l0aHViLmlvLyc+V2VicGFjazwvYT4gZm9yIGJ1aWxkaW5nIGFuZCBidW5kbGluZyBjbGllbnQtc2lkZSByZXNvdXJjZXM8L2xpPlxcclxcbiAgICA8bGk+PGEgaHJlZj0naHR0cDovL2dldGJvb3RzdHJhcC5jb20vJz5Cb290c3RyYXA8L2E+IGZvciBsYXlvdXQgYW5kIHN0eWxpbmc8L2xpPlxcclxcbjwvdWw+XFxyXFxuPHA+VG8gaGVscCB5b3UgZ2V0IHN0YXJ0ZWQsIHdlJ3ZlIGFsc28gc2V0IHVwOjwvcD5cXHJcXG48dWw+XFxyXFxuICAgIDxsaT48c3Ryb25nPkNsaWVudC1zaWRlIG5hdmlnYXRpb248L3N0cm9uZz4uIEZvciBleGFtcGxlLCBjbGljayA8ZW0+Q291bnRlcjwvZW0+IHRoZW4gPGVtPkJhY2s8L2VtPiB0byByZXR1cm4gaGVyZS48L2xpPlxcclxcbiAgICA8bGk+PHN0cm9uZz5TZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmc8L3N0cm9uZz4uIEZvciBmYXN0ZXIgaW5pdGlhbCBsb2FkaW5nIGFuZCBpbXByb3ZlZCBTRU8sIHlvdXIgQW5ndWxhciAyIGFwcCBpcyBwcmVyZW5kZXJlZCBvbiB0aGUgc2VydmVyLiBUaGUgcmVzdWx0aW5nIEhUTUwgaXMgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnJvd3NlciB3aGVyZSBhIGNsaWVudC1zaWRlIGNvcHkgb2YgdGhlIGFwcCB0YWtlcyBvdmVyLjwvbGk+XFxyXFxuICAgIDxsaT48c3Ryb25nPldlYnBhY2sgZGV2IG1pZGRsZXdhcmU8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHRoZXJlJ3Mgbm8gbmVlZCB0byBydW4gdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wuIFlvdXIgY2xpZW50LXNpZGUgcmVzb3VyY2VzIGFyZSBkeW5hbWljYWxseSBidWlsdCBvbiBkZW1hbmQuIFVwZGF0ZXMgYXJlIGF2YWlsYWJsZSBhcyBzb29uIGFzIHlvdSBtb2RpZnkgYW55IGZpbGUuPC9saT5cXHJcXG4gICAgPGxpPjxzdHJvbmc+SG90IG1vZHVsZSByZXBsYWNlbWVudDwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgeW91IGRvbid0IGV2ZW4gbmVlZCB0byByZWxvYWQgdGhlIHBhZ2UgYWZ0ZXIgbWFraW5nIG1vc3QgY2hhbmdlcy4gV2l0aGluIHNlY29uZHMgb2Ygc2F2aW5nIGNoYW5nZXMgdG8gZmlsZXMsIHlvdXIgQW5ndWxhciAyIGFwcCB3aWxsIGJlIHJlYnVpbHQgYW5kIGEgbmV3IGluc3RhbmNlIGluamVjdGVkIGlzIGludG8gdGhlIHBhZ2UuPC9saT5cXHJcXG4gICAgPGxpPjxzdHJvbmc+RWZmaWNpZW50IHByb2R1Y3Rpb24gYnVpbGRzPC9zdHJvbmc+LiBJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wgcHJvZHVjZXMgbWluaWZpZWQgc3RhdGljIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy48L2xpPlxcclxcbjwvdWw+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmV0Y2hkYXRhJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZXRjaERhdGFDb21wb25lbnQge1xyXG4gICAgcHVibGljIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgICAgIGh0dHAuZ2V0KCcvYXBpL1NhbXBsZURhdGEvV2VhdGhlckZvcmVjYXN0cycpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmVjYXN0cyA9IHJlc3VsdC5qc29uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xyXG4gICAgZGF0ZUZvcm1hdHRlZDogc3RyaW5nO1xyXG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XHJcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcclxuICAgIHN1bW1hcnk6IHN0cmluZztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPldlYXRoZXIgZm9yZWNhc3Q8L2gxPlxcclxcblxcclxcbjxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlci48L3A+XFxyXFxuXFxyXFxuPHAgKm5nSWY9XFxcIiFmb3JlY2FzdHNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxyXFxuXFxyXFxuPHRhYmxlIGNsYXNzPSd0YWJsZScgKm5nSWY9XFxcImZvcmVjYXN0c1xcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGZvcmVjYXN0IG9mIGZvcmVjYXN0c1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUMgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUYgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5zdW1tYXJ5IH19PC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvdW50ZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY291bnRlci5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBjdXJyZW50Q291bnQgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBpbmNyZW1lbnRDb3VudGVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudENvdW50Kys7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPkNvdW50ZXI8L2gyPlxcclxcblxcclxcbjxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhbiBBbmd1bGFyIDIgY29tcG9uZW50LjwvcD5cXHJcXG5cXHJcXG48cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnt7IGN1cnJlbnRDb3VudCB9fTwvc3Ryb25nPjwvcD5cXHJcXG5cXHJcXG48YnV0dG9uIChjbGljayk9XFxcImluY3JlbWVudENvdW50ZXIoKVxcXCI+SW5jcmVtZW50PC9idXR0b24+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gJy4vY2FyU2VydmljZSc7XHJcblxyXG5pbXBvcnQgSUNhciA9IEFwcC5Nb2RlbHMuSUNhcjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYXJMaXN0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Nhckxpc3QuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgY2FyczogSUNhcltdO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjYXJTZXJ2aWNlOiBDYXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNhclNlcnZpY2UuY2Fycy5zdWJzY3JpYmUodGhpcy5wcm9jZXNzRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc0RhdGEgPSAoZGF0YTogSUNhcltdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJzID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNhclNlcnZpY2UuZ2V0QWxsQ2FyKCk7XHJcbiAgICB9ICAgICAgICBcclxufVxyXG5cclxuaW50ZXJmYWNlIENhciB7XHJcbiAgICBjYXJNYWtlOiBzdHJpbmc7XHJcbiAgICBjYXJNb2RlbDogc3RyaW5nO1xyXG4gICAgdmluOiBzdHJpbmc7XHJcbiAgICBlbmdpbmVOdW1iZXI6IHN0cmluZztcclxuICAgIGZ1ZWxUeXBlOiBzdHJpbmc7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG4gICAgLy9zZXJ2aWNlSW5jaWRlbmNlczogc3RyaW5nW107XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhci9jYXJMaXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xyXG4vL2ltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vY29uZmlndXJhdGlvblwiOyBleiBsZWhldCwgaG9neSBuZW0ga2VsbFxyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnNBcmdzLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbmltcG9ydCBDYXIgPSBBcHAuTW9kZWxzLklDYXI7XHJcbmltcG9ydCBDYXJNYWtlID0gQXBwLk1vZGVscy5JQ2FyTWFrZTtcclxuaW1wb3J0IENhck1vZGVsID0gQXBwLk1vZGVscy5JQ2FyTW9kZWw7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYXJTZXJ2aWNlIHtcclxuXHJcbiAgICBjYXJzOiBTdWJqZWN0PENhcltdPjtcclxuICAgIGNhcjogU3ViamVjdDxDYXI+O1xyXG5cclxuICAgIC8qIEZPUk1IT1ogKi9cclxuICAgIGNhck1ha2VzOiBTdWJqZWN0PENhck1ha2VbXT47XHJcbiAgICBjYXJNb2RlbHM6IFN1YmplY3Q8Q2FyTW9kZWxbXT47XHJcbiAgICAvKiBGT1JNSE9aIFbDiUdFKi9cclxuXHJcbiAgICBwcml2YXRlIGRlZmF1bHRBcmdzOiBSZXF1ZXN0T3B0aW9uc0FyZ3M7XHJcbiAgICAvL3ByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiwgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLmNhcnMgPSBuZXcgU3ViamVjdDxDYXJbXT4oKTtcclxuICAgICAgICB0aGlzLmNhciA9IG5ldyBTdWJqZWN0PENhcj4oKTtcclxuICAgICAgICB0aGlzLmNhck1ha2VzID0gbmV3IFN1YmplY3Q8Q2FyTWFrZVtdPigpO1xyXG4gICAgICAgIHRoaXMuY2FyTW9kZWxzID0gbmV3IFN1YmplY3Q8Q2FyTW9kZWxbXT4oKTtcclxuXHJcbiAgICAgICAgbGV0IGRlZmF1bHRIZWFkZXJzOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBkZWZhdWx0SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0QXJncyA9IHsgaGVhZGVyczogZGVmYXVsdEhlYWRlcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICB2YXIgbWVzc2FnZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKGVycm9yLnRleHQoKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdFtwcm9wZXJ0eV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRbcHJvcGVydHldLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlICsgcmVzdWx0W3Byb3BlcnR5XVtpXSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAoZXJyb3IudGV4dCgpIHx8IGVycm9yLnN0YXR1c1RleHQgfHwgZXJyb3Iuc3RhdHVzLnRvU3RyaW5nKDEwKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgbWVzc2FnZSA9IChlcnJvci50ZXh0KCkgfHwgZXJyb3Iuc3RhdHVzVGV4dCB8fCBlcnJvci5zdGF0dXMudG9TdHJpbmcoMTApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQ2FyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoXCIvYXBpL0Nhci9HZXRDYXJzXCIpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3VsdDogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2Fycy5uZXh0KHJlc3VsdC5qc29uKCkpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJCeUN1c3RvbWVySUQoY3VzdG9tZXJJRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldChcIi9hcGkvQ2FyL0dldENhcnNCeUN1c3RvbWVySUQ/Y3VzdG9tZXJJRD1cIiArIGN1c3RvbWVySUQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3VsdDogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2Fycy5uZXh0KHJlc3VsdC5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhciBcIiArIHJlc3VsdC5qc29uKClbMF0uY2FyTW9kZWwuY2FyTW9kZWxOYW1lKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0KGNhcjogQ2FyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXJ2aWNlYsWRbDogXCIgKyBjYXIpO1xyXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KFwiL2FwaS9DYXJcIixcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY2FyKSxcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0QXJncylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0OiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXIubmV4dChyZXN1bHQuanNvbigpKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRk9STUhPWiAqL1xyXG4gICAgZ2V0QWxsQ2FyTWFrZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldChcIi9hcGkvQ2FyL0dldEFsbENhck1ha2VzXCIpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3VsdDogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyTWFrZXMubmV4dChyZXN1bHQuanNvbigpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FyTWFrZXMgXCIgKyByZXN1bHQuanNvbigpWzBdLmNhck1ha2VOYW1lKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FyTW9kZWxCeUNhck1ha2VJRChDYXJNYWtlSUQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoXCIvYXBpL0Nhci9HZXRDYXJNb2RlbEJ5Q2FyTWFrZUlEP0Nhck1ha2VJRD1cIiArIENhck1ha2VJRCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzdWx0OiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJNb2RlbHMubmV4dChyZXN1bHQuanNvbigpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FyTW9kZWxzIGZyb20gc2VydmljZSBcIiArIHJlc3VsdC5qc29uKClbMF0uY2FyTW9kZWxOYW1lKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcbiAgICAvKiBGT1JNSE9aIFbDiUdFICovXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhci9jYXJTZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9TdWJqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9TdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+Q2FyczwvaDE+XFxyXFxuPHA+VGhpcyBjb21wb25lbnQgZGVtb25zdHJhdGVzIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyLjwvcD5cXHJcXG48cCAqbmdJZj1cXFwiIWNhcnNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxyXFxuPHRhYmxlIGNsYXNzPSd0YWJsZScgKm5nSWY9XFxcImNhcnNcXFwiPlxcclxcbiAgICB7eyBjdXN0b21lcklEIH19XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+VklOPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+Q2FyTWFrZTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPkNhck1vZGVsPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+U2VydmljZUluY2lkZW5jZXM8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGNhciBvZiBjYXJzXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQ+e3sgY2FyLnZpbiB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGNhci5jYXJNYWtlLmNhck1ha2VOYW1lIH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3sgY2FyLmNhck1vZGVsLmNhck1vZGVsTmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICA8dWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgc2kgb2YgY2FyLnNlcnZpY2VJbmNpZGVuY2VzXFxcIj57eyBzaS5zZXJ2aWNlSW5jaWRlbmNlTmFtZS5pbmNpZGVuY2VOYW1lIH19IHt7IHNpLnJlcGFpckRhdGUgfCBkYXRlOid5eXl5LiBNTS4gZGQuJ319PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyL2Nhckxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gJy4vY2FyU2VydmljZSc7XHJcblxyXG5pbXBvcnQgSUNhciA9IEFwcC5Nb2RlbHMuSUNhcjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYXJMaXN0SXRlbScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jYXJMaXN0SXRlbS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJMaXN0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgY2FyOiBJQ2FyW107XHJcbiAgICBwdWJsaWMgY3VzdG9tZXJJRDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjYXJTZXJ2aWNlOiBDYXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNhclNlcnZpY2UuY2Fycy5zdWJzY3JpYmUodGhpcy5wcm9jZXNzRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc0RhdGEgPSAoZGF0YTogSUNhcltdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXIgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJJRCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydjdXN0b21lcklEJ107XHJcbiAgICAgICAgdGhpcy5jYXJTZXJ2aWNlLmdldENhckJ5Q3VzdG9tZXJJRCh0aGlzLmN1c3RvbWVySUQpO1xyXG4gICAgfSAgICBcclxufVxyXG5cclxuaW50ZXJmYWNlIENhciB7XHJcbiAgICBjYXJNYWtlOiBzdHJpbmc7XHJcbiAgICBjYXJNb2RlbDogc3RyaW5nO1xyXG4gICAgdmluOiBzdHJpbmc7XHJcbiAgICBlbmdpbmVOdW1iZXI6IHN0cmluZztcclxuICAgIGZ1ZWxUeXBlOiBzdHJpbmc7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG4gICAgLy9zZXJ2aWNlSW5jaWRlbmNlczogc3RyaW5nW107XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhci9jYXJMaXN0SXRlbS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkNhcnM8L2gxPlxcclxcbjxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlci48L3A+XFxyXFxuPHAgKm5nSWY9XFxcIiFjYXJcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxyXFxuPHRhYmxlIGNsYXNzPSd0YWJsZScgKm5nSWY9XFxcImNhclxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+VklOPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+Q2FyTWFrZTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPkNhck1vZGVsPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+U2VydmljZUluY2lkZW5jZXM8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGNhIG9mIGNhclxcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGNhLnZpbiB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGNhLmNhck1vZGVsLmNhck1ha2UuY2FyTWFrZU5hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBjYS5jYXJNb2RlbC5jYXJNb2RlbE5hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IHNpIG9mIGNhLnNlcnZpY2VJbmNpZGVuY2VzXFxcIj57eyBzaS5zZXJ2aWNlSW5jaWRlbmNlTmFtZS5pbmNpZGVuY2VOYW1lIH19IHt7IHNpLnJlcGFpckRhdGUgfCBkYXRlOid5eXl5LiBNTS4gZGQuJ319PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyL2Nhckxpc3RJdGVtLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhcmFtcywgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IENhclNlcnZpY2UgfSBmcm9tIFwiLi9jYXJTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCBJQ2FyID0gQXBwLk1vZGVscy5JQ2FyO1xyXG5pbXBvcnQgSUNhck1ha2UgPSBBcHAuTW9kZWxzLklDYXJNYWtlO1xyXG5pbXBvcnQgSUNhck1vZGVsID0gQXBwLk1vZGVscy5JQ2FyTW9kZWw7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2FyTmV3SXRlbScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jYXJOZXdJdGVtLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJOZXdJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNhcjogSUNhciA9IG51bGw7XHJcbiAgICBjYXJNYWtlczogSUNhck1ha2VbXTtcclxuICAgIGNhck1vZGVsczogSUNhck1vZGVsW107XHJcbiAgICBjYXJGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3RhdGU6IElDYXIgPSBudWxsO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBjYXJTZXJ2aWNlOiBDYXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyXHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMuY2FyU2VydmljZS5jYXJNYWtlcy5zdWJzY3JpYmUodGhpcy5wcm9jZXNzRGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FyU2VydmljZS5jYXJNb2RlbHMuc3Vic2NyaWJlKHRoaXMuY2FybW9kZWxEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3NEYXRhID0gKGRhdGE6IElDYXJNYWtlW10pID0+IHtcclxuICAgICAgICB0aGlzLmNhck1ha2VzID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhcm1vZGVsRGF0YSA9IChkYXRhOiBJQ2FyTW9kZWxbXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FyTW9kZWxzID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhclNlcnZpY2UuZ2V0QWxsQ2FyTWFrZXMoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhcm1ha2VzIGZyb20gY29tcG9uZW50IFwiICsgdGhpcy5jYXJNYWtlcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYXIgZnJvbSBjb21wb25lbnQgXCIgKyB0aGlzLmNhcik7XHJcbiAgICAgICAgdGhpcy5jYXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIFwiY2FyTWFrZUlEXCI6IFtudWxsLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcbiAgICAgICAgICAgIFwiY2FyTW9kZWxJRFwiOiBbbnVsbCwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICBcIkZ1ZWxUeXBlSURcIjogW251bGwsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgXCJWSU5cIjogW251bGwsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgXCJlbmdpbmVOdW1iZXJcIjogW251bGwsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBbbnVsbCwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgICAgICBcImN1c3RvbWVySURcIjogW251bGwsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTZWxlY3RlZENhck1ha2UoY2FybWFrZWlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNhck1vZGVscyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jYXJTZXJ2aWNlLmdldENhck1vZGVsQnlDYXJNYWtlSUQoY2FybWFrZWlkKTtcclxuICAgIH1cclxuXHJcbiAgICBTZWxlY3RlZENhck1vZGVsKGNhcm1vZGVsaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhcm1vZGVsaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVDYXIoKSB7XHJcbiAgICAgICAgdGhpcy5jYXIgPSB0aGlzLmNhckZvcm0udmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jYXIpO1xyXG4gICAgICAgIHRoaXMuY2FyU2VydmljZS5pbnNlcnQodGhpcy5jYXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyL2Nhck5ld0l0ZW0uY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGgzPsOaajwvaDM+XFxyXFxuPGZvcm0gW2Zvcm1Hcm91cF09XFxcImNhckZvcm1cXFwiIG5vdmFsaWRhdGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLXhzLTEyIGNvbC1zbS02IGNvbC1sZy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiY2FyTWFrZUlEXFxcIiBjbGFzcz1cXFwiY29sLXhzLTRcXFwiPkrDoXJtxbEgbcOhcmthPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCAjY2FybWFrZXNlbGVjdGVkIGZvcm1Db250cm9sTmFtZT1cXFwiY2FyTWFrZUlEXFxcIiAoY2hhbmdlKT1cXFwiU2VsZWN0ZWRDYXJNYWtlKGNhcm1ha2VzZWxlY3RlZC52YWx1ZSlcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgY2FyTWFrZSBvZiBjYXJNYWtlc1xcXCIgW3ZhbHVlXT1cXFwiY2FyTWFrZS5jYXJNYWtlSURcXFwiPnt7Y2FyTWFrZS5jYXJNYWtlTmFtZX19IHt7Y2FyTWFrZS5jYXJNYWtlSUR9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLXhzLTEyIGNvbC1zbS02IGNvbC1sZy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJjYXJNYWtlSURcXFwiIFtzdHlsZS5ib3JkZXItY29sb3JdPVxcXCIncmVkJ1xcXCI+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNhck1vZGVsSURcXFwiIGNsYXNzPVxcXCJjb2wteHMtNFxcXCI+SsOhcm3FsSB0w61wdXM8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0ICNjYXJtb2RlbHNlbGVjdGVkIGZvcm1Db250cm9sTmFtZT1cXFwiY2FyTW9kZWxJRFxcXCIgKGNoYW5nZSk9XFxcIlNlbGVjdGVkQ2FyTW9kZWwoY2FybW9kZWxzZWxlY3RlZC52YWx1ZSlcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgY2FyTW9kZWwgb2YgY2FyTW9kZWxzXFxcIiBbdmFsdWVdPVxcXCJjYXJNb2RlbC5jYXJNb2RlbElEXFxcIj57e2Nhck1vZGVsLmNhck1vZGVsTmFtZX19IHt7Y2FyTW9kZWwuY2FyTW9kZWxJRH19PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiRnVlbFR5cGVJRFxcXCI+w5x6ZW1hbnlhZyB0w61wdXM8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuYW1lXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkZ1ZWxUeXBlSURcXFwiIFtzdHlsZS5ib3JkZXItY29sb3JdPVxcXCIncmVkJ1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJWSU5cXFwiPkFsdsOhenN6w6FtPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibmFtZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJWSU5cXFwiIFtzdHlsZS5ib3JkZXItY29sb3JdPVxcXCIncmVkJ1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb2xvclxcXCI+U3rDrW48L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJuYW1lXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImNvbG9yXFxcIiBbc3R5bGUuYm9yZGVyLWNvbG9yXT1cXFwiJ3JlZCdcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiY3VzdG9tZXJJRFxcXCI+Q3VzdG9tZXJJRDwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5hbWVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiY3VzdG9tZXJJRFxcXCIgW3N0eWxlLmJvcmRlci1jb2xvcl09XFxcIidyZWQnXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImVuZ2luZU51bWJlclxcXCI+TW90b3JzesOhbTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5hbWVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZW5naW5lTnVtYmVyXFxcIiBbc3R5bGUuYm9yZGVyLWNvbG9yXT1cXFwiJ3JlZCdcXFwiPlxcclxcblxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwiY2FyRm9ybS5jb250cm9scy5jYXJNYWtlSUQuaGFzRXJyb3IoJ3JlcXVpcmVkJylcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPk5hbWUgaXMgcmVxdWlyZWQhPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJjYXJGb3JtLmNvbnRyb2xzLmNhck1ha2VJRC5oYXNFcnJvcignbWF4bGVuZ3RoJylcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPk5hbWUgaXMgdG9vIGxvbmchPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJjYXJGb3JtLmNvbnRyb2xzLmNhck1ha2VJRC5oYXNFcnJvcignZHVwZScpXFxcIiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5OYW1lIGlzIGEgZHVwbGljYXRlITwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInNhdmVDYXIoKVxcXCJcXHJcXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVxcXCIhY2FyRm9ybS52YWxpZFxcXCI+XFxyXFxuICAgICAgICA8IS0tLS0+XFxyXFxuICAgICAgICBTYXZlXFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIGdseXBoaWNvbi1zcGluXFxcIj48L3NwYW4+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKGNsaWNrKT1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJvbkRlbGV0ZSgpXFxcIj5EZWxldGU8L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcImJhY2soKVxcXCI+QmFjazwvYnV0dG9uPlxcclxcblxcclxcbiAgICA8IS0tPGRpdiAqbmdJZj1cXFwiIWNhckZvcm0udmFsaWRcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPkNvcnJlY3QgYWxsIGludmFsaWQgdmFsdWVzIHRvIGVuYWJsZSBzYXZlLjwvZGl2Pi0tPlxcclxcblxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhci9jYXJOZXdJdGVtLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9