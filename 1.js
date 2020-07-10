"use strict";
//Crear una clase llamada Mobile con las siguientes características:
//• Propiedades Publicas :§ name, § model, § trademark, § sdSize, § color, § is5G, § cameraNumber, § price
//• Constructor a través del cual pueda inicializar todos los atributos
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.setIs5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.getCamera = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setCamera = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
