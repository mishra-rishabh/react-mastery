# Conditional Rendering in React

## What?
* Displaying content based on certain conditions.
* Allows for dynamic user interfaces.

## Methods
* **If-else statements:** Choose between two blocks of content.
    ```javascript
    import './App.css';

    function App() {
        // uncomment the below array to see changes
        // let foodItems = ["Daal", "Roti", "Raajma", "Paneer", "Chana"];
        let foodItems = ["Daal", "Roti", "Raajma", "Paneer"];

        if(foodItems.length >= 5) {
            return <h3>Zada nahi khana hai bhai!</h3>
        }

        return (
            <>
                <h1>Healthy Foods</h1>
                <ul className="list-group">
                    {foodItems.map((food) => (<li key={food} className="list-group-item">{food}</li>))}
                </ul>
            </>
        )
    }

    export default App;

    ```

* **Ternary operators:** Quick way to choose between two options.
    ```javascript
    import './App.css';

    function App() {
        // uncomment the below array to see changes
        let foodItems = ["Daal", "Roti", "Raajma", "Paneer", "Chana"];
        // let foodItems = ["Daal", "Roti", "Raajma", "Paneer"];

        return (
            <>
                <h1>Healthy Foods</h1>
                {foodItems.length >= 5 ? <h3>Zada nahi khana hai bhai!</h3> : null}
                <ul className="list-group">
                    {foodItems.map((food) => (<li key={food} className="list-group-item">{food}</li>))}
                </ul>
            </>
        )
    }

    export default App;

    ```

* **Logical operators:** Useful for rendering content when a condition is true.
    ```javascript
    import './App.css';

    function App() {
        // uncomment the below array to see changes
        let foodItems = ["Daal", "Roti", "Raajma", "Paneer", "Chana"];
        // let foodItems = ["Daal", "Roti", "Raajma", "Paneer"];

        return (
            <>
                <h1>Healthy Foods</h1>
                {foodItems.length >= 5 && <h3>Zada nahi khana hai bhai!</h3>}
                <ul className="list-group">
                    {foodItems.map((food) => (<li key={food} className="list-group-item">{food}</li>))}
                </ul>
            </>
        )
    }

    export default App;

    ```

## Benefits
* Enhances user experience.
* Reduces unnecessary rendering.
* Makes apps more interactive and responsive