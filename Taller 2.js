//Taller 2 
//Juan sebastian castaño

console.log("Punto 1");
var lado = prompt(" ingrese el valor del lado del cuadrado: ");
var area;
area = lado*lado;
console.log ("El valor del area del cuadrado es: " + area);

var vol;
vol = area**3;
console.log ("El valor del volumen del cubo es " + vol);

console.log ("Punto 2");
var base = prompt("por favor digite el valor del la base del rectangulo");
var lado2 = prompt("por favor digite el valor del lado del rectangulo");

var area2;
area2 = base*lado2;
console.log("El area del recatangulo es " + area2);

var per;
per = (base*2) + (lado2*2);
console.log("El perimetro del rectangulo es " + per);

console.log("Punto 3");
var diame = prompt ("por favor digite el valor del diametro del circulo");
var rad;
rad = diame/2
var area3;
area3 = Math.PI*(rad**2);
console.log("El area del circulo es " + area3);

var vol2;
vol2 = 4/3*Math.PI*(rad**3);
console.log("El volumen de una esfera es " + vol2);

console.log("Punto 4");
var bas1 = prompt ("por favor digite el valor de la primera base");
var bas2 = prompt ("por favor digite el valor de la segunda base");
var h = prompt ("por favor digite el valor de la altura");
var area4;
area4 = (bas1+bas2)*h; //calificar formula
console.log("El area del trapezoide es " + area4);

console.log("Punto 5");
var anch = prompt ("por favor digite el valor del ancho de la piscina");
var larg = prompt ("por favor digite el valor del largo de la piscina");
var prof = prompt ("por favor digite el valor de la profundidad de la piscina");
var lit;
lit = anch*larg*prof;
console.log("La cantidad de litros que soporta la piscina es " + lit  + " litros");

console.log("Punto 6");
var larg2 = prompt ("por favor digite el valor del largo del muro");
var anch2 = prompt ("por favor digite el valor del ancho del muro");
var area6;
area6 = larg2*anch2*22000;
console.log("El precio total a pagar es de " + area6);

console.log("Punto 7");

console.log("Punto 7A");

var cm = prompt("por favor digite la longitud de centimetros");
var km;
km = cm/100000;
console.log("Este es el resultado de la convercion kilometros " + km);

console.log("Punto 7B");

var dm = prompt("por favor digite el volumen en decimetros");
var l;
l = dm*1;
console.log("Este es el resultado de la convercion a litros " + l);

console.log("Punto 7C");

var mg = prompt("por favor digite su valor en microgramos");
var g;
g = mg/ 1e-6;
console.log("Este es el resultado de la convercion a gramos " + g);

console.log("Punto 7D");

var k = prompt("por favor digite su valor en kilometros");
var mm;
mm = k*1000000;
console.log("Este es el resultado de la convercion a milimetros" + mm);


