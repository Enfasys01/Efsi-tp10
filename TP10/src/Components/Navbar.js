import { useState } from "react";
import { Link } from "react-router-dom";
import Carrito from './Carrito'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './Navbar.css'

const options=[
  {title:'Home', path:'/'},
  {title:'Quienes somos', path:'/QuienesSomos'},
  {title:'Productos', path:'/Productos'},
  {title:'Contacto', path:'/Contacto'},
]

export default function Navbar(){
  const [isOpen, setOpen] = useState(false)
    return(
      <>
      {isOpen?<div className='back' onClick={()=>{setOpen(false)}}></div>:""}
        
        <nav class="navbar navbar-expand-sm">
            <div class="container">
              <div class="navbar-brand">
                <img srcSet="/img/Logo.png" style={{height: '100px'}}/>
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 text-uppercase">
                  {options.map((e,index)=>{return(<>
                    <li class="nav-item" key={index}>
                    <div class="nav-link" ><Link to={e.path}>{e.title}</Link></div>
                  </li>
                  </>)})}
                  <li className="nav-item" >

                  <div className="nav-link" onClick={()=>{setOpen(!isOpen);console.log(isOpen)}}>
                    <AiOutlineShoppingCart size={30}/>
                  </div>
                  {isOpen?<><Carrito/>
                  </>
                  :""}
                  
                  </li>
                </ul>
              </div>
            </div>
          </nav></>
    );
}