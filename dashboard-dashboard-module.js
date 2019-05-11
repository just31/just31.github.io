(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pt-3__top {\n  padding-top: 3rem !important;\n}\n\n.sidebar-sticky__top {\n  margin-top: 50px;\n}\n\n.bg-dark {\n  height: 50px;\n}\n\n.container-form {\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB0LTNfX3RvcCB7XG4gIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlYmFyLXN0aWNreV9fdG9wIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmJnLWRhcmsge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5jb250YWluZXItZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"/list\">Beauty Catalog - List</a>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky sidebar-sticky__top\">\n        <ul class=\"nav flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"/list\">\n              <span data-feather=\"file\"></span>\n              List products\n            </a>\n          </li>\n        </ul>\n\n        <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n          <span>Saved reports</span>\n          <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n            <span data-feather=\"plus-circle\"></span>\n          </a>\n        </h6>\n      </div>\n    </nav>\n\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pt-3__top pb-2 mb-3\">\n        <h1 class=\"h2\">Dashboard</h1>\n      </div>\n\n      <div class=\"table\">\n        <table class=\"table able-sm\">\n          <thead>\n          <tr>\n            <th>Name product</th>\n            <th>Price</th>\n            <th>View count</th>\n            <th>Del</th>\n          </tr>\n          </thead>\n          <tbody>\n          <!--Display the value of the localstorage data model on the page-->\n          <tr *ngFor=\"let product of products; let i = index\">\n            <td>{{ product.name }}</td>\n            <td>{{ product.price }}</td>\n            <td>{{ product.count }}</td>\n            <td><button type=\"button\" class=\"btn btn-dark\" (click)=\"deleteItem(i)\">x</button></td>\n          </tr>\n          <tr>\n            <td colspan=\"4\"><h3>Number of products - {{products_length}}</h3></td>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"container container-form\">\n        <h4>Add new items to catalog</h4>\n        <form #myForm=\"ngForm\" [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit(); myForm.reset();\">\n          <div class=\"form-group\">\n            <label for=\"nameProduct\">Name product</label>\n            <input type=\"text\" class=\"form-control\" id=\"nameProduct\" formControlName=\"nameProduct\" placeholder=\"name product\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"price\">Price</label>\n            <input type=\"text\" class=\"form-control\" id=\"price\" formControlName=\"price\" placeholder=\"price\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"price\">Description</label>\n            <input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\" placeholder=\"description\">\n          </div>\n\n          <button type=\"submit\" [disabled]=\"!profileForm.valid\">Submit</button>\n        </form>\n      </div>\n    </main>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nameProduct: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        //Get data from the localstorage model.
        this.products = localStorage.getItem("object2") ? JSON.parse(localStorage.getItem("object2")) : JSON.parse(localStorage.getItem("object"));
        this.products_length = this.products.length;
    }
    // Add a new value to the catalog.
    DashboardComponent.prototype.onSubmit = function () {
        var id = this.products.length + 1;
        this.products.push({
            "id": id,
            "count": 0,
            "name": this.profileForm.value.nameProduct,
            "price": this.profileForm.value.price + "$",
            "description": this.profileForm.value.description,
            "img": "https://www.krasotka-market.ru/storage/img_cache/202/045/20204563/front.jpg",
        });
        // Get a new length of the array, after adding a new item to the catalog. To output it, in the number of products dashboard.
        this.products_length = this.products.length;
        localStorage.setItem("object2", JSON.stringify(this.products));
        this.products = JSON.parse(localStorage.getItem("object2"));
    };
    // Remove the selected value from the catalog.
    DashboardComponent.prototype.deleteItem = function (index) {
        if (localStorage.getItem("object2")) {
            this.products = JSON.parse(localStorage.getItem('object2'));
            this.products.splice(index, 1);
            localStorage.setItem('object2', JSON.stringify(this.products));
        }
        else {
            this.products = JSON.parse(localStorage.getItem('object'));
            this.products.splice(index, 1);
            localStorage.setItem('object', JSON.stringify(this.products));
        }
        // Get a new length of the array, after delete item to the catalog. To output it, in the number of products dashboard.
        this.products_length = this.products.length;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        //console.log(JSON.parse(localStorage.getItem("object2")));
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");






var routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map