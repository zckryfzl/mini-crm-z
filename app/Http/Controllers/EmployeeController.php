<?php

namespace App\Http\Controllers;


use App\Models\Employee;
use App\Models\Company;
use Illuminate\Http\Request;



class EmployeeController extends Controller
{


    public function index()
    {


        $employees = Employee::with('company')
            ->latest()
            ->paginate(10);



        return inertia(
            'Employees/Index',
            [

                'employees'=>$employees,

                'companies'=>Company::all()

            ]
        );


    }





    public function create()
    {


        return inertia(
            'Employees/Create',
            [

                'companies'=>Company::all()

            ]
        );


    }





    public function store(Request $request)
    {


        $validated=$request->validate([


            'first_name'=>'required|string|max:255',

            'last_name'=>'required|string|max:255',

            'company_id'=>'required|exists:companies,id',

            'email'=>'nullable|email',

            'phone'=>'nullable|string',


        ]);



        Employee::create($validated);



        return redirect()
            ->route('employees.index');


    }





    public function update(Request $request, Employee $employee)
    {


        $validated=$request->validate([


            'first_name'=>'required|string|max:255',

            'last_name'=>'required|string|max:255',

            'company_id'=>'required|exists:companies,id',

            'email'=>'nullable|email',

            'phone'=>'nullable|string',


        ]);



        $employee->update($validated);



        return redirect()
            ->route('employees.index');


    }






    public function destroy(Employee $employee)
    {


        $employee->delete();



        return redirect()
            ->route('employees.index');


    }


}