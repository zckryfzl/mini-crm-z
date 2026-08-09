import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';



export default function Create({companies}:any)
{


const {
    data,
    setData,
    post,
    errors,
    processing
}=useForm({

    first_name:'',
    last_name:'',
    company_id:'',
    email:'',
    phone:''

});





function submit(e:React.FormEvent)
{

    e.preventDefault();


    post(
        route('employees.store'),
        {

            preserveScroll:true

        }
    );


}






return (

<AuthenticatedLayout>


<Head title="Create Employee"/>



<div className="
p-6
max-w-xl
mx-auto
">



<div className="
bg-white
shadow
rounded-xl
p-6
">


<h1 className="
text-2xl
font-bold
mb-6
">

Create Employee

</h1>





<form
onSubmit={submit}
className="
space-y-5
">



<div>

<label className="block mb-1">

First Name *

</label>


<input

className="
border
rounded
w-full
p-2
"

value={data.first_name}

onChange={(e)=>

setData(
'first_name',
e.target.value
)

}

/>


{
errors.first_name &&

<p className="text-red-500 text-sm">

{errors.first_name}

</p>

}


</div>







<div>

<label className="block mb-1">

Last Name *

</label>


<input

className="
border
rounded
w-full
p-2
"

value={data.last_name}

onChange={(e)=>

setData(
'last_name',
e.target.value
)

}

/>


{
errors.last_name &&

<p className="text-red-500 text-sm">

{errors.last_name}

</p>

}


</div>







<div>


<label className="block mb-1">

Company *

</label>


<select

className="
border
rounded
w-full
p-2
"

value={data.company_id}

onChange={(e)=>

setData(
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


</div>







<div>

<label className="block mb-1">

Email

</label>


<input

type="email"

className="
border
rounded
w-full
p-2
"

value={data.email}

onChange={(e)=>

setData(
'email',
e.target.value
)

}

/>


</div>








<div>

<label className="block mb-1">

Phone

</label>


<input

className="
border
rounded
w-full
p-2
"

value={data.phone}

onChange={(e)=>

setData(
'phone',
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
rounded-lg
disabled:opacity-50
"

>


{
processing
?
'Saving...'
:
'Save Employee'

}


</button>






</form>



</div>



</div>



</AuthenticatedLayout>


);


}