import { getHeroesById } from './bases/08-imp-exp';

// const promesa = new Promise( (resolve, reject) => {
    
//     setTimeout( () =>{

//         // console.log('2 segundos despues');

//         const personaje = getHeroesById(2);
//         //resolve(personaje);
//         reject('No se pudo encontrar el Heroe');

//     }, 2000 );

// });

// promesa.then( (heroe) => {
//     console.log('Heroe:', heroe);
// })
// .catch( (err) => console.warn(err) );

const getHeroByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {
    
            setTimeout( () =>{
        
                const personaje = getHeroesById( id );

                if (personaje) {
                    resolve(personaje);
                } else {
                    reject('No se pudo encontrar el Heroe');
                }
            }, 2000 );
        });
};

getHeroByIdAsync(5)
.then( console.log )
.catch( console.warn );