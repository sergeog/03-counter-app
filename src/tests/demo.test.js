describe('Pruebas en el archivo demo.test.js', () => {
  test('deben de ser iguales los strings', () => {
    // 1. inicialización
    const mensaje1 = 'Hola mundo';

    // 2. estímulo
    const mensaje2 = `Hola mundo`;

    // 3. observar el comportamiento
    expect(mensaje1).toBe(mensaje2);
  });
});

describe('The can', () => {
  const can = {
    name: 'pepsi',
    ounces: 12,
  };

  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pepsi');
  });
});
