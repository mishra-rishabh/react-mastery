import { useEffect } from "react";
import { useState } from "react";

let CurrentTime = () => {
    const [ time, setTime ] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }

    }, []);

    return (
        <div>
            <h5>Current Date: {time.toLocaleDateString()}</h5>
            <h5>Current Time: {time.toLocaleTimeString()}</h5>
        </div>
    );
}

export default CurrentTime;