import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Single from './components/single/Single';
import Login from './components/login/Login';
import Admin from './components/admin/Admin';
import Auth from './components/auth/Auth';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/product/:id' element={<Single />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Auth />} >
          <Route path='/admin' element={<Admin />} />
        </Route >
      </Routes>
    </div>
  );
}

export default App;
