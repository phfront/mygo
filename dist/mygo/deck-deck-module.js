(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deck-deck-module"],{

/***/ "C0Mf":
/*!**********************************************************************!*\
  !*** ./src/app/deck/components/active-deck/active-deck.component.ts ***!
  \**********************************************************************/
/*! exports provided: ActiveDeckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDeckComponent", function() { return ActiveDeckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ActiveDeckComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ActiveDeckComponent_img_8_Template_img_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const card_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.cardHover.emit(card_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", card_r3.card_images[0].image_url_small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ActiveDeckComponent_img_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ActiveDeckComponent_img_16_Template_img_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const card_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.cardHover.emit(card_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", card_r6.card_images[0].image_url_small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ActiveDeckComponent_img_24_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ActiveDeckComponent_img_24_Template_img_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const card_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.cardHover.emit(card_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", card_r9.card_images[0].image_url_small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ActiveDeckComponent {
    constructor() {
        this.cardHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    getMainCardsInfo(cards) {
        const qtdMonsters = cards.filter((card) => card.type.includes('Monster'))
            .length;
        const qtdSpell = cards.filter((card) => card.type.includes('Spell') || card.type.includes('Skill')).length;
        const qtdTrap = cards.filter((card) => card.type.includes('Trap')).length;
        return `${cards.length} [ Monstros: ${qtdMonsters}, Magia: ${qtdSpell}, Armadilha: ${qtdTrap} ]`;
    }
    getExtraCardsInfo(cards) {
        const qtdFusion = cards.filter((card) => card.type.includes('Fusion'))
            .length;
        const qtdXYZ = cards.filter((card) => card.type.includes('Spell') || card.type.includes('XYZ')).length;
        const qtdSynchro = cards.filter((card) => card.type.includes('Synchro'))
            .length;
        const qtdLink = cards.filter((card) => card.type.includes('Link')).length;
        return `${cards.length} [ Fusão: ${qtdFusion}, XYZ: ${qtdXYZ}, Sincro: ${qtdSynchro}, Link: ${qtdLink} ]`;
    }
}
ActiveDeckComponent.ɵfac = function ActiveDeckComponent_Factory(t) { return new (t || ActiveDeckComponent)(); };
ActiveDeckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActiveDeckComponent, selectors: [["app-active-deck"]], inputs: { deck: "deck" }, outputs: { cardHover: "cardHover" }, decls: 25, vars: 6, consts: [[1, "deck-container"], [1, "deck-section"], [1, "deck-header"], [1, "deck-cards"], ["alt", "", 3, "src", "mouseenter", 4, "ngFor", "ngForOf"], ["alt", "", 3, "src", "mouseenter"]], template: function ActiveDeckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ActiveDeckComponent_img_8_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ActiveDeckComponent_img_16_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Apoio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ActiveDeckComponent_img_24_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getMainCardsInfo(ctx.deck.main));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.deck.main);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getExtraCardsInfo(ctx.deck.extra));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.deck.extra);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getMainCardsInfo(ctx.deck.side));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.deck.side);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".deck-container[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n  width: 100%;\r\n}\r\n\r\n.deck-section[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n}\r\n\r\n.deck-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 5px 5px 0px 5px;\r\n}\r\n\r\n.deck-cards[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(13, 1fr);\r\n  gap: 5px;\r\n  padding: 5px;\r\n}\r\n\r\n.deck-cards[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVjay9jb21wb25lbnRzL2FjdGl2ZS1kZWNrL2FjdGl2ZS1kZWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZGVjay9jb21wb25lbnRzL2FjdGl2ZS1kZWNrL2FjdGl2ZS1kZWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVjay1jb250YWluZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGVjay1zZWN0aW9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRlY2staGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XHJcbn1cclxuXHJcbi5kZWNrLWNhcmRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEzLCAxZnIpO1xyXG4gIGdhcDogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmRlY2stY2FyZHMgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActiveDeckComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-active-deck',
                templateUrl: './active-deck.component.html',
                styleUrls: ['./active-deck.component.css'],
            }]
    }], function () { return []; }, { deck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "cm+E":
/*!*********************************************!*\
  !*** ./src/app/deck/deck-routing.module.ts ***!
  \*********************************************/
/*! exports provided: DeckRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckRoutingModule", function() { return DeckRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _deck_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deck.component */ "kOj7");





const routes = [{ path: '', component: _deck_component__WEBPACK_IMPORTED_MODULE_2__["DeckComponent"] }];
class DeckRoutingModule {
}
DeckRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DeckRoutingModule });
DeckRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DeckRoutingModule_Factory(t) { return new (t || DeckRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeckRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "kOj7":
/*!****************************************!*\
  !*** ./src/app/deck/deck.component.ts ***!
  \****************************************/
/*! exports provided: DeckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckComponent", function() { return DeckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_ygoprodeck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/ygoprodeck.service */ "QJME");
/* harmony import */ var _shared_services_deck_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/deck.service */ "sm2E");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_card_preview_card_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/card-preview/card-preview.component */ "h3Nf");
/* harmony import */ var _components_active_deck_active_deck_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/active-deck/active-deck.component */ "C0Mf");
/* harmony import */ var _shared_components_card_search_card_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/card-search/card-search.component */ "BBkE");









