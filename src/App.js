import './App.css';
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import Main from './components/Main/Main.jsx'
import Saludo from './components/Saludo/Saludo';

function App() {
  AOS.init();

  return (
    <div className="App" id='App'>
      <Saludo />
      <Main />
    </div>
  );
}

export default App;
