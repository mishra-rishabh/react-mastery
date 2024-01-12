import Header from './components/Header';
import DisplayCounter from './components/DisplayCounter';
import PrivateMessage from './components/PrivateMessage';
import Controls from './components/Controls';
import { useSelector } from 'react-redux';
import './App.css';

function App() {

  const privacy = useSelector(store => store.privacy);

  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? <DisplayCounter /> : <PrivateMessage />}
          <Controls></Controls>
        </div>
      </div>
    </div>
  )
}

export default App
