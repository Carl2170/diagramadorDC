<div>
    <div class="modal fade" id="agregarClase" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar Clase</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="text" id="nombreClase" name="nombreClase" placeholder="nombre de la clase" class="form-control">
              <br>
              <div>
                <h5>Atributos</h5>
                <div>
                  <div id="inputAtributo" class="row">
                    <div class="row">
                      <div class="col-4">
                        <small>Nombre</small>
                        <input type="text" id="descripcionA" name="descripcionA" placeholder="Nombre atributo"class="form-control">
                      </div>
                      <div class="col-3">
                        <small>tipo de dato</small>
                        <select class="form-select" aria-label="Default select example" name="tipoAtributo" id="tipoAtributo">
                          <option selected value="">ninguno</option>
                          <option value="int">int</option>
                          <option value="string">string</option>
                          <option value="boolean">byte</option>
                          <option value="char">char</option>
                          <option value="double">double</option>
                          <option value="float">float</option>
                          <option value="long">long</option>
                          <option value="short">short</option>
                          <option value="">none</option>
    
                        </select>
                      </div>
                        <div class="col-3">
                          <small>tipo</small>
                          <select class="form-select" aria-label="Default select example" name="tipoA"id="tipoA">
                            <option selected value="">ninguno</option>
                            <option value="public">Public</option>
                            <option value="protected">Protected</option>
                            <option value="private">Private</option>
                            <option value="package">Package</option>
                          </select>
                        </div>
                      <div class="col-2">
                        <button type="button" class="mt-3 btn btn-primary" id="addInputBtnAtributo">+</button>
                      </div>
                    </div>
                  </div><br>
                  <h5>Métodos</h5>
                  <div>
                    <div>
    
                      <div class="row" id="inputAddMetodo">
                        <div id="filaMetodo">
                            <div class="row">
                              <div class="col-4">
                                <small>Nombre </small>
                                <input type="text" id="descripcionM" placeholder="nombre" name="descripcionM"class="form-control">
                              </div>
                              <div class="col-2">
                                <small>Parámetro</small>
                                <input type="text" id="parametroM" placeholder="parametro" name="parametroM"class="form-control">
                              </div>
                              <div class="col-2">
                                <small>Tipo de retorno</small>
                                {{-- <input type="text" id="tipoRetornoM" placeholder="Retorno" name="tipoRetornoM"class="form-control"> --}}
                                <select class="form-select" aria-label="Default select example"
                                  id="tipoRetornoM"name="tipoRetornoM">
                                  <option selected value="">ninguno</option>
                                  <option value="int">int</option>
                                  <option value="string">string</option>
                                  <option value="boolean">byte</option>
                                  <option value="char">char</option>
                                  <option value="double">double</option>
                                  <option value="float">float</option>
                                  <option value="long">long</option>
                                  <option value="short">short</option>
                                </select>
                              </div>
                              <div class="col-3">
                                <small>Tipo de método</small>
                                <select class="form-select" aria-label="Default select example" name="tipoM"id="tipoM">
                                  <option selected value="">Ninguno</option>
                                  <option value="public">Public</option>
                                  <option value="protected">Protected</option>
                                  <option value="private">Private</option>
                                  <option value="package">Package</option>
                                </select>
                              </div>
                              <div class="mt-3 col-1">
                                <button type="button" class="btn btn-primary" id="addInputBtnMetodo">+</button> 
                              </div>
                            </div>
                        </div>
                        <br>
                      </div>
                      
                    </div>
    
                  </div>
                </div>
                
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" id="BtnAgregarClase">Agregar Clase</button>
            </div>
          </div>
        </div>
      </div>   
</div>