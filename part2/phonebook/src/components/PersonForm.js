import Input from "./Input"
import personService from "./../services/persons"

const PersonForm = ({ persons, setPersons, nameValue, setNewName, numberValue, setNewNumber, setNotifClass, setNotifMsg }) => {
    const successNotification = (msg) => {
        setNotifClass('success')
        setNotifMsg(msg)
        setTimeout(() => {
            setNotifMsg(null)
        }, 4000)
    }

    const errorNotification = (msg) => {
        setNotifClass('error')
        setNotifMsg(msg)
        setTimeout(() => {
            setNotifMsg(null)
        }, 4000)
    }
    
    const addPerson = (e) => {
        e.preventDefault()
        const trimmedName = nameValue.trim()

        const personObject = {
            name: trimmedName, 
            number: numberValue, 
        }

        if (persons.map(person => person.name).indexOf(trimmedName) === -1) {            
            personService.create(personObject)
                .then(response => {
                    setPersons(persons.concat(response))
                    successNotification(`Added ${trimmedName} to the phonebook.`)
                })
        } else {
            const confirmMsg = `${trimmedName} is already added to phonebook. Do you want to update the number?`
            if(window.confirm(confirmMsg)) {
                const personToUpdateId = persons.filter(person => person.name === trimmedName)[0].id
                personService.update(personToUpdateId, personObject)
                    .then(response => {
                        setPersons(persons.map(person => person.id !== personToUpdateId ? person : response))
                        successNotification(`${trimmedName} was updated.`)
                    })
                    .catch(error => {
                        errorNotification(`${trimmedName} can't be found on server!`)
                        setPersons(persons.filter(person => person.id !== personToUpdateId))
                    })
                }
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
    
    return (
        <form onSubmit={addPerson}>
            <Input text='name' value={nameValue} onChange={handleNameChange} />
            <Input text='number' value={numberValue} onChange={handleNumberChange} />
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}


export default PersonForm