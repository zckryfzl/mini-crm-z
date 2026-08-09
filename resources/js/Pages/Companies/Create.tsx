import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';


export default function Create() {


    const {
        data,
        setData,
        post,
        errors,
        processing,
        reset

    } = useForm({

        name: '',
        address: '',
        email: '',
        website: '',
        logo: null as File | null,

    });



    function submit(e: React.FormEvent) {

        e.preventDefault();


        post(route('companies.store'), {

            forceFormData: true,


            onSuccess: () => {

                console.log("Company created");

                reset();

            },


            onError: (errors) => {

                console.log(errors);

            }


        });

    }





    return (

        <AuthenticatedLayout>


            <Head title="Create Company" />


            <div className="p-6 max-w-xl">


                <h1 className="text-2xl font-bold mb-6">
                    Create Company
                </h1>




                <form
                    onSubmit={submit}
                    encType="multipart/form-data"
                    className="space-y-5"
                >




                    {/* Company Name */}

                    <div>

                        <label className="block mb-1">
                            Company Name *
                        </label>


                        <input

                            type="text"

                            className="border rounded w-full p-2"

                            value={data.name}

                            onChange={(e)=>
                                setData(
                                    'name',
                                    e.target.value
                                )
                            }

                        />


                        {errors.name && (

                            <p className="text-red-500 text-sm">

                                {errors.name}

                            </p>

                        )}


                    </div>






                    {/* Email */}

                    <div>


                        <label className="block mb-1">
                            Email
                        </label>


                        <input

                            type="email"

                            className="border rounded w-full p-2"

                            value={data.email}

                            onChange={(e)=>
                                setData(
                                    'email',
                                    e.target.value
                                )
                            }

                        />


                        {errors.email && (

                            <p className="text-red-500 text-sm">

                                {errors.email}

                            </p>

                        )}


                    </div>







                    {/* Website */}

                    <div>


                        <label className="block mb-1">
                            Website
                        </label>


                        <input

                            type="text"

                            className="border rounded w-full p-2"

                            value={data.website}

                            onChange={(e)=>
                                setData(
                                    'website',
                                    e.target.value
                                )
                            }

                        />


                        {errors.website && (

                            <p className="text-red-500 text-sm">

                                {errors.website}

                            </p>

                        )}


                    </div>








                    {/* Logo Upload */}

                    <div>


                        <label className="block mb-1">

                            Company Logo

                        </label>



                        <input

                            type="file"

                            accept="image/png,image/jpeg,image/jpg,image/webp"


                            onChange={(e)=>{


                                const file =
                                    e.target.files?.[0] ?? null;



                                console.log(
                                    "Selected file:",
                                    file
                                );


                                setData(
                                    'logo',
                                    file
                                );


                            }}


                        />



                        {data.logo && (

                            <p className="text-sm mt-2 text-gray-600">

                                Selected:
                                {' '}
                                {data.logo.name}

                            </p>

                        )}




                        {errors.logo && (

                            <p className="text-red-500 text-sm">

                                {errors.logo}

                            </p>

                        )}



                    </div>









                    {/* Button */}

                    <button

                        type="submit"

                        disabled={processing}


                        className="
                            bg-black
                            text-white
                            px-5
                            py-2
                            rounded
                            disabled:opacity-50
                        "


                    >

                        {processing
                            ? "Saving..."
                            : "Save Company"
                        }


                    </button>



                </form>


            </div>



        </AuthenticatedLayout>


    );

}