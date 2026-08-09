<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Company;


class CompanySeeder extends Seeder
{

    public function run(): void
    {


        Company::create([

            'name' => 'FNXPERTS SDN. BHD.',

            'address' => 'Kuala Lumpur, Malaysia',

            'email' => 'info@fnxperts.com',

            'website' => 'https://fnxperts.com',

            'logo' => null,

        ]);



        Company::create([

            'name' => 'Microsoft Malaysia',

            'address' => 'Cyberjaya, Selangor, Malaysia',

            'email' => 'contact@microsoft.com',

            'website' => 'https://microsoft.com',

            'logo' => null,

        ]);



        Company::create([

            'name' => 'Google Malaysia',

            'address' => 'Kuala Lumpur, Malaysia',

            'email' => 'support@google.com',

            'website' => 'https://google.com',

            'logo' => null,

        ]);


    }

}