import styles from "./css_modules/AddFood.module.css";

function AddFood() {
    const handleOnChangeEvent = (event) => {
        console.log(event.target.value);
    }
    return (
        <input type="text" placeholder="Enter food item here" className={styles.foodInput} onChange={(event) => handleOnChangeEvent(event)}></input>
    );  
}

export default AddFood;