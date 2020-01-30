webpackJsonp([0],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(211);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["b" /* AjustesPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["a" /* Ajustes2Page */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["c" /* ModalPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["d" /* Pagina2Page */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["e" /* Pagina3Page */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["f" /* PrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["g" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["b" /* AjustesPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["a" /* Ajustes2Page */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["c" /* ModalPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["d" /* Pagina2Page */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["e" /* Pagina3Page */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["f" /* PrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["g" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["g" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrincipalPage = (function () {
    function PrincipalPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pagina2 = __WEBPACK_IMPORTED_MODULE_2__index_paginas__["d" /* Pagina2Page */];
    }
    PrincipalPage.prototype.navegarPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["d" /* Pagina2Page */]);
    };
    return PrincipalPage;
}());
PrincipalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-principal',template:/*ion-inline-start:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\principal\principal.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Principal - Root</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button block color="primary" (click)="navegarPagina()">\n    ir a página 2        \n  </button>\n\n  <button ion-button block color="secondary" [navPush]="pagina2" style="margin-top: 10px">\n    ir a página 2 - Html  \n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\principal\principal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], PrincipalPage);

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjustesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AjustesPage = (function () {
    function AjustesPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    AjustesPage.prototype.activarPrincipal = function () {
        this.navCtrl.parent.select(2);
    };
    AjustesPage.prototype.mostrarModal = function () {
        var params = {
            nombre: "Jeferson Salazar",
            edad: 21
        };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["c" /* ModalPage */], params);
        modal.present();
        modal.onDidDismiss(function (params) {
            if (params) {
                console.log(params);
            }
        });
    };
    return AjustesPage;
}());
AjustesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ajustes',template:/*ion-inline-start:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\ajustes\ajustes.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Ajustes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button block (click)="activarPrincipal()">\n    Activar Principal\n  </button>\n\n  <button ion-button block color="morado" (click)="mostrarModal()">\n    Mostrar modal\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\ajustes\ajustes.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]) === "function" && _c || Object])
], AjustesPage);

var _a, _b, _c;
//# sourceMappingURL=ajustes.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ajustes2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Ajustes2Page = (function () {
    function Ajustes2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Ajustes2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Ajustes2Page');
    };
    return Ajustes2Page;
}());
Ajustes2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ajustes2',template:/*ion-inline-start:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\ajustes2\ajustes2.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ajustes2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\ajustes2\ajustes2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], Ajustes2Page);

//# sourceMappingURL=ajustes2.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPage = (function () {
    function ModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.nombre = this.navParams.get("nombre");
        this.edad = this.navParams.get("edad");
        console.log(this.nombre, this.edad);
    }
    ModalPage.prototype.cerrar_con_parametros = function () {
        var data = {
            nombre: this.nombre,
            edad: this.edad,
            coords: {
                lat: 10,
                lng: -20
            }
        };
        this.viewCtrl.dismiss(data);
    };
    ModalPage.prototype.cerrar_sin_parametros = function () {
        this.viewCtrl.dismiss();
    };
    return ModalPage;
}());
ModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal',template:/*ion-inline-start:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\modal\modal.html"*/'<ion-header>\n\n  <ion-navbar color="morado">\n    <ion-title>Página Modal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<h1>Bienvenidos a la página modal</h1>\n\n<button ion-button block color="primary" (click)="cerrar_con_parametros()">\n  Cerrar con parámetros\n</button>\n\n<button ion-button block color="morado" (click)="cerrar_sin_parametros()">\n  Cerrar sin parámetros\n</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\modal\modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ModalPage);

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pagina2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Pagina2Page = (function () {
    function Pagina2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pagina3 = __WEBPACK_IMPORTED_MODULE_2__index_paginas__["e" /* Pagina3Page */];
        this.mutantes = [
            {
                nombre: "Magneto",
                poder: "Atraer metales"
            },
            {
                nombre: "Wolverine",
                poder: "Garras de acero, regeneración"
            },
            {
                nombre: "Profesor X",
                poder: "Controlar mentes"
            },
            {
                nombre: "Scoot",
                poder: "Lanza rayos"
            }
        ];
    }
    Pagina2Page.prototype.navegarPagina3 = function (mutante) {
        console.log(mutante);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["e" /* Pagina3Page */], { 'mutante': mutante });
    };
    return Pagina2Page;
}());
Pagina2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pagina2',template:/*ion-inline-start:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\pagina2\pagina2.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Pagina 2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Enviando con evento</h1>\n  <ion-list>\n    <ion-item *ngFor="let mutante of mutantes" (click)="navegarPagina3(mutante)">\n      {{mutante.nombre}}\n    </ion-item>\n  </ion-list>\n\n  <h1>Enviando con Html</h1>\n  <ion-list>\n    <ion-item *ngFor="let mutante of mutantes" [navPush]="pagina3" [navParams]="{ \'mutante\' : mutante }">\n      {{mutante.nombre}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\pagina2\pagina2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], Pagina2Page);

//# sourceMappingURL=pagina2.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pagina3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Pagina3Page = (function () {
    function Pagina3Page(navParams, navCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        console.log(this.navParams);
        this.mutante = this.navParams.get("mutante");
    }
    Pagina3Page.prototype.irAtras = function () {
        this.navCtrl.pop();
    };
    Pagina3Page.prototype.irRoot = function () {
        this.navCtrl.popToRoot();
    };
    return Pagina3Page;
}());
Pagina3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pagina3',template:/*ion-inline-start:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\pagina3\pagina3.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>{{ mutante.nombre }}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h2 text-center>\n\n        {{ mutante.poder }}\n\n    </h2>\n\n\n\n    <button ion-button color="primary" block (click)="irAtras()">\n\n        ir atras con evento\n\n    </button>\n\n\n\n    <button ion-button color="secondary" block (click)="irRoot()">\n\n        ir al root\n\n    </button>\n\n\n\n    <button ion-button color="danger" block navPop>\n\n        ir atras Html\n\n    </button>\n\n</ion-content>\n\n    '/*ion-inline-end:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\pagina3\pagina3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], Pagina3Page);

//# sourceMappingURL=pagina3.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_paginas__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = (function () {
    function TabsPage() {
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__index_paginas__["f" /* PrincipalPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_1__index_paginas__["b" /* AjustesPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary" selectedIndex="2">\n    <ion-tab tabIcon="hammer" tabTitle="Ajustes" [root]="tab2"></ion-tab>\n    <ion-tab tabIcon="hammer" tabTitle="Ajustes" [root]="tab2"></ion-tab>\n    <ion-tab tabIcon="home" tabTitle="Home" [root]="tab1"></ion-tab>\n    <ion-tab tabIcon="hammer" tabTitle="Ajustes" [root]="tab2"></ion-tab>\n    <ion-tab tabIcon="hammer" tabTitle="Ajustes" [root]="tab2"></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\ProgramaTuTambien\Desktop\Ionic\3. navegacion\src\pages\tabs\tabs.html"*/,
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__principal_principal__ = __webpack_require__(261);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__principal_principal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajustes_ajustes__ = __webpack_require__(262);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ajustes_ajustes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajustes2_ajustes2__ = __webpack_require__(263);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__ajustes2_ajustes2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(264);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__modal_modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagina2_pagina2__ = __webpack_require__(265);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__pagina2_pagina2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagina3_pagina3__ = __webpack_require__(266);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__pagina3_pagina3__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(267);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a"]; });







//# sourceMappingURL=index.paginas.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.js.map