import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleSignIn from './components/GoogleSignIn';
import GoogleCallback from "./components/GoogleCallback";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<GoogleSignIn></GoogleSignIn>}></Route>
          <Route path="/GoogleCallback" element={<GoogleCallback></GoogleCallback>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>

    );
  
}

export default App;
