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

module.exports = ".map-container {\r\n  display: flex !important;\r\n  flex-direction: column;\r\n}\r\n\r\n.map-forms {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 345px;\r\n  margin: 10px 0 10px 12px;\r\n}\r\n\r\n#map{\r\n  height: 93vh;\r\n  width: 100%;\r\n}\r\n\r\nbutton, input {\r\n  background-color: #cee2f2;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  border: 1px #000000 solid;\r\n  line-height: 15px;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\ninput {\r\n  text-align: left;\r\n  padding-left: 5px;\r\n  border-radius: inherit;\r\n  cursor: auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1hcC1mb3JtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMzQ1cHg7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAxMnB4O1xyXG59XHJcblxyXG4jbWFwe1xyXG4gIGhlaWdodDogOTN2aDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYnV0dG9uLCBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTJmMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4ICMwMDAwMDAgc29saWQ7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcblxyXG4iXX0= */"

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


// Декоратор для класса AppComponent. С объектом необходимых метаданных.
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.fg = null;
        this.count = null;
    }
    // Метод инициализирующий компонент.
    AppComponent.prototype.ngOnInit = function () {
        // Создаем новую карту, используя функционал L.
        this.map = L.map("map");
        // Подгружаем тайлы для карты, с ресурса openstreetmap.org.
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map);
        // Подгружаем векторные тайлы для карты, с ресурса cloud.maptiler.com. Используя ключ авторизации, для запросов. Настраиваем опции тайлов.
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
        // Указываем координаты центра карты.
        this.map.setView([48.85, 2.35], 11);
        // Создаем пользовательскую иконочку, для маркера. В качестве источника, указываем путь до svg-изображения.
        this.dropIcon = L.icon({
            iconUrl: '../assets/images/drop.svg',
            iconSize: [40, 40],
        });
        //console.log(this.map.getBounds().toBBoxString());
    };
    // Метод создающий рандомные координаты маркеров. Метод приватный, т.к. используется только внутри данного класса.
    AppComponent.prototype.getRandomLatLng = function () {
        return [
            this.map.getBounds().getSouthWest().lat + 0.38 * Math.random(),
            this.map.getBounds().getSouthWest().lng + 1.28 * Math.random()
        ];
    };
    // Метод создающий рандомные фоны, для маркеров. Метод приватный, т.к. используется только внутри данного класса.
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
    // Метод добавляющий маркеры на карту, после нажатия на кнопку "Заполнить".
    AppComponent.prototype.addMarkers = function (ev) {
        var _self = this;
        // При каждом новом нажатии по кнопке, удаляем предыдущую группу маркеров с карты.
        (_self.fg !== null) ? _self.fg.remove() : false;
        _self.fg = L.featureGroup().addTo(_self.map);
        // Заполняем созданную для маркеров группу, значениями со случайными координатами. Добавляем к маркерам всплывающие окошки с текстом.
        for (var i = 0; i < _self.count; i += 1) {
            L.marker(_self.getRandomLatLng(), { icon: _self.dropIcon }).addTo(_self.fg).bindPopup("<b>Hello world!</b><br>I am a popup.");
        }
        // Добавляем все маркеры на карту, через 1 секунду.
        setTimeout(function () {
            _self.map.fitBounds(_self.fg.getBounds()); // Получаем границы группы маркеров 'fg.getBounds()' и масштабируем карту под них методом - fitBounds.
        }, 1000);
        // Добавляем случайные фоны, к маркерам.
        this.randBackgroundMarker();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            inputs: ['number'],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        // Создаем класс AppComponent.
        ,
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





// Импортируем FormsModule из библиотеки @angular/forms.
// Для того, чтобы можно было осуществить двухстороннее связывание через директиву [(ngModel)]. Между элементом формы и соответствующим свойством класса AppComponent.

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

module.exports = __webpack_require__(/*! E:\Front-End\logdep-git\logDep\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map