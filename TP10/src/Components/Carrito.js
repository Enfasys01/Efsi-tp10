import { useContext, useEffect, useState } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import CartContext from '../Context/CartContext'
import './Carrito.css'
import CarritoItem from './CarritoItem'
const Carrito = ()=>{
  const [items, setItems] = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [refresh, setRefresh] = useState(false)
  useEffect(()=>{
    let tot = 0
    items.map((e)=>{
      if(e.added==true){
        tot= tot + e.price * e.num
      }
    })
    setTotal(tot)
    },[refresh])
    console.log(items, total)
  return(
    <>
    

      <div className='popover space-y-2'>
        <h4>Carrito:</h4>
      {items.filter(e=>e.added==true).length!=0?
      <>
      {items.map((e,index)=>{return(
        <>
          {e.added && <CarritoItem data={e} refresh={[refresh, setRefresh]} key={index}/>}
        </>
      )
    })}

    <h4>Total: {total}</h4>
      </>
      :<h4>no hay elementos en el carrito</h4>
      }
      </div>

    
    </>
  )
}
export default Carrito