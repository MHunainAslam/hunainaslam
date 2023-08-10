import logo from './logo.svg';
import './App.css';
import './Style.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Allprojects from '../src/Components/Allprojects';
import { useEffect, useState } from 'react';
import Contact from './Components/Contact';
import Footer  from './Components/Footer';
function App() {
  const [loading, setloading] = useState(true)
  const [projectss, setProjects] = useState()
  const apiKey = "EoVsrpC7zfaWVWWDb9LTCb9K";
  const projectsEndpoint = "https://api.vercel.com/v6/projects";

  useEffect(() => {
    fetch(projectsEndpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // Update the state with fetched data
        setProjects(data);
        setloading(false)
      })
      .catch(error => {
        // Handle errors here
        console.error('Error:', error);
        setloading(false)
      });
  }, []);




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

                <Portfolio loading={loading} projectss={projectss} />
                <Contact />
              </>
            )} />
            <Route path="/allprojects" element={<Allprojects loading={loading} projectss={projectss} />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>

      </>
    </div>
  );
}

export default App;
