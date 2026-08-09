import { ReactNode } from "react";


interface ModalProps {

    show: boolean;

    title?: string;

    children: ReactNode;

    onClose: () => void;

}



export default function Modal({

    show,

    title,

    children,

    onClose

}: ModalProps) {


    if (!show) return null;



    return (

        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/40
            "
        >


            <div
                className="
                    bg-white
                    rounded-lg
                    shadow-xl
                    w-full
                    max-w-lg
                    p-6
                "
            >


                <div
                    className="
                        flex
                        justify-between
                        items-center
                        mb-5
                    "
                >


                    {
                        title && (

                            <h2
                                className="
                                    text-xl
                                    font-semibold
                                "
                            >
                                {title}
                            </h2>

                        )
                    }



                    <button

                        type="button"

                        onClick={onClose}

                        className="
                            text-gray-500
                            hover:text-black
                            text-xl
                        "

                    >

                        ×

                    </button>



                </div>



                {children}



            </div>


        </div>

    );

}