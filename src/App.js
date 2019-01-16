import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './Style/Style.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path='/shivam-sharma' exact render={() => {
            return (<Index />);
          }} />
          <Route path='/shivam-sharma/resume' exact render={() => {
            return (<Resume />);
          }} />
          <Route path='/shivam-sharma/contact' exact render={() => {
            return (<Contact />);
          }} />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
