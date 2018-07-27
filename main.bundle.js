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

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__master_component__ = __webpack_require__("./src/app/master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_component__ = __webpack_require__("./src/app/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__careers_component__ = __webpack_require__("./src/app/careers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_component__ = __webpack_require__("./src/app/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__industries_component__ = __webpack_require__("./src/app/industries.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */] },
    { path: 'careers', component: __WEBPACK_IMPORTED_MODULE_5__careers_component__["a" /* CareersComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__contact_component__["a" /* ContactComponent */] },
    { path: 'industries', component: __WEBPACK_IMPORTED_MODULE_8__industries_component__["a" /* IndustriesComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__master_component__["a" /* MasterComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__careers_component__["a" /* CareersComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__industries_component__["a" /* IndustriesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                // RouterModule.forRoot(routes, {useHash: true});
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true, useHash: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__master_component__["a" /* MasterComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/careers.component.css":
/***/ (function(module, exports) {

module.exports = ".border_1{\r\n    border:solid 1px;\r\n}"

/***/ }),

/***/ "./src/app/careers.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<div style=\"background-image: url(../assets/healthcaresystem.jpg)\">\r\n\r\n\r\n<div class=\"row\" style=\"height:200px\">\r\n    <div class=\"col-md-12\" style=\"text-align:center\">\r\n        <h2>Welcome to Health Care Support System</h2>\r\n    </div>\r\n\r\n\r\n</div>\r\n<div class=\"row\" style=\"height:1000px\">\r\n    <div class=\"col-md-4\">\r\n\r\n    </div>\r\n    <div class=\"col-md-4\" style=\"text-align:center;\">\r\n        <div style=\"border:solid 1px;height:180px;background-color:grey\"><br>\r\n                <input type=\"text\" placeholder=\"Username\"><br><br>\r\n                <input type=\"text\" placeholder=\"Password\"><br><br> \r\n                <button class=\"btn btn-primary\">Login</button> &nbsp;<button class=\"btn btn-danger\">Cancel</button>\r\n                <br>\r\n\r\n        </div>\r\n        <a style=\"float:left;color:black\"  href=\"\">Register</a><a style=\"float:right\"  href=\"\">Forgot password?</a> &nbsp;\r\n\r\n        </div>\r\n       \r\n        <div class=\"col-md-4\">\r\n\r\n            </div>\r\n</div>\r\n</div> -->\r\n\r\n \r\n    <!-- Image -->\r\n    <div class=\"row\">\r\n            <img style=\"height:500px;width:100%\" class=\"d-block w-110\" src=\"./assets/careers.jpg\" alt=\"Third slide\">\r\n        </div>\r\n        <!-- some random words -->\r\n        <br>\r\n        <!-- search box -->\r\n        <div class=\"row \">\r\n           <div class=\"col-md-4 \" id=\"job-search\" style=\"margin:0px;padding:0px;\">  \r\n                <input type=\"text\" placeholder=\" Job ID\" style=\"width:100%\">\r\n          </div> \r\n            \r\n            \r\n             <div class=\"col-md-4\">\r\n                <input type=\"text\" placeholder=\" Job Title\" style=\"width:100%\">\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <input type=\"button\" value=\"Search\" (click)=\"populateJobs()\" style=\"width:100px\">\r\n            </div> \r\n           \r\n        </div>  \r\n        <div class=\"row\">\r\n            <label *ngIf=\"noJobs\">No Jobs Currently. Please come back later</label>\r\n        </div>\r\n       \r\n     "

/***/ }),

/***/ "./src/app/careers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CareersComponent = /** @class */ (function () {
    function CareersComponent() {
        this.title = 'Careers';
        this.noJobs = false;
    }
    CareersComponent.prototype.ngOnInit = function () {
    };
    CareersComponent.prototype.populateJobs = function () {
        this.noJobs = true;
    };
    CareersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'careers',
            template: __webpack_require__("./src/app/careers.component.html"),
            styles: [__webpack_require__("./src/app/careers.component.css")]
        })
    ], CareersComponent);
    return CareersComponent;
}());



/***/ }),

/***/ "./src/app/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".border_1{\r\n    border:solid 1px;\r\n}\r\n\r\n\r\n.textbox { \r\n    height: 25px; \r\n    width: 275px; \r\n    background-color: transparent;  \r\n    border-style: solid;  \r\n    border-width: 0px 0px 1px 0px;  \r\n    border-color: whitesmoke; \r\n    outline:0; \r\n  } \r\n"

