import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
  );
}

export default App;
