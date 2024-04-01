// const arreglo = new Array(100);
const arreglo = [1,2,3,4];

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [...arreglo, 5, 48]

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2
} );

console.log("Este es el arreglo 1:", arreglo);
console.log("Este es el arreglo 2:", arreglo2);
console.log("Este es el arreglo 3:", arreglo3);