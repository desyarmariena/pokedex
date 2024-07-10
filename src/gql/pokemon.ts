import {gql} from '@apollo/client'

export const GET_TYPES = gql`
  query FILTERS {
    types: pokemon_v2_type {
      id
      name
    }
    generations: pokemon_v2_generation {
      id
      name
    }
  }
`

export const GET_POKEMONS = gql(`
  query POKEMONS($offset: Int!, $limit: Int!, $name: String, $type: String, $gen: String) {
    pokemon_v2_pokemon(
      offset: $offset,
      limit: $limit,
      where: {
        name: { _regex: $name },
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: {
            name: { _regex: $type },
            pokemon_v2_generation: {
              name: { _regex: $gen }
            }
          }
        }
      }
    ) {
      id
      name
      order
      base_experience
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`)
