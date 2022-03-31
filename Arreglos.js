//Arreglos 
//Juan sebastian


/*Arreglos es una estructura que almacena cualquier tipo de dato y en cuaquier cantidad
 es decir, string, int, double, array, objetos, entre ontros. los arreglos o arrays tienen 
 operaciones Como, insertar, modificar y consultar.Como la declaracion de un arreglo se hace 
 con corchetes//alt+91 y los elementos dentro de el se separan con comas. tamb se crea o se 
 declaracon las palabras recervadas //var o let seguidas del nombre del arreglo*/

var miPrimerArreglo=["Jose",14];
console.log(miPrimerArreglo);

//Arreglo de arreglos
var notaEs=[["Sofia",4.5],["Mariana",4.2]];
console.log(notaEs);

//Consultar segun posicion
//Recordar que las posiciones de un vector o arreglo comienza desde cero
console.log(miPrimerArreglo[0]);//jose

//Consultar posiciones de arreglos dentro de arreglos
//Primero se accede a la posicion de arreglo mas grande y luego a las posiciones de los arreglos

[["Sofia",4.5],["Mariana",4.2]];
 console.log(notaEs[0][0]);//sofia
 console.log(notaEs[0][1]);//4.5
console.log(notaEs[1][0]);//mariana

//Modificar Elemento
//Se debe indicar la posicion del elemento y luego se le asigna el nuevo valor 

miPrimerArreglo[0]="Mario";
console.log(miPrimerArreglo);
notaEs[1][0]="Laura";
console.log(notaEs[1]);
miPrimerArreglo[1]=18;
console.log(miPrimerArreglo[1])
notaEs[[0][1]]=4.8;
console.log(notaEs[[0][1]]);

//Agregar elementos al arreglo


