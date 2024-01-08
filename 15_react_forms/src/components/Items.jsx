/* eslint-disable react/prop-types */
import styles from "./css_module/Items.module.css";

import TodoItem from "./TodoItem";

const Items = ({ items, onDeleteClick }) => {
    return (
        <div className={styles.itemsContainer}>
            {items.map((item) => (<TodoItem key={item.name} itemName={item.name} dueDate={item.date} onDelete={onDeleteClick}></TodoItem>))}
        </div>
    )
}

export default Items;