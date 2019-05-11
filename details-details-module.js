(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"],{

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card__img {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBbUI7S0FBbkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9faW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card-deck card-deck_fix mb-3 text-center\">\n\n    <div class=\"card card__fix mb-4 box-shadow\">\n      <div class=\"card-header\">\n        <h4 class=\"my-0 font-weight-normal\">{{ name }}</h4>\n      </div>\n      <img class=\"card__img\" src=\"{{img}}\">\n      <div class=\"card-body\">\n        <h1 class=\"card-title pricing-card-title\">{{ price }}</h1>\n        <ul class=\"list-unstyled mt-3 mb-4\">\n          <li>{{ description }}</li>\n          <li>View count: {{count}}</li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n\n        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-12 px-4\">\n          <div class=\"d-flex d-flex__column justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3__top\">\n\n            <a href=\"/list\">Go back to list</a>\n\n          </div>\n        </main>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(activateRoute) {
        var _this = this;
        this.activateRoute = activateRoute;
        //Get data from the localstorage model.
        this.products = localStorage.getItem("object2") ? JSON.parse(localStorage.getItem("object2")) : JSON.parse(localStorage.getItem("object"));
        this.subscription = activateRoute.params.subscribe(function (params) {
            // Find the product id from the routing parameters.
            _this.id = params['id'];
            // Find by this id the same value in the model.
            var search = _this.products.find(function (item) { return item.id === Number(_this.id); });
            // Fill in the variables for each individual card.
            _this.name = search.name;
            _this.img = search.img;
            _this.price = search.price;
            _this.description = search.description;
            _this.count = Number(search.count);
            // The value of the view counter is increased by 1.
            _this.count++;
        });
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/details/details.module.ts":
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/*! exports provided: DetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModule", function() { return DetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.component */ "./src/app/details/details.component.ts");




var routes = [
    { path: '', component: _details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] }
];
var DetailsModule = /** @class */ (function () {
    function DetailsModule() {
    }
    DetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        })
    ], DetailsModule);
    return DetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=details-details-module.js.map