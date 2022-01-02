import React from 'react';
import { GlobalStyles } from './global';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Main from './components/main/Main';
import styled from 'styled-components';

const Div = styled.div`
  align-items: center;
`

function App() {
  return (
    <Div className='App'>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </Div>
  );
}

export default App;
