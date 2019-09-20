import { arrayFruits, arrayColors } from '../arrays';

describe('probar que el arreglo contenga un elemento' , () => {
  test('contiene una sandia', () => {
    expect(arrayFruits()).toContain('sandia');
  });
  test('no contiene una pera', () => {
    expect(arrayFruits()).not.toContain('pera');
  });
  test('debe tener seis elementos', () => {
    expect(arrayFruits()).toHaveLength(6);
  });
});