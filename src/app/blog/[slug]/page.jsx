import Image from "next/image"
import style from "./singlePost.module.css"
const SinglePostPage = ({params,searchParams}) =>{
    console.log(params)
    return(
        <div className={style.container}>
            <div className={style.imgContainer}>
                <Image src="https://img.freepik.com/foto-gratis/persona-cerca-planta-energia-alternativa_23-2149192730.jpg?t=st=1721758891~exp=1721762491~hmac=8547652dc7989993a80b0554a00051fd962b4b00487ae1011cb2c561bf3b9c03&w=996" 
                className={style.img} alt="" fill/>
            </div>
            <div className={style.textContainer}>
                <h1 className={style.title}>Titulo</h1>
                <div className={style.detail}>
                    <Image className={style.avatar} src="https://img.freepik.com/foto-gratis/persona-cerca-planta-energia-alternativa_23-2149192730.jpg?t=st=1721758891~exp=1721762491~hmac=8547652dc7989993a80b0554a00051fd962b4b00487ae1011cb2c561bf3b9c03&w=996" 
                    alt="" height={50} width={50}/>
                    <div className={style.detailText}>
                    <span className={style.detailTitle}>Autor</span>
                    <span className={style.detailValue}>David Chaparro</span>
                </div>
                <div className={style.detailText}>
                    <span className={style.detailTitle}>Publicado</span>
                    <span className={style.detailValue}>23/07/2024</span>
                </div>
                </div>
               
                <div className={style.content}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Iste omnis, earum atque culpa nulla officiis repudiandae 
                    iusto et repellat sit sunt soluta. Est, dolore omnis? Iusto quo voluptatibus nam aspernatur.
                </div>

            </div>
        </div>
    )
        
}

export default SinglePostPage 