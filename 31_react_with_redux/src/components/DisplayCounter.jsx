import { useSelector } from "react-redux";

const DisplayCounter = () => {

    const counter = useSelector(store => store.counter);

    return (
        <p className="fs-5 mb-4 text-info">
            Current counter value: {counter}
        </p>

    );
};

export default DisplayCounter;