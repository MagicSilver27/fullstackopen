
import { useState } from 'react'



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [porcent, setPorcent] = useState(0)
  
  
  const buttonGood = () =>{
    const updateGoog = good +1
    setGood(updateGoog)
    const updateTotal = updateGoog + neutral + bad
    setTotal(updateTotal)
    setAverage ((updateGoog - bad) / updateTotal)
    setPorcent (updateGoog * 100 / updateTotal)  
  }
  const buttonNeutral = () =>{
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    const updateTotal = good + updateNeutral + bad
    setTotal(updateTotal)
    setAverage ((good - bad) / updateTotal) 
    setPorcent (good * 100 / updateTotal)
  }
  const buttonBad = () =>{
    const updateBad = bad +1
    setBad(updateBad)
    const updateTotal = good + neutral + updateBad
    setTotal(updateTotal)
    setAverage ((good - updateBad) / updateTotal) 
    setPorcent (good * 100 / updateTotal)
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={buttonGood}>Good</button>
      <button onClick={buttonNeutral}>Neutral</button>
      <button onClick={buttonBad}>bad</button>
      <br />
      <h1>statistics</h1>
      <p>Good = {good}</p>
      <p>Neutral = {neutral}</p>
      <p>Bad = {bad}</p>
      <p>all = {total}</p>
      <p>average = {average}</p>
      <p>positiv = {porcent}%</p>
    </div>
  )
}




export default App

//const Display =({ counter }) => <div>{counter}</div>
  
/* const History = (props) => {
  if (props.allClicks.length === 0) {
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return(
    <div>
      buttom press history: {props.allClicks.join('')}
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft= left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text={'left'}/>
      <Button handleClick={handleRightClick} text={'right'}/>
      {right}
      <History allClicks={allClicks}/>
      total {total}
    </div>
  )
} */


/* const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
} */



/* 
const Header = (name) =>{

  return(
  <div>
    <h1>
      {name.course}
    </h1>
  </div>
  )
}

const Part =(part) =>{
  return(
    <div>
      <p>{part.part1} {part.exercises1}</p>
      <p>{part.part2} {part.exercises2}</p>
      <p>{part.part3} {part.exercises3}</p>
    </div>
  )
}

const Content = part =>{
  
  return(
    <div>
      <Part part1={part.parts[0].name} exercises1={part.parts[0].exercises}/>
      <Part part2={part.parts[1].name} exercises2={part.parts[1].exercises}/>
      <Part part3={part.parts[2].name} exercises3={part.parts[2].exercises}/>
    </div>
  )
}

const Total =(exercise)=>{

  return(
    <div>
      <p>Number of exercises {exercise.parts[0].exercises + exercise.parts[1].exercises 
      + exercise.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course ={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App */