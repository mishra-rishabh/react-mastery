/* eslint-disable react/prop-types */
import styles from "./css_module/Items.module.css";

import TodoItem from "./TodoItem";

const Items = ({ items }) => {
    return (
        <div className={styles.itemsContainer}>
            {items.map((item) => (<TodoItem key={item} itemName={item.name} dueDate={item.date}></TodoItem>))}
        </div>
    )
}

export default Items;