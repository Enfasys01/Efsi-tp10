import Producto from "./Producto";
import {Link} from 'react-router-dom'
let a=[0,1,2];

export default function Lista(){
    return(
        <div class="container">
            <div class="row">
                <h3 class="pt-5 pb-2 fw-bold" style={{text:'left'}}>Productos destacados</h3>
            </div>
            <div className="row">
                {a.map(e=>{return(<Producto></Producto>);})}
            </div>
            <div className="text-center "> <Link to='/Productos'><span className="p-2 " style={{backgroundColor:'#ABBFC3'}}>Ver todos los productos...</span></Link></div>
        </div>
    );
}