import {capitalizeWords} from '../lib/utils'

type Props = {
  stats: {
    base_stat: number
    stat?: {
      name: string
    } | null
  }[]
}

export default function DetailStats({stats}: Props) {
  return (
    <section className="bg-gray-800 p-4">
      <h2 className="text-lg font-semibold mb-4">Stats</h2>
      <div>
        {stats.map((stats, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[110px_1fr_10%] gap-2 items-center justify-between text-sm mb-1 text-muted-foreground"
            >
              <span>{capitalizeWords(stats.stat?.name)}</span>
              <span className="block relative bg-gray-600 h-3 w-full rounded-xl overflow-hidden">
                <i
                  className="absolute h-full left-0 bg-type-grass"
                  style={{
                    width: `${(stats.base_stat / 255) * 100}%`,
                  }}
                ></i>
              </span>
              <span className="text-right">{stats.base_stat}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
