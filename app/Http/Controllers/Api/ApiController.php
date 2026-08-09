<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Company;



class CompanyApiController extends Controller
{


    public function show(Company $company)
    {


        return response()->json([


            'id'=>$company->id,

            'name'=>$company->name,

            'address'=>$company->address,

            'email'=>$company->email,

            'website'=>$company->website,


            'employee_count'=>$company->employees()->count(),


            'employees'=>$company->employees


        ]);



    }


}