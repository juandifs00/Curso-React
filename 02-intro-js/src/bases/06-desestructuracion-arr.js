
const personajes = ['Mario', 'Luigi', 'Peach', 'Donald', 'Darth Vader'];

const [p1] = personajes;
const [, p2] = personajes;
const [, , p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

const returnArreglo = () => {
    return ['ABC', 123];
};

const [letras, numeros] = returnArreglo();
console.log(letras, numeros);

//Tarea
// 1. el primer valor del arr se llamará nombre
// 1. se llamará setNombre

const usestate = (valor) => {
    return [valor , () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = usestate('Minnie');

console.log(nombre);
setNombre();