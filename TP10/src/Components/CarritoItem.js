import {BsFillCartXFill} from 'react-icons/bs'
import { useContext } from 'react'
import CartContext from '../Context/CartContext'
import './CarritoItem.css'
const CarritoItem = (props) => {
  const [cart, setCart] = useContext(CartContext)
  return(
    <>
    <div className="flex">
      <img srcSet={props.data.src} className='img-sm'/>
      <div className=''>
        <span style={{fontSize:20}}>{props.data.title} {props.data.id}</span>
      <div className='delete-btn'>
        <span onClick={()=>{setCart(cart.filter(e=>e!==props.data))}}>
        <BsFillCartXFill/>
        </span>
      </div>
      </div>
    </div>
    </>
  )
}

export default CarritoItem