import { usuarioIngresado } from './booleanos';


describe('Pruebas de booleanos', () => {
    it('debe de retorna true', () => {
        const res = usuarioIngresado();
        expect(res).toBeTruthy();
    });
});