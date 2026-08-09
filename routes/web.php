<?php


use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProfileController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function(){

return redirect('/dashboard');

});




use App\Http\Controllers\DashboardController;


Route::get(
'/dashboard',
[DashboardController::class,'index']
)
->middleware(['auth'])
->name('dashboard');




Route::middleware('auth')->group(function(){


Route::resource(
'companies',
CompanyController::class
);



Route::resource(
'employees',
EmployeeController::class
);



Route::get('/profile',
[ProfileController::class,'edit']
)
->name('profile.edit');


});



require __DIR__.'/auth.php';