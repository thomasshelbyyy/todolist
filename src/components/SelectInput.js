function SelectInput(props) {
    return(
        <div className="custom-select">
            <select name="" id="selectInput" onChange={props.handleOptionChange} value={props.value}>
                <option value="">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    )
}

export default SelectInput