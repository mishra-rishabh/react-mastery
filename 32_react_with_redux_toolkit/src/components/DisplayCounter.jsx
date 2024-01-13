import { useSelector } from "react-redux";

const DisplayCounter = () => {

    const { counterVal } = useSelector(store => store.counter);

    return (
        <p className="fs-5 mb-4 text-info">
            Current counter value: {counterVal}
        </p>

    );
};

export default DisplayCounter;