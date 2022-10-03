import './App.css';
import './bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import Lista from './Components/Lista';
import Separador from './Components/Separador';
import Imagenes from './Components/Imagenes';



function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Carousel> </Carousel>
        <Lista></Lista>
        <Separador></Separador>
        <Imagenes></Imagenes>
        <Footer></Footer>
    </div>
  );
}

export default App;
