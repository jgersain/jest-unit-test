import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe("Instantaneas", () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });
});
  