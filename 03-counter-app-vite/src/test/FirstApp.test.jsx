import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Pruebas en FirstApp', () => { 
    
    // test('Debe hacer match en el snapshot', () => { 
        
    //     const title = 'Hola, soy Juandi';
    //     const { container } = render( <FirstApp title={ title } /> )

    //     expect ( container ).toMatchSnapshot();

    //  })

     test('Debe de mostrar el titulo en un h1', () => { 
        
        const title = 'Hola, soy Juandi';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> )

        expect( getByText( title ) ).toBeTruthy();

        // const h1 = container.querySelector( 'h1' );
        
        // expect(h1.innerHTML).toContain( title );

        expect(getByTestId('test-title').innerHTML).toContain(title);

      })

      test('Debe de mostar el subtitulo enviado por props', () => { 
        
        const title = 'Hola, soy Juandi';
        const subTitle = 'No hay un subtítulo';
        const {  getAllByText } = render( 
            <FirstApp 
                title={ title } 
                subtitle={ subTitle }
            /> 
    );

        expect( getAllByText( subTitle ).length ).toBe(4);

       })

 })