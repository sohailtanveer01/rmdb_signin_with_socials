import React from 'react';

//signin

import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <Auth0Provider
  domain="dev-sbsyt7eyqs62mwjb.us.auth0.com"
  clientId="iOPACJFX5PBoLEuKIIgTazWcDPDn7cl3"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>    <App />
</Auth0Provider>,
  document.getElementById('root')
);
