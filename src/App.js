import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Mainpage from "./pages/Mainpage";
import GoogleCallback from "./pages/GoogleCallback";
import Contact from "./pages/Contact";
// import Working from "./pages/Working";
import Notfound from "./pages/Notfound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Mainpage />}></Route>
          <Route path="/GoogleCallback" element={<GoogleCallback />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
