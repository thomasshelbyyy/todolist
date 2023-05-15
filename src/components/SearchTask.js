import {  Search } from "react-bootstrap-icons"
import React from "react"

function SearchTask(props) {

    return(
        <div>
            <span className="btn" onClick={()=> props.toggleInput("search")}><Search /></span>
            <input 
            type="text" 
            className={props.search ? "input" : "input hide"} 
            placeholder="Search task"
            onChange={(event)=> props.handleChange(event, "search")}
            value={props.inputValue}
            onKeyUp={()=> props.handleSearch(props.inputValue)}
            />
        </div>
    )
}

export default SearchTask