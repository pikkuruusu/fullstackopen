import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const DisplayAnecdote = ({ anecdotes, selected, points }) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {points[selected]} votes
      </div>  
    </>    
  )
}

const DisplayMostPopular = ({ anecdotes, points, indexOfMostVoted }) => {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[indexOfMostVoted]}<br />
      </div>
      <div>
        has {points[indexOfMostVoted]} votes
      </div>
        
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(
    new Uint16Array(anecdotes.length).fill(0)
  )

  const selectRandomAnectdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  const voteForAnectdote = () => setPoints(() => {
    const newPointsArray = [...points]
    newPointsArray[selected] += 1
    return newPointsArray
  })

  const indexOfMostVoted = () => {
    const maxValue = Math.max(...points)
    return points.indexOf(maxValue)
  }

  return (
    <>
      <DisplayAnecdote anecdotes={anecdotes} selected={selected} points={points} />
      <div>
        <Button text='vote' handleClick={voteForAnectdote}/>
        <Button text='next anecdote' handleClick={selectRandomAnectdote}/>
      </div>
      <DisplayMostPopular anecdotes={anecdotes} points={points} indexOfMostVoted={indexOfMostVoted()} />
    </>
  )
}

export default App
