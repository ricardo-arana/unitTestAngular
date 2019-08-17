import { Jugador } from './clase';
import { JitEvaluator } from '@angular/compiler';

describe('Pruebas de clase ', () => {
    let jugador =  new Jugador();

    afterEach( () => {
        jugador = new Jugador();
    } );

    it( 'Debe de retornar 80 hp si reciba 20 de daño', () => {

        const resp = jugador.recibeDanio(20);
        expect(jugador.hp).toBe(80);
    });

    it( 'Debe de retornar 50 hp si reciba 50 de daño', () => {

        const resp = jugador.recibeDanio(50);
        expect(jugador.hp).toBe(50);
    });

    it( 'Debe de retornar 0 hp si reciba 100 de daño', () => {

        const resp = jugador.recibeDanio(100);
        expect(jugador.hp).toBe(0);
    });

    it( 'Debe de retornar 0 hp si reciba 100 de daño o mas', () => {

        const resp = jugador.recibeDanio(101);
        expect(jugador.hp).toBe(0);
    });
});
