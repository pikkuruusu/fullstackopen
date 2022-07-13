import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [searchFilter, setSearchFilter] = useState('')

  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(searchFilter.toLowerCase())
    )

  const addPerson = (e) => {
    e.preventDefault()
    if (persons.map(person => person.name).indexOf(newName) == -1) {
      setPersons(persons.concat({ 
        name: newName, 
        number: newNumber,
        id: persons.length + 1 
      }))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setSearchFilter(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={searchFilter} onChange={handleFilterChange} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        { personsToShow.map( person => 
          <div key={person.id}> {person.name} {person.number}</div>
        )}
      </div>
      ...
    </div>
  )
}

export default App