import DeleteButton from "./DeleteButton"

const Person = ( { person, persons, setPersons, setNotifClass, setNotifMsg }) =>
    <div> {person.name} {person.number} 
        <DeleteButton 
            person={person} 
            persons={persons}
            setPersons={setPersons}
            setNotifClass={setNotifClass}
            setNotifMsg={setNotifMsg}
        /></div>

export default Person