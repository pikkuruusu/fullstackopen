import { useState, useEffect } from 'react'
import personService from './services/persons'

import Notification from './components/Notification'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonsList'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [successMsg, setSuccessMsg] = useState(null)

  const [searchFilter, setSearchFilter] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(response => setPersons(response))
  }, [])

  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(searchFilter.toLowerCase())
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMsg} />
      <Filter value={searchFilter} onChange={setSearchFilter}/>
      <h2>Add a new</h2>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
        nameValue={newName}
        setNewName={setNewName}
        numberValue={newNumber}
        setNewNumber={setNewNumber}
        setSuccessMsg={setSuccessMsg}
      />
      <h2>Numbers</h2>
      <PersonList persons={personsToShow} setPersons={setPersons}/>
      ...
    </div>
  )
}

export default App