/***/ }),

/***/ "./src/app/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row \" style=\"background-color:#0079a1cc\">\r\n    <div class=\"col-md-12\" *ngIf=\"!contacted\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\" style=\"background-color:grey\">\r\n                <br>\r\n\r\n                <h2 style=\"color:white\">Contact us</h2>\r\n                <p style=\"color:white\">Thank you for your interest in RADIAN. Please complete the form below, so that we can provide quick and efficient\r\n                    service.\r\n                </p>\r\n                <p style=\"color:white\">Please provide your personal information and click on send button</p>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"col-md-6\" style=\"padding:0px\">\r\n\r\n\r\n                <img style=\"height:300px;width:570px\" src=\"./assets/contact.jpg\" alt=\"Second slide\">\r\n            </div>\r\n            <hr>\r\n        </div>\r\n\r\n        <div class=\"row border_1\">\r\n            <div class=\"col-md-6\">\r\n                <br>\r\n                <table>\r\n                    <tr>\r\n                        <td style=\"color:white\">Your Information</td>\r\n\r\n                    </tr>\r\n                    <td>\r\n                        <br>\r\n                    </td>\r\n                    <tr>\r\n                        <td>\r\n                            <input type=\"text\" class=\"textbox\" placeholder=\"First Name *\">\r\n                        </td>\r\n                    </tr>\r\n                    <td>\r\n                        <br>\r\n                    </td>\r\n                    <tr>\r\n                        <td>\r\n                            <input type=\"text\" class=\"textbox\" placeholder=\"Last Name *\">\r\n                        </td>\r\n                    </tr>\r\n                    <td>\r\n                        <br>\r\n                    </td>\r\n                    <tr>\r\n                        <td>\r\n                            <input type=\"text\" class=\"textbox\" placeholder=\"Email *\">\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <br>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <input type=\"text\" class=\"textbox\" placeholder=\"Company *\">\r\n                        </td>\r\n                    </tr>\r\n                    <td>\r\n                        <br>\r\n                    </td>\r\n                    <tr>\r\n                        <td>\r\n                            <input type=\"text\" class=\"textbox\" placeholder=\"Country *\">\r\n                        </td>\r\n                    </tr>\r\n                    <td>\r\n                        <br>\r\n                    </td>\r\n                    <tr>\r\n                        <td style=\"color:white\"> Write your message</td>\r\n                    </tr>\r\n                    <td>\r\n                        <br>\r\n                    </td>\r\n                    <tr>\r\n                        <td>\r\n                            <textarea cols=\"50\" rows=\"5\"></textarea>\r\n                        </td>\r\n                    </tr>\r\n                    <td>\r\n                        <br>\r\n                    </td>\r\n                    <tr>\r\n                        <td>\r\n                            <button class=\"btn btn-secondary\" (click)=\"contact()\">Send</button>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n<br>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-md-6\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\" *ngIf=\"contacted\">\r\n        <p>We have received your information. We will be contacting you shortly</p>\r\n\r\n    </div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.title = 'Contact';
        this.contacted = false;
    }
    ContactComponent.prototype.contact = function () {
        this.contacted = true;
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'contact',
            template: __webpack_require__("./src/app/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact.component.css")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n #menuUL {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color:white;\r\n    width:1585px;\r\n  }\r\n  \r\n  li {\r\n    float: left;\r\n  }\r\n  \r\n  li a, .dropbtn {\r\n    display: inline-block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  li a:hover, .dropdown:hover .dropbtn {\r\n    background-color: red;\r\n  }\r\n  \r\n  li.dropdown {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n  \r\n  .dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n  \r\n  .dropdown-content a:hover {background-color: #f1f1f1}\r\n  \r\n  .dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n  \r\n  .border_1{\r\n      border:solid 1px;\r\n  }\r\n  \r\n  .ddServices{\r\n    display: none;\r\n  }\r\n  \r\n  .menuLI:hover .ddServices{\r\ndisplay:block;\r\n  }"

/***/ }),

