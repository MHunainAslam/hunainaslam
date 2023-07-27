import logo from './logo.svg';
import './App.css';
import './Style.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';

function App() {
  return (
    <div className="App ">
      <>
        <Navbar />
        <Banner />
        <About />
      </>
    </div>
  );
}

export default App;
