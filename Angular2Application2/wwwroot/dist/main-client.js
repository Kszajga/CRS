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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************!*\
  !*** ./ClientApp/boot-client.ts ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	__webpack_require__(/*! angular2-universal-polyfills/browser */ 3);
	var core_1 = __webpack_require__(/*! @angular/core */ 4);
	var angular2_universal_1 = __webpack_require__(/*! angular2-universal */ 5);
	var app_module_1 = __webpack_require__(/*! ./app/app.module */ 6);
	__webpack_require__(/*! bootstrap */ 39);
	// Enable either Hot Module Reloading or production mode
	if (module['hot']) {
	    module['hot'].accept();
	    module['hot'].dispose(function () { platform.destroy(); });
	}
	else {
	    core_1.enableProdMode();
	}
	// Boot the application, either now or when the DOM content is loaded
	var platform = angular2_universal_1.platformUniversalDynamic();
	var bootApplication = function () { platform.bootstrapModule(app_module_1.AppModule); };
	if (document.readyState === 'complete') {
	    bootApplication();
	}
	else {
	    document.addEventListener('DOMContentLoaded', bootApplication);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../~/webpack/buildin/module.js */ 1)(module)))

/***/ },
/* 1 */
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/module.js from dll-reference vendor_2b867295628df849f98a ***!
  \*********************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(125);

/***/ },
/* 2 */
/*!**********************************************!*\
  !*** external "vendor_2b867295628df849f98a" ***!
  \**********************************************/
/***/ function(module, exports) {

	module.exports = vendor_2b867295628df849f98a;

/***/ },
/* 3 */
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/angular2-universal-polyfills/browser.js from dll-reference vendor_2b867295628df849f98a ***!
  \***********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(45);

/***/ },
/* 4 */
/*!*****************************************************************************************************************!*\
  !*** delegated ./node_modules/@angular/core/bundles/core.umd.js from dll-reference vendor_2b867295628df849f98a ***!
  \*****************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(4);

/***/ },
/* 5 */
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/angular2-universal/browser/index.js from dll-reference vendor_2b867295628df849f98a ***!
  \*******************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(48);

/***/ },
/* 6 */
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 4);
	var router_1 = __webpack_require__(/*! @angular/router */ 23);
	var angular2_universal_1 = __webpack_require__(/*! angular2-universal */ 5);
	var app_component_1 = __webpack_require__(/*! ./components/app/app.component */ 8);
	var navmenu_component_1 = __webpack_require__(/*! ./components/navmenu/navmenu.component */ 13);
	var home_component_1 = __webpack_require__(/*! ./components/home/home.component */ 17);
	var fetchdata_component_1 = __webpack_require__(/*! ./components/fetchdata/fetchdata.component */ 19);
	var counter_component_1 = __webpack_require__(/*! ./components/counter/counter.component */ 40);
	var carList_component_1 = __webpack_require__(/*! ./components/car/carList.component */ 25);
	var carListItem_component_1 = __webpack_require__(/*! ./components/car/carListItem.component */ 29);
	var carService_1 = __webpack_require__(/*! ./components/car/carService */ 26);
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
	            home_component_1.HomeComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                { path: 'counter', component: counter_component_1.CounterComponent },
	                { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
	                { path: 'car', component: carList_component_1.CarListComponent },
	                { path: 'car/:customerID', component: carListItem_component_1.CarListItemComponent },
	                { path: '**', redirectTo: 'home' }
	            ])
	        ],
	        providers: [carService_1.CarService]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 7 */,
/* 8 */
/*!*******************************************************!*\
  !*** ./ClientApp/app/components/app/app.component.ts ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 4);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(/*! ./app.component.html */ 9),
	        styles: [__webpack_require__(/*! ./app.component.css */ 10)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 9 */
/*!*********************************************************!*\
  !*** ./ClientApp/app/components/app/app.component.html ***!
  \*********************************************************/
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 10 */
/*!********************************************************!*\
  !*** ./ClientApp/app/components/app/app.component.css ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(/*! !./../../../../~/css-loader!./app.component.css */ 11);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 11 */
/*!***********************************************************************!*\
  !*** ./~/css-loader!./ClientApp/app/components/app/app.component.css ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 12)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 12 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
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
/* 13 */
/*!***************************************************************!*\
  !*** ./ClientApp/app/components/navmenu/navmenu.component.ts ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 4);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(/*! ./navmenu.component.html */ 14),
	        styles: [__webpack_require__(/*! ./navmenu.component.css */ 15)]
	    })
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 14 */
/*!*****************************************************************!*\
  !*** ./ClientApp/app/components/navmenu/navmenu.component.html ***!
  \*****************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Angular2Application2</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/counter']\">\n                        <span class='glyphicon glyphicon-education'></span> Counter\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/fetch-data']\">\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/car/2']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Car\r\n                    </a>\r\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 15 */
/*!****************************************************************!*\
  !*** ./ClientApp/app/components/navmenu/navmenu.component.css ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(/*! !./../../../../~/css-loader!./navmenu.component.css */ 16);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 16 */
