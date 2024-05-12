import { useState } from "react";

function App() {
  const [todos,setTodos] = useState([]);
  console.log("app got called")
  function addTodo() {
    console.log("addtodo got called")
    let newTodos=[];
    for(let i = 0 ; i < todos.length ; i++){
      newTodos.push(todos[i])
    }
    newTodos.push({
      title:"new todo",
      description:"new todo description",
      
    })
    setTodos(newTodos)
    
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
/*function NewTodos(props){
  return <div>
    {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
  </div>
}*/
function DarkNewTodos(props){
  return <div>
    {props.todos.map(function(todo){
        return <div style={{background:"black",color:"white"}}> 
        <Todo title={todo.title} description={todo.description}></Todo>
        </div>
      })}
  </div>
}
function Todo(props){
  console.log("todo component got called")
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
