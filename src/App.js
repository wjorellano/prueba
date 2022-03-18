import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home.jsx';
// import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
