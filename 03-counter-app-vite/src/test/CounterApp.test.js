// Tarea
// Pruebas en el <CounterApp/>

// Test: Debe de hacer match con el snapshot

// Test: Debe de mostrar el valor inicial de 100 <CounterApp value = { 100 }/>

import { CounterApp } from "../CounterApp";
import { fireEvent, render, screen } from "@testing-library/react"


describe('Pruebas en CounterApp', () => { 

    const initialValue = 100;
    
    test('Debe de hacer match con el snapshot', () => { 
        
        const { container } = render( <CounterApp value = { initialValue }/> )

        expect ( container ).toMatchSnapshot();

     })

     test('Debe de mostrar el valor inicial de 100 <CounterApp value = { 100 }/>', () => { 
        
        render( <CounterApp value = { initialValue }/> )

        expect ( screen.getByText( 100 ) ).toBeTruthy();

      })

      test('Debe de inicrementar con el boton +1', () => { 
        
        render( <CounterApp value = { initialValue }/> )

        fireEvent.click( screen.getByText( '+1' ) )

        expect( screen.getByText( '101' ) ).toBeTruthy();

       })

       test('Debe de decremenrar con el boton -1', () => { 
        
        render( <CounterApp value = { initialValue }/> )

        fireEvent.click( screen.getByText( '-1' ) )

        expect( screen.getByText( '99' ) ).toBeTruthy();

       })

       test('Debe de funcionar el boton de reset', () => { 
        
        render( <CounterApp value = { initialValue }/> )
        
        fireEvent.click( screen.getByText( '+1' ) )
        fireEvent.click( screen.getByText( '+1' ) )
        fireEvent.click( screen.getByText( '+1' ) )
        fireEvent.click( screen.getByText( '+1' ) )

        // fireEvent.click( screen.getByText( 'Reset' ) )

        fireEvent.click(screen.getByRole( 'button', { name: 'btn-reset' } ) );
        
        expect ( screen.getByText( initialValue ) ).toBeTruthy();
        
    })

 })