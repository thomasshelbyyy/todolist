import { X } from "react-bootstrap-icons"

function Modals(props) {
    return(
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
          onChange={(event)=> props.handleChange(event, "edit")}
          value={props.inputValue}
          onKeyUp={(event)=> props.handleEdit(event, props.id)}
          />
        </div>
      </div>
    )
}

export default Modals