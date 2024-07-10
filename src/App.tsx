import {useQuery} from '@apollo/client'
import {GET_POKEMONS} from './gql/pokemon'
import {PokemonsQuery} from './generated/types'
import PokemonList from './components/pokemon-list'

function App() {
  const {loading, data, fetchMore} = useQuery<PokemonsQuery>(GET_POKEMONS, {
    variables: {
      offset: 0,
      limit: 24,
      typeName: '',
    },
  })

  console.log('data', data)
  return (
    <main className="w-full h-full">
      <section className="px-8 py-4">
        <PokemonList pokemons={data} />
      </section>
    </main>
  )
}

export default App
