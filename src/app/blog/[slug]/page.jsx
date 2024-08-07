import Image from "next/image"
import style from "./singlePost.module.css"
import PostUser from "@/components/postUser/postUser"
import { Suspense } from "react"
import { getPost } from "@/lib/data"
/*
const getData = async (slug)=>{
    console.log("hi" + slug)
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    if(!resp.ok){
        throw new Error ("Something went wrong")
       
    }
    
    const data = await resp.json()
    console.log(data)
    return data
    
}*/
const SinglePostPage = async ({params,searchParams}) =>{
 
    const {slug} = params
     //con api
    //const post = await getData(slug)
    const post = await getPost(slug)
    console.log("titulo"+post.title)
  
    return(
        <div className={style.container}>
        {post.image &&   <div className={style.imgContainer}>

                 <Image src={post.image} 
className={style.img} alt="" fill/>
            </div>}
          
            <div className={style.textContainer}>
                <h1 className={style.title}>{post.title}</h1>
                <div className={style.detail}>
              
                    <Image className={style.avatar} src="https://img.freepik.com/foto-gratis/persona-cerca-planta-energia-alternativa_23-2149192730.jpg?t=st=1721758891~exp=1721762491~hmac=8547652dc7989993a80b0554a00051fd962b4b00487ae1011cb2c561bf3b9c03&w=996" 
                    alt="" height={50} width={50}/>
                    <Suspense fallback={<div>Cargando ...</div>}>
                     <PostUser userId = {post.userId}/>
                    </Suspense>
                 
                <div className={style.detailText}>
                    <span className={style.detailTitle}>Publicado</span>
                    <span className={style.detailValue}>{post.createdAt.toString()}</span>
                </div>
                </div>
               
                <div className={style.content}>
                   {post.desc}
                </div>

            </div>
        </div>
    )
        
}

export default SinglePostPage 