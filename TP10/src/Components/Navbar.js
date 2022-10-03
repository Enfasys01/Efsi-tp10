export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg">
            <div class="container">
              <div class="navbar-brand">
                <img srcSet="/img/Logo.png" style={{height: '100px'}}/>
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 text-uppercase">
                  <li class="nav-item">
                    <div class="nav-link active " aria-current="page">Inicio</div>
                  </li>
                  <li class="nav-item">
                    <div class="nav-link" >Quienes somos</div>
                  </li>
                  <li class="nav-item">
                    <div class="nav-link" >Productos</div>
                  </li>
                  <li class="nav-item">
                    <div class="nav-link" >Contacto</div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
}