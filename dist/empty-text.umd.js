(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global['empty-text'] = global['empty-text'] || {}),global._angular_core));
}(this, (function (exports,_angular_core) { 'use strict';

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}

exports.EmptyTextService = (function () {
    function EmptyTextService() {
        this.emptyTextDisplay = "empty";
    }
    EmptyTextService.prototype.get = function () {
        return this.emptyTextDisplay;
    };
    EmptyTextService.prototype.set = function (emptyTextDisplay) {
        this.emptyTextDisplay = emptyTextDisplay;
    };
    return EmptyTextService;
}());
exports.EmptyTextService = __decorate([
    _angular_core.Injectable(),
    __metadata("design:paramtypes", [])
], exports.EmptyTextService);

exports.EmptyTextDirective = (function () {
    function EmptyTextDirective(el, empservice) {
        this.el = el;
        this.empservice = empservice;
    }
    EmptyTextDirective.prototype.ngAfterViewInit = function () {
        var content = this.el.nativeElement.innerHTML;
        if (!content) {
            this.el.nativeElement.innerHTML = this.empservice.get();
        }
    };
    return EmptyTextDirective;
}());
exports.EmptyTextDirective = __decorate([
    _angular_core.Directive({ selector: '[emptytext]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_core.ElementRef !== "undefined" && _angular_core.ElementRef) === "function" && _a || Object, typeof (_b = typeof exports.EmptyTextService !== "undefined" && exports.EmptyTextService) === "function" && _b || Object])
], exports.EmptyTextDirective);
var _a;
var _b;

exports.EmptyTextModule = (function () {
    function EmptyTextModule() {
    }
    return EmptyTextModule;
}());
exports.EmptyTextModule = __decorate([
    _angular_core.NgModule({
        imports: [],
        exports: [exports.EmptyTextDirective],
        declarations: [exports.EmptyTextDirective],
        providers: [exports.EmptyTextService],
    })
], exports.EmptyTextModule);

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=empty-text.umd.js.map
