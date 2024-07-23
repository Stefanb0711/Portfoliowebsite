import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js"
import Footer from "./Footer.js";

function App() {
  return (


      <Router>
          <Header />


        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

          <Footer />

      </Router>

  );
}

export default App;
