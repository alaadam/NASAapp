import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container/Container';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container />
      </Router>
    </div>
  );
}

export default App;
