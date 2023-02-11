import './App.css';
import './style/responsive.css'
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <Home/>
      <Menu/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
