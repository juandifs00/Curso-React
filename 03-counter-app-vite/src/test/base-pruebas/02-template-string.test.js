import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en el archivo 02', () => { 

    test('getSaludo debe retornar "Hola Juandi"', () => { 
        
        const name = 'Juandi';
        const message = getSaludo( name );

        expect( message ).toBe( `Hola ${ name }` );

     })
 });