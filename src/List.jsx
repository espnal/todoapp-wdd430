/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import TodoItem from './TodoItem'

const List = ({todos, toggleTodo}) => {
  return (
    <ul>
      {todos.length === 0 && "No Todos"}
      {todos.map((todo)=>(
        <TodoItem 
        {...todo} 
        key={todo.id} 
        toggleTodo={toggleTodo}/>
      ))}

    </ul>
  )
}

export default List
