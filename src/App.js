import React from 'react';
import { GlobalStyles } from './global';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer'

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
