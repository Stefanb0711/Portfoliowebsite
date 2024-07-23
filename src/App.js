import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js"
import Footer from "./Footer.js";
import Portfolio from "./Portfolio";
import UeberMich from "./UeberMich";

function App() {
  return (
      <Router>
          <Header />


        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/über-mich" element={<UeberMich />} />
            <Route path="/portfolio" element={<Portfolio />} />

        </Routes>

          <Footer />

      </Router>

  );
}

export default App;