/*!*******************************************************************************!*\
  !*** ./~/css-loader!./ClientApp/app/components/navmenu/navmenu.component.css ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 12)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 17 */
/*!*********************************************************!*\
  !*** ./ClientApp/app/components/home/home.component.ts ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 4);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(/*! ./home.component.html */ 18)
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 18 */
/*!***********************************************************!*\
  !*** ./ClientApp/app/components/home/home.component.html ***!
  \***********************************************************/
/***/ function(module, exports) {

	module.exports = "<h1>Hello, world!</h1>\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n</ul>\n"

/***/ },
/* 19 */
/*!*******************************************************************!*\
  !*** ./ClientApp/app/components/fetchdata/fetchdata.component.ts ***!
  \*******************************************************************/
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
	var core_1 = __webpack_require__(/*! @angular/core */ 4);
	var http_1 = __webpack_require__(/*! @angular/http */ 20);
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
	        template: __webpack_require__(/*! ./fetchdata.component.html */ 21)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], FetchDataComponent);
	exports.FetchDataComponent = FetchDataComponent;


/***/ },
/* 20 */
/*!*****************************************************************************************************************!*\
  !*** delegated ./node_modules/@angular/http/bundles/http.umd.js from dll-reference vendor_2b867295628df849f98a ***!
  \*****************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(25);

/***/ },
/* 21 */
/*!*********************************************************************!*\
  !*** ./ClientApp/app/components/fetchdata/fetchdata.component.html ***!
  \*********************************************************************/
/***/ function(module, exports) {

	module.exports = "<h1>Weather forecast</h1>\n\n<p>This component demonstrates fetching data from the server.</p>\n\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\n\n<table class='table' *ngIf=\"forecasts\">\n    <thead>\n        <tr>\n            <th>Date</th>\n            <th>Temp. (C)</th>\n            <th>Temp. (F)</th>\n            <th>Summary</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let forecast of forecasts\">\n            <td>{{ forecast.dateFormatted }}</td>\n            <td>{{ forecast.temperatureC }}</td>\n            <td>{{ forecast.temperatureF }}</td>\n            <td>{{ forecast.summary }}</td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ },
/* 22 */,
/* 23 */
/*!*********************************************************************************************************************!*\
  !*** delegated ./node_modules/@angular/router/bundles/router.umd.js from dll-reference vendor_2b867295628df849f98a ***!
  \*********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(44);

/***/ },
/* 24 */,
/* 25 */
/*!***********************************************************!*\
  !*** ./ClientApp/app/components/car/carList.component.ts ***!
  \***********************************************************/
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
	var core_1 = __webpack_require__(/*! @angular/core */ 4);
	var router_1 = __webpack_require__(/*! @angular/router */ 23);
	var carService_1 = __webpack_require__(/*! ./carService */ 26);
	var CarListComponent = (function () {
	    function CarListComponent(carService, route) {
	        var _this = this;
	        this.carService = carService;
	        this.route = route;
	        this.processData = function (data) {
	            _this.cars = data;
	        };
	        console.log(this.customerID);
	        this.carService.cars.subscribe(this.processData);
	    }
	    CarListComponent.prototype.ngOnInit = function () {
	        //let id = this.route.snapshot.params['customerID'];
	        //this.customerID = id;
	        //console.log("ngOnInit " + this.customerID);
	        this.carService.getAllCar();
	    };
	    return CarListComponent;
	}());
	CarListComponent = __decorate([
	    core_1.Component({
	        selector: 'carList',
	        template: __webpack_require__(/*! ./carList.component.html */ 28)
	    }),
	    __metadata("design:paramtypes", [carService_1.CarService, router_1.ActivatedRoute])
	], CarListComponent);
	exports.CarListComponent = CarListComponent;


