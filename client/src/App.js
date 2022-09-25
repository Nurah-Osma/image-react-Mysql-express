
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Registar from './components/Registar';
import {Routes, Route}from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
   <Header/>
   <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/registar" element={<Registar />}/>
   </Routes>
   
  
    </>
  );
}

export default App;
