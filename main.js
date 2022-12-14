addEventListener(`DOMContentLoaded`,(e) =>{
//1.	Realizar un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.

let num1 = parseInt(prompt('Digite el primer Numero'));
let num2 = parseInt(prompt('Digite el Segundo Numero'));
console.log('El numero uno digitado es '+ num1);
console.log('El numero dos digitado es '+ num2);

    let resultado;
    if (num1 > num2) {
        resultado = num1;
    } else if (num2 > num1) {
        resultado = num2;
    }
console.log('El numero mayor entre dos numeros diferentes es '+ resultado);

document.querySelector('body').innerHTML =`<H1>Ejercicio 01</H1><br><h2>Realizar un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.</h2>
<h3>Verifica cual numero es mayor: el numero uno digitado es ${num1}, el numero dos digitado es; ${num2}, El mayor de los dos numeros es ${resultado}</h3>
`;

})