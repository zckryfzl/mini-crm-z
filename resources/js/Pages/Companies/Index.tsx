import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { useState } from 'react';


interface Company {

    id:number;
    name:string;
    address:string|null;
    email:string|null;
    website:string|null;
    logo:string|null;

}



export default function Index({companies}:any)
{


    const [editing,setEditing] = useState<Company|null>(null);



    const form = useForm<{
        name:string;
        address:string;
        email:string;
        website:string;
        logo:File|null;
    }>({

        name:'',
        address:'',
        email:'',
        website:'',
        logo:null

    });





    function openEdit(company:Company)
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





    function submit()
    {


        if(!editing)
            return;



        form.post(

            route(
                'companies.update',
                editing.id
            ),

            {

                forceFormData:true,


                headers:{
                    'X-HTTP-Method-Override':'PUT'
                },


                preserveScroll:true,


                onSuccess:()=>{

                    setEditing(null);

                    form.reset();

                },


                onError:(errors:any)=>{

                    console.log(errors);

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



<div className="p-8">


<div className="
flex
justify-between
items-center
mb-6
">


<h1 className="
text-3xl
font-bold
">

Companies

</h1>



<Link

href={route('companies.create')}

className="
bg-green-600
text-white
px-5
py-2
rounded
"

>

Create Company

</Link>



</div>





<div className="
bg-white
shadow
rounded-xl
overflow-hidden
">


<table className="
w-full
text-left
">


<thead className="bg-gray-100">


<tr>


<th className="p-4">
Logo
</th>


<th className="p-4">
Name
</th>


<th className="p-4">
Address
</th>


<th className="p-4">
Website
</th>


<th className="p-4">
Email
</th>


<th className="p-4">
Action
</th>


</tr>


</thead>





<tbody>


{

companies.data.map((company:Company)=>(


<tr key={company.id} className="border-t">


<td className="p-4">


{

company.logo ?

<img

src={`/storage/${company.logo}`}

className="
w-12
h-12
object-cover
rounded
"

/>

:

<span className="text-gray-400">

No logo

</span>

}



</td>



<td className="p-4">
{company.name}
</td>


<td className="p-4">
{company.address}
</td>


<td className="p-4">
{company.website}
</td>


<td className="p-4">
{company.email}
</td>



<td className="p-4">


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








{
editing &&

<div className="
fixed
inset-0
bg-black/50
flex
items-center
justify-center
z-50
">


<div className="
bg-white
rounded-xl
p-8
w-full
max-w-xl
">


<h2 className="
text-2xl
font-bold
mb-5
">

Edit Company

</h2>





{

editing.logo ?

<img

src={`/storage/${editing.logo}`}

className="
w-28
h-28
rounded
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

accept="image/*"

className="mb-4"

onChange={(e)=>

form.setData(
'logo',
e.target.files?.[0] ?? null
)

}

/>





<input

className="border w-full p-3 mb-3"

value={form.data.name}

onChange={(e)=>

form.setData(
'name',
e.target.value
)

}

/>



<input

className="border w-full p-3 mb-3"

value={form.data.address}

onChange={(e)=>

form.setData(
'address',
e.target.value
)

}

/>



<input

className="border w-full p-3 mb-3"

value={form.data.email}

onChange={(e)=>

form.setData(
'email',
e.target.value
)

}

/>



<input

className="border w-full p-3 mb-5"

value={form.data.website}

onChange={(e)=>

form.setData(
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
px-5
py-2
rounded
mr-3
"

>

Save

</button>



<button

onClick={()=>setEditing(null)}

className="
border
px-5
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