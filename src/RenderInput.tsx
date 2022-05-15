import { useState } from 'react'

type Props = {
  outputConsole: (...data: any[]) => void
}

const RenderInput = ({ outputConsole }: Props) => {
  const [input, setInput] = useState('')

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const outputValue = () => {
    if (input) {
      outputConsole(input)
    }
  }

  return (
    <div>
      <input
        id='test'
        type='text'
        placeholder='Enter'
        value={input}
        onChange={onChangeValue}
      />
      <button onClick={outputValue}>Console</button>
    </div>
  )
}

export default RenderInput
