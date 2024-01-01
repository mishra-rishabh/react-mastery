function DynamicComp() {
    const myAge = 28;

    const fullName = () => {
        return "Rishabh Mishra"
    }
    return <h2>Hey there. This is {fullName()} and I am {myAge}.</h2>
}

export default DynamicComp;