(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/command.service.ts":
/*!****************************************!*\
  !*** ./src/app/api/command.service.ts ***!
  \****************************************/
/*! exports provided: CommandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandService", function() { return CommandService; });
var CommandService = /** @class */ (function () {
    function CommandService() {
        this.allCommands = {
            'sprinters1': 'npm run serve -- --backend http://d4-sprinters1.redbend.com:8080'
        };
    }
    CommandService.prototype.getAllCommands = function () {
        return this.allCommands;
    };
    CommandService.prototype.getCommand = function (name) {
        if (this.allCommands[name]) {
            return this.allCommands[name];
        }
        else {
            return 'Command was not found!';
        }
    };
    CommandService.prototype.createNewCommand = function () {
    };
    return CommandService;
}());



/***/ }),

/***/ "./src/app/api/file.service.ts":
/*!*************************************!*\
  !*** ./src/app/api/file.service.ts ***!
  \*************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var FileService = /** @class */ (function () {
    function FileService() {
        this.logsEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        if (window.require) {
            try {
                this.ipc = window.require('electron').ipcRenderer;
            }
            catch (error) {
                throw error;
            }
        }
        else {
            console.warn('Could not load electron ipc');
        }
    }
    FileService.prototype.writeToCommand = function (command, boxID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.ipc.on('writtenToCmd', function (event, arg) {
                            resolve(boxID + '.txt');
                        });
                        _this.ipc.send('boxClicked', { command: command, boxID: boxID }); // fire event in main.js who listens to this action
                    })];
            });
        });
    };
    FileService.prototype.readFromFile = function (fileName, isProcessRunning) {
        var _this = this;
        this.ipc.on('readStream', function (event, arg) {
            _this.logsEvent.next(arg);
        });
        this.ipc.send('readFromFile', { fileName: fileName, isProcessRunning: isProcessRunning }); // fire event in main.js who listens to this action)
        return this.logsEvent;
    };
    FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _status_page_status_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-page/status-page.component */ "./src/app/status-page/status-page.component.ts");
/* harmony import */ var _box_list_box_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./box-list/box-list.component */ "./src/app/box-list/box-list.component.ts");





var routes = [
    { path: '', component: _box_list_box_list_component__WEBPACK_IMPORTED_MODULE_4__["BoxListComponent"] },
    { path: 'status/:name', component: _status_page_status_page_component__WEBPACK_IMPORTED_MODULE_3__["StatusPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{currentURL}}</p>\n<header>\n  <h1>{{title}}</h1>\n</header>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Welcome ';
        this.currentURL = window.location.href;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _api_command_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/command.service */ "./src/app/api/command.service.ts");
/* harmony import */ var _status_page_status_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status-page/status-page.component */ "./src/app/status-page/status-page.component.ts");
/* harmony import */ var _box_list_box_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./box-list/box-list.component */ "./src/app/box-list/box-list.component.ts");
/* harmony import */ var _box_list_box_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./box-list/box/box.component */ "./src/app/box-list/box/box.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _status_page_status_page_component__WEBPACK_IMPORTED_MODULE_6__["StatusPageComponent"],
                _box_list_box_list_component__WEBPACK_IMPORTED_MODULE_7__["BoxListComponent"],
                _box_list_box_box_component__WEBPACK_IMPORTED_MODULE_8__["BoxComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_api_command_service__WEBPACK_IMPORTED_MODULE_5__["CommandService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/box-list/box-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/box-list/box-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"toolbar\"></section>\n<section class=\"box-container\">\n  <div #sprinters1 class=\"box\" (click)=\"runScript('sprinters1')\">\n    <img src=\"\">\n    <h4>Run sprinters1</h4>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/box-list/box-list.component.scss":
/*!**************************************************!*\
  !*** ./src/app/box-list/box-list.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JveC1saXN0L2JveC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/box-list/box-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/box-list/box-list.component.ts ***!
  \************************************************/
/*! exports provided: BoxListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxListComponent", function() { return BoxListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/file.service */ "./src/app/api/file.service.ts");
/* harmony import */ var _api_command_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/command.service */ "./src/app/api/command.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _process_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process.service */ "./src/app/box-list/process.service.ts");






var BoxListComponent = /** @class */ (function () {
    function BoxListComponent(fileService, commandService, router, processService) {
        this.fileService = fileService;
        this.commandService = commandService;
        this.router = router;
        this.processService = processService;
    }
    BoxListComponent.prototype.ngOnInit = function () {
    };
    BoxListComponent.prototype.runScript = function (boxID) {
        var _this = this;
        if (this.processService.getRunningProcessesById(boxID)) {
            this.navigateToStatusPage(boxID + '.txt');
        }
        else {
            this.fileService.writeToCommand(this.buildCommand(boxID), boxID).then(function (logFileName) {
                // main process started running script, return the file in logs folder where output is written to
                _this.processService.setRunningProcess(boxID);
                _this.navigateToStatusPage(logFileName);
            });
        }
    };
    BoxListComponent.prototype.buildCommand = function (boxID) {
        var CMD = this.getBoxCommand(boxID);
        var SWM = this.goToSwmFolder();
        return CMD ? SWM + ' && ' + CMD : '';
    };
    BoxListComponent.prototype.getBoxCommand = function (boxID) {
        return this.commandService.getCommand(boxID);
    };
    BoxListComponent.prototype.goToSwmFolder = function () {
        return 'cd ~/dev/sources/swm/SmaFrontend && pwd';
    };
    BoxListComponent.prototype.navigateToStatusPage = function (logFileName) {
        this.router.navigate(['/status', logFileName]);
    };
    BoxListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-box-list',
            template: __webpack_require__(/*! ./box-list.component.html */ "./src/app/box-list/box-list.component.html"),
            styles: [__webpack_require__(/*! ./box-list.component.scss */ "./src/app/box-list/box-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"],
            _api_command_service__WEBPACK_IMPORTED_MODULE_3__["CommandService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _process_service__WEBPACK_IMPORTED_MODULE_5__["ProcessService"]])
    ], BoxListComponent);
    return BoxListComponent;
}());



