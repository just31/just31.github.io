(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-container {\r\n  display: flex !important;\r\n  flex-direction: column;\r\n}\r\n\r\n.map-forms {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 345px;\r\n  margin: 10px 0;\r\n}\r\n\r\n#map{\r\n  height: 1000px;\r\n  width: 100%;\r\n}\r\n\r\nbutton, input {\r\n  background-color: #cee2f2;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  border: 1px #000000 solid;\r\n  line-height: 15px;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\ninput {\r\n  text-align: left;\r\n  padding-left: 5px;\r\n  cursor: auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1hcC1mb3JtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMzQ1cHg7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbiNtYXB7XHJcbiAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmJ1dHRvbiwgaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWUyZjI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCAjMDAwMDAwIHNvbGlkO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBjdXJzb3I6IGF1dG87XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container\">\n\n  <div class=\"map-forms\">\n    Количество <input type=\"text\" [(ngModel)]=\"count\" required> <button (click)=\"addMarkers($event)\">Заполнить</button>\n  </div>\n\n  <div id=\"map\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.count = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.map = L.map("map");
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map);
        /*L.vectorGrid.protobuf("https://free-{s}.tilehosting.com/data/v3/{z}/{x}/{y}.pbf.pict?key={key}", {
          //rendererFactory: L.canvas.tile,
          vectorTileLayerStyles: {
            water: {
              fill: true,
              weight: 1,
              fillColor: '#06cccc',
              color: '#06cccc',
              fillOpacity: 0.2,
              opacity: 0.4,
            },
            admin: {
              weight: 1,
              fillColor: 'pink',
              color: 'pink',
              fillOpacity: 0.2,
              opacity: 0.4
            },
            waterway: {
              weight: 1,
              fillColor: '#2375e0',
              color: '#2375e0',
              fillOpacity: 0.2,
              opacity: 0.4
            },
            landcover: {
              fill: true,
              weight: 1,
              fillColor: '#53e033',
              color: '#53e033',
              fillOpacity: 0.2,
              opacity: 0.4,
            },
            landuse: {
              fill: true,
              weight: 1,
              fillColor: '#e5b404',
              color: '#e5b404',
              fillOpacity: 0.2,
              opacity: 0.4
            },
            park: {
              fill: true,
              weight: 1,
              fillColor: '#84ea5b',
              color: '#84ea5b',
              fillOpacity: 0.2,
              opacity: 0.4
            },
            boundary: {
              weight: 1,
              fillColor: '#c545d3',
              color: '#c545d3',
              fillOpacity: 0.2,
              opacity: 0.4
            },
            aeroway: {
              weight: 1,
              fillColor: '#51aeb5',
              color: '#51aeb5',
              fillOpacity: 0.2,
              opacity: 0.4
            },
            road: {
              weight: 1,
              fillColor: '#f2b648',
              color: '#f2b648',
              fillOpacity: 0.2,
              opacity: 0.4
            },
            tunnel: {
              weight: 0.5,
              fillColor: '#f2b648',
              color: '#f2b648',
              fillOpacity: 0.2,
              opacity: 0.4,
            },
            bridge: {
              weight: 0.5,
              fillColor: '#f2b648',
              color: '#f2b648',
              fillOpacity: 0.2,
              opacity: 0.4,
            },
            transportation: {
              weight: 0.5,
              fillColor: '#f2b648',
              color: '#f2b648',
              fillOpacity: 0.2,
              opacity: 0.4,
            },
            transit: {
              weight: 0.5,
              fillColor: '#f2b648',
              color: '#f2b648',
              fillOpacity: 0.2,
              opacity: 0.4,
            },
            building: {
              fill: true,
              weight: 1,
              fillColor: '#2b2b2b',
              color: '#2b2b2b',
              fillOpacity: 0.2,
              opacity: 0.4
            },
            water_name: {
              weight: 1,
              fillColor: '#022c5b',
              color: '#022c5b',
              fillOpacity: 0.2,
              opacity: 0.4
            },
            transportation_name: {
              weight: 1,
              fillColor: '#bc6b38',
              color: '#bc6b38',
              fillOpacity: 0.2,
              opacity: 0.4
            },
            place: {
              weight: 1,
              fillColor: '#f20e93',
              color: '#f20e93',
              fillOpacity: 0.2,
              opacity: 0.4
            },
            housenumber: {
              weight: 1,
              fillColor: '#ef4c8b',
              color: '#ef4c8b',
              fillOpacity: 0.2,
              opacity: 0.4
            },
            poi: {
              weight: 1,
              fillColor: '#3bb50a',
              color: '#3bb50a',
              fillOpacity: 0.2,
              opacity: 0.4
            },
            earth: {
              fill: true,
              weight: 1,
              fillColor: '#c0c0c0',
              color: '#c0c0c0',
              fillOpacity: 0.2,
              opacity: 0.4
            }
          },
          subdomains: "0123",
          key: 'BuNi4FPIgsaSVnVlaLoQ',
          maxNativeZoom: 8
        }).addTo(this.map);*/
        this.map.setView([48.85, 2.35], 11);
        this.dropIcon = L.icon({
            iconUrl: '../assets/images/drop.svg',
            iconSize: [40, 40],
        });
        //console.log(this.map.getBounds().getSouthWest().lat);
        //console.log(this.map.getBounds().getNorthEast().lng);
    };
    AppComponent.prototype.getRandomLatLng = function () {
        return [
            48.8 + 0.1 * Math.random(),
            2.25 + 0.2 * Math.random()
        ];
    };
    AppComponent.prototype.randBackgroundMarker = function () {
        var elems = document.querySelectorAll('img');
        var chars = '0123456789ABCDEF'.split('');
        var randomColor = function () {
            var color = '#';
            for (var i = 0; i < 6; i++)
                color += chars[Math.floor(Math.random() * 16)];
            return color;
        };
        setTimeout(function () {
            for (var i = 0; i < elems.length; i++) {
                elems[i].style.background = randomColor();
            }
        }, 1500);
    };
    AppComponent.prototype.addMarkers = function (ev) {
        var _self = this;
        var fg = L.featureGroup().addTo(this.map);
        for (var i = 0; i < _self.count; i += 1) {
            L.marker(this.getRandomLatLng(), { icon: this.dropIcon }).addTo(fg).bindPopup("<b>Hello world!</b><br>I am a popup.");
        }
        // Fit all markers after 1 second.
        setTimeout(function () {
            _self.map.fitBounds(fg.getBounds());
        }, 1000);
        this.randBackgroundMarker();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            inputs: ['number'],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Front-End\logdep2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map