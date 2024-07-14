import {expect, test} from 'vitest'
import Loading from './loading'
import {render, screen} from '@testing-library/react'

test('render loading component', () => {
  render(<Loading />)

  // Check if the detail information is rendered correctly
  expect.hasAssertions()
  const loadingComponent = screen.queryByText('Loading...')
  expect(loadingComponent).toBeInTheDocument()
  expect(loadingComponent).toHaveTextContent('Loading')
})

test('not render loading component', () => {
  render(<Loading loading={false} />)
  const loadingComponent = screen.queryByText('Loading...')
  expect(loadingComponent).toBeNull()
})
