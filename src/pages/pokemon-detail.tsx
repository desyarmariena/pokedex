import {useQuery} from '@apollo/client'
import {useParams} from 'react-router-dom'
import {GET_POKEMON_DETAIL} from '../gql/pokemon'
import {PokemonQuery} from '../generated/types'
import {capitalizeWords, convertIdToString} from '../lib/utils'
import EvolutionChain from '../components/evolution-chain'

export default function PokemonDetailPage() {
  const {id = ''} = useParams()
  const {loading, data} = useQuery<PokemonQuery>(GET_POKEMON_DETAIL, {
    variables: {id},
  })

  if (!id) return null
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (data === undefined || (data && data.pokemon.length === 0)) {
    return (
      <div>
        <h1>Pokemon not found</h1>
      </div>
    )
  }

  const pokemonDetail = data.pokemon[0]
  const species = pokemonDetail.specy?.evolutionchain?.species || []
  console.log('====', pokemonDetail)
  return (
    <div className="py-12 px-4 w-full max-w-screen-md mx-auto space-y-4">
      <section className="relative flex flex-wrap transition-all">
        <div>
          <h1 className="text-2xl font-bold capitalize mb-2">
            {pokemonDetail.name}
          </h1>
          <p className="text-gray-300">{convertIdToString(pokemonDetail.id)}</p>
        </div>
        <picture className="sm:flex-1 flex justify-center">
          <img
            src={
              pokemonDetail.pokemonsprites[0].sprites.other['official-artwork']
                .front_default
            }
            alt="pokemon image"
          />
        </picture>
      </section>
      <EvolutionChain species={species} />
      <div className="space-y-4">
        <div className="space-y-4">
          <section className="bg-gray-800 p-4">
            <h2 className="text-lg font-semibold mb-4">Abilities</h2>
            <div>
              <ul className="list-disc pl-6 space-y-2">
                {pokemonDetail.abilities.map((datum, index) => (
                  <li key={index}>
                    <p className="capitalize">{datum.ability?.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {datum.ability?.effects[0].effect}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <div className="space-y-4">
          <section className="bg-gray-800 p-4">
            <h2 className="text-lg font-semibold mb-4">Moves</h2>
            <table>
              <thead className="bg-gray-700/50">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Power</th>
                  <th>Accuracy</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground text-sm">
                {pokemonDetail.moves.map(moves => {
                  return (
                    <tr key={moves.id}>
                      <td>Level {moves.level}</td>
                      <td>{capitalizeWords(moves.move?.name)}</td>
                      <td className="capitalize">{moves.move?.type?.name}</td>
                      <td className="text-right">{moves.move?.power}</td>
                      <td className="text-right">{moves.move?.accuracy}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  )
}
