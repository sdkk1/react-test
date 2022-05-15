import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RenderInput from './RenderInput'

const outputConsole = jest.fn()

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    render(<RenderInput outputConsole={outputConsole} />)
    expect(screen.getByPlaceholderText('Enter')).toBeTruthy()
    expect(screen.getByRole('button')).toBeTruthy()
  })
})

describe('Input form onChange event', () => {
  it('Should update input value correctly', async () => {
    render(<RenderInput outputConsole={outputConsole} />)
    const inputElement: HTMLInputElement = screen.getByPlaceholderText('Enter')
    await userEvent.type(inputElement, 'test')
    expect(inputElement.value).toBe('test')
  })
})

describe('Console button conditionally triggered', () => {
  it('Should not trigger outputConsole function', async () => {
    render(<RenderInput outputConsole={outputConsole} />)
    await userEvent.click(screen.getByRole('button'))
    expect(outputConsole).not.toHaveBeenCalled()
  })
  it('Should trigger outputConsole function', async () => {
    render(<RenderInput outputConsole={outputConsole} />)
    const inputElement: HTMLInputElement = screen.getByPlaceholderText('Enter')
    await userEvent.type(inputElement, 'test')
    await userEvent.click(screen.getByRole('button'))
    expect(outputConsole).toHaveBeenCalledTimes(1)
  })
})
