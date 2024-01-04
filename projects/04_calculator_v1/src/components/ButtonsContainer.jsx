import styles from "./ButtonsContainer.module.css"

const ButtonsContainer = () => {
    const buttonSymbols = [
        "7", "8", "9", "+",
        "4", "5", "6", "-",
        "1", "2", "3", "x",
        "0", "%", ".", "/",
        "=", "C"
    ];

    return (
        <div className={styles.buttonsContainer}>
            {buttonSymbols.map(symbol => {
                const buttonStyle = (symbol === "=" || symbol === "C") ? styles.specialButton : styles.button
                return <button  key={symbol} className={buttonStyle}>{symbol}</button>
            })}
        </div>
    );
}

export default ButtonsContainer;