/***/ }),

/***/ "./src/app/box-list/box/box.component.html":
/*!*************************************************!*\
  !*** ./src/app/box-list/box/box.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  box works!\n</p>\n"

/***/ }),

/***/ "./src/app/box-list/box/box.component.scss":
/*!*************************************************!*\
  !*** ./src/app/box-list/box/box.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JveC1saXN0L2JveC9ib3guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/box-list/box/box.component.ts":
/*!***********************************************!*\
  !*** ./src/app/box-list/box/box.component.ts ***!
  \***********************************************/
/*! exports provided: BoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxComponent", function() { return BoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoxComponent = /** @class */ (function () {
    function BoxComponent() {
    }
    BoxComponent.prototype.ngOnInit = function () {
    };
    BoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-box',
            template: __webpack_require__(/*! ./box.component.html */ "./src/app/box-list/box/box.component.html"),
            styles: [__webpack_require__(/*! ./box.component.scss */ "./src/app/box-list/box/box.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BoxComponent);
    return BoxComponent;
}());



/***/ }),

/***/ "./src/app/box-list/process.service.ts":
/*!*********************************************!*\
  !*** ./src/app/box-list/process.service.ts ***!
  \*********************************************/
/*! exports provided: ProcessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessService", function() { return ProcessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProcessService = /** @class */ (function () {
    function ProcessService() {
        this.runningProcesses = {};
    }
    ProcessService.prototype.getRunningProcesses = function () {
        return this.runningProcesses;
    };
    ProcessService.prototype.getRunningProcessesById = function (id) {
        return this.runningProcesses[id];
    };
    ProcessService.prototype.setRunningProcess = function (id) {
        this.runningProcesses[id] = true;
        return 'id was added succsefully';
    };
    ProcessService.prototype.stopRunningProcess = function (id) {
        if (this.runningProcesses[id]) {
            return delete this.runningProcesses[id];
        }
        return 'could not find process by' + id;
    };
    ProcessService.prototype.stopAllRunningProcesses = function () {
        this.runningProcesses = {};
    };
    ProcessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProcessService);
    return ProcessService;
}());



/***/ }),

/***/ "./src/app/status-page/status-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/status-page/status-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">\n  Back to main page\n</a>\n<p>\n  <section class=\"terminal-wrapper\">\n    <div [innerHTML]=\"logs\"></div>\n  </section>\n\n\n\n"

/***/ }),

/***/ "./src/app/status-page/status-page.component.scss":
/*!********************************************************!*\
  !*** ./src/app/status-page/status-page.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".terminal-wrapper {\n  background: black;\n  color: #2db800;\n  height: 400px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWxldm8vRGVza3RvcC9oYXJtYW4tcnVubmVyLWVsZWN0cm9uL2hhcm1hbi1ydW5uZXIvc3JjL2FwcC9zdGF0dXMtcGFnZS9zdGF0dXMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsY0FBYTtFQUNiLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy1wYWdlL3N0YXR1cy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlcm1pbmFsLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICMyZGI4MDA7XG4gIGhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/status-page/status-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/status-page/status-page.component.ts ***!
  \******************************************************/
/*! exports provided: StatusPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPageComponent", function() { return StatusPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/file.service */ "./src/app/api/file.service.ts");
/* harmony import */ var _box_list_process_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../box-list/process.service */ "./src/app/box-list/process.service.ts");





var StatusPageComponent = /** @class */ (function () {
    function StatusPageComponent(activatedRoute, router, fileService, cd, process) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.fileService = fileService;
        this.cd = cd;
        this.process = process;
        activatedRoute.params.subscribe(function (item) {
            _this.fileName = item.name;
            if (!_this.fileName) {
                _this.id = _this.fileName.replace('.txt', '');
                console.log('error was not created');
                _this.router.navigate(['/']);
            }
        });
    }
    StatusPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var logsEvent = this.fileService.readFromFile(this.fileName, this.process.getRunningProcessesById(this.id));
        logsEvent.subscribe(function (logs) {
            _this.logs += logs ? "<br> " + logs : '';
            _this.cd.detectChanges();
        });
    };
    StatusPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status-page',
            template: __webpack_require__(/*! ./status-page.component.html */ "./src/app/status-page/status-page.component.html"),
            styles: [__webpack_require__(/*! ./status-page.component.scss */ "./src/app/status-page/status-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _box_list_process_service__WEBPACK_IMPORTED_MODULE_4__["ProcessService"]])
    ], StatusPageComponent);
    return StatusPageComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shalevo/Desktop/harman-runner-electron/harman-runner/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map