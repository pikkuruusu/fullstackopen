import Person from "./Person"

const PersonList = ( { persons, setPersons, setNotifClass, setNotifMsg }) =>
    <div>
        { persons.map( person => 
            <Person 
                key={person.id} 
                person={person} 
                persons={persons}
                setPersons={setPersons}
                setNotifClass={setNotifClass}
                setNotifMsg={setNotifMsg} 
            />
        )}
    </div>

export default PersonList