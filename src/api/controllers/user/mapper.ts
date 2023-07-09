import { User } from "../../interfaces";
import { UserOutput, UserPost } from "../../../db/models/user";


export const toUserPost = (user: UserPost): UserPost => {
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
        Posts: user.Posts
    }
}

export const toUser = (user: UserOutput): UserOutput => {
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt
    }
}

