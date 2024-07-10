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
  query POKEMONS($offset: Int!, $limit: Int!, $typeName: String) {
    pokemon_v2_pokemon(offset: $offset, limit: $limit, where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {_or: {name: {_regex: $typeName}}}}}) {
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
