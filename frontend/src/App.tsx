import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50"> 
        {/* Is div ki wajah se poora app responsive background lega */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          {/* Dashboard route hum agle step mein banayenge */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;