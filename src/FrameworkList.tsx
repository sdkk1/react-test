type Frameworks = {
  id: number
  name: string
}

type Props = {
  frameworks: Frameworks[]
}

const FrameworkList = ({ frameworks }: Props) => {
  if (!frameworks || frameworks.length === 0) {
    return <h1>No data !</h1>
  }

  return (
    <div>
      <ul>
        {frameworks.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default FrameworkList
