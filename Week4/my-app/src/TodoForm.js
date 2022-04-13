import {useState} from 'react';

export default function TodoForm(props){

    const [userInput, storeInput] = useState("")
    const changeInput = () => {storeInput(document.querySelector("#inputValue").value)} 

    return(
        <div className = "todoForm">
            <input type = "text" placeholder = "Add a todo here"  id = "todoText" onChange = {() => changeInput()}></input>
            <button id='addMe' onClick = {() =>{
                if(document.querySelector("#inputValue").value !== ""){
                    props.addTodo(userInput)
                } 

                else if(document.querySelector("#inputValue").value === ""){
                    const removeError = () =>{
                        document.querySelector("#errorReported").remove()
                    }
                    const errorReported = document.createElement("h2") 
                    errorReported.textContent = "todo is empty"
                    errorReported.style = "color: red"
                    errorReported.setAttribute("id", "errorReported")
                    document.querySelector("#inputOptions").appendChild(errorReported)
                    setTimeout(removeError, 4500)
                }
                
                }}>Add to the list!</button>
        </div>
    )
}
