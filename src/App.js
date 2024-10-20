import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';


function App() {
  return (
    <div>
      
      <NavBar />
      
      <Home />
      <About />
      <Projects />
      <Contact />

      <SocialLinks/>
    
    </div>
  );
};

export default App;
