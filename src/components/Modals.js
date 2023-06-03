import { Plus, X } from "react-bootstrap-icons"
import { useState } from "react"

function Modals(props) {
  const [inputValue, setInputValue] = useState(props.initialInputValue || '')

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.handleEdit(inputValue, props.id)
  }
    return(
      <form onSubmit={handleSubmit}>

      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={props.onClose}>
            <X />
          </span>
          
          <h2>Edit Task</h2>
          <input 
          type="text"
          className="modal-input"
          placeholder="Edit Task"
          onChange={handleChange}
          value={inputValue}
          />
          <button className="btn"><Plus /></button>
        </div>
      </div>
      </form>
    )
}

export default Modals