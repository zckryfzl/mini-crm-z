<?php

namespace App\Http\Resources;


use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;



class CompanyResource extends JsonResource
{


    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {


        return [


            'id' => $this->id,


            'name' => $this->name,


            'address' => $this->address,


            'email' => $this->email,


            'website' => $this->website,


            'logo' => $this->logo,



            'employee_count' =>
                $this->employees_count,



            'employees' =>
                EmployeeResource::collection(
                    $this->whenLoaded('employees')
                ),


        ];


    }


}