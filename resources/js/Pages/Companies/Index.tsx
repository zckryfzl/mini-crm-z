import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { useState } from 'react';



export default function Index({companies}:any)
{


const [editing,setEditing] = useState<any>(null);



const form = useForm({

    name:'',
    address:'',
    email:'',
    website:'',
    logo:null as File|null

});





function openEdit(company:any)
{

    setEditing(company);


    form.setData({

        name:company.name ?? '',

        address:company.address ?? '',

        email:company.email ?? '',

        website:company.website ?? '',

        logo:null

    });

}





function submit(e:any)
{

    e.preventDefault();


    form.post(
        route(
            'companies.update',
            editing.id
        ),
        {

            forceFormData:true,

            onSuccess:()=>{

                setEditing(null);

            }

        }
    );

}





function remove(id:number)
{

    if(confirm('Delete company?'))
    {

        router.delete(
            route(
                'companies.destroy',
                id
            )
        );

    }

}





return (

<AuthenticatedLayout>

<Head title="Companies"/>


<div className="p-6">


<div className="bg-white rounded shadow border">


<div className="p-5 border-b">


<h1 className="text-xl font-bold">
Companies
</h1>


</div>




<div className="p-5">


<Link

href="/companies/create"

className="
bg-green-600
text-white
px-5
py-2
rounded
"

>
Create new company
</Link>





<div className="mt-5 overflow-x-auto">


<table className="w-full border">


<thead className="bg-gray-100">


<tr>


<th className="p-3 border">
Name
</th>


<th className="p-3 border">
Address
</th>


<th className="p-3 border">
Email
</th>


<th className="p-3 border">
Website
</th>


<th className="p-3 border">
Action
</th>


</tr>


</thead>




<tbody>


{
companies.data.map((company:any)=>(


<tr key={company.id}>


<td className="border p-3">

{company.name}

</td>


<td className="border p-3">

{company.address}

</td>


<td className="border p-3">

{company.email}

</td>


<td className="border p-3">

{company.website}

</td>


<td className="border p-3">


<button

onClick={()=>openEdit(company)}

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

onClick={()=>remove(company.id)}

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



</div>


</div>


</div>





{
editing &&

<div className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
">


<div className="
bg-white
rounded
p-6
w-[450px]
">


<h2 className="text-xl font-bold mb-4">

Edit Company

</h2>





{
editing.logo ?

<img

src={`/storage/${editing.logo}`}

className="
w-24
h-24
object-cover
mb-4
"

/>

:

<p className="text-gray-500 mb-4">
No logo added
</p>

}






<input

type="file"

className="mb-4"

onChange={(e)=>

form.setData(
'logo',
e.target.files?.[0] ?? null
)

}

/>





<input

className="border w-full p-2 mb-3"

value={form.data.name}

onChange={
e=>form.setData(
'name',
e.target.value
)
}

/>





<input

className="border w-full p-2 mb-3"

value={form.data.address}

onChange={
e=>form.setData(
'address',
e.target.value
)
}

/>





<input

className="border w-full p-2 mb-3"

value={form.data.email}

onChange={
e=>form.setData(
'email',
e.target.value
)
}

/>





<input

className="border w-full p-2 mb-3"

value={form.data.website}

onChange={
e=>form.setData(
'website',
e.target.value
)
}

/>





<button

onClick={submit}

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