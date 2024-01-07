/* eslint-disable react/prop-types */
import styles from "./css_modules/ErrorMessage.module.css";

function ErrorMessage({ items /* destructuring */ }) {
    return (
        <>
            {items.length === 0 && <h3 className={`${styles['error-msg']}`}>Bhai kuchh healthy khaane ko de do!</h3>}
        </>
    )
}

export default ErrorMessage;