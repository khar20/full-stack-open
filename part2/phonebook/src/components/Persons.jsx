const Persons = ({ persons, onRemove }) => (
  <>
    {persons.map(person =>
      <div key={person.id}>
        {person.name} {person.number}
        <button onClick={() => onRemove(person.id, person.name)}>delete</button>
      </div>
    )}
  </>
)

export default Persons
