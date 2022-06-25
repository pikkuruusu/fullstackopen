import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const DisplayStatistics = ({ stats }) => {
  return (
    <p>
      good: {stats.good}<br />
      neutral: {stats.neutral}<br />
      bad: {stats.bad}<br />
      all: {stats.total}<br />
      average: {stats.average}<br />
      positive: {stats.positive} %
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

  const total = good + neutral + bad
  const averageScore = () => total ? (good-bad)/total : 0

  const positivePercentage = () => total ? (good/total) * 100 : 0

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: total,
    average: averageScore(),
    positive: positivePercentage()
  }

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button text='Good' handleClick={increaseGood} />
        <Button text='Neutral' handleClick={increaseNeutral} />
        <Button text='Bad' handleClick={increaseBad} />
      </p>
      <h1>statistics</h1>
      <DisplayStatistics stats={statistics} />
    </div>
  )
}

export default App