/***/ "./src/app/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- slide row -->\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\" id=\"slides\" style=\"height:490px;padding:0px\">\r\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\">\r\n                    <img style=\"height:490px;width:1200px\" class=\"d-block w-110\" src=\"./assets/businessintelligence.jpg\" alt=\"First slide\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img style=\"height:490px;width:1500px\" class=\"d-block w-110\" src=\"./assets/Supply Chain.jpeg\" alt=\"Second slide\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img style=\"height:490px;width:1200px\" class=\"d-block w-110\" src=\"./assets/WorkFlow.jpg\" alt=\"Third slide\">\r\n                </div>\r\n            </div>\r\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" style=\"height:49px\">\r\n    <!-- dummy space filler -->\r\n</div>\r\n<!-- Tiles of Industries -->\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-md-3 \" style=\"padding:0px\">\r\n        <div class=\"border_1\" style=\"background-image: url('./assets/manufacturing.jpg');height:250px;\"></div>\r\n        <p style=\"padding:10px;color:black;background-color:lightblue;height:250px\">\r\n            Manufacturing industry is supported by various technologies that forms the basis for efficient operation. We provide applications to help you benefit from the years of experience we have in  \r\n            the field of manufacturing.\r\n        </p>\r\n    </div>\r\n    <div class=\"col-md-1\"></div>\r\n    <div class=\"col-md-3\" style=\"padding:0px\">\r\n        <div class=\"border_1\" style=\"background-image: url('./assets/education.jpg');height:250px\"></div>\r\n        <p style=\"padding:10px;color:black;background-color:lightblue;height:250px\">\r\n            Education forms the crux of development. It is education that helps people innovate and progress. We partner with some of the major players in education. \r\n            The innovative applications that we offer forms a foundation in the various aspects of educating young minds.\r\n            </p>\r\n    </div>\r\n    <div class=\"col-md-1\"></div>\r\n    <div class=\"col-md-3 \" style=\"padding:0px\">\r\n        <div class=\"border_1\" style=\"background-image: url('./assets/healthcare.jpg');height:250px;width:100%;padding:10px\"></div>\r\n        <p style=\"padding:10px;color:black;background-color:lightblue;height:250px\">\r\n                We have tie-ups with some of the major health care application providers. In today's rapidly growing environment, it is much essential to be up to date.\r\n                We consult some of the leading voices in health care industry to deliver state of the art service to our clients.\r\n                </p>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"row\" style=\"height:49px\">\r\n    <!-- dummy space filler -->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Home';
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',
            template: __webpack_require__("./src/app/home.component.html"),
            styles: [__webpack_require__("./src/app/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/industries.component.css":
/***/ (function(module, exports) {

module.exports = ".border_1{\r\n    border:solid 1px;\r\n}\r\n\r\n "

/***/ }),

/***/ "./src/app/industries.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\r\n    <div class=\"col-md-5 \" style=\"padding:0px\">\r\n        <img style=\"height:260px;width:475px\" src=\"./assets/manufacturing industry.jpg\" alt=\"Second slide\">\r\n        <br>\r\n        <br>\r\n        <img style=\"height:260px;width:475px\" src=\"./assets/education industry.jpg\" alt=\"Second slide\">\r\n        <br>\r\n        <br>\r\n        <img style=\"height:260px;width:475px\" src=\"./assets/healthcare industry.jpg\" alt=\"Second slide\">\r\n        <br>\r\n        <br>\r\n        <img style=\"height:260px;width:475px\" src=\"./assets/travel and transportation industry.jpg\" alt=\"Second slide\">\r\n    </div>\r\n    <div class=\"col-md-7\" style=\"padding:0px\">\r\n        <div  style=\"height:260px;width:664px;background-color:grey\">\r\n            <h3 style=\"padding-top:15px;padding-left:15px;color:white\">Manufacturing</h3>\r\n            <p style=\"padding:15px ;color:white\">\r\n               When production is the foundation of your organization, operational efficiency plays a vital role in gaining profit. As such we provide state of the art technology for various needs of an organization.\r\n               In order to stay competitive and to have a competitive edge in the market, one has to implement technologies that would make the operational process efficient and smooth.\r\n               We will help you in implementing technologies that would help in the improvement of performance and enable best-in class manufacturing processes. \r\n            </p>       \r\n        </div>\r\n         <br>\r\n        <div  style=\"height:260px;width:664px;background-color:grey\">\r\n                <h3 style=\"padding-top:15px;padding-left:15px;color:white\">Education</h3>\r\n              <p style=\"padding:15px;color:white\">\r\n                  Students for the nexus between a developing economy and developed. It is the educational institutions responsibility to make sure top education is provided. We are glad that we form a small role in this process towards contribution to \r\n                  society by providing various technologies that facilitates institutions to manage the insititutional processes, examination portals, blackboard plugins etc\r\n                 \r\n              </p>\r\n        </div>\r\n        <br>\r\n         \r\n        <div  style=\"height:260px;width:664px;background-color:grey\">\r\n                <h3 style=\"padding-top:15px;padding-left:15px;color:white\">Health Care</h3>\r\n            <p style=\"padding:15px;color:white\">\r\n                With an aging population, the health care facilities around the world are under trmendous pressure to keep up with the technologies\r\n                that are needed for the efficient facilitation of patients. We as health care technology partners provide the much needed support in various domains, ranging from billing to lab applications.\r\n            </p>\r\n        </div>\r\n        <br>\r\n       \r\n        <div  style=\"height:260px;width:664px;background-color:grey\">\r\n                <h3 style=\"padding-top:15px;padding-left:15px;color:white\">Transportation</h3>\r\n            <p style=\"padding:15px;color:white\">\r\n                The uncertain global economy and the rapid growth in communication and transportation has made it a necessity for the technology to evolve accordingly.\r\n                The evolving customer expectation and rules of the industry creates new challenges to the software providers. With several years of experience in the field, we would be the right partners in providing products around services \r\n                to organizations that span over different countries and help keep them in touch in real time.\r\n            </p>\r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/industries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndustriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IndustriesComponent = /** @class */ (function () {
    function IndustriesComponent() {
        this.title = 'industries';
    }
    IndustriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'industries',
            template: __webpack_require__("./src/app/industries.component.html"),
            styles: [__webpack_require__("./src/app/industries.component.css")]
        })
    ], IndustriesComponent);
    return IndustriesComponent;
}());



