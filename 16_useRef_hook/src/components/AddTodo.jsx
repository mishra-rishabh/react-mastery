/* eslint-disable react/prop-types */
import { /* useState, */ useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodo({onNewItem}) {
    // const [todoName, setTodoName] = useState("");
    // const [dueDate, setDueDate] = useState("");
    const todoNameElement = useRef();
    const dueDateElement = useRef();

    /* const handleNameChange = (event) => {
        setTodoName(event.target.value);
    }

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    } */

    const handleAddButton = (event) => {
        event.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;

        onNewItem(todoName, dueDate);

        todoNameElement.current.value = "";
        dueDateElement.current.value = "";

        /* setTodoName("");
        setDueDate("") */
    }

    return (
        <div className="container">
            <form className="row my-row" onSubmit={handleAddButton}>
                <div className="col-6">
                    <input type="text" placeholder="Enter todo here" ref={todoNameElement} /* onChange={handleNameChange} value={todoName} */ />
                </div>

                <div className="col-3">
                    <input type="date" ref={dueDateElement} /* onChange={handleDateChange} value={dueDate} */ />
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