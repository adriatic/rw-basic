import { render } from '@redwoodjs/testing/web'

import FixieStartPage from './FixieStartPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FixieStartPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FixieStartPage />)
    }).not.toThrow()
  })
})
