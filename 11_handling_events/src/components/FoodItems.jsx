/* eslint-disable react/prop-types */
import Item from "./Item";

function FoodItems(props) {
    let { items } = props;

    return (
        <ul className="list-group">
            {items.map((food) => (<Item key={food} foodItem={food}></Item>))}
        </ul>
    );    
}

export default FoodItems;