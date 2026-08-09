<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Employee;
use App\Models\Company;


class EmployeeSeeder extends Seeder
{
    public function run(): void
    {

        Employee::truncate();


$fnxperts = Company::find(1);

$microsoft = Company::find(2);

$google = Company::find(3);


        $employees = [

            [
                'first_name'=>'Ahmad',
                'last_name'=>'Hakim',
                'company_id'=>$google->id,
                'email'=>'ahmad.hakim@google.com',
                'phone'=>'0123456781'
            ],

            [
                'first_name'=>'Nur',
                'last_name'=>'Aina',
                'company_id'=>$google->id,
                'email'=>'nur.aina@google.com',
                'phone'=>'0123456782'
            ],

            [
                'first_name'=>'Faris',
                'last_name'=>'Iskandar',
                'company_id'=>$google->id,
                'email'=>'faris.iskandar@google.com',
                'phone'=>'0123456783'
            ],



            [
                'first_name'=>'Amirul',
                'last_name'=>'Haziq',
                'company_id'=>$microsoft->id,
                'email'=>'amirul.haziq@microsoft.com',
                'phone'=>'0123456784'
            ],

            [
                'first_name'=>'Siti',
                'last_name'=>'Alya',
                'company_id'=>$microsoft->id,
                'email'=>'siti.alya@microsoft.com',
                'phone'=>'0123456785'
            ],

            [
                'first_name'=>'Muhammad',
                'last_name'=>'Irfan',
                'company_id'=>$microsoft->id,
                'email'=>'irfan@microsoft.com',
                'phone'=>'0123456786'
            ],




            [
                'first_name'=>'Muhammad',
                'last_name'=>'Rizal',
                'company_id'=>$fnxperts->id,
                'email'=>'muhammad.rizal@fnxperts.com',
                'phone'=>'0123456787'
            ],

            [
                'first_name'=>'Nur',
                'last_name'=>'Syafiqah',
                'company_id'=>$fnxperts->id,
                'email'=>'nur.syafiqah@fnxperts.com',
                'phone'=>'0123456788'
            ],

            [
                'first_name'=>'Aiman',
                'last_name'=>'Hakimi',
                'company_id'=>$fnxperts->id,
                'email'=>'aiman.hakimi@fnxperts.com',
                'phone'=>'0123456789'
            ],
            [
                'first_name'=>'Haziq',
                'last_name'=>'Rahman',
                'company_id'=>$fnxperts->id,
                'email'=>'haziq.rahman@fnxperts.com',
                'phone'=>'0123456790'
            ],

            [
                'first_name'=>'Aisyah',
                'last_name'=>'Nordin',
                'company_id'=>$fnxperts->id,
                'email'=>'aisyah.nordin@fnxperts.com',
                'phone'=>'0123456791'
            ],

            [
                'first_name'=>'Danish',
                'last_name'=>'Fahmi',
                'company_id'=>$fnxperts->id,
                'email'=>'danish.fahmi@fnxperts.com',
                'phone'=>'0123456792'
            ],

            [
                'first_name'=>'Syafiq',
                'last_name'=>'Azman',
                'company_id'=>$microsoft->id,
                'email'=>'syafiq.azman@microsoft.com',
                'phone'=>'0123456793'
            ],

            [
                'first_name'=>'Nurul',
                'last_name'=>'Huda',
                'company_id'=>$microsoft->id,
                'email'=>'nurul.huda@microsoft.com',
                'phone'=>'0123456794'
            ],

            [
                'first_name'=>'Amir',
                'last_name'=>'Hakim',
                'company_id'=>$microsoft->id,
                'email'=>'amir.hakim@microsoft.com',
                'phone'=>'0123456795'
            ],

            [
                'first_name'=>'Farah',
                'last_name'=>'Izzati',
                'company_id'=>$google->id,
                'email'=>'farah.izzati@google.com',
                'phone'=>'0123456796'
            ],

            [
                'first_name'=>'Hakim',
                'last_name'=>'Ismail',
                'company_id'=>$google->id,
                'email'=>'hakim.ismail@google.com',
                'phone'=>'0123456797'
            ],

            [
                'first_name'=>'Sofea',
                'last_name'=>'Amani',
                'company_id'=>$google->id,
                'email'=>'sofea.amani@google.com',
                'phone'=>'0123456798'
            ],

            [
                'first_name'=>'Irfan',
                'last_name'=>'Zulkifli',
                'company_id'=>$fnxperts->id,
                'email'=>'irfan.zulkifli@fnxperts.com',
                'phone'=>'0123456799'
            ],

            [
                'first_name'=>'Nabila',
                'last_name'=>'Yusof',
                'company_id'=>$fnxperts->id,
                'email'=>'nabila.yusof@fnxperts.com',
                'phone'=>'0123456700'
            ],

            [
                'first_name'=>'Faiz',
                'last_name'=>'Kamarul',
                'company_id'=>$google->id,
                'email'=>'faiz.kamarul@google.com',
                'phone'=>'0123456701'
            ],

        ];



        Employee::insert($employees);


    }
}