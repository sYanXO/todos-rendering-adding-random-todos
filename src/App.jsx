import { useState } from "react";

function App() {
  const [todos,setTodos] = useState([{
    title:"go to gym",
    description: " go to gym at 6pm",
    completed: false
  },{
    title:"study dsa",
    description: " study dsa from 9pm to 12",
    completed: true
  },{
    title:"study CN",
    description: " study CN from 12 to 2",
    completed: false
  }]);
  function addTodo() {
    setTodos([...todos,{ // ... spreads all the values from the todo array and adds {....} inside the todo array
      title:"new todo",
      description:"new todo description",
      completed:false
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add a random Todo</button>
      
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
