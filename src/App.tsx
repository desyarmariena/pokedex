import {useQuery} from '@apollo/client'
import {GET_POKEMONS} from './gql/pokemon'
import {PokemonsQuery} from './generated/types'
import PokemonList from './components/pokemon-list'
import Filter from './components/filter'
import {useState} from 'react'
import {useDebounce} from './hooks/useDebounce'

function App() {
  const [filter, setFilter] = useState({
    name: '',
    type: '',
    gen: '',
  })
  const debouncedFilter = useDebounce(filter, 500)
  const {loading, data, fetchMore} = useQuery<PokemonsQuery>(GET_POKEMONS, {
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
      <section className="px-8 py-4 space-y-6">
        <Filter filter={filter} setFilter={setFilter} />
        <PokemonList pokemons={data} />
      </section>
    </main>
  )
}

export default App
