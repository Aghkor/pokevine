var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { RegisterService } from "./register.service";
var AppComponent = /** @class */ (function () {
    function AppComponent(http, registerService) {
        this.http = http;
        this.registerService = registerService;
        this.name = 'Angular 5';
        this.apiRoot = 'https://pokeapi.co/api/v2';
        this.vinedoURL = 'http://localhost:8080/myapp';
        this.vinedo = null;
        this.posts$ = registerService.registerRequests$.asObservable();
    }
    AppComponent.prototype.listar = function () {
        var _this = this;
        var url = this.vinedoURL + "/vinedo/";
        this.http.get(url).subscribe(function (res) {
            console.log(res);
            _this.vinedo = res.json();
            console.log(res.json().vinedos);
        }, function (err) { return console.log('Error ' + err); }, function () { return console.log('yay'); });
    };
    AppComponent.prototype.add = function (nombre, codigo, tipo, latitud, longitud) {
        console.log(nombre);
        this.registerService.register(nombre, codigo, tipo, latitud, longitud);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    AppComponent = __decorate([
        Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [Http, RegisterService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map