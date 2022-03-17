import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
