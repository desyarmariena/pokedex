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

export const GET_POKEMON_DETAIL = gql(`
    query POKEMON($id: Int!) {
      pokemon: pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
        id
        name
        base_experience
        height
        pokemonsprites: pokemon_v2_pokemonsprites {
          sprites
        }
        types: pokemon_v2_pokemontypes(where: {pokemon_id: {_eq: $id}}) {
          type: pokemon_v2_type {
            name
            generation: pokemon_v2_generation {
              name
            }
          }
        }
       abilities: pokemon_v2_pokemonabilities {
          ability: pokemon_v2_ability {
            id
            name
            effects: pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
              effect
            }
          }
        }
        moves: pokemon_v2_pokemonmoves(where: {pokemon_id: {_eq: $id}, level: {_gte: 1}}, limit: 20) {
          id
          level
          pokemon_id
          move: pokemon_v2_move {
            name
            id
            accuracy
            power
            type: pokemon_v2_type {
              name
            }
          }
        }
        stats: pokemon_v2_pokemonstats {
          base_stat
          effort
          stat: pokemon_v2_stat {
            name
            game_index
            id
            is_battle_only
            move_damage_class_id
            characteristics: pokemon_v2_characteristics {
              characteristic: pokemon_v2_characteristicdescriptions(where: {language_id: {_eq: 9}}) {
                description
              }
            }
          }
        }
        specy: pokemon_v2_pokemonspecy {
          base_happiness
          capture_rate
          gender_rate
          name
          order
          pokemon_habitat_id
          evolutionchain: pokemon_v2_evolutionchain {
            id
            species: pokemon_v2_pokemonspecies {
              id
              name
              order
              pokemons: pokemon_v2_pokemons {
                pokemonsprites: pokemon_v2_pokemonsprites {
                  sprites
                }
                types: pokemon_v2_pokemontypes {
                  type: pokemon_v2_type {
                    name
                    generation: pokemon_v2_generation {
                      name
                    }
                  }
                }
              }
            }
          }
          habitat: pokemon_v2_pokemonhabitat {
            id
            name
          }
        }
      }
    }
  `)
