<div>
    <div class="modal fade" id="agregarRelacion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar Relación</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-2">
                        <h4  class="mt-2">Relación</h4>
                    </div>
                    <div class="col-6">

                        <select class="form-select" aria-label="Default select example"
                        id="tipoRelacion"name="tipoRelacion">
                        <option selected value="asociacion">Asociación</option>
                        <option value="agregacion">Agregación</option>
                        <option value="composicion">Composición</option>
                        <option value="herencia">Herencia</option>
                    </select><br>
                  </div>
                </div>

                <div  class="row">
                        <div class="col-6">
                            <strong>Clase Origen</strong>
                            <div id="listarClasesOrigen">
                              <select class="form-select" 
                              aria-label="Default select example" 
                              id="listaClaseOrigen"name="listaClaseOrigen">
                                <option selected value="">Seleccione una clase</option>
                              </select>
                            </div>
                            <br>
                            <small>Multiplicidad</small>
                            <select class="form-select" aria-label="Default select example"
                             id="multiplicidadOrigen"name="multiplicidadOrigen">
                                <option selected value="">ninguno</option>
                                <option value="muchos">*</option>
                                <option value="cero">0</option>
                                <option value="cero a muchos">0..*</option>
                                <option value="cero a uno">0..1</option>
                                <option value="uno">1</option>
                                <option value="uno a">1..</option>
                                <option value="uno a muchos">1..*</option>
                                <option value="otro">otro</option>
                          </select>
                        
                        </div>
                        <div class="col-6">
                            <strong >Clase Destino</strong>
                            <div id="listarClasesDestino">
                              <select class="form-select" 
                              aria-label="Default select example" 
                              id="listaClaseDestino"name="listaClaseDestino">
                                <option selected value="">Seleccione una clase</option>
                              </select>
                              </div>
                            <br>
                            <small>Multiplicidad</small>
                            <select class="form-select" aria-label="Default select example"
                             id="multiplicidadDestino"name="multiplicidadDestino">
                                <option selected value="">ninguno</option>
                                <option value="muchos">*</option>
                                <option value="cero">0</option>
                                <option value="cero a muchos">0..*</option>
                                <option value="cero a uno">0..1</option>
                                <option value="uno">1</option>
                                <option value="uno a">1..</option>
                                <option value="uno a muchos">1..*</option>
                                <option value="otro">otro</option>
                          </select>
                        </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" id="BtnAgregarRelacion">Agregar Relación</button>
            </div>
          </div>
        </div>
      </div>   
</div>