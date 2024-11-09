import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Courses from './components/Courses';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashborad';
import Logout from './components/Logout';
function App() {
    return (
        <Router>
        <Routes>
            <Route path="/courses" element={<Courses />} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
  
    );
}

export default App;

