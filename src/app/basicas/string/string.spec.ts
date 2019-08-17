import { mensaje } from './string';


describe('Pruebas de string', () => {
    it( 'Debe de regresar un string', () => {
        const respuesta = mensaje('Ricardo');
        expect( typeof respuesta ).toBe('string');
    });

    it( 'Debe retornar un saludo con el nombre enviado', () => {
        const entrada = 'Ricardo';
        const respuesta = mensaje(entrada);
        expect( respuesta ).toContain(entrada);
    });
    
});