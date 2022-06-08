//Taller for
//Juan sebastian
//Oscar salgado

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

