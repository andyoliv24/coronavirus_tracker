import React from 'react';
import { BrowserRouter as Router, Route , Link } from "react-router-dom";
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div id="outer-container">
          {/* <Navbar /> */}
          <div className="">
            <Route path="/" component={Main}/>
          </div>
        </div>
    </Router>
  );
}

export default App;
