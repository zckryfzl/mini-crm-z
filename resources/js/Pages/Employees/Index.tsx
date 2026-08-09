import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { useState } from 'react';



export default function Index({employees,companies}:any){


const [editing,setEditing] = useState<any>(null);



const form = useForm({

    first_name:'',
    last_name:'',
    company_id:'',
    email:'',
    phone:''

});





function openEdit(employee:any)
{


    setEditing(employee);



    form.setData({

        first_name:employee.first_name,

        last_name:employee.last_name,

        company_id:String(employee.company_id),

        email:employee.email ?? '',

        phone:employee.phone ?? '',

    });


}






function save(e:any)
{


    e.preventDefault();


    if(!editing)
        return;



    form.put(

        route(
            'employees.update',
            editing.id
        ),

        {


            onSuccess:()=>{

                setEditing(null);

            }


        }

    );


}







function remove(id:number)
{


    if(confirm('Delete employee?'))
    {


        router.delete(

            route(
                'employees.destroy',
                id
            )

        );


    }


}







return (

<AuthenticatedLayout>


<Head title="Employees"/>




<div className="p-6">


<div className="bg-white shadow rounded border">



<div className="p-5 border-b">

<h1 className="text-xl font-bold">

Employees

</h1>

</div>





<div className="p-5">



<Link

href="/employees/create"

className="
bg-green-600
text-white
px-5
py-2
rounded
"

>

Create new employee

</Link>







<div className="mt-5 overflow-x-auto">


<table className="w-full border">


<thead className="bg-gray-100">


<tr>


<th className="border p-3">
First Name
</th>


<th className="border p-3">
Last Name
</th>


<th className="border p-3">
Company
</th>


<th className="border p-3">
Email
</th>


<th className="border p-3">
Phone
</th>


<th className="border p-3">
Action
</th>


</tr>


</thead>





<tbody>



{
employees.data.map((employee:any)=>(


<tr key={employee.id}>


<td className="border p-3">

{employee.first_name}

</td>




<td className="border p-3">

{employee.last_name}

</td>





<td className="border p-3">

{employee.company?.name}

</td>





<td className="border p-3">

{employee.email}

</td>





<td className="border p-3">

{employee.phone}

</td>





<td className="border p-3">



<button

onClick={()=>openEdit(employee)}

className="
bg-blue-600
text-white
px-3
py-1
rounded
mr-2
"

>

Edit

</button>




<button

onClick={()=>remove(employee.id)}

className="
bg-red-600
text-white
px-3
py-1
rounded
"

>

Delete

</button>



</td>


</tr>



))

}



</tbody>


</table>


</div>






<div className="mt-5 flex gap-2">


{

employees.links.map((link:any,index:number)=>(


<a

key={index}

href={link.url ?? '#'}

className={`
px-3
py-1
border
rounded

${link.active
?
'bg-green-600 text-white'
:
'bg-white'
}

`}


dangerouslySetInnerHTML={{

__html:link.label

}}


/>



))

}


</div>



</div>


</div>


</div>








{
editing &&


<div

className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
"

>



<div

className="
bg-white
rounded
shadow
p-6
w-[450px]
"

>



<h2 className="text-xl font-bold mb-5">

Edit Employee

</h2>







<input

className="
border
w-full
p-2
mb-3
"

placeholder="First Name"

value={form.data.first_name}

onChange={
e=>form.setData(
'first_name',
e.target.value
)
}

/>







<input

className="
border
w-full
p-2
mb-3
"

placeholder="Last Name"

value={form.data.last_name}

onChange={
e=>form.setData(
'last_name',
e.target.value
)
}

/>







<select

className="
border
w-full
p-2
mb-3
"

value={form.data.company_id}

onChange={
e=>form.setData(
'company_id',
e.target.value
)
}

>


<option value="">

Select Company

</option>


{
companies.map((company:any)=>(


<option

key={company.id}

value={company.id}

>

{company.name}

</option>


))

}


</select>






<input

className="
border
w-full
p-2
mb-3
"

placeholder="Email"

value={form.data.email}

onChange={
e=>form.setData(
'email',
e.target.value
)
}

/>







<input

className="
border
w-full
p-2
mb-3
"

placeholder="Phone"

value={form.data.phone}

onChange={
e=>form.setData(
'phone',
e.target.value
)
}

/>







<button

onClick={save}

className="
bg-green-600
text-white
px-4
py-2
rounded
mr-2
"

>

Save

</button>






<button

onClick={()=>setEditing(null)}

className="
border
px-4
py-2
rounded
"

>

Cancel

</button>



</div>


</div>


}





</AuthenticatedLayout>


);


}