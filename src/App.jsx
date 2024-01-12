/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'
import DeleteButton from './DeleteButton'

const App = () => {
    const [todos, setTodos] = useState(()=>{
        const localstor = localStorage.getItem('ITEMS')
        if(localstor == null){
            return []
        }
        return JSON.parse(localstor)
    })
    useEffect(()=>{
        localStorage.setItem('ITEMS', JSON.stringify(todos))
    }, [todos])


    const addTodos = (title) =>{
        setTodos(currentTodos => {
            return [...currentTodos, {id: crypto.randomUUID(), title, completed: false}]})
    }
    const deleteTodos = () => {
        setTodos((currentTodos)=>{
            return currentTodos.filter(todos => !todos.completed)
        })
    }
    const toggleTodo = (id, completed) => {
        setTodos((currentTodos) =>{
            return currentTodos.map(todos => {
                if(todos.id === id){
                    return {...todos, completed}
                }
                return todos
            })
        })
    }
  return (
    <>
    <Form onSubmit={addTodos}/>
    <h1 className="header">Todo List</h1>
    <List todos={todos} toggleTodo={toggleTodo}/>
    {todos.length > 0 && (
    <DeleteButton onClick={deleteTodos} />
    )}
    </>
  )
}

export default App
