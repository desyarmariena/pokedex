type Evolution = {
  id: number
  name: string
  order?: number | null
  pokemons: {
    pokemonsprites: {
      sprites: {
        other: {'official-artwork': {front_default: string}}
      }
    }[]
  }[]
}

export default function EvolutionChain({species}: {species: Evolution[]}) {
  if (species.length === 0) return null

  return (
    <section className="bg-gray-800 p-4">
      <h2 className="text-lg font-semibold mb-4">Evolution Chain</h2>
      <div className="flex justify-around">
        {[...species]
          .sort((a, b) => (a.order ?? 1) - (b.order ?? 1))
          .map(species => {
            return (
              <div
                key={species.id}
                className="flex justify-center gap-2 py-2 px-4 border border-gray-500 rounded "
              >
                <h4 className="capitalize">{species.name}</h4>
                <img
                  className="w-20"
                  src={
                    species.pokemons[0].pokemonsprites[0].sprites.other[
                      'official-artwork'
                    ].front_default
                  }
                />
              </div>
            )
          })}
      </div>
    </section>
  )
}
