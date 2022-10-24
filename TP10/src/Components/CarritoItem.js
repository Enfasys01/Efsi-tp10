import {BsFillCartXFill} from 'react-icons/bs'
import { useContext, useState } from 'react'
import CartContext from '../Context/CartContext'
import './CarritoItem.css'
const CarritoItem = (props) => {
  const [items, setItems] = useState(props.items)
  return(
    <>
    <div className="flex item">
      <img srcSet={props.data.src} className='img-sm'/>
      <div className=''>
        <span style={{fontSize:20}}>{props.data.title}</span>
      <div className='delete-btn'>
        <span style={{fontSize:20}} onClick={()=>{
          let list = items;
          list[props.data.id].added=false;
          setItems(list)
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