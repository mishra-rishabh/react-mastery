function ReusbaleComp() {
    let randomNumber = Math.round(Math.random() * 100);

    return <h3 style={{'background-color': 'orange'}}>Random number is: {randomNumber}</h3>
}

export default ReusbaleComp;