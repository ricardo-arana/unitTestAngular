import { obtenerRobots } from './arreglos';

describe('Pruebas de arreglos', () => {
    it('Debe de retornar almenos 3 robos', () => {
        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });
    it('Debe de contener a Megaman y Ultron', () => {
        const res = obtenerRobots();
        expect(res).toContain('Megaman');
        expect(res).toContain('Ultron');
    });
});