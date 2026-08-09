import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';



export default function Create({companies}:any)
{


const form = useForm({

    first_name:'',

    last_name:'',

    company_id:'',

    email:'',

    phone:''

});





function submit(e:any)
{


e.preventDefault();


form.post(
route('employees.store')
);


}






return (

<AuthenticatedLayout>


<Head title="Create Employee"/>


<div className="p-6">


<div className="bg-white p-6 rounded shadow w-[500px]">


<h1 className="text-xl font-bold mb-5">

Create Employee

</h1>





<form onSubmit={submit}>


<input

className="border p-2 w-full mb-3"

placeholder="First Name"

onChange={
e=>form.setData(
'first_name',
e.target.value
)
}

/>




<input

className="border p-2 w-full mb-3"

placeholder="Last Name"

onChange={
e=>form.setData(
'last_name',
e.target.value
)
}

/>






<select

className="border p-2 w-full mb-3"

onChange={
e=>form.setData(
'company_id',
e.target.value
)
}

>


<option>

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

className="border p-2 w-full mb-3"

placeholder="Email"

onChange={
e=>form.setData(
'email',
e.target.value
)
}

/>







<input

className="border p-2 w-full mb-3"

placeholder="Phone"

onChange={
e=>form.setData(
'phone',
e.target.value
)
}

/>






<button

className="
bg-green-600
text-white
px-5
py-2
rounded
"

>

Save Employee

</button>





</form>


</div>


</div>


</AuthenticatedLayout>

);


}