// 3. Secuencia de collatz
/* 
    La secuencia de collatz se genera de la siguiente forma:
    - Si n es par el siguiente numero es n/2
    - Si n es impar el siguiente numero es 3n + 1
    - Se repite el proceso hasta llegar a 1. Escribe una funcion que reciba un numero
    y devuelva la cantidad de pasos necesarios para llegar a 1.
*/

function collatz(n){
    if (n <= 0 || !Number.isInteger(n)) return "Por favor, ingresar un numero entero positivo";
    let pasos = 0;
    let secuencia = [n];

    while (n !== 1){
        if (n % 2 === 0){
            n = n / 2;
        } else {
            n = 3 * n + 1; 
        }
        
        secuencia.push(n);
        pasos++;
    }

    return `${pasos} pasos: (${secuencia.join(" > ")})`;
}

let n = Number(prompt("Por favor ingrese un numero: "));

if (Number.isInteger(n) && n > 0){
    alert(collatz(n));
}else{
    alert("Por favor, escriba un numero entero positivo");
}