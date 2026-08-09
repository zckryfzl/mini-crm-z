import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';


export default function Create()
{

    const {
        data,
        setData,
        post,
        errors,
        processing,
        reset

    } = useForm({

        name:'',
        address:'',
        email:'',
        website:'',
        logo:null as File | null,

    });


    const [preview,setPreview] = useState<string|null>(null);



    function submit(e:React.FormEvent)
    {

        e.preventDefault();


        post(

            route('companies.store'),

            {

                forceFormData:true,


                preserveScroll:true,


                onSuccess:()=>{

                    reset();

                    setPreview(null);

                },


                onError:(errors)=>{

                    console.log(errors);

                }

            }

        );

    }




    function handleLogo(
        e:React.ChangeEvent<HTMLInputElement>
    )
    {

        const file = e.target.files?.[0] ?? null;


        setData(
            'logo',
            file
        );


        if(file)
        {

            setPreview(
                URL.createObjectURL(file)
            );

        }


    }




    return (

        <AuthenticatedLayout>


            <Head title="Create Company"/>



            <div className="max-w-3xl mx-auto p-8">


                <div className="bg-white shadow rounded-xl p-8">


                    <div className="flex justify-between items-center mb-8">


                        <h1 className="text-2xl font-bold">

                            Create Company

                        </h1>



                        <Link

                            href={route('companies.index')}

                            className="
                            border
                            px-4
                            py-2
                            rounded
                            hover:bg-gray-100
                            "

                        >

                            Back

                        </Link>


                    </div>





                    <form

                        onSubmit={submit}

                        encType="multipart/form-data"

                        className="space-y-6"

                    >




                        {/* NAME */}

                        <div>


                            <label className="block font-medium mb-2">

                                Company Name *

                            </label>


                            <input

                                type="text"

                                className="
                                border
                                rounded
                                w-full
                                p-3
                                "

                                value={data.name}

                                onChange={
                                    e=>
                                    setData(
                                        'name',
                                        e.target.value
                                    )
                                }

                            />


                            {
                                errors.name &&

                                <p className="text-red-500 text-sm mt-1">

                                    {errors.name}

                                </p>
                            }


                        </div>






                        {/* ADDRESS */}

                        <div>


                            <label className="block font-medium mb-2">

                                Address

                            </label>


                            <input

                                type="text"

                                className="
                                border
                                rounded
                                w-full
                                p-3
                                "

                                value={data.address}

                                onChange={
                                    e=>
                                    setData(
                                        'address',
                                        e.target.value
                                    )
                                }

                            />


                            {
                                errors.address &&

                                <p className="text-red-500 text-sm mt-1">

                                    {errors.address}

                                </p>

                            }


                        </div>






                        {/* EMAIL */}

                        <div>


                            <label className="block font-medium mb-2">

                                Email

                            </label>


                            <input

                                type="email"

                                className="
                                border
                                rounded
                                w-full
                                p-3
                                "

                                value={data.email}

                                onChange={
                                    e=>
                                    setData(
                                        'email',
                                        e.target.value
                                    )
                                }

                            />


                            {
                                errors.email &&

                                <p className="text-red-500 text-sm mt-1">

                                    {errors.email}

                                </p>

                            }


                        </div>







                        {/* WEBSITE */}

                        <div>


                            <label className="block font-medium mb-2">

                                Website

                            </label>


                            <input

                                type="text"

                                className="
                                border
                                rounded
                                w-full
                                p-3
                                "

                                value={data.website}

                                onChange={
                                    e=>
                                    setData(
                                        'website',
                                        e.target.value
                                    )
                                }

                            />


                            {
                                errors.website &&

                                <p className="text-red-500 text-sm mt-1">

                                    {errors.website}

                                </p>

                            }


                        </div>







                        {/* LOGO */}

                        <div>


                            <label className="block font-medium mb-2">

                                Company Logo

                                <span className="text-gray-500 text-sm">

                                    {" "}(Minimum 100x100)

                                </span>

                            </label>



                            <input

                                type="file"

                                accept="image/*"

                                onChange={handleLogo}

                                className="
                                border
                                rounded
                                p-2
                                w-full
                                "

                            />



                            {
                                preview &&

                                <div className="mt-4">


                                    <p className="text-sm mb-2">

                                        Preview:

                                    </p>


                                    <img

                                        src={preview}

                                        className="
                                        w-32
                                        h-32
                                        object-cover
                                        rounded
                                        border
                                        "

                                    />


                                </div>

                            }



                            {
                                errors.logo &&

                                <p className="text-red-500 text-sm mt-2">

                                    {errors.logo}

                                </p>

                            }


                        </div>








                        {/* BUTTON */}


                        <button

                            type="submit"

                            disabled={processing}


                            className="
                            bg-green-600
                            text-white
                            px-6
                            py-3
                            rounded-lg
                            hover:bg-green-700
                            disabled:opacity-50
                            "

                        >


                            {
                                processing

                                ?

                                'Saving...'

                                :

                                'Save Company'

                            }


                        </button>



                    </form>


                </div>


            </div>



        </AuthenticatedLayout>


    );

}