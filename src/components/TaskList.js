import { CheckSquare, Square, PencilSquare, Trash3Fill } from "react-bootstrap-icons"

function TaskList(props) {
    return(
        <li>
            <div>
                <span onClick={()=> props.handleComplete(props.id)} >{props.complete ? <CheckSquare size={20} /> : <Square size={20} />}</span>
                <span className={props.complete ? "task complete" : "task"}>{props.body}</span>
            </div>

            <div className="button-group">
                <button className="btn" onClick={()=> props.handleShow(props.id)}><PencilSquare /></button>
                <button className="btn" onClick={()=> props.handleDelete(props.id)}><Trash3Fill /></button>
            </div>
        </li>
    )
}

export default TaskList