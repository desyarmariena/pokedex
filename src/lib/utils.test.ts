import {it, expect} from 'vitest'
import {convertIdToString, capitalizeWords} from './utils'

it('should return pokemon id with correct format', () => {
  expect(convertIdToString(1)).toBe('#00001')
  expect(convertIdToString(23)).toBe('#00023')
  expect(convertIdToString(152)).toBe('#00152')
  expect(convertIdToString(1242)).toBe('#01242')
})

it('should return correct string with capitalize', () => {
  expect(capitalizeWords()).toBe('')
  expect(capitalizeWords(undefined)).toBe('')
  expect(capitalizeWords('tackle')).toBe('Tackle')
  expect(capitalizeWords('thunder-shock')).toBe('Thunder Shock')
})
