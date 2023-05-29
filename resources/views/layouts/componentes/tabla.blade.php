<div class="row">
    <!-- column -->
    <div class="col-sm-12">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">@yield('titulo_tabla')</h4>
                {{-- <h6 class="card-subtitle">Add class <code>.table</code></h6> --}}
                <div class="table-responsive">
                    <table class="table user-table table-bordered">
                        <thead>
                            <tr style="@yield('estilo_encabezado')">
                                <th class="border-top-0">#</th>
                                @yield('encabezados')
                            </tr>
                        </thead>
                        <tbody>
                           @yield('tuplas')
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>