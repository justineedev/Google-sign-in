import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Mainpage from "./components/Mainpage";
import GoogleCallback from "./components/GoogleCallback";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
