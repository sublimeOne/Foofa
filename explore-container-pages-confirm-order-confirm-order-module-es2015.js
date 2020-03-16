(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["explore-container-pages-confirm-order-confirm-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/pages/confirm-order/confirm-order.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/pages/confirm-order/confirm-order.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>confirmOrder</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/explore-container/pages/confirm-order/confirm-order-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/explore-container/pages/confirm-order/confirm-order-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ConfirmOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderPageRoutingModule", function() { return ConfirmOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _confirm_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-order.page */ "./src/app/explore-container/pages/confirm-order/confirm-order.page.ts");




const routes = [
    {
        path: '',
        component: _confirm_order_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmOrderPage"]
    }
];
let ConfirmOrderPageRoutingModule = class ConfirmOrderPageRoutingModule {
};
ConfirmOrderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmOrderPageRoutingModule);



/***/ }),

/***/ "./src/app/explore-container/pages/confirm-order/confirm-order.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/pages/confirm-order/confirm-order.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfirmOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderPageModule", function() { return ConfirmOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _confirm_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-order-routing.module */ "./src/app/explore-container/pages/confirm-order/confirm-order-routing.module.ts");
/* harmony import */ var _confirm_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-order.page */ "./src/app/explore-container/pages/confirm-order/confirm-order.page.ts");







let ConfirmOrderPageModule = class ConfirmOrderPageModule {
};
ConfirmOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirm_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmOrderPageRoutingModule"]
        ],
        declarations: [_confirm_order_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmOrderPage"]]
    })
], ConfirmOrderPageModule);



/***/ }),

/***/ "./src/app/explore-container/pages/confirm-order/confirm-order.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/pages/confirm-order/confirm-order.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL3BhZ2VzL2NvbmZpcm0tb3JkZXIvY29uZmlybS1vcmRlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/explore-container/pages/confirm-order/confirm-order.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/explore-container/pages/confirm-order/confirm-order.page.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfirmOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderPage", function() { return ConfirmOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let ConfirmOrderPage = class ConfirmOrderPage {
    constructor(navParams) {
        this.navParams = navParams;
        // componentProps can also be accessed at construction time using NavParams
        console.log(navParams.get("cartItems"));
    }
    ngOnInit() { }
};
ConfirmOrderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ConfirmOrderPage.prototype, "cartItems", void 0);
ConfirmOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-confirm-order",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/pages/confirm-order/confirm-order.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-order.page.scss */ "./src/app/explore-container/pages/confirm-order/confirm-order.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], ConfirmOrderPage);



/***/ })

}]);
//# sourceMappingURL=explore-container-pages-confirm-order-confirm-order-module-es2015.js.map