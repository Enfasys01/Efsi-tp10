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
import { CartProvider } from './Context/CartContext';
import { useState } from 'react';



function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  return (
    <>
      <CartProvider value={[cart, setCart,total, setTotal]}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index path='/' element={<Home/>}/>
            <Route path='/QuienesSomos' element={<QuienesSomos/>}/>
            <Route path='/Productos' element={<Productos/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
