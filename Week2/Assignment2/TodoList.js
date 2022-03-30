function TodoList(props){
    return(
      props.text.map((todos, index) => {
        return(
        
        <li key = {index}>
        <input type="checkbox"></input>{todos.text}</li>)
      })
    );
    }
    
    export default TodoList