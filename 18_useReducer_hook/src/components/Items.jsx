/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./css_module/Items.module.css";

import TodoItem from "./TodoItem";

const Items = () => {
    const { items } = useContext(TodoItemsContext);

    return (
        <div className={styles.itemsContainer}>
            {items.map((item) => (<TodoItem key={item.name} itemName={item.name} dueDate={item.date}></TodoItem>))}
        </div>
    )
}

export default Items;