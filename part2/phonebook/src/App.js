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
  const [notifMsg, setNotifMsg] = useState(null)
  const [notifClass, setNotifClass] = useState(null)

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
      <Notification className={notifClass} message={notifMsg} />
      <Filter value={searchFilter} onChange={setSearchFilter}/>
      <h2>Add a new</h2>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
        nameValue={newName}
        setNewName={setNewName}
        numberValue={newNumber}
        setNewNumber={setNewNumber}
        setNotifClass={setNotifClass}
        setNotifMsg={setNotifMsg}
      />
      <h2>Numbers</h2>
      <PersonList 
        persons={personsToShow} 
        setPersons={setPersons}
        setNotifClass={setNotifClass}
        setNotifMsg={setNotifMsg}
      />
      ...
    </div>
  )
}

export default App