import PostCard from '@/components/postCard/postCard'
import sty from './blog.module.css'
const BlogPage = () =>{
    return(
        <div className={sty.container}>
            <div className={sty.post}>
            <PostCard />
            </div>
            <div className={sty.post}>
            <PostCard />
            </div>
            <div className={sty.post}>
            <PostCard />
            </div>
            <div className={sty.post}>
            <PostCard />
            </div>
           
        </div>
    )
        
}

export default BlogPage 