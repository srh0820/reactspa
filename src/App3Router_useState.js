import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {

  const [count, setCount] = useState(0); // 객체 구조 분해 할당
  const [toggle, setToggle] = useState(false);

  return(  
    <>
      <div>
        <p>현재 카운트: {count}</p>
        <button onClick={() => {setCount(count + 1)}}> 증가 </button>
        <button onClick={() => {setToggle(!toggle);}}> {
          toggle ? "열기" : "닫기"
        } </button>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/etc">ETC</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/etc" element={<h2>h2</h2>} />
        </Routes>
      </div>
    </>
  )
};

export default App;