const _c0 = ["inputImportDeck"];
function DeckComponent_label_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DeckComponent_label_11_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const deck_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setActiveDeck(deck_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deck_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", deck_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", deck_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", deck_r4.name, " ");
} }
function DeckComponent_app_active_deck_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-active-deck", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cardHover", function DeckComponent_app_active_deck_14_Template_app_active_deck_cardHover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.cardPreview = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deck", ctx_r2.activeDeck);
} }
function DeckComponent_app_card_search_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card-search", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cardHover", function DeckComponent_app_card_search_15_Template_app_card_search_cardHover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.cardPreview = $event; })("cardClick", function DeckComponent_app_card_search_15_Template_app_card_search_cardClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.modalCardSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DeckComponent {
    constructor(ygoprodeckService, deckService) {
        this.ygoprodeckService = ygoprodeckService;
        this.deckService = deckService;
        this.modalSearch = false;
        this.decks = [];
        this.newDeckName = '';
    }
    ngOnInit() {
        const mock = [
            '#created by pedroatem',
            '#main',
            '46986414',
            '46986415',
            '46986416',
            '40737112',
            '71703785',
            '71703785',
            '71703785',
            '35191415',
            '35191415',
            '35191415',
            '30603688',
            '38033125',
            '7084129',
            '7084129',
            '71696014',
            '71696014',
            '1784686',
            '2314238',
            '12580477',
            '49702428',
            '55144522',
            '75500286',
            '82404868',
            '82404868',
            '83764719',
            '98645731',
            '111280',
            '23020408',
            '41735184',
            '59514116',
            '69542930',
            '73616671',
            '75190122',
            '47222536',
            '47222536',
            '68462976',
            '7922915',
            '7922915',
            '9287078',
            '9287078',
            '16964437',
            '32754886',
            '44095762',
            '62279055',
            '81210420',
            '48680970',
            '48680970',
            '48680970',
            '54175023',
            '78625592',
            '86509711',
            '89448140',
            '#extra',
            '41721210',
            '75380687',
            '98502114',
            '50237654',
            '73452089',
            '43892408',
            '39030163',
            '96471335',
            '85551711',
            '!side',
            '38033121',
            '38033123',
            '82627406',
            '7198399',
            '56132807',
            '34318086',
            '20747792',
            '97631303',
            '49941059',
            '47222536',
            '7922915',
            '',
        ];
        this.decks.push(this.deckService.ydk2Deck('Dark Magician', mock));
        this.activeDeck = this.decks[0];
        this.cardPreview = {
            id: 97631303,
            name: 'Almas dos Magos',
            type: 'Effect Monster',
            desc: 'Você pode enviar até 2 Magias/Armadilhas da sua mão e/ou do campo para o Cemitério; compre esse número de cards. Se este card estiver na sua mão: você pode enviar 1 monstro Mago de Nível 6 ou mais do seu Deck para o Cemitério e, depois, ative 1 desses efeitos;\r\n● Invoque este card por Invocação-Especial.\r\n● Envie este card para o Cemitério e, depois, você pode Invocar por Invocação-Especial 1 "Mago Negro" ou 1 "Pequena Maga Negra" do seu Cemitério.\r\nVocê só pode usar cada efeito de "Almas dos Magos" uma vez por turno.\n',
            atk: 0,
            def: 0,
            level: 1,
            scale: 0,
            race: 'Spellcaster',
            attribute: 'DARK',
            name_en: "Magicians' Souls",
            archetype: 'Dark Magician',
            card_sets: [
                {
                    set_name: 'Legendary Duelists: Magical Hero',
                    set_code: 'LED6-EN002',
                    set_rarity: 'Ultra Rare',
                    set_rarity_code: '(UR)',
                    set_price: '93.52',
                },
            ],
            card_images: [
                {
                    id: 97631303,
                    image_url: 'https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg',
                    image_url_small: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg',
                },
                {
                    id: 97631303,
                    image_url: 'https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg',
                    image_url_small: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg',
                },
                {
                    id: 97631303,
                    image_url: 'https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg',
                    image_url_small: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg',
                },
                {
                    id: 97631303,
                    image_url: 'https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg',
                    image_url_small: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg',
                },
                {
                    id: 97631303,
                    image_url: 'https://storage.googleapis.com/ygoprodeck.com/pics/97631303.jpg',
                    image_url_small: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/97631303.jpg',
                },
            ],
            card_prices: [
                {
                    cardmarket_price: '56.62',
                    tcgplayer_price: '89.72',
                    ebay_price: '99.99',
                    amazon_price: '129.59',
                    coolstuffinc_price: '89.99',
                },
            ],
        };
    }
    modalCardSelect(card) {
        console.log(card);
    }
    openModal() {
        this.modalSearch = true;
    }
    setActiveDeck(deck) {
        this.activeDeck = deck;
    }
    addDeck() {
        this.decks.push({
            name: this.newDeckName,
            createdBy: '',
            main: [],
            extra: [],
            side: [],
        });
        this.newDeckName = '';
    }
    importDeck() {
        this.inputImportDeck.nativeElement.click();
    }
    handleInputDeck(files) {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.decks.push(this.deckService.ydk2Deck(files[0].name.replace('.ydk', ''), fileReader.result.split('\n')));
            this.activeDeck = this.decks[0];
        };
        fileReader.readAsText(files[0]);
    }
}
DeckComponent.ɵfac = function DeckComponent_Factory(t) { return new (t || DeckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_ygoprodeck_service__WEBPACK_IMPORTED_MODULE_1__["YgoprodeckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_deck_service__WEBPACK_IMPORTED_MODULE_2__["DeckService"])); };
DeckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeckComponent, selectors: [["app-deck"]], viewQuery: function DeckComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputImportDeck = _t.first);
    } }, decls: 16, vars: 5, consts: [["type", "text", "placeholder", "Nome do novo deck", 3, "ngModel", "ngModelChange"], [3, "click"], ["type", "file", "name", "", 2, "display", "none", 3, "change"], ["inputImportDeck", ""], [3, "for", 4, "ngFor", "ngForOf"], [1, "active-deck"], [1, "active-deck-preview", 3, "card"], ["class", "active-deck-cards", 3, "deck", "cardHover", 4, "ngIf"], ["class", "active-deck-search", 3, "cardHover", "cardClick", 4, "ngIf"], [3, "for"], ["type", "radio", "name", "deck-radio", 3, "id", "change"], [1, "active-deck-cards", 3, "deck", "cardHover"], [1, "active-deck-search", 3, "cardHover", "cardClick"]], template: function DeckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeckComponent_Template_input_ngModelChange_1_listener($event) { return ctx.newDeckName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeckComponent_Template_button_click_2_listener() { return ctx.addDeck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Novo Deck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DeckComponent_Template_input_change_5_listener($event) { return ctx.handleInputDeck($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeckComponent_Template_button_click_7_listener() { return ctx.importDeck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Importar Deck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DeckComponent_label_11_Template, 3, 3, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-card-preview", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DeckComponent_app_active_deck_14_Template, 1, 1, "app-active-deck", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DeckComponent_app_card_search_15_Template, 1, 0, "app-card-search", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newDeckName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.decks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx.cardPreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeDeck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeDeck);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_components_card_preview_card_preview_component__WEBPACK_IMPORTED_MODULE_5__["CardPreviewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_active_deck_active_deck_component__WEBPACK_IMPORTED_MODULE_6__["ActiveDeckComponent"], _shared_components_card_search_card_search_component__WEBPACK_IMPORTED_MODULE_7__["CardSearchComponent"]], styles: [".active-deck[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.active-deck-preview[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n\r\n.active-deck-cards[_ngcontent-%COMP%], .active-deck-search[_ngcontent-%COMP%] {\r\n  width: calc(50% - 150px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVjay9kZWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvZGVjay9kZWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLWRlY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hY3RpdmUtZGVjay1wcmV2aWV3IHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUtZGVjay1jYXJkcyxcclxuLmFjdGl2ZS1kZWNrLXNlYXJjaCB7XHJcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTUwcHgpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deck',
                templateUrl: './deck.component.html',
                styleUrls: ['./deck.component.css'],
            }]
    }], function () { return [{ type: _shared_services_ygoprodeck_service__WEBPACK_IMPORTED_MODULE_1__["YgoprodeckService"] }, { type: _shared_services_deck_service__WEBPACK_IMPORTED_MODULE_2__["DeckService"] }]; }, { inputImportDeck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputImportDeck']
        }] }); })();


