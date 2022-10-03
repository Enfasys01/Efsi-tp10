import Imagen from "./Imagen";
let imgagenes=['ferrum.png','delta.png','Logo-Negativo.png','logo_ips.png']
export default function Imagenes(){
  return(
    <div class="container">
              <div class="row">
                <h3 class="pt-3 pb-2 fw-bold" >Marcas con las que trabajamos</h3>
            </div>

            <div class="row text-center">
              {imgagenes.map(e=>{return(
                <Imagen url={e}></Imagen>
              );})}
            </div>

          </div>
  );
}