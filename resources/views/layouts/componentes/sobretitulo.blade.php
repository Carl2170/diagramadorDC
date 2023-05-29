<div class="page-breadcrumb">
    <div class="row align-items-center">
        <div class="col-md-6 col-8 align-self-center">
            <h3 class="page-title mb-0 p-0">@yield('sobreTitulo')</h3>
        </div>
        <div class="col-md-6 col-4 align-self-center"> 
            <div class="text-end upgrade-btn">
                <form id="logout-form" action="{{ route('logout') }}" method="POST" >
                    @csrf
                    <button type="submit" class="btn btn-danger d-none d-md-inline-block text-white" target="_blank">Log Out</button>
                </form>
            </div>
        </div>
    </div>
</div>