import Person from "./Person"

const PersonList = ( { persons }) =>
    <div>
        { persons.map( person => 
            <Person key={person.id} person={person} />
        )}
    </div>

export default PersonList