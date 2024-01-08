/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";

function TodoItem({itemName, dueDate, onDelete}) {
    return (
        <div className="container">
            <div className="row my-row">
                <div className="col-6">{itemName}</div>

                <div className="col-3">{dueDate}</div>

                <div className="col-3">
                    <button type="button" className="btn btn-danger my-button" onClick={() => onDelete(itemName)}>
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;