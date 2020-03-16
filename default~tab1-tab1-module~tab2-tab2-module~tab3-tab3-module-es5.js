(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/components/cart/cart.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/components/cart/cart.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExploreContainerComponentsCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of items\">\n      <ion-item>\n        <ion-label>\n          <p>{{ item.menuItem.price }}</p>\n          <h2>{{ item.menuItem.name }}</h2>\n        </ion-label>\n        <!-- \n        <ion-badge slot=\"end\">{{ qty }}</ion-badge>\n\n        <ion-button fill=\"outline\" size=\"small\" (click)=\"add()\"> \n          <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"outline\" size=\"small\" (click)=\"subtract()\">\n          <ion-icon name=\"remove\"></ion-icon>\n        </ion-button> -->\n      </ion-item>\n      <ion-item-options side=\"start\">\n        <button ion-button color=\"danger\" icon-only (click)=\"removeItem(item)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </button>\n      </ion-item-options>\n      <ion-item-options side=\"end\">\n        <ion-button\n          fill=\"clear\"\n          color=\"black\"\n          icon-only\n          (click)=\"onClick(item)\"\n        >\n          <ion-icon name=\"star-outline\"></ion-icon>\n        </ion-button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button (click)=\"createOrder(cartItem)\"\n      ><ion-icon name=\"arrow-forward-outline\"></ion-icon\n    ></ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/components/explore/explore-container.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/components/explore/explore-container.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExploreContainerComponentsExploreExploreContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>\n    Explore\n    <a\n      target=\"_blank\"\n      rel=\"noopener noreferrer\"\n      href=\"https://ionicframework.com/docs/components\"\n      >UI Components</a\n    >\n  </p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/components/menu/menu.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/components/menu/menu.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExploreContainerComponentsMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" *ngFor=\"let item of menuItems\">\n  <ion-card>\n    <img src=\"{{ item.img_url }}\" />\n    <ion-card-header>\n      <ion-card-title> {{ item.name }} </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <p>{{ item.description }}</p>\n      <p>{{ item.price }}</p>\n    </ion-card-content>\n\n    <ion-button expand=\"block\" fill=\"none\" (click)=\"addToCart(item)\">\n      Add To Cart</ion-button\n    >\n  </ion-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/components/orders/orders.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/components/orders/orders.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExploreContainerComponentsOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-item>\r\n    <ion-label>\r\n      <h2>Exmaple Header</h2>\r\n      <p>Exmaple Paragraph</p>\r\n    </ion-label>\r\n  </ion-item>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/pages/confirm-order/confirm-order.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/pages/confirm-order/confirm-order.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExploreContainerPagesConfirmOrderConfirmOrderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>confirmOrder</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/explore-container/components/cart/cart.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/explore-container/components/cart/cart.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExploreContainerComponentsCartCartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  max-width: 50%;\n  max-height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvY29tcG9uZW50cy9jYXJ0L0M6XFxuZXcxXFxGb29mYS9zcmNcXGFwcFxcZXhwbG9yZS1jb250YWluZXJcXGNvbXBvbmVudHNcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuICBtYXgtaGVpZ2h0OiA1MCU7XHJcbn1cclxuIiwiaW1nIHtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/explore-container/components/cart/cart.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/explore-container/components/cart/cart.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppExploreContainerComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _pages_confirm_order_confirm_order_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../pages/confirm-order/confirm-order.page */
    "./src/app/explore-container/pages/confirm-order/confirm-order.page.ts");
    /* harmony import */


    var _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/data-service.service */
    "./src/app/services/data-service.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CartComponent = class CartComponent {
      constructor(db, modalController) {
        this.db = db;
        this.modalController = modalController;
        this.items = [];

        this.onClick = item => {
          console.info(item);
        };

        this.add = a => {
          a = this.qty++;
          return a;
        };

        this.subtract = b => {
          b = this.qty - 1;
          return b;
        };
      }

      ngOnInit() {
        this.db.getItems().valueChanges().subscribe(data => {
          this.items = data;
        }, error => console.error("error at getting items!" + error), () => console.log(" get items completed!"));
      }

      getCartItems() {
        let cartItems = this.db.getItems();
        return cartItems;
      }

      removeItem(cartItem) {
        console.warn(cartItem);
        return this.db.removeItem(cartItem);
      }

      createOrder(cartItems) {
        this.presentModal(cartItems);
      }

      presentModal(cartItems) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalController.create({
            component: _pages_confirm_order_confirm_order_page__WEBPACK_IMPORTED_MODULE_2__["ConfirmOrderPage"],
            componentProps: {
              cartItems
            }
          });
          return yield modal.present();
        });
      }

    };

    CartComponent.ctorParameters = () => [{
      type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
    }];

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: "app-cart",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/components/cart/cart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.scss */
      "./src/app/explore-container/components/cart/cart.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])], CartComponent);
    /***/
  },

  /***/
  "./src/app/explore-container/components/explore/explore-container.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/explore-container/components/explore/explore-container.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExploreContainerComponentsExploreExploreContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvY29tcG9uZW50cy9leHBsb3JlL0M6XFxuZXcxXFxGb29mYS9zcmNcXGFwcFxcZXhwbG9yZS1jb250YWluZXJcXGNvbXBvbmVudHNcXGV4cGxvcmVcXGV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9jb21wb25lbnRzL2V4cGxvcmUvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9jb21wb25lbnRzL2V4cGxvcmUvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/explore-container/components/explore/explore-container.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/explore-container/components/explore/explore-container.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ExploreContainerComponent */

  /***/
  function srcAppExploreContainerComponentsExploreExploreContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
      return ExploreContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ExploreContainerComponent = class ExploreContainerComponent {
      constructor() {}

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ExploreContainerComponent.prototype, "name", void 0);
    ExploreContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-explore-container",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./explore-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/components/explore/explore-container.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./explore-container.component.scss */
      "./src/app/explore-container/components/explore/explore-container.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ExploreContainerComponent);
    /***/
  },

  /***/
  "./src/app/explore-container/components/menu/menu.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/explore-container/components/menu/menu.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExploreContainerComponentsMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  width: 100%;\n  height: auto;\n  display: block;\n  /* remove extra space below image */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvY29tcG9uZW50cy9tZW51L0M6XFxuZXcxXFxGb29mYS9zcmNcXGFwcFxcZXhwbG9yZS1jb250YWluZXJcXGNvbXBvbmVudHNcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQWdCLG1DQUFBO0FDRWxCIiwiZmlsZSI6InNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jazsgLyogcmVtb3ZlIGV4dHJhIHNwYWNlIGJlbG93IGltYWdlICovXHJcbn1cclxuIiwiaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIHJlbW92ZSBleHRyYSBzcGFjZSBiZWxvdyBpbWFnZSAqL1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/explore-container/components/menu/menu.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/explore-container/components/menu/menu.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppExploreContainerComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/data-service.service */
    "./src/app/services/data-service.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _mock_data_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mock-data/menu */
    "./src/app/explore-container/components/mock-data/menu.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let MenuComponent = class MenuComponent {
      constructor(service, toast) {
        this.service = service;
        this.toast = toast;
        this.menuItems = _mock_data_menu__WEBPACK_IMPORTED_MODULE_3__["MENU"];
      }

      ngOnInit() {}

      presentToast(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toast.create({
            color: "dark",
            duration: 2000,
            message: "Added ".concat(name, " to cart successfully")
          });
          toast.present();
        });
      }

      addToCart(item) {
        this.cartItem = {
          id: this.id().toString(),
          menuItem: item
        };
        this.service.addItems(this.cartItem);
        this.presentToast(item.name);
      }

      id() {
        return "_" + Math.random().toString(36).substr(2, 9);
      }

    };

    MenuComponent.ctorParameters = () => [{
      type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
    }];

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-menu",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/components/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/explore-container/components/menu/menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], MenuComponent);
    /***/
  },

  /***/
  "./src/app/explore-container/components/mock-data/menu.ts":
  /*!****************************************************************!*\
    !*** ./src/app/explore-container/components/mock-data/menu.ts ***!
    \****************************************************************/

  /*! exports provided: MENU */

  /***/
  function srcAppExploreContainerComponentsMockDataMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MENU", function () {
      return MENU;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    const MENU = [{
      id: 1,
      price: "R 10.00",
      name: "Jerk Chicken",
      description: "with Macaroni and Cheese",
      img_url: "http://via.placeholder.com/500"
    }, {
      id: 3,
      price: "R 12.00",
      name: "Goat",
      description: "with Vegetables, Macaroni and Cheese",
      img_url: "http://via.placeholder.com/500"
    }, {
      id: 2,
      price: "R 9.00",
      name: "Pasta",
      description: "with Baked Chicken",
      img_url: "http://via.placeholder.com/500"
    }, {
      id: 5,
      price: "R 12.00",
      name: "Seafood Pasta",
      description: "With garlic Rolls and a salad",
      img_url: "http://via.placeholder.com/500"
    }, {
      id: 6,
      price: "R 13.00",
      name: "Oxtail",
      description: "With Dombolo and Soup",
      img_url: "http://via.placeholder.com/500"
    }];
    /***/
  },

  /***/
  "./src/app/explore-container/components/orders/orders.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/explore-container/components/orders/orders.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExploreContainerComponentsOrdersOrdersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2NvbXBvbmVudHMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/explore-container/components/orders/orders.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/explore-container/components/orders/orders.component.ts ***!
    \*************************************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppExploreContainerComponentsOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let OrdersComponent = class OrdersComponent {
      constructor() {}

      ngOnInit() {}

    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/components/orders/orders.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.component.scss */
      "./src/app/explore-container/components/orders/orders.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/explore-container/modules/explore-container.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/explore-container/modules/explore-container.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ExploreContainerComponentModule */

  /***/
  function srcAppExploreContainerModulesExploreContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
      return ExploreContainerComponentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/cart/cart.component */
    "./src/app/explore-container/components/cart/cart.component.ts");
    /* harmony import */


    var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/orders/orders.component */
    "./src/app/explore-container/components/orders/orders.component.ts");
    /* harmony import */


    var _components_explore_explore_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/explore/explore-container.component */
    "./src/app/explore-container/components/explore/explore-container.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/menu/menu.component */
    "./src/app/explore-container/components/menu/menu.component.ts");

    let ExploreContainerComponentModule = class ExploreContainerComponentModule {};
    ExploreContainerComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      declarations: [_components_explore_explore_container_component__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"], _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"]],
      exports: [_components_explore_explore_container_component__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"], _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"]]
    })], ExploreContainerComponentModule);
    /***/
  },

  /***/
  "./src/app/explore-container/pages/confirm-order/confirm-order.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/explore-container/pages/confirm-order/confirm-order.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExploreContainerPagesConfirmOrderConfirmOrderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL3BhZ2VzL2NvbmZpcm0tb3JkZXIvY29uZmlybS1vcmRlci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/explore-container/pages/confirm-order/confirm-order.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/explore-container/pages/confirm-order/confirm-order.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: ConfirmOrderPage */

  /***/
  function srcAppExploreContainerPagesConfirmOrderConfirmOrderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmOrderPage", function () {
      return ConfirmOrderPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let ConfirmOrderPage = class ConfirmOrderPage {
      constructor(navParams) {
        this.navParams = navParams; // componentProps can also be accessed at construction time using NavParams

        console.log(navParams.get("cartItems"));
      }

      ngOnInit() {}

    };

    ConfirmOrderPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ConfirmOrderPage.prototype, "cartItems", void 0);
    ConfirmOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-confirm-order",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirm-order.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/pages/confirm-order/confirm-order.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirm-order.page.scss */
      "./src/app/explore-container/pages/confirm-order/confirm-order.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], ConfirmOrderPage);
    /***/
  }
}]);
//# sourceMappingURL=default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module-es5.js.map