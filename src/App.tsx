import {useQuery} from '@apollo/client'
import {GET_POKEMONS} from './gql/pokemon'
import {PokemonsQuery} from './generated/types'

function App() {
  const {loading, data, fetchMore} = useQuery<PokemonsQuery>(GET_POKEMONS, {
    variables: {
      offset: 0,
      limit: 20,
    },
  })

  return (
    <div>
      {data?.pokemon_v2_pokemon.map(pokemon => {
        return (
          <div key={pokemon.id}>
            <p>{pokemon.name}</p>
            <picture>
              <img
                src={
                  pokemon.pokemon_v2_pokemonsprites[0].sprites.other[
                    'official-artwork'
                  ].front_default
                }
              />
            </picture>
          </div>
        )
      })}
    </div>
  )
}

export default App
