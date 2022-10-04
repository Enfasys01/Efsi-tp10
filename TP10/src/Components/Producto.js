import './Producto.css'
export default function Producto(props){
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
                    </div>
                </div>
    );
}