/***/ },
/* 26 */
/*!****************************************************!*\
  !*** ./ClientApp/app/components/car/carService.ts ***!
  \****************************************************/
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
	var core_1 = __webpack_require__(/*! @angular/core */ 4);
	var Subject_1 = __webpack_require__(/*! rxjs/Subject */ 27);
	//import { Configuration } from "../configuration"; ez lehet, hogy nem kell
	var http_1 = __webpack_require__(/*! @angular/http */ 20);
	var CarService = (function () {
	    //private configuration: Configuration, 
	    function CarService(http) {
	        this.http = http;
	        this.cars = new Subject_1.Subject();
	        this.car = new Subject_1.Subject();
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
	        this.http.get("api/Car/GetCarsByCustomerID/" + customerID)
	            .subscribe(function (result) {
	            _this.car.next(result.json());
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
/* 27 */
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/rxjs/Subject.js from dll-reference vendor_2b867295628df849f98a ***!
  \***********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(16);

/***/ },
/* 28 */
/*!*************************************************************!*\
  !*** ./ClientApp/app/components/car/carList.component.html ***!
  \*************************************************************/
/***/ function(module, exports) {

	module.exports = "<h1>Cars</h1>\r\n<p>This component demonstrates fetching data from the server.</p>\r\n<p *ngIf=\"!cars\"><em>Loading...</em></p>\r\n<table class='table' *ngIf=\"cars\">\r\n    {{ customerID }}\r\n    <thead>\r\n        <tr>\r\n            <th>VIN</th>\r\n            <th>CarMake</th>\r\n            <th>CarModel</th>\r\n            <th>ServiceIncidences</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let car of cars\">\r\n            <td>{{ car.vin }}</td>\r\n            <td>{{ car.carMake.carMakeName }}</td>\r\n            <td>{{ car.carModel.carModelName }}</td>\r\n            <td>\r\n                <ul>\r\n                    <li *ngFor=\"let si of car.serviceIncidences\">{{ si.serviceIncidenceName.incidenceName }} {{ si.repairDate | date:'yyyy. MM. dd.'}}</li>\r\n                </ul>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ },
/* 29 */
/*!***************************************************************!*\
  !*** ./ClientApp/app/components/car/carListItem.component.ts ***!
  \***************************************************************/
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
	var core_1 = __webpack_require__(/*! @angular/core */ 4);
	var router_1 = __webpack_require__(/*! @angular/router */ 23);
	var carService_1 = __webpack_require__(/*! ./carService */ 26);
	var CarListItemComponent = (function () {
	    function CarListItemComponent(carService, route, router) {
	        var _this = this;
	        this.carService = carService;
	        this.route = route;
	        this.router = router;
	        this.processData = function (data) {
	            _this.cars = data;
	        };
	        console.log(this.customerID);
	        this.carService.cars.subscribe(this.processData);
	    }
	    CarListItemComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        //let id = this.route.snapshot.params['customerID'];
	        //this.customerID = id;
	        console.log("ngOnInit " + this.customerID);
	        this.subscription =
	            this.carService.cars.subscribe(this.processData);
	        this.routeSubscription =
	            this.route.params.subscribe(function (p) { _this.customerID = parseInt(p["customerID"], 10); });
	        if (this.customerID > 0) {
	            this.carService.getCarByCustomerID(this.customerID);
	        }
	    };
	    CarListItemComponent.prototype.ngOnDestroy = function () {
	        this.subscription.unsubscribe();
	    };
	    return CarListItemComponent;
	}());
	CarListItemComponent = __decorate([
	    core_1.Component({
	        selector: 'carListItem',
	        template: __webpack_require__(/*! ./carListItem.component.html */ 30)
	    }),
	    __metadata("design:paramtypes", [carService_1.CarService,
	        router_1.ActivatedRoute,
	        router_1.Router])
	], CarListItemComponent);
	exports.CarListItemComponent = CarListItemComponent;


/***/ },
/* 30 */
/*!*****************************************************************!*\
  !*** ./ClientApp/app/components/car/carListItem.component.html ***!
  \*****************************************************************/
/***/ function(module, exports) {

	module.exports = "<h1>Cars</h1>\r\n<p>This component demonstrates fetching data from the server.</p>\r\n<p *ngIf=\"!cars\"><em>Loading...</em></p>\r\n<table class='table' *ngIf=\"cars\">\r\n    {{ customerID }}\r\n    <thead>\r\n        <tr>\r\n            <th>VIN</th>\r\n            <th>CarMake</th>\r\n            <th>CarModel</th>\r\n            <th>ServiceIncidences</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let car of cars\">\r\n            <td>{{ car.vin }}</td>\r\n            <td>{{ car.carMake.carMakeName }}</td>\r\n            <td>{{ car.carModel.carModelName }}</td>\r\n            <td>\r\n                <ul>\r\n                    <li *ngFor=\"let si of car.serviceIncidences\">{{ si.serviceIncidenceName.incidenceName }} {{ si.repairDate | date:'yyyy. MM. dd.'}}</li>\r\n                </ul>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ },
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/*!********************************************************************************************************!*\
  !*** delegated ./node_modules/bootstrap/dist/js/npm.js from dll-reference vendor_2b867295628df849f98a ***!
  \********************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(52);

/***/ },
/* 40 */
/*!***************************************************************!*\
  !*** ./ClientApp/app/components/counter/counter.component.ts ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 4);
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
	        template: __webpack_require__(/*! ./counter.component.html */ 41)
	    })
	], CounterComponent);
	exports.CounterComponent = CounterComponent;


/***/ },
/* 41 */
/*!*****************************************************************!*\
  !*** ./ClientApp/app/components/counter/counter.component.html ***!
  \*****************************************************************/
/***/ function(module, exports) {

	module.exports = "<h2>Counter</h2>\n\n<p>This is a simple example of an Angular 2 component.</p>\n\n<p>Current count: <strong>{{ currentCount }}</strong></p>\n\n<button (click)=\"incrementCounter()\">Increment</button>\n"

/***/ }
/******/ ]);
//# sourceMappingURL=main-client.js.map