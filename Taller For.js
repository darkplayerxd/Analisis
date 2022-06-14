//Taller for
//Juan sebastian
//Oscar salgado
/*
console.log("Punto #1")

var num1=parseInt(prompt("Ingrese un numero ")) 
var num2=parseInt(prompt("Ingrese otro numero ")) 
    
if(num1<num2){
    for(var i=num1; i<=num2; i+=1){    
        console.log(i)
}
}else(num2<num1)
    for(var i=num2; i<=num1; i+=1){
        console.log(i)
    }
    
console.log("Punto #2")

var num=parseInt(prompt("Escribe un numero para generar la tabla"))
  for(var i=0; i <=10; i+=1){
      var resultado=num*i
    console.log(num,"x",i,"=", resultado)
  }
 
  console.log("Punto #3")

var num4=parseInt(prompt("Escribe un numero para generar la tabla"))
var limite=parseInt(prompt("Escribe hasta donde quieres que se genere la tabla de multiplicar"))
  for(var i=0; i <=limite; i+=1){
      var resultado2=num4*i
    console.log(num4,"x",i,"=", resultado2)
  }
*/
 //Diseñe un ciclo for que reciba 10 números y los guarde en un arreglo, 
 //escriba otro ciclo for que retorne el número mayor del arreglo.

 console.log("Punto #4")

var arreglonumeros=[] 
var numeroo; 
for(var i=1; i<=10; i++){ 
    numeroo=parseInt(prompt("Ingrese 10 numeros "+i))
    arreglonumeros.push(numeroo); 
}
var mayor=arreglonumeros[0] 
for(var i=1; i<=10; i++){
  if (arreglonumeros[i]>mayor){
      mayor=arreglonumeros[i]}
console.log("El numero mayor es " +mayor)
}

console.log("punto  #5")

var arreglo5=[]
var producto
for(var i=1;i<=5;i++){
  producto=prompt("ingrese los articulos que desea comprar")
  arreglo5.push(produto)
}
var arregloprecio=[]
for(var i=0;i<arreglo5.length;i++){
  var precio=parsefloat(prompt("ingrese el precio de "+ arreglo5[i]))
  arregloprecio.push(precio)
}