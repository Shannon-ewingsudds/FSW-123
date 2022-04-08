import Todo from './Todo.js';

function ToDoList({todos, completeTodo, deleteTodo}) {

    const todoList = todos.map((todo) => {return <Todo todo ={todo} key ={todo.id} completeTodo ={completeTodo} deleteTodo ={deleteTodo}/>});
    return (
        <>
            <h1>Shannon's List of Todos</h1>
            <ul>
                <div className="TodoList">
                    {todoList}
                </div>
            </ul>
			<div className="Signature">
				Completed By Shannon Ewing-Sudds for FSW-123 Week
			</div>
        </>
    );
}

export default ToDoList;