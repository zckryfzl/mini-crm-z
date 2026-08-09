import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';


interface Company {

    id:number;

    name:string;

    address:string|null;

    email:string|null;

    website:string|null;

    logo:string|null;

    employees_count:number;

}



interface Employee {

    id:number;

    first_name:string;

    last_name:string;

    email:string|null;

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

<AuthenticatedLayout
    header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Dashboard
        </h2>
    }
>


<Head title="Dashboard" />



<div className="p-6 space-y-8">


    {/* STAT CARDS */}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


        <div className="
            bg-white
            shadow
            rounded-lg
            p-6
        ">

            <h3 className="text-gray-500">
                Total Companies
            </h3>

            <p className="text-3xl font-bold">
                {stats.companies}
            </p>

        </div>



        <div className="
            bg-white
            shadow
            rounded-lg
            p-6
        ">

            <h3 className="text-gray-500">
                Total Employees
            </h3>

            <p className="text-3xl font-bold">
                {stats.employees}
            </p>

        </div>


    </div>





    {/* COMPANIES */}


    <div className="
        bg-white
        shadow
        rounded-lg
        p-6
    ">


        <div className="
            flex
            justify-between
            mb-5
        ">

            <h2 className="text-xl font-bold">
                Companies
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





        <div className="space-y-4">


        {
            companies.map((company)=>(

                <div
                    key={company.id}
                    className="
                        flex
                        items-center
                        gap-4
                        border-b
                        pb-4
                    "
                >


                    {
                        company.logo ?

                        <img

                            src={`/storage/${company.logo}`}

                            className="
                                w-14
                                h-14
                                rounded-lg
                                object-cover
                                border
                            "

                        />

                        :

                        <div
                            className="
                                w-14
                                h-14
                                rounded-lg
                                bg-gray-200
                                flex
                                items-center
                                justify-center
                                text-xs
                                text-gray-500
                            "
                        >
                            No Logo
                        </div>

                    }





                    <div>

                        <h3 className="font-semibold">

                            {company.name}

                        </h3>


                        <p className="text-sm text-gray-600">

                            {company.address ?? '-'}

                        </p>


                        <p className="text-sm text-gray-500">

                            Employees:
                            {' '}
                            {company.employees_count}

                        </p>


                    </div>



                </div>


            ))
        }


        </div>


    </div>






    {/* EMPLOYEES */}


    <div className="
        bg-white
        shadow
        rounded-lg
        p-6
    ">


        <div className="
            flex
            justify-between
            mb-5
        ">


            <h2 className="text-xl font-bold">

                Employees

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





        <div className="overflow-x-auto">


            <table className="w-full">


                <thead>

                    <tr className="
                        text-left
                        border-b
                    ">


                        <th className="p-3">
                            Name
                        </th>


                        <th className="p-3">
                            Company
                        </th>


                        <th className="p-3">
                            Email
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
                                    employee.email ?? '-'
                                }

                            </td>



                        </tr>


                    ))
                }


                </tbody>


            </table>


        </div>



    </div>




</div>



</AuthenticatedLayout>


);

}