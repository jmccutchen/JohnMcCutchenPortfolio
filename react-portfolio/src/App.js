import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Main from "./components/pages/Main";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>

      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
            </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
