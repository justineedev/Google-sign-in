import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Mainpage from "./components/Mainpage";
import GoogleCallback from "./components/GoogleCallback";
// import Contact from "./components/Contact";
import Working from "./components/Working";
import Notfound from "./components/Notfound";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Mainpage></Mainpage>}></Route>
          <Route
            path="/GoogleCallback"
            element={<GoogleCallback></GoogleCallback>}
          ></Route>
          <Route path="/Contact" element={<Working></Working>}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
