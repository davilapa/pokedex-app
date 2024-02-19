import { getEvolutionsRecursive } from '../helpers'; // Update the import path as needed

describe('getEvolutionsRecursive', () => {
  test('returns an array of evolution names', () => {
    const chain = {
      evolution_details: [],
      evolves_to: [
        {
          evolution_details: [],
          evolves_to: [
            {
              evolution_details: [],
              evolves_to: [],
              is_baby: false,
              species: { name: 'Venusaur', url: '' },
            },
          ],
          is_baby: false,
          species: { name: 'Ivysaur', url: '' },
        },
      ],
      is_baby: false,
      species: { name: 'Bulbasaur', url: '' },
    };

    const evolutions = getEvolutionsRecursive(chain);

    expect(evolutions).toEqual(['Bulbasaur', 'Ivysaur', 'Venusaur']);
  });

  test('handles empty evolution chain', () => {
    const chain = {
      evolution_details: [],
      evolves_to: [],
      is_baby: false,
      species: { name: 'Pikachu', url: '' },
    };

    const evolutions = getEvolutionsRecursive(chain);

    expect(evolutions).toEqual(['Pikachu']);
  });
});