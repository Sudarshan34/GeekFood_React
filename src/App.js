
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Grid from './Components/Grid';
import Foot from './Components/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Grid/>
      </div>
      <div>
        <Foot/>
      </div>
    </div>
  );
}

export default App;
