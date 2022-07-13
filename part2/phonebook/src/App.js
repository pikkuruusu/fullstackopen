import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonsList'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [searchFilter, setSearchFilter] = useState('')

  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(searchFilter.toLowerCase())
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchFilter} onChange={setSearchFilter}/>
      <h2>Add a new</h2>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
        nameValue={newName}
        setNewName={setNewName}
        numberValue={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <PersonList persons={personsToShow} />
      ...
    </div>
  )
}

export default App