<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Company;

class CompanySeeder extends Seeder
{
    public function run(): void
    {

        $companies = [

            [
                'name'=>'FNXPERTS SDN. BHD.',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'info@fnxperts.com',
                'website'=>'https://fnxperts.com',
            ],


            [
                'name'=>'Microsoft Malaysia',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'contact@microsoft.com',
                'website'=>'https://microsoft.com',
            ],


            [
                'name'=>'Google Malaysia',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'support@google.com',
                'website'=>'https://google.com',
            ],


            [
                'name'=>'Nike Malaysia',
                'address'=>'Petaling Jaya, Selangor',
                'email'=>'support@nike.com',
                'website'=>'https://nike.com',
            ],


            [
                'name'=>'Adidas Malaysia',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'customer@adidas.com',
                'website'=>'https://adidas.com',
            ],


            [
                'name'=>'ZUS Coffee',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'hello@zuscoffee.com',
                'website'=>'https://zuscoffee.com',
            ],


            [
                'name'=>'Gigi Coffee',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'hello@gigicoffee.com',
                'website'=>'https://gigicoffee.com',
            ],


            [
                'name'=>'Watsons Malaysia',
                'address'=>'Petaling Jaya, Selangor',
                'email'=>'care@watsons.com.my',
                'website'=>'https://watsons.com.my',
            ],


            [
                'name'=>'Guardian Malaysia',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'care@guardian.com.my',
                'website'=>'https://guardian.com.my',
            ],


            [
                'name'=>'Maybank',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'info@maybank.com',
                'website'=>'https://maybank.com',
            ],


            [
                'name'=>'CIMB Bank',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'contact@cimb.com',
                'website'=>'https://cimb.com',
            ],


            [
                'name'=>'Public Bank Malaysia',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'info@publicbank.com.my',
                'website'=>'https://publicbank.com.my',
            ],


            [
                'name'=>'Touch n Go Digital',
                'address'=>'Petaling Jaya, Selangor',
                'email'=>'support@tngdigital.com.my',
                'website'=>'https://tngdigital.com.my',
            ],


            [
                'name'=>'Grab Malaysia',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'support@grab.com',
                'website'=>'https://grab.com',
            ],


            [
                'name'=>'Shopee Malaysia',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'support@shopee.com.my',
                'website'=>'https://shopee.com.my',
            ],


            [
                'name'=>'Lazada Malaysia',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'support@lazada.com.my',
                'website'=>'https://lazada.com.my',
            ],


            [
                'name'=>'CelcomDigi',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'support@celcomdigi.com',
                'website'=>'https://celcomdigi.com',
            ],


            [
                'name'=>'Maxis Malaysia',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'support@maxis.com.my',
                'website'=>'https://maxis.com.my',
            ],


            [
                'name'=>'AirAsia Malaysia',
                'address'=>'Sepang, Selangor',
                'email'=>'support@airasia.com',
                'website'=>'https://airasia.com',
            ],


            [
                'name'=>'Proton Malaysia',
                'address'=>'Shah Alam, Selangor',
                'email'=>'customer@proton.com',
                'website'=>'https://proton.com',
            ],


            [
                'name'=>'Perodua',
                'address'=>'Rawang, Selangor',
                'email'=>'care@perodua.com.my',
                'website'=>'https://perodua.com.my',
            ],


            [
                'name'=>'AEON Malaysia',
                'address'=>'Kuala Lumpur, Malaysia',
                'email'=>'contact@aeonretail.com.my',
                'website'=>'https://aeonretail.com.my',
            ],


        ];



        foreach($companies as $company)
        {

            Company::updateOrCreate(

                [
                    'name'=>$company['name']
                ],

                $company

            );

        }


    }
}