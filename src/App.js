import React from 'react';

import { BasicFooter, Blog, Possibility, Features, Service, Header, About } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
  <Navbar />
    <div className="gradient__bg">
    <Header />
    <Brand />
    <Service />
   {/*  <Features /> */}
   <About />
    <Possibility />
{/*     <CTA />
    <Blog /> */}
  </div>
{/*     <Footer /> */}
    
    <BasicFooter />
  </div>
);

export default App;
