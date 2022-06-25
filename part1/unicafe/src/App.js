import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const DisplayStatistics = ({ good, neutral, bad}) => {
  return (
    <p>
      good: {good}<br />
      neutral: {neutral}<br />
      bad: {bad}<br />
    </p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad +1)

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button text='Good' handleClick={increaseGood} />
        <Button text='Neutral' handleClick={increaseNeutral} />
        <Button text='Bad' handleClick={increaseBad} />
      </p>
      <h1>statistics</h1>
      <DisplayStatistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App