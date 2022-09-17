<?php

namespace App\Http\Controllers\Admin\Denuncias;
use App\Application\Authority\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Denuncias as Dn;
class Denuncias extends Admin{
    public function index(Request $request){
        $data = $this->authInfo()+Dn::getReportPaginated(50)->toArray();
        return Inertia::render('v1.0/Admin/Denuncias/ListaDenuncias',$data);
    }
}
