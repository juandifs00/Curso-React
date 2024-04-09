import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Pruebas en FirstApp', () => { 
    
    test('Debe hacer match en el snapshot', () => { 
        
        const title = 'Hola, soy Juandi';
        render( <FirstApp title={ title } /> )

     })

 })