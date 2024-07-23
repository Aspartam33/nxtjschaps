"use client"
import styles from "./links.module.css"
import NavLink from "../navLink/navLink";
import { useState } from "react";

const links = [
    {
        title:"Inicio",
        path:"/"
    },
    { title:"Nosotros",
        path:"/about"},
    {
         title:"Contacto",
        path:"/contact"
    },
    {
         title:"Blog",
        path:"/blog"
    },
];
const Links = () =>{
    const [open,setOpen] = useState(false)
   
    //temporal
    const session = true
    const isAdmin = true

    const userName = "dave"
    return(
        <div className={styles.container}>
              <div className={styles.links}>
            
            {
                links.map((link=>(
                    <NavLink item={link} key={link.title}/>    
                )))
            }

            {
                session ?
                <>
                    {
                    isAdmin && 
                        <NavLink item={{title:"Ingresa", path:"/login"}} />
                    
                }
                <button className={styles.logout}>Salir</button>
            
                </>  :(
                    <NavLink item={{title:"Ingresa", path:"/login"}} />
                )
            }
        </div>
        <button type="button" onClick={()=>setOpen((prev)=>!prev)} className={styles.menuButton}>Menú</button>
        {
            open && (<div className={styles.mobileLinks}>
                 {
                    links.map((link=>(
                        <NavLink item={link} key={link.title}/>    
                    )))
                 }
            </div>)
        }
        </div>
      
    )
        
}

export default Links 