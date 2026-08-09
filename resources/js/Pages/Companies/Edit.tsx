import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';


export default function Edit({company}:any)
{


const {
    data,
    setData,
    put,
    errors,
    processing

}=useForm({

    name:company.name ?? '',

    address:company.address ?? '',

    email:company.email ?? '',

    website:company.website ?? '',

});




function submit(e:any)
{

    e.preventDefault();


    put(
        route(
            'companies.update',
            company.id
        )
    );


}




return (

<AuthenticatedLayout>


<Head title="Edit Company"/>



<div className="p-6">


<div className="
bg-white
border
rounded
max-w-xl
p-6
">


<h1 className="
text-xl
font-bold
mb-5
">

Edit Company

</h1>





<form
onSubmit={submit}
className="space-y-4"
>



<div>

<label>
Company Name *
</label>


<input

className="
border
w-full
p-2
rounded
"

value={data.name}

onChange={
e=>setData(
'name',
e.target.value
)
}

/>


{errors.name &&

<p className="text-red-500">

{errors.name}

</p>

}


</div>





<div>

<label>
Address
</label>


<input

className="
border
w-full
p-2
rounded
"

value={data.address}

onChange={
e=>setData(
'address',
e.target.value
)
}

/>


</div>







<div>

<label>
Email
</label>


<input

className="
border
w-full
p-2
rounded
"

value={data.email}

onChange={
e=>setData(
'email',
e.target.value
)
}

/>


</div>






<div>

<label>
Website
</label>


<input

className="
border
w-full
p-2
rounded
"

value={data.website}

onChange={
e=>setData(
'website',
e.target.value
)
}

/>


</div>






<button

disabled={processing}

className="
bg-green-600
text-white
px-5
py-2
rounded
"

>

{
processing
?
'Saving...'
:
'Update Company'
}


</button>




</form>


</div>


</div>


</AuthenticatedLayout>


);


}