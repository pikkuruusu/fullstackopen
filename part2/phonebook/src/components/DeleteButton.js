import personService from "../services/persons"

const DeleteButton = ({ person, setPersons }) => {
    const handleRemoveClick = () => {
        if(window.confirm(`Do you really want to remove ${person.name}?`)) {
            personService.remove(person.id)
            .then(() => 
                personService.getAll()
                    .then(response => setPersons(response))   
            ) 
        }
    }

    return (
        <button onClick={handleRemoveClick}>remove</button>
    )
}

export default DeleteButton