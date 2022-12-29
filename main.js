addEventListener(`DOMContentLoaded`,(e) =>{
//6.	Realizar un programa que lea N números, calcule y escriba la suma de los pares y el producto de los impares.	

alert(`6.	Realizar un programa que lea N números, calcule y escriba la suma de los pares y el producto de los impares.<br>Favor abrir las herramientas de desarrollo para ver el resultado `);

    
    let suma = 0;
    let mul = 1; 
    let num= Number(prompt("cuantos numeros ingresaras")); 
    for (i=0; i < num; i++) {
        let n= Number(prompt("Dame un numero")); 
        if (n % 2 == 0) {
            suma=suma+n;
            
        }else   {
            mul=mul*n;
        }
    
    }

    console.log("la suma de los pares es: "+suma);
    console.log("la multiplicacion de los impares es: "+mul);
    })