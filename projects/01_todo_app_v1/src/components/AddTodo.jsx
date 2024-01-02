function AddTodo() {
    return (
        <div className="container">
            <div className="row my-row">
                <div className="col-6">
                    <input type="text" placeholder="Enter todo here" />
                </div>

                <div className="col-3">
                    <input type="date" />
                </div>

                <div className="col-3">
                    <button type="button" className="btn btn-success my-button">Success</button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;