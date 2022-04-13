import {useState} from 'react';
import ToDoList from './ToDoList.js';
import {listofTodos} from './STORE.js';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm.js';


function App() {
  const [todos, setTodos] = useState(listofTodos);  

  const completeTodo = id => {
    const tempList = [...todos];
    const todoID = tempList.find(todo => todo.id === id);
    todoID.isCompleted = true;
    setTodos(tempList);
  };

  const deleteTodo = (id) => {
    const tempList = [...todos];
    const filteredList = tempList.filter(todo => todo.id !== id);
    setTodos(filteredList);

  };
  const addTodo = (todoInput) => {
    const addonTodos = [...todos];
    const newTodo = 
    {
      id: uuidv4(), 
      text: `${todoInput}`, 
      isCompleted: false
    };
    addonTodos.push(newTodo)
    setTodos(addonTodos);
  };
  return (
    <>
    <h1>Add To the List of Todos</h1>
    <TodoForm addTodo = {addTodo}/>
    <ToDoList todos ={todos} completeTodo ={completeTodo} deleteTodo ={deleteTodo}/>
  </>
  );
}

export default App;
