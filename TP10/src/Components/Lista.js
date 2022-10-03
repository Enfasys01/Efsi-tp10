import Producto from "./Producto";
let a=[0,1,2,3,4,5,6,7,8];

export default function Lista(){
    return(
        <div class="container">
            <div class="row">
                <h3 class="pt-5 pb-2 fw-bold" style={{text:'left'}}>Productos destacados</h3>
            </div>
            <div className="row">
                {a.map(e=>{return(<Producto></Producto>);})}
                
            </div>
        </div>
    );
}