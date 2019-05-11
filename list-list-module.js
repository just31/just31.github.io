(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/Observable.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/Observable.js ***!
  \******************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });


//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  margin-left: calc(100vw - 100%);\n  margin-right: 0;\n}\n\n.d-flex__column {\n  flex-direction: column;\n}\n\n.card-deck_fix {\n  justify-content: center;\n}\n\n.card__fix {\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n  margin-right: 15px;\n  margin-bottom: 0;\n  margin-left: auto;\n  width: 250px;\n}\n\n.card-header_line {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.card__delete {\n  color: #000000;\n}\n\n.card__img {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.container-form {\n  margin-top: 40px;\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.card__fix_new {\n  display: flex;\n  flex: inherit;\n  flex-direction: column;\n  margin-right: 15px;\n  margin-bottom: 0;\n  margin-left: 5px;\n  width: 260px;\n}\n\n.card-deck_fix_new {\n  justify-content: flex-start;\n}\n\n#preloader {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  overflow-y: scroll;\n  background: url('//cdnjs.cloudflare.com/ajax/libs/file-uploader/3.7.0/processing.gif') no-repeat center center;\n}\n\n.preloader__visible {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 2s linear;\n}\n\n.preloader__hidden {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 2s, opacity 2s linear;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFtQjtLQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw4R0FBOEc7QUFDaEg7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsK0NBQStDO0FBQ2pEIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwdncgLSAxMDAlKTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uZC1mbGV4X19jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2FyZC1kZWNrX2ZpeCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZF9fZml4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY2FyZC1oZWFkZXJfbGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmRfX2RlbGV0ZSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2FyZF9faW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmNvbnRhaW5lci1mb3JtIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5jYXJkX19maXhfbmV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogaW5oZXJpdDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB3aWR0aDogMjYwcHg7XG59XG5cbi5jYXJkLWRlY2tfZml4X25ldyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuI3ByZWxvYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJhY2tncm91bmQ6IHVybCgnLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZmlsZS11cGxvYWRlci8zLjcuMC9wcm9jZXNzaW5nLmdpZicpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xufVxuXG4ucHJlbG9hZGVyX192aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBsaW5lYXI7XG59XG5cbi5wcmVsb2FkZXJfX2hpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyAycywgb3BhY2l0eSAycyBsaW5lYXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n  <h3>List products</h3>\n</div>\n\n<div id=\"preloader\" class=\"preloader__visible\"></div>\n\n<div class=\"container\">\n  <div class=\"card-deck card-deck_fix card-deck_fix_new mb-3 text-center\">\n\n    <!--Display the value of Observable array on the page.-->\n    <div class=\"card card__fix card__fix_new mb-4 box-shadow\" *ngFor='let item of myObservableArray | async'>\n      <div class=\"card-header card-header_line\">\n        <h4 class=\"my-0 font-weight-normal\">{{ item.name }}</h4>\n      </div>\n      <img class=\"card__img\" src=\"{{item.img}}\">\n      <div class=\"card-body\">\n        <h1 class=\"card-title pricing-card-title\">{{ item.price }}</h1>\n        <a href=\"javascript:void(0);\" type=\"button\" class=\"btn btn-lg btn-block btn-primary\" [routerLink]=\"['details', item.id]\" (click)=\"addCount()\">More</a>\n      </div>\n    </div>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n\n        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-12 px-4\">\n          <div class=\"d-flex d-flex__column justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3__top\">\n\n            <a href=\"/\">Dashboard</a>\n\n          </div>\n        </main>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.service */ "./src/app/list/list.service.ts");



var ListComponent = /** @class */ (function () {
    function ListComponent(myService) {
        this.myService = myService;
        // Get data from the localstorage model.
        this.products = localStorage.getItem("object2") ? JSON.parse(localStorage.getItem("object2")) : JSON.parse(localStorage.getItem("object"));
        this.products_length = this.products.length;
        this.getData();
    }
    // Get the observable data to display them on the page.
    ListComponent.prototype.getData = function () {
        if (!this.myObservableArray) {
            this.myObservableArray = this.myService.getData();
        }
    };
    ListComponent.prototype.ngOnInit = function () {
        // Realize preloader.
        function loadData() {
            return new Promise(function (resolve, reject) {
                setTimeout(resolve, 2000);
            });
        }
        loadData()
            .then(function () {
            var preloaderEl = document.getElementById('preloader');
            preloaderEl.classList.add('preloader__hidden');
            preloaderEl.classList.remove('preloader__visible');
        });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_list_service__WEBPACK_IMPORTED_MODULE_2__["MyService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.service */ "./src/app/list/list.service.ts");






//Import the observable data service.

var routes = [
    { path: '', component: _list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"] }
];
var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    ListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_list_service__WEBPACK_IMPORTED_MODULE_6__["MyService"]]
        })
    ], ListModule);
    return ListModule;
}());



/***/ }),

/***/ "./src/app/list/list.service.ts":
/*!**************************************!*\
  !*** ./src/app/list/list.service.ts ***!
  \**************************************/
/*! exports provided: MyService, MyDataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyService", function() { return MyService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDataType", function() { return MyDataType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");



var MyService = /** @class */ (function () {
    function MyService() {
        //Get data from the localstorage model.
        this.mydata = localStorage.getItem("object2") ? JSON.parse(localStorage.getItem("object2")) : JSON.parse(localStorage.getItem("object"));
    }
    //Function showing observable data after 3 seconds.
    MyService.prototype.getData = function () {
        var _this = this;
        var data = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            setTimeout(function () {
                observer.next(_this.mydata);
            }, 3000);
        });
        return data;
    };
    MyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyService);
    return MyService;
}());

var MyDataType = /** @class */ (function () {
    function MyDataType() {
    }
    return MyDataType;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map