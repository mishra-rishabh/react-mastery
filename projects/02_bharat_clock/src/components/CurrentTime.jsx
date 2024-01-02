let CurrentTime = () => {
    let time = new Date();

    return (
        <div>
            <h5>Current Date: {time.toLocaleDateString()}</h5>
            <h5>Current Time: {time.toLocaleTimeString()}</h5>
        </div>
    );
}

export default CurrentTime;