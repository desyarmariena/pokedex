import {useQuery} from '@apollo/client'
import {Link, useParams} from 'react-router-dom'
import {ChevronLeft} from 'lucide-react'
import {GET_POKEMON_DETAIL} from '../gql/pokemon'
import {PokemonQuery} from '../generated/types'
import {convertIdToString} from '../lib/utils'
import EvolutionChain from '../components/evolution-chain'
import DetailAbilities from '../components/detail-abilities'
import DetailStats from '../components/detail-stats'
import DetailMoves from '../components/detail-moves'

export default function PokemonDetailPage() {
  const {id = ''} = useParams()
  const {loading, data} = useQuery<PokemonQuery>(GET_POKEMON_DETAIL, {
    variables: {id},
  })

  if (!id) return null
  if (loading) {
    return <div></div>
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
  return (
    <div className="py-12 px-4 w-full">
      <section className="relative max-w-4xl mx-auto flex flex-wrap transition-all">
        <Link
          to="/"
          className="absolute -top-8 underline text-muted-foreground flex items-center gap-2"
        >
          <ChevronLeft width={'24px'} /> Home
        </Link>
        <div>
          <h1 className="text-2xl font-bold capitalize mb-2">
            {pokemonDetail.name}
          </h1>
          <p className="text-gray-300">{convertIdToString(pokemonDetail.id)}</p>
        </div>
        <picture className="sm:flex-1 flex justify-center min-h-16">
          <img
            src={
              pokemonDetail.pokemonsprites[0].sprites.other['official-artwork']
                .front_default
            }
            alt="pokemon image"
          />
        </picture>
      </section>
      <div className="max-w-4xl mx-auto space-y-4">
        <EvolutionChain species={species} />
        <div className="grid md:grid-cols-[45%_1fr] gap-4">
          <div className="space-y-4">
            <DetailAbilities abilities={pokemonDetail.abilities} />
            <DetailStats stats={pokemonDetail.stats} />
          </div>
          <DetailMoves moves={pokemonDetail.moves} />
        </div>
      </div>
    </div>
  )
}
