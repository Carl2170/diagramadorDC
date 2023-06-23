<div>
    <div class="modal fade" id="editarMultiplicidad" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Multiplicidad</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <label >Texto de la relación: </label>
                <div id="nombreRel"></div>
              </div><br><br>
              
                  <div class="row">
                    <div class="col">
                      <label>De: </label>
                      <strong  id="multiClaseOrigen" ></strong>
                      <div id="colMultiOrigen"></div>
                    </div>

                    <div class="col" >
                      <label>hacia: </label>
                      <strong   id="multiClaseDestino" ></strong>
                      <div id="colMultiDestino"></div>
                    </div>
                  </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <a class="btn btn-primary" onclick="guardarCambiosMultiplicidad();">Guardar</a>
            </div>
          </div>
        </div>
      </div>   
</div>