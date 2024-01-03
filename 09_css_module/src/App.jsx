import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';

import './App.css';

function App() {
  let foodItems = ["Daal", "Roti", "Raajma", "Paneer", "Chana"];
  // let foodItems = ["Daal", "Roti", "Raajma", "Paneer"];

  return (
    <>
      <h1>Healthy Foods</h1>

      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  )
}

export default App;
