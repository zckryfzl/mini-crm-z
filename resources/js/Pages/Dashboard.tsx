import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';


interface Company {

    id:number;

    name:string;

    address:string|null;

    email:string|null;

    website:string|null;

    employees_count:number;

}



interface Employee {

    id:number;

    first_name:string;

    last_name:string;

    email:string|null;

    phone:string|null;

    company?:{

        id:number;

        name:string;

    };

}



interface Props {


    stats:{

        companies:number;

        employees:number;

    };


    companies:Company[];


    employees:Employee[];

}



export default function Dashboard({
    stats,
    companies,
    employees
}:Props){


return (

<AuthenticatedLayout>


<Head title="Dashboard"/>



<div className="p-6">


<h1 className="text-3xl font-bold mb-6">
    CRM Dashboard
</h1>



{/* STAT CARDS */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">



<div className="bg-white shadow rounded-lg p-6">

<p className="text-gray-500">
    Total Companies
</p>


<h2 className="text-4xl font-bold text-green-600">
    {stats.companies}
</h2>


</div>





<div className="bg-white shadow rounded-lg p-6">


<p className="text-gray-500">
    Total Employees
</p>


<h2 className="text-4xl font-bold text-blue-600">
    {stats.employees}
</h2>


</div>


</div>





{/* COMPANIES */}

<div className="bg-white shadow rounded-lg mb-8">


<div className="p-5 border-b flex justify-between">


<h2 className="text-xl font-bold">
Recent Companies
</h2>


<Link

href="/companies"

className="
text-green-600
hover:underline
"

>
View All
</Link>


</div>





<table className="w-full">


<thead className="bg-gray-50">


<tr>


<th className="p-3 text-left">
Name
</th>


<th className="p-3 text-left">
Address
</th>


<th className="p-3 text-left">
Employees
</th>


</tr>


</thead>





<tbody>


{
companies.map((company)=>(


<tr
key={company.id}
className="border-t"
>


<td className="p-3">

{company.name}

</td>



<td className="p-3">

{company.address ?? '-'}

</td>



<td className="p-3">

{company.employees_count}

</td>



</tr>


))
}



</tbody>


</table>


</div>









{/* EMPLOYEES */}


<div className="bg-white shadow rounded-lg">


<div className="p-5 border-b flex justify-between">


<h2 className="text-xl font-bold">
Recent Employees
</h2>


<Link

href="/employees"

className="
text-green-600
hover:underline
"

>
View All
</Link>


</div>





<table className="w-full">


<thead className="bg-gray-50">


<tr>


<th className="p-3 text-left">
Name
</th>


<th className="p-3 text-left">
Company
</th>


<th className="p-3 text-left">
Phone
</th>


</tr>


</thead>





<tbody>


{
employees.map((employee)=>(


<tr

key={employee.id}

className="border-t"

>


<td className="p-3">


{
employee.first_name
}

{' '}

{
employee.last_name
}


</td>




<td className="p-3">


{
employee.company?.name ?? '-'
}


</td>





<td className="p-3">


{
employee.phone ?? '-'
}


</td>




</tr>


))
}




</tbody>


</table>


</div>




</div>


</AuthenticatedLayout>


);


}