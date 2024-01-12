/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const TodoItem = ({completed, id, title, toggleTodo}) => {
  return (
    <li>
      <label>
        <input 
        type="checkbox" 
        checked={completed} 
        onChange={e => toggleTodo(id, e.target.checked)}/>
      {title}
      </label>
    </li>
  )
}

export default TodoItem
