/* eslint-disable react/prop-types */
import styles from "./css_modules/Container.module.css";

function Container(props) {
    return (
        <div className={styles.container}>{props.children}</div>
    );
}

export default Container;