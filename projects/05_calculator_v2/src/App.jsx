import Display from './components/Display';
import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';

function App() {
  const [calculateValue, setCalculateValue] = useState("");

  const handleOnButtonClick = (buttonText) => {
    if(buttonText === "C") {
      setCalculateValue("");
    } else if(buttonText === "=") {
      const result = eval(calculateValue);
      setCalculateValue(result);
    } else {
      const newDisplayValue = calculateValue + buttonText;
      setCalculateValue(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayValue={calculateValue}></Display>
      <ButtonsContainer onButtonClick={handleOnButtonClick}></ButtonsContainer>
    </div>
  )
}

export default App