/***/ }),

/***/ "./src/app/master.component.css":
/***/ (function(module, exports) {

module.exports = "/* \r\n #menuUL {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color:white;\r\n    width:1585px;\r\n  }\r\n  \r\n  li {\r\n    float: left;\r\n  }\r\n  \r\n  li a, .dropbtn {\r\n    display: inline-block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  li a:hover, .dropdown:hover .dropbtn {\r\n    background-color: red;\r\n  }\r\n  \r\n  li.dropdown {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n  \r\n  .dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n  \r\n  .dropdown-content a:hover {background-color: #f1f1f1}\r\n  \r\n  .dropdown:hover .dropdown-content {\r\n    display: block;\r\n  } */\r\n  .border_1{\r\n    border:solid 1px;\r\n}\r\n  /* .ddServices{\r\n  display: none;\r\n}\r\n.menuLI:hover .ddServices{\r\ndisplay:block;\r\n} */\r\n  .navbars {\r\n   width:1139px;\r\nmargin-left:224px; \r\nposition: fixed;\r\n \r\nz-index: 1;\r\n   overflow: hidden;\r\n  background-color: white;\r\n  font-family: Arial, Helvetica, sans-serif;  \r\n}\r\n  .navbars a {\r\n    float: left; \r\n\r\n    font-size: 16px;  \r\n  color: black;\r\n  text-align: center; \r\n    padding: 13px 15px;\r\n  text-decoration: none;  \r\n}\r\n  .dropdown {\r\n  float: left;\r\n  overflow: hidden;\r\n}\r\n  .dropdown .dropbtn {\r\n  font-size: 16px;    \r\n  border: none;\r\n  outline: none;\r\n  color: black;\r\n  padding: 14px 16px;\r\n  background-color: inherit;\r\n  font-family: inherit;\r\n  margin: 0;\r\n}\r\n  .navbars a:hover, .dropdown:hover .dropbtn {\r\n  background-color: grey;\r\n}\r\n  .dropdown-content {\r\n  display: none;\r\n  margin-top:70px;\r\n  \r\n  position: fixed;\r\n  background-color: white;\r\n  width: 1140px;\r\n  height:505px;\r\n  -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n  .dropdown-content a {\r\n  float: none;\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n}\r\n  .dropdown-content a:hover {\r\n  background-color: black;\r\n}\r\n  .dropdown:hover + .dropdown-content {\r\n  display: block;\r\n}\r\n  .dropdown-content:hover{\r\n  display:block;\r\n}"

/***/ }),

