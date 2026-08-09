import { Link } from '@inertiajs/react';


export default function ApplicationLogo(
    props:any
){

return (

<Link href="/dashboard">

<img

src="/images/zairilogo.png"

className="
h-10
w-auto
object-contain
"

{...props}

/>

</Link>

);

}