/* eslint-disable react/prop-types */
import Item from "./Item";

function FoodItems(props) {
    let { items } = props;

    return (
        <ul className="list-group">
            {items.map((food) => (<Item key={food} foodItem={food} handleBuyButton={() => alert(`${food} le lo bhai!`)}></Item>))}
        </ul>
    );    
}

export default FoodItems;