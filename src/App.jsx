import { useState } from "react"
import { TodoForm } from "./components/TodoForm"
import { TodoItem } from './TodoItem'


 function App() {
 const [todos,setTodos]=useState([])

 console.log(todos)
 const onNewTodo =(newTodo)=>{
  setTodos([...todos,newTodo])
 }
 const onDeleteItem =(id)=>{

 }
  return (
    <div>
      <TodoForm onNewTodo={onNewTodo}/>
      <TodoList  todos={todos}/>
    </div>
  )
}

export default App


// State batching 
//  Lifting Up
//  two way data binding