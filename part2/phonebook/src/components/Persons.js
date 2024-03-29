import React from 'react'

const Persons = ({ persons, deletePerson }) => {

  return (
    <div>
      {persons.map(person => 
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deletePerson(person.id, window.confirm(`Delete ${person.name}?`))}>delete</button>
        </div>)}
    </div>
  )

}

export default Persons
