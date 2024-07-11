import {useState} from 'react'
import {useQuery} from '@apollo/client'
import {GET_POKEMONS} from './gql/pokemon'
import {PokemonsQuery} from './generated/types'
import {useDebounce} from './hooks/useDebounce'
import PokemonList from './components/pokemon-list'
import Filter from './components/filter'
import Loading from './components/loading'
import NotFound from './components/not-found'

const INIT_FILTER = {
  name: '',
  type: '',
  gen: '',
}

function App() {
  const [filter, setFilter] = useState(INIT_FILTER)
  const debouncedFilter = useDebounce(filter, 500)
  const {loading, data} = useQuery<PokemonsQuery>(GET_POKEMONS, {
    variables: {
      offset: 0,
      limit: 24,
      name: debouncedFilter.name,
      type: filter.type,
      gen: filter.gen,
    },
  })

  return (
    <main className="w-full h-full">
      <section className="px-8 py-4">
        <Filter filter={filter} setFilter={setFilter} />
        <Loading loading={loading} />
        {!loading && data && data?.pokemon_v2_pokemon.length === 0 ? (
          <NotFound>
            <button
              type="button"
              className="underline"
              onClick={() => setFilter(INIT_FILTER)}
            >
              Reset Filter
            </button>
          </NotFound>
        ) : null}
        <PokemonList pokemons={data} />
      </section>
    </main>
  )
}

export default App
