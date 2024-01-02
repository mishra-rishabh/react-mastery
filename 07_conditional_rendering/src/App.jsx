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
