import { render, screen } from '@testing-library/react'
import RenderUseEffect from './RenderUseEffect'

describe('useEffect rendering', () => {
  it('Should render only after async function resolved', async () => {
    render(<RenderUseEffect />)
    expect(screen.queryByText(/I am/)).toBeNull()
    expect(await screen.findByText(/I am/)).toBeInTheDocument()
  })
})
