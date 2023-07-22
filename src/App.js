import './App.css';
import Landing from './features/landing/Landing';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Landing/>
    </Router>
  );
}

export default App;
