/* eslint-disable react/prop-types */
import styles from "./css_modules/Item.module.css"

function Item({ foodItem }) {
    function handleBuyEvent() {
        alert(`${foodItem} le lo bhai!`)
    }

    return (
        <li className={`${styles['food-item-style']} list-group-item`} onClick={handleBuyEvent}>
            {foodItem}
            <button className={`${styles.button} btn btn-primary`}>
                Buy
            </button>
        </li>
    );
}

export default Item;