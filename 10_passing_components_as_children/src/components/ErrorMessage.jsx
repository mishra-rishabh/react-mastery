/* eslint-disable react/prop-types */
import styles from "./css_modules/ErrorMessage.module.css";

function ErrorMessage({ items /* destructuring */ }) {
    return (
        <>
            {items.length >= 5 && <h3 className={`${styles['error-msg']}`}>Zada nahi khana hai bhai!</h3>}
        </>
    )
}

export default ErrorMessage;