import GoogleSignIn from './components/GoogleSignIn';
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <GoogleSignIn></GoogleSignIn>
    </div>
  );
}

export default App;
