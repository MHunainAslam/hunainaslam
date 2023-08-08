import logo from './logo.svg';
import './App.css';
import './Style.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Allprojects from '../src/Components/Allprojects';
function App() {
  return (
    <div className="App ">
      <>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={(
              <>
                <Banner />
         
                 <About />
    
                <Portfolio />
              </>
            )} />
            <Route path="/allprojects" element={<Allprojects />}></Route>
          </Routes>
        </BrowserRouter>

      </>
    </div>
  );
}

export default App;
