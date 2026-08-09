<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class CompanyController extends Controller
{


    public function index()
    {

$companies = Company::orderBy('id', 'asc')
    ->paginate(10);

        return inertia(
            'Companies/Index',
            [
                'companies'=>$companies
            ]
        );

    }




    public function create()
    {

        return inertia(
            'Companies/Create'
        );

    }




    public function store(Request $request)
    {


        $validated = $request->validate([

            'name'=>'required|string|max:255',

            'address'=>'nullable|string|max:255',

            'email'=>'nullable|email',

            'website'=>'nullable|string',

            'logo'=>'nullable|image|max:2048|dimensions:min_width=100,min_height=100',

        ]);



        if($request->hasFile('logo'))
        {

            $validated['logo'] =
                $request
                ->file('logo')
                ->store(
                    'logos',
                    'public'
                );

        }



        Company::create($validated);



        return redirect()
            ->route('companies.index');

    }





    public function show(Company $company)
    {

        return inertia(
            'Companies/Show',
            [
                'company'=>$company
            ]
        );

    }





    public function edit(Company $company)
    {

        return redirect()
            ->route('companies.index');

    }





public function update(Request $request, Company $company)
{

    $validated = $request->validate([

        'name'=>'required|string|max:255',

        'address'=>'nullable|string|max:255',

        'email'=>'nullable|email',

        'website'=>'nullable|string',

        'logo'=>'nullable|image|max:2048',

    ]);



    if($request->hasFile('logo'))
    {


        if($company->logo)
        {

            Storage::disk('public')
                ->delete($company->logo);

        }



        $validated['logo'] = 
            $request
            ->file('logo')
            ->store(
                'logos',
                'public'
            );


    }
    else
    {

        unset($validated['logo']);

    }





    $company->update($validated);



    return redirect()
        ->route('companies.index');

}





    public function destroy(Company $company)
    {


        if($company->logo)
        {

            Storage::disk('public')
                ->delete($company->logo);

        }



        $company->delete();



        return redirect()
            ->route('companies.index');

    }


}