/***/ "./src/app/master.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbars \">\n    <a routerLink=\"/home\" routerLinkActive=\"active\"> <img style=\"height:50px;width:50px\" src=\"./assets/logo.png\" alt=\"Second slide\"> </a>\n   \n    <a style=\"padding-top:30px\" class=\"dropdown\" href=\"#Services\">Services <span class=\"fas fa-caret-down\"></span></a>\n    <services  class=\"dropdown-content\"></services>\n    <a style=\"padding-top:30px\" routerLink=\"/industries\" href=\"#Industries\"> Industries </a>\n    <a style=\"padding-top:30px\" routerLink=\"/careers\" routerLinkActive=\"active\"> Careers </a>\n      <a style=\"padding-top:30px\" routerLink=\"/contact\" routerLinkActive=\"active\"> Contacts </a>\n</div>\n<div class=\"container\" style=\"height:750px;\">\n    <div class=\"row\" style=\"height:80px\">\n\n        <!-- dummy space filler -->\n    </div>\n\n    <router-outlet></router-outlet>\n\n    <div class=\"row\" style=\"height:54px\">\n\n        <!-- dummy space filler -->\n    </div>\n    <!-- Footer -->\n    <div class=\"row\" style=\"padding:30px;height:190px;background-color:rgb(200, 200, 200);color:black\">\n<div class=\"col-md-3\">\n        <img style=\"height:100px;width:100px\" src=\"./assets/Logocopy.png\">\n</div>\n        <div class=\"col-md-3\">\n            \n            <a href=\"#\" style=\"color:black\">Contact us</a>\n            <br>\n            <a href=\"#\" style=\"color:black\">Location map</a>\n            <br>\n            <a href=\"#\" style=\"color:black\">Sitemap</a>\n        </div>\n        <div class=\"col-md-3\">\n             \n            <a href=\"#\" style=\"color:black\">About us</a>\n            <br>\n            <a href=\"#\" style=\"color:black\">Investors</a>\n            <br>\n            <a href=\"#\" style=\"color:black\">Careers</a>\n            <br>\n            <a href=\"#\" style=\"color:black\">Sustainability</a>\n        </div>\n        <div class=\"col-md-3\">\n            \n            <a href=\"#\" style=\"color:black\">Press Release</a>\n            <br>\n            <a href=\"#\" style=\"color:black\">Documents</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MasterComponent = /** @class */ (function () {
    function MasterComponent() {
        this.title = 'app';
    }
    MasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'master',
            template: __webpack_require__("./src/app/master.component.html"),
            styles: [__webpack_require__("./src/app/master.component.css")]
        })
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/services.component.css":
/***/ (function(module, exports) {

module.exports = ".border_1{\r\n    border:solid 1px;\r\n}\r\n\r\n "

/***/ }),

/***/ "./src/app/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\r\n  \r\n  \r\n<div class=\"col-md-4\" style=\"margin-left:40px\">\r\n        <br>  <br>\r\n    <h2>Services</h2>\r\n        <p>Re-imagine your business, designing and building the platforms necessary for growth</p>\r\n    <a id=\"aApplicationServices\" (mouseover)=\"viewImage('Application Services')\" href=\"#\">Application Services</a><br><br>\r\n    <a id=\"aBusinessProcesses\" (mouseover)=\"viewImage('Business Process')\" href=\"#\">Business Process and Operations</a><br><br>\r\n    <a id=\"aTechnologyConsulting\" (mouseover)=\"viewImage('Technology Consulting')\" href=\"#\">Technology Consulting Services</a> \r\n\r\n    \r\n</div>\r\n<div class=\"col-md-7 \">\r\n        <br><br><br><br><br> \r\n        <img style=\"height:250px;width:550px\" *ngIf=\"applicationServices\"  src=\"./assets/application services.jpg\" alt=\"Second slide\">\r\n        <img style=\"height:250px;width:550px\" *ngIf=\"businessProcess\" src=\"./assets/business operations.jpg\" alt=\"Second slide\"> \r\n    <img style=\"height:250px;width:550px\"  *ngIf=\"technologyConsulting\" src=\"./assets/technology consulting.jpg\" alt=\"Second slide\">   \r\n</div>\r\n    \r\n\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
        this.title = 'Services';
        this.applicationServices = true;
        this.businessProcess = false;
        this.technologyConsulting = false;
        this.contacted = false;
    }
    ServicesComponent.prototype.viewImage = function (serviceType) {
        if (serviceType == "Application Services") {
            this.applicationServices = true;
            this.businessProcess = false;
            this.technologyConsulting = false;
        }
        else if (serviceType == "Business Process") {
            this.applicationServices = false;
            this.businessProcess = true;
            this.technologyConsulting = false;
        }
        else {
            this.applicationServices = false;
            this.businessProcess = false;
            this.technologyConsulting = true;
        }
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'services',
            template: __webpack_require__("./src/app/services.component.html"),
            styles: [__webpack_require__("./src/app/services.component.css")]
        })
    ], ServicesComponent);
    return ServicesComponent;
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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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