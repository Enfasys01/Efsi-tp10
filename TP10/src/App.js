import './App.css';
import './bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import Lista from './Components/Lista';
import Separador from './Components/Separador';
import Imagenes from './Components/Imagenes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Routes/Home';
import QuienesSomos from './Routes/QuienesSomos';
import Productos from './Routes/Productos';
import Contacto from './Routes/Contacto';



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/Home' element={<Home/>}/>
          <Route path='/QuienesSomos' element={<QuienesSomos/>}/>
          <Route path='/Productos' element={<Productos/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