/***/ }),

/***/ "qLZO":
/*!*************************************!*\
  !*** ./src/app/deck/deck.module.ts ***!
  \*************************************/
/*! exports provided: DeckModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckModule", function() { return DeckModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _deck_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deck-routing.module */ "cm+E");
/* harmony import */ var _deck_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deck.component */ "kOj7");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _components_active_deck_active_deck_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/active-deck/active-deck.component */ "C0Mf");






class DeckModule {
}
DeckModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DeckModule });
DeckModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DeckModule_Factory(t) { return new (t || DeckModule)(); }, imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _deck_routing_module__WEBPACK_IMPORTED_MODULE_1__["DeckRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeckModule, { declarations: [_deck_component__WEBPACK_IMPORTED_MODULE_2__["DeckComponent"], _components_active_deck_active_deck_component__WEBPACK_IMPORTED_MODULE_4__["ActiveDeckComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _deck_routing_module__WEBPACK_IMPORTED_MODULE_1__["DeckRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_deck_component__WEBPACK_IMPORTED_MODULE_2__["DeckComponent"], _components_active_deck_active_deck_component__WEBPACK_IMPORTED_MODULE_4__["ActiveDeckComponent"]],
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _deck_routing_module__WEBPACK_IMPORTED_MODULE_1__["DeckRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=deck-deck-module.js.map