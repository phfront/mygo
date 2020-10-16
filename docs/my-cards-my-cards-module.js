(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-cards-my-cards-module"],{

/***/ "WsOd":
/*!*****************************************************!*\
  !*** ./src/app/my-cards/my-cards-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MyCardsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCardsRoutingModule", function() { return MyCardsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-cards.component */ "qMwn");





const routes = [{ path: '', component: _my_cards_component__WEBPACK_IMPORTED_MODULE_2__["MyCardsComponent"] }];
class MyCardsRoutingModule {
}
MyCardsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyCardsRoutingModule });
MyCardsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyCardsRoutingModule_Factory(t) { return new (t || MyCardsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyCardsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCardsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "qMwn":
/*!************************************************!*\
  !*** ./src/app/my-cards/my-cards.component.ts ***!
  \************************************************/
/*! exports provided: MyCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCardsComponent", function() { return MyCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MyCardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyCardsComponent.ɵfac = function MyCardsComponent_Factory(t) { return new (t || MyCardsComponent)(); };
MyCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyCardsComponent, selectors: [["app-my-cards"]], decls: 2, vars: 0, template: function MyCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-cards works 2!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWNhcmRzL215LWNhcmRzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-cards',
                templateUrl: './my-cards.component.html',
                styleUrls: ['./my-cards.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xK7Y":
/*!*********************************************!*\
  !*** ./src/app/my-cards/my-cards.module.ts ***!
  \*********************************************/
/*! exports provided: MyCardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCardsModule", function() { return MyCardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _my_cards_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-cards-routing.module */ "WsOd");
/* harmony import */ var _my_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-cards.component */ "qMwn");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");





class MyCardsModule {
}
MyCardsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyCardsModule });
MyCardsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyCardsModule_Factory(t) { return new (t || MyCardsModule)(); }, imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _my_cards_routing_module__WEBPACK_IMPORTED_MODULE_1__["MyCardsRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyCardsModule, { declarations: [_my_cards_component__WEBPACK_IMPORTED_MODULE_2__["MyCardsComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _my_cards_routing_module__WEBPACK_IMPORTED_MODULE_1__["MyCardsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCardsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_my_cards_component__WEBPACK_IMPORTED_MODULE_2__["MyCardsComponent"]],
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _my_cards_routing_module__WEBPACK_IMPORTED_MODULE_1__["MyCardsRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=my-cards-my-cards-module.js.map