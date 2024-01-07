/* eslint-disable react/prop-types */
import styles from "./css_modules/Item.module.css"

function Item({ foodItem, isBought, handleBuyButton }) {
    // function handleBuyEvent() {
    //     alert(`${foodItem} le lo bhai!`)
    // }


    return (
        <li className={`${styles['food-item-style']} list-group-item ${isBought ? 'active' : ""}`} onClick={handleBuyButton}>
            {foodItem}
            <button className={`${styles.button} btn btn-primary`}>Buy</button>
        </li>
    );
}

export default Item;