
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar);
console.log(saludar('Juandi'));
console.log(saludar2('Mario'));
console.log(saludar3('Ana'));
console.log(saludar4());

const getUser = () => 
    ({
        uid: 'ABC15616',
        username: 'XD',
    });

const user =getUser();
console.log(user);

// Tarea
// 1. Trasnformar a funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC4898',
        username: nombre,
    }
};

const usuarioActivo = getUsuarioActivo('Daniela');
console.log(usuarioActivo);

// Solucion

const getUsuarioActivo2 = (nombre) =>
    ({
        uid: 'ABC4898',
        username: nombre,
    });

const usuarioActivo2 = getUsuarioActivo2('Daniela');
console.log('Esta es la solución' ,usuarioActivo2);