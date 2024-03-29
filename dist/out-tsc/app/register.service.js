var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.registerRequests$ = new BehaviorSubject(0);
    }
    RegisterService.prototype.register = function (nombre, codigo, tipo, latitud, longitud) {
        var _this = this;
        console.log("lo hice");
        return this.http
            .post('http://localhost:8080/myapp/vinedo', { codigo: codigo, nombre: nombre, tipo: tipo, latitud: latitud, longitud: longitud })
            .map(function (r) {
            var user = r.json();
            console.log("lo hice 4");
            return user;
        }).do(function () { return _this.registerRequests$.next(_this.registerRequests$.value); });
    };
    RegisterService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], RegisterService);
    return RegisterService;
}());
export { RegisterService };
//# sourceMappingURL=register.service.js.map