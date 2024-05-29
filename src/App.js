import logo from './logo.svg';
import './App.css';

import HomePage from './Home/HomePage';
import Intro from './Introduction/Intro';
import EduPage from './Education/EduPage';
import SkillsPage from './Skills/SkillsPage';
import ExpPage from './Experience/ExpPage';
import ServicePage from './MyServices/ServicePage';
import NavBar from './NavBar/NavBar'; 




function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main-content">
        <HomePage />
        <Intro />
        <EduPage />
        <SkillsPage />
        <ExpPage />
        <ServicePage />
      </div>
    </div>
  );
}

export default App;
