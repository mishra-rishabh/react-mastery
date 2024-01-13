import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {

    const dispatch = useDispatch();
    const inputElementAdd = useRef();
    const inputElementSub = useRef();

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    }

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    }

    const handleAddition = () => {
        // dispatch(counterActions.addition({ number: inputElementAdd.current.value }));
        // or
        dispatch(counterActions.addition(inputElementAdd.current.value));
        
        inputElementAdd.current.value = "";
    }

    const handleSubtraction = () => {
        dispatch(counterActions.subtraction({ number: inputElementSub.current.value }));
        
        inputElementSub.current.value = "";
    }

    const handlePrivacyToggle = () => {
        dispatch(privacyActions.toggle());
    }

    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button"
                    className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                    onClick={handleIncrement}>
                    +1
                </button>

                <button type="button"
                    className="btn btn-outline-light btn-lg px-4 me-sm-3 fw-bold"
                    onClick={handleDecrement}>
                    -1
                </button>
            </div>

            <div className="input-group d-grid d-sm-flex justify-content-sm-center">
                <div className="input-group d-grid d-sm-flex justify-content-sm-center control2">
                    <input type="text"
                        className="form-control"
                        placeholder="Enter a number to add"
                        aria-label="add"
                        ref={inputElementAdd} />

                    <button className="btn btn-outline-info px-4 me-sm-3 fw-bold"
                        type="button"
                        id="addButton"
                        onClick={handleAddition}>
                        Add
                    </button>
                </div>

                <div className="input-group d-grid d-sm-flex justify-content-sm-center control2">
                    <input type="text"
                        className="form-control"
                        placeholder="Enter a number to subtract"
                        aria-label="subtract"
                        ref={inputElementSub} />

                    <button className="btn btn-outline-light px-4 me-sm-3 fw-bold"
                        type="button"
                        id="subtractButton"
                        onClick={handleSubtraction}>
                        Subtract
                    </button>
                </div>
            </div>

            <div className="d-grid gap-2 col-6 mx-auto" style={{ marginTop: "20px" }}>
                <button className="btn btn-danger"
                    type="button"
                    onClick={handlePrivacyToggle}>
                    Privacy Toggle
                </button>
            </div>
        </>
    );
};

export default Controls;