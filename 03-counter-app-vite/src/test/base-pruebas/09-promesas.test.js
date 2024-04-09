import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 
    
    test('getHeroeByIdAsync debe retornar un heroe', (done) => { 
        
        const id = 2;

        getHeroeByIdAsync( id )
            .then( hero => {
                
                expect(hero).toEqual({
                    id: 2,
                    name: 'Spiderman',
                    owner: 'Marvel'
                });
                
                done();

            });

     });

     test('getHeroeByIdAsync debe retornar error si heroe no existe', (done) => { 
        
        const id = 100;

        getHeroeByIdAsync( id )
            .then ( hero => {
                expect( hero ).toBeFalsy();

                done();
            })
            .catch( error => {

                expect( error ).toBe( `No se pudo encontrar el héroe ${ id }` )

                done();

            });

     });
     
 });