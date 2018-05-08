webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <h1>\n        {{coursename}}\n    </h1>\n</div>\n\n<div class=\"container\">\n   <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.coursename = "Math 23A";
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proof_list_proof_list_component__ = __webpack_require__("./src/app/proof-list/proof-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__ = __webpack_require__("./src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__proof_proof_component__ = __webpack_require__("./src/app/proof/proof.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__newproof_newproof_component__ = __webpack_require__("./src/app/newproof/newproof.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__newuser_newuser_component__ = __webpack_require__("./src/app/newuser/newuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__userdashboard_userdashboard_component__ = __webpack_require__("./src/app/userdashboard/userdashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__presentation_presentation_component__ = __webpack_require__("./src/app/presentation/presentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__newpresentation_newpresentation_component__ = __webpack_require__("./src/app/newpresentation/newpresentation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'proofs', component: __WEBPACK_IMPORTED_MODULE_6__proof_list_proof_list_component__["a" /* ProofListComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__["a" /* UserListComponent */] },
    { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_12__userdashboard_userdashboard_component__["a" /* UserDashboardComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__proof_proof_component__["a" /* ProofComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_6__proof_list_proof_list_component__["a" /* ProofListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__newproof_newproof_component__["a" /* NewProofComponent */],
                __WEBPACK_IMPORTED_MODULE_11__newuser_newuser_component__["a" /* NewUserComponent */],
                __WEBPACK_IMPORTED_MODULE_12__userdashboard_userdashboard_component__["a" /* UserDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__presentation_presentation_component__["a" /* PresentationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__newpresentation_newpresentation_component__["a" /* NewPresentationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/newpresentation/newpresentation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/newpresentation/newpresentation.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"save(form)\">\n\n    <div style=\"display: inline-block; vertical-align: top; padding: 1em;\">\n        <label for=\"proofField\">Proof:</label>\n        <select name=\"proofField\" [(ngModel)]=\"newPresentation.proofID\">\n          <option *ngFor=\"let p of proofs\" [ngValue]=\"p._id\">\n            {{p.name}}\n          </option>\n        </select>\n    </div>\n\n    <div style=\"display: inline-block; vertical-align: top; padding: 1em;\">\n        <label for=\"nameField\">Presented To:</label>\n        <select name=\"nameField\" [(ngModel)]=\"newPresentation.listenerID\">\n          <option *ngFor=\"let ql of qualifiedListeners\" [ngValue]=\"ql._id\">\n            {{ql.email}}\n          </option>\n        </select>\n    </div>\n\n\n    <div style=\"display: inline-block; vertical-align: top; padding: 1em;\">\n        <button type=\"submit\">\n          Save\n        </button>\n        <button (click)=\"cancelNew(form)\">Cancel</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/newpresentation/newpresentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPresentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proofs_service__ = __webpack_require__("./src/app/proofs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__presentations_service__ = __webpack_require__("./src/app/presentations.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewPresentationComponent = /** @class */ (function () {
    function NewPresentationComponent(proofService, presentationService) {
        this.proofService = proofService;
        this.presentationService = presentationService;
        // When a new presentation is created, send event to parent to refresh list
        this.newPres = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.cancelNewPres = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    NewPresentationComponent.prototype.ngOnInit = function () {
        // log the provided userID as the presenter
        this.newPresentation = { 'presenterID': this.user._id };
    };
    // html form triggers this event via submit
    NewPresentationComponent.prototype.save = function (form) {
        var _this = this;
        if (this.newPresentation.listenerID && this.newPresentation.proofID) {
            // add presentation, then notify parent of updated list
            this.presentationService
                .addPresentation(this.newPresentation.presenterID, this.newPresentation.listenerID, this.newPresentation.proofID)
                .subscribe(function (pres) {
                _this.newPres.emit();
                form.reset();
            });
        }
    };
    // html form triggers this event via Cancel button
    NewPresentationComponent.prototype.cancelNew = function (form) {
        this.cancelNewPres.emit();
        form.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NewPresentationComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NewPresentationComponent.prototype, "proofs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NewPresentationComponent.prototype, "qualifiedListeners", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NewPresentationComponent.prototype, "newPres", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NewPresentationComponent.prototype, "cancelNewPres", void 0);
    NewPresentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newpresentation',
            template: __webpack_require__("./src/app/newpresentation/newpresentation.component.html"),
            styles: [__webpack_require__("./src/app/newpresentation/newpresentation.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__proofs_service__["a" /* ProofService */], __WEBPACK_IMPORTED_MODULE_2__presentations_service__["a" /* PresentationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__proofs_service__["a" /* ProofService */],
            __WEBPACK_IMPORTED_MODULE_2__presentations_service__["a" /* PresentationService */]])
    ], NewPresentationComponent);
    return NewPresentationComponent;
}());



/***/ }),

/***/ "./src/app/newproof/newproof.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/newproof/newproof.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"save(form)\">\n    <div style=\"display: inline-block; \n                vertical-align: top; padding: 1em;\">            \n        <button type=\"submit\">Save</button>\n        <button (click)=\"cancelNew(form)\">Cancel</button>\n    </div>\n\n    <div style=\"display: inline-block; vertical-align: top; padding: 1em;\">\n      <div>\n        <label for=\"nameField\">Name:</label>\n        <input name=\"nameField\" [(ngModel)]=\"proof.name\">\n      </div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/newproof/newproof.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProofComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proofs_service__ = __webpack_require__("./src/app/proofs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewProofComponent = /** @class */ (function () {
    function NewProofComponent(proofService) {
        this.proofService = proofService;
        // When a new proof is created, send event to parent to refresh list
        this.newProof = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.cancelNewProof = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // proof object, bound to the form fields
        this.proof = {};
    }
    NewProofComponent.prototype.ngOnInit = function () { };
    // html form triggers this event via submit
    NewProofComponent.prototype.save = function (form) {
        var _this = this;
        // add proof, then notify parent of updated list
        this.proofService.addProof(this.proof.name)
            .subscribe(function (proof) {
            _this.newProof.emit();
            form.reset();
        });
    };
    // html form triggers this event via Cancel button
    NewProofComponent.prototype.cancelNew = function (form) {
        this.cancelNewProof.emit();
        form.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NewProofComponent.prototype, "newProof", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NewProofComponent.prototype, "cancelNewProof", void 0);
    NewProofComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newproof',
            template: __webpack_require__("./src/app/newproof/newproof.component.html"),
            styles: [__webpack_require__("./src/app/newproof/newproof.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__proofs_service__["a" /* ProofService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__proofs_service__["a" /* ProofService */]])
    ], NewProofComponent);
    return NewProofComponent;
}());



/***/ }),

/***/ "./src/app/newuser/newuser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/newuser/newuser.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"save(form)\">\n    <div style=\"display: inline-block; \n                vertical-align: top; padding: 1em;\">            \n        <button type=\"submit\">Save</button>\n        <button (click)=\"cancelNewUser(form)\">Cancel</button>\n    </div>\n\n    <div style=\"display: inline-block; vertical-align: top; padding: 1em;\">\n      <div>\n        <label for=\"statusField\">Status:</label>\n        <input name=\"statusField\" placeholder=\"Head, TA, or Student\" [(ngModel)]=\"user.status\">\n      </div>\n      <div>\n        <label for=\"emailField\">Email:</label>\n        <input name=\"emailField\"  [(ngModel)]=\"user.email\">\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/newuser/newuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("./src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(userService) {
        this.userService = userService;
        // When a new user is created, send event to parent to refresh list
        this.newUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.cancelNewUserEv = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // user object, bound to the form fields
        this.user = {};
    }
    NewUserComponent.prototype.ngOnInit = function () { };
    // newuser html form triggers this event via submit
    NewUserComponent.prototype.save = function (form) {
        var _this = this;
        // add user, then notify parent of updated list
        this.userService.addUser(this.user.email, this.user.status)
            .subscribe(function (user) {
            _this.newUser.emit();
            form.reset();
        });
    };
    // html form triggers this event via Cancel button
    NewUserComponent.prototype.cancelNewUser = function (form) {
        this.cancelNewUserEv.emit();
        form.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NewUserComponent.prototype, "newUser", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NewUserComponent.prototype, "cancelNewUserEv", void 0);
    NewUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newuser',
            template: __webpack_require__("./src/app/newuser/newuser.component.html"),
            styles: [__webpack_require__("./src/app/newuser/newuser.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UserService */]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/presentation/presentation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/presentation/presentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mode == 'listened_pending'\">\n  <div style=\"display: inline-block; vertical-align: top; padding: .5em;\">  \n    <button (click)=\"confirmListened('confirmed')\">Confirm</button>\n    <button (click)=\"confirmListened('denied')\">Deny</button>\n  </div>\n  <div style=\"display: inline-block; vertical-align: top; padding: .5em;\">\n    {{presentation.presenter.email}}, {{presentation.proof.name}}  <i>({{presentation.date_presented.substring(0, 10)}})</i>\n  </div>\n  <br>\n</div>\n\n<div *ngIf=\"mode == 'presented_denied'\">\n  <div style=\"display: inline-block; vertical-align: top; padding: .5em;\">  \n    <button (click)=\"delete()\">Delete</button>\n  </div>\n  <div style=\"display: inline-block; vertical-align: top; padding: .5em;\">\n    {{presentation.proof.name}} presented to {{presentation.listener.email}} <i>({{presentation.date_presented.substring(0, 10)}})</i><br>\n  </div>\n  <br>\n</div>\n\n<div *ngIf=\"mode == 'presented_pending'\">\n  <div style=\"display: inline-block; vertical-align: top; padding: .5em;\">  \n    <button (click)=\"delete()\">Delete</button>\n  </div>\n  <div style=\"display: inline-block; vertical-align: top; padding: .5em;\">\n  {{presentation.proof.name}} presented to {{presentation.listener.email}} <i>({{presentation.date_presented.substring(0, 10)}})</i>\n  </div>\n  <br>\n</div>\n\n<div *ngIf=\"mode == 'presented_confirmed'\">\n  <b>{{presentation.proof.name}}</b> to {{presentation.listener.email}} <i>({{presentation.date_presented.substring(0, 10)}})</i><br>\n</div>\n\n<div *ngIf=\"mode == 'listened_confirmed'\">\n  {{presentation.presenter.email}}, <b>{{presentation.proof.name}}</b>  <i>({{presentation.date_presented.substring(0, 10)}})</i><br>\n</div>"

/***/ }),

/***/ "./src/app/presentation/presentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__presentations_service__ = __webpack_require__("./src/app/presentations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("./src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proofs_service__ = __webpack_require__("./src/app/proofs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PresentationComponent = /** @class */ (function () {
    function PresentationComponent(presentationService, userService, proofService) {
        this.presentationService = presentationService;
        this.userService = userService;
        this.proofService = proofService;
        // when a listening has been confirmed, will
        // need to update both pending and confirmed lists
        this.confirmed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.deleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PresentationComponent.prototype.ngOnInit = function () { };
    PresentationComponent.prototype.confirmListened = function (response) {
        var _this = this;
        this.presentationService
            .updatePresentation(this.presentation._id, response)
            .subscribe(function (result) {
            _this.confirmed.emit();
        });
    };
    PresentationComponent.prototype.delete = function () {
        var _this = this;
        this.presentationService
            .deletePresentation(this.presentation._id)
            .subscribe(function (result) {
            _this.deleted.emit();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PresentationComponent.prototype, "presentation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PresentationComponent.prototype, "mode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PresentationComponent.prototype, "confirmed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PresentationComponent.prototype, "deleted", void 0);
    PresentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-presentation',
            template: __webpack_require__("./src/app/presentation/presentation.component.html"),
            styles: [__webpack_require__("./src/app/presentation/presentation.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__presentations_service__["a" /* PresentationService */], __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__proofs_service__["a" /* ProofService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__presentations_service__["a" /* PresentationService */],
            __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__proofs_service__["a" /* ProofService */]])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/presentations.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PresentationService = /** @class */ (function () {
    function PresentationService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    PresentationService.prototype.listPresentations = function () {
        return this.http.get(this.apiUrl + "/presentations");
    };
    PresentationService.prototype.getPresentedPending = function (id) {
        return this.http.get(this.apiUrl
            + "/presentations/presentedpending/user/" + id);
    };
    PresentationService.prototype.getPresentedConfirmed = function (id) {
        return this.http.get(this.apiUrl
            + "/presentations/presentedconfirmed/user/" + id);
    };
    PresentationService.prototype.getPresentedDenied = function (id) {
        return this.http.get(this.apiUrl
            + "/presentations/presenteddenied/user/" + id);
    };
    PresentationService.prototype.getListenedPending = function (id) {
        return this.http.get(this.apiUrl
            + "/presentations/listenedpending/user/" + id);
    };
    PresentationService.prototype.getListenedConfirmed = function (id) {
        return this.http.get(this.apiUrl
            + "/presentations/listenedconfirmed/user/" + id);
    };
    PresentationService.prototype.getPresentation = function (id) {
        return this.http.get(this.apiUrl + "/presentations/" + id);
    };
    PresentationService.prototype.addPresentation = function (presenterID, listenerID, proofID) {
        return this.http.post(this.apiUrl + "/presentations", { 'presenterID': presenterID,
            'listenerID': listenerID,
            'proofID': proofID });
    };
    PresentationService.prototype.updatePresentation = function (id, status) {
        return this.http.put(this.apiUrl + "/presentations/" + id, { 'status': status });
    };
    PresentationService.prototype.deletePresentation = function (id) {
        return this.http.delete(this.apiUrl + "/presentations/" + id);
    };
    PresentationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PresentationService);
    return PresentationService;
}());



/***/ }),

/***/ "./src/app/proof-list/proof-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/proof-list/proof-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Proof List</h2>\n\n<div *ngIf=\"numProofs; else noneTemplate\">\n\n    <app-proof *ngFor='let proofObj of proofList'\n                [proof] = \"proofObj\"\n                (deletedProof) = \"updateProofList()\">\n    </app-proof>\n\n</div>\n\n<ng-template #noneTemplate>None</ng-template>\n\n<div *ngIf=\"!adding\">\n    <button (click)=\"setAddingMode(true)\">Add New Proof</button>\n</div>\n\n<div *ngIf=\"adding\">\n    <app-newproof (newProof)=\"updateProofList()\"\n                  (cancelNewProof)= \"setAddingMode(false)\">\n    </app-newproof>\n</div>\n\n<p><a routerLink=\"/users\">To Class List</a></p>"

/***/ }),

/***/ "./src/app/proof-list/proof-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProofListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proofs_service__ = __webpack_require__("./src/app/proofs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProofListComponent = /** @class */ (function () {
    function ProofListComponent(proofService) {
        this.proofService = proofService;
        this.proofList = null;
        this.numProofs = 0;
        this.adding = false;
    }
    ProofListComponent.prototype.ngOnInit = function () {
        this.updateProofList();
    };
    ProofListComponent.prototype.setAddingMode = function (mode) {
        this.adding = (mode ? true : false);
    };
    ProofListComponent.prototype.updateProofList = function () {
        var _this = this;
        this.proofService.listProofs().subscribe(function (proofs) {
            _this.proofList = proofs;
            _this.proofList.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                else {
                    return 1;
                }
            });
            _this.numProofs = _this.proofList.length;
        });
        this.setAddingMode(false);
    };
    ProofListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-proof-list',
            template: __webpack_require__("./src/app/proof-list/proof-list.component.html"),
            styles: [__webpack_require__("./src/app/proof-list/proof-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__proofs_service__["a" /* ProofService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__proofs_service__["a" /* ProofService */]])
    ], ProofListComponent);
    return ProofListComponent;
}());



/***/ }),

