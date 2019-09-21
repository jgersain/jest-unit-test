describe('probando cadenas de texto', () => {
  const text = "Are you ready...";
  test('debe contener la palabra ready', () => {
    expect(text).toMatch(/ready/);
  });
  test('no debe contener la palabra guys', () => {
    expect(text).not.toMatch(/guys/);
  })
  test('comprobar el tamaño de la cadena', () => {
    expect(text).toHaveLength(16);
  })
});