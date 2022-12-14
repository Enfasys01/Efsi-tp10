import './Producto.css'
import {BsFillCartPlusFill, BsFillCartCheckFill} from 'react-icons/bs'
import { useContext, useState } from 'react';
import CartContext from '../Context/CartContext';
import PropTypes from 'prop-types'

function Producto(props){
    const [items, setItems] = useContext(CartContext)
    const [reload, setReload] = useState(false)
    console.log(items[props.id])
    return(
        <div class="col-12 col-md-4">
                    <div class="caja p-2">
                        <div class="row">
                            <img src={props.data.src} className='img' alt="" srcset=""/>
                        </div>
                        <div class="row">
                            <h5 class="fw-bold text-center">{props.data.title}</h5>
                        </div>
                        <div class="row  text-center" >
                            <h5>{props.data.desc}</h5>
                        </div>    
                        <div className='btn-cart' onClick={()=>{
                            let preItems=items;
                            preItems[props.id].added=true;
                            setItems(preItems)
                            console.log(items)
                            setReload(!reload)
                            }}> 
                                {items[props.id].added==true?<span> <span><BsFillCartCheckFill/></span> Agregado al carrito </span>:<span> <span><BsFillCartPlusFill/></span> Agregar al carrito </span>}</div>
                    </div>
                </div>
    );
}

Producto.propTypes = {
    id: PropTypes.number,
    data: PropTypes.object
  }

export default Producto