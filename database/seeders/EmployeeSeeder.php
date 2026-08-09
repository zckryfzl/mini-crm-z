<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use App\Models\Employee;
use App\Models\Company;



class EmployeeSeeder extends Seeder
{


    public function run():void
    {


        $company = Company::where(
            'name',
            'FNXPERTS SDN. BHD.'
        )->first();



        Employee::create([

            'first_name'=>'Zairi',

            'last_name'=>'Ahmad',

            'company_id'=>$company->id,

            'email'=>'zairi@fnxperts.com',

            'phone'=>'0123456789',

        ]);




        Employee::create([

            'first_name'=>'Fazli',

            'last_name'=>'Mohamad',

            'company_id'=>$company->id,

            'email'=>'fazli@fnxperts.com',

            'phone'=>'0134567890',

        ]);




        Employee::create([

            'first_name'=>'Ali',

            'last_name'=>'Hassan',

            'company_id'=>$company->id,

            'email'=>'ali@fnxperts.com',

            'phone'=>'0145678901',

        ]);





        Employee::create([

            'first_name'=>'Siti',

            'last_name'=>'Aminah',

            'company_id'=>$company->id,

            'email'=>'siti@fnxperts.com',

            'phone'=>'0156789012',

        ]);



    }


}