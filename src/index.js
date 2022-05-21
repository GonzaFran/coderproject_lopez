import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAzmddeGxnSwBEfqGvc7W_pgiy22K_Xqn4",
  authDomain: "pokemonblackmarket-7e71a.firebaseapp.com",
  projectId: "pokemonblackmarket-7e71a",
  storageBucket: "pokemonblackmarket-7e71a.appspot.com",
  messagingSenderId: "53507783577",
  appId: "1:53507783577:web:681476ec10b20ead2fb108"
};


const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp)

ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);