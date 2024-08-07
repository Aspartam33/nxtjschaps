import Link from "next/link"
import style from "./postCard.module.css"
import Image from "next/image"
const PostCard = ({post}) =>{
    return(
        <div className={style.container}>
        <div className={style.top}>
            {post.image &&     <div className={style.imgContainer}>
                <Image src={post.image} alt="" fill className={style.img} />
            </div> }
        
            <span className={style.date}>23.07.2024</span>
        </div>
        <div className={style.bottom}>
            <h1 className={style.title}>{post.title}</h1>
            <p className={style.description}>{post.body}</p>
            <Link href={`/blog/${post.slug}`} className={style.link}>Ver mas</Link>
        
        </div>
    </div>
    )
   
}

export default PostCard