import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ text, value }) => <>{text}: {value}<br /></>

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const averageScore = () => total ? (good-bad)/total : 0
  const positivePercentage = () => total ? ((good/total) * 100) + ' %' : 0
  
  if (total) {
    return (
      <div>
        <StatisticsLine text='good' value={good} />
        <StatisticsLine text='geutral' value={neutral} />
        <StatisticsLine text='bad' value={bad} />
        <StatisticsLine text='all' value={total} />
        <StatisticsLine text='average' value={averageScore()} />
        <StatisticsLine text='positive' value={positivePercentage()} />
      </div>
    )
  } else {
    return (
      <p>
        No feedback given
      </p>
    )
  }

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App