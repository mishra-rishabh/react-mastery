/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
    const { addTodo } = useContext(TodoItemsContext);
    const todoNameElement = useRef();
    const dueDateElement = useRef();

    const handleAddButton = (event) => {
        event.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;

        addTodo(todoName, dueDate);

        todoNameElement.current.value = "";
        dueDateElement.current.value = "";
    }

    return (
        <div className="container">
            <form className="row my-row" onSubmit={handleAddButton}>
                <div className="col-6">
                    <input type="text" placeholder="Enter todo here" ref={todoNameElement} />
                </div>

                <div className="col-3">
                    <input type="date" ref={dueDateElement} />
                </div>

                <div className="col-3">
                    <button className="btn btn-success my-button">
                        <IoIosAddCircleOutline />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddTodo;