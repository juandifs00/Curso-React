import { render, screen } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Pruebas en FirstApp', () => { 

    const title = 'Hola, soy Juandi';
    const subTitle = 'No hay un subtítulo';
    
    test('Debe hacer match con el snapshot', () => { 
        
        const { container } = render( <FirstApp title={ title } /> )

        expect ( container ).toMatchSnapshot();

     })
     
     test('Debe de mostrar el mensaje "Hola, soy Juandi"', () => { 

        render( <FirstApp title={ title } /> )

        expect ( screen.getByText( title ) ).toBeTruthy();
        
        // screen.debug();

      })

      test('Debe de mostar el titulo en un h1', () => { 
        
        render( <FirstApp title={ title } /> )

        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );

       })

       test('Debe de mostar el subtitulo enviado por props', () => { 
        
        render( 
            <FirstApp 
                title={ title } 
                subtitle={ subTitle }
            />  
        )

        expect( screen.getAllByText( subTitle ).length ).toBe(4);
        
        })

 })