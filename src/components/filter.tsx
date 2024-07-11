import {useQuery} from '@apollo/client'
import {GET_TYPES} from '../gql/pokemon'
import {FiltersQuery} from '../generated/types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import {Input} from './ui/input'

type Filter = {
  name: string
  type: string
  gen: string
}
type FilterProps = {
  filter: Filter
  setFilter: React.Dispatch<React.SetStateAction<Filter>>
}

export default function FilterPokemon({filter, setFilter}: FilterProps) {
  const {data} = useQuery<FiltersQuery>(GET_TYPES)

  const onChangeHandler = (key: string, value: string | number) => {
    setFilter(prev => ({...prev, [key]: value === 'all' ? '' : value}))
  }

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <Input
        placeholder="Search Pokemon"
        value={filter.name}
        onChange={e => {
          onChangeHandler('name', e.target.value)
        }}
        className="flex-2 sm:flex-1"
      />
      <Select
        value={filter.type}
        onValueChange={value => onChangeHandler('type', value)}
      >
        <SelectTrigger className="min-w-40 sm:max-w-40 text-muted-foreground capitalize flex-1 ">
          <SelectValue placeholder="By Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          {data?.types.map(type => {
            return (
              <SelectItem
                key={type.id}
                value={type.name}
                className="capitalize"
              >
                {type.name}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
      <Select
        value={filter.gen}
        onValueChange={value => onChangeHandler('gen', value)}
      >
        <SelectTrigger className="sm:max-w-44 text-muted-foreground capitalize flex-1">
          <SelectValue placeholder="By Generation" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Generations</SelectItem>
          {data?.generations.map(gen => {
            const arr = gen.name.split('-')
            return (
              <SelectItem key={gen.id} value={gen.name} className="capitalize">
                {arr[0]} {arr[1].toUpperCase()}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
