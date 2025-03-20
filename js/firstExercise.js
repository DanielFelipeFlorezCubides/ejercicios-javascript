// 1. Número interesante

// Escribe una función que determine si un número entero positivo n es "interesante". Un número es interesante si es múltiplo de 7 o contiene un 7 en sus dígitos.

let x;

do{
    x = prompt("Por favor ingrese un numero: ");
}while (isNaN(x) || x === "");

let interesante = (x%7 == 0) ? alert("El numero es interesante") : (x.toString().includes("7") ? alert("El numero es interesante") : alert("El numero no es interesante"));
