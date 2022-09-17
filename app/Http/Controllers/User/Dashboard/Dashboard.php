<?php
namespace App\Http\Controllers\User\Dashboard;

use App\Application\Authority\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
// use App\Models\gruposWhatsApp;
class Dashboard extends User{

    public function index(Request $request){
        return Inertia::render('v1.0/User/Dashboard');
    }

}