// 2. Rango de números primos

// Crea una función que reciba dos números **a** y **b** y retorne un array (también podría implementarse sin array) con todos los números primos en ese rango (incluyendo **a** y **b** si son primos)

function esPrimo(num){
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function rangoPrimos(x, y){
    let primos = [];
    let inicio = Math.min(x, y);
    let fin = Math.max(x, y);

    for (let i = inicio; i <= fin; i++) {
        if (esPrimo(i)){
            primos.push(i);
        }
    }
    return primos;
}

let x = parseInt(prompt("Por favor ingrese un numero: "));
let y = parseInt(prompt("Por favor ingrese un segundo numero: "));

if(isNaN(x) || isNaN(y)){
    alert("Por favor, ingrese numeros validos");
}else{
    let listaPrimos = rangoPrimos(x, y);
    alert("Numeros primos en el rango: " + (listaPrimos.length ? listaPrimos.join(", ") : "No hay numeros primos en este rango"));
}