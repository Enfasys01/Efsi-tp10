import Producto from "../Components/Producto";
import list from "../Data/ListaProductos";


const Productos = () => {
    return(
    <>
    <div className="container">
        <div class="row">
            <h3 class="pt-5 pb-2 fw-bold" style={{text:'left'}}>Nuestros productos</h3>
        </div>
        <div className="row">
            {list.map((e,index)=>{return(<Producto data={e} key={index}></Producto>);})}
        </div>
    </div>
    </>
    )
}
export default Productos