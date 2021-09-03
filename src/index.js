import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/compat";

firebase.initializeApp({
    apiKey: "AIzaSyA4DPgby7bXx-E2KfmDTPvizN38cSMCLhA",
    authDomain: "fir-react-chat-9f361.firebaseapp.com",
    projectId: "fir-react-chat-9f361",
    storageBucket: "fir-react-chat-9f361.appspot.com",
    messagingSenderId: "665637728055",
    appId: "1:665637728055:web:29eda696f4ca2a2a69b4b2",
    measurementId: "G-T67S9ZXNQB"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext(null)

ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{auth, firebase, firestore}}>
          <App/>
      </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

