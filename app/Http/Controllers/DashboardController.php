<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;


class DashboardController extends Controller
{

    public function index()
    {

        return Inertia::render('Dashboard', [

            'stats'=>[

                'companies'=>Company::count(),

                'employees'=>Employee::count(),

            ],


            'companies'=>Company::withCount('employees')
                ->latest()
                ->take(5)
                ->get(),


            'employees'=>Employee::with('company')
                ->latest()
                ->take(5)
                ->get(),

        ]);

    }

}