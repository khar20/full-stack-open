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
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  const exercises1 = props.part1.exercises
  const exercises2 = props.part2.exercises
  const exercises3 = props.part3.exercises

  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />
    </div>
  )
}

export default App