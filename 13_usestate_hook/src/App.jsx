import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import AddFood from './components/AddFood';
import { useState } from 'react';
import './App.css'

function App() {
  /* 
  let textStateArray = useState("initial text to be shown");
  let textToShow = textStateArray[0];
  let setTextState = textStateArray[1];
  */
  
  let [foodItems, setFoodItems] = useState([]);

  const handleOnKeyDownEvent = (event) => {
    if(event.key === 'Enter') {
      let newFoodItem = event.target.value;
      let newFoodItemsArray = [...foodItems, newFoodItem];
      event.target.value = "";
      
      setFoodItems(newFoodItemsArray);
      alert(` abbe bhai ${newFoodItem} added to the list of healthy foods!`);
    }
  }

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>

        <ErrorMessage items={foodItems}></ErrorMessage>
        <AddFood handleOnKeyDown={handleOnKeyDownEvent}></AddFood>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>Eat healthy and stay fit.😊</Container>
    </>
  );
}

export default App
