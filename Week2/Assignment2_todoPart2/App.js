import TodoList from "./TodoList"
import "./App.css"
import todos from "./Store"


function App() {
  return (

    <div className='week2'>
    
        <h1>List of To Do's</h1>  
        <ul> 
        <TodoList  text = {todos}/>   
        </ul> 
   </div>
  );
}

export default App;