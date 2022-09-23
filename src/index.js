import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
 
   <Auth0Provider
    domain='dev-piw6pvdv.us.auth0.com'
    clientId="o736FG7WbNU2W1usprBrMnwcQlnFctY8"
    redirectUri={window.location.origin}
    >
     <BrowserRouter>
    <App />
    </BrowserRouter>
    
    </Auth0Provider>
 
  </React.StrictMode>
);

