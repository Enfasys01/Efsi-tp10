import PropTypes from 'prop-types'

 function Imagen(props){
  return(
    <div class="col-6 col-md-3 px-auto my-2">
      <img src={`img/${props.url}`} class="img-fluid " alt="" srcset=""/>
    </div>
  );
}

Imagen.propTypes = {
  url: PropTypes.string
}

export default Imagen