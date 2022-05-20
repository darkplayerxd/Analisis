 //oscar andres salgado 

 console.log("punto #1")

 var contador = 0
 var num =prompt("ingrese un numero")
 while(contador<=num){
     if(contador%5==0)
     console.log (contador + " es multiplo de 5")
     else console.log(contador+ " no es multiplo de 5")
     contador +=1
    }


 console.log("punto #2")

 var articulo=0
 var numarticulos= prompt("cuantos articulos desea llevar")
 var vfinal=0
 while(articulo<numarticulos){
     var productos=parseFloat (prompt("cual es el valor de cada articulo"))
     vfinal=productos+vfinal
     articulo+=1

 }
 console.log("el valor final de su compra es "+ vfinal)

 console.log("punto #3")

  var articulo=0
  var vfinal=0
  while(cantidad!="si"){
      var productos=parseFloat (prompt("cual es el valor de el articulo"))
      vfinal+=productos
      var cantidad= prompt("si desea detener la facturacion diga si")
      articulo+=1

  }
  console.log("el valor final de su compra es "+ vfinal)

 console.log("punto #4")

var articulo=0
var vfinal
var cantidad   
while(cantidad!="si"){
    var productos=parseFloat(prompt("cual es el valor de el articulo"))
    vfinal+=productos
     articulo+=1
     cantidad= prompt("si desea detener la facturacion diga si")
   
   
    }
 if(articulo>=8 && articulo<15){
        console.log("el descuento del 10% fue aplicado para su compra y su valor final es de "+ precio*0.9)
    }else if(articulo>=15 && articulo<25){
    console.log("el descuento del 15% fue aplicado para su compra y su valor final es de "+ precio*0.85)
    }else if(articulo>=25 ){
    console.log("el descuento del 20% feu aplicado para su compra y su valor final es de "+ precio*0.8)
    }else console.log("no tienes un descuento")

    console.log("punto #5")

    var acum =0
    var notas =prompt("numero de notas de notas que va a ingresar")
    var notas2 =0
    var ganaron =0
    var perdieron =0

    while(acum<notas){
        var question = parseFloat(prompt("que nota sacaste"))
        notas2+=question
        acum++
        if(question<3.5){
            console.log("pediste el año "+ acum)
            perdieron ++
        }else if(question>=3.5){
              console.log("ganaste el año "+ acum)
              ganaron++
        }
          
    }

    var finalnotas= notas2/notas

    if(finalnotas<3.5){
        console.log("la cantidad de estuiantes que ganaron no es la suficiente para ir al curso de verano")
    }else console.log("la cantidad de estudiantes que ganaron el año si es la suficiente para ir al curso de verano")
