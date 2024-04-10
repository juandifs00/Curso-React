import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Pruebas en FirstApp', () => { 
    
    test('Debe hacer match en el snapshot', () => { 
        
        const title = 'Hola, soy Juandi';
        const { container } = render( <FirstApp title={ title } /> )

        expect ( container ).toMatchSnapshot();

     })

     test('Debe de mostrar el titulo en un h1', () => { 
        
        const title = 'Hola, soy Juandi';
        const { container, getByText } = render( <FirstApp title={ title } /> )

        expect( getByText( title ) ).toBeTruthy();

        const h1 = container.querySelector( 'h1' );
        
        expect(h1.innerHTML).toContain( title );

      })

 })