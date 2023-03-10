import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {


  document.body.style.backgroundImage = "url('gradient3.jpg')";
  document.body.style.backgroundAttachment = "fixed";
 

  document.body.style.backgroundColor = "white"


  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(() => 0)

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='red'
          progress={progress}
        />

        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          style={{
            position: 'fixed',
            padding: '0.2rem 1rem',
            fontSize: '20px',
            bottom: '40px',
            right: '40px',
            background: 'rgba(0,0,0,0.4)',
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            borderBottom: '1px solid #fff',
          }}
        >
          <h2>↑</h2>
        </button>

        <Routes>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} country="in" key="general" pageSize={pageSize} category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} country="in" key="business" pageSize={pageSize} category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} country="in" key="entertainment" pageSize={pageSize} category="entertainment" />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} country="in" key="sports" pageSize={pageSize} category="sports" />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} country="in" key="health" pageSize={pageSize} category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} country="in" key="science" pageSize={pageSize} category="science" />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} country="in" key="technology" pageSize={pageSize} category="technology" />}></Route>
        </Routes>
      </Router>
    </div>
  )

}

export default App;




