import personService from "../services/persons"

const DeleteButton = ({ person, persons, setPersons, setNotifClass, setNotifMsg }) => {
    const handleRemoveClick = () => {
        if(window.confirm(`Do you really want to remove ${person.name}?`)) {
            personService.remove(person.id)
            .then(() => {
                setNotifClass('success')
                setNotifMsg(`Removed ${person.name}.`)
                setTimeout(() => {
                    setNotifMsg(null)
                }, 4000)
                setPersons(persons.filter(p => p.id !== person.id))
            } 
            )
            .catch(error => {
                setNotifClass('error')
                setNotifMsg(`${person.name} couldn't be found on server.`)
                setTimeout(() => {
                    setNotifMsg(null)
                }, 4000)
                setPersons(persons.filter(p => p.id !== person.id))
            })
        }
    }

    return (
        <button onClick={handleRemoveClick}>remove</button>
    )
}

export default DeleteButton