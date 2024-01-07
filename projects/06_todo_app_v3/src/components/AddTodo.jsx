/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodo({onNewItem}) {
    const [todoName, setTodoName] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleNameChange = (event) => {
        setTodoName(event.target.value);
    }

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    }

    const handleAddButton = () => {
        onNewItem(todoName, dueDate);
        
        setTodoName("");
        setDueDate("")
    }

    return (
        <div className="container">
            <div className="row my-row">
                <div className="col-6">
                    <input type="text" placeholder="Enter todo here" onChange={handleNameChange} value={todoName} />
                </div>

                <div className="col-3">
                    <input type="date" onChange={handleDateChange} value={dueDate} />
                </div>

                <div className="col-3">
                    <button type="button" className="btn btn-success my-button" onClick={handleAddButton}>
                        <IoIosAddCircleOutline />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;