import Post from "@/components/Post";

export default function Posts() {
    const posts:Post[] = [
        {
            id: '1',
            username: 'John',
            userImg: 'https://celes.club/collections/uploads/posts/2024-02/1709038010_celes-club-p-znachok-punkta-instagram-69.png',
            img: 'https://images.unsplash.com/photo-1730829807497-9c5b8c9c41c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: 'Some text here'
        },
        {
            id: '2',
            username: 'John2',
            userImg: 'https://celes.club/collections/uploads/posts/2024-02/1709038010_celes-club-p-znachok-punkta-instagram-69.png',
            img: 'https://images.unsplash.com/photo-1730774487035-05673e0c5747?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: 'Some text here'
        }
    ]
    return (
        <>
            <div>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        username = {post.username}
                        userImg = {post.userImg}
                        img = {post.img}
                        caption = {post.caption}
                    />
                ))}
            </div>
        </>
    )
}

//types
export type Post = {
    id: string;
    username: string;
    userImg: string;
    img: string;
    caption: string;
}