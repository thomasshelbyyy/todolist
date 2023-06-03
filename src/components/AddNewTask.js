
import { Plus, PlusCircle } from "react-bootstrap-icons"
import React from "react"

function AddNewTask(props) {
    return(
        <div>
            <form onSubmit={props.storeTask}>
                <span className="btn" onClick={()=> props.toggleInput("add")}><PlusCircle /></span>
                <input 
                type="text" 
                className={props.addNew ? "input" : "input hide"} 
                placeholder="Add new task" 
                onChange={(event)=> props.handleChange(event, "addNew")} 
                value={props.inputValue}
                />
                <button className={props.addNew ? "btn btn-primary rounded-circle" : "hide"}><Plus /></button>
            </form>
        </div>
    ) 
}

export default AddNewTask