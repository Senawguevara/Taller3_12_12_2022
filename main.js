addEventListener(`DOMContentLoaded`,(e) =>{
//4.	Realizar un programa de procesos en el que se almacenen 3 números en 3 variables A, B y C. El diagrama debe decidir cual es el mayor y cual es el menor	

let a = parseInt(prompt('Digite el primer Numero'));
let b = parseInt(prompt('Digite el Segundo Numero'));
let c = parseInt(prompt('Digite el Segundo Numero'));
console.log('El numero uno digitado es '+ a);
console.log('El numero dos digitado es '+ b);
console.log('El numero dos digitado es '+ c);
let ma;
let me;

if (a > b && a >c) {
   ma = document.querySelector('body').innerHTML= `El numero "a" es mayor y vale ${a}`
  
}if (b > a && b> c) {
   ma = document.querySelector('body').innerHTML= `El numero "b" es mayor y vale ${b}`  
  
}if (c > a && c > b) {
   ma = document.querySelector('body').innerHTML= `El numero "c" es mayor y vale ${c}`  
    
}if (a < b && a < c) {
    me = document.querySelector('body').innerHTML= `El numero "a" es menor y vale ${a}` 
   
}if (b < a && b < c ) {
    me = document.querySelector('body').innerHTML= `El numero "b" es menor y vale ${b}`    
   
}if (c < a && c < b) {
    me = document.querySelector('body').innerHTML= `El numero "c" es menor y vale ${c}` 
  
}


document.querySelector('body').innerHTML =`<H1>Ejercicio 04</H1><br><h2>4.	Realizar un programa de procesos en el que se almacenen 3 números en 3 variables A, B y C. El diagrama debe decidir cual es el mayor y cual es el menor.</h2><br>
<h3>El numero a digitado es; ${a},<br> el numero b digitado es; ${b},<br> el numero c digitado es; ${c},<br> El numero mayor entre los tres es = ${ma},<br> el numero menor entre los tes es  = ${me}</h3>
`;






// let resultado;


// if ( a > b) {
//    if (a > c) {
//       console.log ('El primer numero es A ' + a );      
//    }else {
//       console.log('El tercer numero es mayor C ' + c);
//    }   
// }if (b > c) {
//    console.log('El numero mayor es B ' + b);
   
// } else{
//    console.log('El numeor mayor es el C '+ c);
   
// };

// if ( a > b) {
//    if (b > c) {
//       console.log ('El primer numero es C ' + c );      
//    }elsec{
//       console.log('El tercer numero es mayor B ' + b);
//    }   
// }if (a > c) {
//    console.log('El numero mayor es C ' + c);
   
// } else {
//    console.log('El numeor mayor es el A '+ a);   
// }






// if (A == B && A == B){
//     console.log("Numero 1, Numero 2 y Numero 3 son iguales! y valen: "+A+".");
//     } else {
//        if (A > B){
//           if (A > C){
//              console.log("Numero 1 es Mayor y vale: "+ A+".");
//           }else{
//                 console.log("Numero 3 es Mayor y vale: "+ C +".");
//           }
//        } else{
//           console.log("Numero 2 es Mayor y vale: "+ B +".");
//        } 
//       } 
      
      
         
         




    
// console.log('La suma de los dos numeros es: '+ resultado);

// document.querySelector('body').innerHTML =`<H1>Ejercicio 04</H1><br><h2>4.	Realizar un programa de procesos en el que se almacenen 3 números en 3 variables A, B y C. El diagrama debe decidir cual es el mayor y cual es el menor.</h2>
// <h3>El numero uno digitado es $ A}, el numero dos digitado es; ${B}, La suma de los dos numeros es:  ${resultado}</h3>
// `;

})