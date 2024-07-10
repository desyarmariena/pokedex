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

export default function Filter() {
  const {data} = useQuery<FiltersQuery>(GET_TYPES)

  return (
    <div className="flex space-x-4">
      <Input placeholder="Search Pokemon" />
      <Select>
        <SelectTrigger className="w-[180px] text-muted-foreground">
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
      <Select>
        <SelectTrigger className="w-[250px] text-muted-foreground">
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
