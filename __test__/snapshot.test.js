import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe("Instantaneas", () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  test('Siempre fallara la instantanea', () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20),
    }
    expect(user).toMatchSnapshot();
  });

  test('Permitir excepciones dentro del código (snapshots)', () => {
    const user = {
      name: "Oscar Barajas",
      id: Math.floor(Math.random() * 20),
    }
    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    });
  })
});
  