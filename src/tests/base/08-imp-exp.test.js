import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
  test('debe retornar un héroe por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test('debe retornar undefined si el héroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  // toEqual al arreglo filtrado
  test('debe retornar un arreglo con los héroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    const heroeData = heroes.filter((h) => h.owner === owner);
    expect(heroes).toEqual(heroeData);
  });

  // length = 2 // toBe
  test('debe retornar un arreglo con los héroes de Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });

  test('debe retornar un arreglo vacío si el owner no existe', () => {
    const owner = 'Capcom';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(0);
  });
});
