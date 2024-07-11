type Props = {
  abilities: {
    ability?: {
      name: string
      effects: {effect: string}[]
    } | null
  }[]
}
export default function DetailAbilities({abilities}: Props) {
  return (
    <section className="bg-gray-800 p-4">
      <h2 className="text-lg font-semibold mb-4">Abilities</h2>
      <div>
        <ul className="list-disc pl-6 space-y-2">
          {abilities.map((datum, index) => (
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
  )
}
