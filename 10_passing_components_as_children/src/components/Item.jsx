/* eslint-disable react/prop-types */
import styles from "./css_modules/Item.module.css"

function Item({ foodItem }) {
    return (
        <li className={`${styles['food-item-style']} list-group-item`}>{foodItem}</li>
    );
}

export default Item;