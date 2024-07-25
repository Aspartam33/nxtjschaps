import Image from "next/image"
import style from "./singlePost.module.css"
const SinglePostPage = () =>{
    return(
        <div className={style.container}>
            <div className={style.imgContainer}>
                <Image src="https://img.freepik.com/foto-gratis/familia-joven-sus-hijos-casa-divirtiendose_1303-20999.jpg?t=st=1721747075~exp=1721750675~hmac=f45ed84c684c24194161e556ff69ef550abd273f97c1916eafcdda0eb1d305cc&w=996" 
                className={style.img} alt="" fill/>
            </div>
            <div className={style.textContainer}>
                <h1 className={style.title}>Titulo</h1>
                <div className={style.detail}>
                    <Image className={style.avatar} src="https://img.freepik.com/foto-gratis/familia-joven-sus-hijos-casa-divirtiendose_1303-20999.jpg?t=st=1721747075~exp=1721750675~hmac=f45ed84c684c24194161e556ff69ef550abd273f97c1916eafcdda0eb1d305cc&w=996" 
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