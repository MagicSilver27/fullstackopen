import { useState } from 'react'


const Filter = ({show, handleShowChange}) =>{
  return(
  <div>
        Filter show with 
        <input 
          value={show}
          onChange={handleShowChange}
        />
      </div>

)
}

const PersonForm =({addPerson,newName,handleNameChange,newNumber,handleNumberChange}) =>{
  return(
  <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
          value= {newName}
          onChange={handleNameChange}
          />
        </div>
        <div>number: 
          <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
)
}

const Persons =({filteredPersons}) => {
  return(
    <div>
    {filteredPersons.map((person) =>
      <p key={person.id}>
        {person.name}: {person.number}
      </p>
    )}
    </div>
  )
  
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [show, setShow] = useState('')
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(show.toLowerCase())
  )

  const handleNameChange= (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
    
  }
  const handleNumberChange= (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  const handleShowChange= (event) => {
    console.log(event.target.value);
    setShow(event.target.value)
  }
  
  
  const addPerson= (event) =>{
    event.preventDefault()
    
    if (persons.find((element) => element.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      
    }else{
      const personObjet = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
      setPersons(persons.concat(personObjet))
      setNewName('')
      setNewNumber('')
      console.log('button clicked', event.target)
    }
    
  }
  
  
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter show={show} handleShowChange={handleShowChange}/>
        
      <h3>Add a new</h3>
        <PersonForm addPerson={addPerson} 
        newName={newName} 
        handleNameChange ={handleNameChange}
        newNumber ={newNumber}
        handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App



/* 
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  ) 
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.contact(noteObject))
    setNewNote('')
    console.log('button clicked', event.target)
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
      <input 
          value={newNote} 
          onChange={handleNoteChange}
      />
        <button type="submit">save</button>
      </form>

    </div>
  )
} */




/* const Course = ({course}) =>{

  const body =  course.map((x) => {
    const total = x.parts.reduce((sum, part) => sum + part.exercises, 0);  
    return(
      <div key={x.id}>
        <h1>{x.name}</h1>
        {x.parts.map((part) => (
          <p key={part.id}>
            {part.name}: {part.exercises}
          </p>
        ))}
        <h3>Total: {total}</h3>
      </div>
      );
  });
  
return(
  <div>{body}</div>
)

}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={courses} />
} */

/* import  Note  from "./components/Note";



const App = ({notes}) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key= {note.id} note={note} />
        )}
      </ul>
    </div>
  )
} */
