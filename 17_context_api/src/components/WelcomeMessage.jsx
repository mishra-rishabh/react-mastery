/* eslint-disable react/prop-types */
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import styles from "./css_module/WelcomeMessage.module.css";

function WelcomeMessage() {
    const { items } = useContext(TodoItemsContext);

    return (
        items.length === 0 && <p className={styles.welcome}>Enjoy bro, kuchh task add karo!</p>
    )
}

export default WelcomeMessage;