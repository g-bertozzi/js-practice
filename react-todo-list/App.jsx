import "./styles.css"
import { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState("") 
  const [todos, setTodos] = useState([])
  
  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: Math.random().toString(), title: newItem, completed: false }
      ]
    })
    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed} 
          {/* create new obj to return*/}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)

    })
  }

  return (
  <> 
  {/* use frag to wrap to return single element
  states are immutable in react- must use newitem which will re render 
  changing state var re renders entire component*/}

    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem} 
          onChange={e => setNewItem(e.target.value)}
          type = "text" 
          id ="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>

    <ul className="list">
      (todos.length === 0 && "No todos") 
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <label>
              <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={e => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <button onClick={() =>deleteTodo(todo.id)} 
            className="btn btn-danger">Delete</button>
        </li>
        )
      })}
    </ul>
  </>
  )
}