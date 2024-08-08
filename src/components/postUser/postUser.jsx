import { useAmp } from "next/amp"
import style from "./postUser.module.css"
import Image from "next/image"
import { getUser } from "@/lib/data"
const getData = async (userID)=>{
    console.log("usuario" + userID)
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    if(!resp.ok){
        throw new Error ("Something went wrong")
       
    }
    
    const data = await resp.json()
    console.log(data)
    return data
    
}
const PostUser = async ({userId}) =>{
    
   // const user = await getData(userId)
   console.log(userId)
   
   const user = await getUser(userId)
    return (
        <div className={style.container}>
              <Image className={style.avatar} src={user.image ? user.image : "/noavatar.png"} 
                    alt="" height={50} width={50}/>
             <span className={style.title}>Autor</span>
             <span className={style.username}>{user.username}</span>
        </div>
    )
}

export default PostUser