import React from 'react';
import { GlobalStyles } from './global';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
