import { Post } from "./models"
import { User } from "./models";
import { connecToDb } from "./utils"

export const getPosts = async ()=>{
    try {
        connecToDb();
        const posts = await Post.find();
        return posts;
        
    } catch (error) {
        throw new Error("failed to fetch posts")
    }
}

export const getPost = async (slug)=>{
    try {
        connecToDb();
        const post = await Post.findOne({slug});
        return post;
        
    } catch (error) {
        throw new Error("failed to fetch posts")
    }
}
export const getUser = async (id) =>{
    try {
        connecToDb();
        let user = await User.findById(id)
        return user
    } catch (error) {
        throw new Error("failed to fetch user")
        
    }
}

export const getUsers = async () =>{
    try {
        connecToDb();
        let users = await User.find()
        return users
    } catch (error) {
        throw new Error("failed to fetch users")
        
    }
}