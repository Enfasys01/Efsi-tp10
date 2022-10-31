const Contacto = () => {
    return(
    <>
    <form style={{width:'50%', marginBottom:100}} className='container'>
  <fieldset >
    <div class="mb-3">
      <label for="TextInput" class="form-label">Nombre completo</label>
      <input type="text" id="TextInput" class="form-control" placeholder=" "/>
    </div>
    
    <div class="mb-3">
      <label for="TextInput" class="form-label">Email</label>
      <input type="email" id="TextInput" class="form-control" placeholder=" "/>
    </div>
    
    <div class="mb-3">
      <label for="TextInput" class="form-label">Número de teléfono</label>
      <input type="number" id="TextInput" class="form-control" placeholder=" "/>
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>
  </fieldset>
</form>
    </>
    )
}
export default Contacto