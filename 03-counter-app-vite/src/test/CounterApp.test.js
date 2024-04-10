// Tarea
// Pruebas en el <CounterApp/>

// Test: Debe de hacer match con el snapshot

// Test: Debe de mostrar el valor inicial de 100 <CounterApp value = { 100 }/>

import { CounterApp } from "../CounterApp";
import { render, screen } from "@testing-library/react"


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

 })