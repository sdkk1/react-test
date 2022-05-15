import { render, screen } from '@testing-library/react'
import FrameworkList from './FrameworkList'
import { frameworks } from './constants'

describe('Rendering', () => {
  it('Should render No data ! when no data propped', () => {
    render(<FrameworkList frameworks={[]} />)
    expect(screen.getByText('No data !')).toBeInTheDocument()
  })

  it('Should render list item correctly', () => {
    render(<FrameworkList frameworks={frameworks} />)
    const frameworkTexts = screen
      .getAllByRole('listitem')
      .map(el => el.textContent)
    const frameworkNames = frameworks.map(el => el.name)
    expect(frameworkTexts).toEqual(frameworkNames)
    expect(screen.queryByText('No data !')).toBeNull()
  })
})
