/* eslint-disable react/prop-types */
import Item from "./Item";

function FoodItems({ items } /* destructuring */) {
//   let foodItems = ["Daal", "Roti", "Raajma", "Paneer", "Chana"];

    return (
        <ul className="list-group">
            {items.map((food) => (<Item key={food} foodItem={food}></Item>))}
        </ul>
    );
}

export default FoodItems;