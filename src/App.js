import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';
import React from 'react';
import Cadastro from './Cadastro.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Faq from './Faq.js';

function App(){
  return (
    <BrowserRouter>

      <Header />

      <Switch> 
        <Route path="/Cadastro">   
          <Cadastro />   
        </Route>

        <Route path="/Faq">
          <Faq/>
        </Route> 

        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    
    </BrowserRouter>
  );
};

export default App;
