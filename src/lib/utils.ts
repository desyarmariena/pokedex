import {type ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertIdToString(id: number) {
  // Convert the number to a string with base 10 (decimal)
  const idString = id.toString(5)
  const paddedString = idString.padStart(5, '0')
  return `#${paddedString}`
}

export function capitalizeWords(str?: string) {
  if (!str) return ''
  return str
    .split(/\s|-+/) // Split on spaces or hyphens
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter and join
    .join(' ') // Join words back with spaces
}
