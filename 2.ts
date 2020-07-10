/*En otro fichero
• Crear un objeto de la clase Mobile llamado Nokia3210
• Crear un objeto de la clase Mobile llamado iPhone3G
• Crear un objeto de la clase Mobile llamado Samsug Galaxy 10
• Mostrar por consola todos los atributos de cada objeto
• Modificar el Nokia3210 para que tenga 5G y 4 camaras
• Mostrar todos los atributos del todos los objetos creados*/


import {Mobile} from "./1"

let Nokia3210:Mobile = new Mobile("Nokia", "3210", "Nokia", 32, "Blue", false, 2, 234)
let iPhone3G:Mobile= new Mobile("iPhone", "3G", "iPhone", 16, "Black", false, 1, 135)
let SamsugGalaxy10:Mobile = new Mobile("Samsug Galaxy 10", "Galaxy 103G", "Samsung", 132, "White", true, 3, 435)

/*
console.log(Nokia3210.name)
console.log(Nokia3210.model)
console.log(Nokia3210.trademark)
console.log(Nokia3210.sdSize)
console.log(Nokia3210.color)
console.log(Nokia3210.is5G)
console.log(Nokia3210.cameraNumber)
console.log(Nokia3210.price)

console.log("\n")

Nokia3210.is5G = true
Nokia3210.cameraNumber = 4

console.log("\n")

console.log(Nokia3210.is5G)
console.log(Nokia3210.cameraNumber)

console.log("\n")

console.log(iPhone3G.name)
console.log(iPhone3G.model)
console.log(iPhone3G.trademark)
console.log(iPhone3G.sdSize)
console.log(iPhone3G.color)
console.log(iPhone3G.is5G)
console.log(iPhone3G.cameraNumber)
console.log(iPhone3G.price)

console.log("\n")

console.log(SamsugGalaxy10.name)
console.log(SamsugGalaxy10.model)
console.log(SamsugGalaxy10.trademark)
console.log(SamsugGalaxy10.sdSize)
console.log(SamsugGalaxy10.color)
console.log(SamsugGalaxy10.is5G)
console.log(SamsugGalaxy10.cameraNumber)
console.log(SamsugGalaxy10.price)
*/

console.log(Nokia3210.print())
console.log(iPhone3G.print())
console.log(SamsugGalaxy10.print())

