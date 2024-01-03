/* eslint-disable react/prop-types */
import styles from "./css_modules/Item.module.css";

const Item = (props) => {
    let { foodItem } = props;
    return <li className={`${styles['food-item-style']} list-group-item`}>{foodItem}</li>
};

export default Item;