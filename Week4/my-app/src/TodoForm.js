import {useState} from 'react';

export default function TodoForm(props){

    const [userInput, storeInput] = useState("")
    const changeInput = () => {storeInput(document.querySelector("#inputTodoItem").value)} 

    return(
        <div id = "todoForm">
            <input type = "text" placeholder = "type item here"  id = "inputTodoItem" onChange = {() => changeInput()}></input>
            <button id='addTodo' onClick = {() =>{
                if(document.querySelector("#inputTodoItem").value !== ""){
                    props.addTodo(userInput)
                } 

                else if(document.querySelector("#inputTodoItem").value === ""){
                    const removeError = () =>{
                        document.querySelector("#errorMessage").remove()
                    }
                    const errorMessage = document.createElement("h3") 
                    errorMessage.textContent = "Todo is Empty!!"
                    errorMessage.setAttribute("id", "errorMessage")
                    document.querySelector("#todoForm").appendChild(errorMessage)
                    setTimeout(removeError, 5000)
                }
            }}>Add todo</button>
        </div>
    )
}