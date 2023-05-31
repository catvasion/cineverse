// import ReactDOM from 'react-dom/client';
import React, { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
} else {
  throw new Error('Root element not found');
}
