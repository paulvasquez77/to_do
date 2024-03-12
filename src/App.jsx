import { useState, useRef } from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {

  const [todos, setTodos] = useState([{ id: 1, task: "tarea 1", completed: false }])

  const todoTaskRef = useRef();

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }]
    })

    todoTaskRef.current.value = null;
  }

  return (
    <>
      <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea" />
      <button onClick={handleTodoAdd}>Add</button>
      <button>Delete</button>
      <TodoList todos={todos} />
    </>
  )
}

export default App
