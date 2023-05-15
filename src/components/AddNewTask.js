
import { PlusCircle } from "react-bootstrap-icons"
import React from "react"

function AddNewTask(props) {
    return(
        <div>
            <span className="btn" onClick={()=> props.toggleInput("add")}><PlusCircle /></span>
            <input 
            type="text" 
            className={props.addNew ? "input" : "input hide"} 
            placeholder="Add new task" 
            onChange={(event)=> props.handleChange(event, "addNew")} 
            value={props.inputValue}
            onKeyUp={(event)=> props.storeTask(event)}
            />
        </div>
    ) 
}

export default AddNewTask