/***/ "./src/app/proof/proof.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/proof/proof.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!editing\">\n  <div style=\"display: inline-block; vertical-align: top; padding: 1em;\">\n    <button (click)=\"setEditMode(true)\">Edit</button>\n    <button (click)=\"deleteProof()\">Delete</button>\n  </div>\n  <div style=\"display: inline-block; vertical-align: top; padding: 1em;\">\n    <b>{{ proof.name }}</b>\n  </div>\n  <div style=\"display: inline-block; vertical-align: top; padding: 1em;\">\n      <div>{{ proof.qualifiedListeners.length }} listeners \n        <span *ngIf=\"showListeners\">\n          <button (click)=\"setShowListenersMode(false)\">Hide</button>\n        </span>\n        <span *ngIf=\"!showListeners\">\n          <button (click)=\"setShowListenersMode(true)\">Show</button>\n        </span>\n      </div>\n  </div>\n  <div *ngIf=\"showListeners\" \n        style=\"display: inline-block; vertical-align: top; padding: 1em;\">\n      <div *ngFor=\"let ql of proof.qualifiedListeners\">\n        <a routerLink=\"/users/{{ql._id}}\">{{ql.email}}</a>\n        <span *ngIf=\"ql.availability\">\n          availability: <i>{{ql.availability}}</i>\n        </span>\n      </div>\n  </div>\n</div>\n\n<div *ngIf=\"editing\">\n  <form #form=\"ngForm\">\n    <div class=\"form-group\">\n      <div style=\"display: inline-block; vertical-align: top; padding: 1em;\">            \n        <div><button (click)=\"updateProof(form.value)\">Save</button>\n             <button (click)=\"setEditMode(false)\">Cancel</button>\n        </div>\n      </div>\n      <div style=\"display: inline-block; vertical-align: top; padding: 1em;\">\n          <label for=\"nameField\">Proof Name:</label>\n          <input #name name=\"nameField\" [ngModel]=\"proof.name\">\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/proof/proof.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProofComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proofs_service__ = __webpack_require__("./src/app/proofs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProofComponent = /** @class */ (function () {
    function ProofComponent(proofService) {
        this.proofService = proofService;
        // When a proof is deleted, send event to parent to refresh list
        this.deletedProof = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editing = false;
        this.showListeners = false;
    }
    ProofComponent.prototype.ngOnInit = function () {
        this.proof.qualifiedListeners.sort(function (a, b) {
            if (a.email < b.email) {
                return -1;
            }
            else {
                return 1;
            }
        });
    };
    ProofComponent.prototype.setEditMode = function (mode) {
        this.editing = (mode ? true : false);
    };
    ProofComponent.prototype.setShowListenersMode = function (mode) {
        this.showListeners = (mode ? true : false);
    };
    ProofComponent.prototype.updateProof = function (obj) {
        var _this = this;
        this.proof.name = obj.nameField;
        this.proofService.updateProof(this.proof._id, this.proof.name)
            .subscribe(function (result) {
            _this.setEditMode(false);
        });
    };
    // deletes proof using ProofService, notifies parent component
    ProofComponent.prototype.deleteProof = function () {
        var _this = this;
        this.proofService.deleteProof(this.proof._id)
            .subscribe(function (result) {
            _this.deletedProof.emit();
            _this.setEditMode(false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProofComponent.prototype, "proof", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ProofComponent.prototype, "deletedProof", void 0);
    ProofComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-proof',
            template: __webpack_require__("./src/app/proof/proof.component.html"),
            styles: [__webpack_require__("./src/app/proof/proof.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__proofs_service__["a" /* ProofService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__proofs_service__["a" /* ProofService */]])
    ], ProofComponent);
    return ProofComponent;
}());



/***/ }),

/***/ "./src/app/proofs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProofService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProofService = /** @class */ (function () {
    function ProofService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    ProofService.prototype.listProofs = function () {
        return this.http.get(this.apiUrl + "/proofs");
    };
    ProofService.prototype.getProof = function (id) {
        return this.http.get(this.apiUrl + "/proofs/" + id);
    };
    ProofService.prototype.addProof = function (name) {
        return this.http.post(this.apiUrl + "/proofs", { 'proof': name });
    };
    ProofService.prototype.updateProof = function (id, name) {
        return this.http.put(this.apiUrl + "/proofs/" + id, { 'id': id, 'proof': name });
    };
    ProofService.prototype.deleteProof = function (id) {
        return this.http.delete(this.apiUrl + "/proofs/" + id);
    };
    ProofService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProofService);
    return ProofService;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Class Members</h2>\n\n<div *ngIf=\"numUsers; else noneTemplate\">\n\n    <app-user *ngFor='let userObj of userList'\n                [user] = \"userObj\"\n                (deletedUser) = \"updateUserList()\">\n    </app-user>\n\n</div>\n\n<ng-template #noneTemplate>None</ng-template>\n\n<div *ngIf=\"!adding\">\n    <button (click)=\"setAddUserMode(true)\">Add New User</button>\n</div>\n\n<div *ngIf=\"adding\">\n    <app-newuser (newUser)=\"updateUserList()\"\n                 (cancelNewUserEv)= \"setAddUserMode(false)\">\n    </app-newuser>\n</div>"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("./src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.userList = null;
        this.numUsers = 0;
        this.adding = false;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.updateUserList();
    };
    UserListComponent.prototype.setAddUserMode = function (mode) {
        this.adding = (mode ? true : false);
    };
    UserListComponent.prototype.updateUserList = function () {
        var _this = this;
        this.userService.listUsers().subscribe(function (users) {
            _this.userList = users;
            _this.userList.sort(function (a, b) {
                if (a.status == b.status) {
                    if (a.email.substring(0, a.email.lastIndexOf("@")) < b.email.substring(0, b.email.lastIndexOf("@"))) {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                }
                else if (a.status == "Head") {
                    return -1;
                }
                else if (b.status == "Head") {
                    return 1;
                }
                else if (a.status == "TA") {
                    return -1;
                }
                else if (b.status == "TA") {
                    return 1;
                }
            });
            _this.numUsers = _this.userList.length;
        });
        this.setAddUserMode(false);
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__("./src/app/user-list/user-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UserService */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"!editing\">\n\n  <div style=\"display: inline-block; vertical-align: top; padding: .5em;\">\n    <button (click)=\"setEditMode(true)\">Edit</button>\n    <button (click)=\"deleteUser()\">Delete</button>\n  </div>\n\n  <div style=\"display: inline-block; vertical-align: top; padding: .5em;\">\n    <div>{{ user.status }}</div>\n    <div><b><a routerLink=\"/users/{{user._id}}\">{{ user.email }}</a></b></div>\n    <div>Availability: {{ user.availability }}</div>\n  </div>\n\n</div>\n\n<div *ngIf=\"editing\">\n  <form #form=\"ngForm\">\n    <div class=\"form-group\">\n      <div style=\"display: inline-block; vertical-align: top; padding: .5em;\">            \n        <div><button (click)=\"updateUser(form.value)\">Save</button>\n              <button (click)=\"setEditMode(false)\">Cancel</button>\n        </div>\n      </div>\n      <div style=\"display: inline-block; vertical-align: top; padding: .5em;\">\n        <div>\n          <label for=\"statusField\">Status:</label>\n          <input #status name=\"statusField\" [ngModel]=\"user.status\">\n        </div>\n        <div>\n          <label for=\"emailField\">Email:</label>\n          <input #email name=\"emailField\" [ngModel]=\"user.email\">\n        </div>\n        <div>\n          <label for=\"availabilityField\">Availability:</label>\n          <input #availability name=\"availabilityField\" [ngModel]=\"user.availability\">\n        </div>\n      </div>\n    </div>\n    <br>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("./src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
        // When a user is deleted, send event to parent to refresh list
        this.deletedUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editing = false;
    }
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent.prototype.setEditMode = function (mode) {
        this.editing = (mode ? true : false);
    };
    UserComponent.prototype.updateUser = function (obj) {
        var _this = this;
        this.user.status = obj.statusField;
        this.user.email = obj.emailField;
        this.user.availability = obj.availabilityField;
        this.userService.updateUser(this.user._id, this.user)
            .subscribe(function (result) {
            _this.setEditMode(false);
        });
    };
    // deletes user using UserService, notifies parent component
    UserComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser(this.user._id)
            .subscribe(function (result) {
            _this.deletedUser.emit();
            _this.setEditMode(false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "deletedUser", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UserService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/userdashboard/userdashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userdashboard/userdashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Hello, {{ user.email }}</h2>\n\n<div *ngIf=\"user.status == 'Student'; else staffTemplate\">\n    <h2>Your Proofs</h2>\n    \n    <h3>Register a newly presented proof</h3>\n    \n    <div *ngIf=\"!adding\">\n        <button (click)=\"setAdding(true)\">Register New Presentation</button>\n    </div>\n    \n    <div *ngIf=\"adding\">\n        <app-newpresentation [user]=\"user\" \n                             [proofs]=\"proofs\"\n                             [qualifiedListeners]=\"staff\"\n                            (newPres)=\"updatePresented()\"\n                            (cancelNewPres)= \"setAdding(false)\">\n        </app-newpresentation>\n    </div>\n</div>\n\n<div *ngIf=\"num_listened_pending\">\n    <h3>Confirm listening</h3>\n\n    <app-presentation *ngFor='let presObj of listened_pending'\n                [presentation] = \"presObj\"\n                mode = \"listened_pending\" \n                (confirmed)=\"updateListened()\">\n    </app-presentation>\n\n</div>\n\n<div *ngIf=\"user.status == 'Student'\">\n\n    <div *ngIf=\"num_presented_denied\">\n        <h3>Denied Credit</h3>\n        <app-presentation *ngFor='let presObj of presented_denied'\n                    [presentation] = \"presObj\"\n                    mode = \"presented_denied\"\n                    (deleted)=\"updatePresentedDenied()\">\n        </app-presentation>\n    \n    </div>\n\n    <div *ngIf=\"num_presented_pending\">\n        <h3>Presented <i>(pending confirmation)</i></h3>\n    \n        <app-presentation *ngFor='let presObj of presented_pending'\n                    [presentation] = \"presObj\"\n                    mode = \"presented_pending\"\n                    (deleted)=\"updatePresentedPending()\">\n        </app-presentation>\n    \n    </div>\n    \n    <h3>Presented</h3>\n    <div *ngIf=\"num_presented_confirmed; else noneTemplate\">\n    \n        <app-presentation *ngFor='let presObj of presented_confirmed'\n                    [presentation] = \"presObj\"\n                    mode = \"presented_confirmed\">\n        </app-presentation>\n    \n    </div>\n</div>\n\n<h3>Listened to</h3>\n<div *ngIf=\"num_listened_confirmed; else noneTemplate\">\n\n    <app-presentation *ngFor='let presObj of listened_confirmed'\n                [presentation] = \"presObj\"\n                mode = \"listened_confirmed\">\n    </app-presentation>\n\n</div>\n\n<ng-template #staffTemplate>\n    <h2>Staff Dashboard</h2>\n\n    <h3>Course Management</h3>\n    <p><a routerLink=\"/users\">Class List</a></p>\n    <p><a routerLink=\"/proofs\">Proof List</a></p>\n</ng-template>\n\n<ng-template #noneTemplate>None</ng-template>\n\n"

/***/ }),

/***/ "./src/app/userdashboard/userdashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("./src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proofs_service__ = __webpack_require__("./src/app/proofs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presentations_service__ = __webpack_require__("./src/app/presentations.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(route, userService, proofService, presentationService) {
        this.route = route;
        this.userService = userService;
        this.proofService = proofService;
        this.presentationService = presentationService;
        this.user = { 'email': '' }; // will be fetched from UserService
        //qualListeners:any; // TODO: add student listeners onto staff options
        this.adding = false;
        this.num_presented_confirmed = 0;
        this.num_presented_denied = 0;
        this.num_presented_pending = 0;
        this.num_listened_confirmed = 0;
        this.num_listened_pending = 0;
        this.new_presentation = {};
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.updateListenedConfirmed();
        this.updateListenedPending();
        // actually only needed for students - TODO: "if"
        this.updateProofs();
        this.updateStaff();
        this.updatePresentedConfirmed();
        this.updatePresentedDenied();
        this.updatePresentedPending();
    };
    UserDashboardComponent.prototype.setAdding = function (mode) {
        this.adding = (mode ? true : false);
    };
    // reads URL to get correct user's info
    UserDashboardComponent.prototype.getUser = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.userService.getUser(id)
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    // FOR ALL USERS
    // gets collection of Presentations
    UserDashboardComponent.prototype.updateListenedConfirmed = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.presentationService.getListenedConfirmed(id)
            .subscribe(function (results) {
            _this.listened_confirmed = results;
            _this.num_listened_confirmed = _this.listened_confirmed.length;
            if (_this.num_listened_confirmed) {
                _this.listened_confirmed.sort(_this.sortByPresenter);
            }
        });
    };
    // gets collection of Presentations
    UserDashboardComponent.prototype.updateListenedPending = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.presentationService.getListenedPending(id)
            .subscribe(function (results) {
            _this.listened_pending = results;
            _this.num_listened_pending = _this.listened_pending.length;
            if (_this.num_listened_pending) {
                _this.listened_pending.sort(_this.sortByPresenter);
            }
        });
    };
    // updates both listening groups when a listen is confirmed
    UserDashboardComponent.prototype.updateListened = function () {
        this.updateListenedPending();
        this.updateListenedConfirmed();
    };
    // FOR STUDENTS ONLY
    // gets collection of Proofs - TODO: filter out already-presented ones
    UserDashboardComponent.prototype.updateProofs = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.proofService.listProofs()
            .subscribe(function (proofs) {
            _this.proofs = proofs;
        });
    };
    // gets collection of staff, who can always listen to any proof
    // TODO: make an API-side staff-only call
    UserDashboardComponent.prototype.updateStaff = function () {
        var _this = this;
        this.userService.listUsers()
            .subscribe(function (users) {
            _this.staff = users;
            _this.staff.sort(_this.sortByEmail);
        });
    };
    // gets collection of Presentations
    UserDashboardComponent.prototype.updatePresentedConfirmed = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.presentationService
            .getPresentedConfirmed(id)
            .subscribe(function (results) {
            _this.presented_confirmed = results;
            _this.num_presented_confirmed = _this.presented_confirmed.length;
            if (_this.num_presented_confirmed) {
                _this.presented_confirmed.sort(_this.sortByProof);
            }
        });
    };
    // gets collection of Presentations
    UserDashboardComponent.prototype.updatePresentedDenied = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.presentationService
            .getPresentedDenied(id)
            .subscribe(function (results) {
            _this.presented_denied = results;
            _this.num_presented_denied = _this.presented_denied.length;
            if (_this.num_presented_denied) {
                _this.presented_denied.sort(_this.sortByProof);
            }
        });
    };
    // gets collection of Presentations
    UserDashboardComponent.prototype.updatePresentedPending = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.presentationService.getPresentedPending(id)
            .subscribe(function (results) {
            _this.presented_pending = results;
            _this.num_presented_pending = _this.presented_pending.length;
            if (_this.num_presented_pending) {
                _this.presented_pending.sort(_this.sortByProof);
            }
        });
    };
    // updates presented group and proofs list when a new pres is registered
    UserDashboardComponent.prototype.updatePresented = function () {
        this.updatePresentedPending();
        this.updateProofs();
    };
    UserDashboardComponent.prototype.sortByEmail = function (a, b) {
        if (a.email.substring(0, a.email.lastIndexOf("@"))
            < b.email.substring(0, b.email.lastIndexOf("@"))) {
            return -1;
        }
        else {
            return 1;
        }
    };
    UserDashboardComponent.prototype.sortByPresenter = function (a, b) {
        var e1 = a.presenter.email;
        var e2 = b.presenter.email;
        if (e1 == e2) {
            if (a.proof.name < b.proof.name) {
                return -1;
            }
            else {
                return 1;
            }
        }
        else {
            if (e1.substring(0, e1.lastIndexOf("@"))
                < e2.substring(0, e2.lastIndexOf("@"))) {
                return -1;
            }
            else {
                return 1;
            }
        }
    };
    UserDashboardComponent.prototype.sortByProof = function (a, b) {
        var p1 = a.proof.name;
        var p2 = b.proof.name;
        if (p1 == p2) {
            if (a.listener.email < b.listener.email) {
                return -1;
            }
            else {
                return 1;
            }
        }
        else {
            if (p1 < p2) {
                return -1;
            }
            else {
                return 1;
            }
        }
    };
    UserDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userdashboard',
            template: __webpack_require__("./src/app/userdashboard/userdashboard.component.html"),
            styles: [__webpack_require__("./src/app/userdashboard/userdashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__proofs_service__["a" /* ProofService */], __WEBPACK_IMPORTED_MODULE_4__presentations_service__["a" /* PresentationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__proofs_service__["a" /* ProofService */],
            __WEBPACK_IMPORTED_MODULE_4__presentations_service__["a" /* PresentationService */]])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    UserService.prototype.listUsers = function () {
        return this.http.get(this.apiUrl + "/users");
    };
    //TODO:
    //listUsersStaffOnly() {
    //    return this.http.get(this.apiUrl + "/users/staff");
    //}
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.apiUrl + "/users/" + id);
    };
    UserService.prototype.addUser = function (email, status) {
        return this.http.post(this.apiUrl + "/users", { 'email': email, 'status': status });
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(this.apiUrl + "/users/" + id, { 'id': id, 'email': user.email,
            'status': user.status,
            'availability': user.availability });
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.apiUrl + "/users/" + id);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:8087/api'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map