//Taller de repaso
//Juan sebastian castaño 

console.log("Punto #1");

var m = prompt("Por favor ingrese su valor en en metros");
var k;
k = m/1000;
console.log("Este es el resultado de la convercion a kilometros " +k);

console.log("Punto #2");

var distancia = prompt("Por favor ingrese la distancia de su viaje");
var combustible;
combustible = distancia*(290/100);
console.log("Esta es la cantidad de combustible que consumira el avion : " +combustible+ " litros");

console.log("Punto #3");

combustible = combustible/1000;
console.log("Esta es la cantidad de combustible que consumira el avion : " +combustible+ " kilolitros");

console.log("Punto #4");

var diametro = prompt ("Por favor ingrese el diametro del circulo");
var radio;
var circunferencia;
var area;
radio = diametro/2
area = Math.PI*(radio**2);
circunferencia = Math.PI*diametro;
console.log("El area del circulo es " + area);
console.log("La circunferencia del circulo es " + circunferencia);



