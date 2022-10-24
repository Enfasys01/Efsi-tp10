import Producto from "./Producto";
import {Link} from 'react-router-dom'
import list from "../Data/ListaProductos";
let a=[0,1,2];

const mostrarTopTres = ()=>{
    let r
    for(let i=0; i<=2; i++){
        return(<Producto data={list[i]}></Producto>)
    }
}

export default function Lista(){
    return(
        <div class="container">
            <div class="row">
                <h3 class="pt-5 pb-2 fw-bold" style={{text:'left'}}>Productos destacados</h3>
            </div>
            <div className="row">
            <Producto data={list[0]} id={0}></Producto>
            <Producto data={list[1]} id={1}></Producto>
            <Producto data={list[2]} id={2}></Producto>
            </div>
            <div className="text-center "> <Link to='/Productos'><span className="p-2 " style={{backgroundColor:'#ABBFC3'}}>Ver todos los productos...</span></Link></div>
        </div>
    );
}