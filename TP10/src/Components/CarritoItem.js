import {BsFillCartXFill} from 'react-icons/bs'
import { useContext } from 'react'
import CartContext from '../Context/CartContext'
import './CarritoItem.css'
const CarritoItem = (props) => {
  const [cart, setCart, total, setTotal] = useContext(CartContext)
  return(
    <>
    <div className="flex item">
      <img srcSet={props.data.src} className='img-sm'/>
      <div className=''>
        <span style={{fontSize:20}}>{props.data.title} {props.data.id}</span>
      <div className='delete-btn'>
        <span style={{fontSize:20}} onClick={()=>{
          console.log(total)
          setTotal(total-props.data.price)
          setCart(cart.filter(e=>e!==props.data))
          }}>
          <BsFillCartXFill/> eliminar
        </span>
      </div>
      </div>
    </div>
    </>
  )
}

export default CarritoItem