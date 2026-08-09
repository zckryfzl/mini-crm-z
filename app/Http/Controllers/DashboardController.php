<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Employee;
use Inertia\Inertia;


class DashboardController extends Controller
{

    public function index()
    {

        return Inertia::render('Dashboard',[


            'stats'=>[

                'companies'=>Company::count(),

                'employees'=>Employee::count(),

            ],



            'companies'=>Company::withCount('employees')
                ->orderByRaw("
                    CASE 
                        WHEN id IN (1,2,3) THEN 0
                        ELSE 1
                    END
                ")
                ->orderBy('created_at','desc')
                ->take(5)
                ->get(),




            'employees'=>Employee::with('company')
                ->latest()
                ->take(5)
                ->get(),




            'chartData'=>Company::withCount('employees')
                ->orderBy('employees_count','desc')
                ->take(10)
                ->get()
                ->map(function($company){

                    return [
                        'name'=>$company->name,
                        'employees'=>$company->employees_count
                    ];

                }),


        ]);

    }

}