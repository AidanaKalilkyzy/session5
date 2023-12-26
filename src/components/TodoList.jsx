import React from 'react'


export const TodoList = ({todos}) => {
  return ( 
    <ul>
      {todos.map((el)=> <TodoItem key={el.id}{...el}/>)}
    </ul>
  )

}
