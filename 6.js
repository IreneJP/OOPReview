"use strict";
//6. En otro fichero hacer las mismas operaciones que se hicieron en el punto 2.
exports.__esModule = true;
var _1_1 = require("./1");
var Nokia3210 = new _1_1.Mobile("Nokia", "3210", "Nokia", 32, "Blue", false, 2, 234);
var iPhone3G = new _1_1.Mobile("iPhone", "3G", "iPhone", 16, "Black", false, 1, 135);
var SamsugGalaxy10 = new _1_1.Mobile("Samsug Galaxy 10", "Galaxy 103G", "Samsung", 132, "White", true, 3, 435);
console.log(Nokia3210.getName());
console.log(Nokia3210.getModel());
console.log(Nokia3210.getTrademark());
console.log(Nokia3210.getSdSize());
console.log(Nokia3210.getColor());
console.log(Nokia3210.getIs5G());
console.log(Nokia3210.getCamera());
console.log(Nokia3210.getPrice());
console.log("\n");
Nokia3210.setIs5G(true);
Nokia3210.setCamera(4);
console.log("\n");
console.log(Nokia3210.getIs5G());
console.log(Nokia3210.getCamera());
console.log("\n");
console.log(iPhone3G.getName());
console.log(iPhone3G.getModel());
console.log(iPhone3G.getTrademark());
console.log(iPhone3G.getSdSize());
console.log(iPhone3G.getColor());
console.log(iPhone3G.getIs5G());
console.log(iPhone3G.getCamera());
console.log(iPhone3G.getPrice());
console.log("\n");
console.log(SamsugGalaxy10.getName());
console.log(SamsugGalaxy10.getModel());
console.log(SamsugGalaxy10.getTrademark());
console.log(SamsugGalaxy10.getSdSize());
console.log(SamsugGalaxy10.getColor());
console.log(SamsugGalaxy10.getIs5G());
console.log(SamsugGalaxy10.getCamera());
console.log(SamsugGalaxy10.getPrice());
7; //Crear un array de objetos de la clase Mobile con los tres objetos ya creados 
var misMoviles = new Array;
misMoviles = [Nokia3210, iPhone3G, SamsugGalaxy10];
console.log(misMoviles);
/* 8. Mostrar cada uno de los atributos de cada uno de los objetos del array creado tal y como se especifica en el punto 5
• “The characteristics of the mobile name are:”
§ Name : name
§ Model: model
§ Trademark : trademark
§ SD Size (GB) : sdSize
§ Color: color
§ Is 5g?: is5G
§ Number of Cameras: cameraNumber
*/
var mov = new Array(misMoviles.length);
for (var i = 0; i < misMoviles.length; i++) {
    mov[i] = misMoviles[i];
}
console.log(mov);
