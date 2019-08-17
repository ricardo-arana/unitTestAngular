import { incrementar } from './numeros';

describe('Pruebas de numeros', () => {

    it('debe de retornar si el numero ingresao es mayor a 100', () => {
        const res = incrementar(300);
        expect(res).toBe(100);
    });

    it('debe de retornar el numero ingresado mas uno', () => {
        const res = incrementar(50);
        expect(res).toBe(51);
    });
});