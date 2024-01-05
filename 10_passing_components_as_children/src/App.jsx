import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import './App.css'

function App() {
  let foodItems = ["Daal", "Roti", "Raajma", "Paneer", "Chana"];
  // let foodItems = ["Daal", "Roti", "Raajma", "Paneer"];

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>

        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>Eat healthy and stay fit.😊</Container>
    </>
  );
}

export default App
