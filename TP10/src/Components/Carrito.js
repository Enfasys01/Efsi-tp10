import { useContext, useEffect, useState } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import CartContext from '../Context/CartContext'
import './Carrito.css'
import CarritoItem from './CarritoItem'
const Carrito = ()=>{
  const [items, setItems] = useContext(CartContext)
  
  const [isOpen, setOpen] = useState(false)
  return(
    <>
    <li className="nav-item" >
      <div className="nav-link" onClick={()=>{setOpen(!isOpen);console.log(isOpen)}}>
        <AiOutlineShoppingCart size={30}/>
      </div>
      {isOpen?
      <div className='popover space-y-2'>
        <h4>Carrito:</h4>
      {items.filter(e=>e.added==true).length!=0?
      <>
      {items.map((e,index)=>{return(
        <>
          {e.added?<CarritoItem data={e} key={index}/>:''}
        </>
      )
    })}

    <h4>{}</h4>
      </>
      :<h4>no hay elementos en el carrito</h4>
      }
      </div>
      :''}
      
    </li>
    </>
  )
}
export default Carrito