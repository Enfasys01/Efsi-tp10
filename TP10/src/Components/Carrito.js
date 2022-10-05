import { useContext, useState } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import CartContext from '../Context/CartContext'
import './Carrito.css'
import CarritoItem from './CarritoItem'
const Carrito = ()=>{
  const [cart, setCart] = useContext(CartContext)
  const [isOpen, setOpen] = useState(false)
  return(
    <>
    <li className="nav-item" >
      <div className="nav-link" onClick={()=>{setOpen(!isOpen);console.log(isOpen)}}>
        <AiOutlineShoppingCart size={30}/>
      </div>
      {isOpen?
      <div className='popover space-y-2'>
      {cart.length>0?cart.map((e,index)=>{return(
        <CarritoItem data={e} key={index}/>
      )}):<h4>no hay elementos en el carrito</h4>}
      </div>
      :''}
      
    </li>
    </>
  )
}
export default Carrito