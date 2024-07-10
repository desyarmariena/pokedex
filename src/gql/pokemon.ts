import {gql} from '@apollo/client'

export const GET_POKEMONS = gql(`
  query POKEMONS($offset: Int!, $limit: Int!) {
    pokemon_v2_pokemon(offset: $offset, limit: $limit) {
      name
      order
      pokemon_species_id
      id
      base_experience
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`)
