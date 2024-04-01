// Desestructuracion
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const usecontext = ( {nombre, edad, clave, rango = 'Capitán' } ) => {

    // console.log(nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.15689,
            lng: -15.19848
        }
    }

};

// const avenger = usecontext(persona);
// console.log(avenger);

const {nombreClave, anios, latlng:{lat, lng}} = usecontext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);