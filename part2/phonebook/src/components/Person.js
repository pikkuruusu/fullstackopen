import DeleteButton from "./DeleteButton"

const Person = ( { person, setPersons }) =>
    <div> {person.name} {person.number} <DeleteButton person={person} setPersons={setPersons}/></div>

export default Person