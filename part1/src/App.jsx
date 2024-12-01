

const Course = ({course}) =>{

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
}


export default App





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
