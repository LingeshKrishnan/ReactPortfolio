
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './Components/Main/Main'
import Portfolio from "./Components/Portfolio/Portfolio";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolios from './Components/Portfolio/Portfolios/Portfolios';
import Resume from './Components/Resume/Resume'
import Coverleter from './Components/Coverletter/Coverleter';

function App() {
  return (
    <>
      <Router>


        {/* <Certificate /> */}
        <Routes>
          <Route path="/LINGESHWARAN_KRISHNAN_Cover_Letter" element={
            <Coverleter />
          }>
          </Route>
        </Routes>
        <Routes>
          <Route path="/LINGESHWARAN_KRISHNAN_CV" element={
            <Resume />
          }>
          </Route>
        </Routes>
        <Routes>

          <Route path="/portfolio" element={
            <Portfolios />
          }>
          </Route>
        </Routes>
        <Routes>

          <Route path="/" element={
            <Main />
          }>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
