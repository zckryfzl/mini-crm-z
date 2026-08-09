<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Employee;
use App\Models\Company;


class EmployeeSeeder extends Seeder
{

    public function run(): void
    {


        $company = Company::where(
            'name',
            'FNXPERTS SDN. BHD.'
        )->first();



        if(!$company){

            return;

        }



        $employees = [


            [
                'first_name'=>'Nurul',
                'last_name'=>'Fatihah',
                'email'=>'nurul.fatihah@fnxperts.com',
                'phone'=>'0123456781',
            ],


            [
                'first_name'=>'Syafawani',
                'last_name'=>'Salihin',
                'email'=>'syafawani.salihin@fnxperts.com',
                'phone'=>'0123456782',
            ],


            [
                'first_name'=>'Nur',
                'last_name'=>'Alisha',
                'email'=>'nur.alisha@fnxperts.com',
                'phone'=>'0123456783',
            ],


            [
                'first_name'=>'Syafiqah',
                'last_name'=>'Ashahakim',
                'email'=>'syafiqah.ashahakim@fnxperts.com',
                'phone'=>'0123456784',
            ],


            [
                'first_name'=>'Fatin Nuraina Arman',
                'last_name'=>'Shah',
                'email'=>'fatin.nuraina@fnxperts.com',
                'phone'=>'0123456785',
            ],


            [
                'first_name'=>'Dahiyah',
                'last_name'=>'Safirah',
                'email'=>'dahiyah@fnxperts.com',
                'phone'=>'0123456786',
            ],


            [
                'first_name'=>'Imran',
                'last_name'=>'Zakaye',
                'email'=>'imran@fnxperts.com',
                'phone'=>'0123456787',
            ],


            [
                'first_name'=>'Balqis',
                'last_name'=>'Nasution',
                'email'=>'balqis@fnxperts.com',
                'phone'=>'0123456788',
            ],


            [
                'first_name'=>'Amir',
                'last_name'=>'Danial',
                'email'=>'amir.danial@fnxperts.com',
                'phone'=>'0123456789',
            ],


            [
                'first_name'=>'Wani',
                'last_name'=>'Rahman',
                'email'=>'wani.rahman@fnxperts.com',
                'phone'=>'0134567890',
            ],


            [
                'first_name'=>'Rabiatul',
                'last_name'=>'Ismail',
                'email'=>'rabiatul@fnxperts.com',
                'phone'=>'0134567891',
            ],


            [
                'first_name'=>'Liya Syamimi',
                'last_name'=>'Mohd Hisham',
                'email'=>'liya.syamimi@fnxperts.com',
                'phone'=>'0134567892',
            ],


            [
                'first_name'=>'Muhammad Hariz Danail',
                'last_name'=>'Halim',
                'email'=>'hariz@fnxperts.com',
                'phone'=>'0134567893',
            ],


            [
                'first_name'=>'Felixia',
                'last_name'=>'Lee',
                'email'=>'felixia@fnxperts.com',
                'phone'=>'0134567894',
            ],


            [
                'first_name'=>'Einannabella',
                'last_name'=>'Nadzri',
                'email'=>'einannabella@fnxperts.com',
                'phone'=>'0134567895',
            ],


            [
                'first_name'=>'Hadzrul',
                'last_name'=>'Luqman',
                'email'=>'hadzrul@fnxperts.com',
                'phone'=>'0134567896',
            ],


        ];





        foreach($employees as $employee){


            Employee::create([

                'company_id'=>$company->id,

                'first_name'=>$employee['first_name'],

                'last_name'=>$employee['last_name'],

                'email'=>$employee['email'],

                'phone'=>$employee['phone'],

            ]);


        }



    }

}