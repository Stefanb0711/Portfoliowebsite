import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js"
import Footer from "./Footer.js";
import Portfolio from "./Portfolio";
import UeberMich from "./UeberMich";
import PortfolioSiteTopic from "./components/PortfolioSiteTopic";
import ExplanationSite from "./components/ExplanationSite";

function App() {
  return (
      <Router>
          <Header />


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/über-mich" element={<UeberMich />} />
            <Route path="/portfolio" element={<Portfolio />} />

            <Route path="/explanation" element={<ExplanationSite />} />

            <Route path="/python" element={<PortfolioSiteTopic />} />
            <Route path="/javascript" element={<PortfolioSiteTopic />} />
            <Route path="/cpp" element={<PortfolioSiteTopic />} />

            <Route path="/ethical-hacking" element={<PortfolioSiteTopic />} />
            <Route path="/react-express" element={<PortfolioSiteTopic />} />
            <Route path="/spiele" element={<PortfolioSiteTopic />} />
            <Route path="/gui-programmierung" element={<PortfolioSiteTopic />} />
            <Route path="/web-scraping" element={<PortfolioSiteTopic />} />
            <Route path="/data-analysis" element={<PortfolioSiteTopic />} />

        </Routes>

          <Footer />

      </Router>

  );
}

export default App;
