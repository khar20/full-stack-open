const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Part = (props) => {
  const name = props.part.name
  const exercises = props.part.exercises

  return <p>{name} {exercises}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const exercises1 = props.parts[0].exercises
  const exercises2 = props.parts[1].exercises
  const exercises3 = props.parts[2].exercises

  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App