import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
// import CtxProvider from './components/context/Context';
import { QueryClientProvider, QueryClient } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <CtxProvider> */}
        <App title="Github Users App"/>
      {/* </CtxProvider> */}
    </QueryClientProvider>
  </React.StrictMode>
);