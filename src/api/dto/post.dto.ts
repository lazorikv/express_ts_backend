export type CreatePostDTO = {
    title: string;
    content: string;
    userId: number;
}

export type UpdatePostDTO = CreatePostDTO