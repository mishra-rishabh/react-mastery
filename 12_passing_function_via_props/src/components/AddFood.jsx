/* eslint-disable react/prop-types */
import styles from "./css_modules/AddFood.module.css";

function AddFood({ handleOnChange }) {
    // const handleOnChangeEvent = (event) => {
    //     console.log(event.target.value);
    // }

    return (
        <input type="text" placeholder="Enter food item here" className={styles.foodInput} onChange={handleOnChange}></input>
    );  
}

export default AddFood;