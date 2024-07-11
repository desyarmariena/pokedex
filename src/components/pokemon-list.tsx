import {PokemonsQuery} from '../generated/types'
import {cn, convertIdToString} from '../lib/utils'
import {Link} from 'react-router-dom'

export default function PokemonList({pokemons}: {pokemons?: PokemonsQuery}) {
  if (!pokemons) return null

  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-400">
      {pokemons.pokemon_v2_pokemon.map(pokemon => {
        const pokemonTypes = pokemon.pokemon_v2_pokemontypes.map(type => ({
          name: type.pokemon_v2_type?.name,
          class: `bg-type-${type.pokemon_v2_type?.name}`,
        }))

        return (
          <Link
            key={pokemon.id}
            to={`/pokemon/${pokemon.id}`}
            className={cn(
              'relative border border-white/50 rounded-lg px-3 p-4 space-y-2 hover:ring hover:ring-ring transition-all',
              // pokemonTypes[0].class,
            )}
          >
            <h2 className="capitalize font-bold text-lg text-white">
              {pokemon.name}
            </h2>
            <p className="text-sm">{convertIdToString(pokemon.id)}</p>
            <p className="space-x-1 text-xs italic">
              {pokemonTypes.map((type, index) => (
                <span
                  key={index}
                  className="capitalize after:content-[','] last:after:content-['']"
                >
                  {type.name}
                </span>
              ))}
            </p>
            <picture>
              <img
                src={
                  pokemon.pokemon_v2_pokemonsprites[0].sprites.other[
                    'official-artwork'
                  ].front_default
                }
                className="absolute w-[100px] top-1 right-1"
              />
            </picture>
            {/* <div>
              {pokemonTypes.map(type => (
                <div
                  key={type.name}
                  className={cn(
                    type.class,
                    'inline-block mr-1 w-[20px] h-[20px] rounded-full',
                  )}
                ></div>
              ))}
            </div> */}
          </Link>
        )
      })}
    </div>
  )
}
