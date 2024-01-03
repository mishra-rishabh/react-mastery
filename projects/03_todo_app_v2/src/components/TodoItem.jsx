/* eslint-disable react/prop-types */
function TodoItem({itemName, dueDate}) {
    return (
        <div className="container">
            <div className="row my-row">
                <div className="col-6">{itemName}</div>

                <div className="col-3">{dueDate}</div>

                <div className="col-3">
                    <button type="button" className="btn btn-danger my-button">Success</button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;