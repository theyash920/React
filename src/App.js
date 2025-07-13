import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [value,setValue] = useState(7)

  return(
    <div className = "App">
      <Navbar/>
      <div className = 'value'>{value}</div>
      <button onClick={()=>{setValue(value + 1)}}>Increment Counter</button>
      <Footer/>
    </div>
  );
}

export default App;
