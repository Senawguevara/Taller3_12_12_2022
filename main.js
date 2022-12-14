addEventListener(`DOMContentLoaded`,(e) =>{
//3.	Realizar un programa que pueda sumar dos números leídos por teclado y escribir el resultado.	

let num1 = parseInt(prompt('Digite el primer Numero'));
let num2 = parseInt(prompt('Digite el Segundo Numero'));
console.log('El numero uno digitado es '+ num1);
console.log('El numero dos digitado es '+ num2);

    let resultado = num1 +num2;
    
    
console.log('La suma de los dos numeros es: '+ resultado);

document.querySelector('body').innerHTML =`<H1>Ejercicio 03</H1><br><h2>Realizar un programa que pueda sumar dos números leídos por teclado y escribir el resultado.</h2>
<h3>El numero uno digitado es ${num1}, el numero dos digitado es; ${num2}, La suma de los dos numeros es:  ${resultado}</h3>
`;

})