(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_forminput_forminput_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forminput/forminput.component */ "./src/app/components/forminput/forminput.component.ts");
/* harmony import */ var _components_formselect_formselect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/formselect/formselect.component */ "./src/app/components/formselect/formselect.component.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models */ "./src/app/models/index.ts");
/* harmony import */ var _services_DynamicFieldsService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/DynamicFieldsService */ "./src/app/services/DynamicFieldsService.ts");









const _c0 = ["dyn"];
const ComponentsDictionary = {
    [_models__WEBPACK_IMPORTED_MODULE_5__["FieldTypes"].Select]: _components_formselect_formselect_component__WEBPACK_IMPORTED_MODULE_3__["FormselectComponent"],
    [_models__WEBPACK_IMPORTED_MODULE_5__["FieldTypes"].Input]: _components_forminput_forminput_component__WEBPACK_IMPORTED_MODULE_2__["ForminputComponent"]
};
class AppComponent {
    constructor(formBuilder, dynamicComponentsService, fields) {
        this.formBuilder = formBuilder;
        this.dynamicComponentsService = dynamicComponentsService;
        this.fields = fields;
        this.dynamicComponentsService.setFields(this.fields);
        const group = this.fields
            .filter(f => f.type !== _models__WEBPACK_IMPORTED_MODULE_5__["FieldTypes"].Button)
            .reduce((acc, f) => (Object.assign(Object.assign({}, acc), { [f.name]: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](f.value, f.validatorOrOpts, f.asyncValidator) })), {});
        this.form = this.formBuilder.group(group);
    }
    ngAfterViewInit() {
        this.dynamicComponentsService
            .setViewRef(this.viewRef)
            .addComponents();
        this.dynamicComponentsService.bindFormControls(this.form.controls);
    }
    get jsonForm() {
        const controls = Object.entries(this.form.controls)
            .reduce((all, [key, control]) => (Object.assign(Object.assign({}, all), { [key]: {
                value: control.value,
                valid: control.valid,
                errors: control.errors
            } })), {});
        return JSON.stringify(controls, null, 2);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_DynamicFieldsService__WEBPACK_IMPORTED_MODULE_6__["DynamicComponentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_constants__WEBPACK_IMPORTED_MODULE_4__["FIELDS_INJECTION_TOKEN"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewRef = _t.first);
    } }, decls: 9, vars: 2, consts: [[1, "main"], [1, "title"], [3, "formGroup"], ["dyn", ""], [1, "variables"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jsonForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], styles: [".main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"t t\" \"f v\";\n  justify-content: space-around;\n}\n.main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  grid-area: t;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.main[_ngcontent-%COMP%]   .variables[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  grid-area: f;\n}\n.main[_ngcontent-%COMP%]   .variables[_ngcontent-%COMP%] {\n  grid-area: v;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FlZWQxby8ud29yay9zaW1iaXJzb2Z0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7RUFHQSw2QkFBQTtBQ0RKO0FER0k7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRFI7QURJSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDRlI7QURLSTtFQUNJLFlBQUE7QUNIUjtBRE1JO0VBQ0ksWUFBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogICAgJ3QgdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZiB2JztcblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZ3JpZC1hcmVhOiB0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC52YXJpYWJsZXMsIGZvcm0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgIH1cblxuICAgIGZvcm0ge1xuICAgICAgICBncmlkLWFyZWE6IGY7XG4gICAgfVxuXG4gICAgLnZhcmlhYmxlcyB7XG4gICAgICAgIGdyaWQtYXJlYTogdjtcbiAgICB9XG59IiwiLm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInQgdFwiIFwiZiB2XCI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm1haW4gLnRpdGxlIHtcbiAgZ3JpZC1hcmVhOiB0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4gLnZhcmlhYmxlcywgLm1haW4gZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWdyb3c6IDA7XG59XG4ubWFpbiBmb3JtIHtcbiAgZ3JpZC1hcmVhOiBmO1xufVxuLm1haW4gLnZhcmlhYmxlcyB7XG4gIGdyaWQtYXJlYTogdjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_DynamicFieldsService__WEBPACK_IMPORTED_MODULE_6__["DynamicComponentsService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_constants__WEBPACK_IMPORTED_MODULE_4__["FIELDS_INJECTION_TOKEN"]]
            }] }]; }, { viewRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dyn', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_forminput_forminput_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forminput/forminput.component */ "./src/app/components/forminput/forminput.component.ts");
/* harmony import */ var _components_formselect_formselect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/formselect/formselect.component */ "./src/app/components/formselect/formselect.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models */ "./src/app/models/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/components/button/button.component.ts");











const map = {
    [_models__WEBPACK_IMPORTED_MODULE_7__["FieldTypes"].Select]: _components_formselect_formselect_component__WEBPACK_IMPORTED_MODULE_4__["FormselectComponent"],
    [_models__WEBPACK_IMPORTED_MODULE_7__["FieldTypes"].Input]: _components_forminput_forminput_component__WEBPACK_IMPORTED_MODULE_3__["ForminputComponent"],
    [_models__WEBPACK_IMPORTED_MODULE_7__["FieldTypes"].Button]: _components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"]
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _constants__WEBPACK_IMPORTED_MODULE_8__["COMPONENTS_MAP_INJECTION_TOKEN"],
            useValue: map
        },
        {
            provide: _constants__WEBPACK_IMPORTED_MODULE_8__["FIELDS_INJECTION_TOKEN"],
            useValue: _constants__WEBPACK_IMPORTED_MODULE_8__["InitialFields"]
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_forminput_forminput_component__WEBPACK_IMPORTED_MODULE_3__["ForminputComponent"],
        _components_formselect_formselect_component__WEBPACK_IMPORTED_MODULE_4__["FormselectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_forminput_forminput_component__WEBPACK_IMPORTED_MODULE_3__["ForminputComponent"],
                    _components_formselect_formselect_component__WEBPACK_IMPORTED_MODULE_4__["FormselectComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ],
                providers: [
                    {
                        provide: _constants__WEBPACK_IMPORTED_MODULE_8__["COMPONENTS_MAP_INJECTION_TOKEN"],
                        useValue: map
                    },
                    {
                        provide: _constants__WEBPACK_IMPORTED_MODULE_8__["FIELDS_INJECTION_TOKEN"],
                        useValue: _constants__WEBPACK_IMPORTED_MODULE_8__["InitialFields"]
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ButtonComponent {
    constructor() {
        this.onClick = () => { };
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { data: "data", onClick: "onClick" }, decls: 2, vars: 1, consts: [[3, "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.label, "\n");
    } }, styles: ["button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FlZWQxby8ud29yay9zaW1iaXJzb2Z0L3NyYy9hcHAvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xufSIsImJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/forminput/forminput.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/forminput/forminput.component.ts ***!
  \*************************************************************/
/*! exports provided: ForminputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForminputComponent", function() { return ForminputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ForminputComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForminputComponent_div_0_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.value);
} }
class ForminputComponent {
    constructor() {
        this.onChange = (_) => { };
    }
    set value(val) {
        this._value = val;
        this.onChange(this._value);
    }
    get value() {
        return this._value;
    }
    writeValue(val) {
        this.value = val;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) { }
}
ForminputComponent.ɵfac = function ForminputComponent_Factory(t) { return new (t || ForminputComponent)(); };
ForminputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForminputComponent, selectors: [["app-forminput"]], inputs: { data: "data", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ForminputComponent),
                multi: true
            }])], decls: 1, vars: 1, consts: [["class", "input", 4, "ngIf"], [1, "input"], [3, "ngModel", "ngModelChange"]], template: function ForminputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForminputComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 4px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FlZWQxby8ud29yay9zaW1iaXJzb2Z0L3NyYy9hcHAvY29tcG9uZW50cy9mb3JtaW5wdXQvZm9ybWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm1pbnB1dC9mb3JtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtaW5wdXQvZm9ybWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogNHB4IDhweDtcbn0iLCIuaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA0cHggOHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForminputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forminput',
                templateUrl: './forminput.component.html',
                styleUrls: ['./forminput.component.scss'],
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ForminputComponent),
                        multi: true
                    }]
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/formselect/formselect.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/formselect/formselect.component.ts ***!
  \***************************************************************/
/*! exports provided: FormselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormselectComponent", function() { return FormselectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function FormselectComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 4);
} if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r1)("label", opt_r1);
} }
class FormselectComponent {
    constructor() {
        this.onChange = (_) => { };
    }
    set value(val) {
        this._value = val;
        this.onChange(this._value);
    }
    get value() {
        return this._value;
    }
    writeValue(val) {
        this.value = val;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) { }
    get options() {
        if (!this.data)
            return [];
        return this.data.options;
    }
}
FormselectComponent.ɵfac = function FormselectComponent_Factory(t) { return new (t || FormselectComponent)(); };
FormselectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormselectComponent, selectors: [["app-formselect"]], inputs: { data: "data", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FormselectComponent),
                multi: true
            }])], decls: 5, vars: 4, consts: [[1, "select"], [3, "for"], [3, "ngModel", "ngModelChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], [3, "value", "label"]], template: function FormselectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormselectComponent_Template_select_ngModelChange_3_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormselectComponent_option_4_Template, 1, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".select[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 4px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FlZWQxby8ud29yay9zaW1iaXJzb2Z0L3NyYy9hcHAvY29tcG9uZW50cy9mb3Jtc2VsZWN0L2Zvcm1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXNlbGVjdC9mb3Jtc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXNlbGVjdC9mb3Jtc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG59IiwiLnNlbGVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDRweCA4cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormselectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formselect',
                templateUrl: './formselect.component.html',
                styleUrls: ['./formselect.component.scss'],
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FormselectComponent),
                        multi: true
                    }]
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: FIELDS_INJECTION_TOKEN, COMPONENTS_MAP_INJECTION_TOKEN, InitialFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELDS_INJECTION_TOKEN", function() { return FIELDS_INJECTION_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS_MAP_INJECTION_TOKEN", function() { return COMPONENTS_MAP_INJECTION_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialFields", function() { return InitialFields; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/app/models/index.ts");


const FIELDS_INJECTION_TOKEN = 'Fields';
const COMPONENTS_MAP_INJECTION_TOKEN = 'ComponentMap';
const InitialFields = [
    {
        name: 'age-input',
        type: _models__WEBPACK_IMPORTED_MODULE_1__["FieldTypes"].Input,
        value: 'test',
        validatorOrOpts: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]
    },
    {
        name: 'day-select',
        type: _models__WEBPACK_IMPORTED_MODULE_1__["FieldTypes"].Select,
        options: [
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
            'Воскресенье',
        ],
        value: 'Понедельник',
    },
    {
        name: 'number-select',
        type: _models__WEBPACK_IMPORTED_MODULE_1__["FieldTypes"].Select,
        options: [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        label: 'Submit',
        name: 'submit-button',
        onClick: () => console.log('submit'),
        type: _models__WEBPACK_IMPORTED_MODULE_1__["FieldTypes"].Button,
    }
];


/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: FieldTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldTypes", function() { return FieldTypes; });
var FieldTypes;
(function (FieldTypes) {
    FieldTypes["Input"] = "input";
    FieldTypes["Select"] = "select";
    FieldTypes["Button"] = "button";
})(FieldTypes || (FieldTypes = {}));


/***/ }),

/***/ "./src/app/services/DynamicFieldsService.ts":
/*!**************************************************!*\
  !*** ./src/app/services/DynamicFieldsService.ts ***!
  \**************************************************/
/*! exports provided: DynamicComponentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponentsService", function() { return DynamicComponentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");





class DynamicComponentsService {
    constructor(componentMap, componentFactoryResolver) {
        this.componentMap = componentMap;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    setFields(fields) {
        this.fields = fields;
        return this;
    }
    setViewRef(viewRef) {
        this.viewRef = viewRef;
        return this;
    }
    addComponents() {
        this.viewRef.clear();
        this.components = this.fields.reduce((all, field) => {
            const component = this.componentMap[field.type];
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            const createdComponent = this.viewRef.createComponent(componentFactory);
            return Object.assign(Object.assign({}, all), { [field.name]: createdComponent });
        }, {});
    }
    bindFormControls(controls) {
        for (const field of this.fields) {
            const { name } = field, restFieldProperties = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(field, ["name"]);
            const component = this.components[name];
            const instance = component.instance;
            if (field.type !== _models__WEBPACK_IMPORTED_MODULE_3__["FieldTypes"].Button) {
                instance.registerOnChange(val => controls[name].setValue(val));
                instance.registerOnTouched(controls[name].markAsUntouched);
                instance.value = controls[name].value;
            }
            else {
                instance.onClick = field.onClick;
            }
            instance.data = restFieldProperties;
        }
    }
}
DynamicComponentsService.ɵfac = function DynamicComponentsService_Factory(t) { return new (t || DynamicComponentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_MAP_INJECTION_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"])); };
DynamicComponentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DynamicComponentsService, factory: DynamicComponentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DynamicComponentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS_MAP_INJECTION_TOKEN"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/qeed1o/.work/simbirsoft/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map