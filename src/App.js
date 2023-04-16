import { Routes, Route } from "react-router-dom"
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { auth } from "./utils/firebase";
import { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  })
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Signup />} />
      </Routes>
    </div>
  );
};

export default App;
