import { useAmp } from "next/amp"
import style from "./postUser.module.css"
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
             <span className={style.title}>Autor</span>
             <span className={style.username}>{user.username}</span>
        </div>
    )
}

export default PostUser