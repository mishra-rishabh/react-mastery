function TodoItem2() {
    let item = " Read book";
    let date = "03-01-2024";

    return (
        <div className="container">
            <div className="row my-row">
                <div className="col-6">{item}</div>

                <div className="col-3">{date}</div>

                <div className="col-3">
                    <button type="button" className="btn btn-danger my-button">Success</button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem2;