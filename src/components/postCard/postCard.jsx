import Link from "next/link"
import style from "./postCard.module.css"
import Image from "next/image"
const PostCard = () =>{
    return(
        <div className={style.container}>
        <div className={style.top}>
            <div className={style.imgContainer}>
                <Image src="https://img.freepik.com/foto-gratis/persona-cerca-planta-energia-alternativa_23-2149192730.jpg?t=st=1721758891~exp=1721762491~hmac=8547652dc7989993a80b0554a00051fd962b4b00487ae1011cb2c561bf3b9c03&w=996" alt="" fill className={style.img} />
            </div>
            <span className={style.date}>23.07.2024</span>
        </div>
        <div className={style.bottom}>
            <h1 className={style.title}>Titulo</h1>
            <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsum repellendus error quasi non. Molestias, expedita. 
                Vel saepe alias obcaecati accusamus labore quia quae harum fugiat nisi, deleniti placeat nobis deserunt.</p>
            <Link href="/blog/post" className={style.link}>Ver mas</Link>
        
        </div>
    </div>
    )
   
}

export default PostCard