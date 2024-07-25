import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js"
import Footer from "./Footer.js";
import Portfolio from "./Portfolio";
import UeberMich from "./UeberMich";
import PortfolioSiteTopic from "./components/PortfolioSiteTopic";

function App() {
  return (
      <Router>
          <Header />


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/über-mich" element={<UeberMich />} />
            <Route path="/portfolio" element={<Portfolio />} />

            <Route path="/python" element={<PortfolioSiteTopic />} />
            <Route path="/javascript" element={<PortfolioSiteTopic />} />
            <Route path="/cpp" element={<PortfolioSiteTopic />} />

            <Route path="/ethical-hacking" element={<Portfolio />} />
            <Route path="/react-express" element={<Portfolio />} />
            <Route path="/spiele" element={<Portfolio />} />
            <Route path="/gui-programmierung" element={<Portfolio />} />
            <Route path="/web-scraping" element={<Portfolio />} />
            <Route path="/data-analysis" element={<Portfolio />} />

        </Routes>

          <Footer />

      </Router>

  );
}

export default App;
