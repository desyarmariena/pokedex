import {capitalizeWords} from '../lib/utils'

type Props = {
  moves: {
    id: number
    level: number
    move?: {
      name: string
      power?: number | null
      accuracy?: number | null
      type?: {
        name: string
      } | null
    } | null
  }[]
}

export default function DetailMoves({moves}: Props) {
  return (
    <section className="bg-gray-800 p-4">
      <h2 className="text-lg font-semibold mb-4">Moves</h2>
      <div className="max-h-[35rem] overflow-auto">
        <table className="w-full">
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
            {moves.map(datum => {
              return (
                <tr key={datum.id}>
                  <td>Level {datum.level}</td>
                  <td>{capitalizeWords(datum.move?.name)}</td>
                  <td className="capitalize">{datum.move?.type?.name}</td>
                  <td className="text-right">{datum.move?.power}</td>
                  <td className="text-right">{datum.move?.accuracy}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
