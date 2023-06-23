<div>
    <div class="modal fade" id="editarMetodos" name="editarAtributos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="tituloEdicionMetodos"></h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                @include('diagrama.tablaMetodos')
                </div>
            
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" id="BtnEditMetodos">Guardar cambios</button>

            </div>
           </div>
          </div>
        </div>
      </div>   
