import './App.css';
import AboutUs from './components/aboutUs/AboutUs';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
import Contact from './components/contact/Contact.jsx';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Welcome />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default App;
