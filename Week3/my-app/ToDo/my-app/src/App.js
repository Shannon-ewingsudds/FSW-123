import {useState} from 'react';
import ToDoList from './ToDoList.js';
import {listofTodos} from './STORE.js';
import './App.css';


function App() {
  const [todos, setTodos] = useState(listofTodos);  

  const completeTodo = id => {
    const tempList = [...todos];
    const todoID = tempList.find(todo => todo.id === id);

    todoID.isCompleted = true;
    setTodos(tempList);
  }

  const deleteTodo = (id) => {
    const tempList = [...todos];
    const filteredList = tempList.filter(todo => todo.id !== id);

    setTodos(filteredList);

  }

  return (
    <ToDoList todos ={todos} completeTodo ={completeTodo} deleteTodo ={deleteTodo}/>
  );
}

export default App;
