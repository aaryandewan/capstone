import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import FirebaseContext from "./context/firebase";
import { firebaseApp, auth } from "./firebase.config";


ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebaseApp, auth }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

