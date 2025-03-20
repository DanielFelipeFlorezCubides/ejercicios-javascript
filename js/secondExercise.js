// 2. Rango de números primos

// Crea una función que reciba dos números **a** y **b** y retorne un array (también podría implementarse sin array) con todos los números primos en ese rango (incluyendo **a** y **b** si son primos)

let x;
let y;

function rango(){
    do{
        x = prompt("Por favor ingrese un numero: ");
        y = prompt("Por favor ingrese un segundo numero: ");
    }while (isNaN(x) || x === "" || isNaN(y) || y === "");

    if(x > y){
        alert("El valor del primer numero debe ser mayor que el segundo");
        return;
    }

    let rango = [];
  
    // Obtener los números entre X y Y (inclusive)
    for (let i = x; i <= y; i++) {
    rango.push(i);
    }
}

let esPrimo = true;

for (let i = 2; i < rango().length; i++) {
    
}