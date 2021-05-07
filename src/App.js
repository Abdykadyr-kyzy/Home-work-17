import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {ModalSwitch} from './components/ModalSwitch'

function App() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
