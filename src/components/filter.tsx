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

export default function FilterPokemon({setFilter}: FilterProps) {
  const {data} = useQuery<FiltersQuery>(GET_TYPES)

  const onChangeHandler = (key: string, value: string | number) => {
    setFilter(prev => ({...prev, [key]: value === 'all' ? '' : value}))
  }

  return (
    <div className="flex space-x-4">
      <Input
        placeholder="Search Pokemon"
        onChange={e => {
          onChangeHandler('name', e.target.value)
        }}
      />
      <Select onValueChange={value => onChangeHandler('type', value)}>
        <SelectTrigger className="w-[180px] text-muted-foreground capitalize">
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
      <Select onValueChange={value => onChangeHandler('gen', value)}>
        <SelectTrigger className="w-[250px] text-muted-foreground capitalize">
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
