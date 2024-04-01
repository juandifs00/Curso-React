const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'NYC',
        zipcode: 55420,
        lat: 14.589497,
        lng: 14.159848,
    }
}

//console.table({persona});
//console.log({persona});

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);