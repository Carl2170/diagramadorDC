<div>
    <div class="modal fade" id="editarAtributos" name="editarAtributos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="tituloEdicionAtributos"></h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                @include('diagrama.tablaAtributos')
                </div>
           
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" id="BtnEditAtributos">Guardar cambios</button>

            </div>
          </div>
          </div>
        </div>
      </div>   
