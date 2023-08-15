import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/store';
import { Provider } from 'react-redux';
import { AuthProvider } from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<AuthProvider>
<App/>
</AuthProvider>
  </Provider>
);

reportWebVitals();
