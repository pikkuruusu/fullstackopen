import Person from "./Person"

const PersonList = ( { persons, setPersons }) =>
    <div>
        { persons.map( person => 
            <Person key={person.id} person={person} setPersons={setPersons} />
        )}
    </div>

export default PersonList