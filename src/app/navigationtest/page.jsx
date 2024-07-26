"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
const NavigationPageTest = () =>{
    /*navegacio lado del cliente*/ 
    const router = useRouter()
    const pathName = usePathname()
    const serachParams = useSearchParams()
    const q = serachParams.get("q")
    console.log(q)
    let handleClick = () =>{
        console.log("clickeado")
        //router.push("/")
        //router.replace("/")
        //router.refresh()
        //router.back()
        router.forward()
    }
return(
  
    <div>
        <Link href="/" prefetch={false}>Clic aquí</Link>
        <button onClick={handleClick}>Escribe y reedirige</button>
        </div>
)
}

export default NavigationPageTest