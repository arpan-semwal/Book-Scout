import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50"> 
        {/* Is div ki wajah se poora app responsive background lega */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/login" />} />

          {/*Only for logged in users */}

          <Route>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>
         
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;