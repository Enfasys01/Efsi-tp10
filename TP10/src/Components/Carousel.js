export default function Carousel(){
    return(
      <div class="container-fluid">
      <div class="row">
        <div id="carouselExampleCaptions" style={{padding: 0}} class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="img/slider.png" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                  <p>Lo que Ud. necesita</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="img/slider.png" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                    <p>Lo que Ud. necesita</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="img/slider.png" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Caga como un rey</h5>
                    <p>Lo que Ud. necesita</p>
                </div>
              </div>
            </div>
            <div class="container">

                <button class="carousel-control-prev" style={{left: '20px'}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" style={{right: '20px'}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            </div>
          </div>
      </div>
  </div>
    );
}