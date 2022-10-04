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
            {list.map(e=>{return(<Producto data={e}></Producto>);})}
        </div>
    </div>
    </>
    )
}
export default Productos