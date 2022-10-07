import './App.css';
import Header from './components/header';
import Contact from './components/Contact';
import Imgcon from './components/Imgcon';

function App() {
  return (
    <div className="form">
      <header className="form-header">
        <Header/>
        <h1>Contact Us</h1>
        <div className='sec-contain'>
          
          <div className='card-bg'>
          <Contact/>
          <Imgcon/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
