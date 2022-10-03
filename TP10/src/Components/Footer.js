export default function Footer(){
    return(
        <footer class="bg-dark text-center text-lg-start text-light">
            <div class="container p-4">
              <div class="row">
                <div class="col-md-3 mb-4 mb-md-0">
                    <img srcSet="./img/logo_byn.png"/>
                </div>
          
                <div class="col-md-6 mb-4 mb-md-0 text-center">
                    <div class="row">
                        <h3 class="text-light">Beiro 3300 - Villa del Parque</h3>

                    </div>
                    <div class="row">
                        <h3 class="text-light text-break">contacto@sanitarioscampana.com.ar</h3>
                    </div>
                </div>
          
                <div class="col-md-3 mb-4 mb-md-0">
                    <h6 className="tel-color" style={{color: 'dodgerblue'}}>  <img src="img/tel.png" alt="" srcset=""/> 4503-6015</h6>
                </div>
              </div>
            </div>
          

          </footer>
    );
}