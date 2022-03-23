// Juan sebastian castaño 
// Taller recuperacion
// 10B

console.log("Punto #1");

var litros = prompt("Por favor ingrese la cantidad de agua que cabe en su piscina en litros");
var tiempo;
tiempo = litros*3600/145;
tiempo = tiempo/3600;
console.log("Su piscina se demora : " +tiempo+ " horas en llenarse completamente");

console.log("Punto #2");

var m = prompt("por favor digite la longitud en metros");
var mm;
mm = m*1000;
console.log("Este es el resultado de la convercion a milimetros " + mm);

console.log("Punto #3");

var decimetros;
decimetros = mm/100;
console.log("Este es el resultado de la convercion a decimetros " + decimetros);

console.log("Punto #4");

var km;
km = decimetros/10000;
console.log("Este es el resultado de la convercion a kilometros " + km);

console.log("Punto #5");

var horas = prompt("Por favor ingrese la duracion de la llamada en horas ");
var costo;
costo = horas*7200;
console.log("El costo de su llamada es : " +costo );

console.log("Punto #6");

var extras = prompt("Por favor ingrese la cantidad de horas que tomo ");
var dinero;
extras = extras - 1;
dinero = 1*40000+(25000*extras)
console.log("El costo de su clase es : " +dinero );