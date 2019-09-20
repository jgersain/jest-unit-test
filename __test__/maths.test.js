import { sumar, multiplicar, restar, dividir } from '../maths';
import { exportAllDeclaration } from '@babel/types';

describe('Calculos matematicos', () => {
  test('Prueba de sumas', () => {
    expect(sumar(2,5)).toBe(7);
  });
  test("Prueba de multiplicacion", () => {
    expect(multiplicar(2,5)).toBe(10);
  });
  test("Prueba de resta", () => {
    expect(restar(2,5)).toBe(-3);
  });
  test("Prueba de dividir", () => {
    expect(dividir(2,5)).toBe(0.4);
  });
});