import Input from "./Input"

const PersonForm = ({ persons, setPersons, nameValue, setNewName, numberValue, setNewNumber }) => {
    const addPerson = (e) => {
        e.preventDefault()
        if (persons.map(person => person.name).indexOf(nameValue) == -1) {
            setPersons(persons.concat({ 
                name: nameValue, 
                number: numberValue,
                id: persons.length + 1 
            }))
        } else {
            alert(`${nameValue} is already added to phonebook`)
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