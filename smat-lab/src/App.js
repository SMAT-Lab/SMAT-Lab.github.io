import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./routes/Home";
import News from "./routes/News";
import People from "./routes/People";
import Publication from "./routes/Publication";
import Projects from "./routes/Projects";
import Awards from "./routes/Awards";


function App() {
  return (
      <div className="App">
        <Router>
          <div style={{display:"flex", minHeight:"100vh", flexDirection:"column"}}>
            <Navbar />
            <div style={{flex:"1", paddingTop:"52px"}}>
              <Routes>
                <Route exact path="/"  element={<Home/>}/>
                <Route exact path="/news" element={<News/>}/>
                <Route exact path="/people" element={<People/>}/>
                <Route exact path="/publications" element={<Publication/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/awards" element={<Awards/>}/>    
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
  );
}

export default App;