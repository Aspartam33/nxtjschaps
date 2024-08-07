import PostCard from '@/components/postCard/postCard'
import sty from './blog.module.css'
import { getPosts } from '@/lib/data'
const getData = async ()=>{
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts",{next:{revalidate:3600}})
    if(!resp.ok){
        throw new Error ("Something went wrong")
       
    }
    const data = await resp.json()
    return data
}
const BlogPage = async() =>{
    const posts = await getPosts()
    return(
        <div className={sty.container}>
           {
            posts.map((post)=>(
                <div className={sty.post} key={post.id}>
                <PostCard post={post}/>
                </div>
            ))
           }
           
           
        </div>
    )
        
}

export default BlogPage 