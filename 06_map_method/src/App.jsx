import './App.css';

function App() {
  let foodItems = ["Daal", "Roti", "Raajma", "Paneer", "Chana"];

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
