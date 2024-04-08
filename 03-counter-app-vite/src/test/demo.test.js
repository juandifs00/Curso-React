describe('Pruebas en <DemoComponent />', () => { 
   
    test('Esta prueba no debe de fallar por nada de mundo', () => {
    
        // 1. Inicializacion
        const message1 = 'Hola Mundo';
    
        // 2. Estimulo
        const message2 = message1.trim();
    
        // 3. Observar el comportamiento ... esperado
        expect( message1 ).toBe( message2 );
    })
    
 })