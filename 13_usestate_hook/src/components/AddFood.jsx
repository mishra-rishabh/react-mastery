/* eslint-disable react/prop-types */
import styles from "./css_modules/AddFood.module.css";

function AddFood({ handleOnKeyDown }) {
    // const handleOnChangeEvent = (event) => {
    //     console.log(event.target.value);
    // }

    return (
        <input type="text" placeholder="Enter food item here and press Enter to add"
        className={styles.foodInput} onKeyDown={handleOnKeyDown}></input>
    );  
}

export default AddFood;