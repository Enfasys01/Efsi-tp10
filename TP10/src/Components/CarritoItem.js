import {BsFillCartXFill} from 'react-icons/bs'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../Context/CartContext'
import './CarritoItem.css'
const CarritoItem = (props) => {
  const [items, setItems] = useContext(CartContext)
  const [num, setNum] = useState(1)
  const [refresh, setRefresh] = props.refresh
  useEffect(()=>{setRefresh(!refresh)},[num])
  return(
    <>
    <div className="flex item">
      <img srcSet={props.data.src} className='img-sm'/>
      <div className=''>
        <div>
          <span style={{fontSize:20}}>{props.data.title}</span>
        </div>
        <div>
          <span style={{fontSize:20}}>${props.data.price}</span>
        </div>
        <div>
          <input type="number" style={{width:"100px"}}  min="1" defaultValue={items[props.data.id].num} onChange={
            (val)=>{
              setNum(parseInt(val.target.value));
              let list = items;
              list[props.data.id].num= val.target.value;
              setItems(list)
              console.log(val.target.value)}}/>
              
        </div>
      <div className='delete-btn'>
        <span style={{fontSize:20}} onClick={()=>{
          let list = items;
          list[props.data.id].added=false;
          list[props.data.id].num=1;
          setItems(list)
          setRefresh(!refresh)
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