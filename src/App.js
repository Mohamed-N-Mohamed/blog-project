import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/create" >Create</Link>
        <Link to="/login" >Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/create' element={<CreatePost />}></Route>
      </Routes>
    </Router>
 
  );
}

export default App;
