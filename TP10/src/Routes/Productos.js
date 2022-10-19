import { useContext } from "react";
import Producto from "../Components/Producto";
import CartContext from "../Context/CartContext";


const Productos = () => {
    const [items, setItems] = useContext(CartContext)
    return(
    <>
    <div className="container">
        <div class="row">
            <h3 class="pt-5 pb-2 fw-bold" style={{text:'left'}}>Nuestros productos</h3>
        </div>
        <div className="row">
            {items.map((e,index)=>{return(<Producto data={e} id={index}></Producto>);})}
        </div>
    </div>
    </>
    )
}
export default Productos