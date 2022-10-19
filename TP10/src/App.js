import './App.css';
import './bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Routes/Home';
import QuienesSomos from './Routes/QuienesSomos';
import Productos from './Routes/Productos';
import Contacto from './Routes/Contacto';
import { CartProvider } from './Context/CartContext';
import { useState } from 'react';
import ListaProductos from './Data/ListaProductos'


function App() {
  const [items, setItems] = useState(ListaProductos)
  return (
    <>
      <CartProvider value={[items, setItems]}>
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
