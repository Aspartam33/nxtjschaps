import style from "./contact.module.css"
import Image from "next/image"
const ContactPage = () =>{
    return(
        <div className={style.container}>
            <div className={style.imgContainer}>
                <Image src="/contact.png"  className={style.img} alt="" width={500} height={300}/>
            </div>
            <div className={style.contactForm}>
                <form action="" className={style.form}>
                    <input type="text" placeholder="Nombre y apellido"/>
                    <input type="text" placeholder="Correo electrónico" />
                    <input type="text" placeholder="Número de teléfono"/>
                   <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <button type="submit">Enivar</button>
                </form>
            </div>
        </div>
    )
        
}

export default ContactPage