import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe retornar un heroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )
        
     })

    test('getHeroeById debe retornar undefined si no existe', () => { 

        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();
    
    })

    // Tarea:
    // Debe de retornar un arreglo con los heroes de DC
    // Length === 3
    // toEqual al arreglo filtrado

    // Debe de retornar un arreglo con los heroes de Marvel
    // Length === 2

    test('getHeroesByOwner debe retotnar el arreglo de DC', () => { 
        
        const owner = 'DC';
        const ArrHeroes =  getHeroesByOwner(owner);

        expect( ArrHeroes.length ).toBe( 3 );

        expect( ArrHeroes ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ] )

        expect ( ArrHeroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

     })

     test('getHeroesByOwner debe retotnar el arreglo de Marvel', () => { 
        
        const owner = 'Marvel';
        const ArrHeroes =  getHeroesByOwner(owner);

        expect(ArrHeroes.length).toBe( 2 );

        expect ( ArrHeroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

     })

 })