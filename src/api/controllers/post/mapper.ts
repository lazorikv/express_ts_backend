import { PostOutput } from "../../../db/models/post";
import { Post } from "../../interfaces";


export const toPost = (post: PostOutput): Post => {
    return {
    id: post.id,
    title: post.title,
    content: post.content,
    userId: post.userId
    }
}