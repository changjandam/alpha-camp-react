import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import colors from './theme'

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ChakraProvider theme={colors}>
      <App />
    </ChakraProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
