/* eslint-disable react/prop-types */
function ErrorMessage({ items /* destructuring */ }) {
    return (
        <>
            {items.length >= 5 && <h3>Zada nahi khana hai bhai!</h3>}
        </>
    )
}

export default ErrorMessage;