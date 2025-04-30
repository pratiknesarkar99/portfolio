import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Experience } from './components/Experience';
import { Toaster } from 'react-hot-toast';
import { Achievements } from './components/Achievements';

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-center" reverseOrder={false} />
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Achievements />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
