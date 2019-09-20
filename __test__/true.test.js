import { isTrue, isFalse } from '../true';
import { isNull, isUndefined } from '../true'

describe('probar resultados verdaderos', () => {
  test('verdadero', () => expect(isTrue()).toBeTruthy());
});
describe('probar resultados falsos', () => {
  test('falso', () => expect(isFalse()).toBeFalsy());
});
describe('probar resultados nulos', () => {
  test('nulo', () => expect(isNull()).toBeNull());
});
describe('probar resultados indefinidos', () => {
  test('indefinido', () => expect(isUndefined()).toBeUndefined());
});
describe('probar resultados no verdaderos', () => {
  test('verdadero o falso', () => expect(isFalse()).not.toBeTruthy());
});