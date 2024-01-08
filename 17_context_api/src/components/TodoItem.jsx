/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({itemName, dueDate}) {
    const { deleteTodo } = useContext(TodoItemsContext);

    return (
        <div className="container">
            <div className="row my-row">
                <div className="col-6">{itemName}</div>

                <div className="col-3">{dueDate}</div>

                <div className="col-3">
                    <button type="button" className="btn btn-danger my-button" onClick={() => deleteTodo(itemName)}>
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;