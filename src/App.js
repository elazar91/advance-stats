import './App.css';
import "the-new-css-reset/css/reset.css";
import AdvanceStats from './components/advance-stats/AdvanceStats';
import Header from './layout/header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Compare from './components/compare-plyers/Compare';
import IsraeliLige from './components/israeli-lige/Israeli-lige';
import Footer from './layout/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player-compare" element={<Compare />} />
        <Route path="/israli-lige-avance-stats" element={<IsraeliLige />} />
        <Route path="/calculate-advance-stats" element={<AdvanceStats />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
