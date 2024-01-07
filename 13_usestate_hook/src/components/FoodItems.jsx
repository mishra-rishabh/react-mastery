/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";

function FoodItems(props) {
    let { items } = props;
    let [activeItems, setActiveItems] = useState([]); 

    const onBuyButton = (food) => {
        let newItems = [...activeItems, food];
        setActiveItems(newItems)
        alert(`${food} le lo bhai!`)
    }

    return (
        <ul className="list-group">
            {items.map((food) => (<Item key={food} foodItem={food} isBought={activeItems.includes(food)} handleBuyButton={() => onBuyButton(food)}></Item>))}
        </ul>
    );    
}

export default FoodItems;